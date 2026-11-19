import React, { useState, useEffect, useMemo } from 'react';

const slides = [
  {
    title: "Your Sweets get Spoiled ?",
    description: "In-Line Tray Sealer ready to pack your delicate sweets by sealing the freshness.",
    image: "/home/thermoforming/first.png",
    alt: "In-Line Tray Sealer Machine - ICON Packtech",
  },
  {
    title: "Need Continuous Vacuum Packaging ?",
    description: "Advanced Continuous Vacuum Packing Machines, Preserving Freshness with Efficiency and Reliability.",
    image: "/home/thermoforming/second.png",
    alt: "Continuous Vacuum Packaging Machine - ICON Packtech",
  },
];

export default function ManufacturerSection() {
  const [curr, setCurr] = useState(0);
  const [idx, setIdx] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [showDesc, setShowDesc] = useState(false);

  const currentSlide = slides[curr] || slides[0];
  const currentTitle = currentSlide?.title || "";

  const displayedText = useMemo(() => {
    return currentTitle.slice(0, idx);
  }, [currentTitle, idx]);

  useEffect(() => {
    let timer;

    if (!isDeleting && idx < currentTitle.length) {
      timer = window.setTimeout(() => {
        setIdx((prev) => prev + 1);
      }, 100);
    } else if (!isDeleting && idx === currentTitle.length) {
      if (!showDesc) {
        setShowDesc(true);
      }
      timer = window.setTimeout(() => {
        setIsDeleting(true);
      }, 2500);
    } else if (isDeleting && idx > 0) {
      timer = window.setTimeout(() => {
        setIdx((prev) => Math.max(prev - 1, 0));
      }, 70);
    } else if (isDeleting && idx === 0) {
      setShowDesc(false);
      setIsDeleting(false);
      setCurr((prev) => (prev + 1) % slides.length);
    }

    return () => {
      window.clearTimeout(timer);
    };
  }, [currentTitle, idx, isDeleting, showDesc]);

  return (
    <section className="font-Poppins mx-auto flex w-[90%] flex-col pt-10 md:w-[80%] md:pt-[90px] md11:flex-row 2xl:w-[1300px]">
      {/* Left content */}
      <div className="flex min-h-[300px] w-full flex-col gap-2 pt-10 md11:min-h-[380px] md11:w-[53%]">
        <h2 className="font-Montserrat text-[34px] md:text-[45px] font-bold leading-[40px] md:leading-[46px] text-gray-900">
          Thermoforming Machine Manufacturer in India
        </h2>

        <p className="mt-3 text-[15px] md:text-[16px] leading-[24px] md:leading-[25px] text-gray-700 font-Poppins">
          ICON Packtech is a leading packaging machine manufacturer in Rajkot, Gujarat, India, specialising in thermoforming and vacuum packaging machines.
        </p>

        <div className="mt-5 flex items-center overflow-hidden whitespace-nowrap font-Poppins text-[25px]">
          <span>{displayedText}</span>
          <span className="blinking-cursor12">|</span>
        </div>

        <p
          className={`mt-0 max-w-[90%] text-[16px] leading-[25px] text-gray-700 md77:max-w-full transition-all duration-300 ${
            showDesc
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 -translate-y-5 pointer-events-none'
          }`}
        >
          {currentSlide.description}
        </p>
      </div>

      {/* Right image */}
      <div className="relative flex h-fit w-full items-center justify-center md11:w-[40%]">
        {/* Background circle */}
        <div className="absolute h-[260px] w-[260px] rounded-full bs-mix-red md:h-[300px] md:w-[300px] md11:mt-10" />

        <div className="relative z-10 flex items-center justify-center">
          <img
            key={currentSlide.image}
            src={currentSlide.image}
            alt={currentSlide.alt || currentSlide.title || "ICON Industries machine"}
            width="400"
            height="400"
            loading={curr === 0 ? "eager" : "lazy"}
            fetchPriority={curr === 0 ? "high" : "low"}
            decoding="async"
            className="relative top-[-20px] z-10 flex h-[340px] w-[350px] rounded-[20px] object-contain md:h-[400px] md:w-[400px] md11:top-[-40px] md11:object-cover transition-all duration-500 ease-out animate-slide-in-right"
          />
        </div>
      </div>
    </section>
  );
}
