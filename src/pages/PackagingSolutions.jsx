import React from 'react';
import { packagingSolutionsList } from '../data/packagingSolutionsData';
import SolutionMachines from './SolutionMachines';

export default function PackagingSolutions({ solutionSlug, onNavigate }) {
  // If a solution slug is present in URL (e.g. /packaging-solutions/counting), render the machine listing with sidebar
  if (solutionSlug) {
    return <SolutionMachines solutionSlug={solutionSlug} onNavigate={onNavigate} />;
  }

  const handleSolutionClick = (slug) => {
    if (onNavigate) {
      onNavigate(`/packaging-solutions/${slug}`);
    }
  };

  return (
    <main className="
            font-Poppins
            mx-auto
            flex
            min-h-[500px]
            w-[92%]
            flex-col
            pt-[35px]
            md11:w-[75%]
            2xl:w-[1200px]
    
    ">
      {/* Page Title */}
      <div className="mb-5 text-center">
        <h1 className="mb-10 text-[20px] sm:text-3xl md:text-[34px] font-bold leading-[42px]">
          <span className="text-icon">
            Packaging Solutions
          </span>
        </h1>
      </div>

      {/* Grid of 29 Solutions */}
      <section className="mb-24 mt-0">
        <div className="
        
                  mx-auto
                  grid
                  w-[90%]
                  grid-cols-2
                   md11:gap-2
                   lg:gap-5
                   
                  sm:grid-cols-3
                  md:grid-cols-4
                  md11:mx-0
                  md11:w-full
                  lg:grid-cols-5
                  xl:grid-cols-6

                ">
          {packagingSolutionsList.map((item) => (
            <div
              key={item.id}
              className="group relative cursor-pointer w-full flex justify-center"
              onClick={() => handleSolutionClick(item.slug)}
            >
              <button
                type="button"
                aria-label={`View ${item.name} products`}
                className="relative flex h-[150px] w-full items-center justify-center rounded-[14px] border border-red-100 bg-white p-4 text-left shadow-md transition-shadow duration-300 group-hover:shadow-2xl md11:w-[170px]"
              >
                {/* Top-Right Fevicon Corner Badge */}
                <div
                  className="pointer-events-none absolute right-0 top-0 h-8 w-8 rounded-bl-[14px] rounded-tr-[14px] flex items-center justify-center"
                  aria-hidden="true"
                >
                  <img
                    src="/fevicon.png"
                    alt=""
                    width="20"
                    height="20"
                    loading="lazy"
                    decoding="async"
                    className="w-5 pt-2.5"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                </div>

                {/* Solution Icon */}
                <div className="relative z-10 flex flex-col items-center">
                  <div className="mb-4 flex h-16 w-16 items-center justify-center overflow-hidden rounded-[10px] bg-red-50 transition-all duration-300 group-hover:rotate-12 group-hover:bg-red-500">
                    <img
                      src={item.image}
                      alt={item.name}
                      width="70"
                      height="64"
                      loading="lazy"
                      decoding="async"
                      className="h-16 w-[70px] object-contain transition duration-300 group-hover:brightness-0 group-hover:invert"
                      onError={(e) => {
                        if (item.fallback && e.currentTarget.src !== item.fallback) {
                          e.currentTarget.src = item.fallback;
                        }
                      }}
                    />
                  </div>

                  {/* Solution Name */}
                  <h3 className="flex-shrink-0 text-center text-xs font-semibold leading-tight text-gray-800 transition-colors duration-300 group-hover:text-red-700">
                    {item.name}
                  </h3>
                </div>

                {/* Gradient Hover Glow */}
                <div className="pointer-events-none absolute inset-0 rounded-[14px] bg-gradient-to-br from-red-500/0 to-red-600/0 transition-all duration-300 group-hover:from-red-500/10 group-hover:to-red-600/20" />
              </button>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
