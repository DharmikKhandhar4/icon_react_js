import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';

const categories = ["Food", "Non-Food", "Pharma"];

const products = [
  {
    id: 1,
    title: "Inline Tray Sealer (MAP)",
    category: "Food",
    image: "https://storage.server.grafizen.in/uploads/img_6878939f4af644.42421642.png",
  },
  {
    id: 2,
    title: "Continuous Tray Sealer (MAP)",
    category: "Food",
    image: "https://storage.server.grafizen.in/uploads/img_68789303de16b0.49630548.png",
  },
  {
    id: 3,
    title: "Linear Cup Filling Sealing Machine",
    category: "Food",
    image: "https://storage.server.grafizen.in/uploads/img_68788d369eb4b5.46405539.png",
  },
  {
    id: 4,
    title: "Thermoforming Vacuum Packing Machine (ITF - 400)",
    category: "Food",
    image: "https://storage.server.grafizen.in/uploads/img_689d8b614ffab6.16941026.png",
  },
];

const ProductsSection = () => {
  const [activeCategory, setActiveCategory] = useState("Food");

  return (
    <section className="w-full bg-white py-14 sm:py-14 px-4 sm:px-6 lg:px-12 font-sans">
      <div className="max-w-[1300px] mx-auto flex flex-col">
        
        {/* ================= HEADER ================= */}
        <div className="text-center max-w-2xl mx-auto md:mb-10 mb-4">
          <h2 className="text-4xl sm:text-4xl md:text-[45px] font-bold text-gray-800 tracking-tight mb-2">
            What{' '}
            {/* <span className="bg-[linear-gradient(38.46deg,red_0.15%,rgb(97,3,3)_98.48%)] bg-clip-text text-transparent"> */}
              Products
            {/* </span> */}
            {' '}
            <span className="inline-block bg-[linear-gradient(38.46deg,red_0.15%,rgb(97,3,3)_98.48%)] bg-clip-text text-transparent animate-pulse ml-1">
              ??
            </span>
          </h2> 

          {/* Accent Line */}
          <div className="w-20 h-1 bg-[linear-gradient(38.46deg,red_0.15%,rgb(97,3,3)_98.48%)]  mx-auto mb-4" />

          <p className="text-gray-600 text-sm sm:text-[14px] leading-relaxed">
            Explore some of our Hot-Cakes, to fulfil your Smart and Sustainable Packaging Needs
          </p>
        </div>

        {/* ================= CATEGORY TABS ================= */}
        <div className="flex items-center justify-start gap-3 sm:gap-5 mb-10 flex-wrap">
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-3 sm:px-8 sm:py-3.5 md:rounded-2xl rounded-lg font-bold text-[15px] sm:text-[16px] transition-all duration-300 cursor-pointer ${
                  isActive
                    ? "bg-[linear-gradient(38.46deg,red_0.15%,rgb(97,3,3)_98.48%)] text-white shadow-[0_4px_16px_rgba(180,0,0,0.25)]"
                    : "bg-white text-black shadow-[0_4px_20px_rgba(0,0,0,0.08),0_1px_4px_rgba(0,0,0,0.04)] hover:shadow-[0_6px_24px_rgba(0,0,0,0.12)] hover:text-black"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* ================= PRODUCTS GRID (Horizontal Scroll on Mobile, 2-Col Tablet, 4-Col Desktop) ================= */}
        <div className="flex overflow-x-auto sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 pb-4 pt-1 sm:pb-0 sm:pt-0 no-scrollbar scrollbar-hide snap-x snap-mandatory -mx-4 px-4 sm:mx-0 sm:px-0">
          {products.map((product) => (
            <div
              key={product.id}
              className="group relative bg-white rounded-2xl border border-red-500/70 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between shrink-0 w-[270px] sm:w-auto snap-center sm:snap-align-none"
            >
              {/* Product Image Area */}
              <div>
                <div className="relative w-full h-[240px] bg-white overflow-hidden p-6 flex items-center justify-center border-b border-gray-100 rounded-b-2xl shadow-md">
                  <img
                    src={product.image}
                    alt={product.title}
                    width="240"
                    height="240"
                    className="w-full h-full object-contain transition-transform duration-500 ease-out group-hover:scale-105"
                    loading="lazy"
                    decoding="async"
                  />

                  {/* Corner Accent Badge */}
                  <div className="absolute bottom-0 right-0 w-16 h-16 bg-[linear-gradient(38.46deg,red_0.15%,rgb(97,3,3)_98.48%)] transform rotate-45 translate-x-8 translate-y-8 pointer-events-none" />
                </div>

                {/* Product Title */}
                <div className="p-5">
                  <h3 className="text-[15px] font-semibold text-gray-900 line-clamp-2 leading-snug group-hover:text-red-600 transition-colors">
                    {product.title}
                  </h3>
                </div>
              </div>

              {/* Card Footer Button */}
              <div className="p-5 pt-0">
                <a
                  href="#details"
                  className="w-full py-2.5 px-4 rounded-xl border border-gray-200 bg-gray-50 text-gray-700 font-semibold text-xs tracking-wider uppercase hover:bg-red-50 hover:text-red-600 hover:border-red-300 transition-all flex items-center justify-center gap-2 group/btn"
                >
                  <span>VIEW DETAILS</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                </a>
              </div>

              {/* Bottom Animated Gradient Line on Hover */}
              <div className="absolute bottom-0 left-0 h-1 bg-[linear-gradient(38.46deg,red_0.15%,rgb(97,3,3)_98.48%)] w-0 group-hover:w-full transition-all duration-500" />
            </div>
          ))}
        </div>

        {/* ================= BOTTOM CTA ================= */}
        <div className="mt-16 text-center">
          <a
            href="#all-products"
            className="inline-flex items-center justify-center bg-[linear-gradient(38.46deg,red_0.15%,rgb(97,3,3)_98.48%)] text-white   
             font-[500] px-10 py-[10px] rounded-lg hover:bg-red-700 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 duration-300
            
            "
          >
            View All Products
          </a>
        </div>

      </div>
    </section>
  );
};

export default ProductsSection;

