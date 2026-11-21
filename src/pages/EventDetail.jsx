import React, { useEffect, useMemo, useState } from "react";

/*
|--------------------------------------------------------------------------
| Configuration
|--------------------------------------------------------------------------
*/

const FALLBACK_EVENT_IMAGE = "/placeholder.svg";

/*
|--------------------------------------------------------------------------
| Default Events Data (Local Offline Store)
|--------------------------------------------------------------------------
*/

const defaultEventsMap = {
  "anuga-foodtec-india-2026": {
    id: "e1",
    title: "ANUGA FoodTec India 2026 - Live Machine Demo",
    image: "/event/eventdetail.jpg",
    createdAt: "2026-10-02T10:00:00Z",
    section: [
      {
        heading: "Live Demonstration of Next-Generation Packaging Automation",
        text: "<p>ICON Packtech is proud to announce its live technology demonstration at <strong>ANUGA FoodTec India 2026</strong>, held at the Bombay Exhibition Centre in Mumbai. As India's premier international exhibition for food and beverage technology, ANUGA serves as the benchmark platform for cutting-edge packaging innovations.</p><p>Visitors will experience live runs of our high-capacity thermoforming and MAP (Modified Atmosphere Packaging) lines, designed specifically for extending shelf life while preserving product aroma, freshness, and structural integrity without artificial additives.</p>",
      },
      {
        heading: "Featured Machinery & Technology Highlights",
        text: "<p>At Booth Hall 1, ICON will showcase:</p><ul class='list-disc pl-5 space-y-1.5 my-3 text-gray-700'><li><strong>High-Speed Automatic Thermoforming Machine:</strong> Continuous forming, sealing, cutting, and automated discharge for perishable products.</li><li><strong>Modified Atmosphere Packaging (MAP) Tray Sealer:</strong> Precise residual oxygen evacuation down to &lt; 0.5% with high-accuracy gas flushing.</li><li><strong>Energy-Efficient Tooling Systems:</strong> Rapid die-change design allowing seamless format changeovers under 15 minutes.</li></ul>",
      },
      {
        heading: "Meeting the Growing Demand of Dairy & FMCG Processors",
        text: "<p>Modern food and dairy processors face stringent standards for shelf life, presentation, and hygienic compliance. Our technical engineering specialists will be on-site throughout the expo to provide customized line layouts, capacity calculations, and return-on-investment consultations for processing plants across India and global markets.</p>",
      },
    ],
  },
  "dairy-expo-packaging-summit-2025": {
    id: "e2",
    title: "Dairy Expo & Packaging Technology Summit 2025",
    image: "/event/image2.png",
    createdAt: "2025-09-28T10:00:00Z",
    section: [
      {
        heading: "Revolutionizing Dairy Preservation & Shelf-Life Extension",
        text: "<p>The Dairy Expo & Packaging Technology Summit brought together dairy federations, co-operatives, and private processors to address one of the sector's most pressing challenges: <strong>preventing spoilage and maximizing shelf stability for paneer, curd, cheese, and sweets</strong>.</p><p>ICON Packtech presented proven vacuum packaging technologies that have helped major dairies across Gujarat, Maharashtra, and North India achieve up to 90 days of freshness preservation.</p>",
      },
      {
        heading: "Precision Vacuum Sealing for Paneer & Dairy Slabs",
        text: "<p>The summit featured live trials of ICON's vacuum thermoforming systems running multi-layer barrier films, ensuring airtight seal integrity and zero moisture migration. Industry leaders recognized ICON's heavy-duty stainless steel build, hygienic washdown compliance, and dependable local service network.</p>",
      },
    ],
  },
  "international-foodtech-conclave": {
    id: "e3",
    title: "International FoodTech Automation Conclave",
    image: "/event/image3.jpeg",
    createdAt: "2025-09-18T10:00:00Z",
    section: [
      {
        heading: "Smart Automation & Robotics in Industrial Packaging",
        text: "<p>At the International FoodTech Automation Conclave, ICON's engineering leaders joined industry innovators to discuss the role of Industry 4.0, PLC remote telemetry, and robotic pick-fill-seal workflows in high-volume food processing plants.</p><p>ICON highlighted how modular machine architecture empowers processors to start with semi-automated packaging and scale seamlessly into fully integrated, hands-free production lines.</p>",
      },
      {
        heading: "Sustainable Barrier Packaging & Cost Optimization",
        text: "<p>With regulatory focus shifting towards sustainable materials, ICON demonstrated machine compatibility with mono-material recyclable films and thinner barrier laminates, helping manufacturers reduce raw material costs while maintaining superior puncture resistance and hermetic seals.</p>",
      },
    ],
  },
  "global-packaging-machinery-expo": {
    id: "e4",
    title: "Global Packaging Machinery & Logistics Expo",
    image: "/event/image4.jpeg",
    createdAt: "2025-09-08T10:00:00Z",
    section: [
      {
        heading: "Connecting Global Standards with Robust Indian Manufacturing",
        text: "<p>The Global Packaging Machinery & Logistics Expo provided an expansive showcase of heavy-duty packaging machinery designed for export-grade reliability. ICON showcased its complete portfolio spanning thermoforming packaging machines, chamber vacuum sealers, and continuous MAP tray sealers.</p><p>International delegates commended the robust mechanical construction, Schneider & Siemens automation controllers, and precision CNC-machined die sets that ensure year-round uninterrupted uptime.</p>",
      },
    ],
  },
};

