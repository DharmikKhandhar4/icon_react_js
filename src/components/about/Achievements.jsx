import React, { useState, useEffect, useRef } from 'react';

const achievements = [
  {
    id: 1,
    target: 275000,
    hasCommas: true,
    suffix: "+",
    fallbackValue: "275,000+",
    label: "Stock Items",
  },
  {
    id: 2,
    target: 5,
    hasCommas: false,
    suffix: " Cr+",
    fallbackValue: "5 Cr+",
    label: "Parts in Inventory",
  },
  {
    id: 3,
    target: 95,
    hasCommas: false,
    suffix: "%",
    fallbackValue: "95%",
    label: "Availability Rate",
  },
];

function AnimatedNumber({ target, suffix = '', hasCommas = false, isVisible = false, fallbackValue }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    let startTime = null;
    let animationFrameId;
    const duration = 2000; // 2 seconds count-up duration

    // Smooth cubic deceleration curve for natural slowing down
    const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);

    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = easeOutCubic(progress);

      setCount(Math.round(eased * target));

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(step);
      }
    };

    animationFrameId = requestAnimationFrame(step);

    return () => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, [target, isVisible]);

  if (!isVisible && count === 0) {
    return <span>0{suffix}</span>;
  }

  const formatted = hasCommas ? count.toLocaleString('en-US') : count;
  return <span>{formatted}{suffix}</span>;
}

export default function Achievements() {
  const sectionRef = useRef(null);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') {
      setHasStarted(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasStarted(true);
          observer.disconnect(); // Animate once on first view
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-12 px-4 font-Poppins">
      <div className="w-[92%] sm:w-[85%] 2xl:w-[1300px] mx-auto">
        {/* Section Header with Brand Gradient Text */}
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-[600] tracking-tight inline-block bg-[linear-gradient(38.46deg,red_0.15%,rgb(97,3,3)_98.48%)] bg-clip-text text-transparent">
            Our Achievements
          </h2>
        </div>

        {/* Cards Track with Brand Gradient Backgrounds */}
        <div className="flex flex-wrap justify-center gap-6 sm:gap-8">
          {achievements.map((item) => (
            <div key={item.id} className="group">
              <div className="bg-[linear-gradient(38.46deg,red_0.15%,rgb(97,3,3)_98.48%)] min-w-[240px] sm:min-w-[270px] flex items-center justify-center h-[110px] rounded-2xl p-2  border border-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                <div className="text-center">
                  <div className="text-3xl sm:text-4xl md:text-[42px] font-[600] text-white mb-1 font-Poppins tracking-tight">
                    <AnimatedNumber 
                      target={item.target}
                      suffix={item.suffix}
                      hasCommas={item.hasCommas}
                      isVisible={hasStarted}
                      fallbackValue={item.fallbackValue}
                    />
                  </div>
                  <div className="text-sm sm:text-[16px] text-white/90 font-medium">
                    {item.label}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

