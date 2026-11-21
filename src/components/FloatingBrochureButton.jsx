import React from 'react';
import { useLottie } from 'lottie-react';
import downloadAnimation from '../assets/download.json';

function DownloadLottieIcon() {
  const options = {
    animationData: downloadAnimation,
    loop: true,
    autoplay: true,
  };

  const { View } = useLottie(options, {
    width: '100%',
    height: '100%',
  });

  return View;
}

export default function FloatingBrochureButton({ onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label="Download ICON Packtech brochure"
      className="z-[100] bottom-11 fixed font-Poppins right-[30px] bs-mix-red text-white h-[48px] px-4 sm:px-5 rounded-[12px] shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-2.5 sm:gap-3 cursor-pointer hover:scale-105 active:scale-95 group border border-white/20 select-none"
    >
      <div className="w-[30px] h-[30px] bg-white rounded-full flex items-center justify-center p-0.5 shadow-sm flex-shrink-0 group-hover:rotate-6 transition-transform duration-300">
        <DownloadLottieIcon />
      </div>
      <span className="text-[14px] sm:text-[15px] font-[600] tracking-wide whitespace-nowrap text-white">
        Download Brochure
      </span>
    </button>
  );
}

