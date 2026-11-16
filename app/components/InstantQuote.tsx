'use client';

import { useMemo, useRef, useState } from 'react';
import { Upload, Lock, CheckCircle2, AlertTriangle } from 'lucide-react';
import { EST, analyse, estimate, fmt, inr, matById, parseSTL } from '@/lib/estimator';
import { SITE } from '@/lib/site';
import { useMeshViewer } from '@/lib/useMeshViewer';


const input = 'mt-1.5 block w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2.5 text-sm text-white focus:border-cyan-500 focus:outline-none';
const label = 'block text-xs font-semibold text-slate-300';

export default function InstantQuote() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [tris, setTris] = useState<Float32Array | null>(null);
  const [fileName, setFileName] = useState('');
  const [error, setError] = useState('');
  const [over, setOver] = useState(false);
  const [units, setUnits] = useState(1);
  const [matId, setMatId] = useState(EST.materials[0].id);
  const [cav, setCav] = useState(1);
  const [wall, setWall] = useState(2);
  const [qty, setQty] = useState(50000);
  const [axis, setAxis] = useState<'auto' | 0 | 1 | 2>('auto');
  const [unlocked, setUnlocked] = useState(false);
  const [sending, setSending] = useState(false);
  const [lead, setLead] = useState({ fullName: '', phone: '', email: '', company: '' });

  const rawGeo = useMemo(() => (tris ? analyse(tris, 1) : null), [tris]);
  const geo = useMemo(() => (tris ? analyse(tris, units) : null), [tris, units]);
  useMeshViewer(canvasRef, tris, rawGeo);

  const result = useMemo(() => {
    if (!geo) return null;
    const ax = axis === 'auto' ? geo.size.indexOf(Math.min(...geo.size)) : axis;
    const o = { volCm3: geo.volMm3 / 1000, projCm2: geo.projMm2[ax] / 100, maxDimMm: Math.max(...geo.size), wallMm: wall || 2, matId, cav };
    return { o, r: estimate(o) };
  }, [geo, axis, wall, matId, cav]);

  const load = async (f?: File | null) => {
    if (!f) return;
    if (!/\.stl$/i.test(f.name)) {
      setError('Please upload an .STL file. For STEP/IGES files, use the Request a Quote form — it accepts any CAD format.');
      return;
    }
    try {
      setTris(parseSTL(await f.arrayBuffer()));
      setFileName(f.name);
      setError('');
    } catch (e) {
      setError((e as Error).message);
    }
  };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!result) return;
    setSending(true);
    const { o, r } = result;
    const notes = [
      `INSTANT QUOTE LEAD (adpolymers.in/tools/instant-quote)`,
      `File: ${fileName}`,
      `Size: ${geo?.size.map((v) => v.toFixed(1)).join(' x ')} mm | Volume: ${o.volCm3.toFixed(2)} cm3 | Weight: ${r.partG.toFixed(1)} g`,
      `Projected area: ${o.projCm2.toFixed(1)} cm2 | Cavities: ${o.cav} | Wall: ${o.wallMm} mm`,
      `Clamp: ${Math.round(r.tons)} T -> ${r.machine ?? '>450'} T machine | Cycle ~${r.cycle.toFixed(0)} s`,
      `Shown unit price: ${r.unitLow ? `${inr(r.unitLow)} - ${inr(r.unitHigh ?? 0)}` : 'n/a'} | Tooling: ${inr(r.toolLow)} - ${inr(r.toolHigh)}`,
      `Customer asked to email the CAD file to ${SITE.email}`,
    ].join('\n');
    try {
      await fetch('/api/rfq', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...lead, materialRequirements: matById(matId).name, estimatedVolume: `${qty} pcs/year`, additionalNotes: notes }),
      });
    } catch {
      /* still show the estimate */
    }
    setSending(false);
    setUnlocked(true);
  };

  const r = result?.r;
  const row = (k: string, v: React.ReactNode) => (
    <div className="flex justify-between gap-4 py-2.5 border-b border-slate-800/80 text-sm">
      <span className="text-slate-400">{k}</span>
      <span className="font-semibold text-white text-right">{v}</span>
    </div>
  );

  return (
    <div className="grid lg:grid-cols-5 gap-8 items-start">
      <div className="lg:col-span-3 space-y-4">
        <label
          htmlFor="iq-file"
          onDragOver={(e) => { e.preventDefault(); setOver(true); }}
          onDragLeave={() => setOver(false)}
          onDrop={(e) => { e.preventDefault(); setOver(false); load(e.dataTransfer.files[0]); }}
          className={`relative block aspect-[4/3] rounded-2xl border-2 ${tris ? 'border-solid cursor-grab' : 'border-dashed cursor-pointer'} ${over ? 'border-cyan-400 bg-cyan-950/30' : 'border-slate-700 bg-slate-900/60'} overflow-hidden bg-tech-grid`}
        >
          <input id="iq-file" type="file" accept=".stl,model/stl" className="hidden" onChange={(e) => load(e.target.files?.[0])} />
          <canvas ref={canvasRef} className="absolute inset-0 w-full h-full touch-none" aria-label="3D preview of your part" />
          {!tris && (
            <span className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 text-slate-400">
              <Upload className="w-10 h-10 text-cyan-400 mb-3" />
              <strong className="text-white text-lg">Drop your STL file here</strong>
              <span className="text-sm">or tap to choose · processed in your browser, never uploaded</span>
            </span>
          )}
        </label>
        <p className="text-xs font-mono text-slate-500">
          {fileName && `${fileName} · ${geo?.tris.toLocaleString('en-IN')} triangles · drag to rotate`}
          {error && <span className="text-red-400">{error}</span>}
        </p>

        <div className="grid sm:grid-cols-2 gap-4 p-6 rounded-2xl border border-slate-800 bg-slate-900/60">
          <label className={label}>Material
            <select className={input} value={matId} onChange={(e) => setMatId(e.target.value)}>
              {EST.materials.map((m) => <option key={m.id} value={m.id}>{m.name}</option>)}
            </select>
          </label>
          <label className={label}>File units
            <select className={input} value={units} onChange={(e) => setUnits(+e.target.value)}>
              <option value={1}>Millimetres (mm)</option>
              <option value={10}>Centimetres (cm)</option>
              <option value={25.4}>Inches (in)</option>
            </select>
          </label>
          <label className={label}>Cavities
            <select className={input} value={cav} onChange={(e) => setCav(+e.target.value)}>
              {[1, 2, 4, 8, 16, 32].map((n) => <option key={n} value={n}>{n}</option>)}
            </select>
          </label>
          <label className={label}>Nominal wall thickness (mm)
            <input className={input} type="number" min={0.3} max={10} step={0.1} value={wall} onChange={(e) => setWall(+e.target.value)} />
          </label>
          <label className={label}>Annual quantity
            <input className={input} type="number" min={0} step={1000} value={qty} onChange={(e) => setQty(+e.target.value)} />
          </label>
          <label className={label}>Mould opening direction
            <select className={input} value={String(axis)} onChange={(e) => setAxis(e.target.value === 'auto' ? 'auto' : (+e.target.value as 0 | 1 | 2))}>
              <option value="auto">Auto (part lying flat)</option>
              <option value="0">Along X</option>
              <option value="1">Along Y</option>
              <option value="2">Along Z</option>
            </select>
          </label>
        </div>
      </div>

      <div className="lg:col-span-2 p-6 rounded-2xl border border-slate-800 bg-slate-900/80 lg:sticky lg:top-24">
        <h2 className="text-lg font-bold text-white mb-2">Part analysis</h2>
        {row('Size', geo ? geo.size.map((v) => fmt(v, 1)).join(' × ') + ' mm' : '—')}
        {row('Volume', result ? fmt(result.o.volCm3, 2) + ' cm³' : '—')}
        {row('Part weight', r ? fmt(r.partG, 1) + ' g' : '—')}
        {row('Projected area', result ? fmt(result.o.projCm2, 1) + ' cm²' : '—')}
        {row('Clamping force', r ? fmt(r.tons, 0) + ' T' : '—')}
        {row('Recommended machine', r ? (r.machine ? `${r.machine} T` : 'Talk to us') : '—')}
        {row('Shot weight (incl. runner)', r ? fmt(r.shotG, 1) + ' g' : '—')}
        {row('Est. cycle time', r ? `~${fmt(r.cycle, 0)} s` : '—')}
        {row('Output', r ? fmt(r.partsPerHour, 0) + ' parts/hr' : '—')}
        {r?.overShot && (
          <p className="mt-3 flex gap-2 text-xs text-amber-300"><AlertTriangle className="w-4 h-4 shrink-0" /> Shot weight is above our {EST.maxShotG} g sweet spot — reduce cavities or contact us.</p>
        )}

        <h2 className="text-lg font-bold text-white mt-6 mb-2">Indicative pricing</h2>
        <div className={unlocked ? '' : 'blur-sm select-none pointer-events-none'} aria-hidden={!unlocked}>
          {row('Unit price', r?.unitLow ? `${inr(r.unitLow)} – ${inr(r.unitHigh ?? 0)}` : '—')}
          {row('Annual spend', r?.unitLow && qty ? `${inr(r.unitLow * qty)} – ${inr((r.unitHigh ?? 0) * qty)}` : '—')}
          {row('Mould / tooling', r ? `${inr(r.toolLow)} – ${inr(r.toolHigh)}` : '—')}
        </div>

        {!unlocked ? (
          <form onSubmit={submit} className="mt-4 space-y-3 p-4 rounded-xl border border-cyan-500/20 bg-slate-950/60">
            <p className="flex items-center gap-2 text-sm font-semibold text-white"><Lock className="w-4 h-4 text-cyan-400" /> See your price estimate</p>
            <input required className={input} placeholder="Your name*" autoComplete="name" value={lead.fullName} onChange={(e) => setLead({ ...lead, fullName: e.target.value })} />
            <input required className={input} type="tel" placeholder="Phone / WhatsApp*" autoComplete="tel" value={lead.phone} onChange={(e) => setLead({ ...lead, phone: e.target.value })} />
            <input required className={input} type="email" placeholder="Work email*" autoComplete="email" value={lead.email} onChange={(e) => setLead({ ...lead, email: e.target.value })} />
            <input className={input} placeholder="Company" autoComplete="organization" value={lead.company} onChange={(e) => setLead({ ...lead, company: e.target.value })} />
            <button disabled={!result || sending} className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 disabled:opacity-40 text-slate-950 font-black py-3 rounded-lg">
              {result ? (sending ? 'Calculating…' : 'Show my estimate') : 'Upload an STL first'}
            </button>
          </form>
        ) : (
          <p className="mt-4 flex gap-2 text-sm text-emerald-300 bg-emerald-500/10 border border-emerald-500/20 rounded-lg p-3">
            <CheckCircle2 className="w-5 h-5 shrink-0" />
            <span>Thanks! Our engineers will review your part and send a firm quote. For the fastest response, email your STEP file to <a className="underline" href={`mailto:${SITE.email}`}>{SITE.email}</a>.</span>
          </p>
        )}
        <p className="mt-4 text-[11px] text-slate-500 leading-relaxed">Indicative only. Excludes GST, freight, inserts and assembly. Final price confirmed after drawing review.</p>
      </div>
    </div>
  );
}
