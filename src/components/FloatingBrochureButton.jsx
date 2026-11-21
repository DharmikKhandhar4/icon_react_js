import React from 'react';
import { Lottie } from 'lottie-react';
import downloadWhiteAnimation from '../assets/download-white.json';

export default function FloatingBrochureButton({ onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label="Download ICON Packtech brochure"
      className="z-[100] bottom-11 fixed right-[30px] font-Poppins bg-[#a60000] hover:bg-[#910000] text-white rounded-full p-[3px] shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer select-none group"
    >
      <div className="border-[2.5px] border-white rounded-full pl-1.5 pr-6 py-1.5 flex items-center justify-center gap-2 overflow-hidden">
        {/* Left Circular Section with Animated Arrow - starts at center and moves left to its place */}
        <div className="w-[26px] h-[26px] rounded-full flex items-center justify-center flex-shrink-0 bg-transparent overflow-hidden animate-arrow-from-center">
          <Lottie
            src={downloadWhiteAnimation}
            loop={true}
            autoplay={true}
            style={{ width: '100%', height: '100%' }}
            className="flex items-center justify-center"
          />
        </div>

        {/* Button Label - starts from first character and reveals rightward */}
        <span className="text-[15px] sm:text-[14px] font-bold tracking-wider text-white whitespace-nowrap animate-text-from-center inline-block">
          DOWNLOAD BROCHURE
        </span>
      </div>
    </button>
  );
}

