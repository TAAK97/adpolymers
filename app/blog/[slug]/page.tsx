import { getPostBySlug } from '@/lib/blog';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Clock, Calendar, Tag } from 'lucide-react';
import BlogDiscussion from '@/components/BlogDiscussion'; // Import Discussion Component

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

  return (
    <article className="max-w-4xl mx-auto px-4 py-12">
      {/* Back Link */}
      <div className="mb-8">
        <Link 
          href="/journal" 
          className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          {"Back to Journal Index"}
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
      </header>

      {/* Render Content */}
      <div 
        className="prose prose-invert max-w-none my-10" 
        dangerouslySetInnerHTML={{ __html: post.content }} 
      />

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
      <BlogDiscussion />
    </article>
  );
}