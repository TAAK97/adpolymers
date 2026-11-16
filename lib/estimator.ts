// Instant Quote + Tonnage Calculator engine. Pure functions, runs in the browser.
// ALL RATES BELOW ARE STARTING VALUES — replace with AD Polymers' real numbers.
// density g/cm³ · clamp = tonnes per cm² projected area · cool = s per mm² wall · price = ₹/kg

export type EstMaterial = { id: string; name: string; density: number; clamp: number; cool: number; price: number };

export const EST = {
  materials: [
    { id: 'pa66gf', name: 'Nylon PA66 30% GF', density: 1.37, clamp: 0.7, cool: 1.4, price: 330 },
    { id: 'pa6', name: 'Nylon PA6', density: 1.13, clamp: 0.55, cool: 1.6, price: 260 },
    { id: 'pom', name: 'POM (Acetal)', density: 1.41, clamp: 0.55, cool: 1.8, price: 240 },
    { id: 'pc', name: 'PC (Polycarbonate)', density: 1.2, clamp: 0.62, cool: 1.4, price: 310 },
    { id: 'abs', name: 'ABS', density: 1.05, clamp: 0.47, cool: 1.6, price: 190 },
    { id: 'pp', name: 'PP (Polypropylene)', density: 0.905, clamp: 0.4, cool: 2.0, price: 115 },
    { id: 'san', name: 'SAN (clear, food-grade)', density: 1.08, clamp: 0.45, cool: 1.5, price: 200 },
    { id: 'pbt', name: 'PBT', density: 1.31, clamp: 0.55, cool: 1.5, price: 290 },
    { id: 'tpe', name: 'TPE', density: 1.0, clamp: 0.3, cool: 2.0, price: 300 },
  ] as EstMaterial[],
  machineSizes: [30, 50, 80, 100, 120, 150, 180, 220, 250, 300, 350, 450],
  machineRateBase: 350, // ₹/hour
  machineRatePerTon: 2.6, // ₹/hour per tonne
  clampSafety: 1.15,
  runnerFraction: 0.1,
  fixedCycleS: 6,
  scrapFraction: 0.04,
  margin: 0.18,
  priceSpread: 0.2,
  maxShotG: 250, // above this, flag "outside our range"
  tooling: [
    { maxMm: 40, low: 100000, high: 220000 },
    { maxMm: 100, low: 180000, high: 400000 },
    { maxMm: 200, low: 350000, high: 800000 },
    { maxMm: 99999, low: 700000, high: 1800000 },
  ],
  toolingExtraCavity: 0.6,
};

export const matById = (id: string) => EST.materials.find((m) => m.id === id) ?? EST.materials[0];

export function pickMachine(tons: number): number | null {
  return EST.machineSizes.find((s) => s >= tons) ?? null;
}

export function clampTons(projCm2: number, cav: number, mat: EstMaterial, safety = EST.clampSafety) {
  return projCm2 * cav * mat.clamp * safety;
}

export type Estimate = {
  partG: number; shotG: number; tons: number; machine: number | null; cycle: number;
  partsPerHour: number; unitLow: number | null; unitHigh: number | null; toolLow: number; toolHigh: number; overShot: boolean;
};

export function estimate(o: { volCm3: number; projCm2: number; maxDimMm: number; wallMm: number; matId: string; cav: number }): Estimate {
  const m = matById(o.matId);
  const partG = o.volCm3 * m.density;
  const shotG = partG * o.cav * (1 + EST.runnerFraction);
  const tons = clampTons(o.projCm2, o.cav, m);
  const machine = pickMachine(tons);
  const cycle = m.cool * o.wallMm * o.wallMm + EST.fixedCycleS;
  const partsPerHour = (3600 / cycle) * o.cav;
  let unitLow: number | null = null;
  let unitHigh: number | null = null;
  if (machine) {
    const rate = EST.machineRateBase + EST.machineRatePerTon * machine;
    const matCost = (partG / 1000) * m.price * (1 + EST.runnerFraction / 2) * (1 + EST.scrapFraction);
    const conv = (rate * cycle) / 3600 / o.cav;
    const unit = (matCost + conv) * (1 + EST.margin);
    unitLow = unit * (1 - EST.priceSpread);
    unitHigh = unit * (1 + EST.priceSpread);
  }
  const band = EST.tooling.find((b) => o.maxDimMm <= b.maxMm) ?? EST.tooling[EST.tooling.length - 1];
  const mult = 1 + EST.toolingExtraCavity * (o.cav - 1);
  return { partG, shotG, tons, machine, cycle, partsPerHour, unitLow, unitHigh, toolLow: band.low * mult, toolHigh: band.high * mult, overShot: shotG > EST.maxShotG };
}

