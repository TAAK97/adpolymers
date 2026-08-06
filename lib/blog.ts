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

      return {
        slug,
        title: data.title || '',
        date: data.date || '',
        category: data.category || 'Engineering',
        excerpt: data.excerpt || '',
        metaDescription: data.metaDescription || '',
        keywords: data.keywords || [],
        content,
        readingTime: data.readingTime || '5 min read',
      } as BlogPost;
    });

  return allPosts.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPostBySlug(slug: string): BlogPost | null {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.md`);
    if (!fs.existsSync(fullPath)) return null;

    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
      slug,
      title: data.title || '',
      date: data.date || '',
      category: data.category || 'Engineering',
      excerpt: data.excerpt || '',
      metaDescription: data.metaDescription || '',
      keywords: data.keywords || [],
      content,
      readingTime: data.readingTime || '5 min read',
    } as BlogPost;
  } catch {
    return null;
  }
}