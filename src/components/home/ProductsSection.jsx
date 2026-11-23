import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight, Eye, PhoneCall } from 'lucide-react';

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
  const [categoryTypes] = useState(["Food", "Non-Food", "Pharma"]);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  // Centered Modal State
  const [modalProduct, setModalProduct] = useState(null);
  const [isLockedOpen, setIsLockedOpen] = useState(false);

  const hoverTimeoutRef = useRef(null);
  const closeTimeoutRef = useRef(null);

  const products = defaultProductsByCategory[selectedCategory] || defaultProductsByCategory["Food"];

  const handleCategoryClick = (categoryType) => {
    setSelectedCategory(categoryType);
    setModalProduct(null);
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

    setModalProduct(null);
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

  // Hover open with debounce
  const handleCardMouseEnter = (product, index) => {
    setHoveredIndex(index);
    if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);

    hoverTimeoutRef.current = setTimeout(() => {
      setModalProduct(product);
      setIsLockedOpen(false);
    }, 220);
  };

  const handleCardMouseLeave = () => {
    setHoveredIndex(null);
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);

    if (!isLockedOpen) {
      closeTimeoutRef.current = setTimeout(() => {
        setModalProduct(null);
      }, 320);
    }
  };

  // Click card locks modal open
  const handleCardClick = (product) => {
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    setModalProduct(product);
    setIsLockedOpen(true);
  };

  const closeModal = useCallback(() => {
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    setModalProduct(null);
    setIsLockedOpen(false);
  }, []);

  // Escape key listener & Body scroll management
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        closeModal();
      }
    };

    if (modalProduct) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [modalProduct, closeModal]);

  return (
    <>
      <div className="font-Poppins pt-[60px] pb-12 relative">
        <div className="md:w-[85%] 2xl:w-[1300px] mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-6 w-[100%]">
            <h2 className="text-3xl sm:text-4xl md:text-[45px] font-bold text-gray-800 mb-1">
              What Products <span className="text-icon animate-pulse ml-[10px]">?</span>
              <span className="text-icon animate-pulse delay-100">?</span>
            </h2>
            <div className="w-24 h-1 bs-mix-red mx-auto mb-4"></div>
            <p className="text-gray-600 max-w-2xl mx-auto text-xs sm:text-sm">
              Explore our industrial packaging machinery — hover or click any machine to preview
            </p>
          </div>

          <div className="flex w-[100%] flex-col">
            {/* Category Tabs */}
            <div className="flex gap-3 md:gap-6 overflow-x-auto md:items-center pb-6 scrollbar-hide">
              {categoryTypes.map((type) => (
                <button
                  type="button"
                  key={type}
                  onClick={() => handleCategoryClick(type)}
                  className={`cursor-pointer gap-2 rounded-xl flex justify-center px-6 py-2.5 items-center h-[46px] flex-shrink-0 transition-all duration-300 font-semibold text-xs sm:text-sm tracking-wide ${
                    selectedCategory === type
                      ? "bs-mix-red text-white shadow-md scale-105"
                      : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>

            {/* Products Grid */}
            <div className="flex overflow-x-auto md:grid md77:grid-cols-2 md11:grid-cols-4 gap-5 justify-between pb-4">
              {products.slice(0, 4).map((product, index) => {
                const currentId = product._id || product.id || index;
                const isHovered = hoveredIndex === index;

                return (
                  <div
                    key={currentId}
                    className="relative group w-[280px] md:w-auto flex-shrink-0"
                    onMouseEnter={() => handleCardMouseEnter(product, index)}
                    onMouseLeave={handleCardMouseLeave}
                    onClick={() => handleCardClick(product)}
                  >
                    {/* Main Card Box */}
                    <div
                      className={`relative bg-white h-[420px] md11:h-[395px] 2xl:h-[430px] rounded-2xl w-[280px] mx-auto shadow-sm hover:shadow-xl border border-slate-200/80 hover:border-red-300 transition-all duration-300 overflow-hidden cursor-pointer flex flex-col justify-between ${
                        isHovered ? "ring-2 ring-red-500/40 -translate-y-1" : ""
                      }`}
                    >
                      {/* Image Container */}
                      <div className="relative w-full h-[240px] md11:h-[215px] 2xl:h-[245px] bg-slate-50 overflow-hidden flex items-center justify-center p-6 border-b border-slate-100">
                        {/* Quick Specs Badge Overlay */}
                        <div
                          className={`absolute top-3 right-3 z-10 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase bg-white/90 backdrop-blur-sm text-red-600 border border-red-100 shadow-sm transition-all duration-200 ${
                            isHovered ? "opacity-100 scale-100" : "opacity-0 scale-90"
                          }`}
                        >
                          <Eye className="w-3 h-3 text-red-600" />
                          <span>Preview</span>
                        </div>

                        {/* Category Tag */}
                        <div className="absolute top-3 left-3 z-10">
                          <span className="px-2 py-0.5 rounded-md text-[10px] font-mono font-bold uppercase tracking-wider bg-slate-200/80 text-slate-700">
                            {product.category || selectedCategory}
                          </span>
                        </div>

                        {/* Machine Image */}
                        <img
                          src={getLocalProductImage(product.mainImage || product.image)}
                          alt={product.mainTitle || product.name || "Product"}
                          className={`w-full h-full object-contain transition-transform duration-500 ease-out ${
                            isHovered ? "scale-110 drop-shadow-[0_12px_24px_rgba(0,0,0,0.18)]" : "scale-100 drop-shadow-md"
                          }`}
                          onError={(e) => {
                            e.currentTarget.src = "/product-image/img_6878939f4af644.42421642.png";
                          }}
                        />

                        {/* Subtle Corner Accent */}
                        <div className="absolute bottom-0 right-0 w-12 h-12 bs-mix-red transform rotate-45 translate-x-6 translate-y-6 opacity-80" />
                      </div>

                      {/* Content Area */}
                      <div className="p-4 flex-1 flex flex-col justify-between">
                        <div>
                          {/* Machine Title */}
                          <h3 className="text-sm font-bold mb-1 text-slate-900 group-hover:text-red-600 transition-colors line-clamp-1">
                            {product.mainTitle || product.name}
                          </h3>

                          {/* Description */}
                          <p className="text-slate-600 text-xs leading-relaxed line-clamp-3">
                            {product.mainDesription || product.description}
                          </p>
                        </div>

                        {/* Action Button */}
                        <div className="pt-3">
                          <button
                            type="button"
                            className="w-full py-2 px-3 text-xs rounded-xl font-bold transition-all duration-200 flex items-center justify-center gap-2 bs-mix-red hover:opacity-95 text-white shadow-sm hover:shadow active:scale-95 cursor-pointer"
                            onClick={(e) => {
                              e.stopPropagation();
                              handleNavigate(product);
                            }}
                          >
                            <span>VIEW DETAILS</span>
                            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                          </button>
                        </div>
                      </div>

                      {/* Bottom Accent Line */}
                      <div
                        className={`h-1 bg-red-600 transition-all duration-300 ${
                          isHovered ? "w-full" : "w-0"
                        }`}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* View All Button */}
          <div className="mt-8 text-center">
            <button
              type="button"
              className="bs-mix-red text-white font-semibold text-sm px-8 py-3 rounded-full hover:opacity-95 transition-all shadow-md hover:shadow-xl transform hover:-translate-y-0.5 duration-200 cursor-pointer"
              onClick={handleAllProduct}
            >
              View All Packaging Machines
            </button>
          </div>
        </div>

        {/* ===================================================================
            CENTERED CLEAN PREVIEW MODAL (Opens in center of page)
            - Clean, focused design with large image, title, description, and buttons
            - Removed extra specs grid, applications chips & bullet points
           =================================================================== */}
        <AnimatePresence>
          {modalProduct && (
            <div className="fixed inset-0 z-[999] flex items-center justify-center p-4 sm:p-6 md:p-8">
              {/* Dark Blur Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                onClick={closeModal}
                className="fixed inset-0 bg-slate-950/70 backdrop-blur-sm cursor-pointer"
              />

              {/* Centered Modal Card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.94, y: 14 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.94, y: 14 }}
                transition={{ type: "spring", damping: 26, stiffness: 320 }}
                onMouseEnter={() => {
                  if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
                }}
                onMouseLeave={() => {
                  if (!isLockedOpen) {
                    closeTimeoutRef.current = setTimeout(() => {
                      setModalProduct(null);
                    }, 300);
                  }
                }}
                className="relative z-10 w-full max-w-[780px] bg-white rounded-3xl shadow-[0_25px_60px_-15px_rgba(0,0,0,0.4)] border border-slate-100 overflow-hidden flex flex-col md:flex-row"
              >
                {/* Close Button */}
                <button
                  type="button"
                  onClick={closeModal}
                  aria-label="Close modal"
                  className="absolute top-4 right-4 z-30 w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-900 flex items-center justify-center transition-colors cursor-pointer shadow-xs"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* -----------------------------------------------------------
                    LEFT COLUMN: Large Product Image
                   ----------------------------------------------------------- */}
                <div className="md:w-1/2 bg-gradient-to-br from-slate-50 via-rose-50/20 to-slate-100 p-6 sm:p-8 flex flex-col items-center justify-center relative overflow-hidden border-b md:border-b-0 md:border-r border-slate-200/80">
                  {/* Subtle Background Glow */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[240px] h-[240px] rounded-full bg-red-500/10 blur-2xl pointer-events-none" />

                  {/* Category Badge Top-Left */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-red-600 text-white shadow-xs">
                      {modalProduct.category || selectedCategory}
                    </span>
                  </div>

                  {/* Machine Center Image */}
                  <div className="relative z-10 w-full max-w-[300px] h-[230px] sm:h-[260px] flex items-center justify-center my-4">
                    <img
                      src={getLocalProductImage(modalProduct.mainImage || modalProduct.image)}
                      alt={modalProduct.mainTitle || modalProduct.name}
                      className="w-full h-full object-contain drop-shadow-[0_16px_30px_rgba(0,0,0,0.18)] transition-transform duration-300 hover:scale-105"
                    />
                  </div>

                  {/* Floor Shadow */}
                  <div className="w-[70%] h-3.5 bg-slate-900/15 rounded-[100%] blur-md pointer-events-none" />
                </div>

                {/* -----------------------------------------------------------
                    RIGHT COLUMN: Title, Description & Action Buttons
                   ----------------------------------------------------------- */}
                <div className="md:w-1/2 p-6 sm:p-8 flex flex-col justify-between">
                  <div className="space-y-4 pt-2">
                    {/* Machine Title */}
                    <div>
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-red-600 block mb-1">
                        ICON PACKTECH MACHINERY
                      </span>
                      <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 leading-tight">
                        {modalProduct.mainTitle || modalProduct.name}
                      </h3>
                    </div>

                    {/* Description */}
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                      {modalProduct.mainDesription || modalProduct.description}
                    </p>
                  </div>

                  {/* Action CTA Buttons */}
                  <div className="pt-6 mt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center gap-3">
                    <button
                      type="button"
                      onClick={() => {
                        closeModal();
                        if (onNavigate) {
                          onNavigate('/contact-us');
                        } else {
                          window.location.href = '/contact-us';
                        }
                      }}
                      className="w-full sm:flex-1 py-3 px-5 rounded-full bs-mix-red hover:opacity-95 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-sm hover:shadow-md transition-all active:scale-95 cursor-pointer"
                    >
                      <PhoneCall className="w-4 h-4" />
                      <span>Get Quote</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => handleNavigate(modalProduct)}
                      className="w-full sm:flex-1 py-3 px-5 rounded-full bg-white hover:bg-slate-50 text-slate-800 border border-slate-300 font-bold text-xs sm:text-sm flex items-center justify-center gap-2 hover:border-red-400 transition-all active:scale-95 cursor-pointer"
                    >
                      <span>View Specs</span>
                      <ArrowRight className="w-4 h-4 text-red-600" />
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}
