import React from 'react';

const machines = [
  {
    id: 1,
    name: "Thermoforming Vacuum Packing",
    image: "/solution/themoforming.svg",
    fallback: "/solution/cupfiller_files/img_684d1b716887a1.38758202.svg",
    slug: "thermoforming-vacuum-packing",
  },
  {
    id: 2,
    name: "Tray Sealer",
    image: "/solution/strayslar.svg",
    fallback: "/solution/cupfiller_files/img_684d1bb3b18c26.17012882.svg",
    slug: "tray-sealer",
  },
  {
    id: 3,
    name: "Cup Filing Sealing",
    image: "/solution/cupfiller_files/img_68510368f34de1.43213721.svg",
    fallback: "/solution/cupfiller_files/img_68510368f34de1.43213721.svg",
    slug: "cup-filing-sealing",
  },
  {
    id: 4,
    name: "Vacuum Packing",
    image: "/solution/vacum.svg",
    fallback: "/solution/cupfiller_files/img_68510396e5ea96.48324112.svg",
    slug: "vacuum-packing",
  },
  {
    id: 5,
    name: "Dates Processing",
    image: "/solution/date.svg",
    fallback: "/solution/cupfiller_files/img_685103b28f0ad1.69578697.svg",
    slug: "dates-processing",
  },
  {
    id: 6,
    name: "Pick-Fill-Seal Machine",
    image: "/solution/pikfill.svg",
    fallback: "/solution/cupfiller_files/img_685103cc41e381.36111716.svg",
    slug: "pick-fill-seal-machine",
  },
  {
    id: 7,
    name: "Bulk Weighing Machine",
    image: "/solution/bulk.svg",
    fallback: "/solution/cupfiller_files/img_685104405d3292.61032677.svg",
    slug: "bulk-weighing-machine",
  },
  {
    id: 8,
    name: "Pouch Packing",
    image: "/solution/pouch.svg",
    fallback: "/solution/cupfiller_files/img_6851044f59cd21.97640301.svg",
    slug: "pouch-packing",
  },
  {
    id: 9,
    name: "General Applications",
    image: "/solution/gender.svg",
    fallback: "/solution/cupfiller_files/img_68510460ae89f5.04483434.svg",
    slug: "general-applications",
  },
];

export default function AllPackagingMachines({ onNavigate }) {
  const handleMachineClick = (slug) => {
    if (onNavigate) {
      onNavigate(`/all-packaging-machines/${slug}`);
    }
  };

  return (
    <main className="font-Poppins mx-auto flex min-h-[500px] w-[92%] flex-col pt-12 md:pt-16 pb-24 md:w-[85%] lg:w-[80%] 2xl:w-[1200px]">
      {/* Page Title */}
      <div className="mb-6 text-center">
        <h1 className="mb-4 text-2xl sm:text-3xl md:text-[36px] font-bold leading-tight tracking-tight">
          <span className="bg-[linear-gradient(38.46deg,red_0.15%,rgb(97,3,3)_98.48%)] bg-clip-text text-transparent">
            All Packaging Machines
          </span>
        </h1>
        {/* <p className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto">
          Explore our complete portfolio of high-precision industrial packaging, thermoforming, and vacuum machinery engineered for maximum throughput and reliability.
        </p> */}
      </div>

      {/* Grid of Machines */}
      <section className="mb-16 mt-6">
        <div className="mx-auto grid w-full grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 md:gap-5 justify-items-center">
          {machines.map((machine) => (
            <div
              key={machine.id}
              className="group relative cursor-pointer w-full flex justify-center"
              onClick={() => handleMachineClick(machine.slug)}
            >
              <button
                type="button"
                aria-label={`View ${machine.name} packaging machines`}
                className="relative flex h-[160px] w-full max-w-[170px] flex-col items-center justify-center rounded-[14px] border border-red-100 bg-white p-3.5 text-center shadow-sm transition-all duration-300 group-hover:shadow-xl group-hover:border-red-300 group-hover:-translate-y-1 focus:outline-none"
              >
                {/* Top-Right Fevicon Corner Badge */}
                <div
                  className="pointer-events-none absolute right-0 top-0 h-8 w-8 rounded-bl-[14px] rounded-tr-[14px] flex items-center justify-center"
                  aria-hidden="true"
                >
                  <img
                    src="/fevicon.png"
                    alt="ICON Packtech badge"
                    width="18"
                    height="18"
                    loading="lazy"
                    className="w-4 h-4 object-contain opacity-70 group-hover:opacity-100 transition-opacity"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                </div>

                {/* Machine Icon Card */}
                <div className="relative z-10 flex flex-col items-center">
                  <div className="mb-3 flex h-16 w-16 items-center justify-center overflow-hidden rounded-[10px] bg-red-50 transition-all duration-300 group-hover:rotate-6 group-hover:bg-red-600 group-hover:shadow-md">
                    <img
                      src={machine.image}
                      alt={machine.name}
                      width="70"
                      height="64"
                      loading="lazy"
                      className="h-14 w-[64px] object-contain transition duration-300 group-hover:brightness-0 group-hover:invert"
                      onError={(e) => {
                        if (machine.fallback && e.currentTarget.src !== machine.fallback) {
                          e.currentTarget.src = machine.fallback;
                        }
                      }}
                    />
                  </div>

                  {/* Machine Name */}
                  <h3 className="flex-shrink-0 text-center text-xs font-semibold leading-tight text-gray-800 transition-colors duration-300 group-hover:text-red-600 line-clamp-2 min-h-[32px] flex items-center justify-center">
                    {machine.name}
                  </h3>
                </div>

                {/* Subtle Gradient Hover Overlay */}
                <div className="pointer-events-none absolute inset-0 rounded-[14px] bg-gradient-to-br from-red-500/0 to-red-600/0 transition-all duration-300 group-hover:from-red-500/5 group-hover:to-red-600/15" />
              </button>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

