import React, { useState } from 'react';
import { 
  ArrowRight, 
  Mail, 
  Phone, 
  MapPin, 
  Building2, 
  Send, 
  CheckCircle2 
} from 'lucide-react';

const YouTubeIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none">
    <path
      d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814z"
      fill="#ffffff"
      stroke="currentColor"
      strokeWidth="1.5"
    />
    <path
      d="M9.545 15.568V8.432L15.818 12l-6.273 3.568z"
      fill="currentColor"
    />
  </svg>
);

const popularBlogs = [
  {
    id: 1,
    title: "Training Minds, Building Futures: Icon's Skill Development Mission",
    image: "https://storage.server.grafizen.in/uploads/img_695267c5e30357.20496064.jpg",
    link: "#",
  },
  {
    id: 2,
    title: "Precision in Motion: The Science Behind Icon's Sealing Technology",
    image: "https://storage.server.grafizen.in/uploads/img_695267a6e52473.66702211.jpg",
    link: "#",
  },
  {
    id: 3,
    title: "Beyond Borders: Icon's Export Vision 2025",
    image: "https://storage.server.grafizen.in/uploads/img_6952683fb80140.51230067.jpg",
    link: "#",
  },
  {
    id: 4,
    title: "AI at Work: Icon Machines Learn, Predict & Perform",
    image: "https://storage.server.grafizen.in/uploads/img_69526830029591.24946581.jpg",
    link: "#",
  },
];

