import React from 'react';
import { Sparkles, Award, Users, Globe, Target } from 'lucide-react';
import CurrentOpenings from '../components/career/CurrentOpenings';
import WhyChooseCareers from '../components/career/WhyChooseCareers';
import CultureValues from '../components/career/CultureValues';
import ApplicationProcess from '../components/career/ApplicationProcess';
import CareerCta from '../components/career/CareerCta';

const careerStats = [
  {
    id: 1,
    value: "25+",
    label: "Years of Excellence",
    icon: Award,
  },
  {
    id: 2,
    value: "140+",
    label: "Team Members",
    icon: Users,
  },
  {
    id: 3,
    value: "50+",
    label: "Countries Served",
    icon: Globe,
  },
  {
    id: 4,
    value: "1000+",
    label: "Projects Completed",
    icon: Target,
  },
];

export default function Careers({ onNavigate }) {
  return (
    <div className="min-h-screen bg-slate-50/60  font-Poppins">
      {/* ================= 1. HERO SECTION ================= */}
      <div className="pt-6 px-4">
        <section className="relative bg-gradient-to-br from-red-600 via-red-700 to-red-800 text-white w-[94%] sm:w-[85%] lg:w-[75%] 2xl:w-[1200px] rounded-[20px] mx-auto py-6 sm:py-8 px-4 sm:px-8 overflow-hidden  border border-red-500/30">
          {/* Subtle Ambient Background Accents */}
          <div className="absolute inset-0 bg-black/10 pointer-events-none" />
          <div className="absolute top-0 right-0 w-80 h-60 bg-red-500 rounded-full opacity-20 transform translate-x-32 -translate-y-32 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-red-400 rounded-full opacity-20 transform -translate-x-16 translate-y-16 pointer-events-none" />

          <div className="relative max-w-4xl mx-auto text-center z-10">
            {/* Pill Badge */}
            <div className=" items-center gap-1.5  backdrop-blur-md border border-white/20  text-xs sm:text-[13px]   text-white
            inline-block bg-red-500/30 px-4 py-2 rounded-full shadow-2xl text-[13px] font-medium mb-3
            ">
              {/* <Sparkles className="w-3.5 h-3.5 text-red-200" /> */}
              <span>Careers at Icon • Build with Innovation</span>
            </div>

            {/* Main Title */}
            <h1 className="text-2xl sm:text-3xl md:text-[30px] font-[600] tracking-tight mb-3 leading-tight ">
              Build the Future of{' '}
              <span className="block text-red-200 font-[600]">Packaging &amp; Automation</span>
            </h1>

            {/* Subtitle / Description */}
            <p className="
            
            text-[13px] md:text-[12px] text-red-100 mb-1 max-w-3xl mx-auto leading-[20px]
            ">
              At Icon Industries, we don't just manufacture machines — we engineer precision, performance, and reliability. Join a team that is redefining industrial packaging solutions across India with innovation, technology, and expertise.
            </p>
          </div>
        </section>
      </div>

      {/* ================= 2. STATS / MILESTONES GRID ================= */}
      <section className="py-12 md:py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 lg:gap-8 py-[10px]">
            {careerStats.map((item) => {
              const IconComp = item.icon;
              return (
                <div
                  key={item.id}
                  className="group relative rounded-xl md:rounded-2xl p-[1px] bg-gradient-to-br from-red-500/30 to-transparent"
                >
                  <div className="relative h-full overflow-hidden rounded-xl md:rounded-2xl bg-white shadow-md p-4 md:p-5 lg:p-6 transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-xl">
                    {/* Watermark Icon */}
                    <div className="absolute top-2 right-2 md:top-3 md:right-3 opacity-10 group-hover:opacity-20 transition-opacity pointer-events-none">
                      <IconComp className="w-10 h-10 md:w-10 md:h-10 lg:w-14 lg:h-14 text-red-600" />
                    </div>

                    {/* Stat Value */}
                    <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                      {item.value}
                    </div>

                    {/* Stat Label */}
                    <div className="text-[12px] md:text-[13px] lg:text-[14px] text-gray-600 font-medium leading-5">
                      {item.label}
                    </div>

                    {/* Animated Red Line on Hover */}
                    <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-red-600 transition-all duration-300 group-hover:w-full" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= 3. CURRENT OPENINGS SECTION ================= */}
      <CurrentOpenings />

      {/* ================= 4. WHY CHOOSE CAREERS SECTION ================= */}
      <WhyChooseCareers />

      {/* ================= 5. CULTURE & VALUES SECTION ================= */}
      <CultureValues />

      {/* ================= 6. APPLICATION PROCESS SECTION ================= */}
      <ApplicationProcess />

      {/* ================= 7. CAREER CALL TO ACTION ================= */}
      <CareerCta onNavigate={onNavigate} />
    </div>
  );
}
