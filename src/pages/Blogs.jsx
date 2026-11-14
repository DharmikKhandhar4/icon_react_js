import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';

const blogArticles = [
  {
    id: 'b1',
    category: 'Blog',
    title: "From Navratri to Dussehra: Is Your Food Packaging Ready for the Festive Rush?",
    description:
      "October in India arrives with celebrations and an enormous appetite for festive food. Is your packaging line ready for the surge?",
    image: "https://storage.server.grafizen.in/uploads/img_6ad74c460f4b70.18245951.jpg",
    link: "/blog-detail",
  },
  {
    id: 'b2',
    category: 'Blog',
    title: "Service Before Sales: The Principle That Built Icon",
    description:
      "For Icon Packtech India Pvt. Ltd., success has never been measured by how many machines are sold but by how...",
    image: "/home/blog/blog2.webp",
    link: "/blog-detail",
  },
  {
    id: 'b3',
    category: 'Blog',
    title: "Icon Packtech Pvt. Ltd.: How Low-Cost Vacuum...",
    description:
      "For many farmers, the most challenging part of agriculture does not end at harvest; it being after. Months of labour, care and...",
    image: "/home/blog/blog3.webp",
    link: "/blog-detail",
  },
  {
    id: 'b4',
    category: 'Blog',
    title: "The Hidden Cost of poor Packaging: Why Upgradi...",
    description:
      "In 2026, India's food market is more competitive than ever. While quality ingredients and good taste matter, packaging...",
    image: "/home/blog/blog4.webp",
    link: "/blog-detail",
  },
];

const eventArticles = [
  {
    id: 'e1',
    category: 'Event',
    title: "ANUGA FoodTec India 2026 - Live Machine Demo",
    description:
      "Join Icon at Anuga FoodTec India at Bombay Exhibition Centre, Mumbai. Discover next-generation thermoforming and MAP packaging innovations.",
    image: "/banners/anuga-2026.jpg",
    link: "/blog-detail",
  },
  {
    id: 'e2',
    category: 'Event',
    title: "Dairy Expo & Packaging Technology Summit 2025",
    description:
      "Live demonstration of high-speed vacuum pouch packaging and hygienic paneer block thermoforming solutions for dairy industry pioneers.",
    image: "/home/exibition/exibition one.webp",
    link: "#",
  },
  {
    id: 'e3',
    category: 'Event',
    title: "International FoodTech Automation Conclave",
    description:
      "Industry leaders gathering to explore smart automation, robotic pick-fill-seal workflows, and sustainable barrier film reduction.",
    image: "/home/exibition/exibitiontwo.webp",
    link: "#",
  },
  {
    id: 'e4',
    category: 'Event',
    title: "Global Packaging Machinery & Logistics Expo",
    description:
      "Showcasing advanced modified atmosphere packaging (MAP) technology with extended fresh shelf-life testing and industrial sealing.",
    image: "/home/exibition/exibitionthree.webp",
    link: "#",
  },
];

export default function Blogs({ onNavigate, initialCategory = 'Blog' }) {
  const [activeCategory, setActiveCategory] = useState(initialCategory);

  const displayedArticles = activeCategory === 'Blog' ? blogArticles : eventArticles;

  return (
    <div className="min-h-screen bg-white pb-20 font-Poppins">
      {/* ================= 1. PAGE HEADER ================= */}
      <section className="relative py-12 md:py-16 bg-white overflow-hidden">
        {/* Subtle Background Grid Pattern */}
        <div
          className="absolute inset-0 pointer-events-none opacity-40"
          style={{
            backgroundImage: `
              linear-gradient(to right, #f1f5f9 1px, transparent 1px),
              linear-gradient(to bottom, #f1f5f9 1px, transparent 1px)
            `,
            backgroundSize: '4rem 4rem',
          }}
        />

        <div className="relative max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto">
          {/* Page Heading & Header */}
          {/* <div className="text-center max-w-3xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-red-500 bg-white text-xs sm:text-sm font-medium text-neutral-800 shadow-sm mb-3">
              <span>{activeCategory === 'Blog' ? 'Industry Insights & Articles' : 'Exhibitions & Industry Events'}</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
              Our <span className="bg-[linear-gradient(38.46deg,red_0.15%,rgb(97,3,3)_98.48%)] bg-clip-text text-transparent">{activeCategory === 'Blog' ? 'Blogs' : 'Events'}</span>
            </h1>
            <p className="mt-3 text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
              {activeCategory === 'Blog'
                ? 'Explore the latest trends, packaging intelligence, and engineering innovations from Icon Industries.'
                : 'Discover our live machine demos, global trade exhibitions, and packaging expos across India.'}
            </p>
          </div> */}

          {/* ================= 2. FOUR CARDS (EXACT SAME INSIGHTS.jsx DESIGN) ================= */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-2">
            {displayedArticles.map((article) => (
              <div
                key={article.id}
                onClick={() => onNavigate && onNavigate('/blog-detail')}
                className="w-full bg-white rounded-2xl shadow-[0_4px_20px_-2px_rgba(0,0,0,0.06)] border border-gray-100 overflow-hidden flex flex-col justify-between hover:shadow-lg transition-all duration-300 cursor-pointer group max-w-[260px] mx-auto md:max-w-full"
              >
                <div>
                  {/* Card Image */}
                  <div className="w-full bg-gray-100 h-[220px] overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      width="350"
                      height="220"
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => {
                        e.currentTarget.src = '/banners/anuga-2026.jpg';
                      }}
                    />
                  </div>

                  {/* Card Content */}
                  <div className="p-4">
                    <h3 className="text-[17px] font-semibold line-clamp-2 leading-[22px] text-gray-900 group-hover:text-red-600 transition-colors">
                      {article.title}
                    </h3>
                    <p className="mt-1 text-sm leading-5 line-clamp-4 text-neutral-600">
                      {article.description}
                    </p>
                  </div>
                </div>

                {/* Card Footer Link */}
                <div className="px-5 pb-5 pt-1">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      onNavigate && onNavigate('/blog-detail');
                    }}
                    className="inline-flex items-center gap-1 text-red-600 font-semibold text-xs sm:text-sm hover:text-red-700 transition-colors cursor-pointer"
                  >
                    Read more
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </div>
  );
}
