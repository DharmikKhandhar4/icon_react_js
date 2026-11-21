import React from 'react';
import { motion } from 'framer-motion';
import { Lottie } from 'lottie-react';
import downloadWhiteAnimation from '../assets/download-white.json';

export default function FloatingBrochureButton({ onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label="Download ICON Packtech brochure"
      className="z-[100] bottom-11 fixed right-[30px] font-Poppins bg-gradient-to-r from-[#d90429] via-[#b80000] to-[#780000] hover:from-[#c20000] hover:to-[#680000] text-white rounded-full p-[3px] shadow-[0_10px_25px_-5px_rgba(180,0,0,0.5)] hover:scale-105 active:scale-95 transition-transform duration-300 cursor-pointer select-none group"
    >
      <div className="relative border-[1.5px] border-white/85 rounded-full pl-2 pr-6 py-1.5 flex items-center justify-between gap-2.5 h-[44px] overflow-hidden">
        {/* Left Circular Section with Animated Arrow - starts at center and glides left to its place */}
        <motion.div
          initial={{ x: 80, opacity: 0.8 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
          className="w-[28px] h-[28px] rounded-full flex items-center justify-center flex-shrink-0 bg-transparent overflow-hidden z-10"
        >
          <Lottie
            src={downloadWhiteAnimation}
            loop={true}
            autoplay={true}
            style={{ width: '100%', height: '100%' }}
            className="flex items-center justify-center"
          />
        </motion.div>

        {/* Button Label - starts from center and glides right to its place without any text clipping */}
        <motion.span
          initial={{ x: -28, opacity: 0.9 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
          className="text-[13.5px] sm:text-[14px] font-bold tracking-wider text-white whitespace-nowrap inline-block z-10 pl-1"
        >
          DOWNLOAD BROCHURE
        </motion.span>
      </div>
    </button>
  );
}


