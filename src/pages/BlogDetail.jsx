import React, { useMemo } from "react";
import { Download } from "lucide-react";

const blogArticlesMap = {
  "from-navratri-to-dussehra-is-your-food-packaging-ready-for-the-festive-rush": {
    title: "From Navratri to Dussehra: Is Your Food Packaging Ready for the Festive Rush?",
    image: "https://storage.server.grafizen.in/uploads/img_6ad74c460f4b70.18245951.jpg",
    date: "October 20, 2026",
    sections: [
      {
        heading: "The Surge in Festive Food Demand",
        paragraphs: [
          "October in India arrives with celebrations, colors, gatherings, and an enormous appetite for festive food. From traditional mithai and dry fruits to savory snacks and dairy delicacies like paneer and cheese, processing facilities operate around the clock to meet market demands.",
          "Meeting these aggressive festival production targets requires reliable, high-speed automated packaging lines that prevent packaging bottlenecks, maintain product freshness, and ensure flawless seal integrity under high-volume throughput."
        ]
      },
      {
        heading: "Preventing Spoilage with Vacuum & MAP Technology",
        paragraphs: [
          "Traditional open packaging risks early spoilage, oxidation, and moisture loss during transit and retail display. ICON's Modified Atmosphere Packaging (MAP) and Thermoforming solutions ensure perishable goods achieve shelf-life extensions of up to 90 days without relying on artificial chemical preservatives.",
          "Our precision gas-flushing systems evacuate residual oxygen down to sub-0.5% levels before introducing tailored nitrogen and CO2 barrier blends, preserving freshness, texture, and aroma from factory floor to family celebrations."
        ]
      },
      {
        heading: "Engineered for 24/7 Peak Production",
        paragraphs: [
          "Equipped with Siemens and Schneider PLC automation, heavy-gauge stainless steel construction, and rapid die changeover tooling, ICON packaging machines ensure maximum operational uptime during demanding festival rush periods."
        ]
      }
    ]
  },
  "service-before-sales-the-principle-that-built-icon": {
    title: "Service Before Sales: The Principle That Built Icon",
    image: "/home/blog/blog2.webp",
    date: "October 15, 2026",
    sections: [
      {
        heading: "Why Customer Support Is the Real Metric of Success",
        paragraphs: [
          "For Icon Packtech India Pvt. Ltd., success has never been measured solely by how many machines leave the factory floor, but by the uptime, productivity, and profitability of our partner plants.",
          "Since our establishment in 1995, our guiding philosophy has always been 'Service Before Sales'. We understand that packaging machine downtime means immediate financial loss for food and FMCG processors."
        ]
      },
      {
        heading: "Rapid On-Site Support & Ready Spares",
        paragraphs: [
          "With over 275,000+ spare parts maintained in our Rajkot inventory and dedicated factory-trained technicians on standby, Icon ensures rapid response times, routine preventive maintenance, and guaranteed operational continuity for clients across India."
        ]
      }
    ]
  },
  "icon-packtech-pvt-ltd-how-low-cost-vacuum": {
    title: "Icon Packtech: How Reliable Vacuum Packaging Protects Farmer Produce",
    image: "/home/blog/blog3.webp",
    date: "October 10, 2026",
    sections: [
      {
        heading: "Minimizing Post-Harvest Agricultural Losses",
        paragraphs: [
          "For many farmers and food processors, the most challenging part of agriculture begins after harvest. Months of labor and care can be compromised by rapid spoilage during storage and transit.",
          "Accessible, robust vacuum packaging machinery from ICON Packtech provides small and medium food enterprises with commercial-grade preservation capabilities, preventing weight loss and keeping produce market-fresh for extended periods."
        ]
      }
    ]
  },
  "the-hidden-cost-of-poor-packaging-why-upgrading-matters": {
    title: "The Hidden Cost of Poor Packaging: Why Upgrading Matters",
    image: "/home/blog/blog4.webp",
    date: "October 06, 2026",
    sections: [
      {
        heading: "Beyond Packaging Speed: Shelf Appeal & Food Safety",
        paragraphs: [
          "In modern competitive retail markets, packaging is not just a protective barrier — it is the first touchpoint between your brand and the consumer.",
          "Substandard seals result in leaks, product contamination, and costly returns. Upgrading to automated thermoforming or precision MAP tray sealing delivers consistent seam quality, crystal-clear presentation, and substantial labor savings."
        ]
      }
    ]
  },
  "anuga-2026": {
    title: "Icon Packtech at ANUGA Food Tec 2026: Showcasing Next-Gen Packaging Solutions",
    image: "/banners/anuga-2026.jpg",
    date: "October 02, 2026",
    sections: [
      {
        heading: "The Next Chapter of Food Packaging Is About More Than Speed",
        paragraphs: [
          "Food manufacturing is changing rapidly. As distributors expand, consumer preferences evolve, and products travel further from processing facilities, packaging is no longer an afterthought. It has become an essential part of the manufacturing strategy.",
          "Today's food manufacturers are looking for packaging systems that deliver far more than speed. They require hygiene, consistency, product protection, efficiency, and scalability to meet growing market demand.",
          "This year, all eyes in the food packaging industry are on ANUGA Food Tec 2026, where leading manufacturers like Icon Packtech prepare to showcase the next generation of solutions."
        ]
      },
      {
        heading: "Why Packaging Technology Is Becoming More Important",
        paragraphs: [
          "The modern food industry operates under increasing pressure. Consumers want fresh, hygienic products without compromise. At the same time, brands need extended shelf life, robust distribution packaging, and eye-catching retail presentation."
        ]
      }
    ]
  }
};

