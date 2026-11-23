import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  Zap,
  CheckCircle2,
  Sparkles,
  Layers,
  Settings,
  PhoneCall,
} from 'lucide-react';

const slides = [
  {
    id: "tray-sealer",
    number: "01",
    tag: "Fresh Food & Sweets",
    problem: "Your Sweets & Fresh Foods get Spoiled?",
    machineName: "In-Line Tray Sealer (MAP)",
    solution:
      "Modified Atmosphere Packaging (MAP) ready to preserve delicate sweets and perishables by sealing freshness with precision air-tight nitrogen flush technology.",
    image: "/home/thermoforming/first.png",
    alt: "In-Line Tray Sealer Machine - ICON Packtech",
    specs: [
      { label: "Speed", val: "15-25 Trays/min" },
      { label: "Gas Flush", val: "Residual O₂ < 0.5%" },
      { label: "Build", val: "SS-304 Sanitary" },
    ],
    metric: { val: "400%", label: "Extended Shelf-Life" },
    badge: "MAP Freshness Technology",
  },
  {
    id: "continuous-vacuum",
    number: "02",
    tag: "High-Volume Packaging",
    problem: "Need Continuous High-Speed Vacuum Packaging?",
    machineName: "Continuous Vacuum Packaging Machine",
    solution:
      "Heavy-duty continuous rotary vacuum packaging designed for high-capacity industrial lines, offering non-stop conveyor feeding and programmable micro-PLC control.",
    image: "/home/thermoforming/second.png",
    alt: "Continuous Vacuum Packaging Machine - ICON Packtech",
    specs: [
      { label: "Vacuum Level", val: "99.8% Deep Vacuum" },
      { label: "Feeding", val: "Continuous Infeed" },
      { label: "Automation", val: "Digital Touch PLC" },
    ],
    metric: { val: "99.8%", label: "Hermetic Vacuum Seal" },
    badge: "Heavy-Duty Automation",
  },
  {
    id: "thermoforming-itf",
    number: "03",
    tag: "Form · Fill · Seal",
    problem: "Looking for Custom Rigid Thermoformed Packs?",
    machineName: "ITF-400 Automated Thermoformer",
    solution:
      "All-in-one automated roll-fed thermoforming machine that creates custom formed cavities, indexes for precision dosing, and vacuum-seals with zero leakage.",
    image: "/product-image/Product4.png",
    alt: "ITF-400 Thermoforming Vacuum Packing Machine - ICON Packtech",
    specs: [
      { label: "Depth", val: "Up to 100mm Form" },
      { label: "Drive", val: "Servo High-Precision" },
      { label: "Standards", val: "CE & ISO Compliant" },
    ],
    metric: { val: "0% Leak", label: "Multi-Cavity Forming" },
    badge: "Precision Servo Drive",
  },
];

