// Procedural demo meshes for the homepage hero (no files to load).

/** Revolve a closed (r, z) profile around the Z axis into a watertight triangle mesh. */
export function revolve(profile: [number, number][], segments = 64): Float32Array {
  const out: number[] = [];
  const n = profile.length;
  for (let s = 0; s < segments; s++) {
    const a0 = (s / segments) * Math.PI * 2;
    const a1 = ((s + 1) / segments) * Math.PI * 2;
    const c0 = Math.cos(a0), s0 = Math.sin(a0), c1 = Math.cos(a1), s1 = Math.sin(a1);
    for (let i = 0; i < n; i++) {
      const [r0, z0] = profile[i];
      const [r1, z1] = profile[(i + 1) % n];
      const p00 = [r0 * c0, r0 * s0, z0], p01 = [r0 * c1, r0 * s1, z0];
      const p10 = [r1 * c0, r1 * s0, z1], p11 = [r1 * c1, r1 * s1, z1];
      out.push(...p00, ...p10, ...p11, ...p00, ...p11, ...p01);
    }
  }
  return new Float32Array(out);
}

/** Flanged bushing (mm): bore Ø12, sleeve Ø20 × 16 long, flange Ø30 × 3. */
export const flangedBushing = () =>
  revolve([
    [6, 0],
    [15, 0],
    [15, 3],
    [10, 3],
    [10, 16],
    [6, 16],
  ]);
