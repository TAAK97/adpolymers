'use client';

// Lightweight 3D mesh preview: canvas 2D, flat shaded, painter's sort, drag to rotate. No dependencies.
import { useEffect, type RefObject } from 'react';
import type { Geometry } from './estimator';

export function useMeshViewer(
  canvasRef: RefObject<HTMLCanvasElement | null>,
  tris: Float32Array | null,
  geo: Geometry | null,
  opts: { spin?: number; fill?: number } = {},
) {
  const speed = opts.spin ?? 0.01, fillRatio = opts.fill ?? 0.62;
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || !tris || !geo) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    let yaw = 0.7, pitch = -0.5, spin = true, raf = 0;
    let drag: [number, number] | null = null;

    const draw = () => {
      const r = canvas.getBoundingClientRect();
      const d = window.devicePixelRatio || 1;
      if (canvas.width !== Math.round(r.width * d)) { canvas.width = Math.round(r.width * d); canvas.height = Math.round(r.height * d); }
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const cy = Math.cos(yaw), sy = Math.sin(yaw), cp = Math.cos(pitch), sp = Math.sin(pitch);
      const c = geo.center, s = Math.max(...geo.size) || 1, k = (Math.min(canvas.width, canvas.height) * fillRatio) / s;
      const W = canvas.width / 2, H = canvas.height / 2, n = tris.length / 9, step = Math.max(1, Math.ceil(n / 60000));
      const list: { z: number; p: number[]; sh: number }[] = [];
      for (let i = 0; i < n; i += step) {
        const p: number[] = [];
        for (let j = 0; j < 3; j++) {
          const x = tris[i * 9 + j * 3] - c[0], y = tris[i * 9 + j * 3 + 1] - c[1], z = tris[i * 9 + j * 3 + 2] - c[2];
          const x1 = x * cy - y * sy, y1 = x * sy + y * cy;
          p.push(x1, y1 * cp - z * sp, y1 * sp + z * cp);
        }
        const ux = p[3] - p[0], uy = p[4] - p[1], uz = p[5] - p[2], vx = p[6] - p[0], vy = p[7] - p[1], vz = p[8] - p[2];
        const nx = uy * vz - uz * vy, ny = uz * vx - ux * vz, nz = ux * vy - uy * vx, l = Math.hypot(nx, ny, nz) || 1;
        list.push({ z: p[1] + p[4] + p[7], p, sh: Math.abs((nx * 0.3 - ny * 0.8 + nz * 0.5) / l) });
      }
      list.sort((a, b) => b.z - a.z);
      for (const t of list) {
        const g = Math.round(50 + 180 * t.sh);
        ctx.fillStyle = ctx.strokeStyle = `rgb(${Math.round(g * 0.2)},${Math.round(g * 0.75)},${g})`;
        ctx.beginPath();
        ctx.moveTo(W + t.p[0] * k, H - t.p[2] * k);
        ctx.lineTo(W + t.p[3] * k, H - t.p[5] * k);
        ctx.lineTo(W + t.p[6] * k, H - t.p[8] * k);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
      }
    };
    const loop = () => { if (spin) { yaw += speed; draw(); } raf = requestAnimationFrame(loop); };
    const down = (e: PointerEvent) => { drag = [e.clientX, e.clientY]; spin = false; canvas.setPointerCapture(e.pointerId); };
    const move = (e: PointerEvent) => {
      if (!drag) return;
      yaw += (e.clientX - drag[0]) * 0.01; pitch += (e.clientY - drag[1]) * 0.01; drag = [e.clientX, e.clientY]; draw();
    };
    const up = () => { drag = null; };
    canvas.addEventListener('pointerdown', down);
    canvas.addEventListener('pointermove', move);
    canvas.addEventListener('pointerup', up);
    loop();
    return () => {
      cancelAnimationFrame(raf);
      canvas.removeEventListener('pointerdown', down);
      canvas.removeEventListener('pointermove', move);
      canvas.removeEventListener('pointerup', up);
    };
  }, [canvasRef, tris, geo, speed, fillRatio]);
}
