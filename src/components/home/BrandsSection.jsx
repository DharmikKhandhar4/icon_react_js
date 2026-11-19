import React from 'react';

const brands = [
  { name: "Angel", src: "/home/bradlogo/angel.webp" },
  { name: "Apar", src: "/home/bradlogo/apar.webp" },
  { name: "Dudhsagar", src: "/home/bradlogo/dudhsagar.webp" },
  { name: "Gopal", src: "/home/bradlogo/gopal.webp" },
  { name: "Hilton", src: "/home/bradlogo/hilton.png" },
  { name: "iD", src: "/home/bradlogo/id.webp" },
  { name: "KLG", src: "/home/bradlogo/klg.png" },
  { name: "KT Dates", src: "/home/bradlogo/KTDates.webp" },
  { name: "Little Italy", src: "/home/bradlogo/little.webp" },
  { name: "Mahi", src: "/home/bradlogo/mahi.webp" },
];

const BrandsSection = () => {
  // Repeating for a seamless infinite loop marquee across all viewport sizes
  const marqueeList = [...brands, ...brands, ...brands];

  return (
    <section className="w-full bg-white py-10 md:py-6 font-sans overflow-hidden">
      <div className="max-w-[1300px] mx-auto px-4">
        
        {/* ================= SECTION TITLE WITH GRADIENT ACCENT LINES ================= */}
        <div className="flex items-center justify-center gap-4 sm:gap-3 mb-5">
          <div className="h-[2px] bg-gradient-to-r from-transparent to-[#ff4d00] flex-1 max-w-[320px]" />
          <h2 className="text-xl sm:text-2xl md:text-[23px] font-[500] text-gray-900 tracking-tight whitespace-nowrap text-center">
            Brands Who Trust Us
          </h2>
          <div className="h-[2px] bg-gradient-to-r from-[#ff4d00] to-transparent flex-1 max-w-[320px]" />
        </div>

        {/* ================= MARQUEE LOGO TICKER ================= */}
        <div className="relative w-full overflow-hidden py-4">
          
          {/* Left and Right Fade Masks for Smooth Edge Transitions */}
          {/* <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-28 bg-gradient-to-r from-white to-transparent z-10" /> */}
          {/* <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-28 bg-gradient-to-l from-white to-transparent z-10" /> */}

          {/* Infinite Moving Marquee Track */}
          <div className="animate-marquee flex items-center gap-10 sm:gap-14">
            {marqueeList.map((brand, idx) => (
              <div
                key={`${brand.name}-${idx}`}
                className="flex-shrink-0 flex items-center justify-center 
                w-[130px] sm:w-[140px] h-[55px] sm:h-full px-2"
              >
                <img
                  src={brand.src}
                  alt={brand.name}
                  width="140"
                  height="55"
                  className="max-w-full max-h-full object-contain hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            ))}
          </div>

        </div>

        {/* Bottom Subtle Gradient Divider */}
        <div className="w-[80%] mt-3 mx-auto h-[1px] bg-gradient-to-r from-transparent via-gray-300 to-transparent" />

      </div>
    </section>
  );
};

export default BrandsSection;
