import React from 'react';
import CoreValues from '../components/about/CoreValues';
import Achievements from '../components/about/Achievements';
import IconJourney from '../components/about/IconJourney';
import TestimonialsSection from '../components/home/TestimonialsSection';
import LatestInsightsSection from '../components/home/LatestInsightsSection';

export default function AboutUs({ onNavigate }) {
  return (
    <div className="min-h-screen bg-white  font-Poppins">
      {/* ================= 1. ABOUT HERO SECTION ================= */}
      <div className="flex flex-col md:flex-col lg:flex-row lg:w-[80%] 2xl:w-[1300px] justify-between pt-[70px] md:pt-[50px] lg:pt-[43px] mx-auto px-5 md:px-8 lg:px-5 gap-10 lg:gap-8 items-center">
        {/* Content */}
        <div className="w-full lg:w-[50%] space-y-4 text-center lg:text-left">
          <div>
            <h1 className="text-[34px] md:text-[40px] lg:text-[45px] font-[600] text-gray-800 tracking-tight">
              About <span className="text-icon">Us</span>
              <span
                className="sr-only"
                style={{
                  position: "absolute",
                  width: "1px",
                  height: "1px",
                  padding: 0,
                  margin: "-1px",
                  overflow: "hidden",
                  clip: "rect(0, 0, 0, 0)",
                  whiteSpace: "nowrap",
                  borderWidth: 0,
                }}
              >
                {" "} - Packaging Machine Manufacturer in Rajkot, Gujarat, India
              </span>
            </h1>
          </div>

          <h2 className="text-[22px] md:text-[26px] lg:text-2xl font-semibold text-gray-700 leading-snug">
            Driving Quality in{" "}
            <span className="text-icon">
              Food & Technology
            </span>
          </h2>

          <p className="text-gray-600 text-[14px] md:text-[15px] text-justify leading-7">
            ICON has expanded through internal growth and new ventures since it was
            established in 1995 and over the years. The company has grown,
            expanding its capabilities for manufacturing packaging machines for a
            wide range of industries requiring high-quality machines. We continue
            to diversify and prosper, building on a tradition of quality
            components and customer satisfaction.
          </p>

          <p className="text-gray-600 text-[14px] md:text-[15px] text-justify leading-7">
            Driven by a philosophy of innovation, integration, and elevation, we
            pride ourselves on cutting-edge technology, robust performance, and
            dependable after-sales support. Every machine reflects our commitment
            to quality and customer satisfaction, engineered to optimize
            operations and deliver consistent results. Whether you are in food
            packaging, FMCG, or industrial sectors, Icon Industries is your
            partner for smart, efficient, and sustainable packaging solutions.
          </p>
        </div>

        {/* Image */}
        <div
          className="
            relative
            w-full
            max-w-[340px]
            md:max-w-[500px]
            lg:w-[500px]
            h-[300px]
            md:h-[420px]
            lg:h-[450px]
            clip-path4
            rounded-lg
            overflow-hidden
            shadow-xl
          "
        >
          <img
            src="/about/about.webp"
            alt="Icon Industries"
            className="w-full h-full object-cover"
            onError={(e) => {
              e.currentTarget.src = '/banners/anuga-2026.jpg';
            }}
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />

          <div className="absolute bottom-4 left-4 md:bottom-5 md:left-5">
            <div className="bg-white px-4 py-1 rounded-md shadow-md">
              <h3 className="text-sm md:text-base font-semibold text-gray-800">
                Est. 1995
              </h3>
            </div>
          </div>
        </div>
      </div>

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

