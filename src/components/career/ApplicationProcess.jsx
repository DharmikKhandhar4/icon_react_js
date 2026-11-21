import React from 'react';
import { Target, Send, FileText, Phone, Users, CheckCircle2 } from 'lucide-react';

const steps = [
  {
    step: "01",
    title: "Submit Application",
    description: "Send us your resume and cover letter through our online portal or email.",
    icon: Send,
  },
  {
    step: "02",
    title: "Initial Screening",
    description: "Our HR team will review your application and contact you within 48 hours.",
    icon: FileText,
  },
  {
    step: "03",
    title: "Technical Interview",
    description: "Meet with our technical team to discuss your engineering skills and experience.",
    icon: Phone,
  },
  {
    step: "04",
    title: "Final Interview",
    description: "Final discussion with department heads and HR for cultural fit assessment.",
    icon: Users,
  },
  {
    step: "05",
    title: "Welcome Aboard",
    description: "Join our team and begin your journey with comprehensive onboarding and guidance.",
    icon: CheckCircle2,
  },
];

export default function ApplicationProcess() {
  return (
    <section className="py-14 sm:py-20 px-4 bg-gradient-to-r from-red-50  to-gray-50 font-Poppins">
      <div className="max-w-6xl mx-auto">
        
        {/* ================= HEADER ================= */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-3 mb-3">
            <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-700 rounded-xl flex items-center justify-center shadow-md">
              <Target className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 ">
              Application{' '}
              
                Process
        
            </h2>
          </div>
          <p className="text-sm sm:text-base md:text-xl text-gray-600 max-w-xl mx-auto">
            Your journey to joining our team in 5 simple steps
          </p>
        </div>

        {/* ================= 5 STEPS GRID WITH TRACK LINE ================= */}
        <div className="relative">
          {/* Connecting line on desktop */}
          <div className="absolute top-10 left-12 right-12 h-0.5 bg-gradient-to-r from-red-200 via-red-400 to-red-200 hidden lg:block pointer-events-none" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-7">
            {steps.map((item) => {
              const IconComp = item.icon;
              return (
                <div key={item.step} className="relative">
                  <div className="bg-white p-5 rounded-2xl  hover:shadow-md min-h-[300px] border border-gray-100  transition-all duration-300 group  flex flex-col justify-between items-center text-center">
                    
                    {/* Icon & Number Badge */}
                    <div className="relative mb-5 pt-1">
                      <div className="
                      
                      
                      w-20 h-20 bg-gradient-to-br from-red-500 to-red-700 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto relative z-10 group-hover:scale-110 transition-transform duration-300
                      ">
                        <IconComp className="w-8 h-8 text-white" />
                      </div>
                      <div className="absolute -top-1 -right-12 w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center text-sm font-bold shadow-md  z-20">
                        {item.step}
                      </div>
                    </div>

                    {/* Step Title & Description */}
                    <div className="flex-1 flex flex-col justify-center">
                      <h3 className="text-[17px] font-bold text-gray-900 mb-2.5  transition-colors leading-snug">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}