export default function ManufacturerSection({ onNavigate }) {
  const [activeIdx, setActiveIdx] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef(null);

  const totalSlides = slides.length;
  const currentSlide = slides[activeIdx];

  const handleNext = useCallback(() => {
    setActiveIdx((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  const handlePrev = useCallback(() => {
    setActiveIdx((prev) => (prev - 1 + totalSlides) % totalSlides);
  }, [totalSlides]);

  // Autoplay with pause on hover
  useEffect(() => {
    if (isPaused) return;
    timerRef.current = setInterval(() => {
      handleNext();
    }, 6000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused, handleNext]);

  const navigateToContact = () => {
    if (onNavigate) {
      onNavigate('/contact-us');
    } else {
      window.location.href = '/contact-us';
    }
  };

  const navigateToMachines = () => {
    if (onNavigate) {
      onNavigate('/all-packaging-machines');
    } else {
      window.location.href = '/all-packaging-machines';
    }
  };

  return (
    <section className="relative w-full py-16 lg:py-24 bg-white overflow-hidden font-Poppins select-none">
      {/* Background Subtle Tech Grid Accent */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.4]"
        style={{
          backgroundImage:
            'radial-gradient(circle at 1px 1px, #e2e8f0 1px, transparent 0)',
          backgroundSize: '36px 36px',
        }}
        aria-hidden="true"
      />

      {/* Ambient Top Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-red-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 border border-red-200/80 text-red-600 text-xs font-bold uppercase tracking-wider mb-4 shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
            <span>Industrial Packaging Solutions · Gujarat, India</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-slate-950 tracking-tight leading-[1.15]">
            Thermoforming Machine{' '}
            <span className="bg-[linear-gradient(38.46deg,red_0.15%,rgb(97,3,3)_98.48%)] bg-clip-text text-transparent">
              Manufacturer in India
            </span>
          </h2>

          <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed max-w-2xl">
            ICON Packtech manufactures heavy-duty thermoforming, in-line MAP tray sealers, and continuous vacuum systems engineered with SS-304 sanitary steel for food, dairy, and pharma industries.
          </p>
        </div>

        {/* Main Dual-Panel Showcase (Modern Bento Layout) */}
        <div
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Left Panel: Interactive Problem-to-Solution Cards (Col 1-6) */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-4">
            <div className="space-y-3.5">
              {slides.map((slide, index) => {
                const isActive = activeIdx === index;

                return (
                  <div
                    key={slide.id}
                    onClick={() => setActiveIdx(index)}
                    className={`relative p-5 sm:p-6 rounded-2xl border transition-all duration-300 cursor-pointer overflow-hidden ${
                      isActive
                        ? 'bg-gradient-to-r from-red-50/80 via-white to-red-50/30 border-red-300 shadow-md ring-1 ring-red-400/30'
                        : 'bg-white hover:bg-slate-50/80 border-slate-200 hover:border-slate-300 shadow-xs'
                    }`}
                  >
                    {/* Active Left Indicator Pill */}
                    {isActive && (
                      <div className="absolute left-0 top-0 bottom-0 w-1.5 bs-mix-red" />
                    )}

                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <span
                          className={`flex items-center justify-center w-7 h-7 rounded-lg text-xs font-bold font-mono transition-colors ${
                            isActive
                              ? 'bs-mix-red text-white shadow-xs'
                              : 'bg-slate-100 text-slate-500'
                          }`}
                        >
                          {slide.number}
                        </span>
                        <span className="text-[11px] font-bold uppercase tracking-wider text-red-600">
                          {slide.tag}
                        </span>
                      </div>

                      {isActive && (
                        <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-red-700 bg-red-100/70 px-2.5 py-0.5 rounded-full">
                          <Sparkles className="w-3 h-3 text-red-600" />
                          Active View
                        </span>
                      )}
                    </div>

                    {/* Problem Question */}
                    <h3 className="mt-2.5 text-base sm:text-lg font-bold text-slate-900 leading-snug">
                      {slide.problem}
                    </h3>

                    {/* Machine Subtitle */}
                    <div className="flex items-center gap-1.5 mt-1 text-xs font-semibold text-slate-500">
                      <span>Machine:</span>
                      <span className="text-slate-800 font-bold">
                        {slide.machineName}
                      </span>
                    </div>

                    {/* Expandable Active Details */}
                    <AnimatePresence initial={false}>
                      {isActive && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <p className="mt-3 text-xs sm:text-[13px] text-slate-600 leading-relaxed">
                            {slide.solution}
                          </p>

                          {/* Quick Spec Badges */}
                          <div className="grid grid-cols-3 gap-2 mt-4 pt-3.5 border-t border-red-100/80">
                            {slide.specs.map((spec, sIdx) => (
                              <div
                                key={sIdx}
                                className="bg-white/90 p-2 rounded-xl border border-red-100/60 shadow-2xs"
                              >
                                <span className="block text-[10px] text-slate-400 font-semibold uppercase">
                                  {spec.label}
                                </span>
                                <span className="block text-[11px] sm:text-xs font-bold text-slate-800 truncate mt-0.5">
                                  {spec.val}
                                </span>
                              </div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Active Autoplay Progress Bar */}
                    {isActive && (
                      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-red-100">
                        <motion.div
                          key={activeIdx}
                          initial={{ width: '0%' }}
                          animate={{ width: isPaused ? '100%' : '100%' }}
                          transition={{
                            duration: 6,
                            ease: 'linear',
                          }}
                          className="h-full bs-mix-red"
                        />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Bottom Actions & Trust Row */}
            <div className="pt-2">
              <div className="flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  onClick={navigateToContact}
                  className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 bs-mix-red hover:opacity-95 text-white font-bold text-xs sm:text-sm px-6 py-3 rounded-xl shadow-md transition-all active:scale-[0.98] cursor-pointer"
                >
                  <PhoneCall className="w-4 h-4" />
                  <span>Request Custom Quote</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  type="button"
                  onClick={navigateToMachines}
                  className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-slate-700 hover:text-red-600 font-bold text-xs sm:text-sm px-5 py-3 rounded-xl border border-slate-200 transition-all active:scale-[0.98] cursor-pointer shadow-2xs"
                >
                  <Layers className="w-4 h-4 text-red-600" />
                  <span>View All Machines</span>
                </button>
              </div>

              {/* Trust Checkmarks */}
              <div className="flex flex-wrap items-center gap-4 mt-4 text-[11px] font-semibold text-slate-500">
                <span className="inline-flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-red-600" />
                  30+ Years Manufacturing
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-red-600" />
                  SS-304 Sanitary Food-Grade
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-red-600" />
                  Pan-India Direct Service
                </span>
              </div>
            </div>
          </div>

          {/* Right Panel: High-Tech Machine Stage (Col 7-12) */}
          <div className="lg:col-span-6 relative flex flex-col justify-between rounded-3xl bg-gradient-to-br from-slate-50 via-white to-red-50/30 border border-slate-200 shadow-xl overflow-hidden min-h-[460px] sm:min-h-[520px] p-6 sm:p-8">
            {/* Top Stage Header with Application Pill & Metric */}
            <div className="relative z-20 flex items-center justify-between w-full">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-red-100 shadow-xs">
                <ShieldCheck className="w-4 h-4 text-red-600" />
                <span className="text-xs font-bold text-slate-800">
                  {currentSlide.badge}
                </span>
              </div>

              {/* Floating Stat Metric */}
              <div className="bg-white/95 backdrop-blur-md border border-slate-200/80 shadow-xs px-3.5 py-1.5 rounded-2xl flex items-center gap-2">
                <span className="text-sm sm:text-base font-black text-red-600 font-mono">
                  {currentSlide.metric.val}
                </span>
                <span className="text-[10px] sm:text-[11px] font-bold text-slate-500 uppercase tracking-tight">
                  {currentSlide.metric.label}
                </span>
              </div>
            </div>

            {/* Central Stage: Ambient Spotlight + Concentric Technical Rings + Machine */}
            <div className="relative flex-1 flex items-center justify-center py-6 sm:py-8 my-auto">
              {/* Concentric Precision Rings */}
              <div className="absolute w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] rounded-full border border-dashed border-red-200/60 pointer-events-none" />
              <div className="absolute w-[200px] h-[200px] sm:w-[260px] sm:h-[260px] rounded-full border border-red-100/80 pointer-events-none" />

              {/* Ambient Spotlight Glow */}
              <div className="absolute w-[240px] h-[240px] bg-red-600/10 rounded-full blur-2xl pointer-events-none" />

              {/* Machine Image with Fluid Framer Motion Transitions */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide.id}
                  initial={{ opacity: 0, scale: 0.92, y: 12 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.94, y: -12 }}
                  transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                  className="relative z-10 w-full flex flex-col items-center justify-center"
                >
                  <img
                    src={currentSlide.image}
                    alt={currentSlide.alt}
                    className="max-h-[260px] sm:max-h-[320px] lg:max-h-[350px] w-auto max-w-[90%] object-contain drop-shadow-[0_20px_35px_rgba(0,0,0,0.18)]"
                    loading="eager"
                  />
                  {/* Floor Contact Shadow */}
                  <div className="w-3/4 sm:w-2/3 h-3 bg-slate-900/15 rounded-full blur-md mt-2 pointer-events-none" />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Bottom Controls Bar (Slide Counter + Prev/Next Controls) */}
            <div className="relative z-20 flex items-center justify-between pt-4 border-t border-slate-200/70 bg-white/60 backdrop-blur-xs -mx-6 sm:-mx-8 -mb-6 sm:-mb-8 px-6 sm:px-8 py-4">
              {/* Machine Model Title */}
              <div className="min-w-0 pr-4">
                <span className="block text-[10px] font-mono text-slate-400 uppercase font-semibold">
                  Featured Machinery
                </span>
                <span className="block text-xs sm:text-sm font-bold text-slate-900 truncate">
                  {currentSlide.machineName}
                </span>
              </div>

              {/* Slider Controls */}
              <div className="flex items-center gap-2 flex-shrink-0">
                <span className="text-xs font-mono font-bold text-slate-500 mr-1">
                  0{activeIdx + 1} / 0{totalSlides}
                </span>

                <button
                  type="button"
                  onClick={handlePrev}
                  aria-label="Previous machine"
                  className="w-8 h-8 rounded-full border border-slate-200 bg-white hover:bg-red-50 hover:border-red-300 text-slate-700 hover:text-red-600 flex items-center justify-center transition-all shadow-2xs active:scale-95 cursor-pointer"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>

                <button
                  type="button"
                  onClick={handleNext}
                  aria-label="Next machine"
                  className="w-8 h-8 rounded-full border border-slate-200 bg-white hover:bg-red-50 hover:border-red-300 text-slate-700 hover:text-red-600 flex items-center justify-center transition-all shadow-2xs active:scale-95 cursor-pointer"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
