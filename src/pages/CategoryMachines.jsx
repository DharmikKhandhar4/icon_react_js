import React, { useState, useEffect } from 'react';
import { foodCategories, getCategoryBySlug, getMachinesByCategory } from '../data/productsData';
import { ArrowRight } from 'lucide-react';

export default function CategoryMachines({ categorySlug, onNavigate }) {
  const [selectedSlug, setSelectedSlug] = useState(categorySlug || 'paneer-cheese');

  // Synchronize slug if props change
  useEffect(() => {
    if (categorySlug) {
      setSelectedSlug(categorySlug);
    }
  }, [categorySlug]);

  const currentCategory = getCategoryBySlug(selectedSlug);
  const machines = getMachinesByCategory(selectedSlug);

  const handleSelectCategory = (slug) => {
    setSelectedSlug(slug);
    if (onNavigate) {
      onNavigate(`/packaging-as-per-product/${slug}`);
    }
  };

  const handleViewDetails = (machineSlug) => {
    if (onNavigate) {
      onNavigate(`/product-details/${machineSlug}`);
    }
  };

  return (
    <main className="font-Poppins mx-auto w-[94%] md:w-[92%] 2xl:w-[1380px] pt-8 md:pt-12 pb-24">
      {/* 1. Dynamic Heading with Red Underline (Matching Screenshot) */}
      <div className="mb-8">
        <h1 className="text-2xl sm:text-3xl md:text-[32px] md:font-bold font-semibold tracking-tight bg-[linear-gradient(38.46deg,red_0.15%,rgb(97,3,3)_98.48%)] bg-clip-text text-transparent">
          Machine To Pack {currentCategory?.name || 'Paneer & Cheese'}
        </h1>
        <div className="w-16 h-[2.5px] bg-[#c42e2e] mt-2 rounded-full" />
      </div>

      {/* 2. Main Content Layout: Left Sidebar + Right Machine Grid */}
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-start 
        ">
        {/* LEFT SIDEBAR: Category Selector with Enclosing Red Container Border */}
        <aside className="w-full lg:w-[210px] shrink-0 hidden md:block">
          <div className="rounded-[16px] border border-red-500/80 p-2 sm:p-2.5 flex flex-row lg:flex-col gap-2 bg-white shadow-sm overflow-x-auto lg:overflow-visible scrollbar-none">
            {foodCategories.map((cat) => {
              const isActive = cat.slug === selectedSlug;
              return (
                <button
                  key={cat.id}
                  onClick={() => handleSelectCategory(cat.slug)}
                  className={`flex items-center justify-between px-3 py-2.5 rounded-lg text-[13px] font-medium transition-all duration-200 whitespace-nowrap lg:whitespace-normal text-left shrink-0 lg:shrink w-auto lg:w-full cursor-pointer ${
                    isActive
                      ? 'bg-[linear-gradient(38.46deg,red_0.15%,rgb(97,3,3)_98.48%)] text-white shadow-sm'
                      : 'bg-white border border-[#c42e2e] hover:bg-red-50/60'
                  }`}
                >
                  <span
                    className={`truncate ${
                      isActive
                        ? 'text-white'
                        : 'bg-[linear-gradient(38.46deg,red_0.15%,rgb(97,3,3)_98.48%)] bg-clip-text text-transparent'
                    }`}
                  >
                    {cat.name}
                  </span>
                  
                  <ArrowRight 
                    className={`w-4 h-4 shrink-0 transition-transform ${
                      isActive ? 'text-white translate-x-0.5' : 'text-[#c42e2e]'
                    }`}
                  />
                </button>
              );
            })}
          </div>
        </aside>

        {/* RIGHT CONTENT: Machines Grid (Matching Screenshot) */}
        <div className="flex-1 w-full">
          {machines.length === 0 ? (
            <div className="text-center py-16 bg-gray-50 rounded-2xl border border-dashed border-gray-200">
              <p className="text-gray-500 text-base">
                No specific machines found for this category yet.
              </p>
            </div>
          ) : (
            <div className="flex overflow-x-auto sm:grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5 pb-4 pt-1 sm:pb-0 sm:pt-0 no-scrollbar scrollbar-hide snap-x snap-mandatory -mx-3 px-3 sm:mx-0 sm:px-0">
              {machines.map((machine) => (
                <div
                  key={machine.id}
                  className="group relative bg-white rounded-2xl border border-gray-200/90 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between overflow-hidden p-3.5 sm:p-4 shrink-0 w-[260px] sm:w-auto snap-center sm:snap-align-none"
                >
                  <div>
                    {/* Machine Image Box with Red Corner Accent */}
                    <div className="relative w-full h-[190px] bg-white flex items-center justify-center overflow-hidden">
                      <img
                        src={machine.image}
                        alt={machine.title}
                        width="260"
                        height="190"
                        className="max-h-[160px] w-full object-contain transition-transform duration-500 ease-out group-hover:scale-105"
                        loading="lazy"
                        decoding="async"
                        onError={(e) => {
                          e.currentTarget.src = '/home/thermoforming/first.png';
                        }}
                      />

                      {/* Solid Red Corner Triangle Accent on Bottom-Right */}
                      <div
                        className="pointer-events-none absolute bottom-0 right-0 w-0 h-0 border-b-[40px] border-b-[#c42e2e] border-l-[40px] border-l-transparent transition-transform duration-300 group-hover:scale-105"
                        aria-hidden="true"
                      />
                    </div>

                    {/* Machine Title */}
                    <div className="pt-3 pb-3">
                      <h3 className="text-[13px] sm:text-[14px] font-semibold text-gray-900 line-clamp-2 leading-snug group-hover:text-[#c42e2e] transition-colors min-h-[42px]">
                        {machine.title}
                      </h3>
                    </div>
                  </div>

                  {/* Card Footer: Light Gray VIEW DETAILS Button */}
                  <div className="pt-1">
                    <button
                      type="button"
                      onClick={() => handleViewDetails(machine.slug)}
                      className="w-full py-2.5 px-4 rounded-lg bg-[#ebedf0] hover:bg-gray-200 text-gray-700 text-[11px] sm:text-[12px] font-semibold tracking-wider uppercase transition-colors flex items-center justify-center gap-2 group/btn cursor-pointer"
                    >
                      <span>VIEW DETAILS</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
