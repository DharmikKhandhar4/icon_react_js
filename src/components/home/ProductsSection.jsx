import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  Zap,
  Gauge,
  Cpu,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Eye,
  Layers,
  Sparkles,
  PhoneCall,
  FileText,
} from 'lucide-react';

const getLocalProductImage = (src) => {
  if (!src) return '/product-image/Product1.png';
  return src;
};

// Rich technical metadata for machines displayed in the centered showcase modal
const MACHINE_EXTRA_DETAILS = {
  "inline-tray": {
    modelCode: "IP-TS 500 INLINE",
    speed: "60 - 120 Trays / Min",
    vacuum: "MAP Gas Flush (< 0.5% Residual O2)",
    power: "3-Phase 415V / 50Hz, 4.5 kW",
    build: "Full SS-304 Sanitary Stainless Steel",
    tagline: "Industrial MAP tray sealing with continuous servo motion",
    applications: ["Fresh Meat", "Seafood", "Ready Meals", "Poultry", "Cut Produce", "Sweets"],
    description:
      "Fully automated inline tray sealing system engineered for Modified Atmosphere Packaging (MAP). Features precision vacuum evacuation and gas-flushing matrix that quadruples fresh product shelf-life without chemical preservatives.",
    highlights: [
      "Continuous servo-driven tray indexing system",
      "Digital PID temperature control for hermetic film sealing",
      "Tool-less quick mold changeover in under 15 minutes",
      "IP-65 washdown compliant stainless steel body",
    ],
  },
  "continuous-tray": {
    modelCode: "IP-CTS 700 AUTO",
    speed: "80 - 160 Trays / Min",
    vacuum: "Continuous Multi-Lane MAP Evacuation",
    power: "3-Phase 415V / 50Hz, 6.0 kW",
    build: "Washdown SS-304 Sanitary Construction",
    tagline: "High-capacity non-stop tray sealing for 24/7 continuous lines",
    applications: ["Industrial Food Plants", "Ready Meals", "Fresh Produce", "Bakery", "Sweets"],
    description:
      "Continuous-motion tray sealing machine designed for high-capacity industrial production lines. Delivers rapid, uninterrupted heat-sealing with automated waste film rewinding and synchronized discharge conveyors.",
    highlights: [
      "Non-stop continuous motion high-speed sealing",
      "Automatic waste film trimming and motorized auto-rewind",
      "PLC color touchscreen recipe management",
      "Hermetic leak-proof perimeter knife seal",
    ],
  },
  "linear-cup": {
    modelCode: "IP-LCF 300 MULTI",
    speed: "100 - 220 Cups / Min",
    vacuum: "±0.2g High-Precision Servo Volumetric Dosing",
    power: "3-Phase 415V / 50Hz, 5.5 kW",
    build: "Food/Pharma SS-316 Contact Parts & SS-304 Frame",
    tagline: "Sterile multi-lane volumetric cup filling and roll-film sealing line",
    applications: ["Curd & Yogurt", "Dips & Sauces", "Jam & Cream", "Desserts", "Liquid Pharma"],
    description:
      "Ultra-clean multi-lane linear cup filling and roll-film sealing line. Equipped with automated cup de-nesting, servo volumetric piston dosing, UV sterilization, roll-stock heat-sealing, and automated tray discharge.",
    highlights: [
      "Multi-lane synchronized cup de-nesting & indexing",
      "Anti-drip servo cutoff volumetric nozzles",
      "Clean-in-Place (CIP) automated washdown ready",
      "UV foil sterilization & integrated date coder",
    ],
  },
  "thermoforming": {
    modelCode: "ITF - 400 PRO",
    speed: "8 - 14 Cycles / Min (up to 200 packs/min)",
    vacuum: "Deep Vacuum down to 2 mbar with German Pump",
    power: "3-Phase 415V / 50Hz, 12.0 kW",
    build: "Heavy-Duty Modular SS-304 Washdown Body",
    tagline: "Horizontal rollstock thermoforming with airtight vacuum packaging",
    applications: ["Paneer & Cheese", "Dates", "Frozen Meat", "Seafood", "Medical Kits", "Hardware"],
    description:
      "State-of-the-art horizontal rollstock thermoforming machine. Automatically forms bottom pockets from film roll, loads product, extracts air down to 2 mbar, and seals top film with razor-sharp perimeter trimming.",
    highlights: [
      "High-vacuum German Busch vacuum pump integrated",
      "Servo-driven chain gripper film transport",
      "Modular tooling for rapid pocket shape change",
      "Automated cross-cut and rotary perimeter slitting",
    ],
  },
  "double-chamber": {
    modelCode: "IP-DC 800 HEAVY",
    speed: "2 - 4 Cycles / Min (Dual Chamber Alternate)",
    vacuum: "< 1 mbar Deep Industrial Vacuum",
    power: "3-Phase 415V / 50Hz, 3.2 kW",
    build: "Seamless Heavy-Gauge SS-304 Chamber",
    tagline: "Heavy-duty dual chamber vacuum packaging with 100% duty cycle",
    applications: ["Bulk Spices", "Pulses & Grains", "Paneer Blocks", "Frozen Seafood", "Chemicals"],
    description:
      "Dual-chamber heavy-duty industrial vacuum packaging machine. While one chamber undergoes automated vacuum and heat-sealing, the operator loads bags in the adjacent chamber, maximizing continuous throughput.",
    highlights: [
      "Dual-side alternating operation eliminates idle loading time",
      "High-flow Busch vacuum pump for fast evacuation",
      "Double-weld heavy-duty seal bars for thick laminates",
      "Ergonomic counterbalanced swinging chamber hood",
    ],
  },
  "vffs-pharma": {
    modelCode: "IP-VFFS 6H MULTI",
    speed: "60 - 120 Pouches / Min",
    vacuum: "±0.1g - 0.5g Electronic Combination Weigher",
    power: "3-Phase 415V / 50Hz, 4.8 kW",
    build: "Pharma-Grade SS-304 / SS-316 Contact Parts",
    tagline: "Vertical form-fill-seal system with computer combination weigher",
    applications: ["Pharma Powders", "Granules", "Tablets", "Spices", "Confectionery", "Dry Fruits"],
    description:
      "High-speed vertical form-fill-seal system equipped with multi-head electronic combination weigher. Delivers sterile, hermetically sealed pillow pouches with automated nitrogen flushing.",
    highlights: [
      "Multi-head electronic combination weigher with IP-65 washdown",
      "Twin belt servo film pulling for delicate laminate films",
      "Pneumatically operated cross-seal jaws with digital PID",
      "Integrated nitrogen gas flushing for extended shelf-life",
    ],
  },
};

