import React, { useRef, useState, useEffect } from 'react';
import { Star, Quote, Play, ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';

const YouTubeIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none">
    <path
      d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814z"
      fill="#ffffff"
      stroke="currentColor"
      strokeWidth="1.5"
    />
    <path
      d="M9.545 15.568V8.432L15.818 12l-6.273 3.568z"
      fill="currentColor"
    />
  </svg>
);

const testimonials = [
  {
    type: "review",
    id: 1,
    rating: 4,
    text: "We have been using a Thermoforming Vacuum Packing Machine from ICON for our Paneer Vacuum Packing, and they have consistently exceeded our expectations. Their expertise, reliability, and readiness to support us in any matter make them a trusted partner for Banas Dairy. We highly recommend Icon for their outstanding service and innovative solutions.",
    author: "Mr. Bipin Patel",
    company: "Banas Dairy, Palanpur",
    avatar: "https://storage.server.grafizen.in/uploads/img_689d8abd45f790.72300944.png",
  },
  {
    type: "review",
    id: 2,
    rating: 4,
    text: "We are highly impressed with the Thermoforming Machine from Icon Industries, which has streamlined our paneer packaging process. The machine delivers outstanding performance, and their team is always ready to assist us with any support. Icon Industries has proven to be a reliable and customer-focused partner.",
    author: "Mr. Parag Shah",
    company: "Shree Krishna Farm",
    avatar: "https://storage.server.grafizen.in/uploads/img_688e1cef42d4b6.07979721.png",
  },
  {
    type: "video",
    id: 3,
    title: "Client Video Review",
    thumbnail: "https://img.youtube.com/vi/lWaigILhR94/hqdefault.jpg",
    videoUrl: "https://www.youtube.com/watch?v=lWaigILhR94",
  },
  {
    type: "review",
    id: 4,
    rating: 4,
    text: "Icon Industries has been a reliable partner for us at Verka Dairy. We have been using the ITF 900 Model, saving nearly 0.50 Rupees Per Packet. Their Thermoforming Machines are top-notch, and their team is always ready to provide prompt support whenever needed. We greatly appreciate their commitment to quality and customer service.",
    author: "Mr. Amit Sharma",
    company: "Verka Dairy, Mohali",
    avatar: "https://storage.server.grafizen.in/uploads/img_688e1d0288da98.73126875.png",
  },
  {
    type: "review",
    id: 5,
    rating: 4,
    text: "We are extremely satisfied with the Continuous Tray Sealer Machine from Icon Industries. Their machines deliver excellent performance, and their team is always ready to assist us with any requirements. Icon's commitment to quality and service makes them a trusted partner for Bikanerwala Foods.",
    author: "Mr. Ashok Aggarwal",
    company: "Bikanerwala Food Pvt. Ltd.",
    avatar: "https://storage.server.grafizen.in/uploads/img_688e1d0ff181b8.93830069.png",
  },
  {
    type: "video",
    id: 6,
    title: "Customer Experience with Icon",
    thumbnail: "https://img.youtube.com/vi/lWaigILhR94/hqdefault.jpg",
    videoUrl: "https://www.youtube.com/watch?v=lWaigILhR94",
  },
  {
    type: "review",
    id: 7,
    rating: 4,
    text: "The Thermoforming Machine from Icon Industries has been a game-changer for our packaging process. The machine's performance is exceptional, and their team is always available to provide support whenever needed. Icon Industries truly stands out for their quality and dedication to customer satisfaction.",
    author: "Mr. Bipin Hadvani",
    company: "Gopal Snacks Pvt. Ltd.",
    avatar: "https://storage.server.grafizen.in/uploads/img_688e1d1f1675e4.76102122.png",
  },
  {
    type: "review",
    id: 8,
    rating: 4,
    text: "Icon Industries has been a trusted partner for our packaging needs in the dates packing. Their machines deliver exceptional performance, ensuring the highest quality packaging for our products. Their team is always ready to provide support and solutions, making them a reliable and customer-focused company" ,
    author: "Mr. Rahul Gautam",
    company: "Apis India Limited",
    avatar: "https://storage.server.grafizen.in/uploads/img_688e2414d2c014.76672949.png",
  },
];

