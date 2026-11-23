import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  Cpu,
} from 'lucide-react';

export const DEFAULT_MACHINES = [
  {
    id: 'thermoforming-pro',
    modelCode: 'IP-TF 420 PRO',
    name: 'Thermoforming Packaging Machine',
    titleLine1: 'Stand Out',
    titleLine2: 'With Precision',
    description:
      'Engineered for maximum hygiene and vacuum sealing performance in food & pharma packaging. Full SS-304 stainless steel washdown chassis with servo-driven continuous indexing.',
    metric: '120 PPM',
    subMetric: 'Standard 80 PPM',
    badge: '01',
    image: '/product-image/Product1.png',
    taglineLine1: 'Industrial Excellence,',
    taglineLine2: 'sealed with airtight precision',
    category: 'Food & Pharma Packaging',
    specs: {
      speed: '120 Packs/Min',
      vacuum: '2.4 mbar',
      power: '3-Phase 415V',
    },
  },
  {
    id: 'tray-sealer-map',
    modelCode: 'IP-VS 600 MAP',
    name: 'Modified Atmosphere Tray Sealer',
    titleLine1: 'Extended Life,',
    titleLine2: 'Zero Compromise',
    description:
      'High-speed continuous MAP tray sealing system for fresh meat, ready meals, and produce. Advanced gas-flushing matrix guarantees extended shelf-life without chemical preservatives.',
    metric: '85 PPM',
    subMetric: 'Standard 50 PPM',
    badge: '02',
    image: '/product-image/Product2.png',
    taglineLine1: 'Advanced MAP Gas Flush,',
    taglineLine2: 'freshness preserved naturally',
    category: 'Tray Sealing Solutions',
    specs: {
      speed: '85 Trays/Min',
      vacuum: '99.8% O2 Evac',
      power: '3-Phase 415V',
    },
  },
  {
    id: 'linear-cup-filler',
    modelCode: 'IP-CF 300 AUTO',
    name: 'Linear Cup Filling & Sealing Line',
    titleLine1: 'Pure Velocity,',
    titleLine2: 'Sterile Flow',
    description:
      'Ultra-clean automated multi-lane cup filling and sealing machine with servo volumetric dosing for dairy, yogurts, dips, and liquid pharmaceuticals.',
    metric: '140 PPM',
    subMetric: 'Standard 90 PPM',
    badge: '03',
    image: '/product-image/Product3.png',
    taglineLine1: 'Multi-Lane Dosing,',
    taglineLine2: 'sterile cup packaging standard',
    category: 'Dairy & Liquid Systems',
    specs: {
      speed: '140 Cups/Min',
      accuracy: '±0.2g Dosing',
      power: '3-Phase 415V',
    },
  },
  {
    id: 'flow-wrap-hffs',
    modelCode: 'IP-FW 250 HFFS',
    name: 'High-Speed Flow Wrap System',
    titleLine1: 'Ultra Speed,',
    titleLine2: 'Flawless Form',
    description:
      'Continuous horizontal form-fill-seal flow wrap system for bakery, confections, and industrial hardware. Servo tension control eliminates film breakage during 24/7 continuous runs.',
    metric: '250 PPM',
    subMetric: 'Standard 160 PPM',
    badge: '04',
    image: '/product-image/Product4.png',
    taglineLine1: '24/7 Continuous Indexing,',
    taglineLine2: 'maximum throughput guaranteed',
    category: 'Horizontal Form-Fill-Seal',
    specs: {
      speed: '250 Packs/Min',
      film: 'BOPP / Laminates',
      power: '3-Phase 415V',
    },
  },
];

