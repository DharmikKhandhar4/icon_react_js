import React, { useRef } from 'react';
import { ChevronRight, ArrowUpRight, Play, ChevronLeft } from 'lucide-react';

const YouTubeIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
);

const showcaseVideos = [
  {
    id: "2GWX5OlloTY",
    title: "Icon Packtech at IDA Delhi 2026",
    description: "A practical look at how modern packaging",
    thumbnail: "https://img.youtube.com/vi/2GWX5OlloTY/hqdefault.jpg",
    url: "https://www.youtube.com/watch?v=2GWX5OlloTY",
  },
  {
    id: "a04-8oFUB5E",
    title: "Icon at WMNC 25",
    description: "A practical look at how modern packaging",
    thumbnail: "https://img.youtube.com/vi/a04-8oFUB5E/hqdefault.jpg",
    url: "https://www.youtube.com/watch?v=a04-8oFUB5E",
  },
  {
    id: "ar-yzK8Xo8o",
    title: "AAHAR - 2025",
    description: "A practical look at how modern packaging",
    thumbnail: "https://img.youtube.com/vi/ar-yzK8Xo8o/hqdefault.jpg",
    url: "https://www.youtube.com/watch?v=ar-yzK8Xo8o",
  },
  {
    id: "RjYd7IIlgTU",
    title: "IndusFood Exhibition - 2025",
    description: "A practical look at how modern packaging",
    thumbnail: "https://img.youtube.com/vi/RjYd7IIlgTU/hqdefault.jpg",
    url: "https://www.youtube.com/watch?v=RjYd7IIlgTU",
  },
  {
    id: "lWaigILhR94",
    title: "How Packaging Extends Shelf",
    description: "A practical look at how modern packaging",
    thumbnail: "https://img.youtube.com/vi/lWaigILhR94/hqdefault.jpg",
    url: "https://www.youtube.com/watch?v=lWaigILhR94",
  },
];

export default function ExhibitionShowcase() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const amount = 300;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -amount : amount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="w-full max-w-7xl mx-auto mt-6 mb-6 px-2 sm:px-4">
      {/* Single Parent Container enclosing both Image Div and Content Div */}
      <div className="relative md:rounded-[28px] rounded-[18px] border border-gray-200/90 shadow-md overflow-hidden bg-white">
        
        {/* ================= 1. IMAGE DIV (TOP) ================= */}
        <div className="relative w-full overflow-hidden bg-white">
          <img
            src="/herobanner/bannertwo.jpeg"
            alt="ICON Packtech packaging machines showcase - Precision Engineered, Perfectly Sealed"
            className="w-full h-auto max-h-[460px] object-cover object-center block"
            loading="lazy"
            decoding="async"
            width="1280"
            height="460"
            onError={(e) => {
              e.currentTarget.src = '/banners/anuga-2026.jpg';
            }}
          />
        </div>

        {/* ================= 2. CONTENT DIV (BOTTOM) ================= */}
        <div className="relative bg-[linear-gradient(to_top,#dc2626_0%,#f87171_15%,#f87171_20%,transparent_100%)] px-4 sm:px-6 pt-2 pb-3">
          {/* Soft upward blend overlay into the bottom of the image */}
          <div className="absolute -top-8 inset-x-0 h-8 bg-gradient-to-t from-white to-transparent pointer-events-none" />

          {/* Top Pill Badge & Nav Arrows */}
          <div className="relative z-10 flex items-center justify-between mb-3">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white border border-red-500 shadow-sm text-xs sm:text-sm font-semibold text-red-600 cursor-default">
              <span>Watch our latest showcases &amp; industry events</span>
              <ChevronRight className="w-4 h-4 text-red-600 stroke-[2.5]" />
            </div>

            {/* Scroll navigation arrows for desktop */}
            <div className="hidden sm:flex items-center gap-2">
              <button
                onClick={() => scroll('left')}
                className="w-7 h-7 rounded-full bg-white/20 hover:bg-white text-white hover:text-red-600 flex items-center justify-center transition-all"
                aria-label="Previous videos"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => scroll('right')}
                className="w-7 h-7 rounded-full bg-white/20 hover:bg-white text-white hover:text-red-600 flex items-center justify-center transition-all"
                aria-label="Next videos"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Horizontal Scrollable Video Cards Track */}
          <div
            ref={scrollRef}
            className="relative z-10 flex gap-4 overflow-x-auto no-scrollbar scrollbar-hide pb-1 pt-1 scroll-smooth"
          >
            {showcaseVideos.map((video) => (
              <div
                key={video.id}
                className="min-w-[270px] max-w-[270px] bg-white rounded-xl p-3 border border-white/60 shadow-md hover:shadow-xl transition-all duration-300 flex-shrink-0"
              >
                <div className="flex gap-3 items-center">
                  {/* Thumbnail with Circular Play Button */}
                  <a
                    href={video.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative cursor-pointer flex-shrink-0 group block"
                    aria-label={`Play ${video.title} on YouTube`}
                  >
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      loading="lazy"
                      decoding="async"
                      width="72"
                      height="72"
                      className="w-[72px] h-[72px] rounded-lg object-cover border border-gray-100 group-hover:scale-105 transition-transform"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-black/70 group-hover:bg-red-600 w-8 h-8 flex items-center justify-center text-white border border-white/40 rounded-full transition-colors shadow-sm">
                        <Play className="w-3.5 h-3.5 fill-white text-white ml-0.5" />
                      </div>
                    </div>
                  </a>

                  {/* Video Details */}
                  <div className="flex-1 min-w-0">
                    <h4 className="text-[13px] font-bold text-gray-900 line-clamp-1 leading-snug">
                      {video.title}
                    </h4>
                    <p className="text-[11.5px] text-gray-600 line-clamp-2 mt-0.5 leading-tight">
                      {video.description}
                    </p>
                    <a
                      href={video.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 mt-2 text-xs font-semibold text-red-600 hover:text-red-700 transition-colors"
                    >
                      <YouTubeIcon className="w-4 h-4 text-red-600" />
                      <span>YouTube</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
