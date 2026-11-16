import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'content/blog');

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  category: string;
  excerpt: string;
  metaDescription: string;
  keywords: string[];
  content: string;
  readingTime: string;
  author: string;
  updated: string;
  faqs: { q: string; a: string }[];
}

// Builds a post from front matter. Old files without author/faqs still work.
const day = (v: unknown) => (v instanceof Date ? v.toISOString().slice(0, 10) : String(v ?? ''));

function toPost(slug: string, data: Record<string, unknown>, content: string): BlogPost {
  const words = content.split(/\s+/).filter(Boolean).length;
  return {
    slug,
    title: String(data.title ?? ''),
    date: day(data.date),
    category: String(data.category ?? 'Engineering'),
    excerpt: String(data.excerpt ?? ''),
    metaDescription: String(data.metaDescription ?? data.excerpt ?? ''),
    keywords: Array.isArray(data.keywords) ? (data.keywords as string[]) : [],
    content,
    readingTime: String(data.readingTime ?? `${Math.max(1, Math.round(words / 220))} min read`),
    author: String(data.author ?? 'harish-kumar'),
    updated: day(data.updated ?? data.date),
    faqs: Array.isArray(data.faqs) ? (data.faqs as { q: string; a: string }[]) : [],
  };
}

export function getAllPosts(): BlogPost[] {
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(postsDirectory);
  const allPosts = fileNames
    .filter((fileName) => fileName.endsWith('.md'))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, '');
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data, content } = matter(fileContents);
      return toPost(slug, data, content);
    })
    .filter((p) => p.title && !/^_/.test(p.slug));

  return allPosts.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPostBySlug(slug: string): BlogPost | null {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.md`);
    if (!fs.existsSync(fullPath)) return null;

    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);
    return toPost(slug, data, content);
  } catch {
    return null;
  }
}