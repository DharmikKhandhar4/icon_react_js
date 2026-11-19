import React from 'react';

const BrandPromiseBanner = () => {
  return (
    <section className="w-full bg-white py-10 lg:pb-14 lg:pt-6 lg:py-0 px-4 sm:px-6 lg:px-12 font-sans overflow-hidden">
      <div className="max-w-[1300px] mx-auto">
        
        {/* Banner Card Container */}
        <div className="relative w-full rounded-[22px] sm:rounded-[26px] border border-gray-100 bg-white shadow-[0_6px_30px_rgba(0,0,0,0.06)] overflow-hidden min-h-[145px] sm:h-[160px] flex items-center justify-between 2xl:w-[1330px] md:max-w-[1200px] lg:max-w-[1300px] ">
          
          {/* Left Red Diagonal Gradient Area */}
          <div className="absolute inset-y-0 left-0 w-full sm:w-[54%] md:w-[48%] lg:w-[46%] bg-[linear-gradient(90deg,#ea0000_0%,#9c0000_65%,#550000_100%)] sm:[clip-path:polygon(0_0,calc(100%-160px)_0,100%_100%,0_100%)] flex items-center pl-6 sm:pl-5 pr-8 sm:pr-16 z-10">
            <p className=" leading-[22px] 
             text-[#fff]   text-[16px] mb-6 max-w-md
            ">
              At ICON, we promise to <strong className="font-semibold">INNOVATE</strong>,{' '}
              <strong className="font-semibold">INTEGRATE</strong> and{' '}
              <strong className="font-semibold">ELEVATE</strong> your product with our smart packaging machines.
            </p>
          </div>

          {/* Right Logo Display */}
          <div className="hidden sm:flex ml-auto pr-8 sm:pr-4 lg:pr-10 z-0 items-center">
            <img
              src="/logo.svg"
              alt="ICON Logo"
              width="210"
              height="50"
              className="w-[160px] sm:w-[190px] md:w-[210px] h-auto object-contain drop-shadow-sm"
              loading="lazy"
              decoding="async"
            />
          </div>

        </div>

      </div>
    </section>
  );
};

export default BrandPromiseBanner;

