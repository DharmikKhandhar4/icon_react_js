import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight, PhoneCall, Cpu, ShieldCheck, Zap } from 'lucide-react';

const getLocalProductImage = (src) => {
  if (!src) return "/product-image/Product1.png";
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
  const [modalProduct, setModalProduct] = useState(null);
  const [isModalLocked, setIsModalLocked] = useState(false);

  const hoverTimerRef = useRef(null);
  const closeTimerRef = useRef(null);

  const products =
    defaultProductsByCategory[selectedCategory] ||
    defaultProductsByCategory["Food"];

  const closeModal = useCallback(() => {
    if (hoverTimerRef.current) clearTimeout(hoverTimerRef.current);
    if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    setIsModalLocked(false);
    setModalProduct(null);
  }, []);

  const handleCardMouseEnter = (product, index) => {
    setHoveredIndex(index);
    if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    hoverTimerRef.current = setTimeout(() => {
      setModalProduct(product);
    }, 180);
  };

  const handleCardMouseLeave = () => {
    setHoveredIndex(null);
    if (hoverTimerRef.current) clearTimeout(hoverTimerRef.current);
    if (!isModalLocked) {
      closeTimerRef.current = setTimeout(() => {
        setModalProduct(null);
      }, 220);
    }
  };

  const handleCardClick = (product) => {
    if (hoverTimerRef.current) clearTimeout(hoverTimerRef.current);
    if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    setIsModalLocked(true);
    setModalProduct(product);
  };

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') closeModal();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      if (hoverTimerRef.current) clearTimeout(hoverTimerRef.current);
      if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    };
  }, [closeModal]);

  const handleCategoryClick = (categoryType) => {
    closeModal();
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
      ? products.find((p, i) => (p._id || p.id || i) === selectedProduct) ||
        products[selectedProduct]
      : null;

  return (
    <>
      <div className="font-Poppins pt-[80px]">
        <div className="md:w-[85%] 2xl:w-[1300px] mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-5 w-[100%]">
            <h2 className="text-4xl md:text-[45px] font-bold text-gray-800 mb-1">
              What Products{" "}
              <span className="text-icon animate-pulse ml-[10px]">?</span>
              <span className="text-icon animate-pulse delay-100 ">?</span>
            </h2>
            <div className="w-24 h-1 bs-mix-red mx-auto mb-5"></div>
            <p className="text-gray-600 max-w-2xl mx-auto text-[14px]">
              Explore some of our Hot-Cakes, to fulfil your Smart and
              Sustainable Packaging Needs
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
                    selectedCategory === type
                      ? "bs-mix-red text-white"
                      : "mainnn text-black"
                  }`}
                >
                  <h3 className="flex font-[600]">{type}</h3>
                </div>
              ))}
            </div>

            {/* Products Grid */}
            <div className="flex overflow-x-auto md77:overflow-hidden md:grid md77:grid-cols-2 md11:grid-cols-4 gap-[10px] justify-between">
              {products.slice(0, 4).map((product, index) => {
                const currentId = product._id || product.id || index;
                const isSelected = selectedProduct === currentId;

                return (
                  <div
                    key={currentId}
                    className="relative group w-[280px] md:w-auto flex-shrink-0"
                    onClick={() => handleCardClick(product)}
                    onMouseEnter={() => handleCardMouseEnter(product, index)}
                    onMouseLeave={handleCardMouseLeave}
                  >
                    {/* Main Square Box */}
                    <div
                      className={`relative bg-white h-[430px] md11:h-[400px] 2xl:h-[440px] rounded-[15px] w-[280px] mx-auto shadow-icon border border-[#f22] overflow-hidden cursor-pointer ${
                        isSelected ? "ring-4 ring-red-500 shadow-xl" : ""
                      }`}
                    >
                      {/* Square Image Container */}
                      <div className="relative w-[100%] h-[260px] md11:h-[230px] 2xl:h-[260px] rounded-[15px] bg-[#fff] shadow-md overflow-hidden">
                        <div className="absolute inset-0 flex items-center justify-center p-6">
                          <img
                            src={getLocalProductImage(
                              product.mainImage || product.image,
                            )}
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
              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                Selected Product
              </h3>
              <p className="text-red-600 font-medium mb-4">
                {selectedProductData.mainTitle || selectedProductData.name}
              </p>
              <p className="text-gray-600">
                {selectedProductData.mainDesription ||
                  selectedProductData.description}
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

      {/* Centered Product Preview Modal (Image + Content matching reference style) */}
      <AnimatePresence>
        {modalProduct && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={closeModal}
            className="fixed inset-0 z-[999] bg-slate-950/65 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 14 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 10 }}
              transition={{ type: "spring", stiffness: 360, damping: 28 }}
              onClick={(e) => e.stopPropagation()}
              onMouseEnter={() => {
                if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
              }}
              onMouseLeave={() => {
                if (!isModalLocked) closeModal();
              }}
              className="relative w-full max-w-[760px] bg-white rounded-[28px] sm:rounded-[34px] shadow-[0_25px_70px_rgba(0,0,0,0.35)] border border-slate-200/80 overflow-hidden flex flex-col md:flex-row"
            >
              {/* Close Button (Top-Right, matching reference) */}
              <button
                type="button"
                onClick={closeModal}
                aria-label="Close dialog"
                className="absolute top-4 right-4 z-30 w-8 h-8 rounded-full bg-black/60 hover:bg-black text-white flex items-center justify-center transition-all shadow-md cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Left Column (Brand Tinted Content Panel, Centered layout matching reference) */}
              <div className="relative w-full md:w-[48%] bg-[#fcf4f4] p-7 sm:p-9 flex flex-col items-center justify-center text-center">
                {/* Brand / Innovation Line Icon (like the globe in reference) */}
                <div className="w-12 h-12 rounded-full bg-white shadow-xs border border-red-100 flex items-center justify-center text-red-600 mb-5">
                  <svg
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.75}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9"
                    />
                  </svg>
                </div>

                {/* Description Quote (matching reference quotes & typography) */}
                <p className="text-[14px] sm:text-[15px] font-medium leading-relaxed text-slate-800 mb-5 max-w-[280px]">
                  “{modalProduct.mainDesription || modalProduct.description}”
                </p>

                {/* Machine Name & Sub-Role (matching Author & Role in reference) */}
                <div className="mb-6">
                  <h4 className="text-[15px] sm:text-[16px] font-bold text-slate-950 leading-snug">
                    {modalProduct.mainTitle || modalProduct.name}
                  </h4>
                  <span className="text-[11px] font-semibold text-red-700 uppercase tracking-wider block mt-1">
                    {modalProduct.category || selectedCategory} Automation Series
                  </span>
                </div>

                {/* Action Buttons (matching button style) */}
                <div className="flex items-center gap-2.5">
                  <button
                    type="button"
                    onClick={() => {
                      closeModal();
                      handleNavigate(modalProduct);
                    }}
                    className="px-6 py-2.5 rounded-xl bs-mix-red text-white text-xs sm:text-sm font-bold shadow-md hover:opacity-95 transition-all active:scale-95 cursor-pointer"
                  >
                    Explore Machine
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      closeModal();
                      if (onNavigate) {
                        onNavigate("/contact-us");
                      } else {
                        window.location.href = "/contact-us";
                      }
                    }}
                    className="px-4 py-2.5 rounded-xl border border-red-200 bg-white hover:bg-red-50 text-slate-700 hover:text-red-600 text-xs sm:text-sm font-semibold transition-all active:scale-95 cursor-pointer shadow-xs"
                  >
                    Get Quote
                  </button>
                </div>
              </div>

              {/* Right Column (Product Image with Overlapping Sticker Badge) */}
              <div className="relative w-full md:w-[52%] bg-gradient-to-br from-slate-50 via-white to-slate-100 flex items-center justify-center min-h-[280px] sm:min-h-[360px] p-6 sm:p-8 overflow-hidden">
                {/* Product Image */}
                <div className="relative w-full h-full flex items-center justify-center">
                  <motion.img
                    src={getLocalProductImage(
                      modalProduct.mainImage || modalProduct.image,
                    )}
                    alt={modalProduct.mainTitle || modalProduct.name}
                    className="relative z-10 max-h-[220px] sm:max-h-[270px] w-auto max-w-[88%] object-contain drop-shadow-[0_18px_35px_rgba(0,0,0,0.18)]"
                    initial={{ scale: 0.94 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.3 }}
                    onError={(e) => {
                      e.currentTarget.src =
                        "/product-image/img_6878939f4af644.42421642.png";
                    }}
                  />
                  {/* Subtle Ground Shadow */}
                  <div className="absolute bottom-2 w-3/4 h-3 bg-slate-900/15 rounded-full blur-md pointer-events-none" />
                </div>

                {/* Overlapping Tilted Sticker Badge (Matching the 100% COTTON badge in reference) */}
                <div className="absolute bottom-6 left-3 sm:-left-3 z-20 -rotate-12 bg-gradient-to-br from-red-600 to-[#610303] text-white p-2.5 px-3.5 rounded-2xl shadow-xl border-2 border-white flex items-center gap-2 pointer-events-none">
                  <div className="w-6 h-6 rounded-lg bg-white/15 flex items-center justify-center">
                    <ShieldCheck className="w-4 h-4 text-amber-300" />
                  </div>
                  <div className="leading-tight text-left">
                    <span className="block text-[8px] font-black uppercase tracking-widest text-red-200">
                      CERTIFIED
                    </span>
                    <span className="block text-[11px] font-extrabold uppercase tracking-wider text-white">
                      SS-304 GRADE
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
