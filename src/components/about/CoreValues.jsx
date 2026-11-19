import React from 'react';
import { CheckCircle2, Zap, Users } from 'lucide-react';

const coreValues = [
  {
    id: 1,
    title: "Quality First",
    description: "From sourcing raw ingredients to assembling industrial machines, we prioritize quality and safety above all.",
    icon: CheckCircle2,
  },
  {
    id: 2,
    title: "Innovation",
    description: "Our in-house R&D continuously evolves to bring smarter packaging machines and healthier food solutions to market.",
    icon: Zap,
  },
  {
    id: 3,
    title: "Trust & Relationships",
    description: "We value long-term partnerships—with distributors, industrial clients, and every household that chooses us.",
    icon: Users,
    colSpan: "sm:col-span-2 lg:col-span-1",
  },
];

export default function CoreValues() {
  return (
    <section className="mt-8 mb-8 mx-auto pt-8 2xl:w-[1300px] lg:w-[80%] px-5 md:px-8 lg:px-5 font-Poppins">
      {/* ================= HEADER ================= */}
      <div className="text-center mb-8">
        <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-[600] text-gray-900 leading-tight tracking-tight">
          Our Core{' '}
          <span className="bg-[linear-gradient(38.46deg,red_0.15%,rgb(97,3,3)_98.48%)] bg-clip-text text-transparent">
            Values
          </span>
        </h2>
      </div>

      {/* ================= 3 CARDS GRID ================= */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-7">
        {coreValues.map((val) => {
          const IconComp = val.icon;
          return (
            <div
              key={val.id}
              className={`bg-white p-6 sm:p-7 rounded-2xl  border border-gray-100 transition-all hover:shadow-lg
                 duration-300  group flex flex-col justify-between shadow-md ${
                val.colSpan || ''
              }`}
            >
              <div>
                {/* Icon Container */}
                <div className="w-12 h-12 rounded-full bg-[#ff7d5638]   text-red-600 flex items-center justify-center mb-5  transition-all duration-300 shadow-sm">
                  <IconComp className="w-6 h-6 stroke-[2]" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-[600] text-gray-900 mb-2.5  transition-colors">
                  {val.title}
                </h3>

                {/* Description */}
                <p className="text-[14px] md:text-[15px] text-gray-600 leading-relaxed">
                  {val.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

