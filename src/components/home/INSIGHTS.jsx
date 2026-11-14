import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const articles = [
  {
    id: 1,
    title: "The integrated packaging vision of Hareshbhai...",
    description: "Hareshbhai Popatbhai Patoriya is the founder of Icon Industries. He began his career as a service maintenance engineer in the...",
    image: "/home/blog/blog1.webp",
    link: "#",
  },
  {
    id: 2,
    title: "Service Before Sales: The Principle That Built Icon",
    description: "For Icon Packtech India Pvt. Ltd., success has never been measured by how many machines are sold but by how...",
    image: "/home/blog/blog2.webp",
    link: "#",
  },
  {
    id: 3,
    title: "Icon Packtech Pvt. Ltd.: How Low-Cost Vacuum...",
    description: "For many farmers, the most challenging part of agriculture does not end at harvest; it being after. Months of labour, care and...",
    image: "/home/blog/blog3.webp",
    link: "#",
  },
  {
    id: 4,
    title: "The Hidden Cost of poor Packaging: Why Upgradi...",
    description: "In 2026, India's food market is more competitive than ever. While quality ingredients and good taste matter, packaging...",
    image: "/home/blog/blog4.webp",
    link: "#",
  },
  {
    id: 5,
    title: "What Is a Tray Sealer and Why It Is Essential...",
    description: "Packaging in the modern food industry is no longer just about covering contents; it has evolved in...",
    image: "/home/blog/blog5.webp",
    link: "#",
  },
];

const InsightsSection = () => {
  return (
    <section className="relative pt-10 pb-3 bg-white overflow-hidden font-sans">
      {/* Subtle Background Grid Pattern */}
     <div 
        className="absolute inset-0 opacity-[0.05] [background-image:linear-gradient(to_right,#0ff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] [background-size:48px_48px] pointer-events-none [mask-image:radial-gradient(ellipse_at_top_left,black_30%,transparent_80%)] [-webkit-mask-image:radial-gradient(ellipse_at_top_left,black_30%,transparent_80%)]"
        aria-hidden="true"
      />

      {/* Background Vertical Lines Pattern */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-60"
        style={{
          backgroundImage: 'linear-gradient(to right, #edeef1 1px, transparent 1px)',
          backgroundSize: '3.5rem 100%',
        }}
      />

      <div className="relative max-w-7xl px-4 mx-auto">
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between pr-0 sm:pr-12 lg:pr-20 mb-8 gap-4">
          <div>
            <span className="sm:text-sm font-medium block mb-2 text-sm uppercase tracking-[0.2em]
            
            bg-[linear-gradient(38.46deg,red_0.15%,rgb(97,3,3)_98.48%)] bg-clip-text text-transparent 
            ">
              ICON PACKTECH INSIGHTS
            </span>
            <h2 className="mt-2 text-[28px] text-black font-semibold ">
              A Year of Articles & Industry Perspectives
            </h2>
          </div>

          <a
            href="#all-blogs"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-gray-900 hover:text-red-600 transition-colors whitespace-nowrap"
          >
            View all blogs
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        {/* Horizontal Scrollable Cards Container */}
        <div className="flex gap-5 overflow-x-auto pb-8 pt-2 pr-6 sm:pr-12 lg:pr-20 scrollbar-hide snap-x">
          {articles.map((article) => (
            <div
              key={article.id}
              className="min-w-[290px] sm:min-w-[270px] max-w-[280px] bg-white rounded-3xl shadow-[0_4px_20px_-2px_rgba(0,0,0,0.06)] border border-gray-100 overflow-hidden flex flex-col justify-between snap-start hover:shadow-lg transition-shadow duration-300"
            >
              <div>
                {/* Card Image */}
                <div className="w-full bg-gray-100 h-[220px] overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    width="280"
                    height="220"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    decoding="async"
                  />
                </div>

                {/* Card Content */}
                <div className="p-4">
                  <h3 className="text-[17px] font-semibold line-clamp-2 leading-[22px] ">
                    {article.title}
                  </h3>
                  <p className="mt-1 text-sm leading-5 line-clamp-4 text-[#000]">
                    {article.description}
                  </p>
                </div>
              </div>

              {/* Card Footer Link */}
              <div className="px-5 pb-3 pt-1">
                <a
                  href={article.link}
                  className="inline-flex items-center gap-1 text-red-600 font-[500] text-xs sm:text-sm hover:text-red-700 transition-colors group"
                >
                  Read more
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InsightsSection;