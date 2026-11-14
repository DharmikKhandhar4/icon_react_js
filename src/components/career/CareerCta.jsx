import React from 'react';
import { Building2, Users, Zap, ArrowRight } from 'lucide-react';

export default function CareerCta({ onNavigate }) {
  return (
    <section className="py-16 sm:py-20 px-4 bg-slate-900 text-white relative overflow-hidden font-Poppins">
      {/* Background Animated Floating Watermark SVGs */}
      <div className="absolute inset-0 overflow-hidden opacity-10 pointer-events-none">
        <Building2 className="absolute top-10 left-10 w-28 h-28 sm:w-36 sm:h-36 text-white animate-pulse" />
        <Users className="absolute bottom-10 right-10 w-24 h-24 sm:w-28 sm:h-28 text-white animate-bounce" />
        <Zap className="absolute top-1/2 left-1/4 w-16 h-16 sm:w-20 sm:h-20 text-white animate-pulse" />
      </div>

      <div className="relative max-w-4xl mx-auto text-center z-10">
        <div className="mb-4">
          <h2 className="text-3xl sm:text-4xl md:text-4xl font-bold tracking-tight">
            Ready to Start Your{' '}
         
              Journey?
         
          </h2>
        </div>

        <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
          Join Icon Industry and become part of a team that's shaping the future of packaging automation and industrial machinery.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={() => onNavigate && onNavigate('/contact-us')}
            className="inline-flex items-center gap-3 bg-red-600 text-white px-8 py-2 rounded-lg   font-bold text-base sm:text-lg hover:bg-red-700 transition-all duration-200 shadow-xl hover:shadow-red-600/30 hover:scale-105 cursor-pointer"
          >
            <span>Contact Now</span>
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </section>
  );
}

