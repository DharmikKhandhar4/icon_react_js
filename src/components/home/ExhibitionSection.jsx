import React, { useState, useEffect, useRef, memo, useCallback } from 'react';
import ExhibitionShowcase from './ExhibitionShowcase';
import { Video, ArrowUpRight, Sparkles } from 'lucide-react';

// ─── Animated count-up number ───────────────────────────────────────────────
function AnimatedNumber({ target, suffix = '', isVisible = false }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    let startTime = null;
    let raf;
    const duration = 1800;
    const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);

    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.round(easeOutCubic(progress) * target));
      if (progress < 1) raf = requestAnimationFrame(step);
    };

    raf = requestAnimationFrame(step);
    return () => { if (raf) cancelAnimationFrame(raf); };
  }, [target, isVisible]);

  return <span>{count}{suffix}</span>;
}

// ─── Data (defined outside component — never re-created on render) ──────────
const STATS = [
  { image: '/home/exibition/iconone.png', target: 7, suffix: '+', label: 'Exhibitions' },
  { image: '/home/exibition/icontwo.png', target: 300, suffix: '+', label: 'Visitors Reached' },
  { image: '/home/exibition/iconthree.png', target: 50, suffix: '+', label: 'Live Demos' },
];

const EVENT_CARDS = [
  { id: 1, title: 'Icon Packtech at IDA Delhi 2026', image: '/home/exibition/exibition one.webp', url: 'https://www.youtube.com/watch?v=2GWX5OlloTY' },
  { id: 2, title: 'Icon at WMNC 25', image: '/home/exibition/exibitiontwo.webp', url: 'https://www.youtube.com/watch?v=a04-8oFUB5E' },
  { id: 3, title: 'AAHAR - 2025', image: '/home/exibition/exibitionthree.webp', url: 'https://www.youtube.com/watch?v=ar-yzK8Xo8o' },
  { id: 4, title: 'IndusFood Exhibition - 2025', image: '/home/exibition/exibitionfour.webp', url: 'https://www.youtube.com/watch?v=RjYd7IIlgTU' },
];

// Intersection Observer options (stable reference — avoids re-creation)
const OBSERVER_OPTIONS = { threshold: 0.15 };

// ─── Stat Card (memoized — only re-renders when props change) ───────────────
const StatCard = memo(function StatCard({ stat, isVisible }) {
  return (
    <div className="group flex items-center gap-2 md:gap-3 w-[calc(50%-6px)] md:w-auto border border-red-300 shadow-md bg-white rounded-xl px-2.5 py-2.5 md:px-3 md:py-3 hover:-translate-y-[3px] hover:shadow-lg hover:shadow-red-500/10 transition-all duration-300">
      <img
        src={stat.image}
        alt={stat.label}
        width={40}
        height={40}
        className="w-8 md:w-10 object-contain flex-shrink-0"
        loading="lazy"
        decoding="async"
      />
      <div className="min-w-0">
        <p className="text-[15px] md:text-[17px] font-semibold text-icon leading-tight">
          <AnimatedNumber target={stat.target} suffix={stat.suffix} isVisible={isVisible} />
        </p>
        <p className="text-xs md:text-sm text-black leading-tight">
          {stat.label}
        </p>
      </div>
    </div>
  );
});