export default function BlogDetail({ blogSlug = "", onNavigate, onOpenBrochure }) {
  const brochurePdfUrl =
    "https://storage.server.grafizen.in/uploads/img_68b96a1834a003.08049055.pdf";

  const handleBrochureClick = () => {
    if (onOpenBrochure) {
      onOpenBrochure();
    } else {
      window.open(brochurePdfUrl, "_blank");
    }
  };

  const resolvedSlug = useMemo(() => {
    if (blogSlug) return blogSlug.replace(/^\/+/, "");
    if (typeof window !== "undefined") {
      const path = window.location.pathname;
      if (path.startsWith("/blogs/")) {
        return path.replace("/blogs/", "").replace(/\/+$/, "");
      }
    }
    return "from-navratri-to-dussehra-is-your-food-packaging-ready-for-the-festive-rush";
  }, [blogSlug]);

  const article = useMemo(() => {
    return blogArticlesMap[resolvedSlug] || blogArticlesMap["anuga-2026"] || blogArticlesMap["from-navratri-to-dussehra-is-your-food-packaging-ready-for-the-festive-rush"];
  }, [resolvedSlug]);

  return (
    <main className="font-Poppins min-h-screen bg-white pt-6 md:pt-0 pb-20 text-gray-800">
      <article className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-5">
 

        {/* ================= 1. FEATURED HERO BANNER IMAGE ================= */}
        <div className="w-full overflow-hidden rounded-lg mb-6  border border-gray-100 bg-gray-50">
          <img
            src={article.image}
            alt={article.title}
            width="1024"
            height="450"
            className="w-full h-auto  lg:min-h-[60vh] object-cover rounded-lg"
            loading="eager"
            fetchPriority="high"
            decoding="async"
            onError={(e) => {
              e.currentTarget.src =
                "https://storage.server.grafizen.in/uploads/img_6ad74c460f4b70.18245951.jpg";
            }}
          />
        </div>

        {/* ================= 2. TITLE & DATE ================= */}
        <header className="mb-8 text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 ">
            {article.title}
          </h1>

          {/* {article.date && (
            <p className="text-sm text-gray-500 font-medium mt-3">
              Published on {article.date}
            </p>
          )} */}
        </header>

        {/* ================= 3. ARTICLE BODY CONTENT ================= */}
        <div className="text-[15px] sm:text-[16px] leading-relaxed text-gray-700 space-y-6 text-justify">
          {article.sections.map((section, idx) => (
            <section key={idx} className="pt-2">
              {section.heading && (
                <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                  {section.heading}
                </h2>
              )}

              {section.paragraphs?.map((p, pIdx) => (
                <p key={pIdx} className="mb-3 leading-relaxed">
                  {p}
                </p>
              ))}
            </section>
          ))}
        </div>

     
      </article>
    </main>
  );
}
