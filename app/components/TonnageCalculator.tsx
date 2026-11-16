'use client';

import { useState } from 'react';
import Link from 'next/link';
import { EST, clampTons, fmt, matById, pickMachine } from '@/lib/estimator';

const input = 'mt-1.5 block w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2.5 text-sm text-white focus:border-cyan-500 focus:outline-none';
const label = 'block text-xs font-semibold text-slate-300';

export default function TonnageCalculator() {
  const [mode, setMode] = useState<'dim' | 'area'>('dim');
  const [l, setL] = useState(60);
  const [w, setW] = useState(40);
  const [area, setArea] = useState(24);
  const [matId, setMatId] = useState(EST.materials[0].id);
  const [cav, setCav] = useState(4);
  const [sf, setSf] = useState(1.15);

  const m = matById(matId);
  const perPart = mode === 'dim' ? (l * w) / 100 : area;
  const tons = clampTons(perPart, cav || 1, m, sf);
  const machine = pickMachine(tons);

  return (
    <div className="grid md:grid-cols-2 gap-8 items-start">
      <form onSubmit={(e) => e.preventDefault()} className="space-y-4 p-6 rounded-2xl border border-slate-800 bg-slate-900/60">
        <fieldset className="flex flex-wrap gap-5 text-sm text-slate-300">
          <legend className={`${label} mb-2`}>Enter part size as</legend>
          <label className="flex items-center gap-2"><input type="radio" checked={mode === 'dim'} onChange={() => setMode('dim')} /> Length × width</label>
          <label className="flex items-center gap-2"><input type="radio" checked={mode === 'area'} onChange={() => setMode('area')} /> Projected area</label>
        </fieldset>
        {mode === 'dim' ? (
          <div className="grid grid-cols-2 gap-4">
            <label className={label}>Length (mm)<input className={input} type="number" min={0} value={l} onChange={(e) => setL(+e.target.value)} /></label>
            <label className={label}>Width (mm)<input className={input} type="number" min={0} value={w} onChange={(e) => setW(+e.target.value)} /></label>
          </div>
        ) : (
          <label className={label}>Projected area per part (cm²)<input className={input} type="number" min={0} value={area} onChange={(e) => setArea(+e.target.value)} /></label>
        )}
        <div className="grid grid-cols-2 gap-4">
          <label className={label}>Material
            <select className={input} value={matId} onChange={(e) => setMatId(e.target.value)}>
              {EST.materials.map((x) => <option key={x.id} value={x.id}>{x.name}</option>)}
            </select>
          </label>
          <label className={label}>Cavities<input className={input} type="number" min={1} max={64} value={cav} onChange={(e) => setCav(+e.target.value)} /></label>
        </div>
        <label className={label}>Safety factor
          <select className={input} value={sf} onChange={(e) => setSf(+e.target.value)}>
            <option value={1.1}>1.10 (simple parts)</option>
            <option value={1.15}>1.15 (typical)</option>
            <option value={1.25}>1.25 (thin walls / long flow)</option>
          </select>
        </label>
      </form>

      <div className="p-6 rounded-2xl border border-slate-800 bg-slate-900/80">
        <h2 className="text-lg font-bold text-white mb-3">Result</h2>
        {[
          ['Total projected area', `${fmt(perPart * (cav || 1), 1)} cm²`],
          ['Material factor', `${fmt(m.clamp, 2)} t/cm² (${fmt(m.clamp * 6.4516, 1)} t/in²)`],
        ].map(([k, v]) => (
          <div key={k} className="flex justify-between py-2.5 border-b border-slate-800/80 text-sm"><span className="text-slate-400">{k}</span><span className="font-semibold text-white">{v}</span></div>
        ))}
        <div className="flex justify-between py-3 border-b border-slate-800/80"><span className="text-slate-400 text-sm">Clamping force required</span><span className="text-2xl font-black text-cyan-400">{fmt(tons, 1)} T</span></div>
        <div className="flex justify-between py-3"><span className="text-slate-400 text-sm">Recommended machine</span><span className="text-2xl font-black text-white">{machine ? `${machine} T` : `${EST.machineSizes[EST.machineSizes.length - 1]} T+`}</span></div>
        <Link href="/tools/instant-quote" className="mt-4 block text-center bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-extrabold py-3 rounded-xl transition">
          Get a full estimate from your 3D file
        </Link>
      </div>
    </div>
  );
}
