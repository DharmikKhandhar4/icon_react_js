import { useState, useEffect, useRef } from 'react';

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const touchStartX = useRef(null);

  const banners = [
    {
      id: 1,
      image: '/herobanner/bannerone.jpeg',
      fallbackImage: '/banners/anuga-2026.jpg',
      alt: 'ANUGA FOODTEC INDIA 2026 - Where innovation meets packaging excellence - ICON Packtech',
    },
    {
      id: 2,
      image: '/herobanner/bannertwo.jpeg',
      fallbackImage: '/banners/anuga-2026.jpg',
      alt: 'ICON Packtech Advanced Machinery Exhibition & Automation Showcase',
    },
  ];

  // Auto-scroll carousel every 4.5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % banners.length);
    }, 4500);

    return () => clearInterval(timer);
  }, [banners.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  // Touch swipe support for mobile
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;

    if (Math.abs(diff) > 40) {
      if (diff > 0) {
        setCurrentSlide((prev) => (prev + 1) % banners.length);
      } else {
        setCurrentSlide((prev) => (prev - 1 + banners.length) % banners.length);
      }
    }
    touchStartX.current = null;
  };

  return (
    <section 
      className="w-full max-w-[1380px]  mt-14 mx-auto px-4 sm:px-8 lg:px-0 pt-3 pb-6"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      aria-label="Hero Banner Slider"
    >
      {/* Banner Container - Clean with no border, shadow, or radius */}
      <div className="relative w-full overflow-hidden select-none">
        
        {/* Horizontal Sliding Carousel Track */}
        <div 
          className="flex w-full transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {banners.map((slide, index) => (
            <div 
              key={slide.id} 
              className="w-full flex-shrink-0 relative   min-h-[200px] sm:min-h-[320px] md:min-h-[480px] 2xl:h-[540px] "
            >
              <img
                src={slide.image}
                alt={slide.alt}
                width="1380"
                height="540"
                className="w-full h-full object-cover object-center rounded-2xl"
                loading={index === 0 ? 'eager' : 'lazy'}
                fetchPriority={index === 0 ? 'high' : 'low'}
                decoding={index === 0 ? 'sync' : 'async'}
                onError={(e) => {
                  if (e.currentTarget.src !== slide.fallbackImage) {
                    e.currentTarget.src = slide.fallbackImage;
                  }
                }}
              />
            </div>
          ))}
        </div>

        {/* Indicator Dots (Centered at bottom) */}
        <div className="absolute bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2 z-10 flex items-center gap-2 bg-slate-900/30 backdrop-blur-sm px-3 py-1.5 rounded-full">
          {banners.map((_, dotIdx) => (
            <button
              key={dotIdx}
              onClick={() => goToSlide(dotIdx)}
              className={`transition-all duration-300 rounded-full focus:outline-none ${
                currentSlide === dotIdx 
                  ? 'w-6 h-2 bg-brand-500 shadow-sm' 
                  : 'w-2 h-2 bg-white/70 hover:bg-white'
              }`}
              aria-label={`Go to slide ${dotIdx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
