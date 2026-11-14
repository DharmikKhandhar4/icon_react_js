import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';

const faqs = [
  {
    question: "What types of vacuum machines do you manufacture?",
    answer:
      "We manufacture a wide range of high-performance packaging systems including Inline Tray Sealers (MAP), Continuous Tray Sealers, Linear Cup Filling & Sealing Machines, and Thermoforming Vacuum Packaging Machines tailored for diverse production capacities.",
  },
  {
    question: "Do you provide after-sales service and support?",
    answer:
      "Yes, we provide rapid, dependable after-sales service and ongoing technical support across India. Our experienced engineers offer installation assistance, preventive maintenance, and authentic spare parts to ensure continuous uptime.",
  },
  {
    question: "Can machines be customized based on specific requirements?",
    answer:
      "Absolutely. With our strong in-house R&D and manufacturing facility in Rajkot, Gujarat, we customize machinery specifications, tray mould dimensions, vacuum levels, and automation levels according to your product needs.",
  },
  {
    question: "What industries do you serve?",
    answer:
      "We cater to food and non-food industries including Dairy (paneer, sweets, cheese), Fresh Produce, Frozen Foods, Ready-to-Eat products, Meat & Seafood, Pharmaceuticals, and Medical Packaging.",
  },
];

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState(0); // First item open by default

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-white py-14 sm:py-14 px-4 sm:px-6 lg:px-12 font-sans">
      <div className="max-w-[1300px] mx-auto flex flex-col">
        
        {/* ================= HEADER ================= */}
        <div className="mb-0">
          <div className="mb-3">
            <span className="inline-block px-[10px] py-[2px] rounded-full border border-red-600 text-xs sm:text-[14px] font-[600] tracking-widest uppercase bg-[linear-gradient(38.46deg,red_0.15%,rgb(97,3,3)_98.48%)] bg-clip-text text-transparent">
              FAQ's
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-[43px] font-[600] text-gray-900 tracking-tight pt-[10px]">
            Why{' '}
         
              Icon
           
          </h2>
        </div>

        {/* ================= CONTENT: ACCORDION & LOGO ================= */}
        <div className="flex flex-col-reverse lg:flex-row gap-10 lg:gap-16 items-center justify-between">
          
          {/* Accordion Questions Column */}
          <div className="w-full lg:w-[62%] flex flex-col gap-4">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={index}
                  className={`

                    flex flex-col gap-[5px] shadow-sm border border-[#f00] p-[10px] md:px-[15px] md:py-[4px] rounded-[5px]  rounded-tl-[18px] custom-shadow1
                    ${
                    isOpen
                      ? "shadow-[0_4px_20px_rgba(239,68,68,0.08)] border-red-600"
                      : "hover:border-red-600"
                  }`}
                >
                  {/* Question Header */}
                  <button
                    type="button"
                    onClick={() => toggleFaq(index)}
                    className="w-full flex items-center justify-between p-0 sm:py-0 sm:px-0 text-left cursor-pointer select-none group
                    
                    "
                  >
                    <span className="text-[15px] sm:text-[17px] font-[400] text-[#292929c8] group-hover:text-red-600 transition-colors pr-4">
                      {faq.question}
                    </span>
                    <span
                      className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-transform duration-300 ${
                        isOpen
                          ? "rotate-90 bg-red-50 text-red-600"
                          : "text-red-500 group-hover:translate-x-0.5"
                      }`}
                    >
                      <ChevronRight className="w-5 h-5 stroke-[2.2]" />
                    </span>
                  </button>

                  {/* Expandable Answer */}
                  <div
                    className={`transition-all duration-300 ease-in-out px-4 sm:px-0 overflow-hidden ${
                      isOpen ? "max-h-48 pb-2 opacity-100" : "max-h-0 pb-0 opacity-0"
                    }`}
                  >
                    <p className="text-[#1e1e1ec8] text-sm sm:text-[13px]  pt-1 border-t border-red-100">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Logo Display Column */}
          <div className="relative w-full lg:w-[35%] flex justify-center items-center py-6 lg:py-0">
            {/* Ambient Background Glow */}
            <div className="absolute w-56 h-56 rounded-full bg-red-500/10 blur-3xl pointer-events-none" />

            <div className="relative z-10 flex flex-col items-center justify-center md:p-8 rounded-3xl ">
              <img
                src="/fevicon.png"
                alt="Icon Industries Logo"
                className="w-[180px] sm:w-[220px] h-auto object-contain transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
                decoding="async"
                width="220"
                height="220"
              />
              {/* <span className="mt-4 text-xs font-semibold uppercase tracking-widest text-neutral-500">
                Pioneering Packaging Since 1995
              </span> */}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default FaqSection;

