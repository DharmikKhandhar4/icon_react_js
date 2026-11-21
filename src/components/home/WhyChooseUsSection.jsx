import React from 'react';
import {
  Award,
  Globe,
  Users,
  ShieldCheck,
  Headphones,
  CheckCircle2,
} from 'lucide-react';

const leftPills = [
  {
    id: 1,
    line1: "Pioneer of all kinds of packing",
    line2: (
      <>
        machines; since <span className="font-bold text-gray-950">1995</span>
      </>
    ),
    icon: Award,
  },
  {
    id: 2,
    line1: <span className="font-bold text-gray-950">Satisfied Customers</span>,
    line2: "across the globe",
    icon: Globe,
  },
  {
    id: 3,
    line1: <span className="font-bold text-gray-950">Experienced Managerial</span>,
    line2: "and Technical Team",
    icon: Users,
  },
];

const rightPills = [
  {
    id: 4,
    line1: "Organization never",
    line2: <span className="font-bold text-gray-950">compromise with quality</span>,
    icon: ShieldCheck,
  },
  {
    id: 5,
    line1: "Provide Timely and the best",
    line2: (
      <>
        after <span className="font-bold text-gray-950">sales service</span>
      </>
    ),
    icon: Headphones,
  },
  {
    id: 6,
    line1: <span className="font-bold text-gray-950">Quality supplied meets all</span>,
    line2: <span className="font-bold text-gray-950">Quality Standards.</span>,
    icon: CheckCircle2,
  },
];