const TestimonialsSection = () => {
  const scrollContainerRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);
  const [selectedReview, setSelectedReview] = useState(null);
  const scrollPosRef = useRef(0);

  // Lock body scroll and handle Escape key when modal is open
  useEffect(() => {
    if (selectedReview) {
      document.body.style.overflow = 'hidden';
      const handleKeyDown = (e) => {
        if (e.key === 'Escape') setSelectedReview(null);
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = '';
        window.removeEventListener('keydown', handleKeyDown);
      };
    } else {
      document.body.style.overflow = '';
    }
  }, [selectedReview]);

  // Smooth continuous auto-scroll ticker with seamless wrap-around
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    let animationFrameId;
    let lastTime = performance.now();

    const step = (time) => {
      const delta = time - lastTime;
      lastTime = time;

      if (!isPaused && !selectedReview && container) {
        // Speed in px per second
        const speed = 45;
        scrollPosRef.current += (speed * delta) / 1000;

        const halfWidth = container.scrollWidth / 2;
        if (halfWidth > 0 && scrollPosRef.current >= halfWidth) {
          scrollPosRef.current -= halfWidth;
        }

        container.scrollLeft = scrollPosRef.current;
      } else if (container) {
        // Sync scrollPos with manual user drag / wheel scroll
        scrollPosRef.current = container.scrollLeft;
      }

      animationFrameId = requestAnimationFrame(step);
    };

    animationFrameId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isPaused, selectedReview]);

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      setIsPaused(true);
      const scrollAmount = direction === 'left' ? -380 : 380;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      scrollPosRef.current = scrollContainerRef.current.scrollLeft + scrollAmount;
      setTimeout(() => setIsPaused(false), 2500);
    }
  };

  const displayList = [...testimonials, ...testimonials];

  return (
    <section className="w-full bg-white py-14 sm:py-10 px-4 sm:px-6 lg:px-12 font-sans overflow-hidden lg:pt-[70px]">
      <div className="max-w-[1300px] mx-auto flex flex-col">
        
        {/* ================= HEADER ================= */}
        <div className="flex   items-center justify-center gap-4 mb-8">
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-[40px] font-[600] text-gray-900 tracking-tight text-center sm:text-left">
              What Our Clients Say About{' '}
          
                Icon
             
            </h2>
          </div>

          {/* Navigation Arrows */}
       
        </div>

        {/* ================= HORIZONTAL SCROLLABLE TESTIMONIALS ================= */}
        <div
          ref={scrollContainerRef}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
          className="flex gap-6 overflow-x-auto pb-6 pt-4 scrollbar-hide no-scrollbar select-none cursor-grab active:cursor-grabbing h-[280px]"
          

        >
          {displayList.map((item, index) => {
            const uniqueKey = `${item.id}-${index}`;
            if (item.type === "video") {
              return (
                <div
                  key={uniqueKey}
                  className="relative bg-white border border-red-500 h-[220px] rounded-br-2xl rounded-tl-2xl shadow-xl hover:shadow-2xl w-[320px] sm:w-[350px] flex-shrink-0 overflow-hidden transition-all duration-300"
                >
                  <div className="relative h-full w-full group">
                    <img
                      src={item.thumbnail}
                      alt={item.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                      decoding="async"
                      width="350"
                      height="220"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />

                    {/* Centered Play Button */}
                    <a
                      href={item.videoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="absolute inset-0 flex items-center justify-center"
                    >
                      <div className="h-14 w-14 rounded-full bg-white text-red-600 flex items-center justify-center shadow-2xl transition-transform duration-300 group-hover:scale-110">
                        <Play className="w-6 h-6 fill-current ml-0.5" />
                      </div>
                    </a>

                    {/* Bottom Watch on YouTube link */}
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <a
                        href={item.videoUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="group/btn relative inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/40 text-white text-xs font-semibold overflow-hidden transition-all duration-300 bg-black/40 backdrop-blur-sm hover:border-red-500"
                      >
                        <span className="absolute inset-0 bg-red-600 translate-x-full group-hover/btn:translate-x-0 transition-transform duration-300 ease-out" />
                        <span className="relative text-white z-10 flex items-center gap-2">
                          <YouTubeIcon className="w-4 h-4 text-red-500 group-hover/btn:text-white transition-colors" />
                          <span>Watch on YouTube</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              );
            }

            return (
              <div
                key={uniqueKey}
                onClick={() => setSelectedReview(item)}
                className="relative bg-white border border-red-500 h-[220px] py-4 px-6 rounded-br-2xl rounded-tl-2xl shadow-xl hover:shadow-xl w-[320px] sm:w-[350px] flex-shrink-0 flex flex-col justify-between transition-all duration-300 cursor-pointer group"
              >
                {/* Floating Top Right Quote Icon */}
                <div className="absolute -top-3.5 -right-2 z-20">
                  <div className="w-7 h-7 rounded-full bg-white  flex items-center justify-center text-red-500  group-hover:scale-110 transition-transform">
                    <Quote className="w-8 h-8  rotate-180" />
                  </div>
                </div>

                <div>
                  {/* Star Rating */}
                  <div className="flex items-center gap-0 mb-2.5">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-red-600 fill-current" />
                    ))}
                  </div>

                  {/* Review Text - clamped to 3 lines */}
                  <p className="text-gray-700 text-xs sm:text-sm leading-relaxed line-clamp-3">
                    "{item.text}"
                  </p>
                </div>

                {/* Author Info */}
                <div className="flex items-center gap-3 border-t border-gray-100 pt-3">
                  <img
                    src={item.avatar}
                    alt={item.author}
                    className="w-10 h-10 rounded-full object-cover border border-red-200"
                    loading="lazy"
                    decoding="async"
                    width="40"
                    height="40"
                  />
                  <div className="min-w-0">
                    <p className="font-semibold text-xs sm:text-sm text-gray-900 truncate">
                      {item.author}
                    </p>
                    <p className="text-[11px] sm:text-xs text-gray-500 truncate">
                      {item.company}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Testimonial Review Detail Popup Modal */}
      {selectedReview && (
        <div
          className="fixed inset-0 z-[10000] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4 animate-fadeIn"
          onClick={() => setSelectedReview(null)}
        >
          <div
            className="bg-white w-[90%] max-w-md p-6 rounded-xl shadow-lg relative max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button with circle-xmark icon */}
            <button
              type="button"
              onClick={() => setSelectedReview(null)}
              className="absolute top-3 right-4 text-red-600 hover:text-red-700 font-bold text-xl cursor-pointer transition-colors"
              aria-label="Close"
            >
              <svg className="w-6 h-6 fill-current" viewBox="0 0 512 512">
                <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z" />
              </svg>
            </button>

            {/* Star Rating */}
            <div className="flex mb-4">
              {[...Array(selectedReview.rating || 5)].map((_, i) => (
                <svg
                  key={i}
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-star w-5 h-5 text-[#ff0b0b] fill-current"
                >
                  <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
                </svg>
              ))}
            </div>

            {/* Review Text */}
            <p className="text-gray-800 text-sm mb-4 leading-relaxed">
              {selectedReview.text}
            </p>

            {/* Author Profile */}
            <div className="flex items-center gap-4 border-t border-gray-200 pt-4">
              <img
                src={selectedReview.avatar}
                alt={selectedReview.author || "Profile Image"}
                className="w-14 h-14 rounded-full object-cover border-2 border-violet-100"
              />
              <div>
                <p className="font-bold text-gray-900">{selectedReview.author}</p>
                <p className="text-sm text-gray-600">{selectedReview.company}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default TestimonialsSection;
