import React from 'react';
import { 
  Star, 
  TrendingUp, 
  Heart, 
  Award, 
  Clock, 
  Lightbulb, 
  Globe 
} from 'lucide-react';

const benefits = [
  {
    id: 1,
    title: "Competitive Compensation",
    description: "Industry-leading salary packages with performance-based incentives and annual reviews.",
    icon: TrendingUp,
    gradient: "from-red-500 to-rose-600",
  },
  {
    id: 2,
    title: "Health & Wellness",
    description: "Comprehensive medical insurance, wellness programs, and mental health support.",
    icon: Heart,
    gradient: "from-red-500 to-orange-500",
  },
  {
    id: 3,
    title: "Professional Growth",
    description: "Continuous learning opportunities, certifications, and career advancement programs.",
    icon: Award,
    gradient: "from-red-600 to-red-400",
  },
  {
    id: 4,
    title: "Work-Life Balance",
    description: "Flexible working hours, remote work options, and generous vacation policies.",
    icon: Clock,
    gradient: "from-red-500 to-rose-500",
  },
  {
    id: 5,
    title: "Innovation Culture",
    description: "Access to cutting-edge technology and opportunities to work on groundbreaking projects.",
    icon: Lightbulb,
    gradient: "from-red-600 to-pink-600",
  },
  {
    id: 6,
    title: "Global Exposure",
    description: "International assignments and collaboration with teams across different countries.",
    icon: Globe,
    gradient: "from-red-500 to-red-700",
  },
];

export default function WhyChooseCareers() {
  return (
    <section className="py-12 md:py-10 mt-4 px-4 bg-gray-50/80 font-Poppins">
      <div className="max-w-7xl mx-auto">
        
        {/* ================= HEADER ================= */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-[linear-gradient(38.46deg,red_0.15%,rgb(97,3,3)_98.48%)] rounded-xl flex items-center justify-center shadow-md">
              <Star className="w-6 h-6 text-white fill-white/20" />
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 ">
              Why Choose{' '}
           
                Icon Industry
             
              ?
            </h2>
          </div>
          <p className="text-base sm:text-xl text-gray-600 max-w-xl mx-auto">
            Exceptional benefits and opportunities await you
          </p>
        </div>

        {/* ================= BENEFITS CARDS GRID ================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((item, index) => {
            const IconComp = item.icon;
            return (
              <div
                key={item.id}
                className={`bg-white border border-gray-200/80 p-6 sm:p-7 rounded-2xl shadow-sm hover:shadow-xl  transition-all duration-300 group  flex flex-col justify-between ${
                  index === 4 ? 'lg:col-start-2' : ''
                }`}
              >
                <div>
                  {/* Icon Box */}
                  <div className="relative mb-5">
                    <div className="w-12 h-12 bg-[linear-gradient(38.46deg,red_0.15%,rgb(97,3,3)_98.48%)] rounded-xl flex items-center justify-center text-white shadow-md transform group-hover:scale-110 transition-transform duration-300">
                      <IconComp className="w-6 h-6 text-white" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2.5  transition-colors">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className=" text-[16px] text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

