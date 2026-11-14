import React, { useState, useEffect } from 'react';

const slides = [
  {
    question: "Your Sweets get Spoiled ?",
    description: "In-Line Tray Sealer ready to pack your delicate sweets by sealing the freshness.",
    image: "/home/thermoforming/first.png",
    alt: "In-Line Tray Sealer Machine - ICON Packtech",
  },
  {
    question: "Need Continuous Vacuum Packaging ?",
    description: "Advanced Continuous Vacuum Packing Machines, Preserving Freshness with Efficiency and Reliability.",
    image: "/home/thermoforming/second.png",
    alt: "Continuous Vacuum Packaging Machine - ICON Packtech",
  },
];

const ManufacturerSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(null);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  // Clear previous slide after transition completes (750ms)
  useEffect(() => {
    if (prevIndex !== null) {
      const timer = setTimeout(() => {
        setPrevIndex(null);
      }, 750);
      return () => clearTimeout(timer);
    }
  }, [prevIndex]);

  useEffect(() => {
    const fullText = slides[currentIndex].question;
    let timer;

    if (!isDeleting && displayedText === fullText) {
      // Pause at full text
      timer = setTimeout(() => setIsDeleting(true), 2400);
    } else if (isDeleting && displayedText === "") {
      // Switch to next slide after deleting: animate previous out to left, new in from right
      setIsDeleting(false);
      setPrevIndex(currentIndex);
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    } else {
      // Typing or deleting speed
      const speed = isDeleting ? 35 : 75;
      timer = setTimeout(() => {
        setDisplayedText((prev) =>
          isDeleting
            ? fullText.substring(0, prev.length - 1)
            : fullText.substring(0, prev.length + 1)
        );
      }, speed);
    }

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, currentIndex]);

  return (
    <section className="w-full bg-white py-12 md:py-10 px-4 sm:px-8 lg:px-16 font-sans overflow-hidden">
      <div className="max-w-[1300px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-16">
        
        {/* ================= LEFT: CONTENT & TYPEWRITER ================= */}
        <div className="w-full lg:w-[52%] flex flex-col justify-center">
          {/* Main Heading (Solid Black) */}
          <h2 className="text-3xl tracking-tight font-sans-serif text-[34px] md:text-[45px] font-bold leading-[40px] md:leading-[45px] text-[#111827]">
            Thermoforming Machine <br />
            Manufacturer in India
          </h2>

          {/* Subtitle / Company Description */}
          <p className="mt-4 text-[15px] md:text-[16px] leading-[24px] md:leading-[26px] text-gray-700 w-full">
            ICON Packtech is a leading packaging machine manufacturer in Rajkot, Gujarat, India,
            specialising in thermoforming and vacuum packaging machines.
          </p>

          {/* Dynamic Typewriter Question */}
          <div className="mt-8 flex items-center min-h-[36px]">
            <span className="text-[22px] sm:text-[25px] font-[400] text-gray-900 tracking-tight">
              {displayedText}
            </span>
            <span className="text-[25px] font-light text-gray-900 animate-pulse ml-0.5 select-none">
              |
            </span>
          </div>

          {/* Dynamic Description linked to current slide */}
          <p className="mt-2 text-[15px] md:text-[16px] leading-[24px] md:leading-[26px] text-gray-700 max-w-lg transition-opacity duration-500">
            {slides[currentIndex].description}
          </p>
        </div>

        {/* ================= RIGHT: AUTO-CHANGING MACHINE IMAGE ================= */}
        <div className="relative w-full lg:w-[45%] flex items-center justify-center min-h-[340px] sm:min-h-[400px]">
          
          {/* Solid Red Circle Accent behind bottom of machine */}
          <div className="absolute w-[240px] h-[240px] sm:w-[280px] sm:h-[280px] md:w-[310px] md:h-[310px] rounded-full bg-[#c80000] bottom-1 sm:bottom-4 z-0" />

          {/* Smooth Auto-Changing Machine Images with Right-to-Left Slide Animation */}
          <div className="relative z-10 w-full max-w-[380px] sm:max-w-[450px] md:max-w-[480px] h-[300px] sm:h-[360px] md:h-[390px] flex items-center justify-center">
            {/* Outgoing Machine Image (slides out to left) */}
            {prevIndex !== null && (
              <img
                key={`prev-${prevIndex}`}
                src={slides[prevIndex].image}
                alt={slides[prevIndex].alt}
                width="480"
                height="390"
                className="absolute inset-0 w-full h-full object-contain pointer-events-none z-0 animate-slide-out-left "
                loading="lazy"
                decoding="async"
              />
            )}

            {/* Active Machine Image (slides in from right into place) */}
            <img
              key={`curr-${currentIndex}`}
              src={slides[currentIndex].image}
              alt={slides[currentIndex].alt}
              width="480"
              height="390"
              className={`absolute inset-0 w-full h-full object-contain pointer-events-none z-10 ${
                prevIndex !== null ? "animate-slide-in-right" : ""
              }`}
              loading="lazy"
              decoding="async"
            />
          </div>

          {/* Preload slides for smooth instant transitions */}
          <div className="hidden" aria-hidden="true">
            {slides.map((s) => (
              <img key={s.image} src={s.image} alt={s.alt} loading="lazy" decoding="async" />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

export default ManufacturerSection;
