import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import DepthCard, { DepthLayer } from '../DepthCard';

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
    description: "For many farmers, the most challenging part of agriculture does not end at harvest; it being after. Months of labour..",
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
     {/* <div 
        className="absolute inset-0 opacity-[0.05] [background-image:linear-gradient(to_right,#0ff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] [background-size:48px_48px] pointer-events-none [mask-image:radial-gradient(ellipse_at_top_left,black_30%,transparent_80%)] [-webkit-mask-image:radial-gradient(ellipse_at_top_left,black_30%,transparent_80%)]"
        aria-hidden="true"
      /> */}

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
        <div className="flex flex-col sm:flex-row sm:items-end justify-between pr-0 sm:pr-12 lg:pr-0 mb-8 gap-4">
          <div>
            <span className="sm:text-sm font-[400] block mb-2 text-sm uppercase tracking-[0.2em]
            
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
            className="inline-flex items-center gap-1.5 text-sm font-[500] text-gray-900 hover:text-red-600 transition-colors whitespace-nowrap"
          >
            View all blogs
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        {/* Horizontal Scrollable Cards Container with 3D Depth Card Tilt */}
        <div className="flex gap-6 overflow-x-auto pb-10 pt-3 px-2 pr-6 sm:pr-12 lg:pr-20 scrollbar-hide snap-x ">
          {articles.map((article) => (
            <DepthCard
              key={article.id}
              maxTilt={14}
              scale={1.03}
              glare={true}
              glareOpacity={0.22}
              shadow={true}
              containerClassName="snap-start flex-shrink-0 rounded-3xl"
              className="group min-w-[290px] sm:min-w-[270px] max-w-[280px] h-[430px] md11:h-[400px] 2xl:h-[420px] bg-white rounded-3xl border border-gray-200/80 shadow-md hover:shadow-xl transition-shadow cursor-pointer overflow-hidden"
            >
              <div className="h-full flex flex-col justify-between rounded-3xl overflow-hidden">
                {/* Card Image with 3D Depth Layer */}
                <DepthLayer depth={25} className="w-full bg-gray-100 h-[210px] md11:h-[190px] 2xl:h-[220px] overflow-hidden rounded-t-3xl">
                  <img
                    src={article.image}
                    alt={article.title}
                    width="280"
                    height="220"
                    className="w-full h-full object-cover rounded-t-3xl transition-transform duration-500 ease-out group-hover:scale-108"
                    loading="lazy"
                    decoding="async"
                  />
                </DepthLayer>

                {/* Card Content with Raised 3D Depth Layer */}
                <DepthLayer depth={45} className="p-4 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-[17px] font-semibold line-clamp-2 leading-[22px] text-gray-950">
                      {article.title}
                    </h3>
                    <p className="mt-1 text-sm leading-5 line-clamp-5 text-gray-700">
                      {article.description}
                    </p>
                  </div>

                  <a
                    href={article.link}
                    className="inline-flex items-center font-[500] text-xs sm:text-sm transition-opacity hover:opacity-85 mt-4"
                  >
                    <span className="bg-[linear-gradient(38.46deg,red_0.15%,rgb(97,3,3)_98.48%)] bg-clip-text text-transparent font-medium">
                      Read more
                    </span>
                    <ArrowUpRight className="w-3.5 h-3.5 ml-2 text-red-600 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </a>
                </DepthLayer>
              </div>
            </DepthCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InsightsSection;