export default function Footer({ onNavigate }) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setTimeout(() => {
      setSubscribed(false);
      setEmail('');
    }, 3500);
  };

  const handleLink = (path) => {
    if (onNavigate) {
      onNavigate(path);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative bg-[#0c121e] text-white font-Poppins border-t border-slate-800 overflow-hidden">
      {/* Decorative Bottom Left & Right Images */}
      <img
        src="/footer/footerimage.png"
        alt="Background decorative pattern"
        aria-hidden="true"
        role="presentation"
        width="260"
        height="260"
        loading="lazy"
        decoding="async"
        className="pointer-events-none absolute bottom-0 left-0 w-auto max-h-[140px] sm:max-h-[200px] md:max-h-[260px] object-contain object-bottom select-none z-0"
      />
      <img
        src="/footer/footerimagetwo.png"
        alt="Background decorative pattern"
        aria-hidden="true"
        role="presentation"
        width="260"
        height="260"
        loading="lazy"
        decoding="async"
        className="pointer-events-none absolute bottom-0 right-0 w-auto max-h-[140px] sm:max-h-[200px] md:max-h-[260px] object-contain object-bottom select-none z-0"
      />

      <div className="w-[90%] 2xl:w-[1360px] mx-auto pt-10 pb-5 relative z-10">
        
        {/* ================= ROW 1: BRAND INFO & MULTI-COLUMN NAVIGATION ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 pb-0 ">
          
          {/* Column 1: Brand Info & Newsletter (5 cols on lg) */}
          <div className="lg:col-span-4 flex flex-col gap-3">
            <div>
              {/* Logo */}
              <div className="mb-4">
                <button
                  onClick={() => handleLink('/')}
                  className="inline-block focus:outline-none"
                  aria-label="ICON Packtech Home"
                >
                  <img
                    src="/logo.svg"
                    alt="ICON Packtech Logo"
                    width="190"
                    height="50"
                    loading="lazy"
                    decoding="async"
                    className="w-[190px] h-auto object-contain brightness-0 invert"
                  />
                </button>
              </div>

              <p className="text-[14px] text-gray-100 leading-relaxed mb-6">
                We are a team of engineering professionals driven by innovation, delivering high-quality machines and industrial packaging solutions that power progress across sectors.
              </p>

              {/* Newsletter Signup */}
              <div className="mb-6">
                <h5 className="text-[20px] font-[600] text-white mb-1.5">
                  Newsletter Signup
                </h5>
                <p className="text-[13px] text-gray-400 mb-3.5 leading-relaxed">
                  Stay updated with packaging innovations, expo highlights &amp; machinery insights.
                </p>

                {subscribed ? (
                  <div className="flex items-center gap-2 p-3 bg-red-950/60 border border-red-500/40 rounded-xl text-xs text-red-200">
                    <CheckCircle2 className="w-4 h-4 text-red-400" />
                    <span>Thank you for subscribing to ICON Newsletter!</span>
                  </div>
                ) : (
                  <form onSubmit={handleSubscribe} className="max-w-md">
                    <div className="input-wrapper">
                      <svg className="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <g data-name="Layer 2">
                          <g data-name="inbox">
                            <rect width="24" height="24" transform="rotate(180 12 12)" opacity="0"></rect>
                            <path d="M20.79 11.34l-3.34-6.68A3 3 0 0 0 14.76 3H9.24a3 3 0 0 0-2.69 1.66l-3.34 6.68a2 2 0 0 0-.21.9V18a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3v-5.76a2 2 0 0 0-.21-.9zM8.34 5.55a1 1 0 0 1 .9-.55h5.52a1 1 0 0 1 .9.55L18.38 11H16a1 1 0 0 0-1 1v2a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-2a1 1 0 0 0-1-1H5.62z"></path>
                          </g>
                        </g>
                      </svg>
                      <input
                        type="email"
                        required
                        name="email"
                        className="input"
                        placeholder="info@gmail.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                      <button type="submit" className="Subscribe-btn">
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="10" viewBox="0 0 38 15" className="arrow">
                          <path d="M10 7.519l-.939-.344h0l.939.344zm14.386-1.205l-.981-.192.981.192zm1.276 5.509l.537.843.148-.094.107-.139-.792-.611zm4.819-4.304l-.385-.923h0l.385.923zm7.227.707a1 1 0 0 0 0-1.414L31.343.448a1 1 0 0 0-1.414 0 1 1 0 0 0 0 1.414l5.657 5.657-5.657 5.657a1 1 0 0 0 1.414 1.414l6.364-6.364zM1 7.519l.554.833.029-.019.094-.061.361-.23 1.277-.77c1.054-.609 2.397-1.32 3.629-1.787.617-.234 1.17-.392 1.623-.455.477-.066.707-.008.788.034.025.013.031.021.039.034a.56.56 0 0 1 .058.235c.029.327-.047.906-.39 1.842l1.878.689c.383-1.044.571-1.949.505-2.705-.072-.815-.45-1.493-1.16-1.865-.627-.329-1.358-.332-1.993-.244-.659.092-1.367.305-2.056.566-1.381.523-2.833 1.297-3.921 1.925l-1.341.808-.385.245-.104.068-.028.018c-.011.007-.011.007.543.84zm8.061-.344c-.198.54-.328 1.038-.36 1.484-.032.441.024.94.325 1.364.319.45.786.64 1.21.697.403.054.824-.001 1.21-.09.775-.179 1.694-.566 2.633-1.014l3.023-1.554c2.115-1.122 4.107-2.168 5.476-2.524.329-.086.573-.117.742-.115s.195.038.161.014c-.15-.105.085-.139-.076.685l1.963.384c.192-.98.152-2.083-.74-2.707-.405-.283-.868-.37-1.28-.376s-.849.069-1.274.179c-1.65.43-3.888 1.621-5.909 2.693l-2.948 1.517c-.92.439-1.673.743-2.221.87-.276.064-.429.065-.492.057-.043-.006.066.003.155.127.07.099.024.131.038-.063.014-.187.078-.49.243-.94l-1.878-.689zm14.343-1.053c-.361 1.844-.474 3.185-.413 4.161.059.95.294 1.72.811 2.215.567.544 1.242.546 1.664.459a2.34 2.34 0 0 0 .502-.167l.15-.076.049-.028.018-.011c.013-.008.013-.008-.524-.852l-.536-.844.019-.012c-.038.018-.064.027-.084.032-.037.008.053-.013.125.056.021.02-.151-.135-.198-.895-.046-.734.034-1.887.38-3.652l-1.963-.384zm2.257 5.701l.791.611.024-.031.08-.101.311-.377 1.093-1.213c.922-.954 2.005-1.894 2.904-2.27l-.771-1.846c-1.31.547-2.637 1.758-3.572 2.725l-1.184 1.314-.341.414-.093.117-.025.032c-.01.013-.01.013.781.624zm5.204-3.381c.989-.413 1.791-.42 2.697-.307.871.108 2.083.385 3.437.385v-2c-1.197 0-2.041-.226-3.19-.369-1.114-.139-2.297-.146-3.715.447l.771 1.846z"></path>
                        </svg>
                        <span>Submit</span>
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-8 pt-2">
              {/* Facebook */}
              <a
                href="https://www.facebook.com/people/Icon-Packtech-India-Pvt-Ltd/61561593819510/"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="w-9 h-9  hover:bg-red-600 flex items-center justify-center transition-all duration-300"
              >
                <img
                  src="/footer/facebook-app-symbol.png"
                  alt="Facebook"
                  width="28"
                  height="28"
                  loading="lazy"
                  decoding="async"
                  className="w-7 h-7  object-contain brightness-0 invert"
                />
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/company/icon-packtech/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 hover:bg-red-600 flex items-center justify-center transition-all duration-300"
              >
                <img
                  src="/footer/linkedin.png"
                  alt="LinkedIn"
                  width="28"
                  height="28"
                  loading="lazy"
                  decoding="async"
                  className="w-7 h-7  object-contain brightness-0 invert"
                />
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/icon.packtech/"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagr hover:bg-red-600 flex items-center justify-center transition-all duration-300"
              >
                <img
                  src="/footer/instagram.png"
                  alt="Instagram"
                  width="28"
                  height="28"
                  loading="lazy"
                  decoding="async"
                  className="w-7 h-7  object-contain brightness-0 invert"
                />
              </a>

              {/* X / Twitter */}
              <a
                href="https://x.com/iconpacktech"
                target="_blank"
                rel="noreferrer"
                aria-label="X"
                className="w-9 h-9  hover:bg-red-600 flex items-center justify-center transition-all duration-300"
              >
                <img
                  src="/footer/twitter.png"
                  alt="X"
                  width="28"
                  height="28"
                  loading="lazy"
                  decoding="async"
                  className="w-7 h-7  object-contain brightness-0 invert"
                />
              </a>

              {/* YouTube */}
              <a
                href="https://www.youtube.com/@icon.packtech"
                target="_blank"
                rel="noreferrer"
                aria-label="YouTube"
                className="w-9 h-9 hover:bg-red-600 flex items-center justify-center transition-all duration-300"
              >
                <img
                  src="/footer/youtube.png"
                  alt="YouTube"
                  width="28"
                  height="28"
                  loading="lazy"
                  decoding="async"
                  className="w-7 h-7  object-contain brightness-0 invert"
                />
              </a>
            </div>
          </div>

          {/* Column 2-5: Navigation Links Grid (8 cols on lg) */}
          <div className="lg:col-span-8 flex flex-col">
            
            {/* 4 Navigation Columns: 2x2 grid on mobile, 4 columns on tablet & desktop */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-6 sm:gap-x-4 gap-y-8 sm:gap-y-6">
              
              {/* Nav 1: Quick Links */}
              <div className="min-w-0">
                <h5 className="font-semibold text-white text-[16px] md:text-[17px] mb-4 min-h-[49px]">
                  Links
                </h5>
                <ul className="space-y-1.5 text-[13px] text-gray-300 border-l border-white/20 pl-3.5">
                  {[
                    { name: 'Home', path: '/' },
                    { name: 'About US', path: '/about-us' },
                    { name: 'Career', path: '/careers' },
                    { name: 'Events', path: '/events' },
                    { name: 'Contact Us', path: '/contact-us' },
                    { name: 'Privacy Policy', path: '#privacy' },
                    { name: 'Terms & Conditions', path: '#terms' },
                    { name: 'Imprint', path: '#imprint' },
                  ].map((item, idx) => (
                    <li key={idx}>
                      <button
                        type="button"
                        onClick={() => item.path.startsWith('/') ? handleLink(item.path) : null}
                        className="group relative inline-block text-left text-gray-300 hover:text-white transition-colors cursor-pointer"
                      >
                        <span>{item.name}</span>
                        <span className="block h-[1px] w-0 bg-current transition-all duration-300 group-hover:w-full" />
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Nav 2: Packaging as per Product */}
              <div className="min-w-0">
                <h5 className="font-semibold text-white text-[16px] md:text-[17px] mb-4 min-h-[49px]">
                  Packaging as per Product
                </h5>
                <ul className="space-y-1.5 text-[13px] text-gray-300 border-l border-white/20 pl-3.5">
                  {[
                    { name: 'Paneer & Cheese', slug: 'paneer-cheese' },
                    { name: 'Dates', slug: 'dates' },
                    { name: 'Sweets & Namkeen', slug: 'sweet' },
                    { name: 'Curd & Dairy', slug: 'curd' },
                    { name: 'Tamarind', slug: 'tamarind' },
                    { name: 'Sticky Powder', slug: 'sticky-powder' },
                  ].map((item, i) => (
                    <li key={i}>
                      <button 
                        type="button" 
                        onClick={() => handleLink(`/packaging-as-per-product/${item.slug}`)}
                        className="group relative inline-block text-left text-gray-300 hover:text-white transition-colors cursor-pointer"
                      >
                        <span>{item.name}</span>
                        <span className="block h-[1px] w-0 bg-current transition-all duration-300 group-hover:w-full" />
                      </button>
                    </li>
                  ))}
                  <li className="pt-1.5">
                    <button 
                      type="button" 
                      onClick={() => handleLink('/packaging-as-per-product')}
                      className="group inline-flex items-center gap-1 text-xs font-semibold text-white hover:text-white transition-colors cursor-pointer"
                    >
                      <span className="relative">
                        <span>View More</span>
                        <span className="block h-[1px] w-0 bg-current transition-all duration-300 group-hover:w-full" />
                      </span>
                      <ArrowRight className="w-3.5 h-3.5 -rotate-45 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </button>
                  </li>
                </ul>
              </div>

              {/* Nav 3: Packaging Types */}
              <div className="min-w-0">
                <h5 className="font-semibold text-white text-[16px] md:text-[17px] mb-4 min-h-[49px]">
                  Packaging Types
                </h5>
                <ul className="space-y-1.5 text-[13px] text-gray-300 border-l border-white/20 pl-3.5">
                  {[
                    { name: 'Counting', slug: 'counting' },
                    { name: 'Pick-Fill', slug: 'pick' },
                    { name: 'Strapping', slug: 'strapping' },
                    { name: 'Standy Pouch', slug: 'standy-pouch' },
                    { name: 'Sealing Systems', slug: 'seal' },
                    { name: 'Liquid Filling', slug: 'fill' },
                  ].map((item, i) => (
                    <li key={i}>
                      <button 
                        type="button" 
                        onClick={() => handleLink(`/packaging-solutions/${item.slug}`)}
                        className="group relative inline-block text-left text-gray-300 hover:text-white transition-colors cursor-pointer"
                      >
                        <span>{item.name}</span>
                        <span className="block h-[1px] w-0 bg-current transition-all duration-300 group-hover:w-full" />
                      </button>
                    </li>
                  ))}
                  <li className="pt-1.5">
                    <button 
                      type="button" 
                      onClick={() => handleLink('/packaging-solutions')}
                      className="group inline-flex items-center gap-1 text-xs font-semibold text-white hover:text-white transition-colors cursor-pointer"
                    >
                      <span className="relative">
                        <span>View More</span>
                        <span className="block h-[1px] w-0 bg-current transition-all duration-300 group-hover:w-full" />
                      </span>
                      <ArrowRight className="w-3.5 h-3.5 -rotate-45 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </button>
                  </li>
                </ul>
              </div>

              {/* Nav 4: All Products */}
              <div className="min-w-0">
                <h5 className="font-semibold text-white text-[16px] md:text-[17px] mb-4 min-h-[49px]">
                  All Products
                </h5>
                <ul className="space-y-1.5 text-[13px] text-gray-300 border-l border-white/20 pl-3.5">
                  {[
                    { name: 'Thermoforming Vacuum', slug: 'thermoforming-vacuum-packing-machine-itf-250' },
                    { name: 'Tray Sealer (MAP)', slug: 'inline-tray-sealer-map' },
                    { name: 'Cup Filling & Sealing', slug: 'linear-cup-filling-sealing-machine' },
                    { name: 'Vacuum Chamber', slug: 'double-chamber-vacuum-packing-machine' },
                    { name: 'Dates Processing', slug: 'thermoforming-vacuum-packing-machine-itf-400' },
                    { name: 'Pick-Fill-Seal Machine', slug: 'premade-pouch-pick-fill-seal-machine' },
                  ].map((item, i) => (
                    <li key={i}>
                      <button 
                        type="button" 
                        onClick={() => handleLink(`/product-details/${item.slug}`)}
                        className="group relative inline-block text-left text-gray-300 hover:text-white transition-colors cursor-pointer"
                      >
                        <span>{item.name}</span>
                        <span className="block h-[1px] w-0 bg-current transition-all duration-300 group-hover:w-full" />
                      </button>
                    </li>
                  ))}
                  <li className="pt-1.5">
                    <button 
                      type="button" 
                      onClick={() => handleLink('/all-packaging-machines')}
                      className="group inline-flex items-center gap-1 text-xs font-semibold text-white hover:text-white transition-colors cursor-pointer"
                    >
                      <span className="relative">
                        <span>View More</span>
                        <span className="block h-[1px] w-0 bg-current transition-all duration-300 group-hover:w-full" />
                      </span>
                      <ArrowRight className="w-3.5 h-3.5 -rotate-45 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </button>
                  </li>
                </ul>
              </div>

            </div>

            {/* ================= ROW 2: GET IN TOUCH (OFFICES & POPULAR BLOGS) ================= */}
            <div className="pt-10 pb-8 md:border-t border-white/10 lg:border-t-0 mt-8 sm:mt-6 lg:mt-0">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8">
                
                {/* Left/Main Column: Get In Touch (Corporate Office & Factory) */}
                <div className="lg:col-span-8">
                  <h5 className="md:font-semibold text-white text-[18px] md:text-[17px] mb-4">
                    Get In Touch
                  </h5>
                  
                  {/* Vertical left border line matching Screenshot */}
                  <div className="border-l border-white/20 pl-3.5 sm:pl-4 space-y-6 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-8">
                    
                    {/* Corporate Office */}
                    <div className="space-y-2">
                      <h6 className="font-semibold text-white text-[14px] sm:text-[15px]">
                        Corporate Office :-
                      </h6>
                      <a
                        href="https://www.google.com/maps/place/ICON+INDUSTRIES/@22.236774,70.8015475,17z/data=!3m1!4b1!4m6!3m5!1s0x3959ca98477fbf91:0xff4eb073219a81d4!8m2!3d22.236774!4d70.8015475!16s%2Fg%2F1pxwlmbfq?entry=ttu&g_ep=EgoyMDI1MDcyNy4wIKXMDSoASAFQAw%3D%3D"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative inline-block text-[13px] text-gray-300 hover:text-white transition-colors leading-relaxed mb-0"
                      >
                        <span>"Happy Home", Plot No.8, Atlas Industrial Estate, N.H. No. 8, Opp. Hotel Krishna Park, Nr. Gondal Chowkdi, Rajkot – 360004, Gujarat, India.</span>
                        <span className="block h-[1px] w-0 bg-current transition-all duration-300 group-hover:w-full" />
                      </a>
                      <div>
                        <span className="inline-block text-[13px] text-gray-400">
                          GST No: 24ARUPP0359E1ZL
                        </span>
                      </div>
                      <div className="text-[13px] text-gray-300 space-y-1 pt-1">
                        <p>
                          <span className="text-gray-400">Phone:</span>{' '}
                          <a href="tel:+919909036307" className="group relative inline-block hover:text-white transition-colors font-medium text-white">
                            <span>+91 99090 36307</span>
                            <span className="block h-[1px] w-0 bg-current transition-all duration-300 group-hover:w-full" />
                          </a>
                        </p>
                        <p>
                          <span className="text-gray-400">Email:</span>{' '}
                          <a href="mailto:info@iconindustriesindia.com" className="group relative inline-block hover:text-white transition-colors text-white">
                            <span>info@iconindustriesindia.com</span>
                            <span className="block h-[1px] w-0 bg-current transition-all duration-300 group-hover:w-full" />
                          </a>
                        </p>
                      </div>
                    </div>

                    {/* Factory */}
                    <div className="space-y-2">
                      <h6 className="font-semibold text-white text-[14px] sm:text-[15px]">
                        State of the art Factory :-
                      </h6>
                      <a
                        href="https://www.google.com/maps/place/ICON+PACKTECH+(INDIA)+PVT+LTD./@22.179618,70.7100117,3a,75y,68.42h,83.07t/data=!3m7!1e1!3m5!1slBV7KF-mIcdVXIr2dVPDpQ!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fcb_client%3Dmaps_sv.tactile%26w%3D900%26h%3D600%26pitch%3D6.926012519226646%26panoid%3DlBV7KF-mIcdVXIr2dVPDpQ%26yaw%3D68.42246486532297!7i13312!8i6656!4m9!1m2!2m1!1s%22Happy+Home%22,+Plot+No.8,+Atlas+Industrial+Estate,+N.H.+No.+8,+Opp.+Hotel+Krishna+Park,+Nr.+Gondal+Chowkdi,+Rajkot+%E2%80%93+360004,+Gujarat,+India+map+address!3m5!1s0x395833002ee53373:0xfb02dfe3c7197ac4!8m2!3d22.179705!4d70.7097974!16s%2Fg%2F11lct5_lfj?entry=ttu&g_ep=EgoyMDI1MDcyNy4wIKXMDSoASAFQAw%3D%3D"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative inline-block text-[13px] text-gray-300 hover:text-white transition-colors leading-relaxed mb-0"
                      >
                        <span>Plot no 24, J K Industrial Area, Ravki-Makhavad Road, Taravada, Rajkot – 360004, Gujarat, India.</span>
                        <span className="block h-[1px] w-0 bg-current transition-all duration-300 group-hover:w-full" />
                      </a>
                      <div>
                        <span className="inline-block text-[13px] text-gray-400">
                          GST No: 24AAHCI6683H1ZA
                        </span>
                      </div>
                    </div>

                  </div>
                </div>

                {/* Popular Blogs */}
                <div className="lg:col-span-4 lg:border-l lg:border-white/10 lg:pl-8">
                  <h5 className="font-semibold text-white text-[16px] md:text-[17px] mb-4">
                    Popular Blogs
                  </h5>
                  <div className="border-l border-white/20 pl-3.5 sm:border-l-0 sm:pl-0 space-y-3">
                    <div className="space-y-3">
                      {popularBlogs.map((blog) => (
                        <button
                          key={blog.id}
                          type="button"
                          onClick={() => handleLink('/blogs')}
                          className="group flex items-center gap-3 text-left w-full cursor-pointer"
                        >
                          <img
                            src={blog.image}
                            alt={blog.title}
                            width="48"
                            height="48"
                            className="w-12 h-12 rounded-lg object-cover border border-white/15 flex-shrink-0"
                            loading="lazy"
                            decoding="async"
                            onError={(e) => {
                              e.currentTarget.src = '/home/blog/blog1.webp';
                            }}
                          />
                          <div className="min-w-0">
                            <p className="text-xs text-gray-300 group-hover:text-white transition-colors line-clamp-2 leading-snug">
                              {blog.title}
                            </p>
                          </div>
                        </button>
                      ))}
                    </div>

                    <div className="pt-1.5">
                      <button 
                        type="button" 
                        onClick={() => handleLink('/blogs')}
                        className="group inline-flex items-center gap-1 text-xs font-semibold text-white hover:text-white transition-colors cursor-pointer"
                      >
                        <span className="relative">
                          <span>View More</span>
                          <span className="block h-[1px] w-0 bg-current transition-all duration-300 group-hover:w-full" />
                        </span>
                        <ArrowRight className="w-3.5 h-3.5 -rotate-45 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </button>
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>

        </div>



        {/* ================= ROW 3: COPYRIGHT & BRAND CREDS ================= */}
        {/* <div className="pt-3 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-400 gap-3">
          <p>
            © {new Date().getFullYear()} <span className="text-white font-medium">ICON Packtech India Pvt. Ltd.</span> All Rights Reserved.
          </p>
          <div className="flex items-center gap-4 text-gray-400 text-xs">
            <span className="text-red-500 font-semibold">ISO 9001:2015 Certified</span>
            <span>•</span>
            <span>Since 1995</span>
          </div>
        </div> */}
      </div>
    </footer>
  );
}

