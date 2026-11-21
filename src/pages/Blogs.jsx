import React, { useState } from 'react';

const blogArticles = [
  {
    id: 'b1',
    category: 'Blog',
    title: "From Navratri to Dussehra: Is Your Food Packaging Ready for the Festive Rush?",
    date: "October 20",
    description:
      "October in India arrives with celebrations and an enormous appetite for festive food. Is your packaging line ready for the surge?",
    image: "https://storage.server.grafizen.in/uploads/img_6ad74c460f4b70.18245951.jpg",
    slug: "from-navratri-to-dussehra-is-your-food-packaging-ready-for-the-festive-rush",
  },
  {
    id: 'b2',
    category: 'Blog',
    title: "Service Before Sales: The Principle That Built Icon",
    date: "October 15",
    description:
      "For Icon Packtech India Pvt. Ltd., success has never been measured by how many machines are sold but by how...",
    image: "/home/blog/blog2.webp",
    slug: "service-before-sales-the-principle-that-built-icon",
  },
  {
    id: 'b3',
    category: 'Blog',
    title: "Icon Packtech Pvt. Ltd.: How Low-Cost Vacuum...",
    date: "October 10",
    description:
      "For many farmers, the most challenging part of agriculture does not end at harvest; it being after. Months of labour, care and...",
    image: "/home/blog/blog3.webp",
    slug: "icon-packtech-pvt-ltd-how-low-cost-vacuum",
  },
  {
    id: 'b4',
    category: 'Blog',
    title: "The Hidden Cost of poor Packaging: Why Upgradi...",
    date: "October 06",
    description:
      "In 2026, India's food market is more competitive than ever. While quality ingredients and good taste matter, packaging...",
    image: "/home/blog/blog4.webp",
    slug: "the-hidden-cost-of-poor-packaging-why-upgrading-matters",
  },
];

const eventArticles = [
  {
    id: 'e1',
    category: 'Event',
    title: "ANUGA FoodTec India 2026 - Live Machine Demo",
    date: "October 02",
    description:
      "Join Icon at Anuga FoodTec India at Bombay Exhibition Centre, Mumbai. Discover next-generation thermoforming and MAP packaging innovations.",
    image: "/banners/anuga-2026.jpg",
    slug: "anuga-foodtec-india-2026",
  },
  {
    id: 'e2',
    category: 'Event',
    title: "Dairy Expo & Packaging Technology Summit 2025",
    date: "September 28",
    description:
      "Live demonstration of high-speed vacuum pouch packaging and hygienic paneer block thermoforming solutions for dairy industry pioneers.",
    image: "/home/exibition/exibition one.webp",
    slug: "dairy-expo-packaging-summit-2025",
  },
  {
    id: 'e3',
    category: 'Event',
    title: "International FoodTech Automation Conclave",
    date: "September 18",
    description:
      "Industry leaders gathering to explore smart automation, robotic pick-fill-seal workflows, and sustainable barrier film reduction.",
    image: "/home/exibition/exibitiontwo.webp",
    slug: "international-foodtech-conclave",
  },
  {
    id: 'e4',
    category: 'Event',
    title: "Global Packaging Machinery & Logistics Expo",
    date: "September 08",
    description:
      "Showcasing advanced modified atmosphere packaging (MAP) technology with extended fresh shelf-life testing and industrial sealing.",
    image: "/home/exibition/exibitionthree.webp",
    slug: "global-packaging-machinery-expo",
  },
];

export default function Blogs({ onNavigate, initialCategory = 'Blog' }) {
  const [activeCategory, setActiveCategory] = useState(initialCategory);

  const displayedArticles = activeCategory === 'Blog' ? blogArticles : eventArticles;

  return (
    <div className="h-fite bg-white  font-Poppins">
      {/* ================= 1. PAGE HEADER ================= */}
      <section className="relative py-12 md:py-8 bg-white overflow-hidden">
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

          {/* ================= 2. FOUR CARDS (EXACT SAME BLOG CARD DESIGN) ================= */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-2">
            {displayedArticles.map((post) => (
              <div
                key={post.id}
                className="group md:w-[270px] h-[430px] 2xl:w-[290px] mb-[20px] 2xl:h-[440px] md11:h-[400px] w-[260px] mx-auto md:mx-0 relative shadow-lg overflow-hidden rounded-[14px] flex flex-col cursor-pointer flex-shrink-0 bg-white"
                onClick={() => onNavigate && onNavigate(`/blogs/${post.slug || post.id}`)}
              >
                <div className="overflow-hidden md:h-[190px] 2xl:h-[230px] h-[210px] w-full relative">
                  <img
                    className="w-full h-full object-cover object-top transition-transform duration-500 ease-out "
                    src={post.image}
                    alt={post.title}
                    onError={(e) => {
                      e.currentTarget.src = '/home/blog/blog1.webp';
                    }}
                  />
                  <div className="w-[90px] text-[12px] justify-center font-Poppins absolute top-0 left-0 items-center flex py-[5px] text-[#fff] bs-mix-red icon-shadow rounded-tl-[10px] rounded-br-[10px] z-10 pointer-events-none">
                    {post.date || 'Recent'}
                  </div>
                </div>
                <div className="flex w-full px-[10px] flex-col mt-[10px] gap-[6px]">
                  <div className="font-[600] text-[16px]">
                    <p className="flex font-Poppins font-[600] text-[#434343] leading-[22px] h-[50px]">
                      {post?.title?.split(" ").slice(0, 6).join(" ")}
                      {post?.title?.split(" ").length > 6 && "..."}
                    </p>
                  </div>
                  <div className="text-[14px] mt-[4px] leading-[18px] font-[400] text-[#646464]">
                    <p className="font-Poppins text-justify line-clamp-5">
                      {post.description}
                    </p>
                  </div>
                  <div
                    className="text-[14px] py-[4px] w-full cursor-pointer absolute bottom-3 bg-[#fff] flex items-center justify-start font-[600]"
                    onClick={(e) => {
                      e.stopPropagation();
                      if (onNavigate) {
                        onNavigate(`/blogs/${post.slug || post.id}`);
                      }
                    }}
                  >
                    <span className="text-icon font-Poppins">Read More</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </div>
  );
}
