import React, { useEffect, useRef } from 'react';

const defaultArticles = [
  {
    id: 1,
    title: "From Navratri to Dussehra: Is Your Food Packaging Ready for the Festive Rush?",
    date: "October 20",
    description: "October across India arrives with vibrant celebrations, traditional gatherings, and a massive surge in demand for sweets and savory delicacies. Ensuring packaging lines deliver airtight freshness, leak-proof sealing, and rapid throughput is vital for maintaining shelf appeal and product integrity during peak festive market rushes.",
    image: "/home/blog/blog1.webp",
    slug: "from-navratri-to-dussehra-is-your-food-packaging-ready-for-the-festive-rush",
  },
  {
    id: 2,
    title: "Why Packaging Machinery Is Becoming a Strategic Investment for Dairy Brands",
    date: "October 15",
    description: "Dairy production requires uncompromising hygiene, airtight sealing, and extended freshness for perishable products like paneer, curd, butter, and cheese. Modern automated packaging solutions eliminate human contamination, improve shelf presentation, and protect high-value dairy inventory across regional supply chains.",
    image: "/home/blog/blog2.webp",
    slug: "why-packaging-machinery-is-becoming-a-strategic-investment-for-dairy-brands",
  },
  {
    id: 3,
    title: "The Right Pouch Starts with the Right Machine: What Snack Brands Should Consider",
    date: "October 10",
    description: "Pouch packaging for crispy snack foods demands far more than just attractive artwork. From precise nitrogen flushing and barrier film sealing to high-speed bag-forming, choosing the right automated packaging system guarantees that snacks retain authentic crunch, aroma, and premium shelf-life stability.",
    image: "/home/blog/blog3.webp",
    slug: "the-right-pouch-starts-with-the-right-machine-what-snack-brands-should-consider",
  },
  {
    id: 4,
    title: "Thermoforming Beyond the Pack: How One Technology Can Transform Food Production",
    date: "October 06",
    description: "Modern thermoforming technology is revolutionizing modern packaging operations by integrating forming, filling, and vacuum sealing into a continuous line. This streamlined approach minimizes manual handling, lowers labor costs, and provides sterile packaging environments for medical and fresh food goods.",
    image: "/home/blog/blog4.webp",
    slug: "thermoforming-beyond-the-pack-how-one-technology-can-transform-food-production",
  },
  {
    id: 5,
    title: "Festive Gifting, Better Packaging: Protecting Sweets & Dry Fruits This Season",
    date: "October 02",
    description: "Gifting premium sweets and dry fruits requires packaging that protects sensitive textures and prevents oil rancidity over time. Utilizing advanced modified atmosphere packaging and vacuum tray sealing ensures traditional mithai retains authentic taste, rich aroma, and gift-worthy visual appeal.",
    image: "/home/blog/blog5.webp",
    slug: "festive-gifting-better-packaging-protecting-sweets-dry-fruits-this-season",
  },
  {
    id: 6,
    title: "When Packaging Becomes a Competitive Advantage: How Machinery Helps Brands Stand Out",
    date: "September 28",
    description: "In today's crowded retail aisles, packaging is no longer just a protective outer layer; it is the primary ambassador of brand quality. Advanced packaging machinery ensures clean seals, consistent aesthetics, and ergonomic designs that build long-term consumer trust and drive repeat sales.",
    image: "/home/blog/blog1.webp",
    slug: "when-packaging-becomes-a-competitive-advantage",
  },
  {
    id: 7,
    title: "The Science of Freshness: How Vacuum & MAP Packaging Extend Shelf Life",
    date: "September 18",
    description: "Preserving freshness in perishable foods without artificial preservatives requires precise atmospheric control. Modified atmosphere packaging and vacuum sealing effectively halt microbial growth and oxidation, locking in natural flavors, moisture, and essential nutrients across long-distance distribution.",
    image: "/home/blog/blog2.webp",
    slug: "the-science-of-freshness-how-vacuum-and-map-packaging-extend-shelf-life",
  },
  {
    id: 8,
    title: "High-Speed, Zero Compromise: The Engineering Behind Icon's Thermoforming Machines",
    date: "September 08",
    description: "High-throughput packaging environments demand uncompromising mechanical durability, servo-driven accuracy, and seamless operator controls. Icon's thermoforming machinery is engineered to deliver rapid cycle speeds, minimal material waste, and round-the-clock reliability for demanding production schedules.",
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
    <div className="font-Poppins w-[90%] mx-auto pt-[20px] pb-[0px] 2xl:w-[1330px]">
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
                className="group md:w-[270px] h-[440px]   2xl:w-[290px] mb-[20px] 2xl:h-[440px] md11:h-[400px] w-[260px] mx-auto md:mx-0 relative shadow-lg overflow-hidden rounded-[14px] flex flex-col cursor-pointer flex-shrink-0 bg-white"
                onClick={() => handleNavigate(post)}
              >
                <div className="overflow-hidden md:h-[190px] 2xl:h-[220px] h-[190px] w-full relative">
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
                <div className="flex w-full px-[10px] flex-col mt-[10px] gap-[4px]">
                  <div className="font-[600] text-[15px] sm:text-[16px]">
                    <p className="font-Poppins font-[600] text-[#434343] leading-[21px] h-[44px] line-clamp-2">
                      {post?.title}
                    </p>
                  </div>
                  <div className="text-[13px] sm:text-[14px] mt-[2px] leading-[18px] sm:leading-[19px] font-[400] text-[#646464]">
                    <p
                      className="font-Poppins text-justify line-clamp-5"
                      style={{
                        display: "-webkit-box",
                        WebkitLineClamp: 5,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                      }}
                    >
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
