import React from 'react';

const features = [
  {
    title: "World-Class Technology",
    icon: "https://storage.server.grafizen.in/uploads/img_6852b183b0ad28.20629645.png",
  },
  {
    title: "Ease of Maintenance",
    icon: "https://storage.server.grafizen.in/uploads/img_6852b1947ac2b9.30893593.svg",
  },
  {
    title: "Rapid Tech Support",
    icon: "https://storage.server.grafizen.in/uploads/img_6852b19defcc22.12223044.svg",
  },
];

const InnovateSection = () => {
  return (
    <section className="w-full bg-white py-12 md:py-10 px-4 sm:px-8 lg:px-16 font-sans">
      <div className="md:w-[83%]  2xl:w-[1330px]  md:px-4  mx-auto flex flex-col">
        
        {/* Top Outline Pill Badge */}
        <div className="self-start mb-6">
          <span className="inline-block px-[10px] py-[2px] rounded-full border border-red-600 text-[14px] sm:text-[14px] font-[600] tracking-widest uppercase bg-[linear-gradient(38.46deg,red_0.15%,rgb(97,3,3)_98.48%)] bg-clip-text text-transparent">
            Packaging Machine Manufacturer in India
          </span>
        </div>

        {/* 2-Column Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-8 items-center ">
          
          {/* ================= LEFT COLUMN ================= */}
          <div className="flex flex-col">
            <h2 className="text-3xl sm:text-4xl  text-gray-900 tracking-tight 
            md:text-[50px] text-[30px] font-Poppins font-[700] mb-6 leading-none
            ">
              INNOVATE, INTEGRATE, <br className="hidden sm:inline" />
              ELEVATE
            </h2>

            <p 
            className="text-gray-600 md:text-[13px] text-[14px] text-justify"
            >
              Welcome to ICON, where innovation meets precision in packaging solutions. Discover cutting-edge machines designed to elevate your business with unmatched efficiency and reliability.
  
              ICON has expanded through internal growth and new ventures since it was established in 1995 and over the years. The company has grown, expanding its capabilities for manufacturing packaging machines for a wide range of industries requiring high-quality machines. We continue to diversify and prosper, building on a tradition of quality components and customer satisfaction.
            </p>
          </div>

          {/* ================= RIGHT COLUMN (RED BORDER CARDS) ================= */}
          <div className="flex flex-col space-y-4 md:p-0 ">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="group p-4 sm:p-4 rounded-xl border border-red-500 bg-white shadow-sm hover:shadow-md transition-all duration-300 flex items-center cursor-pointer "
              >
                {/* Red Bordered Icon Container */}
                <div className="w-11 h-11 sm:w-10 sm:h-10 p-2 rounded-lg border border-red-500 flex items-center justify-center mr-5 flex-shrink-0 group-hover:scale-105 transition-transform">
                  <img
                    src={feature.icon}
                    alt={feature.title}
                    width="40"
                    height="40"
                    className="w-full h-full object-contain"
                    loading="lazy"
                    decoding="async"
                  />
                </div>

                {/* Feature Title */}
                <h3 className="  sm:text-[18px] text-[#11181c] group-hover:text-red-600 transition-colors
                font-[500]  text-[18px] 
                ">
                  {feature.title}
                </h3>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

export default InnovateSection;