// ─── Event Card (memoized — card data never changes) ────────────────────────
const EventCard = memo(function EventCard({ card }) {
  return (
    <a
      href={card.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative h-fit border border-gray-300 shadow-lg overflow-hidden rounded-3xl bg-white"
    >
      <div className="relative h-full w-full overflow-hidden">
        <img
          src={card.image}
          alt={card.title}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
          decoding="async"
        />

        {/* EVENT MEDIA badge */}
        <div className="absolute left-4 top-4 rounded-full bs-mix-red text-white border border-white/15 px-3 py-1 text-[11px] tracking-widest backdrop-blur-md">
          EVENT MEDIA
        </div>

        {/* Bottom glassmorphic title */}
        <div className="absolute bottom-0 left-0 right-0 m-2.5 rounded-xl bg-white/30 backdrop-blur-[10px] py-1 px-2">
          <h4 className="text-[15px] font-semibold text-gray-900">{card.title}</h4>
        </div>
      </div>
    </a>
  );
});

// ─── Background Decorations (extracted — avoids re-render noise in JSX) ─────
const BackgroundDecorations = memo(function BackgroundDecorations() {
  return (
    <>
      <div
        className="absolute -top-24 -right-24 w-[480px] h-[480px] rounded-full bg-[radial-gradient(circle_at_center,rgba(196,46,46,0.22)_0%,transparent_70%)] blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 opacity-[0.05] [background-image:linear-gradient(to_right,#0ff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] [background-size:48px_48px] pointer-events-none [mask-image:radial-gradient(ellipse_at_top_left,black_30%,transparent_80%)]"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 pointer-events-none opacity-25"
        style={{
          backgroundImage: 'linear-gradient(to right, #edeef1 1px, transparent 1px)',
          backgroundSize: '3.5rem 100%',
        }}
        aria-hidden="true"
      />
    </>
  );
});

// ─── Main Section ───────────────────────────────────────────────────────────
const ExhibitionSection = () => {
  const sectionRef = useRef(null);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') {
      setHasStarted(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasStarted(true);
          observer.disconnect();
        }
      },
      OBSERVER_OPTIONS
    );

    const el = sectionRef.current;
    if (el) observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-white md:mt-6 pt-20 mf:pt-14 mt-14 py-12 md:py-14 px-4 sm:px-6 lg:px-12 font-sans antialiased text-neutral-800 overflow-hidden"
    >
      <BackgroundDecorations />

      {/* ── Header Section ── */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto px-4 mb-10">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-red-500 shadow-xl bg-transparent text-[#11181c] text-xs sm:text-sm font-normal">
          <Sparkles className="w-4 h-4 text-[#11181c]" />
          <span>Global Presence • Exhibition Highlights • Industry Insights</span>
        </div>

        <h2 className="tracking-tight mb-4 mt-6 text-2xl sm:text-5xl  text-[30px] leading-10
        text-[#11181c] font-semibold font-poppins lg:leading-[48px]">
          Where Innovation Meets <br />
          <span className="bg-[linear-gradient(38.46deg,red_0.15%,rgb(97,3,3)_98.48%)] bg-clip-text text-transparent">
            Industry Showcase
          </span>
        </h2>

        <p className="text-[16px] sm:text-base text-[#11181c] leading-5 max-w-3xl">
          From food packaging and dairy automation to precision-driven industrial machinery, our
          exhibitions reflect how Icon Industries brings engineering, reliability, and future-ready
          packaging solutions to the industries that move India.
        </p>
      </div>

      {/* ── Showcase Banner ── */}
      <div className="relative z-10">
        <ExhibitionShowcase />
      </div>

      {/* ── Main Content Grid ── */}
      <div className="relative z-10 lg:mt-6 md:mt-2.5 mt-8 grid gap-8 lg:grid-cols-[0.95fr_1.05fr] max-w-7xl  mx-auto">
        {/* Left Column */}
        <div className="relative z-10 rounded-[28px] border border-white/10 bg-white">
          <div className="inline-flex bs-mix-red items-center gap-2 rounded-full shadow-md font-medium px-4 py-2 text-white text-sm">
            <Video className="h-4 w-4 text-white" />
            <span>2025 - 2026 Exhibition Overview</span>
          </div>

          <h3 className="mt-6 text-2xl sm:text-3xl text-icon font-semibold leading-tight">
            More than participation —
            <span className="block text-gray-600">we create industry presence.</span>
          </h3>

          <p className="mt-3 text-base leading-[23px] text-[#11181c] text-justify">
            Every exhibition is an opportunity to demonstrate more than machinery. It is where we
            present performance, precision, packaging intelligence, and the confidence of a brand
            built on engineering excellence. With a strong presence across industrial and
            sector-specific expos, Icon Industries continues to connect with manufacturers,
            decision-makers, and modern brands seeking dependable packaging systems that scale with
            their business.
          </p>
          <p className="mt-5 text-base leading-[23px] text-justify text-[#11181c]">
            This section is designed to help visitors explore your exhibition journey, watch
            event-related media, and continue deeper into your knowledge ecosystem through blogs and
            insights. It gives your homepage a stronger story, richer visual engagement, and a more
            premium global feel.
          </p>

          {/* Stats Row */}
          <div className="mt-6 flex flex-wrap lg:flex-nowrap gap-3 md:gap-4 w-full">
            {STATS.map((stat) => (
              <StatCard key={stat.label} stat={stat} isVisible={hasStarted} />
            ))}
          </div>

          {/* CTA Button */}
          <div className="mt-8">
            <button
              type="button"
              className="group relative z-10 flex cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-full border border-red-500 bg-transparent px-6 py-2 text-[15px] font-semibold text-[#11181c] shadow-xl transition-colors duration-500 ease-in-out hover:text-white lg:font-medium [isolation:isolate] before:absolute before:inset-0 before:-z-10 before:h-full before:w-full before:scale-x-0 before:origin-left before:bg-red-500 before:transition-transform before:duration-500 before:ease-in-out hover:before:scale-x-100"
            >
              <span>Discuss Your Packaging Requirement</span>
              <ArrowUpRight className="h-5 w-5 transition-transform duration-500 group-hover:rotate-45" />
            </button>
          </div>
        </div>

        {/* Right Column: Event Cards Grid */}
        <div className="grid gap-4 sm:grid-cols-2">
          {EVENT_CARDS.map((card) => (
            <EventCard key={card.id} card={card} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExhibitionSection;
