import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  Pause,
  Play,
  RotateCw,
  Instagram,
  Facebook,
  Linkedin,
  Youtube,
  ShieldCheck,
  Cpu,
  Sparkles,
} from 'lucide-react';

/**
 * ============================================================================
 * MachineShowcaseHero Component
 * Inspired by Pinterest Studio Showcase Layout (warm ambient spotlight,
 * bold typography, floating 3D machine hero, automatic image cycle,
 * metric badge, and model selectors).
 *
 * Theme Colors: Matches ICON Packtech industrial red gradient palette.
 * ============================================================================
 */

// Default machines data (easily replaceable with user's images)
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
    subMetric: '150 PPM Max',
    badge: 'TF',
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
    subMetric: '100 PPM Max',
    badge: 'VS',
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
    subMetric: '160 PPM Max',
    badge: 'CF',
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
    subMetric: '300 PPM Max',
    badge: 'FW',
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
  autoPlayInterval = 5000,
  onNavigate,
  onOpenBrochure,
  className = '',
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0);
  const timerRef = useRef(null);

  const total = machines.length;
  const currentMachine = machines[currentIndex];
  const nextIndex = (currentIndex + 1) % total;
  const nextMachine = machines[nextIndex];

  // Navigation handlers
  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? total - 1 : prev - 1));
    setProgress(0);
  }, [total]);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % total);
    setProgress(0);
  }, [total]);

  const selectMachine = useCallback((idx) => {
    setCurrentIndex(idx);
    setProgress(0);
  }, []);

  // Automatic slide cycle with smooth progress indicator
  useEffect(() => {
    if (isPaused) return;

    const intervalStep = 50; // update progress every 50ms
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
      className={`relative w-full overflow-hidden text-white font-Poppins select-none ${className}`}
      style={{
        // Signature ICON Packtech studio ambient lighting: warm radial spotlight from center into deep industrial wine-red
        background:
          'radial-gradient(circle at 50% 48%, #c5161d 0%, #9e1017 32%, #5e080d 68%, #260305 100%)',
      }}
    >
      {/* Subtle background ambient mesh and industrial grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.08]"
        style={{
          backgroundImage:
            'radial-gradient(rgba(255, 255, 255, 0.4) 1px, transparent 1px)',
          backgroundSize: '36px 36px',
        }}
        aria-hidden="true"
      />

      {/* Ambient Top Light Beam */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[85%] max-w-[1200px] h-[320px] bg-gradient-to-b from-white/15 to-transparent blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative max-w-[1440px] mx-auto min-h-[640px] sm:min-h-[700px] lg:min-h-[780px] xl:min-h-[820px] px-6 sm:px-10 lg:px-14 py-8 lg:py-12 flex flex-col justify-between">
        {/* ===================================================================
            TOP BAR: Slider Controls & Auto-play Status
           =================================================================== */}
        <div className="flex items-center justify-between z-20">
          {/* Navigation Arrows: Left & Right circular buttons */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Previous machine"
              className="w-10 h-10 rounded-full bg-black/25 hover:bg-black/50 border border-white/25 text-white flex items-center justify-center transition-all duration-200 hover:scale-105 active:scale-95 shadow-lg backdrop-blur-sm cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5 -translate-x-0.5" />
            </button>
            <button
              type="button"
              onClick={handleNext}
              aria-label="Next machine"
              className="w-10 h-10 rounded-full bg-black/25 hover:bg-black/50 border border-white/25 text-white flex items-center justify-center transition-all duration-200 hover:scale-105 active:scale-95 shadow-lg backdrop-blur-sm cursor-pointer"
            >
              <ChevronRight className="w-5 h-5 translate-x-0.5" />
            </button>

            {/* Model Index Indicator */}
            <span className="font-mono text-xs sm:text-sm tracking-wider text-white/70 ml-2">
              <span className="text-white font-bold">
                {String(currentIndex + 1).padStart(2, '0')}
              </span>{' '}
              / {String(total).padStart(2, '0')}
            </span>
          </div>

          {/* Center Subtle Brand Pill */}
          <div className="hidden md:flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/20 border border-white/15 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs uppercase tracking-widest font-mono text-white/85">
              ICON PACKTECH · LIVE MACHINE CATALOG
            </span>
          </div>

          {/* Auto-cycle pause / resume control */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setIsPaused((prev) => !prev)}
              aria-label={isPaused ? 'Resume auto-cycle' : 'Pause auto-cycle'}
              className="px-3 py-1.5 rounded-full bg-black/25 hover:bg-black/45 border border-white/20 text-xs font-mono text-white/85 flex items-center gap-1.5 transition-all cursor-pointer"
            >
              {isPaused ? (
                <>
                  <Play className="w-3 h-3 text-emerald-400" />
                  <span>Resume</span>
                </>
              ) : (
                <>
                  <Pause className="w-3 h-3 text-white/70" />
                  <span>Auto-cycling</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* ===================================================================
            MAIN THREE-COLUMN HERO GRID
           =================================================================== */}
        <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-4 items-center my-auto py-4 sm:py-6">
          {/* ---------------------------------------------------------------
              LEFT COLUMN: Headline, Description & CTA Button
             --------------------------------------------------------------- */}
          <div className="lg:col-span-4 z-20 flex flex-col items-start justify-center order-2 lg:order-1">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentMachine.id + '-left'}
                initial={{ opacity: 0, x: -28 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                className="space-y-4 sm:space-y-5"
              >
                {/* Category Pill */}
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/10 border border-white/15 backdrop-blur-sm text-[11px] font-mono tracking-wider uppercase text-white/90">
                  <Cpu className="w-3 h-3 text-red-300" />
                  <span>{currentMachine.category}</span>
                </div>

                {/* Main Headline */}
                <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold tracking-tight text-white leading-[1.08]">
                  <span>{currentMachine.titleLine1}</span>
                  <br />
                  <span className="font-light text-white/90">
                    {currentMachine.titleLine2}
                  </span>
                </h1>

                {/* Product Description */}
                <p className="text-white/80 text-xs sm:text-sm lg:text-[14px] leading-relaxed max-w-[430px]">
                  {currentMachine.description}
                </p>

                {/* Primary CTA Button (Pill-shaped, White with Dark Accent) */}
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
                    className="group inline-flex items-center gap-2.5 px-6 sm:px-7 py-3 sm:py-3.5 bg-white hover:bg-slate-100 text-[#991016] rounded-full font-bold text-xs sm:text-sm tracking-wide shadow-2xl hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer"
                  >
                    <span>Get machine specs</span>
                    <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      if (onNavigate) onNavigate('/contact-us');
                    }}
                    className="px-4 py-3 rounded-full text-xs font-semibold text-white/80 hover:text-white hover:bg-white/10 border border-white/20 transition-all cursor-pointer"
                  >
                    Quick Quote
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* ---------------------------------------------------------------
              CENTER STAGE: Floating Machine Image with Soft Ground Shadow
             --------------------------------------------------------------- */}
          <div className="lg:col-span-5 relative flex flex-col items-center justify-center order-1 lg:order-2 py-4 sm:py-6">
            {/* Ambient Radial Spotlight directly behind the machine */}
            <div
              className="absolute w-[320px] sm:w-[460px] lg:w-[540px] h-[320px] sm:h-[460px] lg:h-[540px] rounded-full bg-gradient-to-tr from-white/20 via-red-300/15 to-transparent blur-3xl pointer-events-none"
              aria-hidden="true"
            />

            {/* Floating Machine Stage */}
            <div className="relative w-full max-w-[420px] sm:max-w-[480px] lg:max-w-[520px] aspect-[4/3] flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentMachine.id}
                  initial={{ opacity: 0, scale: 0.85, y: 30 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.88, y: -30 }}
                  transition={{
                    duration: 0.65,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="relative w-full h-full flex items-center justify-center"
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
                      className="w-full h-full object-contain drop-shadow-[0_25px_35px_rgba(0,0,0,0.55)] filter transition-transform duration-300 hover:scale-105"
                      loading="eager"
                      decoding="async"
                    />
                  </motion.div>
                </motion.div>
              </AnimatePresence>

              {/* Realistic Ground Shadow under the Machine */}
              <div
                className="absolute bottom-1 w-[72%] h-7 bg-black/65 rounded-[100%] blur-xl pointer-events-none"
                aria-hidden="true"
              />
            </div>

            {/* Bottom Center Tagline (Matching Pinterest Layout) */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentMachine.id + '-tagline'}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.45 }}
                className="mt-3 text-center"
              >
                <p className="text-xs sm:text-sm font-light text-white/80 tracking-wide">
                  {currentMachine.taglineLine1}
                </p>
                <p className="text-xs sm:text-sm font-semibold text-white tracking-wide">
                  {currentMachine.taglineLine2}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* ---------------------------------------------------------------
              RIGHT COLUMN: Output Metric & Model Selectors
             --------------------------------------------------------------- */}
          <div className="lg:col-span-3 z-20 flex flex-col items-start lg:items-end justify-between space-y-6 lg:space-y-8 order-3">
            {/* Top Metric / Output Speed */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentMachine.id + '-metric'}
                initial={{ opacity: 0, y: -15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 15 }}
                transition={{ duration: 0.45 }}
                className="text-left lg:text-right"
              >
                <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight drop-shadow-md">
                  {currentMachine.metric}
                </div>
                <div className="text-xs sm:text-sm text-white/60 line-through font-mono mt-0.5">
                  {currentMachine.subMetric}
                </div>
                <div className="text-[11px] font-mono text-white/80 uppercase tracking-widest mt-1">
                  {currentMachine.modelCode}
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Model / Series Selectors (Circular Pill Buttons) */}
            <div className="flex flex-col items-start lg:items-end space-y-2.5">
              <span className="text-[11px] uppercase tracking-wider text-white/75 font-mono">
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
                      className={`w-10 h-10 sm:w-11 sm:h-11 rounded-full flex items-center justify-center font-bold text-xs sm:text-sm transition-all duration-200 cursor-pointer ${
                        isActive
                          ? 'bg-white text-[#991016] shadow-xl scale-110 ring-2 ring-white/80'
                          : 'bg-black/30 hover:bg-black/50 text-white border border-white/20 hover:scale-105'
                      }`}
                    >
                      {machine.badge || String(idx + 1).padStart(2, '0')}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Bottom Right: Mini Next Machine Preview Thumbnail */}
            <div
              onClick={handleNext}
              role="button"
              tabIndex={0}
              aria-label={`Next machine preview: ${nextMachine.name}`}
              className="group cursor-pointer flex items-center gap-3 bg-black/30 hover:bg-black/50 border border-white/20 backdrop-blur-md rounded-2xl p-2.5 pr-4 transition-all duration-200 hover:scale-105 shadow-xl"
            >
              <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center p-1 overflow-hidden flex-shrink-0">
                <img
                  src={nextMachine.image}
                  alt={nextMachine.name}
                  width="48"
                  height="48"
                  className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="text-left">
                <div className="text-[9px] uppercase tracking-wider text-white/60 font-mono">
                  Up next
                </div>
                <div className="text-xs font-semibold text-white truncate max-w-[120px]">
                  {nextMachine.name}
                </div>
              </div>
              <ChevronRight className="w-4 h-4 text-white/60 group-hover:text-white transition-colors ml-1" />
            </div>
          </div>
        </div>

        {/* ===================================================================
            BOTTOM FOOTER STRIP: Social/Trust Icons & Progress Bar
           =================================================================== */}
        <div className="pt-4 border-t border-white/15 flex flex-col sm:flex-row items-center justify-between gap-4 z-20">
          {/* Social / Trust Icons */}
          <div className="flex items-center gap-3 text-white/70">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/25 flex items-center justify-center transition-colors text-white"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/25 flex items-center justify-center transition-colors text-white"
            >
              <Facebook className="w-4 h-4" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/25 flex items-center justify-center transition-colors text-white"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/25 flex items-center justify-center transition-colors text-white"
            >
              <Youtube className="w-4 h-4" />
            </a>

            <span className="hidden sm:inline-block h-3 w-px bg-white/20 ml-2" />
            <span className="hidden sm:inline-flex items-center gap-1.5 text-xs font-mono text-white/70 ml-2">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              ISO 9001:2015 Certified Plant · Made in India
            </span>
          </div>

          {/* Automatic slide progress bar */}
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <span className="text-[11px] font-mono text-white/60 tracking-wider">
              {isPaused ? 'PAUSED' : 'AUTO-CYCLE'}
            </span>
            <div className="w-32 sm:w-44 h-1.5 bg-black/35 rounded-full overflow-hidden border border-white/10">
              <motion.div
                style={{ width: `${progress}%` }}
                className="h-full bg-white rounded-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
