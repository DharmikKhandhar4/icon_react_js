import React, { useState } from 'react';

const reasons = [
  { id: 1, text: "Pioneer of all kind of packing machine; since 1995" },
  { id: 2, text: "Satisfied Customers across the globe" },
  { id: 3, text: "Experienced Managerial and Technical Team" },
  { id: 4, text: "Strong R&D Department" },
  { id: 5, text: "Organization never compromise with quality" },
  { id: 6, text: "Provide Timely and the best after sales service" },
  { id: 7, text: "Quality supplied meets all Quality Standards." },
];

const WhyChooseUsSection = () => {
  const [activeId, setActiveId] = useState(7);

  return (
    <section className="w-full bg-white py-8 md:py-8 px-4 sm:px-6 lg:px-8 font-sans">
      {/* Outer Card Container */}
      <div className="relative max-w-[1300px] mx-auto rounded-[24px] md:border border-gray-200/80 bg-white md:shadow-[0_4px_30px_rgba(0,0,0,0.04)] overflow-hidden md:px-7 md:py-[40px] 
       ">
        
        {/* Background Watermark Fevicon Logo */}
        <div className="absolute -bottom-0 right-14 pointer-events-none select-none opacity-[0.10] z-0">
          <img
            src="/fevicon.png"
            alt="Icon Industries Watermark"
            width="260"
            height="260"
            className="w-[260px] sm:w-[240px] h-auto object-contain"
            loading="lazy"
            decoding="async"
          />
        </div>

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-10 items-center">
          
          {/* ================= LEFT COLUMN ================= */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-center text-center lg:text-left">
            {/* Logo */}
            <div className="mb-4">
              <img
                src="/fevicon.png"
                alt="Icon Industries Logo"
                width="180"
                height="180"
                className="w-24 sm:w-[180px] h-auto object-contain drop-shadow-sm"
                loading="lazy"
                decoding="async"
              />
            </div>

            {/* Main Title */}
            <h2 className="text-3xl sm:text-4xl lg:text-[35px] font-[700] text-gray-900 tracking-tight leading-tight mb-4">
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

            {/* Paragraph Description */}
            <p className="  sm:text-[13px]  max-w-md
            text-gray-800 text-[13px]   text-justify leading-relaxed font-[400]
            ">
              Choose us for our unwavering commitment to quality, innovation, and customer satisfaction. With tailor-made solutions, cutting-edge technology, and reliable support, we deliver excellence that empowers your packaging operations.
            </p>
          </div>

          {/* ================= RIGHT COLUMN (TIMELINE LIST) ================= */}
          <div className="lg:col-span-7">
            <div className="relative">
              
              {/* Connecting Vertical Gradient Line */}
              <div className="absolute left-[19px] top-4 bottom-5 w-[2px] bg-gradient-to-b from-red-500 via-red-600 to-red-400 z-0" />

              {/* Points List */}
              <div className="space-y-[20px]">
                {reasons.map((item) => {
                  const isActive = activeId === item.id;
                  return (
                    <div
                      key={item.id}
                      onClick={() => setActiveId(item.id)}
                      onMouseEnter={() => setActiveId(item.id)}
                      className="group flex items-center gap-5 sm:gap-6 cursor-pointer transition-all duration-300"
                    >
                      {/* Numbered Circle Indicator */}
                      <div className="relative flex-shrink-0 z-10">
                        <div
                          className={`relative z-20 w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-300 ${
                            isActive
                              ? "bg-[linear-gradient(38.46deg,red_0.15%,rgb(97,3,3)_98.48%)] text-white shadow-md shadow-red-500/30 scale-105"
                              : "bg-white border-[1.5px] border-red-500 text-red-600 group-hover:scale-105 group-hover:bg-red-50"
                          }`}
                        >
                          {item.id}
                        </div>

                        {/* Pointing Arrow on active item */}
                        {isActive && (
                          <div className="hidden sm:block absolute -right-1 top-1/2 -translate-y-1/2 w-2.5 h-2.5 bg-[linear-gradient(38.46deg,red_0.15%,rgb(97,3,3)_98.48%)] rotate-45 z-0 pointer-events-none" />
                        )}
                      </div>

                      {/* Content Card */}
                      <div
                        className={`flex-1 py-[9px] px-5 sm:px-6 rounded-[10px] border-l-4 transition-all duration-300 ${
                          isActive
                            ? "border-l-red-400 bg-gradient-to-r from-[#FF9999] via-[#FFD0D0] to-[#FFF5F5]  text-gray-900 shadow-sm"
                            : "border-l-red-800/60  text-gray-900 hover:border-l-red-400 hover:bg-red-50/40"
                        }`}
                      >
                        <p className="text-[14.5px] sm:text-[15px] font-[00] leading-snug">
                          {item.text}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default WhyChooseUsSection;

