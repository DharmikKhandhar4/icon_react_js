import React from 'react';

const milestones = [
  {
    year: "1995",
    title: "Establishment of Icon",
    description:
      "The journey began with the foundation of Icon in 1995, rooted in innovation and a drive to create impactful solutions in vacuum and packaging machinery.",
    image: "/about/processone.webp",
    reverse: false,
  },
  {
    year: "2000",
    title: "Nationwide Milestone",
    description:
      "Icon achieved a benchmark of 700+ installations of packing machines across India, establishing trust and reliability in its engineering solutions.",
    image: "/about/processtwo.webp",
    reverse: true,
  },
  {
    year: "2009",
    title: "Global Footprint",
    description:
      "Icon expanded internationally, starting operations in Germany. This move marked the brand's entrance into the global packaging machinery market.",
    image: "/about/processthree.webp",
    reverse: false,
  },
  {
    year: "2014",
    title: "Advanced MAP Machine Launched",
    description:
      "The MAP (Modified Atmosphere Packaging) machine was developed, offering cutting-edge thermosealing capabilities for perishable food products.",
    image: "/about/processfour.webp",
    reverse: true,
  },
  {
    year: "2015",
    title: "Dairy Sector Expansion",
    description:
      "Icon extended its machine expertise into the dairy sector, supporting hygienic and efficient milk product packaging.",
    image: "/about/processfive.webp",
    reverse: false,
  },
  {
    year: "2020",
    title: "4000+ Global Clients",
    description:
      "By 2020, Icon had proudly served over 4000 satisfied clients worldwide, spanning diverse industrial sectors.",
    image: "/about/processix.webp",
    reverse: true,
  },
  {
    year: "2022",
    title: "Tender Supply Division",
    description:
      "Icon began fulfilling government and private tenders, strengthening its presence in public infrastructure and food logistics sectors.",
    image: "/about/processeven.webp",
    reverse: false,
  },
  {
    year: "2024",
    title: "Incorporation of Icon Packtech Pvt. Ltd.",
    description:
      "In 2024, Icon formally established 'Icon Packtech (India) Private Limited,' marking a new era in automated and sustainable packaging solutions for the next generation.",
    image: "/about/processeight.webp",
    reverse: true,
  },
];

export default function IconJourney() {
  return (
    <section className="w-full bg-[#f4f6f9] mt-3 py-[50px] px-4 sm:px-6 lg:px-8 font-Poppins relative overflow-hidden">
      <div className="2xl:w-[1300px] w-full lg:w-[80%] mx-auto">
        
        {/* Section Header */}
        <div className="mb-14 text-left md:text-left">
          <h2 className="font-[600] text-3xl sm:text-4xl lg:text-[38px] text-gray-900 leading-tight">
            Icon's{' '}
            <span className="bg-[linear-gradient(38.46deg,red_0.15%,rgb(97,3,3)_98.48%)] bg-clip-text text-transparent">
              Journey
            </span>
          </h2>
          <p className="mt-2 text-[15px] sm:text-[17px] text-gray-900 font-[500]">
            Crafting Excellence in Vacuum Packaging &amp; Industrial Machinery Since 1995.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative flex flex-col gap-12 md:gap-20">
          
          {/* Central Vertical Connector Line (Desktop) */}
          <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-38 bottom-38 w-1  bg-[linear-gradient(38.46deg,red_0.15%,rgb(97,3,3)_98.48%)] rounded-full" />

          {milestones.map((item, index) => (
            <div
              key={item.year}
              className={`flex flex-col md:flex-row w-full items-center justify-between relative ${
                item.reverse ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Media Card (Image) */}
              <div className="w-full md:w-[44%] h-[260px] sm:h-[320px] md:h-[380px] rounded-xl overflow-hidden shadow-lg border border-gray-200/80 bg-white group transition-all duration-300 hover:shadow-2xl hover:border-red-200">
                <img
                  src={item.image}
                  alt={`Icon Machinery ${item.year}`}
                  width="500"
                  height="380"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  onError={(e) => {
                    e.currentTarget.src = '/banners/anuga-2026.jpg';
                  }}
                />
              </div>

              {/* Central Year Badge & Indicator Node (Desktop) */}
              <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 flex-col items-center z-10 bg-[#f4f6f9] py-2">
                <div className="bg-[#f4f6f9] px-3 py-1 rounded-lg text-center">
                  <span className="text-3xl lg:text-[40px] font-[500] bg-[linear-gradient(38.46deg,red_0.15%,rgb(97,3,3)_98.48%)] bg-clip-text text-transparent tracking-tight">
                    {item.year}
                  </span>
                </div>
                <div className="w-10 h-10 rounded-full bs-mix-red  flex items-center justify-center shadow-lg shadow-red-700/30 transition-transform duration-300 hover:scale-110">
                 
                </div>
              </div>

              {/* Text Description Card */}
              <div className="w-full md:w-[44%] mt-5 md:mt-0  ">
                {/* Mobile Year Badge */}
                <div className="md:hidden inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 border border-red-200 text-red-600 font-bold text-xs uppercase tracking-wider mb-3">
                  <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
                  Milestone {item.year}
                </div>

                <h3 className="font-[600] text-xl sm:text-2xl lg:text-[28px] text-gray-900 leading-snug mb-3">
                  {item.title}
                </h3>
                <p className=" leading-relaxed 
                text-[16px]  font-[400]">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

