import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';

const faqs = [
  {
    id: 1,
    question: "What types of vacuum machines do you manufacture?",
    answer:
      "We manufacture a wide range of high-performance packaging systems including Inline Tray Sealers (MAP), Continuous Tray Sealers, Linear Cup Filling & Sealing Machines, and Thermoforming Vacuum Packaging Machines tailored for diverse production capacities.",
    image: "/home/whychoose/imageone.webp",
  },
  {
    id: 2,
    question: "Do you provide after-sales service and support?",
    answer:
      "Yes, we provide rapid, dependable after-sales service and ongoing technical support across India. Our experienced engineers offer installation assistance, preventive maintenance, and authentic spare parts to ensure continuous uptime.",
    image: "/home/whychoose/imagetwo.webp",
  },
  {
    id: 3,
    question: "Can machines be customized based on specific requirements?",
    answer:
      "Absolutely. With our strong in-house R&D and manufacturing facility in Rajkot, Gujarat, we customize machinery specifications, tray mould dimensions, vacuum levels, and automation levels according to your product needs.",
    image: "/home/whychoose/imagethree.webp",
  },
  {
    id: 4,
    question: "What industries do you serve?",
    answer:
      "We cater to food and non-food industries including Dairy (paneer, sweets, cheese), Fresh Produce, Frozen Foods, Ready-to-Eat products, Meat & Seafood, Pharmaceuticals, and Medical Packaging.",
    image: "/home/whychoose/imagefour.avif",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="flex font-Poppins relative pt-[60px] pb-[30px] 2xl:w-[1300px] w-[90%] md11:w-[80%] mx-auto">
      <div className="flex flex-col gap-[20px] w-[100%]">
        
        {/* Header */}
        <div>
          <h3 className="text-icon border font-[600] px-[10px] rounded-full py-[2px] border-[#f00] w-fit uppercase tracking-widest text-[14px]">
            FAQ's
          </h3>
          <h2 className="flex font-[600] text-[#0f0f0f] pt-[10px] text-[35px] md:text-[43px]">
            Why Icon
          </h2>
        </div>

        {/* Content Row */}
        <div className="flex md11:flex-row flex-col gap-[30px] md77:mt-[10px] md11:mt-0 justify-between items-center w-[100%]">
          
          {/* FAQ Accordion List (Left Column) */}
          <div className="flex md:order-1 order-2 md77:order-2 md11:w-[60%] w-[100%] flex-col gap-[13px]">
            {faqs.map((item, index) => (
              <div
                key={item.id}
                className="flex flex-col shadow-sm border border-[#f00] p-[10px] md:px-[15px] md:py-[4px] rounded-[5px] rounded-tl-[18px] custom-shadow1"
              >
                {/* Accordion Header */}
                <div
                  className="flex w-[100%] justify-between items-center cursor-pointer"
                  onClick={() => toggleAccordion(index)}
                >
                  <div className="flex items-center gap-[20px]">
                    <p className="flex font-[400] text-[#0e0e0ec8] text-[15px] md:text-[18px] py-[5px]">
                      {item.question}
                    </p>
                  </div>
                  <ChevronRight
                    className={`text-center items-center text-[13px] md:text-[16px] w-4 h-4 md:w-5 md:h-5 flex transition-transform duration-300 flex-shrink-0 ${
                      openIndex === index ? "rotate-90" : "rotate-0"
                    }`}
                  />
                </div>

                {/* Accordion Answer */}
                <div
                  className={`overflow-hidden text-[13px] text-[#333] font-[400] transition-all duration-400 ease-in-out ${
                    openIndex === index ? "max-h-[300px] opacity-100 pb-2" : "max-h-0 opacity-0 pb-0"
                  }`}
                >
                  <p className="pt-[5px] leading-relaxed">{item.answer}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: Logo (when none open) or Machine Image (when an item is open) */}
          <div className="relative md11:w-[35%] md77:w-[100%] md11:order-2 md77:order-1 order-1 flex justify-center items-center min-h-[220px]">
            {openIndex === null ? (
              <img
                key="logo"
                src="/fevicon.png"
                alt="Default Logo"
                className="w-[220px] object-contain transition-all duration-300"
                width="220"
                height="220"
              />
            ) : (
              <img
                key={faqs[openIndex]?.id}
                src={faqs[openIndex]?.image}
                alt={faqs[openIndex]?.question}
                className="w-[430px] h-[260px] object-cover rounded-lg  transition-all duration-300"
                width="430"
                height="260"
              />
            )}
          </div>

        </div>

      </div>
    </div>
  );
}