export default function MachineShowcaseHero({
  machines = DEFAULT_MACHINES,
  autoPlayInterval = 5500,
  onNavigate,
  onOpenBrochure,
  className = '',
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef(null);

  const total = machines.length;
  const currentMachine = machines[currentIndex];
  const prevIndex = (currentIndex - 1 + total) % total;
  const prevMachine = machines[prevIndex];
  const nextIndex = (currentIndex + 1) % total;
  const nextMachine = machines[nextIndex];

  const handlePrev = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev === 0 ? total - 1 : prev - 1));
  }, [total]);

  const handleNext = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % total);
  }, [total]);

  const selectMachine = useCallback(
    (idx) => {
      if (idx === currentIndex) return;
      setDirection(idx > currentIndex ? 1 : -1);
      setCurrentIndex(idx);
    },
    [currentIndex]
  );

  useEffect(() => {
    if (isPaused) return;
    timerRef.current = setInterval(() => {
      handleNext();
    }, autoPlayInterval);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused, autoPlayInterval, handleNext]);

  return (
    <section
      aria-label="ICON Packtech Machine Showcase"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      className={`relative w-full min-h-[calc(100vh-80px)] flex items-center overflow-hidden bg-white text-slate-800 py-10 lg:py-12 font-Poppins select-none ${className}`}
    >
      {/* Background Dot Pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.35]"
        style={{
          backgroundImage:
            'radial-gradient(rgba(220, 38, 38, 0.12) 1px, transparent 1px)',
          backgroundSize: '36px 36px',
        }}
        aria-hidden="true"
      />

      {/* Background Diagonal / Ambient Graphic */}
      <div className="absolute inset-0 pointer-events-none z-0 opacity-30">
        <img
          src="/home/productbg.png"
          alt="ICON Packtech Machinery Background"
          className="w-full h-full object-cover object-center pointer-events-none select-none"
          loading="eager"
          decoding="async"
        />
      </div>

      {/* Central Ambient Spotlight */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] sm:w-[680px] h-[420px] sm:h-[540px] rounded-full bg-gradient-to-tr from-red-500/10 via-rose-400/5 to-transparent blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      {/* Main Content Container */}
      <div className="relative z-10 w-full max-w-[1360px] mx-auto px-6 sm:px-10 lg:px-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">
          {/* ===============================================================
              LEFT COLUMN (4 cols): Controls, Headline, Description & CTAs
             =============================================================== */}
          <div className="lg:col-span-4 flex flex-col items-start justify-center order-2 lg:order-1">
            {/* Top Navigation Arrows + Slide Counter */}
            <div className="flex items-center gap-3 mb-6">
              <button
                type="button"
                onClick={handlePrev}
                aria-label="Previous machine"
                className="w-9 h-9 rounded-full border border-slate-300 bg-white/80 backdrop-blur-sm flex items-center justify-center text-slate-700 hover:border-red-600 hover:text-red-600 hover:bg-red-50 transition-all cursor-pointer shadow-xs"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={handleNext}
                aria-label="Next machine"
                className="w-9 h-9 rounded-full border border-slate-300 bg-white/80 backdrop-blur-sm flex items-center justify-center text-slate-700 hover:border-red-600 hover:text-red-600 hover:bg-red-50 transition-all cursor-pointer shadow-xs"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
              <span className="text-xs font-mono font-semibold text-slate-400 tracking-widest pl-1">
                {String(currentIndex + 1).padStart(2, '0')} /{' '}
                {String(total).padStart(2, '0')}
              </span>
            </div>

            <AnimatePresence mode="popLayout" custom={direction}>
              <motion.div
                key={currentMachine.id + '-left'}
                custom={direction}
                variants={{
                  enter: (dir) => ({
                    opacity: 0,
                    y: dir > 0 ? 16 : -16,
                  }),
                  center: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] },
                  },
                  exit: (dir) => ({
                    opacity: 0,
                    y: dir > 0 ? -16 : 16,
                    transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
                  }),
                }}
                initial="enter"
                animate="center"
                exit="exit"
                className="w-full space-y-4"
              >
                {/* Category Pill */}
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-red-50 border border-red-200/80 text-[11px] tracking-wider uppercase text-icon font-bold">
                  <Cpu className="w-3.5 h-3.5 text-red-600 shrink-0" />
                  <span>{currentMachine.category}</span>
                </div>

                {/* Headline */}
                <h1 className="text-3xl sm:text-4xl xl:text-[46px] font-bold tracking-tight text-slate-900 leading-[1.12]">
                  <span>{currentMachine.titleLine1}</span>
                  <br />
                  <span className="text-icon font-extrabold">
                    {currentMachine.titleLine2}
                  </span>
                </h1>

                {/* Description */}
                <p className="text-slate-600 text-sm leading-relaxed max-w-[420px]">
                  {currentMachine.description}
                </p>

                {/* Action Buttons */}
                <div className="pt-3 flex flex-wrap items-center gap-3">
                  <button
                    type="button"
                    onClick={() => {
                      if (onNavigate) {
                        onNavigate('/all-packaging-machines');
                      } else if (onOpenBrochure) {
                        onOpenBrochure();
                      }
                    }}
                    className="group inline-flex items-center gap-2.5 px-6 py-3 bs-mix-red hover:opacity-95 text-white rounded-full font-bold tracking-wide text-xs shadow-[0_8px_20px_-4px_rgba(239,68,68,0.4)] hover:scale-[1.03] active:scale-95 transition-all duration-200 cursor-pointer"
                  >
                    <span>Get machine specs</span>
                    <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      if (onNavigate) onNavigate('/contact-us');
                    }}
                    className="px-5 py-3 rounded-full text-xs font-semibold text-slate-700 hover:text-red-600 hover:bg-red-50 border border-slate-300 transition-all cursor-pointer"
                  >
                    Quick Quote
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* ===============================================================
              CENTER STAGE (5 cols): Large Active Machine + Bottom Tagline
             =============================================================== */}
          <div className="lg:col-span-5 relative flex flex-col items-center justify-center order-1 lg:order-2">
            {/* Machine Stage */}
            <div className="relative w-full max-w-[440px] sm:max-w-[520px] lg:max-w-[560px] h-[280px] sm:h-[340px] lg:h-[380px] flex items-center justify-center">
              <AnimatePresence mode="popLayout" custom={direction}>
                <motion.div
                  key={currentMachine.id}
                  custom={direction}
                  variants={{
                    enter: (dir) => ({
                      x: dir > 0 ? 220 : -220,
                      y: dir > 0 ? 120 : -120,
                      scale: 0.45,
                      opacity: 0,
                    }),
                    center: {
                      x: 0,
                      y: 0,
                      scale: 1,
                      opacity: 1,
                      transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] },
                    },
                    exit: (dir) => ({
                      x: dir > 0 ? -220 : 220,
                      y: dir > 0 ? -120 : 120,
                      scale: 0.45,
                      opacity: 0,
                      transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] },
                    }),
                  }}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="relative w-full h-full flex items-center justify-center z-10"
                >
                  <motion.div
                    animate={{ y: [-5, 5, -5] }}
                    transition={{
                      duration: 4.5,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                    className="w-full h-full flex items-center justify-center"
                  >
                    <img
                      src={currentMachine.image}
                      alt={currentMachine.name}
                      className="w-full h-full object-contain drop-shadow-[0_22px_36px_rgba(0,0,0,0.18)] transition-transform duration-300 hover:scale-[1.03]"
                      loading="eager"
                      decoding="async"
                    />
                  </motion.div>
                </motion.div>
              </AnimatePresence>

              {/* Ground Contact Shadow */}
              <motion.div
                animate={{
                  scale: [1, 1.06, 1],
                  opacity: [0.18, 0.25, 0.18],
                }}
                transition={{
                  duration: 4.5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="absolute bottom-2 w-[68%] h-5 bg-slate-900/20 rounded-[100%] blur-lg pointer-events-none"
                aria-hidden="true"
              />
            </div>

            {/* Bottom Tagline */}
            <AnimatePresence mode="popLayout" custom={direction}>
              <motion.div
                key={currentMachine.id + '-tagline'}
                custom={direction}
                variants={{
                  enter: (dir) => ({ opacity: 0, y: dir > 0 ? 10 : -10 }),
                  center: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] },
                  },
                  exit: (dir) => ({
                    opacity: 0,
                    y: dir > 0 ? -10 : 10,
                    transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
                  }),
                }}
                initial="enter"
                animate="center"
                exit="exit"
                className="mt-4 text-center"
              >
                <p className="text-xs sm:text-sm font-medium text-slate-500">
                  {currentMachine.taglineLine1}
                </p>
                <p className="text-xs sm:text-sm font-bold text-icon">
                  {currentMachine.taglineLine2}
                </p>
              </motion.div>
            </AnimatePresence>

            {/* Dot Indicators for Quick Switching */}
            <div className="flex items-center gap-2 mt-4">
              {machines.map((m, idx) => (
                <button
                  key={m.id}
                  type="button"
                  onClick={() => selectMachine(idx)}
                  aria-label={`Select ${m.name}`}
                  className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                    idx === currentIndex
                      ? 'w-7 bg-red-600'
                      : 'w-2 bg-slate-300 hover:bg-slate-400'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* ===============================================================
              RIGHT COLUMN (3 cols): Output Metric & Floating Next Machine
             =============================================================== */}
          <div className="lg:col-span-3 flex flex-row lg:flex-col items-center lg:items-end justify-between lg:justify-center gap-6 lg:gap-12 order-3 border-t lg:border-t-0 border-slate-200/70 pt-6 lg:pt-0">
            {/* Top Output Metric */}
            <AnimatePresence mode="popLayout" custom={direction}>
              <motion.div
                key={currentMachine.id + '-metric'}
                custom={direction}
                variants={{
                  enter: (dir) => ({ opacity: 0, y: dir > 0 ? 14 : -14 }),
                  center: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] },
                  },
                  exit: (dir) => ({
                    opacity: 0,
                    y: dir > 0 ? -14 : 14,
                    transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
                  }),
                }}
                initial="enter"
                animate="center"
                exit="exit"
                className="text-left lg:text-right"
              >
                <div className="text-3xl sm:text-4xl xl:text-[42px] font-extrabold text-icon tracking-tight leading-none">
                  {currentMachine.metric}
                </div>
                <div className="text-xs text-slate-400 font-mono line-through mt-1.5">
                  {currentMachine.subMetric}
                </div>
                <div className="inline-block mt-2 px-2.5 py-0.5 rounded bg-slate-100 text-[11px] text-slate-800 font-bold uppercase tracking-widest">
                  {currentMachine.modelCode}
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Next Machine Preview Trigger */}
            <div
              onClick={handleNext}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') handleNext();
              }}
              role="button"
              tabIndex={0}
              aria-label={`Next machine: ${nextMachine.name}`}
              className="group cursor-pointer flex flex-col items-end transition-transform duration-300 hover:scale-105"
            >
              <div className="relative w-32 h-24 sm:w-40 sm:h-28 flex items-center justify-center">
                <AnimatePresence mode="popLayout" custom={direction}>
                  <motion.div
                    key={nextMachine.id + '-bottom-next'}
                    custom={direction}
                    variants={{
                      enter: (dir) => ({
                        opacity: 0,
                        x: dir > 0 ? 24 : -24,
                        scale: 0.9,
                      }),
                      center: {
                        opacity: 1,
                        x: 0,
                        scale: 1,
                        transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
                      },
                      exit: (dir) => ({
                        opacity: 0,
                        x: dir > 0 ? -24 : 24,
                        scale: 0.9,
                        transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] },
                      }),
                    }}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    className="w-full h-full flex items-center justify-center"
                  >
                    <img
                      src={nextMachine.image}
                      alt={nextMachine.name}
                      className="w-full h-full object-contain drop-shadow-[0_10px_20px_rgba(0,0,0,0.14)] group-hover:scale-105 transition-transform duration-300"
                      loading="eager"
                    />
                  </motion.div>
                </AnimatePresence>
                <div className="absolute -bottom-1 w-[65%] h-2.5 bg-slate-900/15 rounded-[100%] blur-sm pointer-events-none" />
              </div>

              <div className="flex items-center gap-1 mt-2 text-[11px] font-mono font-bold text-slate-600 group-hover:text-red-600 transition-colors">
                <span className="uppercase tracking-wider">Next Machine</span>
                <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}