/** Parse binary or ASCII STL into a flat array of triangle vertices (9 floats per triangle). */
export function parseSTL(buf: ArrayBuffer): Float32Array {
  const dv = new DataView(buf);
  const n = buf.byteLength >= 84 ? dv.getUint32(80, true) : 0;
  if (n > 0 && buf.byteLength === 84 + n * 50) {
    const t = new Float32Array(n * 9);
    for (let i = 0; i < n; i++) for (let j = 0; j < 9; j++) t[i * 9 + j] = dv.getFloat32(84 + i * 50 + 12 + j * 4, true);
    return t;
  }
  const txt = new TextDecoder().decode(buf);
  const re = /vertex\s+([-+\d.eE]+)\s+([-+\d.eE]+)\s+([-+\d.eE]+)/g;
  const a: number[] = [];
  let m: RegExpExecArray | null;
  while ((m = re.exec(txt))) a.push(+m[1], +m[2], +m[3]);
  if (a.length < 9 || a.length % 9) throw new Error('Could not read this file. Please upload a binary or ASCII STL.');
  return new Float32Array(a);
}

export type Geometry = { volMm3: number; projMm2: [number, number, number]; size: [number, number, number]; center: [number, number, number]; tris: number };

/** Volume (signed tetrahedra), projected area per axis (½Σ|n·axis|·area) and bounding box. */
export function analyse(t: Float32Array, scale = 1): Geometry {
  let vol = 0;
  const proj = [0, 0, 0];
  const mn = [Infinity, Infinity, Infinity];
  const mx = [-Infinity, -Infinity, -Infinity];
  for (let i = 0; i < t.length; i += 9) {
    const p = [0, 1, 2, 3, 4, 5, 6, 7, 8].map((k) => t[i + k] * scale);
    const [ax, ay, az, bx, by, bz, cx, cy, cz] = p;
    vol += (ax * (by * cz - bz * cy) - ay * (bx * cz - bz * cx) + az * (bx * cy - by * cx)) / 6;
    const ux = bx - ax, uy = by - ay, uz = bz - az, vx = cx - ax, vy = cy - ay, vz = cz - az;
    proj[0] += Math.abs(uy * vz - uz * vy);
    proj[1] += Math.abs(uz * vx - ux * vz);
    proj[2] += Math.abs(ux * vy - uy * vx);
    for (let k = 0; k < 9; k++) {
      const ax3 = k % 3;
      if (p[k] < mn[ax3]) mn[ax3] = p[k];
      if (p[k] > mx[ax3]) mx[ax3] = p[k];
    }
  }
  return {
    volMm3: Math.abs(vol),
    projMm2: [proj[0] / 4, proj[1] / 4, proj[2] / 4],
    size: [mx[0] - mn[0], mx[1] - mn[1], mx[2] - mn[2]],
    center: [(mn[0] + mx[0]) / 2, (mn[1] + mx[1]) / 2, (mn[2] + mx[2]) / 2],
    tris: t.length / 9,
  };
}

export const fmt = (n: number, d = 0) => n.toLocaleString('en-IN', { maximumFractionDigits: d, minimumFractionDigits: d });
export const inr = (n: number) => '₹' + (n < 10 ? n.toFixed(2) : n < 100 ? n.toFixed(1) : Math.round(n).toLocaleString('en-IN'));
