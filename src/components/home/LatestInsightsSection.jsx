import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight, ArrowUpRight } from 'lucide-react';

const articles = [
  {
    id: 1,
    title: "From Navratri to Dussehra: Is Your Food Packaging Ready for the Festive Rush?",
    date: "October 20",
    description: "October in India doesn't arrive quietly. It arrives with celebrations, colours, gatherings, and an enormous appetite for festive food.",
    image: "https://storage.server.grafizen.in/uploads/img_6ad74c10692f47.42896587.jpg",
    link: "#",
  },
  {
    id: 2,
    title: "Why Packaging Machinery Is Becoming a Strategic Investment for Dairy Brands",
    date: "October 15",
    description: "Dairy Growth Doesn't Stop at Production. Why automated and reliable sealing systems are defining competitive advantage.",
    image: "https://storage.server.grafizen.in/uploads/img_6ad758f5d93d35.23256783.jpg",
    link: "#",
  },
  {
    id: 3,
    title: "The Right Pouch Starts with the Right Machine: What Snack Brands Should Consider",
    date: "October 10",
    description: "A Pouch May Look Simple. The Process Behind It Isn't. Key factors brands must evaluate for freshness and shelf impact.",
    image: "https://storage.server.grafizen.in/uploads/img_6ad75821671210.15813119.jpg",
    link: "#",
  },
  {
    id: 4,
    title: "Thermoforming Beyond the Pack: How One Technology Can Transform Food Production",
    date: "October 06",
    description: "What If Packaging Could Become Part of the Production Flow? Integrating speed, hygiene, and automated efficiency.",
    image: "https://storage.server.grafizen.in/uploads/img_6ad753616a5ec7.17388418.jpg",
    link: "#",
  },
  {
    id: 5,
    title: "Festive Gifting, Better Packaging: Protecting Sweets & Dry Fruits This Season",
    date: "October 02",
    description: "A Festive Gift Begins Before the Box Is Opened. Why vacuum and MAP sealing protect traditional mithai and dry fruits.",
    image: "https://storage.server.grafizen.in/uploads/img_6ad74cddd26dd8.13470880.jpg",
    link: "#",
  },
  {
    id: 6,
    title: "When Packaging Becomes a Competitive Advantage: How Machinery Helps Brands Stand Out",
    date: "September 28",
    description: "Packaging used to be viewed as the final step of manufacturing. Today, it is one of the biggest drivers of consumer trust.",
    image: "https://storage.server.grafizen.in/uploads/img_6aba1b24b12be3.87701878.jpg",
    link: "#",
  },
  {
    id: 7,
    title: "The Science of Freshness: How Vacuum & MAP Packaging Extend Shelf Life",
    date: "September 18",
    description: "In food packaging, shelf life isn't just about dates on a label; it is about preserving taste, texture, and consumer safety.",
    image: "https://storage.server.grafizen.in/uploads/img_6aba1b7a2d6199.11718507.jpg",
    link: "#",
  },
  {
    id: 8,
    title: "High-Speed, Zero Compromise: The Engineering Behind Icon's Thermoforming Machines",
    date: "September 08",
    description: "In high-throughput food and pharma operations, every second counts. How precision engineering maximizes uptime and cycle speeds.",
    image: "https://storage.server.grafizen.in/uploads/img_6aba1bc564f849.52981504.jpg",
    link: "#",
  },
  {
    id: 9,
    title: "From Dairy to Dry Fruits: Tailored Packaging Solutions for India's Diverse Industries",
    date: "August 28",
    description: "No two products have identical packaging requirements. Discover how customized sealing solutions adapt to unique industry needs.",
    image: "https://storage.server.grafizen.in/uploads/img_6a8c46c07153f3.86497258.jpg",
    link: "#",
  },
  {
    id: 10,
    title: "Why After-Sales Support Is as Important as the Machine Itself",
    date: "August 18",
    description: "A packaging machine is only as dependable as the support behind it. Why responsive maintenance and genuine spare parts matter.",
    image: "https://storage.server.grafizen.in/uploads/img_6a8c45dca65851.52309710.jpg",
    link: "#",
  },
  {
    id: 11,
    title: "Sustainable Packaging: How Modern Machines Are Reducing Waste and Footprint",
    date: "August 05",
    description: "Efficiency and eco-consciousness go hand in hand. How modern tray sealers and thermoformers optimize film thickness and reduce scrap.",
    image: "https://storage.server.grafizen.in/uploads/img_6a8c458a202d64.44498399.jpg",
    link: "#",
  },
  {
    id: 12,
    title: "ICONIC MACHINES: YOUR ONE-STOP SOLUTION FOR BULK VACUUM PACKAGING",
    date: "May 25",
    description: "In today's fast-paced and increasingly automated world, businesses are always on the lookout for ways to improve bulk packaging efficiency.",
    image: "https://storage.server.grafizen.in/uploads/img_694cdc7de102a3.68424146.png",
    link: "#",
  },
];

export default function LatestInsightsSection() {
  const scrollContainerRef = useRef(null);

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = 320;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="font-Poppins w-[90%] mx-auto  pb-[30px] 2xl:w-[1330px]">
      <div className="flex flex-col sm:flex-row items-center justify-between mb-6 px-1">
        <div className="text-center sm:text-center flex-1">
          <h2 className="text-[30px] md:text-[37px] font-semibold text-[#0f0f0f]">
            Latest Insights from Icon
          </h2>
        </div>

      
      </div>

      <div className="w-full flex flex-col gap-[20px]">
        {/* Horizontal scroll track */}
        <div
          ref={scrollContainerRef}
          className="flex overflow-x-auto gap-6 pb-6 pt-2 cursor-grab select-none no-scrollbar scrollbar-hide scroll-smooth"
        >
          {articles.map((item) => (
            <div
              key={item.id}
              className="w-[280px] sm:w-[290px] h-[440px] border border-red-500/20 shadow-md hover:shadow-xl rounded-[14px] overflow-hidden flex flex-col flex-shrink-0 relative group bg-white transition-all duration-300 hover:-translate-y-1"
            >
              {/* Image Container */}
              <div className="relative h-[210px] w-full overflow-hidden bg-neutral-100 flex-shrink-0">
                <img
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  decoding="async"
                  width="290"
                  height="210"
                  onError={(e) => {
                    e.currentTarget.src = '/home/blog/blog1.webp';
                  }}
                />

                {/* Top-Left Date Badge */}
                <div className="absolute top-0 left-0 w-[96px] text-[12px] font-semibold text-center py-[5px] text-white bg-[linear-gradient(38.46deg,red_0.15%,rgb(97,3,3)_98.48%)] rounded-tl-[10px] rounded-br-[12px] shadow-sm tracking-wide">
                  {item.date}
                </div>
              </div>

              {/* Text Content */}
              <div className="flex flex-col flex-1 p-4">
                <h3 className="font-semibold text-[16px] text-[#222] leading-[22px] line-clamp-2 group-hover:text-red-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-[13.5px] mt-2 leading-[19px] text-[#646464] line-clamp-4 text-justify">
                  {item.description}
                </p>

                {/* Bottom Read More Link */}
                <div className="mt-auto pt-3 border-t border-gray-100 flex items-center justify-between">
                  <a
                    href={item.link}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-red-600 hover:text-red-700 transition-colors"
                  >
                    Read More
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
