import React, { useState, useEffect } from "react";
import {
  foodCategories,
  getCategoryBySlug,
  getMachinesByCategory,
} from "../data/productsData";
import { ArrowRight } from "lucide-react";

export default function CategoryMachines({ categorySlug, onNavigate }) {
  const [selectedSlug, setSelectedSlug] = useState(
    categorySlug || "paneer-cheese",
  );

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
    <main className="font-Poppins mx-auto flex min-h-[600px] w-[90%] flex-col gap-5 pb-10 pt-5 md:pt-8 md:w-[80%] 2xl:w-[1400px]">
      {/* ================================================================
          PAGE TITLE
      ================================================================= */}
      <div className="max-w-4xl pb-5 pt-2.5">
        <div className="space-y-2">
          <h1 className="bg-gradient-to-r bg-clip-text text-2xl font-semibold text-icon md:text-3xl">
            Machine To Pack {currentCategory?.name || "Paneer & Cheese"}
          </h1>

          <div className="hidden h-0.5 w-16 rounded-full bs-mix-red md11:flex" />
        </div>
      </div>

      {/* ================================================================
          MOBILE / TABLET CATEGORY SELECTOR (VISIBLE BELOW md11)
      ================================================================= */}
      <div className="md11:hidden flex w-full gap-2 overflow-x-auto pb-2 no-scrollbar scrollbar-none">
        {foodCategories.map((cat) => {
          const isSelected = cat.slug === selectedSlug;
          return (
            <button
              type="button"
              key={cat.id}
              onClick={() => handleSelectCategory(cat.slug)}
              className={`!flex !flex-row items-center gap-2 shrink-0 rounded-[8px] border border-[#c42e2e] px-3 py-1.5 text-[13px] font-medium transition-all duration-200 cursor-pointer whitespace-nowrap ${
                isSelected
                  ? "bs-mix-red text-white shadow-sm"
                  : "bg-white text-[#c42e2e] hover:bg-red-50/70"
              }`}
            >
              <span className="whitespace-nowrap">{cat.name}</span>
              <ArrowRight
                className={`w-3.5 h-3.5 shrink-0 ${isSelected ? "text-white" : "text-[#c42e2e]"}`}
              />
            </button>
          );
        })}
      </div>

      {/* ================================================================
          CONTENT: SIDEBAR + PRODUCT GRID
      ================================================================= */}
      <div className="flex gap-5 pt-1">
        {/* ================================================================
            RELATED CATEGORIES SIDEBAR (STICKY ON md11+)
        ================================================================= */}
        <aside className="sticky top-[120px] hidden h-fit w-[200px] flex-shrink-0 gap-5 rounded-[10px] border border-[#f22] p-2.5 shadow-icon md11:flex">
          <div className="flex w-full flex-col gap-2.5 pr-1 no-scrollbar scrollbar-none">
            {foodCategories.map((cat) => {
              const isSelected = cat.slug === selectedSlug;
              return (
                <button
                  type="button"
                  key={cat.id}
                  onClick={() => handleSelectCategory(cat.slug)}
                  className={`!flex !flex-row items-center justify-between flex-nowrap w-full gap-2 rounded-[8px] border px-3 py-2 text-left text-[13.5px] font-medium transition-all duration-200 cursor-pointer whitespace-nowrap ${
                    isSelected
                      ? "bs-mix-red border-[#c42e2e] text-white shadow-sm"
                      : "bg-white border-[#e02020] text-[#e02020] hover:bg-red-50/70"
                  }`}
                >
                  <span className="whitespace-nowrap truncate">{cat.name}</span>

                  <ArrowRight
                    className={`w-4 h-4 shrink-0 transition-transform ${
                      isSelected
                        ? "text-white translate-x-0.5"
                        : "text-[#7a0000]"
                    }`}
                  />
                </button>
              );
            })}
          </div>
        </aside>

        {/* ================================================================
            MACHINES GRID
        ================================================================= */}
        <div className="flex-1 w-full min-w-0">
          {machines.length === 0 ? (
            <div className="flex min-h-[300px] w-full items-center justify-center text-center">
              <div>
                <p className="font-medium text-gray-700">
                  No packaging machines found for this category.
                </p>
              </div>
            </div>
          ) : (
            <section className="flex w-full gap-x-[15px] gap-y-5 overflow-x-auto pt-1 md:grid md:grid-cols-3 md77:grid-cols-3 lg77:grid-cols-3 2xl:grid-cols-4 md:overflow-x-visible pb-4 md:pb-0">
              {machines.map((machine, index) => (
                <article
                  key={machine.id || `${machine.title}-${index}`}
                  onClick={() => handleViewDetails(machine.slug)}
                  className="group relative h-fit w-[280px] md:w-auto flex-shrink-0 cursor-pointer"
                >
                  <div className="relative h-[370px] w-[280px] md:w-full overflow-hidden rounded-[15px] border border-[#a3a3a334] bg-white shadow-icon transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-xl">
                    {/* PRODUCT IMAGE */}
                    <div className="relative h-[240px] w-full overflow-hidden rounded-[15px] bg-white shadow-md">
                      <div className="absolute inset-0 flex items-center justify-center p-3">
                        <img
                          src={machine.image}
                          alt={machine.title || "Packaging machine"}
                          width="280"
                          height="240"
                          loading={index < 6 ? "eager" : "lazy"}
                          decoding="async"
                          className="block h-full max-h-[220px] w-full max-w-full object-contain object-center transition-transform duration-300 group-hover:scale-105"
                          onError={(e) => {
                            e.currentTarget.src =
                              "/home/thermoforming/first.png";
                          }}
                        />
                      </div>

                      {/* DECORATION */}
                      <div className="absolute bottom-0 right-0 h-16 w-16 translate-x-8 translate-y-8 rotate-45 transform bs-mix-red transition-all duration-300 " />
                    </div>

                    {/* PRODUCT CONTENT */}
                    <div className="px-5 py-2.5">
                      <h2 className="mb-1 line-clamp-2 text-[14px] font-semibold text-gray-800 transition-colors duration-300 ">
                        {machine.title || "Packaging Machine"}
                      </h2>

                      {/* VIEW DETAILS BUTTON */}
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleViewDetails(machine.slug);
                        }}
                        className="group/button absolute bottom-5 left-5 flex w-[calc(100%-40px)] items-center justify-center rounded-lg border bg-gray-100 px-4 py-2 text-[14px] font-medium text-gray-700 transition-all duration-300 hover:border-red-600 hover:bg-red-50 hover:text-red-600 cursor-pointer"
                      >
                        <span>VIEW DETAILS</span>
                        <svg
                          className="ml-2 h-5 w-5 transition-transform duration-300 group-hover/button:translate-x-1"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M14 5l7 7m0 0-7 7m7-7H3"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </section>
          )}
        </div>
      </div>
    </main>
  );
}
