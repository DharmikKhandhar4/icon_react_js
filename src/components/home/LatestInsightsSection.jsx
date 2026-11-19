import React, { useEffect, useRef } from 'react';

const defaultArticles = [
  {
    id: 1,
    title: "From Navratri to Dussehra: Is Your Food Packaging Ready for the Festive Rush?",
    date: "October 20",
    description: "October in India doesn't arrive quietly. It arrives with celebrations, colours, gatherings, and an enormous appetite for festive food.",
    image: "/home/blog/blog1.webp",
    slug: "from-navratri-to-dussehra-is-your-food-packaging-ready-for-the-festive-rush",
  },
  {
    id: 2,
    title: "Why Packaging Machinery Is Becoming a Strategic Investment for Dairy Brands",
    date: "October 15",
    description: "Dairy Growth Doesn't Stop at Production. Why automated and reliable sealing systems are defining competitive advantage.",
    image: "/home/blog/blog2.webp",
    slug: "why-packaging-machinery-is-becoming-a-strategic-investment-for-dairy-brands",
  },
  {
    id: 3,
    title: "The Right Pouch Starts with the Right Machine: What Snack Brands Should Consider",
    date: "October 10",
    description: "A Pouch May Look Simple. The Process Behind It Isn't. Key factors brands must evaluate for freshness and shelf impact.",
    image: "/home/blog/blog3.webp",
    slug: "the-right-pouch-starts-with-the-right-machine-what-snack-brands-should-consider",
  },
  {
    id: 4,
    title: "Thermoforming Beyond the Pack: How One Technology Can Transform Food Production",
    date: "October 06",
    description: "What If Packaging Could Become Part of the Production Flow? Integrating speed, hygiene, and automated efficiency.",
    image: "/home/blog/blog4.webp",
    slug: "thermoforming-beyond-the-pack-how-one-technology-can-transform-food-production",
  },
  {
    id: 5,
    title: "Festive Gifting, Better Packaging: Protecting Sweets & Dry Fruits This Season",
    date: "October 02",
    description: "A Festive Gift Begins Before the Box Is Opened. Why vacuum and MAP sealing protect traditional mithai and dry fruits.",
    image: "/home/blog/blog5.webp",
    slug: "festive-gifting-better-packaging-protecting-sweets-dry-fruits-this-season",
  },
  {
    id: 6,
    title: "When Packaging Becomes a Competitive Advantage: How Machinery Helps Brands Stand Out",
    date: "September 28",
    description: "Packaging used to be viewed as the final step of manufacturing. Today, it is one of the biggest drivers of consumer trust.",
    image: "/home/blog/blog1.webp",
    slug: "when-packaging-becomes-a-competitive-advantage",
  },
  {
    id: 7,
    title: "The Science of Freshness: How Vacuum & MAP Packaging Extend Shelf Life",
    date: "September 18",
    description: "In food packaging, shelf life isn't just about dates on a label; it is about preserving taste, texture, and consumer safety.",
    image: "/home/blog/blog2.webp",
    slug: "the-science-of-freshness-how-vacuum-and-map-packaging-extend-shelf-life",
  },
  {
    id: 8,
    title: "High-Speed, Zero Compromise: The Engineering Behind Icon's Thermoforming Machines",
    date: "September 08",
    description: "In high-throughput food and pharma operations, every second counts. How precision engineering maximizes uptime and cycle speeds.",
    image: "/home/blog/blog3.webp",
    slug: "high-speed-zero-compromise-the-engineering-behind-icons-thermoforming-machines",
  },
];

export default function LatestInsightsSection({ onNavigate }) {
  const containerRef = useRef(null);
  const posts = defaultArticles;

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let isDragging = false;
    let startX = 0;
    let scrollStart = 0;

    const handleMouseDown = (e) => {
      isDragging = true;
      startX = e.pageX;
      scrollStart = container.scrollLeft;
      container.style.cursor = "grabbing";
    };

    const handleMouseMove = (e) => {
      if (!isDragging) return;
      const distance = e.pageX - startX;
      container.scrollLeft = scrollStart - distance;
    };

    const handleMouseUp = () => {
      isDragging = false;
      container.style.cursor = "grab";
    };

    const handleMouseLeave = () => {
      isDragging = false;
      container.style.cursor = "grab";
    };

    container.addEventListener("mousedown", handleMouseDown);
    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseup", handleMouseUp);
    container.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      container.removeEventListener("mousedown", handleMouseDown);
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseup", handleMouseUp);
      container.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  const handleNavigate = (post) => {
    const targetUrl = `/blogs/${post.slug || post.id}`;
    if (onNavigate) {
      onNavigate(targetUrl);
    } else {
      window.location.href = targetUrl;
    }
  };

  return (
    <div className="font-Poppins w-[90%] mx-auto pt-[20px] pb-[30px] 2xl:w-[1330px]">
      <h2 className="text-[30px] md:text-[37px] font-semibold text-center text-[#0f0f0f] mb-6">
        Latest Insights from Icon
      </h2>

      <div className="w-full flex flex-col gap-[20px]">
        <div
          ref={containerRef}
          className="flex overflow-x-auto overflow-y-hide gap-6 pb-4 cursor-grab select-none no-scrollbar"
        >
            {posts.map((post) => (
              <div
                key={post.id}
                className="group md:w-[270px] h-[430px] border border-[#f333332c] shadow-icon 2xl:w-[290px] mb-[20px] 2xl:h-[440px] md11:h-[400px] w-[260px] mx-auto md:mx-0 relative shadow-lg overflow-hidden rounded-[14px] flex flex-col cursor-pointer flex-shrink-0 bg-white"
                onClick={() => handleNavigate(post)}
              >
                <div className="overflow-hidden md:h-[190px] 2xl:h-[220px] h-[210px] w-full relative">
                  <img
                    className="w-full h-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-110"
                    src={post.image}
                    alt={post.title}
                    onError={(e) => {
                      e.currentTarget.src = "/home/blog/blog1.webp";
                    }}
                  />
                  <div className="w-[90px] text-[12px] justify-center font-Poppins absolute top-0 left-0 items-center flex py-[5px] text-[#fff] bs-mix-red icon-shadow rounded-tl-[10px] rounded-br-[10px] z-10 pointer-events-none">
                    {post.date}
                  </div>
                </div>
                <div className="flex w-full px-[10px] flex-col mt-[10px] gap-[6px]">
                  <div className="font-[600] text-[16px]">
                    <p className="flex font-Poppins font-[600] text-[#434343] leading-[22px] h-[45px]">
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
                      handleNavigate(post);
                    }}
                  >
                    <span className="text-icon font-Poppins">Read More</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
    </div>
  );
}
