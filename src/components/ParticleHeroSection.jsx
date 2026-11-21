import React, { useState, useRef, useEffect } from 'react';
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  AnimatePresence,
} from 'framer-motion';
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  ShieldCheck,
  Cpu,
  Globe2,
  Award,
  Sliders,
  PhoneCall,
  Gauge,
  Layers,
  ChevronRight,
  FileText,
  Sparkles,
  X,
  Sparkle,
} from 'lucide-react';
import ParticleImage from './ParticleImage';

/**
 * ============================================================================
 * ICON PACKTECH PVT. LTD. (ICON INDUSTRIES INDIA) — HOMEPAGE HERO ARCHITECTURE
 * With React Bits Pro "Particle Image" Component (Swirling & Reforming Particles)
 * ============================================================================
 */

// ----------------------------------------------------------------------------
// DATA: MACHINE SERIES CONFIGURATIONS (HERO STAGE SWITCHER)
// ----------------------------------------------------------------------------
const MACHINE_SERIES = [
  {
    id: 'thermoforming',
    index: '01',
    shortName: 'Thermoforming Line',
    modelCode: 'IP-TF 420 PRO',
    category: 'Food & Pharma',
    dimensions: '4200mm L × 1150mm W × 1920mm H',
    image: '/product-image/Product1.png',
    hmi: {
      speed: '120 PPM',
      temp: '168.4 °C',
      vacuum: '2.4 mbar',
      status: 'AUTO · SYNC',
      cyclePct: 86,
    },
    callouts: [
      {
        id: 'chassis',
        zone: 'chassis',
        title: 'SS-304 GRADE CHASSIS',
        metric: 'IP65 Washdown',
        detail: 'Hygienic sloped-frame stainless construction for food & pharma compliance.',
        anchor: { x: 25, y: 74 },
        labelPos: { x: 6, y: 84 },
        align: 'left',
      },
      {
        id: 'sealing',
        zone: 'sealing',
        title: 'SERVO SEALING · ±0.1mm',
        metric: 'Closed-Loop PID',
        detail: 'Precision thermal seal head with servo die-lift and uniform bar pressure.',
        anchor: { x: 52, y: 39 },
        labelPos: { x: 22, y: 11 },
        align: 'left',
      },
      {
        id: 'hmi',
        zone: 'hmi',
        title: 'HMI + PLC AUTOMATION',
        metric: '10" Industrial Touch',
        detail: '200-recipe PLC memory with real-time OEE diagnostics and remote telemetry.',
        anchor: { x: 70, y: 31 },
        labelPos: { x: 66, y: 9 },
        align: 'right',
      },
      {
        id: 'output',
        zone: 'conveyor',
        title: 'OUTPUT: 120 PACKS/MIN',
        metric: 'Continuous Indexing',
        detail: 'High-speed servo chain advance with precision cross-cutting discharge.',
        anchor: { x: 84, y: 61 },
        labelPos: { x: 68, y: 79 },
        align: 'right',
      },
    ],
  },
  {
    id: 'flowwrap',
    index: '02',
    shortName: 'Flow Wrap System',
    modelCode: 'IP-FW 250 HFFS',
    category: 'Confectionery & FMCG',
    dimensions: '3850mm L × 980mm W × 1680mm H',
    image: '/product-image/Product4.png',
    hmi: {
      speed: '220 PPM',
      temp: '142.0 °C',
      vacuum: 'MAP · N2',
      status: 'HIGH-SPEED',
      cyclePct: 94,
    },
    callouts: [
      {
        id: 'chassis',
        zone: 'chassis',
        title: 'SS-304 CANTILEVER FRAME',
        metric: 'Tool-Free Access',
        detail: 'Open sanitary frame isolates mechanical drive components from product zone.',
        anchor: { x: 25, y: 74 },
        labelPos: { x: 6, y: 84 },
        align: 'left',
      },
      {
        id: 'sealing',
        zone: 'sealing',
        title: 'ROTARY JAW · ±0.08mm',
        metric: 'Dual-Axis Servo',
        detail: 'Zero-product-crush intelligent sensing with optical print-mark registration.',
        anchor: { x: 52, y: 39 },
        labelPos: { x: 22, y: 11 },
        align: 'left',
      },
      {
        id: 'hmi',
        zone: 'hmi',
        title: 'MOTION PLC CONTROLLER',
        metric: 'Multi-Axis Sync',
        detail: 'Instant product changeover via 10" stainless IP66 operator console.',
        anchor: { x: 70, y: 31 },
        labelPos: { x: 66, y: 9 },
        align: 'right',
      },
      {
        id: 'output',
        zone: 'conveyor',
        title: 'OUTPUT: 220 PACKS/MIN',
        metric: 'Smart Belt Infeed',
        detail: 'Synchronized multi-belt feeding for seamless continuous flow wrapping.',
        anchor: { x: 84, y: 61 },
        labelPos: { x: 68, y: 79 },
        align: 'right',
      },
    ],
  },
  {
    id: 'vacuum',
    index: '03',
    shortName: 'Vacuum Sealer',
    modelCode: 'IP-VS 600 MAP',
    category: 'Dairy, Meat & Medical',
    dimensions: '2640mm L × 1120mm W × 1760mm H',
    image: '/product-image/Product2.png',
    hmi: {
      speed: '85 PPM',
      temp: '184.5 °C',
      vacuum: '0.8 mbar',
      status: 'VAC + MAP',
      cyclePct: 79,
    },
    callouts: [
      {
        id: 'chassis',
        zone: 'chassis',
        title: 'HEAVY SS-304 MONOBLOCK',
        metric: 'GMP Certified',
        detail: 'Corrosion-resistant heavy gauge stainless chassis engineered for 24/7 plants.',
        anchor: { x: 25, y: 74 },
        labelPos: { x: 6, y: 84 },
        align: 'left',
      },
      {
        id: 'sealing',
        zone: 'sealing',
        title: 'MAP GAS FLUSH · 0.8 mbar',
        metric: 'Busch Vacuum Pump',
        detail: 'Deep vacuum extraction & modified atmosphere sealing for extended shelf life.',
        anchor: { x: 52, y: 39 },
        labelPos: { x: 22, y: 11 },
        align: 'left',
      },
      {
        id: 'hmi',
        zone: 'hmi',
        title: '21 CFR READY HMI/PLC',
        metric: 'Audit Trail Built-in',
        detail: 'Precision vacuum sensor feedback with batch logging and password tiers.',
        anchor: { x: 70, y: 31 },
        labelPos: { x: 66, y: 9 },
        align: 'right',
      },
      {
        id: 'output',
        zone: 'conveyor',
        title: 'OUTPUT: 85 TRAYS/MIN',
        metric: 'Zero-Leak Seal',
        detail: 'Automated tray indexing with precision contour film trimming & rewind.',
        anchor: { x: 84, y: 61 },
        labelPos: { x: 68, y: 79 },
        align: 'right',
      },
    ],
  },
];

