import React, { useState, useEffect } from 'react';
import { getMachineBySlug } from '../data/productsData';
import { Zap, Gauge, ShieldCheck, Settings, ChevronLeft, ChevronRight } from 'lucide-react';

export default function ProductDetail({ machineSlug, onNavigate, onOpenBrochure }) {
  const machine = getMachineBySlug(machineSlug);

  // Gallery slider state
  const galleryImages = machine.galleryImages && machine.galleryImages.length > 0
    ? machine.galleryImages
    : [
        machine.image,
        "https://storage.server.grafizen.in/uploads/img_68788c7cb19f32.74701898.png",
        "https://storage.server.grafizen.in/uploads/img_68788c844ea600.90418384.png"
      ];

  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Automatic image change (auto-scroll)
  useEffect(() => {
    if (isPaused || galleryImages.length <= 1) return;
    const interval = setInterval(() => {
      setActiveImageIndex((prev) => (prev + 1) % galleryImages.length);
    }, 2800);
    return () => clearInterval(interval);
  }, [isPaused, galleryImages.length]);

  const handlePrevImage = () => {
    setActiveImageIndex((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1));
  };

  const handleNextImage = () => {
    setActiveImageIndex((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1));
  };

  // Fallback Why Choose Icon items if not explicitly set for this machine
  const whyChooseList = machine.whyChooseIcon || [
    { title: "Advanced Vacuum Technology", icon: "https://storage.server.grafizen.in/uploads/img_685275425190a3.80568294.svg" },
    { title: "IP65 Standards", icon: "https://storage.server.grafizen.in/uploads/img_685274b9476205.95742618.svg" },
    { title: "Extended Shelf-Life", icon: "https://storage.server.grafizen.in/uploads/img_685274cd2654b5.46202817.svg" },
    { title: "Secured Sealing", icon: "https://storage.server.grafizen.in/uploads/img_685275b340ad30.36757594.svg" },
    { title: "Consistent Quality", icon: "https://storage.server.grafizen.in/uploads/img_685275e75176a0.84652660.svg" },
    { title: "Hygienic & Safe Design", icon: "https://storage.server.grafizen.in/uploads/img_68527608ce18f6.83573098.svg" }
  ];

  // Fallback package types
  const packageTypesList = machine.packageTypes || [
    { title: "Vaccum", icon: "https://storage.server.grafizen.in/uploads/img_68526bec106af3.57506811.svg" },
    { title: "Gas Flushing", icon: "https://storage.server.grafizen.in/uploads/img_68526c095dd325.50744599.svg" }
  ];

  // Fallback packable products
  const packableProductsList = machine.packableProducts || [
    { name: "Dates", slug: "dates", image: "https://storage.server.grafizen.in/uploads/img_68525d9a2dcf93.05254114.svg" },
    { name: "Paneer & Cheese", slug: "paneer-cheese", image: "https://storage.server.grafizen.in/uploads/img_68525d019bd7e2.10412371.svg" },
    { name: "Ready & Cooked Meals", slug: "ready-cooked-meals", image: "https://storage.server.grafizen.in/uploads/img_685264f7757a75.00598401.svg" },
    { name: "Pulses & Produce", slug: "pulses-produce", image: "https://storage.server.grafizen.in/uploads/img_685265432ad011.25602623.svg" },
    { name: "Meal & Poultry", slug: "meal-poultry", image: "https://storage.server.grafizen.in/uploads/img_685265f0ca2c29.41853294.svg" },
    { name: "Sea Food", slug: "sea-food", image: "https://storage.server.grafizen.in/uploads/img_685265f9b6bb31.90920568.png" },
    { name: "Fruits & Vegetables", slug: "fruits-vegetables", image: "https://storage.server.grafizen.in/uploads/img_6852661d0190e7.85949861.png" },
    { name: "Plastic Granules", slug: "plastic-granules", image: "https://storage.server.grafizen.in/uploads/img_685268c28de331.77545279.png" }
  ];

  // Fallback technical specifications
  const techSpecs = machine.techSpecsGrouped || [
    {
      category: "Production Capacity",
      items: [
        { label: "Production Capacity:", value: "2 to 3 Cycles per Minute" },
        { label: "Product to be Filled:", value: "Food Products, Agriculture Products, Pharmaceuticals, Electronics, Industrial Products, etc." }
      ]
    },
    {
      category: "Machine Specification",
      items: [
        { label: "Vacuum Chamber Size:", value: "740 x 550 x 100 mm" },
        { label: "Sealing Length:", value: "680 mm" },
        { label: "Sealing Width:", value: "8 mm" },
        { label: "No. of Sealing Bar:", value: "2" },
        { label: "Distance (Between 2 Sealing Bars):", value: "435 mm" }
      ]
    },
    {
      category: "Electrical Specification",
      items: [
        { label: "Control System:", value: "Timer Based Digital Electric Control System" },
        { label: "Power Supply:", value: "890 W (440 V AC)" },
        { label: "Vacuum Pump:", value: "35 m3 / h" }
      ]
    },
    {
      category: "Machine Structure",
      items: [
        { label: "Body Construction:", value: "All Stainless Steel" },
        { label: "Vacuum Chamber:", value: "Hygienic Stainless Steel" },
        { label: "Machine Length:", value: "~ 1670 mm" },
        { label: "Machine Width:", value: "~ 700 mm" },
        { label: "Machine Height:", value: "~ 750 mm" },
        { label: "Machine Weight:", value: "~ 350 Kg." }
      ]
    }
  ];

  return (
    <main className="font-Poppins pt-[60px] md:pt-[90px]">
      {/* ================= 1. HERO BANNER SECTION ================= */}
      <section className="relative mx-auto w-[98%] overflow-hidden rounded-[30px] 
      bg-[linear-gradient(125deg,#B3241E_0%,#D61F1A_38%,#A81914_75%,#8C130F_100%)]
      md:w-[92%] lg:w-[85%] 2xl:w-[82%] shadow-2xl">
        {/* Glow Spheres */}
        <div className="absolute left-[-80px] top-[-80px] h-[280px] w-[280px] rounded-full bg-white/10 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-[-60px] right-[-60px] h-[220px] w-[220px] rounded-full bg-white/10 blur-[120px] pointer-events-none" />

        <div className="relative px-6 py-16 sm:py-16 md:px-10 lg:px-16">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            {/* Left Content Column */}
            <div className="space-y-6 sm:space-y-7">
              <span className="inline-block rounded-full border border-white/30 bg-white/20 px-4 py-1.5 text-xs sm:text-sm text-white backdrop-blur-md">
                {machine.tag || "Industrial Packaging"}
              </span>

              <h1 className="text-3xl font-bold  text-white sm:text-4xl md:text-5xl md:leading-[1.2] leading-[1.6]">
                {machine.title}
              </h1>

              <p className="max-w-[520px] text-[15px] sm:text-[16px] leading-7 text-white/85 md:text-lg">
                {machine.tagline}
              </p>

              {/* 2x2 Features Grid */}
              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/20">
                {/* Feature 1: High Speed */}
                <div className="flex items-start gap-3">
                  <Zap className="mt-1 h-3 md:h-5 w-3 text-white shrink-0" />
                  <div>
                    <p className="text-[14px] font-semibold text-white">High Speed</p>
                    <p className="text-[12px] text-white/70">Optimized for fast production cycles</p>
                  </div>
                </div>

                {/* Feature 2: Precision */}
                <div className="flex items-start gap-3">
                  <Gauge className="mt-1 md:h-5 md:w-5 h-3 w-3 text-white shrink-0" />
                  <div>
                    <p className="text-[14px] font-semibold text-white">Precision</p>
                    <p className="text-[12px] text-white/70">Accurate filling &amp; sealing system</p>
                  </div>
                </div>

                {/* Feature 3: Reliable */}
                <div className="flex items-start gap-3">
                  <ShieldCheck className="mt-1 md:h-5 md:w-5 h-3 w-3 text-white shrink-0" />
                  <div>
                    <p className="text-[14px] font-semibold text-white">Reliable</p>
                    <p className="text-[12px] text-white/70">Consistent performance output</p>
                  </div>
                </div>

                {/* Feature 4: Customizable */}
                <div className="flex items-start gap-3">
                  <Settings className="mt-1 md:h-5 md:w-5 h-3 w-3 text-white shrink-0" />
                  <div>
                    <p className="text-[14px] font-semibold text-white">Customizable</p>
                    <p className="text-[12px] text-white/70">Flexible configuration options</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Machine 3D Container Column */}
            <div className="relative flex justify-center items-center">
              <div className="relative flex h-[400px] sm:h-[420px] md:h-[480px] w-full max-w-[480px] items-center justify-center overflow-hidden rounded-[30px] border border-white/20 bg-white p-6 shadow-[0_20px_80px_rgba(0,0,0,0.25)]">
                <img
                  src={machine.image}
                  alt={machine.title}
                  width="480"
                  height="500"
                  loading="eager"
                  fetchPriority="high"
                  decoding="async"
                  className="relative z-10 max-h-[90%] w-full object-contain transition-transform duration-500 hover:scale-105"
                  onError={(e) => {
                    e.currentTarget.src = '/home/thermoforming/first.png';
                  }}
                />
              </div>
              <div className="absolute bottom-[-10px] h-[30px] w-[70%] rounded-full bg-black/30 blur-[30px] pointer-events-none" />
            </div>
          </div>
        </div>
      </section>

      {/* ================= 2. INTERACTIVE PRODUCT IMAGES SLIDER ================= */}
      <section className="mx-auto flex py-[40px] md:py-[50px] md:w-[68%] 2xl:w-[1330px]">
        <div 
          className="relative mx-auto flex w-full max-w-5xl items-center justify-center overflow-hidden py-8 md:py-12"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Previous Arrow */}
          <button
            type="button"
            onClick={handlePrevImage}
            aria-label="Previous product image"
            className="absolute left-4 sm:left-12 z-20 rounded-full bg-white p-2.5 shadow-md transition-transform duration-200 hover:scale-110 cursor-pointer focus:outline-none"
          >
            <ChevronLeft className="h-6 w-6 text-gray-800" />
          </button>

          {/* Centered Gallery Display (Only Center Image with Automatic Slide Transition) */}
          <div className="relative h-[330px] w-[280px] sm:h-[360px] sm:w-[320px] overflow-hidden rounded-2xl border-[1.3px] border-[#aeaeae] bg-white shadow-xl">
            {galleryImages.map((imgSrc, idx) => {
              const isCurrent = idx === activeImageIndex;
              return (
                <div
                  key={idx}
                  className={`absolute inset-0 p-4 flex items-center justify-center transition-all duration-700 ease-in-out ${
                    isCurrent
                      ? 'opacity-100 transform translate-x-0 scale-100 z-10'
                      : 'opacity-0 transform translate-x-12 scale-95 pointer-events-none'
                  }`}
                >
                  <img
                    src={imgSrc}
                    alt={`${machine.title} - view ${idx + 1}`}
                    width="300"
                    height="350"
                    loading="lazy"
                    className="h-full w-full object-contain select-none"
                    onError={(e) => {
                      e.currentTarget.src = '/home/thermoforming/first.png';
                    }}
                  />
                </div>
              );
            })}
          </div>

          {/* Next Arrow */}
          <button
            type="button"
            onClick={handleNextImage}
            aria-label="Next product image"
            className="absolute right-4 sm:right-12 z-20 rounded-full bg-white p-2.5 shadow-md transition-transform duration-200 hover:scale-110 cursor-pointer focus:outline-none"
          >
            <ChevronRight className="h-6 w-6 text-gray-800" />
          </button>
        </div>
      </section>

      {/* ================= 3. DOWNLOAD SHEET CTA ================= */}
      <section className="bg-white py-6 md:py-8">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <a
            href={machine.pdfSheetUrl || "https://storage.server.grafizen.in/uploads/img_68b96a1834a003.08049055.pdf"}
            download=""
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => {
              if (onOpenBrochure) {
                // Also trigger brochure modal if preferred
              }
            }}
            className="inline-block rounded-md bg-red-600 px-8 py-3.5 text-sm sm:text-base font-semibold text-white tracking-wide transition-all duration-300 hover:bg-red-700 hover:shadow-lg cursor-pointer"
          >
            DOWNLOAD SHEET
          </a>
        </div>
      </section>

      {/* ================= 4. WHY CHOOSE ICON SOLUTION ================= */}
      <section className="py-14 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl sm:text-3xl font-bold text-gray-900">
              Why Choose Icon Solution
            </h2>
            <p className="mx-auto max-w-2xl  sm:text-base text-gray-600">
              Advanced features designed for maximum efficiency and reliability in your packaging operations
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4 sm:gap-5 md:flex md:flex-wrap md:justify-center md:w-full w-[80%] mx-auto">
            {whyChooseList.map((item, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center justify-center rounded-xl border border-gray-200 bg-white p-4 shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1 w-full sm:w-[170px] md:w-[175px]"
              >
                <div className="mx-auto mb-4 h-16 w-16 flex items-center justify-center">
                  <img
                    src={item.icon}
                    alt={item.title}
                    width="64"
                    height="64"
                    loading="lazy"
                    className="h-full w-full object-contain"
                  />
                </div>
                <h3 className="mb-2 text-center text-[14px] sm:text-[15px] font-normal text-gray-900 leading-snug">
                  {item.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= 5. TYPES OF PACKAGES ================= */}
      <section className="bg-white py-14 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl sm:text-3xl font-bold text-gray-900 uppercase tracking-tight">
              TYPES OF PACKAGES
            </h2>
            <p className=" sm:text-base text-gray-600">
              Versatile packaging options for different product requirements
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            {packageTypesList.map((pkg, idx) => (
              <div
                key={idx}
                className="group relative cursor-pointer"
              >
                <div className="relative h-[140px] w-[150px] sm:h-[150px] sm:w-[180px] rounded-[14px] border border-red-100 bg-white p-3 sm:p-5 shadow-md transition-all duration-500 group-hover:shadow-2xl flex flex-col items-center justify-center">
                  {/* Top-Right Fevicon Corner Badge */}
                  <div
                    className="pointer-events-none absolute right-0 top-0 h-8 w-8"
                    aria-hidden="true"
                  >
                    <img
                      src="/fevicon.png"
                      alt="ICON Packtech badge"
                      width="20"
                      height="20"
                      loading="lazy"
                      className="w-4 pt-2 md:w-5 md:pt-2.5 opacity-70 group-hover:opacity-100 transition-opacity"
                    />
                  </div>

                  <div className="relative z-10 flex h-full flex-col items-center justify-center">
                    <div className="mb-3 flex h-12 w-12 sm:h-16 sm:w-16 items-center justify-center overflow-hidden rounded-[10px] bg-red-50 transition-all duration-300 group-hover:rotate-12 group-hover:bg-red-500">
                      <img
                        src={pkg.icon}
                        alt={pkg.title}
                        width="70"
                        height="64"
                        loading="lazy"
                        className="w-[50px] sm:w-[65px] object-contain transition duration-300 group-hover:brightness-0 group-hover:invert"
                      />
                    </div>
                    <h3 className="line-clamp-2 text-center text-[11px] sm:text-xs font-semibold leading-tight text-gray-800 transition-colors duration-300 group-hover:text-red-700">
                      {pkg.title}
                    </h3>
                  </div>

                  <div className="pointer-events-none absolute inset-0 rounded-[14px] bg-gradient-to-br from-red-500/0 to-red-600/0 transition-all duration-500 group-hover:from-red-500/10 group-hover:to-red-600/20" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= 6. PRODUCTS THAT CAN BE PACKED ================= */}
      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 text-center md:mb-12">
            <h2 className="mb-3 text-[26px] sm:text-[26px] md:text-3xl font-bold text-gray-900 uppercase tracking-tight">
              PRODUCTS THAT CAN BE PACKED
            </h2>
            <p className="text-sm text-gray-600 md:text-base">
              Wide range of products that can be efficiently packaged
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:gap-4 md:flex md:flex-wrap md:justify-center md:gap-5">
            {packableProductsList.map((prod, idx) => (
              <div
                key={idx}
                onClick={() => onNavigate && onNavigate(`/packaging-as-per-product/${prod.slug}`)}
                className="group relative w-full cursor-pointer md:w-auto"
              >
                <div className="relative h-[140px] w-full rounded-[14px] border border-red-100 bg-white p-3 shadow-md transition-all duration-500 group-hover:shadow-2xl md:h-[150px] md:w-[170px] lg:w-[180px] md:p-5 flex flex-col items-center justify-center">
                  {/* Top-Right Fevicon Corner Badge */}
                  <div
                    className="pointer-events-none absolute right-0 top-0 h-8 w-8"
                    aria-hidden="true"
                  >
                    <img
                      src="/fevicon.png"
                      alt="ICON Packtech badge"
                      width="20"
                      height="20"
                      loading="lazy"
                      className="w-4 pt-2 md:w-5 md:pt-2.5 opacity-70 group-hover:opacity-100 transition-opacity"
                    />
                  </div>

                  <div className="relative z-10 flex h-full flex-col items-center justify-center">
                    <div className="mb-3 flex h-12 w-12 items-center justify-center overflow-hidden rounded-[10px] bg-red-50 transition-all duration-300 group-hover:rotate-12 group-hover:bg-red-500 md:mb-4 md:h-16 md:w-16">
                      <img
                        src={prod.image}
                        alt={prod.name}
                        width="70"
                        height="64"
                        loading="lazy"
                        className="w-[50px] sm:w-[55px] md:w-[65px] object-contain transition duration-300 group-hover:brightness-0 group-hover:invert"
                      />
                    </div>
                    <h3 className="line-clamp-2 text-center text-[11px] font-semibold leading-tight text-gray-800 transition-colors duration-300 group-hover:text-red-700 md:text-xs">
                      {prod.name}
                    </h3>
                  </div>

                  <div className="pointer-events-none absolute inset-0 rounded-[14px] bg-gradient-to-br from-red-500/0 to-red-600/0 transition-all duration-500 group-hover:from-red-500/10 group-hover:to-red-600/20" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= 7. TECHNICAL SPECIFICATIONS ================= */}
      <section className="bg-white py-14 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-2xl sm:text-3xl font-bold text-gray-900 uppercase tracking-tight">
              TECHNICAL SPECIFICATIONS
            </h2>
            <p className="text-sm sm:text-base text-gray-600">
              In-depth technical breakdown of our machine’s performance and features
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {techSpecs.map((group, idx) => (
              <div
                key={idx}
                className="group relative overflow-hidden rounded-xl border border-gray-300 bg-white p-4 shadow-lg md:rounded-2xl md:p-5 transition-shadow hover:shadow-xl"
              >
                {/* Red Left Accent Border */}
                <div className="absolute left-0 top-0 h-full w-1 bg-red-600" />

                <div className="flex flex-col gap-3 pl-3 md:gap-4">
                  <h3 className="text-[14px] font-bold tracking-wide text-gray-900 md:text-[16px]">
                    {group.category}
                  </h3>

                  <div className="flex flex-wrap gap-2 sm:gap-2.5">
                    {group.items.map((spec, specIdx) => (
                      <div
                        key={specIdx}
                        className="relative flex items-start gap-2 rounded-lg bg-gray-100 px-2.5 py-1.5 text-[11px] sm:text-[12px] transition-all duration-300 hover:bg-red-50 lg:rounded-full"
                      >
                        <span className="whitespace-nowrap font-medium text-gray-600">
                          {spec.label}
                        </span>
                        <span className="break-words font-semibold text-gray-900">
                          {spec.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= 8. YOUTUBE VIDEO SECTION ================= */}
      <section className="mx-auto mb-16 flex h-[320px] sm:h-[420px] md:h-[500px] w-[92%] max-w-7xl items-center justify-center rounded-[12px] border-[1.5px] border-red-600 bg-white md:w-[80%] shadow-lg overflow-hidden">
        <div className="h-full w-full overflow-hidden rounded-[10px]">
          <iframe
            className="h-full w-full"
            src={machine.youtubeUrl || "https://www.youtube.com/embed/yhfhAEMulME"}
            title={`${machine.title} video`}
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
      </section>

      {/* ================= 9. READY TO TRANSFORM YOUR PACKAGING? CTA ================= */}
      <section className="mx-auto mb-12 w-[92%] rounded-[14px] 
      bg-gradient-to-r from-[#DB241F] via-[#C71F1A] to-[#B31A15]
      py-10 md:w-[75%] lg:w-[70%] shadow-xl">
        {/* bg-gradient-to-r from-red-600 to-red-700  */}
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="mb-4 text-3xl sm:text-3xl font-bold text-white">
            Ready to Transform Your Packaging?
          </h2>
          <p className="mb-8 text-xl sm:text-xl text-red-100">
            Get in touch with our experts for a customized solution that fits your needs
          </p>
          <button
            type="button"
            onClick={() => onNavigate && onNavigate('/contact-us')}
            className="rounded-lg bg-white px-8 py-3 font-semibold text-red-600 transition-all duration-300 hover:bg-gray-100 hover:shadow-lg cursor-pointer  sm:text-base"
          >
            Request Quote
          </button>
        </div>
      </section>
    </main>
  );
}