const WhyChooseUsSection = () => {
  return (
    <section className="w-full bg-white py-8 md:pb-12 mb:pt-0 px-4 sm:px-6 lg:px-8 font-sans">
      {/* Outer Card Container */}
      <div className="relative max-w-[1300px] mx-auto rounded-[15px]  bg-white  overflow-hidden ">
        
        {/* Background Watermark Fevicon Logo */}
      

        {/* ================= SECTION HEADER ================= */}
        <div className="relative z-10 text-center max-w-2xl mx-auto mb-10 lg:mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-[38px] font-[700] text-gray-900 tracking-tight leading-tight">
            WHY{' '}
            <span className="bg-[linear-gradient(38.46deg,red_0.15%,rgb(97,3,3)_98.48%)] bg-clip-text text-transparent">
              CHOOSE
            </span>{' '}
            US
            <span className="inline-block text-red-600 animate-pulse ml-1.5">
              ?
            </span>
            <span className="inline-block text-red-600 animate-pulse delay-150">
              ?
            </span>
          </h2>
        </div>

        {/* ================= DIAGRAM WRAPPER WITH PROPER ROUND ORBIT & CONNECTOR LINES ================= */}
        <div className="relative z-10 max-w-[1060px] mx-auto">
          {/* Running Line CSS Keyframes */}
          <style>{`
            @keyframes lineRunningFlow {
              0% {
                stroke-dashoffset: 28;
              }
              100% {
                stroke-dashoffset: 0;
              }
            }
            @keyframes orbitRunningSpin {
              0% {
                stroke-dashoffset: 0;
              }
              100% {
                stroke-dashoffset: 96;
              }
            }
            .running-connector-line {
              animation: lineRunningFlow 1.1s linear infinite;
            }
            .running-orbit-ring {
              animation: orbitRunningSpin 9s linear infinite;
            }
          `}</style>

          {/* SVG Connecting Lines: Connects Center Orbit to Labels directly with Running Animation */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none hidden lg:block"
            viewBox="0 0 1060 360"
            preserveAspectRatio="xMidYMid meet"
          >
            <defs>
              {/* Glow filter for energy pulses */}
              <filter id="energyGlow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="2.5" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Base Static Orbit Guide */}
            <circle
              cx="530"
              cy="180"
              r="140"
              stroke="#fee2e2"
              strokeWidth="1"
              strokeDasharray="3 3"
              fill="none"
              className="opacity-60"
            />

            {/* Proper Round Dashed Orbit Circle (Animated Running Orbit) */}
            <circle
              cx="530"
              cy="180"
              r="140"
              stroke="#ef4444"
              strokeWidth="1.5"
              strokeDasharray="8 8"
              fill="none"
              className="running-orbit-ring opacity-85"
            />

            {/* Orbiting Energy Packet around Central Logo */}
            <circle r="3.5" fill="#dc2626" filter="url(#energyGlow)">
              <animateMotion
                path="M 530 40 A 140 140 0 1 1 529.9 40"
                dur="5.5s"
                repeatCount="indefinite"
              />
            </circle>

            {/* ============================================================
                1. Top-Left: from Pill (350, 42) to Orbit (419, 95)
               ============================================================ */}
            {/* Guide line */}
            <path
              d="M 350 42 L 419 95"
              stroke="#fee2e2"
              strokeWidth="1"
              fill="none"
              className="opacity-50"
            />
            {/* Running dashed line */}
            <path
              d="M 350 42 L 419 95"
              stroke="#ef4444"
              strokeWidth="1.6"
              strokeDasharray="6 6"
              fill="none"
              className="running-connector-line opacity-90"
            />
            {/* Traveling energy pulse */}
            <circle r="3" fill="#dc2626" filter="url(#energyGlow)">
              <animateMotion
                path="M 350 42 L 419 95"
                dur="1.4s"
                repeatCount="indefinite"
              />
            </circle>
            <circle cx="350" cy="42" r="3.5" fill="#dc2626" className="animate-pulse" />
            <circle cx="419" cy="95" r="3.5" fill="#dc2626" className="animate-pulse" />

            {/* ============================================================
                2. Mid-Left: from Pill (350, 180) to Orbit (390, 180)
               ============================================================ */}
            <path
              d="M 350 180 L 390 180"
              stroke="#fee2e2"
              strokeWidth="1"
              fill="none"
              className="opacity-50"
            />
            <path
              d="M 350 180 L 390 180"
              stroke="#ef4444"
              strokeWidth="1.6"
              strokeDasharray="6 6"
              fill="none"
              className="running-connector-line opacity-90"
            />
            <circle r="3" fill="#dc2626" filter="url(#energyGlow)">
              <animateMotion
                path="M 350 180 L 390 180"
                dur="1.1s"
                repeatCount="indefinite"
              />
            </circle>
            <circle cx="350" cy="180" r="3.5" fill="#dc2626" className="animate-pulse" />
            <circle cx="390" cy="180" r="3.5" fill="#dc2626" className="animate-pulse" />

            {/* ============================================================
                3. Bottom-Left: from Pill (350, 318) to Orbit (419, 265)
               ============================================================ */}
            <path
              d="M 350 318 L 419 265"
              stroke="#fee2e2"
              strokeWidth="1"
              fill="none"
              className="opacity-50"
            />
            <path
              d="M 350 318 L 419 265"
              stroke="#ef4444"
              strokeWidth="1.6"
              strokeDasharray="6 6"
              fill="none"
              className="running-connector-line opacity-90"
            />
            <circle r="3" fill="#dc2626" filter="url(#energyGlow)">
              <animateMotion
                path="M 350 318 L 419 265"
                dur="1.4s"
                repeatCount="indefinite"
              />
            </circle>
            <circle cx="350" cy="318" r="3.5" fill="#dc2626" className="animate-pulse" />
            <circle cx="419" cy="265" r="3.5" fill="#dc2626" className="animate-pulse" />

            {/* ============================================================
                4. Top-Right: from Pill (710, 42) to Orbit (641, 95)
               ============================================================ */}
            <path
              d="M 710 42 L 641 95"
              stroke="#fee2e2"
              strokeWidth="1"
              fill="none"
              className="opacity-50"
            />
            <path
              d="M 710 42 L 641 95"
              stroke="#ef4444"
              strokeWidth="1.6"
              strokeDasharray="6 6"
              fill="none"
              className="running-connector-line opacity-90"
            />
            <circle r="3" fill="#dc2626" filter="url(#energyGlow)">
              <animateMotion
                path="M 710 42 L 641 95"
                dur="1.4s"
                repeatCount="indefinite"
              />
            </circle>
            <circle cx="710" cy="42" r="3.5" fill="#dc2626" className="animate-pulse" />
            <circle cx="641" cy="95" r="3.5" fill="#dc2626" className="animate-pulse" />

            {/* ============================================================
                5. Mid-Right: from Pill (710, 180) to Orbit (670, 180)
               ============================================================ */}
            <path
              d="M 710 180 L 670 180"
              stroke="#fee2e2"
              strokeWidth="1"
              fill="none"
              className="opacity-50"
            />
            <path
              d="M 710 180 L 670 180"
              stroke="#ef4444"
              strokeWidth="1.6"
              strokeDasharray="6 6"
              fill="none"
              className="running-connector-line opacity-90"
            />
            <circle r="3" fill="#dc2626" filter="url(#energyGlow)">
              <animateMotion
                path="M 710 180 L 670 180"
                dur="1.1s"
                repeatCount="indefinite"
              />
            </circle>
            <circle cx="710" cy="180" r="3.5" fill="#dc2626" className="animate-pulse" />
            <circle cx="670" cy="180" r="3.5" fill="#dc2626" className="animate-pulse" />

            {/* ============================================================
                6. Bottom-Right: from Pill (710, 318) to Orbit (641, 265)
               ============================================================ */}
            <path
              d="M 710 318 L 641 265"
              stroke="#fee2e2"
              strokeWidth="1"
              fill="none"
              className="opacity-50"
            />
            <path
              d="M 710 318 L 641 265"
              stroke="#ef4444"
              strokeWidth="1.6"
              strokeDasharray="6 6"
              fill="none"
              className="running-connector-line opacity-90"
            />
            <circle r="3" fill="#dc2626" filter="url(#energyGlow)">
              <animateMotion
                path="M 710 318 L 641 265"
                dur="1.4s"
                repeatCount="indefinite"
              />
            </circle>
            <circle cx="710" cy="318" r="3.5" fill="#dc2626" className="animate-pulse" />
            <circle cx="641" cy="265" r="3.5" fill="#dc2626" className="animate-pulse" />
          </svg>

          {/* 3-Column Content (Left Pills - Center Circle - Right Pills) */}
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 items-center min-h-[360px] gap-6 lg:gap-0">
            
            {/* ================= LEFT PILLS (3 ITEMS) ================= */}
            <div className="order-2 lg:order-1 lg:col-span-4 flex flex-col justify-between h-auto lg:h-[360px] space-y-4 lg:space-y-0">
              {leftPills.map((pill) => {
                const Icon = pill.icon;
                return (
                  <div
                    key={pill.id}
                    className="group bg-white rounded-full border border-gray-100 shadow-[0_4px_22px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_28px_rgba(220,38,38,0.14)] hover:border-red-200 transition-all duration-300 py-3 px-3 sm:py-3 sm:px-3.5 flex items-center justify-between gap-3 text-right"
                  >
                    <div className="flex-1 text-right pr-2">
                      <p className="text-[13px] sm:text-[14px] text-gray-700 leading-snug">
                        {pill.line1}
                      </p>
                      <p className="text-[13px] sm:text-[14px] text-gray-700 leading-snug">
                        {pill.line2}
                      </p>
                    </div>
                    <div className="w-12 h-12 sm:w-10 sm:h-10 rounded-full flex-shrink-0 flex items-center justify-center bg-[linear-gradient(38.46deg,red_0.15%,rgb(97,3,3)_98.48%)] text-white
                     group-hover:scale-105 transition-transform duration-300">
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6 stroke-[1.8]" />
                    </div>
                  </div>
                );
              })}
            </div>

            {/* ================= CENTER LOGO CIRCLE ================= */}
            <div className="order-1 lg:order-2 lg:col-span-4 flex items-center justify-center py-4 lg:py-0">
              <div className="relative w-56 h-56 sm:w-60 sm:h-60 rounded-full flex items-center justify-center">
                
                {/* Radial Glow Halo */}
                <div className="absolute inset-[-15px] rounded-full bg-gradient-to-r from-red-500/15 via-red-500/5 to-red-500/15 blur-2xl pointer-events-none" />

                {/* Proper Round Dashed Orbit Ring (100% Round in CSS) */}
                <div className="absolute w-[280px] h-[280px] rounded-full border border-dashed border-red-300/80 pointer-events-none" />

                {/* Center Circular Card */}
                <div className="relative z-10 w-44 h-44 sm:w-60 sm:h-60 rounded-full bg-white border-4 border-red-100 shadow-[0_12px_40px_rgba(220,38,38,0.14)] flex flex-col items-center justify-center p-4 text-center transition-transform duration-500 hover:scale-[1.02]">
                  <img
                    src="/fevicon.png"
                    alt="ICON PACKTECH"
                    width="110"
                    height="110"
                    className="w-16 sm:w-28 h-auto object-cover drop-shadow-md"
                    loading="lazy"
                    decoding="async"
                  />
                  <span className="text-[13px] sm:text-[14px] font-bold text-gray-900 tracking-wide mt-1.5 block">
                    ICON PACKTECH
                  </span>
                  <span className="text-[11px] font-semibold text-red-600 block">
                    Since 1995
                  </span>
                </div>

              </div>
            </div>

            {/* ================= RIGHT PILLS (3 ITEMS) ================= */}
            <div className="order-3 lg:order-3 lg:col-span-4 flex flex-col justify-between h-auto lg:h-[360px] space-y-4 lg:space-y-0">
              {rightPills.map((pill) => {
                const Icon = pill.icon;
                return (
                  <div
                    key={pill.id}
                    className="group bg-white rounded-full border border-gray-100 shadow-[0_4px_22px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_28px_rgba(220,38,38,0.14)] hover:border-red-200 transition-all duration-300 py-2 px-3 sm:py-3 sm:px-3.5 flex items-center justify-start gap-3 text-left"
                  >
                    <div className="w-12 h-12 sm:w-10 sm:h-10 rounded-full flex-shrink-0 flex items-center justify-center bg-[linear-gradient(38.46deg,red_0.15%,rgb(97,3,3)_98.48%)] text-white
                   group-hover:scale-105 transition-transform duration-300">
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6 stroke-[1.8]" />
                    </div>
                    <div className="flex-1 text-left pl-2">
                      <p className="text-[13px] sm:text-[14px] text-gray-700 leading-snug">
                        {pill.line1}
                      </p>
                      <p className="text-[13px] sm:text-[14px] text-gray-700 leading-snug">
                        {pill.line2}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default WhyChooseUsSection;
