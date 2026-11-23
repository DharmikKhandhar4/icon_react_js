import React, { useState } from 'react';

const getLocalProductImage = (src) => {
  if (!src) return '/product-image/Product1.png';
  return src;
};

const defaultProductsByCategory = {
  Food: [
    {
      _id: "inline-tray",
      id: "inline-tray",
      mainTitle: "INLINE TRAY SEALER (MAP)",
      name: "INLINE TRAY SEALER (MAP)",
      mainDesription:
        "Modified atmosphere packaging solution for extended shelf life of food products with inline tray sealing technology.",
      mainImage: "/product-image/Product1.png",
      category: "Food",
    },
    {
      _id: "continuous-tray",
      id: "continuous-tray",
      mainTitle: "CONTINUOUS TRAY SEALER (MAP)",
      name: "CONTINUOUS TRAY SEALER (MAP)",
      mainDesription:
        "Continuous operation tray sealing machine with MAP technology for high-volume production environments.",
      mainImage: "/product-image/Product2.png",
      category: "Food",
    },
    {
      _id: "linear-cup",
      id: "linear-cup",
      mainTitle: "LINEAR CUP FILLING SEALING MACHINE",
      name: "LINEAR CUP FILLING SEALING MACHINE",
      mainDesription:
        "Multi-lane cup filling and sealing system with precision dosing for liquid and semi-liquid products.",
      mainImage: "/product-image/Product3.png",
      category: "Food",
    },
    {
      _id: "thermoforming",
      id: "thermoforming",
      mainTitle: "THERMOFORMING VACUUM PACKING MACHINE (ITF - 400)",
      name: "THERMOFORMING VACUUM PACKING MACHINE (ITF - 400)",
      mainDesription:
        "High-performance thermoforming machine for creating custom vacuum-sealed packages with precision forming technology.",
      mainImage: "/product-image/Product4.png",
      category: "Food",
    },
  ],
  "Non-Food": [
    {
      _id: "thermoforming-nonfood",
      id: "thermoforming-nonfood",
      mainTitle: "THERMOFORMING VACUUM PACKING MACHINE (ITF - 400)",
      name: "THERMOFORMING VACUUM PACKING MACHINE (ITF - 400)",
      mainDesription:
        "High-performance thermoforming machine for creating custom vacuum-sealed packages with precision forming technology.",
      mainImage: "/product-image/Product4.png",
      category: "Non-Food",
    },
    {
      _id: "continuous-tray-nonfood",
      id: "continuous-tray-nonfood",
      mainTitle: "CONTINUOUS TRAY SEALER (MAP)",
      name: "CONTINUOUS TRAY SEALER (MAP)",
      mainDesription:
        "Continuous operation tray sealing machine with MAP technology for high-volume production environments.",
      mainImage: "/product-image/Product3.png",
      category: "Non-Food",
    },
    {
      _id: "inline-tray-nonfood",
      id: "inline-tray-nonfood",
      mainTitle: "INLINE TRAY SEALER (MAP)",
      name: "INLINE TRAY SEALER (MAP)",
      mainDesription:
        "Modified atmosphere packaging solution for extended shelf life of products with inline tray sealing technology.",
      mainImage: "/product-image/Product1.png",
      category: "Non-Food",
    },
    {
      _id: "double-chamber-nonfood",
      id: "double-chamber-nonfood",
      mainTitle: "DOUBLE CHAMBER VACUUM PACKING",
      name: "DOUBLE CHAMBER VACUUM PACKING",
      mainDesription:
        "Heavy-duty dual chamber vacuum packaging system for industrial applications with programmable cycles.",
      mainImage: "/product-image/Product2.png",
      category: "Non-Food",
    },
  ],
  Pharma: [
    {
      _id: "linear-cup-pharma",
      id: "linear-cup-pharma",
      mainTitle: "LINEAR CUP FILLING SEALING MACHINE",
      name: "LINEAR CUP FILLING SEALING MACHINE",
      mainDesription:
        "Multi-lane cup filling and sealing system with precision dosing for liquid and semi-liquid products.",
      mainImage: "/product-image/Product3.png",
      category: "Pharma",
    },
    {
      _id: "double-chamber-pharma",
      id: "double-chamber-pharma",
      mainTitle: "DOUBLE CHAMBER VACUUM PACKING",
      name: "DOUBLE CHAMBER VACUUM PACKING",
      mainDesription:
        "Heavy-duty dual chamber vacuum packaging system for industrial applications with programmable cycles.",
      mainImage: "/product-image/Product4.png",
      category: "Pharma",
    },
    {
      _id: "vffs-pharma",
      id: "vffs-pharma",
      mainTitle: "FOUR/SIX HEAD VFFS PRO",
      name: "FOUR/SIX HEAD VFFS PRO",
      mainDesription:
        "Advanced vertical form fill seal machine with multi-head weighing system for precise packaging of pharmaceutical products.",
      mainImage: "/product-image/Product1.png",
      category: "Pharma",
    },
    {
      _id: "inline-tray-pharma",
      id: "inline-tray-pharma",
      mainTitle: "INLINE TRAY SEALER (MAP)",
      name: "INLINE TRAY SEALER (MAP)",
      mainDesription:
        "Modified atmosphere packaging solution for extended shelf life with inline tray sealing technology.",
      mainImage: "/product-image/Product2.png",
      category: "Pharma",
    },
  ],
};

