import React from 'react';

const eventsData = [
  {
    id: 'e1',
    category: 'Event',
    title: "ANUGA FoodTec India 2026 - Live Machine Demo",
    date: "October 02",
    description:
      "Join Icon at Anuga FoodTec India at Bombay Exhibition Centre, Mumbai. Discover next-generation thermoforming and MAP packaging innovations.",
    image: "/event/image1.jpeg",
    slug: "anuga-foodtec-india-2026",
    videoUrl: "https://www.youtube.com/watch?v=2GWX5OlloTY",
  },
  {
    id: 'e2',
    category: 'Event',
    title: "Dairy Expo & Packaging Technology Summit 2025",
    date: "September 28",
    description:
      "Live demonstration of high-speed vacuum pouch packaging and hygienic paneer block thermoforming solutions for dairy industry pioneers.",
    image: "/event/image2.png",
    slug: "dairy-expo-packaging-summit-2025",
    videoUrl: "https://www.youtube.com/watch?v=2GWX5OlloTY",
  },
  {
    id: 'e3',
    category: 'Event',
    title: "International FoodTech Automation Conclave",
    date: "September 18",
    description:
      "Industry leaders gathering to explore smart automation, robotic pick-fill-seal workflows, and sustainable barrier film reduction.",
    image: "/event/image3.jpeg",
    slug: "international-foodtech-conclave",
    videoUrl: "https://www.youtube.com/watch?v=a04-8oFUB5E",
  },
  {
    id: 'e4',
    category: 'Event',
    title: "Global Packaging Machinery & Logistics Expo",
    date: "September 08",
    description:
      "Showcasing advanced modified atmosphere packaging (MAP) technology with extended fresh shelf-life testing and industrial sealing.",
    image: "/event/image4.jpeg",
    slug: "global-packaging-machinery-expo",
    videoUrl: "https://www.youtube.com/watch?v=ar-yzK8Xo8o",
  },
];

export default function Events({ onNavigate }) {
  const handleEventClick = (post) => {
    if (onNavigate) {
      onNavigate(`/events/${post.slug || post.id}`);
    } else {
      window.location.href = `/events/${post.slug || post.id}`;
    }
  };

  return (
    <div className="h-fit bg-white  font-Poppins">
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

        <div className="relative  px-4 sm:px-0 lg:px-0 mx-auto
        
         w-[94%]  md11:w-[78%] 2xl:w-[1300px]
        ">
          {/* ================= 2. FOUR CARDS (EXACT SAME BLOG CARD DESIGN) ================= */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-0">
            {eventsData.map((post) => (
              <div
                key={post.id}
                className="group md:w-[270px] h-[430px]  shadow-icon 2xl:w-[290px] mb-[20px] 2xl:h-[440px] md11:h-[400px] w-[260px] mx-auto md:mx-0 relative shadow-lg overflow-hidden rounded-[14px] flex flex-col cursor-pointer flex-shrink-0 bg-white transition-transform duration-300 ease-out hover:-translate-y-[6px] hover:shadow-2xl"
                onClick={() => handleEventClick(post)}
              >
                <div className="overflow-hidden md:h-[190px] 2xl:h-[225px] h-[210px] w-full relative">
                  <img
                    className="w-full h-full object-cover object-top"
                    src={post.image}
                    alt={post.title}
                    onError={(e) => {
                      e.currentTarget.src = '/event/image1.jpeg';
                    }}
                  />
                  <div className="w-[90px] text-[12px] justify-center font-Poppins absolute top-0 left-0 items-center flex py-[5px] text-[#fff] bs-mix-red shadow-md rounded-tl-[10px] rounded-br-[10px] z-10 pointer-events-none">
                    {post.date || 'Recent'}
                  </div>
                </div>
                <div className="flex w-full px-[10px] flex-col mt-[10px] gap-[6px]">
                  <div className="font-[600] text-[16px]">
                    <p className="flex font-Poppins font-[600] text-[#434343] leading-[22px] h-[48px]">
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
                      handleEventClick(post);
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
