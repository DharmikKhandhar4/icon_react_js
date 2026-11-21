import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  ShieldCheck,
  Cpu,
} from 'lucide-react';

/**
 * ============================================================================
 * MachineShowcaseHero Component
 * Inspired by Pinterest Studio 3D Showcase Layout:
 * - Clean white backdrop with signature text-icon gradient red branding.
 * - Top-left: Circular < > navigation buttons + floating Previous Machine with shadow.
 * - Center: Large active machine with ambient spotlight & soft ground contact shadow.
 * - Bottom-right: Floating Next Machine with soft ground contact shadow (unboxed).
 * - Spatial 3D transitions:
 *    * Next: Bottom-right flies to center; center flies to top-left.
 *    * Prev: Top-left flies to center; center flies to bottom-right.
 * - Zero blur filter on text and images for razor-sharp clarity.
 * ============================================================================
 */

// Default machines data
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
  const [direction, setDirection] = useState(1); // 1 = forward, -1 = backward
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0);
  const timerRef = useRef(null);

  const total = machines.length;
  const currentMachine = machines[currentIndex];
  const prevIndex = (currentIndex - 1 + total) % total;
  const prevMachine = machines[prevIndex];
  const nextIndex = (currentIndex + 1) % total;
  const nextMachine = machines[nextIndex];

  // Navigation handlers with spatial direction tracking
  const handlePrev = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev === 0 ? total - 1 : prev - 1));
    setProgress(0);
  }, [total]);

  const handleNext = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % total);
    setProgress(0);
  }, [total]);

  const selectMachine = useCallback(
    (idx) => {
      if (idx === currentIndex) return;
      setDirection(idx > currentIndex ? 1 : -1);
      setCurrentIndex(idx);
      setProgress(0);
    },
    [currentIndex]
  );

  // Automatic slide cycle with smooth progress indicator
  useEffect(() => {
    if (isPaused) return;

    const intervalStep = 50;
    const totalSteps = autoPlayInterval / intervalStep;

    timerRef.current = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          handleNext();
          return 0;
        }
        return prev + 100 / totalSteps;
      });
    }, intervalStep);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused, autoPlayInterval, handleNext]);

  return (
    <section
      aria-label="ICON Packtech Machine Showcase"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      className={`relative w-full overflow-hidden bg-white text-slate-800 pt-20 sm:pt-4 pb-8 font-Poppins select-none ${className}`}
    >
      {/* Subtle background ambient mesh */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.35]"
        style={{
          backgroundImage:
            'radial-gradient(rgba(220, 38, 38, 0.12) 1px, transparent 1px)',
          backgroundSize: '36px 36px',
        }}
        aria-hidden="true"
      />

      {/* Ambient Central Spotlight behind machine */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] sm:w-[720px] h-[450px] sm:h-[580px] rounded-full bg-gradient-to-tr from-red-500/10 via-rose-400/5 to-transparent blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative max-w-[1440px] mx-auto min-h-[640px] sm:min-h-[700px] lg:min-h-[760px] px-6 sm:px-10 lg:px-14 py-4 lg:py-6 flex flex-col justify-between">
        {/* ===================================================================
            TOP BAR CONTROLS (Matching Pinterest Image 1 & 2 Top-Left)
            - Circular < > buttons
            - Floating Previous Machine with soft shadow
           =================================================================== */}
   

        {/* ===================================================================
            MAIN 3-COLUMN HERO GRID
           =================================================================== */}
        <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-4 items-center my-auto py-2 sm:py-4 overflow-visible">
          {/* ---------------------------------------------------------------
              LEFT COLUMN: Headline, Description & CTA Button
             --------------------------------------------------------------- */}
          <div className="lg:col-span-4 z-20 flex flex-col items-start justify-center order-2 lg:order-1">
            <AnimatePresence mode="popLayout" custom={direction}>
              <motion.div
                key={currentMachine.id + '-left'}
                custom={direction}
                variants={{
                  enter: (dir) => ({
                    opacity: 0,
                    y: dir > 0 ? 18 : -18,
                  }),
                  center: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.65,
                      ease: [0.16, 1, 0.3, 1],
                    },
                  },
                  exit: (dir) => ({
                    opacity: 0,
                    y: dir > 0 ? -18 : 18,
                    transition: {
                      duration: 0.5,
                      ease: [0.16, 1, 0.3, 1],
                    },
                  }),
                }}
                initial="enter"
                animate="center"
                exit="exit"
                className="space-y-4 sm:space-y-5"
              >
                {/* Category Pill */}
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-red-50 border border-red-200/80 text-[11px] font-mono tracking-wider uppercase text-icon font-bold">
                  <Cpu className="w-3.5 h-3.5 text-red-600" />
                  <span>{currentMachine.category}</span>
                </div>

                {/* Main Headline with text-icon color */}
                <div className="relative">
                  {/* Subtle accent indicator dot matching Image 1 */}
                  <span className="hidden sm:inline-block absolute -left-4 top-3 w-2 h-2 rounded-full bg-emerald-500" />
                  <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-5xl font-bold tracking-tight text-slate-900 leading-[1.08]">
                    <span>{currentMachine.titleLine1}</span>
                    <br />
                    <span className="text-icon font-extrabold">
                      {currentMachine.titleLine2}
                    </span>
                  </h1>
                </div>

                {/* Product Description (Clean, Zero Blur) */}
                <p className="text-slate-600 text-xs sm:text-sm lg:text-[14px] leading-relaxed max-w-[430px]">
                  {currentMachine.description}
                </p>

                {/* Primary CTA Buttons (Pill shaped matching Pinterest button) */}
                <div className="pt-2 sm:pt-4 flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => {
                      if (onNavigate) {
                        onNavigate('/all-packaging-machines');
                      } else if (onOpenBrochure) {
                        onOpenBrochure();
                      }
                    }}
                    className="group inline-flex items-center gap-2.5 px-6 sm:px-7 py-3 sm:py-3 bs-mix-red hover:opacity-95 text-white rounded-full font-bold text-xs sm:text-sm tracking-wide shadow-[0_8px_20px_-4px_rgba(239,68,68,0.4)] hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer"
                  >
                    <span>Get machine specs</span>
                    <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      if (onNavigate) onNavigate('/contact-us');
                    }}
                    className="px-4 py-3 rounded-full text-xs font-semibold text-slate-700 hover:text-red-600 hover:bg-red-50 border border-slate-300 transition-all cursor-pointer"
                  >
                    Quick Quote
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* ---------------------------------------------------------------
              CENTER STAGE: 3D Spatial Machine Transition
              - Exiting image flies to TOP-LEFT and decreases in size
              - Incoming image flies from BOTTOM-RIGHT to CENTER and enlarges
             --------------------------------------------------------------- */}
          <div className="lg:col-span-5 relative flex flex-col items-center justify-center order-1 lg:order-2 py-4 sm:py-6 overflow-visible">
            {/* Ambient Radial Glow directly behind the machine */}
            <div
              className="absolute w-[320px] sm:w-[460px] lg:w-[520px] h-[320px] sm:h-[460px] lg:h-[520px] rounded-full bg-gradient-to-tr from-red-500/10 via-rose-300/10 to-transparent blur-3xl pointer-events-none"
              aria-hidden="true"
            />

            {/* Floating Machine Stage */}
            <div className="relative w-full max-w-[420px] sm:max-w-[480px] lg:max-w-[530px] aspect-[4/3] flex items-center justify-center overflow-visible">
              <AnimatePresence mode="popLayout" custom={direction}>
                <motion.div
                  key={currentMachine.id}
                  custom={direction}
                  variants={{
                    enter: (dir) => ({
                      // Incoming: starts from bottom-right (or top-left if reverse) and smaller
                      x: dir > 0 ? 320 : -320,
                      y: dir > 0 ? 190 : -190,
                      scale: dir > 0 ? 0.34 : 0.38,
                      opacity: 0.2,
                    }),
                    center: {
                      // Center: sits large at center with full clarity
                      x: 0,
                      y: 0,
                      scale: 1,
                      opacity: 1,
                      transition: {
                        duration: 0.82,
                        ease: [0.16, 1, 0.3, 1],
                      },
                    },
                    exit: (dir) => ({
                      // Exiting: flies to top-left and decreases in size (or bottom-right if reverse)
                      x: dir > 0 ? -320 : 320,
                      y: dir > 0 ? -190 : 190,
                      scale: dir > 0 ? 0.36 : 0.34,
                      opacity: 0,
                      transition: {
                        duration: 0.78,
                        ease: [0.16, 1, 0.3, 1],
                      },
                    }),
                  }}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="relative w-full h-full flex items-center justify-center will-change-transform z-10"
                >
                  {/* Subtle float idle animation */}
                  <motion.div
                    animate={{
                      y: [-5, 5, -5],
                    }}
                    transition={{
                      duration: 4.5,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                    className="w-full h-full flex items-center justify-center p-2"
                  >
                    <img
                      src={currentMachine.image}
                      alt={currentMachine.name}
                      width="540"
                      height="400"
                      className="w-full h-full object-contain drop-shadow-[0_20px_35px_rgba(0,0,0,0.18)] filter transition-transform duration-300 hover:scale-105"
                      loading="eager"
                      decoding="async"
                    />
                  </motion.div>
                </motion.div>
              </AnimatePresence>

              {/* Realistic Soft Ground Shadow under the Machine */}
              <motion.div
                animate={{
                  scale: [1, 1.06, 1],
                  opacity: [0.16, 0.24, 0.16],
                }}
                transition={{
                  duration: 4.5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="absolute bottom-1 w-[72%] h-6 bg-slate-900/20 rounded-[100%] blur-xl pointer-events-none"
                aria-hidden="true"
              />
            </div>

            {/* Bottom Center Tagline (Matching Pinterest Layout with text-icon) */}
            <AnimatePresence mode="popLayout" custom={direction}>
              <motion.div
                key={currentMachine.id + '-tagline'}
                custom={direction}
                variants={{
                  enter: (dir) => ({
                    opacity: 0,
                    y: dir > 0 ? 10 : -10,
                  }),
                  center: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.65,
                      ease: [0.16, 1, 0.3, 1],
                    },
                  },
                  exit: (dir) => ({
                    opacity: 0,
                    y: dir > 0 ? -10 : 10,
                    transition: {
                      duration: 0.5,
                      ease: [0.16, 1, 0.3, 1],
                    },
                  }),
                }}
                initial="enter"
                animate="center"
                exit="exit"
                className="mt-3 text-center"
              >
                <p className="text-xs sm:text-sm font-normal text-slate-500 tracking-wide">
                  {currentMachine.taglineLine1}
                </p>
                <p className="text-xs sm:text-sm font-bold text-icon tracking-wide">
                  {currentMachine.taglineLine2}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* ---------------------------------------------------------------
              RIGHT COLUMN: Output Metric, Model Selectors & Floating Next Machine
             --------------------------------------------------------------- */}
          <div className="lg:col-span-3 z-20 flex flex-col items-start lg:items-end justify-between space-y-6 lg:space-y-8 order-3">
            {/* Top Metric / Output Speed with text-icon (matching $149 / $199 price position) */}
            <AnimatePresence mode="popLayout" custom={direction}>
              <motion.div
                key={currentMachine.id + '-metric'}
                custom={direction}
                variants={{
                  enter: (dir) => ({
                    opacity: 0,
                    y: dir > 0 ? 15 : -15,
                  }),
                  center: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.65,
                      ease: [0.16, 1, 0.3, 1],
                    },
                  },
                  exit: (dir) => ({
                    opacity: 0,
                    y: dir > 0 ? -15 : 15,
                    transition: {
                      duration: 0.5,
                      ease: [0.16, 1, 0.3, 1],
                    },
                  }),
                }}
                initial="enter"
                animate="center"
                exit="exit"
                className="text-left lg:text-right"
              >
                <div className="text-3xl sm:text-4xl font-extrabold text-icon tracking-tight">
                  {currentMachine.metric}
                </div>
                <div className="text-xs text-slate-400 font-mono line-through mt-0.5">
                  {currentMachine.subMetric}
                </div>
                <div className="text-[11px] text-slate-800 font-bold uppercase tracking-widest mt-1">
                  {currentMachine.modelCode}
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Model / Series Selectors (Circular Buttons matching "Choose your size: 36 38 40") */}
            <div className="flex flex-col items-start lg:items-end space-y-2.5">
              <span className="text-[11px] uppercase tracking-wider text-slate-500 font-mono font-semibold">
                Choose machine:
              </span>
              <div className="flex items-center gap-2">
                {machines.map((machine, idx) => {
                  const isActive = idx === currentIndex;
                  return (
                    <button
                      key={machine.id}
                      type="button"
                      onClick={() => selectMachine(idx)}
                      aria-label={`Select ${machine.name}`}
                      className={`w-10 h-10 sm:w-9 sm:h-9 rounded-full flex items-center justify-center font-semibold text-xs sm:text-sm transition-all duration-200 cursor-pointer ${
                        isActive
                          ? 'bs-mix-red text-white shadow-[0_4px_14px_rgba(239,68,68,0.4)] scale-110'
                          : 'bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200 hover:scale-105'
                      }`}
                    >
                      {machine.badge || String(idx + 1).padStart(2, '0')}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Bottom-Right Floating Next Machine (Unboxed matching Image 1 & 2 bottom-right) */}
            <div
              onClick={handleNext}
              role="button"
              tabIndex={0}
              aria-label={`Next machine: ${nextMachine.name}`}
              className="group cursor-pointer flex flex-col items-center lg:items-end transition-all duration-300 hover:scale-105 mt-2"
            >
              <div className="relative w-32 h-24 sm:w-36 sm:h-28 lg:w-40 lg:h-32 flex items-center justify-center">
                <AnimatePresence mode="popLayout" custom={direction}>
                  <motion.div
                    key={nextMachine.id + '-bottom-next'}
                    custom={direction}
                    variants={{
                      enter: (dir) => ({
                        opacity: 0,
                        x: dir > 0 ? 30 : -30,
                        scale: 0.85,
                      }),
                      center: {
                        opacity: 1,
                        x: 0,
                        scale: 1,
                        transition: {
                          duration: 0.55,
                          ease: [0.16, 1, 0.3, 1],
                        },
                      },
                      exit: (dir) => ({
                        opacity: 0,
                        x: dir > 0 ? -30 : 30,
                        scale: 0.85,
                        transition: {
                          duration: 0.4,
                          ease: [0.16, 1, 0.3, 1],
                        },
                      }),
                    }}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    className="w-full h-full flex items-center justify-center"
                  >
                    <motion.div
                      animate={{ y: [-3, 3, -3] }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: 'easeInOut',
                        delay: 0.5,
                      }}
                      className="w-full h-full flex items-center justify-center p-1"
                    >
                      <img
                        src={nextMachine.image}
                        alt={nextMachine.name}
                        className="w-full h-full object-contain drop-shadow-[0_12px_24px_rgba(0,0,0,0.15)] group-hover:scale-110 transition-transform duration-300"
                        loading="eager"
                      />
                    </motion.div>
                  </motion.div>
                </AnimatePresence>

                {/* Soft ground shadow under next machine */}
                <div className="absolute -bottom-0.5 w-[70%] h-3 bg-slate-900/15 rounded-[100%] blur-sm pointer-events-none" />
              </div>

              <div className="flex items-center gap-1.5 mt-1.5 text-[11px] font-mono font-semibold text-slate-500 group-hover:text-red-600 transition-colors">
                <span className="uppercase tracking-wider">Next Machine</span>
                <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </div>
            </div>
          </div>
        </div>

        {/* ===================================================================
            BOTTOM FOOTER STRIP: Social/Trust Icons & Progress Bar
           =================================================================== */}
        <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 z-20">
          {/* Social / Trust Icons (matching bottom-left of Pinterest layout) */}
          <div className="flex items-center gap-3 text-slate-500">
            <a
              href="https://www.instagram.com/icon.packtech/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-8 h-8 rounded-full bg-slate-100 hover:bg-red-50 border border-slate-200 flex items-center justify-center p-1.5 transition-transform hover:scale-105"
            >
              <img
                src="/footer/instagram.png"
                alt="Instagram"
                className="w-full h-full object-contain"
              />
            </a>
            <a
              href="https://www.facebook.com/people/Icon-Packtech-India-Pvt-Ltd/61561593819510/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="w-8 h-8 rounded-full bg-slate-100 hover:bg-red-50 border border-slate-200 flex items-center justify-center p-1.5 transition-transform hover:scale-105"
            >
              <img
                src="/footer/facebook-app-symbol.png"
                alt="Facebook"
                className="w-full h-full object-contain"
              />
            </a>
            <a
              href="https://www.linkedin.com/company/icon-packtech/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-8 h-8 rounded-full bg-slate-100 hover:bg-red-50 border border-slate-200 flex items-center justify-center p-1.5 transition-transform hover:scale-105"
            >
              <img
                src="/footer/linkedin.png"
                alt="LinkedIn"
                className="w-full h-full object-contain"
              />
            </a>
            <a
              href="https://www.youtube.com/@icon.packtech"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="w-8 h-8 rounded-full bg-slate-100 hover:bg-red-50 border border-slate-200 flex items-center justify-center p-1.5 transition-transform hover:scale-105"
            >
              <img
                src="/footer/youtube.png"
                alt="YouTube"
                className="w-full h-full object-contain"
              />
            </a>

            <span className="hidden sm:inline-block h-3 w-px bg-slate-300 ml-2" />
            <span className="hidden sm:inline-flex items-center gap-1.5 text-xs font-mono text-slate-600 ml-2">
              <ShieldCheck className="w-3.5 h-3.5 text-red-600" />
              ISO 9001:2015 Certified Plant · Made in India
            </span>
          </div>

          {/* Automatic slide progress bar */}
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <span className="text-[11px] font-mono text-slate-500 tracking-wider">
              {isPaused ? 'PAUSED' : 'AUTO-CYCLE'}
            </span>
            <div className="w-32 sm:w-44 h-1.5 bg-slate-200 rounded-full overflow-hidden">
              <motion.div
                style={{ width: `${progress}%` }}
                className="h-full bs-mix-red rounded-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