const getProductDetails = (product) => {
  const id = String(product?._id || product?.id || "").toLowerCase();
  const matchedKey = Object.keys(MACHINE_EXTRA_DETAILS).find((k) => id.includes(k));
  const fallback = MACHINE_EXTRA_DETAILS["inline-tray"];
  return matchedKey ? MACHINE_EXTRA_DETAILS[matchedKey] : fallback;
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

  // Centered Large Modal State
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

  // Smooth hover open with debounce
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
      }, 350);
    }
  };

  // Card click locks modal open until explicitly closed
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

  const activeSpecs = modalProduct ? getProductDetails(modalProduct) : null;

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
              Explore our industrial packaging machinery — hover or click any machine to open detailed specifications
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
                          <span>Quick Specs</span>
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
            CENTERED LARGE QUICK-VIEW MODAL (Opens in center of page)
            - Big, spacious design with prominent machine image
            - Complete technical specifications & applications
            - Smooth Framer Motion entrance & exit
           =================================================================== */}
        <AnimatePresence>
          {modalProduct && (
            <div className="fixed inset-0 z-[999] flex items-center justify-center p-3 sm:p-6 md:p-8">
              {/* Dark Blur Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.22 }}
                onClick={closeModal}
                className="fixed inset-0 bg-slate-950/75 backdrop-blur-md cursor-pointer"
              />

              {/* Centered Large Modal Box */}
              <motion.div
                initial={{ opacity: 0, scale: 0.94, y: 16 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.94, y: 16 }}
                transition={{ type: "spring", damping: 26, stiffness: 320 }}
                onMouseEnter={() => {
                  if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
                }}
                onMouseLeave={() => {
                  if (!isLockedOpen) {
                    closeTimeoutRef.current = setTimeout(() => {
                      setModalProduct(null);
                    }, 320);
                  }
                }}
                className="relative z-10 w-full max-w-[960px] max-h-[90vh] bg-white rounded-3xl shadow-[0_25px_70px_-15px_rgba(0,0,0,0.5)] border border-slate-100 overflow-hidden flex flex-col md:flex-row"
              >
                {/* Close Button */}
                <button
                  type="button"
                  onClick={closeModal}
                  aria-label="Close modal"
                  className="absolute top-4 right-4 z-30 w-9 h-9 rounded-full bg-white/90 hover:bg-slate-100 text-slate-500 hover:text-slate-900 border border-slate-200 flex items-center justify-center transition-colors shadow-sm cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* -----------------------------------------------------------
                    LEFT COLUMN: Large Image & Visual Studio Showcase
                   ----------------------------------------------------------- */}
                <div className="md:w-5/12 bg-gradient-to-br from-slate-50 via-rose-50/25 to-slate-100 p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden border-b md:border-b-0 md:border-r border-slate-200/80">
                  {/* Subtle Background Radial Glow */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] h-[320px] rounded-full bg-red-500/10 blur-3xl pointer-events-none" />

                  {/* Header Badges */}
                  <div className="relative z-10 flex items-center justify-between gap-2">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-red-600 text-white shadow-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                      {modalProduct.category || selectedCategory}
                    </span>
                    <span className="px-2.5 py-1 rounded-md text-[11px] font-mono font-bold text-slate-700 bg-white/80 border border-slate-200 shadow-xs">
                      {activeSpecs?.modelCode || "ICON PRO"}
                    </span>
                  </div>

                  {/* Machine Center Showcase Image */}
                  <div className="relative z-10 my-auto py-6 flex flex-col items-center justify-center">
                    <div className="relative w-full max-w-[340px] aspect-[4/3] flex items-center justify-center">
                      <img
                        src={getLocalProductImage(modalProduct.mainImage || modalProduct.image)}
                        alt={modalProduct.mainTitle || modalProduct.name}
                        className="w-full h-full object-contain drop-shadow-[0_20px_35px_rgba(0,0,0,0.22)] filter transition-transform duration-300 hover:scale-105"
                      />
                    </div>
                    {/* Floor Shadow */}
                    <div className="w-[75%] h-4 bg-slate-900/15 rounded-[100%] blur-md mt-1 pointer-events-none" />
                  </div>

                  {/* Bottom Trust Badges */}
                  <div className="relative z-10 pt-4 border-t border-slate-200/70 flex items-center justify-between text-[11px] font-mono text-slate-600">
                    <span className="inline-flex items-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5 text-red-600" />
                      SS-304 Sanitary Build
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                      ISO 9001:2015
                    </span>
                  </div>
                </div>

                {/* -----------------------------------------------------------
                    RIGHT COLUMN: Full Machine Information & Specifications
                   ----------------------------------------------------------- */}
                <div className="md:w-7/12 p-6 sm:p-8 overflow-y-auto max-h-[85vh] flex flex-col justify-between">
                  <div className="space-y-5">
                    {/* Machine Title & Tagline */}
                    <div>
                      <h3 className="text-xl sm:text-2xl lg:text-[26px] font-extrabold text-slate-900 leading-tight">
                        {modalProduct.mainTitle || modalProduct.name}
                      </h3>
                      {activeSpecs?.tagline && (
                        <p className="text-xs sm:text-sm font-semibold text-icon mt-1">
                          {activeSpecs.tagline}
                        </p>
                      )}
                    </div>

                    {/* Full Product Description */}
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                      {activeSpecs?.description || modalProduct.mainDesription || modalProduct.description}
                    </p>

                    {/* Technical Specifications 2x2 Grid */}
                    <div className="space-y-2">
                      <div className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
                        <Cpu className="w-3.5 h-3.5 text-red-600" />
                        <span>Technical Specifications:</span>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {/* Speed */}
                        <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-3 flex items-start gap-2.5">
                          <div className="w-8 h-8 rounded-lg bg-red-100 flex items-center justify-center flex-shrink-0 text-red-600">
                            <Zap className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="text-[10px] font-mono uppercase text-slate-500">Output Speed</div>
                            <div className="text-xs sm:text-sm font-bold text-slate-900">
                              {activeSpecs?.speed || "Up to 120 Packs/min"}
                            </div>
                          </div>
                        </div>

                        {/* Vacuum / Sealing */}
                        <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-3 flex items-start gap-2.5">
                          <div className="w-8 h-8 rounded-lg bg-red-100 flex items-center justify-center flex-shrink-0 text-red-600">
                            <Gauge className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="text-[10px] font-mono uppercase text-slate-500">Sealing / Vacuum</div>
                            <div className="text-xs sm:text-sm font-bold text-slate-900 line-clamp-1">
                              {activeSpecs?.vacuum || "Hermetic Seal"}
                            </div>
                          </div>
                        </div>

                        {/* Power */}
                        <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-3 flex items-start gap-2.5">
                          <div className="w-8 h-8 rounded-lg bg-slate-200 flex items-center justify-center flex-shrink-0 text-slate-700">
                            <Cpu className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="text-[10px] font-mono uppercase text-slate-500">Power Rating</div>
                            <div className="text-xs sm:text-sm font-bold text-slate-900">
                              {activeSpecs?.power || "3-Phase 415V / 50Hz"}
                            </div>
                          </div>
                        </div>

                        {/* Construction */}
                        <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-3 flex items-start gap-2.5">
                          <div className="w-8 h-8 rounded-lg bg-slate-200 flex items-center justify-center flex-shrink-0 text-slate-700">
                            <ShieldCheck className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="text-[10px] font-mono uppercase text-slate-500">Hygiene Standard</div>
                            <div className="text-xs sm:text-sm font-bold text-slate-900 line-clamp-1">
                              {activeSpecs?.build || "SS-304 Sanitary"}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Suitable Applications */}
                    {activeSpecs?.applications && (
                      <div className="space-y-1.5">
                        <div className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
                          <Layers className="w-3.5 h-3.5 text-red-600" />
                          <span>Suitable Packaging Products:</span>
                        </div>
                        <div className="flex flex-wrap gap-1.5">
                          {activeSpecs.applications.map((item, idx) => (
                            <span
                              key={idx}
                              className="px-2.5 py-1 rounded-md text-xs font-medium bg-red-50 text-red-700 border border-red-100"
                            >
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Key Highlights */}
                    {activeSpecs?.highlights && (
                      <div className="space-y-1.5">
                        <div className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-500">
                          Key Advantages:
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                          {activeSpecs.highlights.map((highlight, idx) => (
                            <div key={idx} className="flex items-start gap-1.5 text-xs text-slate-700">
                              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                              <span>{highlight}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Modal Action CTA Buttons */}
                  <div className="pt-6 mt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center gap-3">
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
                      className="w-full sm:flex-1 py-3 px-5 rounded-full bs-mix-red hover:opacity-95 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all active:scale-95 cursor-pointer"
                    >
                      <PhoneCall className="w-4 h-4" />
                      <span>Get Instant Quote</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => handleNavigate(modalProduct)}
                      className="w-full sm:flex-1 py-3 px-5 rounded-full bg-white hover:bg-slate-50 text-slate-800 border border-slate-300 font-bold text-xs sm:text-sm flex items-center justify-center gap-2 hover:border-red-400 transition-all active:scale-95 cursor-pointer"
                    >
                      <span>View Full Machine Page</span>
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
