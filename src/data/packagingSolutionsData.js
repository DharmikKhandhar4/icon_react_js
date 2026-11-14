import { machinesCatalog } from './productsData';

export const packagingSolutionsList = [
  {
    id: 1,
    name: "Counting",
    slug: "counting",
    image: "https://storage.server.grafizen.in/uploads/img_68526d2ba74ea8.14829186.svg",
    fallback: "/solution/pakingsolution/counteing.svg",
    machines: [
      "multihead-vffs-pro",
      "premade-pouch-pick-fill-seal-machine",
      "auger-filler-vffs-machine",
      "linear-cup-filling-sealing-machine"
    ]
  },
  {
    id: 2,
    name: "Pick",
    slug: "pick",
    image: "https://storage.server.grafizen.in/uploads/img_68526eba2da099.12340111.svg",
    fallback: "/solution/pakingsolution/pick.svg",
    machines: [
      "premade-pouch-pick-fill-seal-machine",
      "multihead-vffs-pro",
      "linear-cup-filling-sealing-machine",
      "double-chamber-vacuum-packing-machine"
    ]
  },
  {
    id: 3,
    name: "Strapping",
    slug: "strapping",
    image: "https://storage.server.grafizen.in/uploads/img_68526eb10d36e4.06225359.svg",
    fallback: "/solution/pakingsolution/straping.svg",
    machines: [
      "continuous-tray-sealer-map",
      "single-chamber-vacuum-packing-machine",
      "double-chamber-vacuum-packing-machine",
      "thermoforming-vacuum-packing-machine-itf-250"
    ]
  },
  {
    id: 4,
    name: "Standy Pouch",
    slug: "standy-pouch",
    image: "https://storage.server.grafizen.in/uploads/img_68526ea5f184a2.79039642.svg",
    fallback: "/solution/pouch.svg",
    machines: [
      "premade-pouch-pick-fill-seal-machine",
      "multihead-vffs-pro",
      "auger-filler-vffs-machine",
      "continuous-tray-sealer-map"
    ]
  },
  {
    id: 5,
    name: "Seal",
    slug: "seal",
    image: "https://storage.server.grafizen.in/uploads/img_68526e99ddcc30.37119656.svg",
    fallback: "/solution/strayslar.svg",
    machines: [
      "inline-tray-sealer-map",
      "continuous-tray-sealer-map",
      "double-chamber-vacuum-packing-machine",
      "single-chamber-vacuum-packing-machine"
    ]
  },
  {
    id: 6,
    name: "Fill",
    slug: "fill",
    image: "https://storage.server.grafizen.in/uploads/img_68526e9277f616.21599299.svg",
    fallback: "/solution/pikfill.svg",
    machines: [
      "linear-cup-filling-sealing-machine",
      "auger-filler-vffs-machine",
      "multihead-vffs-pro",
      "premade-pouch-pick-fill-seal-machine"
    ]
  },
  {
    id: 7,
    name: "D Cut",
    slug: "d-cut",
    image: "https://storage.server.grafizen.in/uploads/img_68526e495a0472.65532511.svg",
    fallback: "/solution/gender.svg",
    machines: [
      "thermoforming-vacuum-packing-machine-itf-250",
      "thermoforming-vacuum-packing-machine-itf-400",
      "premade-pouch-pick-fill-seal-machine",
      "multihead-vffs-pro"
    ]
  },
  {
    id: 8,
    name: "Shrink",
    slug: "shrink",
    image: "https://storage.server.grafizen.in/uploads/img_68526e3a72f682.21441440.svg",
    fallback: "/solution/themoforming.svg",
    machines: [
      "thermoforming-vacuum-packing-machine-itf-400",
      "thermoforming-vacuum-packing-machine-itf-250",
      "continuous-tray-sealer-map",
      "inline-tray-sealer-map"
    ]
  },
  {
    id: 9,
    name: "Wrapping",
    slug: "wrapping",
    image: "https://storage.server.grafizen.in/uploads/img_68526e292c3af5.98805048.svg",
    fallback: "/solution/themoforming.svg",
    machines: [
      "thermoforming-vacuum-packing-machine-itf-250",
      "thermoforming-vacuum-packing-machine-itf-400",
      "double-chamber-vacuum-packing-machine",
      "single-chamber-vacuum-packing-machine"
    ]
  },
  {
    id: 10,
    name: "Regular Sealing",
    slug: "regular-sealing",
    image: "https://storage.server.grafizen.in/uploads/img_68526e1f4498a7.80317487.svg",
    fallback: "/solution/strayslar.svg",
    machines: [
      "single-chamber-vacuum-packing-machine",
      "double-chamber-vacuum-packing-machine",
      "inline-tray-sealer-map",
      "continuous-tray-sealer-map"
    ]
  },
  {
    id: 11,
    name: "Volumatric Weighing",
    slug: "volumatric-weighing",
    image: "https://storage.server.grafizen.in/uploads/img_68526e1264b1c2.43654906.svg",
    fallback: "/solution/bulk.svg",
    machines: [
      "multihead-vffs-pro",
      "auger-filler-vffs-machine",
      "linear-cup-filling-sealing-machine",
      "premade-pouch-pick-fill-seal-machine"
    ]
  },
  {
    id: 12,
    name: "Zipper Pouch",
    slug: "zipper-pouch",
    image: "https://storage.server.grafizen.in/uploads/img_68526dff626b63.96672896.svg",
    fallback: "/solution/pouch.svg",
    machines: [
      "premade-pouch-pick-fill-seal-machine",
      "multihead-vffs-pro",
      "auger-filler-vffs-machine",
      "double-chamber-vacuum-packing-machine"
    ]
  },
  {
    id: 13,
    name: "Gadget",
    slug: "gadget",
    image: "https://storage.server.grafizen.in/uploads/img_68526d68e3bfb3.76394807.svg",
    fallback: "/solution/gender.svg",
    machines: [
      "thermoforming-vacuum-packing-machine-itf-250",
      "thermoforming-vacuum-packing-machine-itf-400",
      "single-chamber-vacuum-packing-machine",
      "double-chamber-vacuum-packing-machine"
    ]
  },
  {
    id: 14,
    name: "3 Side Seal Pouch",
    slug: "3-side-seal-pouch",
    image: "https://storage.server.grafizen.in/uploads/img_68526d5d594764.20276908.svg",
    fallback: "/solution/pouch.svg",
    machines: [
      "premade-pouch-pick-fill-seal-machine",
      "auger-filler-vffs-machine",
      "multihead-vffs-pro",
      "single-chamber-vacuum-packing-machine"
    ]
  },
  {
    id: 15,
    name: "Side Seal",
    slug: "side-seal",
    image: "https://storage.server.grafizen.in/uploads/img_68526d4554b3f0.85267172.svg",
    fallback: "/solution/strayslar.svg",
    machines: [
      "premade-pouch-pick-fill-seal-machine",
      "multihead-vffs-pro",
      "inline-tray-sealer-map",
      "continuous-tray-sealer-map"
    ]
  },
  {
    id: 16,
    name: "Vaccum",
    slug: "vaccum",
    image: "https://storage.server.grafizen.in/uploads/img_68526bec106af3.57506811.svg",
    fallback: "/solution/vacum.svg",
    machines: [
      "double-chamber-vacuum-packing-machine",
      "single-chamber-vacuum-packing-machine",
      "thermoforming-vacuum-packing-machine-itf-250",
      "thermoforming-vacuum-packing-machine-itf-400"
    ]
  },
  {
    id: 17,
    name: "Center Seal",
    slug: "center-seal",
    image: "https://storage.server.grafizen.in/uploads/img_68526d1dc23f03.65067271.svg",
    fallback: "/solution/pouch.svg",
    machines: [
      "multihead-vffs-pro",
      "auger-filler-vffs-machine",
      "premade-pouch-pick-fill-seal-machine",
      "continuous-tray-sealer-map"
    ]
  },
  {
    id: 18,
    name: "Weighing",
    slug: "weighing",
    image: "https://storage.server.grafizen.in/uploads/img_68526d02ee5472.90557842.svg",
    fallback: "/solution/bulk.svg",
    machines: [
      "multihead-vffs-pro",
      "auger-filler-vffs-machine",
      "premade-pouch-pick-fill-seal-machine",
      "linear-cup-filling-sealing-machine"
    ]
  },
  {
    id: 19,
    name: "Separating",
    slug: "separating",
    image: "https://storage.server.grafizen.in/uploads/img_68526cbc3ed8a3.23142412.svg",
    fallback: "/solution/gender.svg",
    machines: [
      "linear-cup-filling-sealing-machine",
      "thermoforming-vacuum-packing-machine-itf-250",
      "multihead-vffs-pro",
      "premade-pouch-pick-fill-seal-machine"
    ]
  },
  {
    id: 20,
    name: "Cleaning",
    slug: "cleaning",
    image: "https://storage.server.grafizen.in/uploads/img_68526ca743f618.53584779.svg",
    fallback: "/solution/date.svg",
    machines: [
      "linear-cup-filling-sealing-machine",
      "inline-tray-sealer-map",
      "thermoforming-vacuum-packing-machine-itf-250",
      "double-chamber-vacuum-packing-machine"
    ]
  },
  {
    id: 21,
    name: "Washing",
    slug: "washing",
    image: "https://storage.server.grafizen.in/uploads/img_68526c98ba2d84.30840116.svg",
    fallback: "/solution/date.svg",
    machines: [
      "linear-cup-filling-sealing-machine",
      "inline-tray-sealer-map",
      "thermoforming-vacuum-packing-machine-itf-400",
      "double-chamber-vacuum-packing-machine"
    ]
  },
  {
    id: 22,
    name: "Drying",
    slug: "drying",
    image: "https://storage.server.grafizen.in/uploads/img_68526c8c59c582.45330968.svg",
    fallback: "/solution/date.svg",
    machines: [
      "continuous-tray-sealer-map",
      "thermoforming-vacuum-packing-machine-itf-250",
      "double-chamber-vacuum-packing-machine",
      "inline-tray-sealer-map"
    ]
  },
  {
    id: 23,
    name: "Polishing",
    slug: "polishing",
    image: "https://storage.server.grafizen.in/uploads/img_68526c7d94a341.74242955.svg",
    fallback: "/solution/date.svg",
    machines: [
      "continuous-tray-sealer-map",
      "single-chamber-vacuum-packing-machine",
      "double-chamber-vacuum-packing-machine",
      "multihead-vffs-pro"
    ]
  },
  {
    id: 24,
    name: "Pressing",
    slug: "pressing",
    image: "https://storage.server.grafizen.in/uploads/img_68526c70972031.37772905.svg",
    fallback: "/solution/date.svg",
    machines: [
      "double-chamber-vacuum-packing-machine",
      "single-chamber-vacuum-packing-machine",
      "thermoforming-vacuum-packing-machine-itf-250",
      "inline-tray-sealer-map"
    ]
  },
  {
    id: 25,
    name: "Filling",
    slug: "filling",
    image: "https://storage.server.grafizen.in/uploads/img_68526c5f9d55f3.31905792.svg",
    fallback: "/solution/pikfill.svg",
    machines: [
      "linear-cup-filling-sealing-machine",
      "auger-filler-vffs-machine",
      "multihead-vffs-pro",
      "premade-pouch-pick-fill-seal-machine"
    ]
  },
  {
    id: 26,
    name: "Skin",
    slug: "skin",
    image: "https://storage.server.grafizen.in/uploads/img_68526c51b37f79.60480357.svg",
    fallback: "/solution/themoforming.svg",
    machines: [
      "thermoforming-vacuum-packing-machine-itf-250",
      "thermoforming-vacuum-packing-machine-itf-400",
      "inline-tray-sealer-map",
      "double-chamber-vacuum-packing-machine"
    ]
  },
  {
    id: 27,
    name: "Modified Atmospheric Packaging",
    slug: "modified-atmospheric-packaging",
    image: "https://storage.server.grafizen.in/uploads/img_68526c44b31fb8.36784468.svg",
    fallback: "/solution/strayslar.svg",
    machines: [
      "inline-tray-sealer-map",
      "continuous-tray-sealer-map",
      "thermoforming-vacuum-packing-machine-itf-250",
      "thermoforming-vacuum-packing-machine-itf-400"
    ]
  },
  {
    id: 28,
    name: "Premium Sealing",
    slug: "premium-sealing",
    image: "https://storage.server.grafizen.in/uploads/img_68526c2264b991.40691633.svg",
    fallback: "/solution/strayslar.svg",
    machines: [
      "inline-tray-sealer-map",
      "continuous-tray-sealer-map",
      "thermoforming-vacuum-packing-machine-itf-400",
      "double-chamber-vacuum-packing-machine"
    ]
  },
  {
    id: 29,
    name: "Gas Flushing",
    slug: "gas-flushing",
    image: "https://storage.server.grafizen.in/uploads/img_68526c095dd325.50744599.svg",
    fallback: "/solution/strayslar.svg",
    machines: [
      "inline-tray-sealer-map",
      "continuous-tray-sealer-map",
      "double-chamber-vacuum-packing-machine",
      "single-chamber-vacuum-packing-machine"
    ]
  }
];

export function getSolutionBySlug(slug) {
  if (!slug) return packagingSolutionsList[0];
  const normalized = slug.toLowerCase().replace(/%20/g, '-').replace(/\s+/g, '-');
  return packagingSolutionsList.find(s => s.slug === normalized || s.slug === slug) || packagingSolutionsList[0];
}

export function getMachinesBySolution(solutionSlug) {
  const solution = getSolutionBySlug(solutionSlug);
  if (!solution || !solution.machines) {
    return Object.values(machinesCatalog).slice(0, 4);
  }
  return solution.machines
    .map(mSlug => machinesCatalog[mSlug])
    .filter(Boolean);
}

