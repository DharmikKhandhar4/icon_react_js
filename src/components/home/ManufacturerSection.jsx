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
      "Modified Atmosphere Packaging (MAP) preserves delicate sweets and perishable foods with airtight nitrogen flush technology.",
    image: "/home/thermoforming/first.png",
    alt: "In-Line Tray Sealer Machine - ICON Packtech",
    specs: [
      { label: "Speed", val: "15-25 Trays/m" },
      { label: "Gas Flush", val: "O₂ < 0.5%" },
      { label: "Build", val: "SS-304 Grade" },
    ],
    metric: { val: "400%", label: "Shelf Life" },
    badge: "MAP Freshness Tech",
  },
  {
    id: "continuous-vacuum",
    number: "02",
    tag: "High-Volume Vacuum",
    problem: "Need Continuous High-Speed Vacuum Packaging?",
    machineName: "Continuous Vacuum Packaging Machine",
    solution:
      "Heavy-duty continuous rotary vacuum packaging designed for high-capacity lines with conveyor intake and touch PLC.",
    image: "/home/thermoforming/second.png",
    alt: "Continuous Vacuum Packaging Machine - ICON Packtech",
    specs: [
      { label: "Vacuum", val: "99.8% Level" },
      { label: "Feeding", val: "Conveyor" },
      { label: "Control", val: "Smart PLC" },
    ],
    metric: { val: "99.8%", label: "Hermetic Seal" },
    badge: "Continuous Auto",
  },
  {
    id: "thermoforming-itf",
    number: "03",
    tag: "Form · Fill · Seal",
    problem: "Looking for Custom Rigid Thermoformed Packs?",
    machineName: "ITF-400 Automated Thermoformer",
    solution:
      "Roll-fed thermoforming machine creating custom cavities, multi-cavity dosing, and hermetic vacuum seals with zero leakage.",
    image: "/product-image/Product4.png",
    alt: "ITF-400 Thermoforming Vacuum Packing Machine - ICON Packtech",
    specs: [
      { label: "Depth", val: "100mm Form" },
      { label: "Drive", val: "Servo Drive" },
      { label: "Quality", val: "ISO & CE" },
    ],
    metric: { val: "0% Leak", label: "Multi-Cavity" },
    badge: "Servo Drive Tech",
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
    <section className="relative w-full lg:h-[100vh] lg:max-h-[100vh] flex flex-col justify-center py-8 lg:py-4 bg-white overflow-hidden font-Poppins select-none">
      {/* Background Subtle Tech Grid Accent */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.35]"
        style={{
          backgroundImage:
            'radial-gradient(circle at 1px 1px, #e2e8f0 1px, transparent 0)',
          backgroundSize: '32px 32px',
        }}
        aria-hidden="true"
      />

      {/* Ambient Top Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[550px] h-[220px] bg-red-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 w-full flex flex-col justify-center my-auto">
        {/* Section Header (Compact) */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-5 lg:mb-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-50 border border-red-200/80 text-red-600 text-[11px] font-bold uppercase tracking-wider mb-2 shadow-2xs">
            <span className="w-1.5 h-1.5 rounded-full bg-red-600 animate-pulse" />
            <span>Industrial Packaging Solutions · Gujarat, India</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-extrabold text-slate-950 tracking-tight leading-[1.2]">
            Thermoforming Machine{' '}
            <span className="bg-[linear-gradient(38.46deg,red_0.15%,rgb(97,3,3)_98.48%)] bg-clip-text text-transparent">
              Manufacturer in India
            </span>
          </h2>

          <p className="mt-1.5 text-slate-600 text-xs sm:text-sm leading-relaxed max-w-2xl">
            Heavy-duty thermoforming, in-line MAP tray sealers, and continuous vacuum systems engineered with SS-304 sanitary steel for zero downtime.
          </p>
        </div>

        {/* Main Dual-Panel Showcase (Compact Bento Layout) */}
        <div
          className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-8 items-stretch"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Left Panel: Interactive Problem-to-Solution Cards (Col 1-6) */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-3">
            <div className="space-y-2.5">
              {slides.map((slide, index) => {
                const isActive = activeIdx === index;

                return (
                  <div
                    key={slide.id}
                    onClick={() => setActiveIdx(index)}
                    className={`relative p-3.5 sm:p-4 rounded-xl border transition-all duration-300 cursor-pointer overflow-hidden ${
                      isActive
                        ? 'bg-gradient-to-r from-red-50/80 via-white to-red-50/30 border-red-300 shadow-sm ring-1 ring-red-400/30'
                        : 'bg-white hover:bg-slate-50/80 border-slate-200 hover:border-slate-300 shadow-2xs'
                    }`}
                  >
                    {/* Active Left Indicator Pill */}
                    {isActive && (
                      <div className="absolute left-0 top-0 bottom-0 w-1.5 bs-mix-red" />
                    )}

                    <div className="flex items-start justify-between gap-2">
                      <div className="flex items-center gap-2.5">
                        <span
                          className={`flex items-center justify-center w-6 h-6 rounded-md text-[11px] font-bold font-mono transition-colors ${
                            isActive
                              ? 'bs-mix-red text-white shadow-xs'
                              : 'bg-slate-100 text-slate-500'
                          }`}
                        >
                          {slide.number}
                        </span>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-red-600">
                          {slide.tag}
                        </span>
                      </div>

                      {isActive && (
                        <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-red-700 bg-red-100/70 px-2 py-0.5 rounded-full">
                          <Sparkles className="w-2.5 h-2.5 text-red-600" />
                          Active View
                        </span>
                      )}
                    </div>

                    {/* Problem Question */}
                    <h3 className="mt-1.5 text-sm sm:text-[15px] font-bold text-slate-900 leading-snug">
                      {slide.problem}
                    </h3>

                    {/* Machine Subtitle */}
                    <div className="flex items-center gap-1 mt-0.5 text-[11px] font-semibold text-slate-500">
                      <span>Machine:</span>
                      <span className="text-slate-800 font-bold truncate">
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
                          transition={{ duration: 0.25 }}
                          className="overflow-hidden"
                        >
                          <p className="mt-2 text-[11px] sm:text-xs text-slate-600 leading-relaxed line-clamp-2">
                            {slide.solution}
                          </p>

                          {/* Quick Spec Badges */}
                          <div className="grid grid-cols-3 gap-1.5 mt-2.5 pt-2 border-t border-red-100/80">
                            {slide.specs.map((spec, sIdx) => (
                              <div
                                key={sIdx}
                                className="bg-white/95 p-1.5 rounded-lg border border-red-100/60 shadow-2xs"
                              >
                                <span className="block text-[9px] text-slate-400 font-semibold uppercase">
                                  {spec.label}
                                </span>
                                <span className="block text-[10px] sm:text-[11px] font-bold text-slate-800 truncate mt-0.5">
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

            {/* Bottom Actions & Trust Row (Compact) */}
            <div className="pt-1">
              <div className="flex flex-wrap items-center gap-2.5">
                <button
                  type="button"
                  onClick={navigateToContact}
                  className="inline-flex items-center justify-center gap-1.5 bs-mix-red hover:opacity-95 text-white font-bold text-xs px-5 py-2.5 rounded-xl shadow-md transition-all active:scale-[0.98] cursor-pointer"
                >
                  <PhoneCall className="w-3.5 h-3.5" />
                  <span>Request Custom Quote</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <button
                  type="button"
                  onClick={navigateToMachines}
                  className="inline-flex items-center justify-center gap-1.5 bg-white hover:bg-slate-50 text-slate-700 hover:text-red-600 font-bold text-xs px-4 py-2.5 rounded-xl border border-slate-200 transition-all active:scale-[0.98] cursor-pointer shadow-2xs"
                >
                  <Layers className="w-3.5 h-3.5 text-red-600" />
                  <span>All Machines</span>
                </button>
              </div>

              {/* Trust Checkmarks */}
              <div className="flex flex-wrap items-center gap-3.5 mt-2.5 text-[10px] font-semibold text-slate-500">
                <span className="inline-flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3 text-red-600" />
                  30+ Yrs Mfg
                </span>
                <span className="inline-flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3 text-red-600" />
                  SS-304 Sanitary
                </span>
                <span className="inline-flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3 text-red-600" />
                  Pan-India Direct Service
                </span>
              </div>
            </div>
          </div>

          {/* Right Panel: High-Tech Machine Stage (Col 7-12, Compact Max-H) */}
          <div className="lg:col-span-6 relative flex flex-col justify-between rounded-2xl lg:rounded-3xl bg-gradient-to-br from-slate-50 via-white to-red-50/30 border border-slate-200 shadow-lg overflow-hidden max-h-[380px] lg:max-h-[440px] p-5 sm:p-6">
            {/* Top Stage Header with Application Pill & Metric */}
            <div className="relative z-20 flex items-center justify-between w-full">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-md border border-red-100 shadow-2xs">
                <ShieldCheck className="w-3.5 h-3.5 text-red-600" />
                <span className="text-[11px] font-bold text-slate-800">
                  {currentSlide.badge}
                </span>
              </div>

              {/* Floating Stat Metric */}
              <div className="bg-white/95 backdrop-blur-md border border-slate-200/80 shadow-2xs px-3 py-1 rounded-xl flex items-center gap-1.5">
                <span className="text-xs sm:text-sm font-black text-red-600 font-mono">
                  {currentSlide.metric.val}
                </span>
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-tight">
                  {currentSlide.metric.label}
                </span>
              </div>
            </div>

            {/* Central Stage: Ambient Spotlight + Concentric Technical Rings + Machine */}
            <div className="relative flex-1 flex items-center justify-center py-3 my-auto overflow-hidden">
              {/* Concentric Precision Rings */}
              <div className="absolute w-[240px] h-[240px] sm:w-[290px] sm:h-[290px] rounded-full border border-dashed border-red-200/60 pointer-events-none" />
              <div className="absolute w-[170px] h-[170px] sm:w-[210px] sm:h-[210px] rounded-full border border-red-100/80 pointer-events-none" />

              {/* Ambient Spotlight Glow */}
              <div className="absolute w-[200px] h-[200px] bg-red-600/10 rounded-full blur-2xl pointer-events-none" />

              {/* Machine Image with Fluid Framer Motion Transitions */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide.id}
                  initial={{ opacity: 0, scale: 0.92, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.94, y: -10 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  className="relative z-10 w-full flex flex-col items-center justify-center"
                >
                  <img
                    src={currentSlide.image}
                    alt={currentSlide.alt}
                    className="max-h-[190px] sm:max-h-[230px] lg:max-h-[250px] w-auto max-w-[88%] object-contain drop-shadow-[0_15px_30px_rgba(0,0,0,0.18)]"
                    loading="eager"
                  />
                  {/* Floor Contact Shadow */}
                  <div className="w-2/3 h-2.5 bg-slate-900/15 rounded-full blur-sm mt-1 pointer-events-none" />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Bottom Controls Bar (Slide Counter + Prev/Next Controls) */}
            <div className="relative z-20 flex items-center justify-between pt-3 border-t border-slate-200/70 bg-white/70 backdrop-blur-xs -mx-5 sm:-mx-6 -mb-5 sm:-mb-6 px-5 sm:px-6 py-3">
              {/* Machine Model Title */}
              <div className="min-w-0 pr-3">
                <span className="block text-[9px] font-mono text-slate-400 uppercase font-semibold">
                  Featured Model
                </span>
                <span className="block text-xs font-bold text-slate-900 truncate">
                  {currentSlide.machineName}
                </span>
              </div>

              {/* Slider Controls */}
              <div className="flex items-center gap-1.5 flex-shrink-0">
                <span className="text-[11px] font-mono font-bold text-slate-500 mr-1">
                  0{activeIdx + 1} / 0{totalSlides}
                </span>

                <button
                  type="button"
                  onClick={handlePrev}
                  aria-label="Previous machine"
                  className="w-7 h-7 rounded-full border border-slate-200 bg-white hover:bg-red-50 hover:border-red-300 text-slate-700 hover:text-red-600 flex items-center justify-center transition-all shadow-2xs active:scale-95 cursor-pointer"
                >
                  <ChevronLeft className="w-3.5 h-3.5" />
                </button>

                <button
                  type="button"
                  onClick={handleNext}
                  aria-label="Next machine"
                  className="w-7 h-7 rounded-full border border-slate-200 bg-white hover:bg-red-50 hover:border-red-300 text-slate-700 hover:text-red-600 flex items-center justify-center transition-all shadow-2xs active:scale-95 cursor-pointer"
                >
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
