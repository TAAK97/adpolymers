'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import Link from 'next/link';
import { analyse } from '@/lib/estimator';
import { flangedBushing } from '@/lib/meshes';
import { useMeshViewer } from '@/lib/useMeshViewer';

/** Slowly spinning 3D part for the homepage hero. Drag to rotate. */
export default function HeroPart() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const tris = useMemo(() => flangedBushing(), []);
  const geo = useMemo(() => analyse(tris), [tris]);
  const [reduce, setReduce] = useState(false);
  useEffect(() => {
    setReduce(window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  }, []);
  useMeshViewer(canvasRef, tris, geo, { spin: reduce ? 0 : 0.006, fill: 0.72 });

  return (
    <figure className="relative">
      <div className="relative aspect-square rounded-3xl border border-slate-800 bg-slate-900/50 bg-tech-grid overflow-hidden shadow-[0_0_60px_rgba(34,211,238,0.12)]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(34,211,238,0.18),transparent_60%)] pointer-events-none" />
        <canvas ref={canvasRef} className="absolute inset-0 w-full h-full touch-none cursor-grab" aria-label="3D model of a flanged plastic bushing" />
        <span className="absolute top-4 left-4 text-[11px] font-mono uppercase tracking-widest text-cyan-300 bg-slate-950/70 border border-cyan-500/20 rounded-md px-2.5 py-1">
          Live 3D · drag to rotate
        </span>
      </div>
      <figcaption className="mt-3 flex flex-wrap items-center justify-between gap-2 text-sm text-slate-400">
        <span>Example: flanged POM bushing</span>
        <Link href="/tools/instant-quote" className="text-cyan-400 font-semibold hover:underline">
          Upload your own part &rarr;
        </Link>
      </figcaption>
    </figure>
  );
}
