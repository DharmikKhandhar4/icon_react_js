import React from 'react';
import { Lottie } from 'lottie-react';
import downloadWhiteAnimation from '../assets/download-white.json';

export default function FloatingBrochureButton({ onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label="Download ICON Packtech brochure"
      className="z-[100] bottom-11 fixed right-[30px] font-Poppins bg-[#00a624] hover:bg-[#00911f] text-white rounded-full p-[5px] shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer select-none group"
    >
      <div className="border-[2.5px] border-white rounded-full pl-1.5 pr-6 py-1.5 flex items-center justify-center gap-3.5">
        {/* Left Circular Section with Animated Arrow - converges right towards center */}
        <div className="w-[42px] h-[42px] rounded-full flex items-center justify-center flex-shrink-0 bg-transparent overflow-hidden animate-icon-to-center group-hover:translate-x-2 transition-transform duration-300 ease-out">
          <Lottie
            src={downloadWhiteAnimation}
            loop={true}
            autoplay={true}
            style={{ width: '100%', height: '100%' }}
            className="flex items-center justify-center"
          />
        </div>

        {/* Button Label - converges left towards center */}
        <span className="text-[15px] sm:text-[16px] font-extrabold tracking-wider text-white whitespace-nowrap animate-text-to-center group-hover:-translate-x-2 transition-transform duration-300 ease-out">
          DOWNLOAD BROCHURE
        </span>
      </div>
    </button>
  );
}

