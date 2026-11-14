import React from 'react';
import { foodCategories } from '../data/productsData';
import { ChevronRight } from 'lucide-react';

export default function PackagingAsPerProduct({ onNavigate }) {
  const handleProductClick = (slug) => {
    if (onNavigate) {
      onNavigate(`/packaging-as-per-product/${slug}`);
    }
  };

  return (
    <main className="font-Poppins mx-auto flex min-h-[500px] w-[92%] flex-col pt-[50px] md:pt-[50px] pb-16 lg:pb-0 md:w-[85%] lg:w-[80%] 2xl:w-[1200px]">
      {/* 1. Page Title */}
      <div className="mb-10 text-center">
        <h1 className="text-[#b71b1b] text-[20px] sm:text-[32px] md:text-[34px] font-bold leading-tight tracking-tight">
          Packaging as per Product
        </h1>
      </div>

      {/* 2. FOOD Category Section */}
      <section className="mb-24">
        {/* Category Header Badge + Gradient Line */}
        <div className="mb-8 flex items-center">
          <div className="flex items-center gap-2 rounded-full border border-[#c42e2e] px-5 py-1 bg-white shadow-sm hover:shadow-md transition-shadow">
            <span className="font-semibold tracking-wider text-[#c42e2e] text-md">
              FOOD
            </span>
            <ChevronRight className="w-6 h-6  stroke-2 text-[#c42e2e]" />
          </div>
          <div className="ml-6 h-px flex-1 bg-gradient-to-r from-red-600 to-transparent" />
        </div>

        {/* 3. Grid of Products */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 sm:gap-5 justify-items-center">
          {foodCategories.map((item) => (
            <div
              key={item.id}
              className="group relative cursor-pointer w-full flex justify-center"
              onClick={() => handleProductClick(item.slug)}
            >
              <button
                type="button"
                aria-label={`View ${item.name} products`}
                className="relative flex h-[150px] w-full max-w-[170px] flex-col items-center justify-center rounded-[14px] border border-red-100 bg-white p-4 text-center shadow-md transition-all duration-300 group-hover:shadow-xl group-hover:border-red-300 group-hover:-translate-y-1 focus:outline-none cursor-pointer"
              >
                {/* Top-Right Fevicon Corner Badge */}
                <div
                  className="pointer-events-none absolute right-0 top-0 h-8 w-8 rounded-bl-[14px] rounded-tr-[14px] flex items-center justify-center"
                  aria-hidden="true"
                >
                  <img
                    src="/fevicon.png"
                    alt="ICON Packtech badge"
                    width="20"
                    height="20"
                    loading="lazy"
                    className="w-5 pt-1.5 opacity-70 group-hover:opacity-100 transition-opacity"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                </div>

                {/* Product Icon */}
                <div className="relative z-10 flex flex-col items-center">
                  <div className="mb-3.5 flex h-16 w-16 items-center justify-center overflow-hidden rounded-[10px] bg-red-50 transition-all duration-300 group-hover:rotate-12 group-hover:bg-red-500 group-hover:shadow-md">
                    <img
                      src={item.image}
                      alt={item.name}
                      width="70"
                      height="64"
                      loading="lazy"
                      decoding="async"
                      className="h-14 w-[64px] object-contain transition duration-300 group-hover:brightness-0 group-hover:invert"
                      onError={(e) => {
                        if (item.fallback && e.currentTarget.src !== item.fallback) {
                          e.currentTarget.src = item.fallback;
                        }
                      }}
                    />
                  </div>

                  {/* Product Name */}
                  <h3 className="flex-shrink-0 text-center text-xs font-semibold leading-tight text-gray-800 transition-colors duration-300 group-hover:text-red-700 line-clamp-2 min-h-[30px] flex items-center justify-center">
                    {item.name}
                  </h3>
                </div>

                {/* Subtle Hover Gradient Glow */}
                <div className="pointer-events-none absolute inset-0 rounded-[14px] bg-gradient-to-br from-red-500/0 to-red-600/0 transition-all duration-300 group-hover:from-red-500/10 group-hover:to-red-600/20" />
              </button>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

