import Link from 'next/link';
import { getAllPosts } from '@/lib/blog';
import { pageMeta } from '@/lib/seo';

export const metadata = pageMeta({
  title: 'Injection Moulding Engineering Blog – Technical Journal',
  description: 'Technical articles on engineering plastics, resin processing, tooling and OEM quality standards from the AD Polymers moulding team.',
  path: '/blog',
});

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <main className="py-20 max-w-7xl mx-auto px-6">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 border-b border-slate-800 pb-8">
        <div>
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-cyan-400">
            Technical Journal
          </span>
          <h1 className="text-4xl font-black text-white mt-2">
            Moulding Engineering Insights
          </h1>
        </div>
        <p className="text-slate-400 text-sm max-w-md mt-4 md:mt-0">
          Technical compliance guidelines, resin processing specs, and tier-1 OEM manufacturing standards.
        </p>
      </div>

      {posts.length === 0 ? (
        <div className="text-center py-16 bg-slate-900/40 border border-slate-800 rounded-2xl">
          <p className="text-slate-400 text-sm font-mono">No published technical articles found in /content/blog yet.</p>
          <p className="text-xs text-slate-500 mt-2">Run your Python auto-publisher to generate compliance articles.</p>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 gap-8">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="p-8 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-cyan-500/50 transition group block"
            >
              <div className="flex items-center justify-between text-xs text-slate-500 mb-4 font-mono">
                <span className="px-2.5 py-1 bg-slate-950 rounded border border-slate-800 text-cyan-400">
                  {post.category}
                </span>
                <span>{post.date}</span>
              </div>
              <h2 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition">
                {post.title}
              </h2>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                {post.excerpt}
              </p>
              <span className="text-cyan-400 text-xs font-bold font-mono">
                Read Article &rarr; ({post.readingTime})
              </span>
            </Link>
          ))}
        </div>
      )}
    </main>
  );
}