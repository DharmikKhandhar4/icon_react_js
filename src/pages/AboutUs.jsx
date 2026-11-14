import React from 'react';
import CoreValues from '../components/about/CoreValues';
import Achievements from '../components/about/Achievements';
import IconJourney from '../components/about/IconJourney';
import TestimonialsSection from '../components/home/TestimonialsSection';
import LatestInsightsSection from '../components/home/LatestInsightsSection';

export default function AboutUs({ onNavigate }) {
  return (
    <div className="min-h-screen bg-white pb-20 font-Poppins">
      {/* ================= 1. ABOUT HERO SECTION ================= */}
      <section className="flex flex-col lg:flex-row lg:w-[85%] 2xl:w-[1300px] justify-between pt-10 md:pt-14 lg:pt-14 mx-auto px-5 md:px-8 lg:px-5 gap-10 lg:gap-14 items-center">
        
        {/* Left Column: Text & Story */}
        <div className="w-full lg:w-1/2 space-y-5 text-center lg:text-left">
          <div>
            <h1 className="text-3xl sm:text-4xl leading-tight
            
            text-[34px] md:text-[40px] lg:text-[45px] font-[600] text-gray-800 tracking-tight
            ">
              About{' '}
              <span className="bg-[linear-gradient(38.46deg,red_0.15%,rgb(97,3,3)_98.48%)] bg-clip-text text-transparent">
                Us
              </span>
            </h1>
          </div>

          <h2 className="text-xl sm:text-2xl lg:text-[25px] font-semibold text-gray-800 leading-snug">
            Driving Quality in{' '}
            <span className="bg-[linear-gradient(38.46deg,red_0.15%,rgb(97,3,3)_98.48%)] bg-clip-text text-transparent">
              Food &amp; Technology
            </span>
          </h2>

          <div className="space-y-4 text-gray-600 text-sm md:text-[15px] text-justify leading-7">
            <p>
              ICON has expanded through internal growth and new ventures since it was established in 1995 and over the years. The company has grown, expanding its capabilities for manufacturing packaging machines for a wide range of industries requiring high-quality machines. We continue to diversify and prosper, building on a tradition of quality components and customer satisfaction.
            </p>
            <p>
              Driven by a philosophy of innovation, integration, and elevation, we pride ourselves on cutting-edge technology, robust performance, and dependable after-sales support. Every machine reflects our commitment to quality and customer satisfaction, engineered to optimize operations and deliver consistent results. Whether you are in food packaging, FMCG, or industrial sectors, Icon Industries is your partner for smart, efficient, and sustainable packaging solutions.
            </p>
          </div>
        </div>

        {/* Right Column: Hero Image with Cut Corners (Top-Right & Bottom-Left) and Est. 1995 Badge */}
        <div className="relative w-full max-w-[340px] md:max-w-[500px] lg:w-[490px] xl:w-[500px] h-[300px] md:h-[420px] lg:h-[450px] [filter:drop-shadow(0_12px_24px_rgba(0,0,0,0.1))] group">
          <div className="relative w-full h-full clip-path4 overflow-hidden rounded-lg bg-gray-100">
            <img
              src="/about/about.webp"
              alt="Icon Industries"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              fetchPriority="high"
              decoding="sync"
              width="500"
              height="450"
              onError={(e) => {
                e.currentTarget.src = '/banners/anuga-2026.jpg';
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent pointer-events-none" />
            
            {/* Est. 1995 Badge */}
            <div className="absolute bottom-4 left-4 md:bottom-5 md:left-5 z-10">
              <div className="bg-white px-4 py-1.5 rounded-md shadow-md">
                <h3 className="text-sm md:text-base font-semibold text-gray-800 tracking-tight">
                  Est. 1995
                </h3>
              </div>
            </div>
          </div>
        </div>

      </section>

      {/* ================= 2. CORE VALUES SECTION ================= */}
      <CoreValues />

      {/* ================= 3. ACHIEVEMENTS SECTION ================= */}
      <Achievements />

      {/* ================= 4. ICON'S JOURNEY (TIMELINE) SECTION ================= */}
      <IconJourney />

      {/* ================= 5. TESTIMONIALS SECTION ================= */}
      <TestimonialsSection />

      {/* ================= 6. BLOG / INSIGHTS SECTION ================= */}
      <LatestInsightsSection />
    </div>
  );
}

