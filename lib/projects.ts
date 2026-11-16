import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

// Project case studies live in content/projects/*.md (see content/projects/README.md).
const dir = path.join(process.cwd(), 'content/projects');

export interface Project {
  slug: string;
  title: string;
  date: string;
  industry: string; // must match an INDUSTRIES slug in lib/catalog.ts
  client: string;
  material: string;
  process: string;
  partWeight: string;
  volume: string;
  tolerance: string;
  summary: string;
  metaDescription: string;
  images: { src: string; alt: string }[];
  keywords: string[];
  draft: boolean;
  content: string;
}

function read(file: string): Project {
  const { data, content } = matter(fs.readFileSync(path.join(dir, file), 'utf8'));
  return {
    slug: file.replace(/\.md$/, ''),
    title: data.title ?? '',
    date: String(data.date ?? ''),
    industry: data.industry ?? '',
    client: data.client ?? '',
    material: data.material ?? '',
    process: data.process ?? '',
    partWeight: data.partWeight ?? '',
    volume: data.volume ?? '',
    tolerance: data.tolerance ?? '',
    summary: data.summary ?? '',
    metaDescription: data.metaDescription ?? data.summary ?? '',
    images: Array.isArray(data.images) ? data.images : [],
    keywords: Array.isArray(data.keywords) ? data.keywords : [],
    draft: data.draft === true,
    content,
  };
}

/** Published projects, newest first. Files starting with "_" and drafts are skipped. */
export function getAllProjects(): Project[] {
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith('.md') && !f.startsWith('_') && f !== 'README.md')
    .map(read)
    .filter((p) => !p.draft)
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getProject(slug: string): Project | null {
  return getAllProjects().find((p) => p.slug === slug) ?? null;
}
