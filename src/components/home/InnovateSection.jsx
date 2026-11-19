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

export default function InnovateSection() {
  return (
    <section className="font-Poppins overflow-hidden flex flex-col">
      <div className="mx-auto md:w-[83%] 2xl:w-[1330px] px-4 pt-[80px] pb-[20px] relative z-10 flex-1 flex flex-col">
        {/* Header Section */}
        <div className="mb-12">
          <div className="flex items-center space-x-4 mb-4">
            <h2 className="text-icon border font-[600] px-[10px] rounded-full py-[2px] border-[#f00] uppercase tracking-widest text-[14px]">
              Packaging Machine Manufacturer in India
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 md:mt-[0px] mt-[20px] gap-8 items-center">
            <div>
              <h2 className="md:text-5xl text-[30px] font-Poppins font-[700] mb-6 leading-none">
                INNOVATE, INTEGRATE, ELEVATE
              </h2>
              <p className="text-gray-600 md:text-[13px] text-[14px] text-justify leading-relaxed">
                Welcome to ICON, where innovation meets precision in packaging solutions. Discover cutting-edge machines designed to elevate your business with unmatched efficiency and reliability. ICON has expanded through internal growth and new ventures since it was established in 1995 and over the years. The company has grown, expanding its capabilities for manufacturing packaging machines for a wide range of industries requiring high-quality machines. We continue to diversify and prosper, building on a tradition of quality components and customer satisfaction.
              </p>
            </div>

            <div className="relative">
              <div className="relative p-0.5 rounded-lg">
                <div className="rounded-lg md:p-6 backdrop-blur-sm">
                  <div className="relative">
                    {/* Feature Tabs */}
                    <div className="flex flex-col lg:flex-row gap-8 mt-auto">
                      <div className="w-[100%]">
                        <div className="space-y-4">
                          {features.map((feature, index) => (
                            <div
                              key={index}
                              className="p-4 rounded-lg transition-all duration-300 border-[1px] shadow-icon border-[#ff1c1c] hover:bg-white/5 cursor-pointer"
                            >
                              <div className="flex items-center">
                                <div className="w-10 h-10 p-2 rounded-md mr-4 border-[1.4px] border-[#f00] flex items-center justify-center flex-shrink-0">
                                  <img
                                    src={feature.icon}
                                    alt={feature.title || "Feature Image"}
                                    className="w-full h-full object-contain"
                                    loading="lazy"
                                    decoding="async"
                                  />
                                </div>
                                <h3 className="font-[500] text-[18px] text-[#000]">
                                  {feature.title}
                                </h3>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