export default function ProductsSection({ onNavigate }) {
  const [selectedCategory, setSelectedCategory] = useState("Food");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [categoryTypes] = useState(["Food", "Non-Food", "Pharma"]);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const products = defaultProductsByCategory[selectedCategory] || defaultProductsByCategory["Food"];

  const handleCategoryClick = (categoryType) => {
    setSelectedCategory(categoryType);
    setSelectedProduct(null);
  };

  const slugify = (text = "") =>
    String(text)
      .toLowerCase()
      .trim()
      .replace(/\s+/g, "-")
      .replace(/[^\w\-]+/g, "");

  const handleNavigate = (product) => {
    const slug = slugify(product.mainTitle || product.name || product.title);
    const id = product._id || product.id;

    if (!id && !slug) {
      console.error("Missing product ID and slug");
      return;
    }

    const targetUrl = `/product-details/${slug || id}`;
    if (onNavigate) {
      onNavigate(targetUrl);
    } else {
      window.location.href = targetUrl;
    }
  };

  const handleAllProduct = () => {
    if (onNavigate) {
      onNavigate("/all-packaging-machines");
    } else {
      window.location.href = "/all-packaging-machines";
    }
  };

  const selectedProductData =
    selectedProduct !== null
      ? products.find((p, i) => (p._id || p.id || i) === selectedProduct) || products[selectedProduct]
      : null;

  return (
    <>
      <div className="font-Poppins pt-[80px]">
        <div className="md:w-[85%] 2xl:w-[1300px] mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-5 w-[100%]">
            <h2 className="text-4xl md:text-[45px] font-bold text-gray-800 mb-1">
              What Products <span className="text-icon animate-pulse ml-[10px]">?</span>
              <span className="text-icon animate-pulse delay-100 ">?</span>
            </h2>
            <div className="w-24 h-1 bs-mix-red mx-auto mb-5"></div>
            <p className="text-gray-600 max-w-2xl mx-auto text-[14px]">
              Explore some of our Hot-Cakes, to fulfil your Smart and Sustainable Packaging Needs
            </p>
          </div>

          <div className="flex w-[100%] flex-col">
            {/* Category Tabs */}
            <div className="flex gap-[16px] md:gap-[30px] overflow-x-auto md:items-center pb-[30px]">
              {categoryTypes.map((type) => (
                <div
                  key={type}
                  onClick={() => handleCategoryClick(type)}
                  className={`cursor-pointer gap-[14px] w-fit rounded-[10px] flex justify-center px-[15px] md:py-0 py-[10px] items-center h-[50px] flex-shrink-0 transition-all duration-300 ${
                    selectedCategory === type ? "bs-mix-red text-white" : "mainnn text-black"
                  }`}
                >
                  <h3 className="flex font-[600]">{type}</h3>
                </div>
              ))}
            </div>

            {/* Products Grid */}
            <div className="flex overflow-x-auto md:overflow-visible md77:overflow-visible md11:overflow-visible md:grid md77:grid-cols-2 md11:grid-cols-4 gap-[10px] justify-between relative">
              {products.slice(0, 4).map((product, index) => {
                  const currentId = product._id || product.id || index;
                  const isSelected = selectedProduct === currentId;

                  return (
                    <div
                      key={currentId}
                      className={`relative group w-[280px] md:w-auto flex-shrink-0 transition-all duration-200 ${
                        hoveredIndex === index ? "z-50" : "z-10"
                      }`}
                      onClick={() => setSelectedProduct(isSelected ? null : currentId)}
                      onMouseEnter={() => setHoveredIndex(index)}
                      onMouseLeave={() => setHoveredIndex(null)}
                    >
                      {/* ========== FLOATING HOVER POPOVER (Outside Card, Above with Down Arrow) ========== */}
                      <div
                        className={`absolute left-1/2 -translate-x-1/2 bottom-[calc(100%-4px)] pb-3 z-50 w-[280px] sm:w-[290px] transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                          hoveredIndex === index
                            ? "opacity-100 translate-y-0 pointer-events-auto visible"
                            : "opacity-0 translate-y-2 pointer-events-none invisible"
                        }`}
                      >
                        <div className="relative bg-white/95 backdrop-blur-md rounded-2xl shadow-[0_20px_50px_-10px_rgba(0,0,0,0.18),0_8px_20px_-6px_rgba(239,68,68,0.15)] border border-red-100 overflow-hidden">
                          {/* Top Red Accent Bar */}
                          <div className="h-1 w-full bs-mix-red" />

                          <div className="p-4 pb-3.5">
                            {/* Category · Status Row */}
                            <div className="flex items-center justify-between gap-2 mb-2">
                              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-red-50 text-red-600 border border-red-100/80">
                                <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                                {product.category || selectedCategory}
                              </span>
                              <span className="text-[10px] font-mono text-gray-500 font-semibold uppercase tracking-wider">
                                Auto-Cycle
                              </span>
                            </div>

                            {/* Product Title */}
                            <h4 className="text-[14px] font-bold text-gray-900 leading-snug truncate mb-1">
                              {product.mainTitle || product.name}
                            </h4>

                            {/* Description */}
                            <p className="text-gray-500 text-[11px] leading-relaxed mb-3 line-clamp-2">
                              {product.mainDesription || product.description}
                            </p>

                            {/* Quick Spec Chips: [High Speed] [SS304] [Servo] */}
                            <div className="flex flex-wrap gap-1.5 mb-3.5">
                              <span className="inline-flex items-center gap-1 px-2 py-[3px] rounded-md bg-red-50/80 text-[10px] font-semibold text-red-700 border border-red-100">
                                <svg className="w-2.5 h-2.5 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                                High Speed
                              </span>
                              <span className="inline-flex items-center gap-1 px-2 py-[3px] rounded-md bg-slate-50 text-[10px] font-semibold text-slate-700 border border-slate-200">
                                <svg className="w-2.5 h-2.5 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                </svg>
                                SS-304
                              </span>
                              <span className="inline-flex items-center gap-1 px-2 py-[3px] rounded-md bg-slate-50 text-[10px] font-semibold text-slate-700 border border-slate-200">
                                <svg className="w-2.5 h-2.5 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                Servo
                              </span>
                            </div>

                            {/* Action Buttons: [View Specs] [Quote] */}
                            <div className="flex items-center gap-2">
                              <button
                                type="button"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  handleNavigate(product);
                                }}
                                className="flex-1 flex items-center justify-center gap-1.5 bs-mix-red hover:opacity-95 text-white font-bold text-[11px] py-2 rounded-lg transition-all active:scale-95 shadow-sm cursor-pointer"
                              >
                                <span>View Specs</span>
                                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                              </button>
                              <button
                                type="button"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  if (onNavigate) {
                                    onNavigate('/contact-us');
                                  } else {
                                    window.location.href = '/contact-us';
                                  }
                                }}
                                className="flex items-center justify-center gap-1 bg-white hover:bg-red-50 text-slate-700 hover:text-red-600 border border-slate-200 hover:border-red-200 font-bold text-[11px] py-2 px-3.5 rounded-lg transition-all active:scale-95 shadow-xs cursor-pointer"
                              >
                                <svg className="w-3 h-3 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                                </svg>
                                <span>Quote</span>
                              </button>
                            </div>
                          </div>
                        </div>

                        {/* Down Arrow pointer pointing directly to card */}
                        <div className="absolute left-1/2 -translate-x-1/2 bottom-[6px] w-3 h-3 bg-white border-r border-b border-red-100 rotate-45 pointer-events-none shadow-xs" />
                      </div>

                      {/* Main Square Box */}
                      <div
                        className={`relative bg-white h-[430px] md11:h-[400px] 2xl:h-[440px] rounded-[15px] w-[280px] mx-auto shadow-icon border border-[#f22] overflow-hidden cursor-pointer ${
                          isSelected
                            ? "ring-4 ring-red-500 shadow-xl"
                            : ""
                        }`}
                      >
                        {/* Square Image Container */}
                        <div className="relative w-[100%] h-[260px] md11:h-[230px] 2xl:h-[260px] rounded-[15px] bg-[#fff] shadow-md overflow-hidden">
                          <div className="absolute inset-0 flex items-center justify-center p-6">
                            <img
                              src={getLocalProductImage(product.mainImage || product.image)}
                              alt={product.mainTitle || product.name || "Product"}
                              className={`transition-transform w-[100%] h-[100%] object-contain duration-500 ${
                                hoveredIndex === index ? "scale-110" : "scale-105"
                              }`}
                              onError={(e) => {
                                e.currentTarget.src =
                                  "/product-image/img_6878939f4af644.42421642.png";
                              }}
                            />
                          </div>

                          {/* Corner Accent */}
                          <div
                            className={`absolute bottom-0 right-0 w-16 h-16 bs-mix-red transform rotate-45 translate-x-8 translate-y-8 transition-all duration-300 ${
                              isSelected ? "scale-150" : "scale-100"
                            }`}
                          ></div>
                        </div>

                        {/* Content Area */}
                        <div className="px-[20px] py-[10px]">
                          {/* Category / Product Title */}
                          <h3
                            className={`text-[14px] font-[600] mb-1 transition-colors duration-300 line-clamp-1 ${
                              isSelected ? "text-icon" : "text-gray-800"
                            }`}
                          >
                            {product.mainTitle || product.name}
                          </h3>

                          {/* Description */}
                          <p className="text-gray-600 text-sm leading-[19px] mb-[10px] line-clamp-3">
                            {product.mainDesription || product.description}
                          </p>

                          {/* Action Button */}
                          <button
                            type="button"
                            className={`w-[85%] bottom-[20px] border py-[8px] px-4 text-[14px] absolute rounded-lg font-medium transition-all duration-300 flex items-center justify-center group ${
                              isSelected
                                ? "bg-red-600 border border-red-600 text-white"
                                : "bg-gray-100 text-gray-700 hover:bg-red-50 hover:text-red-600"
                            }`}
                            onClick={(e) => {
                              e.stopPropagation();
                              handleNavigate(product);
                            }}
                          >
                            <span>VIEW DETAILS</span>
                            <svg
                              className={`w-5 h-5 ml-2 transition-transform duration-300 ${
                                hoveredIndex === index ? "translate-x-1" : ""
                              }`}
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M14 5l7 7m0 0l-7 7m7-7H3"
                              />
                            </svg>
                          </button>
                        </div>

                        {/* Bottom Border Accent */}
                        <div
                          className={`absolute bottom-0 left-0 h-1 bg-red-600 transition-all duration-500 ${
                            isSelected ? "w-full" : "w-0 group-hover:w-full"
                          }`}
                        ></div>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>

          {/* Selected Product Info */}
          {selectedProduct && selectedProductData && (
            <div className="mt-12 bg-white rounded-lg p-8 border-l-4 border-red-600 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Selected Product</h3>
              <p className="text-red-600 font-medium mb-4">
                {selectedProductData.mainTitle || selectedProductData.name}
              </p>
              <p className="text-gray-600">
                {selectedProductData.mainDesription || selectedProductData.description}
              </p>
              <div className="mt-6 flex space-x-4">
                <button
                  type="button"
                  onClick={() => handleNavigate(selectedProductData)}
                  className="bg-red-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-red-700 transition-colors"
                >
                  Get Quote
                </button>
                <button
                  type="button"
                  onClick={() => handleNavigate(selectedProductData)}
                  className="border border-red-600 text-red-600 px-6 py-3 rounded-lg font-medium hover:bg-red-50 transition-colors"
                >
                  Download Specs
                </button>
              </div>
            </div>
          )}

          {/* View All Button */}
          <div className="mt-16 text-center">
            <button
              type="button"
              className="bs-mix-red text-white font-[500] px-10 py-[10px] rounded-lg hover:bg-red-700 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 duration-300"
              onClick={handleAllProduct}
            >
              View All Products
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
