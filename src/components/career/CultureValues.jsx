import React from 'react';
import { Heart, Lightbulb, Star, Users, Leaf } from 'lucide-react';

const valuesData = [
  {
    id: 1,
    title: "Innovation First",
    description: "We embrace new technologies and encourage creative problem-solving in everything we do.",
    icon: Lightbulb,
    theme: "red",
  },
  {
    id: 2,
    title: "Quality Excellence",
    description: "Our commitment to superior quality drives every decision and process in our organization.",
    icon: Star,
    theme: "gray",
  },
  {
    id: 3,
    title: "Team Collaboration",
    description: "We believe in the power of teamwork and foster an environment of mutual respect and support.",
    icon: Users,
    theme: "red",
  },
  {
    id: 4,
    title: "Sustainable Future",
    description: "Environmental responsibility and sustainable practices are at the core of our operations.",
    icon: Leaf,
    theme: "gray",
  },
];

export default function CultureValues() {
  return (
    <section className="py-14 sm:py-20 px-4 font-Poppins bg-white">
      <div className="max-w-6xl mx-auto">
        
        {/* ================= HEADER ================= */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-[linear-gradient(38.46deg,red_0.15%,rgb(97,3,3)_98.48%)] rounded-xl flex items-center justify-center shadow-md">
              <Heart className="w-6 h-6 text-white fill-white/20" />
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
              Our{' '}
           
                Culture &amp; Values
           
            </h2>
          </div>
          <p className="text-sm  text-gray-600">
            The principles that guide everything we do
          </p>
        </div>

        {/* ================= CONTENT 2-COL GRID ================= */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 items-stretch">
          
          {/* Left Column: 4 Values Cards */}
          <div className="w-full lg:w-1/2 flex flex-col gap-3.5 order-2 lg:order-1 justify-between">
            {valuesData.map((val) => {
              const IconComp = val.icon;
              const isRed = val.theme === "red";

              return (
                <div
                  key={val.id}
                  className={`p-3 rounded-xl border-[1.3px] shadow-sm transition-all duration-300 group hover:shadow-md hover:-translate-y-0.5 ${
                    isRed
                      ? 'border-red-200 bg-red-50/70 hover:border-red-300'
                      : 'border-gray-200 bg-gray-50/80 hover:border-gray-300'
                  }`}
                >
                  <div className="flex items-start gap-3.5">
                    <div
                      className={`w-10 h-10 flex-shrink-0 rounded-[10px] border-[1.3px] flex items-center justify-center group-hover:scale-110 transition-transform duration-300 ${
                        isRed
                          ? 'bg-white border-red-200 text-red-600 shadow-sm'
                          : 'bg-white border-gray-200 text-gray-600 shadow-sm'
                      }`}
                    >
                      <IconComp className="w-4 h-4" />
                    </div>

                    <div>
                      <h3 className="text-[17px] font-semibold text-gray-900 mb-1">
                        {val.title}
                      </h3>
                      <p className="
                      text-gray-700 text-[13px] font-[400] leading-[17px]
                      ">
                        {val.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Factory Worker / Team Image */}
          <div className="w-full lg:w-1/2 overflow-hidden rounded-2xl shadow-lg border border-gray-100 order-1 lg:order-2 flex min-h-[320px]">
            <img
              src="/assets/factoryworker-B_Wtn_51.jpg"
              alt="ICON factory and engineering team"
              width="600"
              height="400"
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover object-center rounded-2xl hover:scale-105 transition-transform duration-700"
              onError={(e) => {
                e.currentTarget.src = '/career/career.webp';
              }}
            />
          </div>

        </div>

      </div>
    </section>
  );
}

