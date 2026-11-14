import React from "react";
import { Download } from "lucide-react";

export default function BlogDetail({ onNavigate, onOpenBrochure }) {
  const brochurePdfUrl =
    "https://storage.server.grafizen.in/uploads/img_68b96a1834a003.08049055.pdf";

  const handleBrochureClick = () => {
    if (onOpenBrochure) {
      onOpenBrochure();
    } else {
      window.open(brochurePdfUrl, "_blank");
    }
  };

  return (
    <main className="font-Poppins min-h-screen bg-white pt-6 md:pt-10 pb-20 text-gray-800">
      <article className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-5">
        {/* ================= 1. FEATURED HERO BANNER IMAGE ================= */}
        <div className="w-full overflow-hidden rounded-2xl mb-4 shadow-sm border border-gray-100">
          <img
            src="/banners/anuga-2026.jpg"
            alt="Icon Packtech at ANUGA Food Tec 2026: Showcasing Next-Gen Packaging Solutions"
            width="1024"
            height="450"
            className="w-full h-auto object-cover rounded-2xl"
            loading="eager"
            fetchPriority="high"
            decoding="async"
            onError={(e) => {
              e.currentTarget.src =
                "https://storage.server.grafizen.in/uploads/img_6ad74c460f4b70.18245951.jpg";
            }}
          />
        </div>

        {/* ================= 2. TITLE & DOWNLOAD BROCHURE BUTTON ================= */}
        <div className="relative mb-6 ">
          {/* <div className="flex justify-end mb-2">
            <button
              type="button"
              onClick={handleBrochureClick}
              className="bs-mix-red text-white text-xs sm:text-sm font-semibold px-4 py-2 rounded-lg flex items-center gap-2 hover:opacity-90 transition-opacity shadow-sm cursor-pointer"
            >
              <Download className="w-4 h-4" />
              <span>Download Brochure</span>
            </button>
          </div> */}
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 leading-snug text-center mt-8">
            Icon Packtech at ANUGA Food Tec 2026:
            <br className="hidden sm:inline" /> Showcasing Next-Gen Packaging
            Solutions
          </h1>
        </div>

        {/* ================= 3. ARTICLE BODY CONTENT ================= */}
        <div className="text-[14px] sm:text-[15px] leading-relaxed text-gray-700 space-y-4">
          {/* Section 1 */}
          <section className="pt-2">
            <h2 className="text-lg sm:text-[24px] font-semibold text-gray-900 mb-3">
              The Next Chapter of Food Packaging Is About More Than Speed
            </h2>

            <p>Food manufacturing is changing rapidly.</p>
            <p>
              As distributors expand, consumer preferences evolve, and products
              travel further from processing facilities, packaging is no longer
              an afterthought. It has become an essential part of the
              manufacturing strategy.
            </p>
            <p>
              Today's food manufacturers are looking for packaging systems that
              deliver far more than speed. They require hygiene, consistency,
              product protection, efficiency, and scalability to meet growing
              market demand.
            </p>
            <p>
              This year, all eyes in the food packaging industry are on ANUGA
              Food Tec 2026, where leading manufacturers like Icon Packtech
              prepare to showcase the next generation of solutions.
            </p>
          </section>

          {/* Section 2 */}
          <section className="pt-4">
            <h2 className="text-lg sm:text-[24px] font-semibold text-gray-900 mb-3">
              Why Packaging Technology Is Becoming More Important
            </h2>
            <p>The modern food industry operates under increasing pressure.</p>
            <p>
              Consumers want fresh, hygienic products without compromise. At the
              same time, brands need extended shelf life, robust distribution
              packaging, and eye-catching retail presentation. This has
              increased the demand for technologies such as:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 my-3 text-gray-700 marker:text-gray-900">
              <li>Automatic packaging systems</li>
              <li>MAP tray sealing</li>
              <li>Vacuum packaging</li>
              <li>Advanced sealing technology</li>
              <li>Packaging automation</li>
            </ul>
            <p>The objective is not simply to pack more products.</p>
            <p>
              It is to protect product quality while making production more
              efficient.
            </p>
          </section>

          {/* Section 3 */}
          <section className="pt-4">
            <h2 className="text-lg sm:text-[24px] font-semibold text-gray-900 mb-3">
              From Automatic Packaging to Intelligent Production
            </h2>
            <p>
              Automation is becoming an increasingly important part of modern
              food manufacturing.
            </p>
            <p>
              An experienced{" "}
              <strong className="font-semibold text-gray-900">
                Automatic Packaging Machine Manufacturer
              </strong>{" "}
              focuses on creating systems that reduce manual dependency while
              improving consistency across high-volume production lines.
            </p>
            <p>Automation can deliver benefits like:</p>
            <ul className="list-disc pl-5 space-y-1.5 my-3 text-gray-700 marker:text-gray-900">
              <li>Consistent sealing</li>
              <li>Controlled atmosphere</li>
              <li>Reduced manual handling</li>
              <li>Improved hygiene</li>
              <li>Better product presentation</li>
            </ul>
            <p>
              For growing businesses, automation is not just about speed. It is
              about delivering packaging quality you can rely on minute by
              minute.
            </p>
          </section>

          {/* Section 4 */}
          <section className="pt-4">
            <h2 className="text-lg sm:text-[24px] font-semibold text-gray-900 mb-3">
              MAP and Vacuum: Two Different Approaches to Product Protection
            </h2>
            <p>
              Different food products require different packaging strategies.
            </p>
            <p>
              MAP technology can help create a modified atmosphere within the
              package, enabling products to keep naturally fresh while
              maintaining their shape and presentation for longer.
            </p>
            <p>
              Vacuum packaging, on the other hand, focuses on removing oxygen
              and creating a tight seal.
            </p>
            <p>
              Both technologies demonstrate why precision matters in modern food
              packaging.
            </p>
            <p>Packaging is becoming more application-driven.</p>
            <p>
              Instead of using the same approach for every product,
              manufacturers consider which technology works best for the
              characteristics of the food, production requirements, and intended
              packaging performance.
            </p>
          </section>

          {/* Section 5 */}
          <section className="pt-4">
            <h2 className="text-lg sm:text-[24px] font-semibold text-gray-900 mb-3">
              What ANUGA Food Tec 2026 Means for the Industry
            </h2>
            <p>
              Industry exhibitions provide more than an opportunity to display
              machinery.
            </p>
            <p>
              They bring together food technology professionals, manufacturers,
              and industry partners looking for answers to the biggest
              challenge: the next generation of food packaging.
            </p>
            <p>
              For Icon Packtech, participating in ANUGA Food Tec 2026 represents
              a commitment to demonstrating packaging capabilities engineered
              with modern manufacturing in mind.
            </p>
            <p>
              Visitors can expect to see packaging technologies designed for
              real-world manufacturing environments, built around the specific
              production requirements manufacturers deal with daily.
            </p>
          </section>

          {/* Section 6 */}
          <section className="pt-4">
            <h2 className="text-lg sm:text-[24px] font-semibold text-gray-900 mb-3">
              Where to Meet Icon Packtech
            </h2>
            <p>Join Icon at the event to explore:</p>

            <div className="my-3 space-y-1 text-[14px] sm:text-[15px] text-gray-800">
              <p className="font-bold text-gray-900">ANUGA Food Tec 2026</p>
              <p>
                <span className="font-semibold text-gray-900">Date:</span>{" "}
                28th-30th September &amp; 1st October 2026
              </p>
              <p>
                <span className="font-semibold text-gray-900">Venue:</span>{" "}
                Bombay Exhibition Centre, NESCO, Western Express Highway,
                Goregaon (East), Mumbai - 400 063
              </p>
              <p>
                <span className="font-semibold text-gray-900">Hall:</span> 1
              </p>
              <p>
                <span className="font-semibold text-gray-900">Stall:</span> K 01
              </p>
            </div>

            <p>
              The exhibition is a platform to discuss everything from how to
              transition from traditional manual packaging to automatic
              packaging, MAP tray sealing, vacuum packaging, and packaging
              automation.
            </p>
          </section>

          {/* Section 7 */}
          <section className="pt-4">
            <h2 className="text-lg sm:text-[24px] font-semibold text-gray-900 mb-3">
              Looking Beyond the Exhibition
            </h2>
            <p>
              The future of food packaging will not be defined by a single
              machine or technology.
            </p>
            <p>It will be shaped by how effectively manufacturers combine:</p>
            <p className="font-bold text-gray-900 text-base sm:text-[16px] my-2">
              Automation • Precision • Hygiene • Product Protection •
              Scalability
            </p>
            <p>
              As the food sector continues to grow, collaborating with
              experienced packaging machinery manufacturers will play a crucial
              role in shaping successful food manufacturing.
            </p>
            <p>
              ANUGA Food Tec 2026 provides a platform to explore that future,
              and Icon Packtech is proud to be part of the conversation.
            </p>
          </section>

          {/* Section 8 */}
          <section className="pt-4">
            <h2 className="text-lg sm:text-[24px] font-semibold text-gray-900 mb-3">
              Conclusion
            </h2>
            <p>
              The next generation of food manufacturing needs packaging
              technology that can keep pace with changing products, growing
              production volumes, and higher expectations.
            </p>
            <p>
              From automatic packaging to MAP and vacuum solutions, advanced
              machines help food manufacturers to deliver better efficiency and
              consistent pack presentation.
            </p>
            <p>
              At ANUGA Food Tec 2026, Icon Packtech will showcase how modern
              packaging technology can help you meet these requirements and
              scale with confidence.
            </p>
            <p>
              Because the future of food packaging isn't just about packing
              faster. It's about manufacturing smarter.
            </p>
          </section>
        </div>
      </article>
    </main>
  );
}