// ----------------------------------------------------------------------------
// DATA: MACHINE CATALOG FOR "EXPLORE OUR MACHINES" SLIDE-OVER DRAWER
// ----------------------------------------------------------------------------
const CATALOG_MACHINES = [
  {
    code: 'IP-TF 420 PRO',
    name: 'Automatic Thermoforming Packaging Line',
    sector: 'Food',
    output: 'Up to 120 packs/min',
    frame: 'SS-304 Washdown Grade',
    control: 'Siemens / Mitsubishi Servo PLC',
    footprint: '4200 × 1150 mm',
    summary:
      'Rigid & flexible film thermoforming with vacuum/MAP gas flush for dairy, fresh food, and ready meals.',
  },
  {
    code: 'IP-BL 300 GMP',
    name: 'High-Speed Pharma Blister & Thermoformer',
    sector: 'Pharmaceutical',
    output: 'Up to 180 blisters/min',
    frame: 'SS-316L Contact / SS-304 Frame',
    control: '21 CFR Part 11 Compliant HMI',
    footprint: '3450 × 1050 mm',
    summary:
      'Precision ALU-ALU and PVC-ALU blister forming engineered for sterile pharmaceutical and medical devices.',
  },
  {
    code: 'IP-FW 250 HFFS',
    name: 'Servo Horizontal Flow Wrap System',
    sector: 'Food',
    output: 'Up to 220 packs/min',
    frame: 'SS-304 Cantilever Design',
    control: '3-Axis Full Servo Motion',
    footprint: '3850 × 980 mm',
    summary:
      'Zero-gap high-speed pillow-pack flow wrapper with automatic splicing and no-product-no-bag intelligence.',
  },
  {
    code: 'IP-VS 600 MAP',
    name: 'Inline Tray Sealer & Vacuum MAP System',
    sector: 'Food',
    output: 'Up to 85 trays/min',
    frame: 'SS-304 Hygienic Monoblock',
    control: '10" Touchscreen + O2 Analyzer',
    footprint: '2640 × 1120 mm',
    summary:
      'Hermetic modified-atmosphere tray sealing with quick-change die cassettes and inside-cut film aesthetics.',
  },
  {
    code: 'IP-SW 800 IND',
    name: 'Heavy-Duty Industrial Shrink & Case Tunnel',
    sector: 'Industrial',
    output: 'Up to 45 bundles/min',
    frame: 'Heavy Gauge SS-304 / Powder Coated',
    control: 'PID Thermal Air Recirculation',
    footprint: '4600 × 1350 mm',
    summary:
      'Automated collation and high-tension shrink bundling built for industrial components, hardware, and cartons.',
  },
  {
    code: 'IP-VP 500 MED',
    name: 'Medical Pouch & Sterile Barrier Sealer',
    sector: 'Pharmaceutical',
    output: 'Up to 60 cycles/min',
    frame: 'Cleanroom Grade SS-304',
    control: 'Validated ISO 11607 Process Control',
    footprint: '2100 × 920 mm',
    summary:
      'Validatable impulse & rotary medical sealing for Tyvek pouches, surgical kits, and diagnostic consumables.',
  },
];