/*
|--------------------------------------------------------------------------
| Date formatter
|--------------------------------------------------------------------------
*/

const formatDateSimple = (dateString) => {
  if (!dateString) return "";
  const date = new Date(dateString);
  if (Number.isNaN(date.getTime())) return String(dateString);
  return date.toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
};

/*
|--------------------------------------------------------------------------
| Image fallback
|--------------------------------------------------------------------------
*/

const handleImageError = (e) => {
  e.currentTarget.onerror = null;
  e.currentTarget.src = "/event/image1.jpeg";
};

/*
|--------------------------------------------------------------------------
| Event Details Page
|--------------------------------------------------------------------------
*/

export default function EventDetail({ eventSlug = "", onNavigate }) {
  // Resolve slug from props, URL or fallback
  const resolvedSlug = useMemo(() => {
    if (eventSlug) return eventSlug.replace(/^\/+/, "");
    if (typeof window !== "undefined") {
      const path = window.location.pathname;
      if (path.startsWith("/events/")) {
        return path.replace("/events/", "").replace(/\/+$/, "");
      }
    }
    return "anuga-foodtec-india-2026";
  }, [eventSlug]);

  const eventData = useMemo(() => {
    return defaultEventsMap[resolvedSlug] || defaultEventsMap["anuga-foodtec-india-2026"];
  }, [resolvedSlug]);

  const [event] = useState(eventData);

  /* Dynamic SEO title update */
  useEffect(() => {
    const eventTitle = event?.title || event?.eventName || event?.name;
    if (eventTitle) {
      document.title = `${eventTitle} | Packaging Exhibition | ICON Packtech`;
    }
  }, [event]);

  const eventTitle = event?.title || "Event";
  const eventImage = event?.image || FALLBACK_EVENT_IMAGE;
  const eventDate = event?.createdAt;
  const eventSections = Array.isArray(event?.section) ? event.section : [];

  return (
    <main className="font-Poppins min-h-[400px] bg-white pt-6 md:pt-0 text-gray-800">
      {event ? (
        <article className="mx-auto max-w-5xl px-5 pb-[100px]">
          {/* Back button */}
      

          {/* Hero image */}
          <div className="mb-6 w-full overflow-hidden rounded-lg bg-gray-50  ">
            <img
              src={eventImage}
              alt={eventTitle}
              width="1024"
              height="500"
              loading="eager"
              fetchPriority="high"
              decoding="async"
              onError={handleImageError}
              className="h-auto max-h-[500px] w-full object-cover"
            />
          </div>

          {/* Title and date */}
          <header className="mb-10 text-center">
            <h1 className="mb-2 font-Poppins text-3xl font-bold md:text-4xl text-gray-900 leading-snug">
              {eventTitle}
            </h1>

            {eventDate && (
              <p className="text-sm text-gray-500 font-medium">
                {formatDateSimple(eventDate)}
              </p>
            )}
          </header>

          {/* Event content */}
          <div className="prose max-w-none text-justify text-[16px] md:text-[17px] font-normal prose-img:rounded-md prose-p:leading-relaxed text-gray-700 space-y-6">
            {eventSections.map((section, index) => (
              <section
                key={section?._id || `${section?.heading}-${index}`}
                style={{
                  contentVisibility: "auto",
                  containIntrinsicSize: "250px",
                }}
              >
                {section?.heading && (
                  <h2 className="mb-3 text-2xl font-semibold text-gray-900">
                    {section.heading}
                  </h2>
                )}

                {section?.text && (
                  <div
                    className="mb-6 leading-relaxed"
                    dangerouslySetInnerHTML={{
                      __html: section.text,
                    }}
                  />
                )}
              </section>
            ))}
          </div>
        </article>
      ) : (
        <div className="flex min-h-[400px] items-center justify-center px-5 text-center">
          <div>
            <p className="font-medium text-gray-700">Event details not found.</p>
          </div>
        </div>
      )}
    </main>
  );
}
