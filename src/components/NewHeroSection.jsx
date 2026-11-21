import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const banners = [
  {
    id: 1,
    image: '/herobanner/bannerone.jpeg',
    alt: 'ICON Packtech Advanced Machinery - ANUGA FoodTec 2026',
  },
  {
    id: 2,
    image: '/herobanner/bannertwo.jpeg',
    alt: 'ICON Packtech Packaging Machinery & Automation Solutions',
  },
];

export default function NewHeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const touchStartX = useRef(null);

  // Auto-advance banner every 4.5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % banners.length);
    }, 4500);

    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % banners.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + banners.length) % banners.length);
  };

  // Mobile touch swipe support
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;

    if (Math.abs(diff) > 40) {
      if (diff > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    }
    touchStartX.current = null;
  };

  return (
    <div className="relative pt-[78px] sm:pt-[82px] md:pt-[88px] lg:pt-[145px] mx-auto flex flex-col w-full 2xl:w-[1400px] mb-6 sm:mb-8 md:mb-10 lg:pb-6">
      {/* Primary SEO H1 Heading for Home Page */}
      <h1 className="sr-only">
        ICON Packtech - Packaging &amp; Thermoforming Machinery Manufacturer in India
      </h1>

      <div className="flex flex-col w-full px-2.5 sm:px-0 md:px-0 md11:px-0">
        <section
          className="group relative w-full md11:w-[84%] 2xl:w-full mx-auto rounded-xl sm:rounded-2xl md:rounded-[14px] overflow-hidden  transition-shadow"
          aria-roledescription="carousel"
          aria-label="Hero Banner Carousel"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Horizontal Sliding Carousel Track */}
          <div
            className="flex w-full transition-transform duration-[800ms] ease-[cubic-bezier(0.22,0.61,0.36,1)]"
            style={{
              transform: `translate3d(-${currentSlide * 100}%, 0px, 0px)`,
              willChange: 'transform',
            }}
          >
            {banners.map((slide, index) => (
              <div
                key={slide.id}
                className="w-full shrink-0 overflow-hidden 
                h-[200px] sm:aspect-[24/10] md:aspect-[28/10.4]  lg:h-[540px]
                      xl:h-[545px]"
              >
                <img
                  src={slide.image}
                  alt={slide.alt}
                  width="2800"
                  height="1040"
                  className="block w-full h-full object-cover"
                  draggable="false"
                  loading={index === 0 ? 'eager' : 'lazy'}
                  fetchPriority={index === 0 ? 'high' : 'low'}
                  decoding={index === 0 ? 'sync' : 'async'}
                />
              </div>
            ))}
          </div>

         

          {/* Indicator Dots */}
          <div className="absolute z-20 bottom-2.5 sm:bottom-3 md:bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-1.5 sm:gap-2 bg backdrop-blur-xs px-2.5 py-1 rounded-full">
            {banners.map((_, dotIdx) => (
              <button
                key={dotIdx}
                type="button"
                onClick={() => goToSlide(dotIdx)}
                aria-label={`Go to banner ${dotIdx + 1}`}
                className={`h-2 sm:h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                  currentSlide === dotIdx
                    ? 'bg-red-600 w-5 sm:w-6'
                    : 'bg-red-200 w-2 sm:w-2.5 hover:bg-white'
                }`}
              />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