// ----------------------------------------------------------------------------
// DATA: TRUST INDICATORS STRIP
// ----------------------------------------------------------------------------
const TRUST_PILLARS = [
  {
    index: '01',
    title: 'Since 1995',
    subtitle: '30+ years of Indian & global precision manufacturing',
    icon: Award,
  },
  {
    index: '02',
    title: 'Advanced Packaging Technology',
    subtitle: 'Servo-driven PLC automation & MAP vacuum systems',
    icon: Cpu,
  },
  {
    index: '03',
    title: 'Reliable Engineering',
    subtitle: 'Heavy-duty SS-304 construction built for 24/7 lines',
    icon: ShieldCheck,
  },
  {
    index: '04',
    title: 'Global Industry Solutions',
    subtitle: 'Serving food, pharmaceutical & industrial leaders',
    icon: Globe2,
  },
];

// ----------------------------------------------------------------------------
// COMPONENT: SLIDE-OVER — EXPLORE OUR MACHINES
// ----------------------------------------------------------------------------
function MachinesShowcaseDrawer({ isOpen, onClose, onSelectForQuote }) {
  const [sectorFilter, setSectorFilter] = useState('All');
  const sectors = ['All', 'Food', 'Pharmaceutical', 'Industrial'];

  const filteredMachines =
    sectorFilter === 'All'
      ? CATALOG_MACHINES
      : CATALOG_MACHINES.filter((m) => m.sector === sectorFilter);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex justify-end font-Poppins">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-[#111315]/50 backdrop-blur-sm"
          />

          <motion.aside
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.38, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 w-full max-w-2xl bg-[#F7F6F3] h-full flex flex-col border-l border-[#D8DBE0] shadow-2xl"
          >
            <div className="px-6 sm:px-8 py-6 bg-white border-b border-[#E5E7EB] flex items-start justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="w-5 h-[1.5px] bg-[#C8102E]" />
                  <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#C8102E] font-medium">
                    Machinery Portfolio · Est. 1995
                  </span>
                </div>
                <h2 className="text-2xl font-bold text-[#111315] tracking-tight">
                  Precision Packaging Systems
                </h2>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="p-2 text-[#525866] hover:text-[#111315] border border-[#E5E7EB] hover:border-[#111315] rounded-[2px] transition-colors cursor-pointer"
                aria-label="Close Machinery Portfolio"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="px-6 sm:px-8 py-3.5 bg-white border-b border-[#E5E7EB] flex items-center gap-2 overflow-x-auto">
              {sectors.map((sec) => {
                const active = sectorFilter === sec;
                return (
                  <button
                    key={sec}
                    type="button"
                    onClick={() => setSectorFilter(sec)}
                    className={`px-3.5 py-1.5 font-mono text-[11px] uppercase tracking-[0.12em] rounded-[2px] border transition-all whitespace-nowrap cursor-pointer ${
                      active
                        ? 'bg-[#111315] text-white border-[#111315]'
                        : 'bg-transparent text-[#525866] border-[#E5E7EB] hover:border-[#111315] hover:text-[#111315]'
                    }`}
                  >
                    {sec}
                  </button>
                );
              })}
            </div>

            <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-4">
              {filteredMachines.map((machine, idx) => (
                <motion.div
                  key={machine.code}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  className="bg-white border border-[#E5E7EB] hover:border-[#C8102E]/60 transition-colors p-5 sm:p-6 rounded-lg"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2.5">
                    <div className="flex items-center gap-2.5">
                      <span className="font-mono text-[11px] font-semibold tracking-[0.12em] text-[#C8102E]">
                        {machine.code}
                      </span>
                      <span className="w-1 h-1 rounded-full bg-[#CBD5E1]" />
                      <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-[#525866]">
                        {machine.sector}
                      </span>
                    </div>
                    <span className="font-mono text-[11px] text-[#111315] bg-[#F7F6F3] border border-[#E5E7EB] px-2 py-0.5">
                      {machine.output}
                    </span>
                  </div>

                  <h3 className="text-[17px] font-bold text-[#111315] mb-1.5">
                    {machine.name}
                  </h3>
                  <p className="text-[13.5px] text-[#525866] leading-relaxed mb-4">
                    {machine.summary}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-3.5 border-t border-[#ECEEF2] mb-4">
                    <div>
                      <div className="font-mono text-[10px] uppercase tracking-[0.1em] text-[#7D8592]">
                        Construction
                      </div>
                      <div className="text-[12.5px] font-semibold text-[#111315] mt-0.5">
                        {machine.frame}
                      </div>
                    </div>
                    <div>
                      <div className="font-mono text-[10px] uppercase tracking-[0.1em] text-[#7D8592]">
                        Automation
                      </div>
                      <div className="text-[12.5px] font-semibold text-[#111315] mt-0.5">
                        {machine.control}
                      </div>
                    </div>
                    <div>
                      <div className="font-mono text-[10px] uppercase tracking-[0.1em] text-[#7D8592]">
                        Footprint
                      </div>
                      <div className="font-mono text-[12px] font-medium text-[#111315] mt-0.5">
                        {machine.footprint}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-end">
                    <button
                      type="button"
                      onClick={() => onSelectForQuote(`${machine.code} — ${machine.name}`)}
                      className="inline-flex items-center gap-1.5 text-[12px] font-semibold uppercase tracking-[0.06em] text-[#C8102E] hover:text-[#111315] transition-colors cursor-pointer"
                    >
                      <FileText className="w-3.5 h-3.5" />
                      <span>Request Technical Spec & Quote</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.aside>
        </div>
      )}
    </AnimatePresence>
  );
}

// ----------------------------------------------------------------------------
// COMPONENT: SLIDE-OVER — TALK TO OUR EXPERTS
// ----------------------------------------------------------------------------
function ConsultationDrawer({ isOpen, onClose, preselectedMachine }) {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    industry: 'Food & Beverage',
    machineInterest: preselectedMachine || 'IP-TF 420 PRO — Automatic Thermoforming Line',
    requirements: '',
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (preselectedMachine) {
      setFormData((prev) => ({ ...prev, machineInterest: preselectedMachine }));
    }
  }, [preselectedMachine]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const resetAndClose = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex justify-end font-Poppins">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={resetAndClose}
            className="absolute inset-0 bg-[#111315]/50 backdrop-blur-sm"
          />

          <motion.aside
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.38, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 w-full max-w-xl bg-white h-full flex flex-col border-l border-[#D8DBE0] shadow-2xl"
          >
            <div className="px-6 sm:px-8 py-6 bg-[#F7F6F3] border-b border-[#E5E7EB] flex items-start justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="w-5 h-[1.5px] bg-[#C8102E]" />
                  <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#C8102E] font-medium">
                    Engineering Desk · Direct Response
                  </span>
                </div>
                <h2 className="text-2xl font-bold text-[#111315] tracking-tight">
                  Talk to Our Packaging Experts
                </h2>
              </div>
              <button
                type="button"
                onClick={resetAndClose}
                className="p-2 text-[#525866] hover:text-[#111315] border border-[#E5E7EB] hover:border-[#111315] rounded-[2px] transition-colors cursor-pointer"
                aria-label="Close Consultation Drawer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6 sm:p-8">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="py-12 px-6 bg-[#F7F6F3] border border-[#E5E7EB] text-center rounded-xl"
                >
                  <div className="w-12 h-12 mx-auto mb-4 bg-[#C8102E]/10 border border-[#C8102E]/30 flex items-center justify-center rounded-full">
                    <CheckCircle2 className="w-6 h-6 text-[#C8102E]" />
                  </div>
                  <div className="font-mono text-[11px] uppercase tracking-[0.16em] text-[#C8102E] mb-2 font-semibold">
                    Inquiry Registered · Ref #IP-{Math.floor(1000 + Math.random() * 8999)}
                  </div>
                  <h3 className="text-xl font-bold text-[#111315] mb-2">
                    Engineering Team Notified
                  </h3>
                  <p className="text-[14px] text-[#525866] max-w-sm mx-auto leading-relaxed mb-6">
                    Thank you, <span className="font-semibold text-[#111315]">{formData.name}</span>.
                    Our packaging automation specialists will review your{' '}
                    <span className="font-semibold text-[#111315]">{formData.industry}</span> line
                    requirements and respond within 1 business day.
                  </p>
                  <button
                    type="button"
                    onClick={resetAndClose}
                    className="px-6 py-3 bg-[#111315] text-white text-[12px] font-semibold uppercase tracking-[0.06em] rounded-md hover:bg-[#C8102E] transition-colors cursor-pointer"
                  >
                    Return to Overview
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <p className="text-[13.5px] text-[#525866] leading-relaxed">
                    Share your target output, packaging format, and facility standards. Our senior
                    application engineers provide tailored CAD layouts, line proposals, and sample
                    pack trials.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-mono text-[10.5px] uppercase tracking-[0.14em] text-[#525866] mb-1.5">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Rajesh Mehta"
                        className="w-full px-3.5 py-2.5 bg-[#F7F6F3] border border-[#D8DBE0] focus:border-[#C8102E] focus:bg-white focus:outline-none text-[14px] text-[#111315] rounded-md transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block font-mono text-[10.5px] uppercase tracking-[0.14em] text-[#525866] mb-1.5">
                        Company Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="e.g. Apex Foods Ltd."
                        className="w-full px-3.5 py-2.5 bg-[#F7F6F3] border border-[#D8DBE0] focus:border-[#C8102E] focus:bg-white focus:outline-none text-[14px] text-[#111315] rounded-md transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-mono text-[10.5px] uppercase tracking-[0.14em] text-[#525866] mb-1.5">
                      Work Email or Phone *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@company.com / +91 ..."
                      className="w-full px-3.5 py-2.5 bg-[#F7F6F3] border border-[#D8DBE0] focus:border-[#C8102E] focus:bg-white focus:outline-none text-[14px] text-[#111315] rounded-md transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block font-mono text-[10.5px] uppercase tracking-[0.14em] text-[#525866] mb-1.5">
                      Industry Sector
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {['Food & Beverage', 'Pharmaceutical', 'Industrial'].map((sector) => {
                        const selected = formData.industry === sector;
                        return (
                          <button
                            key={sector}
                            type="button"
                            onClick={() => setFormData({ ...formData, industry: sector })}
                            className={`py-2.5 px-2 text-[12px] font-semibold border rounded-md transition-all cursor-pointer ${
                              selected
                                ? 'bg-[#111315] text-white border-[#111315]'
                                : 'bg-[#F7F6F3] text-[#525866] border-[#D8DBE0] hover:border-[#111315]'
                            }`}
                          >
                            {sector}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div>
                    <label className="block font-mono text-[10.5px] uppercase tracking-[0.14em] text-[#525866] mb-1.5">
                      Machine Interest
                    </label>
                    <select
                      value={formData.machineInterest}
                      onChange={(e) =>
                        setFormData({ ...formData, machineInterest: e.target.value })
                      }
                      className="w-full px-3.5 py-2.5 bg-[#F7F6F3] border border-[#D8DBE0] focus:border-[#C8102E] focus:bg-white focus:outline-none text-[13.5px] text-[#111315] rounded-md transition-colors"
                    >
                      <option value="IP-TF 420 PRO — Automatic Thermoforming Line">
                        IP-TF 420 PRO — Automatic Thermoforming Line
                      </option>
                      <option value="IP-FW 250 HFFS — Flow Wrap System">
                        IP-FW 250 HFFS — Servo Flow Wrap System
                      </option>
                      <option value="IP-VS 600 MAP — Vacuum Tray Sealer">
                        IP-VS 600 MAP — Vacuum & MAP Tray Sealer
                      </option>
                      <option value="IP-BL 300 GMP — Pharma Blister Line">
                        IP-BL 300 GMP — Pharma Blister & Thermoformer
                      </option>
                      <option value="Custom Turnkey Packaging Automation">
                        Custom Turnkey Packaging Automation
                      </option>
                    </select>
                  </div>

                  <div>
                    <label className="block font-mono text-[10.5px] uppercase tracking-[0.14em] text-[#525866] mb-1.5">
                      Target Output & Packaging Specs (Optional)
                    </label>
                    <textarea
                      rows={3}
                      value={formData.requirements}
                      onChange={(e) => setFormData({ ...formData, requirements: e.target.value })}
                      placeholder="e.g. Required packs/min, film type (rigid/flexible), MAP vacuum requirements..."
                      className="w-full px-3.5 py-2.5 bg-[#F7F6F3] border border-[#D8DBE0] focus:border-[#C8102E] focus:bg-white focus:outline-none text-[13.5px] text-[#111315] rounded-md transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 bg-[#C8102E] hover:bg-[#A60D26] text-white text-[13px] font-semibold uppercase tracking-[0.06em] rounded-md flex items-center justify-center gap-2 transition-colors cursor-pointer shadow-md"
                  >
                    <span>Schedule Engineering Consultation</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <div className="pt-4 border-t border-[#ECEEF2] flex items-center justify-between text-[12px] text-[#525866]">
                    <span className="flex items-center gap-1.5 font-mono text-[11px]">
                      <PhoneCall className="w-3.5 h-3.5 text-[#C8102E]" />
                      ISO 9001:2015 Certified Plant
                    </span>
                    <span className="font-mono text-[11px]">ICON Packtech Pvt. Ltd.</span>
                  </div>
                </form>
              )}
            </div>
          </motion.aside>
        </div>
      )}
    </AnimatePresence>
  );
}

// ----------------------------------------------------------------------------
// MAIN HERO COMPONENT WITH REACT BITS PARTICLE IMAGE ANIMATION
// ----------------------------------------------------------------------------
export default function ParticleHeroSection({ onNavigate }) {
  const [selectedSeriesIdx, setSelectedSeriesIdx] = useState(0);
  const [hoveredCalloutId, setHoveredCalloutId] = useState(null);
  const [machinesDrawerOpen, setMachinesDrawerOpen] = useState(false);
  const [consultDrawerOpen, setConsultDrawerOpen] = useState(false);
  const [preselectedMachine, setPreselectedMachine] = useState('');

  const activeMachine = MACHINE_SERIES[selectedSeriesIdx];

  // Weighted Spring Mouse Parallax
  const heroStageRef = useRef(null);
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);

  const springConfig = { stiffness: 120, damping: 24, mass: 0.7 };
  const smoothX = useSpring(rawX, springConfig);
  const smoothY = useSpring(rawY, springConfig);

  const machineX = useTransform(smoothX, [-0.5, 0.5], [-10, 10]);
  const machineY = useTransform(smoothY, [-0.5, 0.5], [-6, 6]);
  const glowX = useTransform(smoothX, [-0.5, 0.5], [-20, 20]);
  const glowY = useTransform(smoothY, [-0.5, 0.5], [-15, 15]);

  const handleStageMouseMove = (e) => {
    if (!heroStageRef.current) return;
    const rect = heroStageRef.current.getBoundingClientRect();
    const normX = (e.clientX - rect.left) / rect.width - 0.5;
    const normY = (e.clientY - rect.top) / rect.height - 0.5;
    rawX.set(normX);
    rawY.set(normY);
  };

  const handleStageMouseLeave = () => {
    rawX.set(0);
    rawY.set(0);
  };

  const handleSelectForQuote = (machineName) => {
    setPreselectedMachine(machineName);
    setMachinesDrawerOpen(false);
    setConsultDrawerOpen(true);
  };

  const headlineLines = [
    { text: 'Engineering Smarter', accent: false },
    { text: 'Packaging for a', accent: false },
    { text: 'Better Tomorrow', accent: true },
  ];

  return (
    <div
      id="top"
      className="bg-[#F7F6F3] text-[#111315] flex flex-col font-Poppins selection:bg-[#C8102E] selection:text-white"
    >
      {/* Blueprint Grid Background Pattern */}
      <style>{`
        .blueprint-grid-subtle {
          background-image:
            linear-gradient(to right, rgba(17, 19, 21, 0.045) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(17, 19, 21, 0.045) 1px, transparent 1px);
          background-size: 48px 48px;
        }
        .blueprint-grid-stage {
          background-image:
            linear-gradient(to right, rgba(17, 19, 21, 0.055) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(17, 19, 21, 0.055) 1px, transparent 1px);
          background-size: 32px 32px;
        }
      `}</style>

      {/* Main Hero Grid */}
      <section className="relative flex-1 flex flex-col justify-between overflow-x-clip blueprint-grid-subtle">
        <div
          aria-hidden="true"
          className="hidden lg:block pointer-events-none absolute inset-y-0 left-[41.6667%] w-px bg-[#E5E7EB]/80"
        />

        <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 pt-8 sm:pt-12 lg:pt-14 pb-10 lg:pb-14 flex-1 flex items-center">
          <div className="w-full grid grid-cols-1 lg:grid-cols-12 lg:grid-rows-[auto_1fr] gap-y-8 lg:gap-y-0 lg:gap-x-10 items-start">
            {/* ===============================================================
                LEFT COLUMN: EDITORIAL HEADLINE & COPY
               =============================================================== */}
            <div className="lg:col-span-5 lg:col-start-1 lg:row-start-1 lg:pt-4 lg:pr-4">
              <motion.div
                initial={{ opacity: 0, x: -14 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                className="inline-flex items-center gap-3 mb-5 sm:mb-6"
              >
                <span className="w-7 h-[2px] bg-[#C8102E]" />
                <span className="font-mono text-[11px] sm:text-[11.5px] font-semibold uppercase tracking-[0.2em] text-[#C8102E]">
                  ENGINEERING EXCELLENCE SINCE 1995
                </span>
              </motion.div>

              <h1 className="text-[38px] sm:text-[50px] lg:text-[52px] xl:text-[60px] font-extrabold text-[#111315] leading-[1.05] tracking-[-0.03em] mb-5 sm:mb-6">
                {headlineLines.map((line, i) => (
                  <span key={line.text} className="block overflow-hidden pb-[0.06em]">
                    <motion.span
                      className="block"
                      initial={{ y: '108%', opacity: 0 }}
                      animate={{ y: '0%', opacity: 1 }}
                      transition={{
                        duration: 0.72,
                        delay: 0.1 + i * 0.11,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                    >
                      {line.text}
                      {line.accent && <span className="text-[#C8102E]">.</span>}
                    </motion.span>
                  </span>
                ))}
              </h1>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.44, ease: [0.16, 1, 0.3, 1] }}
                className="text-[15.5px] sm:text-[16.5px] text-[#525866] leading-[1.68] max-w-[500px] font-normal"
              >
                Innovative packaging machinery engineered for precision, performance and
                reliability. Empowering food, pharmaceutical and industrial businesses with
                advanced packaging automation.
              </motion.p>
            </div>

            {/* ===============================================================
                RIGHT COLUMN: REACT BITS PARTICLE IMAGE MACHINE STAGE
               =============================================================== */}
            <div
              ref={heroStageRef}
              onMouseMove={handleStageMouseMove}
              onMouseLeave={handleStageMouseLeave}
              className="lg:col-span-7 lg:col-start-6 lg:row-start-1 lg:row-span-2 relative lg:pl-6"
            >
              <div className="relative bg-[#EFECE6]/85 border border-[#DDDAD3] blueprint-grid-stage pt-6 pb-8 sm:pt-8 sm:pb-10 lg:pt-8 lg:pb-10 px-3 sm:px-6 lg:px-8 rounded-2xl shadow-xl">
                {/* Architectural Crosshairs */}
                <span className="pointer-events-none absolute -top-[9px] -left-[6px] font-mono text-[13px] text-[#9EA4AE]">
                  +
                </span>
                <span className="pointer-events-none absolute -top-[9px] -right-[5px] font-mono text-[13px] text-[#9EA4AE]">
                  +
                </span>
                <span className="pointer-events-none absolute -bottom-[10px] -left-[6px] font-mono text-[13px] text-[#9EA4AE]">
                  +
                </span>
                <span className="pointer-events-none absolute -bottom-[10px] -right-[5px] font-mono text-[13px] text-[#9EA4AE]">
                  +
                </span>

                {/* Top Blueprint Bar & Dimension Metrics */}
                <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-[#E0DDD6] mb-3">
                  <div className="flex items-center gap-2.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#C8102E] animate-pulse" />
                    <span className="font-mono text-[11px] font-bold uppercase tracking-[0.14em] text-[#111315]">
                      {activeMachine.modelCode}
                    </span>
                    <span className="text-[#C5C8CE]">/</span>
                    <span className="font-mono text-[10.5px] uppercase tracking-[0.12em] text-[#525866]">
                      {activeMachine.category}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 font-mono text-[10.5px] tracking-[0.08em] text-[#525866]">
                    <Sliders className="w-3.5 h-3.5 text-[#C8102E]" />
                    <span>{activeMachine.dimensions}</span>
                  </div>
                </div>

                {/* Warm Red Glow Ambient Backdrop */}
                <motion.div
                  aria-hidden="true"
                  style={{ x: glowX, y: glowY }}
                  className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[85%] h-[75%] rounded-full"
                >
                  <div
                    className="w-full h-full rounded-full"
                    style={{
                      background:
                        'radial-gradient(ellipse at center, rgba(200, 16, 46, 0.12) 0%, rgba(200, 16, 46, 0.04) 50%, rgba(200, 16, 46, 0) 75%)',
                    }}
                  />
                </motion.div>

                {/* Machine Stage with Particle Image Component */}
                <div className="relative z-10 flex flex-col items-center justify-center my-2">
                  <motion.div
                    key={activeMachine.id}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    style={{ x: machineX, y: machineY }}
                    className="w-full flex justify-center"
                  >
                    <ParticleImage
                      imageSrc={activeMachine.image}
                      width={580}
                      height={370}
                      particleGap={3.5}
                      particleSize={1.7}
                      mouseRadius={85}
                      repelForce={7}
                      autoSwirlInterval={7000}
                    />
                  </motion.div>
                </div>

                {/* Machine Series Switcher Tabs */}
                <div className="relative z-20 mt-4 flex flex-wrap items-center justify-between gap-3 pt-3.5 border-t border-[#E0DDD6]">
                  <span className="hidden sm:inline-flex items-center gap-1.5 font-mono text-[10.5px] uppercase tracking-[0.14em] text-[#727985]">
                    <Gauge className="w-3.5 h-3.5 text-[#C8102E]" />
                    <span>Switch Model to Swirl & Reform</span>
                  </span>

                  <div
                    role="tablist"
                    aria-label="Select Packaging Machine Series"
                    className="flex flex-wrap items-center gap-1.5 ml-auto"
                  >
                    {MACHINE_SERIES.map((series, idx) => {
                      const active = selectedSeriesIdx === idx;
                      return (
                        <button
                          key={series.id}
                          role="tab"
                          type="button"
                          aria-selected={active}
                          onClick={() => {
                            setSelectedSeriesIdx(idx);
                            setHoveredCalloutId(null);
                          }}
                          className={`relative px-3 py-1.5 font-mono text-[11px] tracking-[0.06em] transition-all cursor-pointer rounded-md ${
                            active
                              ? 'text-[#111315] font-bold bg-white border border-[#D4D1C9] shadow-sm'
                              : 'text-[#666D7A] hover:text-[#111315] border border-transparent'
                          }`}
                        >
                          <span className={active ? 'text-[#C8102E] mr-1' : 'text-[#9BA1AC] mr-1'}>
                            {series.index} /
                          </span>
                          <span>{series.shortName}</span>
                          {active && (
                            <motion.span
                              layoutId="active-particle-tab"
                              className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#C8102E] rounded-full"
                              transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                            />
                          )}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>

            {/* ===============================================================
                BOTTOM LEFT: CTA BUTTONS
               =============================================================== */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.56, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-5 lg:col-start-1 lg:row-start-2 lg:self-start lg:pt-8 lg:pr-4"
            >
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
                <motion.button
                  type="button"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setMachinesDrawerOpen(true)}
                  className="relative overflow-hidden group px-6 sm:px-7 py-4 bg-[#C8102E] text-white text-[13.5px] font-semibold tracking-[0.04em] uppercase rounded-md inline-flex items-center justify-center gap-3 cursor-pointer shadow-lg hover:shadow-xl transition-shadow"
                >
                  <span className="relative z-10">Explore Our Machines</span>
                  <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
                </motion.button>

                <motion.button
                  type="button"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => {
                    setPreselectedMachine('');
                    setConsultDrawerOpen(true);
                  }}
                  className="group px-6 sm:px-7 py-4 bg-transparent border border-[#111315] hover:border-[#C8102E] text-[#111315] hover:text-[#C8102E] text-[13.5px] font-semibold tracking-[0.04em] uppercase rounded-md inline-flex items-center justify-center gap-2.5 transition-colors cursor-pointer"
                >
                  <span>Talk to Our Experts</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </motion.button>
              </div>

              <div className="mt-7 pt-5 border-t border-[#E5E7EB] flex flex-wrap items-center gap-x-6 gap-y-2">
                <div className="flex items-center gap-2">
                  <Layers className="w-3.5 h-3.5 text-[#C8102E]" />
                  <span className="font-mono text-[11px] text-[#525866] tracking-[0.04em]">
                    Food · Pharma · Industrial
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Sparkles className="w-3.5 h-3.5 text-[#C8102E]" />
                  <span className="font-mono text-[11px] text-[#525866] tracking-[0.04em]">
                    SS-304 / GMP Compliant Build
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* ===================================================================
            TRUST INDICATORS BAR
           =================================================================== */}
        <section
          aria-label="ICON Packtech Engineering Pillars"
          className="relative z-10 w-full bg-white/90 backdrop-blur-sm border-t border-[#E5E7EB]"
        >
          <div className="max-w-[1440px] mx-auto grid grid-cols-2 lg:grid-cols-4 divide-y lg:divide-y-0 divide-x divide-[#E5E7EB]">
            {TRUST_PILLARS.map((pillar, idx) => {
              const IconComponent = pillar.icon;
              return (
                <motion.div
                  key={pillar.index}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.55,
                    delay: 0.62 + idx * 0.08,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="group px-4 sm:px-6 lg:px-8 py-5 sm:py-6 flex flex-col justify-between hover:bg-[#F7F6F3]/80 transition-colors"
                >
                  <div className="flex items-center justify-between mb-2.5">
                    <span className="font-mono text-[11px] font-semibold tracking-[0.14em] text-[#C8102E]">
                      {pillar.index}
                    </span>
                    <IconComponent className="w-4 h-4 text-[#7D8592] group-hover:text-[#C8102E] transition-colors" />
                  </div>
                  <div>
                    <h2 className="text-[13.5px] sm:text-[14.5px] font-bold text-[#111315] leading-snug">
                      {pillar.title}
                    </h2>
                    <p className="hidden sm:block text-[12px] text-[#525866] mt-1 leading-relaxed">
                      {pillar.subtitle}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>
      </section>

      {/* Drawers */}
      <MachinesShowcaseDrawer
        isOpen={machinesDrawerOpen}
        onClose={() => setMachinesDrawerOpen(false)}
        onSelectForQuote={handleSelectForQuote}
      />

      <ConsultationDrawer
        isOpen={consultDrawerOpen}
        onClose={() => setConsultDrawerOpen(false)}
        preselectedMachine={preselectedMachine}
      />
    </div>
  );
}
