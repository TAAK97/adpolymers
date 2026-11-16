import { getAllPosts, getPostBySlug } from '@/lib/blog';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { markdownToHtml } from '@/lib/markdown';
import { pageMeta } from '@/lib/seo';
import { ORG_ID, SITE } from '@/lib/site';
import { Breadcrumbs, FaqSection, StructuredData } from '@/app/components/PageParts';
import { findAuthor, personSchema } from '@/lib/authors';
import Link from 'next/link';
import { ArrowLeft, Clock, Calendar, Tag } from 'lucide-react';
import BlogDiscussion from '@/app/components/BlogDiscussion';

export function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const post = getPostBySlug((await params).slug);
  if (!post) return {};
  return pageMeta({
    title: post.title,
    description: post.metaDescription || post.excerpt,
    path: `/blog/${post.slug}`,
    type: 'article',
  });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;
  const post = getPostBySlug(resolvedParams.slug);

  if (!post) {
    notFound();
  }

  const path = `/blog/${post.slug}`;
  const author = findAuthor(post.author);

  return (
    <>
    <StructuredData
      nodes={[{
        '@type': 'BlogPosting',
        headline: post.title,
        description: post.metaDescription || post.excerpt,
        datePublished: post.date,
        dateModified: post.updated || post.date,
        image: [`${SITE.url}/og-image.png`],
        author: personSchema(author),
        publisher: { '@id': ORG_ID },
        mainEntityOfPage: `${SITE.url}${path}`,
        keywords: post.keywords.join(', '),
      }]}
    />
    <Breadcrumbs crumbs={[{ name: 'Home', path: '/' }, { name: 'Blog', path: '/blog' }, { name: post.title, path }]} />
    <article className="max-w-4xl mx-auto px-4 py-12">
      {/* Back Link */}
      <div className="mb-8">
        <Link 
          href="/blog" 
          className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          {"Back to the blog"}
        </Link>
      </div>

      {/* Header Meta */}
      <header className="mb-8 space-y-4">
        <div className="flex flex-wrap items-center gap-4 text-xs font-semibold uppercase tracking-wider text-slate-400">
          <span className="rounded-md bg-blue-500/10 px-2.5 py-1 text-blue-400 border border-blue-500/20">
            {post.category}
          </span>
          
          <span className="flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5" />
            {post.date}
          </span>
          
          <span className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5" />
            {post.readingTime}
          </span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
          {post.title}
        </h1>

        <p className="text-lg text-slate-300 leading-relaxed">
          {post.excerpt}
        </p>

        <p className="text-sm text-slate-400">
          By{' '}
          <Link href={`/about#${author.slug}`} className="font-semibold text-slate-200 hover:text-cyan-400">
            {author.name}
          </Link>
          , {author.role}, AD Polymers
          {post.updated && post.updated !== post.date && <> · Updated {post.updated}</>}
        </p>
      </header>

      {/* Render Content */}
      <div 
        className="prose-ad max-w-none my-10"
        dangerouslySetInnerHTML={{ __html: markdownToHtml(post.content) }}
      />

      {post.faqs.length > 0 && (
        <div className="-mx-6">
          <FaqSection faqs={post.faqs} />
        </div>
      )}

      {/* Author box */}
      <div className="my-10 p-6 rounded-2xl bg-slate-900/60 border border-slate-800">
        <p className="text-xs font-mono uppercase tracking-widest text-cyan-400 mb-2">About the author</p>
        <p className="font-bold text-white">{author.name} · {author.role}</p>
        <p className="text-sm text-slate-400 mt-2 leading-relaxed">{author.bio}</p>
      </div>

      {/* Keywords Tag Cloud */}
      {post.keywords && post.keywords.length > 0 && (
        <div className="flex flex-wrap items-center gap-2 pt-6 border-t border-slate-800 my-8">
          <Tag className="w-4 h-4 text-slate-400 mr-1" />
          {post.keywords.map((kw, i) => (
            <span 
              key={i} 
              className="rounded-md bg-slate-800/80 px-2.5 py-1 text-xs text-slate-300 border border-slate-700"
            >
              {kw}
            </span>
          ))}
        </div>
      )}

      {/* Top-Class Technical Discussion Board */}
      <BlogDiscussion articleSlug={resolvedParams.slug} />
    </article>
    </>
  );
}