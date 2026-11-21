import React from 'react';
import { Lottie } from 'lottie-react';
import downloadAnimation from '../assets/download.json';

const LOTTIE_URL = 'https://lottie.host/4a924de7-c0ff-4751-8dc4-54e64dbd1559/Ja9aDvHCci.json';

export default function FloatingBrochureButton({ onClick }) {
  const animationSource = downloadAnimation || LOTTIE_URL;

  return (
    <button
      type="button"
      onClick={onClick}
      aria-label="Download ICON Packtech brochure"
      className="z-[100] bottom-11 fixed font-Poppins right-[30px] bs-mix-red text-white h-[48px] px-4 sm:px-5 rounded-[12px] shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-2.5 sm:gap-3 cursor-pointer hover:scale-105 active:scale-95 group border border-white/20 select-none"
    >
      <div className="w-[32px] h-[32px] bg-white rounded-full flex items-center justify-center p-0.5 shadow-sm flex-shrink-0 group-hover:rotate-6 transition-transform duration-300 overflow-hidden">
        <Lottie
          src={animationSource}
          loop={true}
          autoplay={true}
          style={{ width: 26, height: 26 }}
          className="flex items-center justify-center"
        />
      </div>
      <span className="text-[14px] sm:text-[15px] font-[600] tracking-wide whitespace-nowrap text-white">
        Download Brochure
      </span>
    </button>
  );
}

