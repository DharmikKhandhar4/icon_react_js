import React, { useState } from "react";
import { ArrowRight } from "lucide-react";

const popularBlogs = [
  {
    id: 1,
    title: "Training Minds, Building Futures: Icon's Skill Development Mission",
    image: "/home/blog/blog1.webp",
    slug: "training-minds-building-futures-icons-skill-development-mission",
  },
  {
    id: 2,
    title: "Precision in Motion: The Science Behind Icon's Sealing Technology",
    image: "/home/blog/blog2.webp",
    slug: "precision-in-motion-the-science-behind-icons-sealing-technology",
  },
  {
    id: 3,
    title: "Beyond Borders: Icon's Export Vision 2025",
    image: "/home/blog/blog3.webp",
    slug: "beyond-borders-icons-export-vision-2025",
  },
  {
    id: 4,
    title: "AI at Work: Icon Machines Learn, Predict & Perform",
    image: "/home/blog/blog4.webp",
    slug: "ai-at-work-how-icon-machines-learn-predict-perform",
  },
];

export default function Footer({ onNavigate }) {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return;
    alert("Thank you for subscribing to ICON Newsletter!");
    setEmail("");
  };

  const handleLink = (path) => {
    if (onNavigate) {
      onNavigate(path);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer className="ak-footer style-1 font-Poppins footer-bg relative overflow-hidden">
      <div className="ak-footer-container pb-[50px] lg:pb-[65px] pt-[45px] lg:pt-[55px] relative">
        {/* Decorative Bottom Left & Right Subtle Lines Pattern */}
        <img
          src="/footer/footerimage.png"
          className="footer-bg-img"
          alt="Decorative Background Pattern"
          aria-hidden="true"
        />
        <img
          src="/footer/footerimagetwo.png"
          className="footer-bg-img1"
          alt="Decorative Background Pattern"
          aria-hidden="true"
        />

        <div className="w-[89%] 2xl:w-[89%] max-w-[1540px] mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-6 xl:gap-10 2xl:gap-16">
            {/* ================= LEFT COLUMN: COMPANY INFO, NEWSLETTER & SOCIALS ================= */}
            <div className="w-full lg:w-[280px] xl:w-[320px] 2xl:w-[323px] flex-shrink-0">
              <div className="company-info">
                {/* Logo */}
                <div className="mb-[15px]">
                  <button
                    onClick={() => handleLink("/")}
                    className="inline-block focus:outline-none"
                    aria-label="ICON Packtech Home"
                  >
                    <img
                      src="/logo.svg"
                      alt="ICON Logo"
                      width="200"
                      height="52"
                      loading="lazy"
                      decoding="async"
                      className="w-[180px] xl:w-[200px] h-auto object-contain brightness-0 invert"
                    />
                  </button>
                </div>

                <p className="text-[13px] xl:text-[14px] mb-[25px] xl:mb-[30px] text-gray-100 lg:leading-5">
                  We are a team of engineering professionals driven by
                  innovation, delivering high-quality machines and industrial
                  solutions that power progress across sectors.
                </p>

                {/* Newsletter Signup */}
                <div className="text-white new-letter-email">
                  <div className="new-letter">
                    <h5 className="title text-[18px] xl:text-[20px] font-[600] text-white ">
                      Newsletter Signup
                    </h5>
                    <p className="desp text-[13px] xl:text-[14px] mb-[10px] text-[#ffffffa1] leading-relaxed">
                      As we enter the second quarter of the year, global markets
                      continue to show resilience.
                    </p>
                  </div>

                  <form onSubmit={handleSubscribe} className="pt-1 ">
                    <div className="input-wrapper md:mx-auto ">
                      <svg
                        className="icon"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                      >
                        <g data-name="Layer 2">
                          <g data-name="inbox">
                            <rect
                              width="24"
                              height="24"
                              transform="rotate(180 12 12)"
                              opacity="0"
                            ></rect>
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
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="30"
                          height="10"
                          viewBox="0 0 38 15"
                          className="arrow"
                        >
                          <path d="M10 7.519l-.939-.344h0l.939.344zm14.386-1.205l-.981-.192.981.192zm1.276 5.509l.537.843.148-.094.107-.139-.792-.611zm4.819-4.304l-.385-.923h0l.385.923zm7.227.707a1 1 0 0 0 0-1.414L31.343.448a1 1 0 0 0-1.414 0 1 1 0 0 0 0 1.414l5.657 5.657-5.657 5.657a1 1 0 0 0 1.414 1.414l6.364-6.364zM1 7.519l.554.833.029-.019.094-.061.361-.23 1.277-.77c1.054-.609 2.397-1.32 3.629-1.787.617-.234 1.17-.392 1.623-.455.477-.066.707-.008.788.034.025.013.031.021.039.034a.56.56 0 0 1 .058.235c.029.327-.047.906-.39 1.842l1.878.689c.383-1.044.571-1.949.505-2.705-.072-.815-.45-1.493-1.16-1.865-.627-.329-1.358-.332-1.993-.244-.659.092-1.367.305-2.056.566-1.381.523-2.833 1.297-3.921 1.925l-1.341.808-.385.245-.104.068-.028.018c-.011.007-.011.007.543.84zm8.061-.344c-.198.54-.328 1.038-.36 1.484-.032.441.024.94.325 1.364.319.45.786.64 1.21.697.403.054.824-.001 1.21-.09.775-.179 1.694-.566 2.633-1.014l3.023-1.554c2.115-1.122 4.107-2.168 5.476-2.524.329-.086.573-.117.742-.115s.195.038.161.014c-.15-.105.085-.139-.076.685l1.963.384c.192-.98.152-2.083-.74-2.707-.405-.283-.868-.37-1.28-.376s-.849.069-1.274.179c-1.65.43-3.888 1.621-5.909 2.693l-2.948 1.517c-.92.439-1.673.743-2.221.87-.276.064-.429.065-.492.057-.043-.006.066.003.155.127.07.099.024.131.038-.063.014-.187.078-.49.243-.94l-1.878-.689zm14.343-1.053c-.361 1.844-.474 3.185-.413 4.161.059.95.294 1.72.811 2.215.567.544 1.242.546 1.664.459a2.34 2.34 0 0 0 .502-.167l.15-.076.049-.028.018-.011c.013-.008.013-.008-.524-.852l-.536-.844.019-.012c-.038.018-.064.027-.084.032-.037.008.053-.013.125.056.021.02-.151-.135-.198-.895-.046-.734.034-1.887.38-3.652l-1.963-.384zm2.257 5.701l.791.611.024-.031.08-.101.311-.377 1.093-1.213c.922-.954 2.005-1.894 2.904-2.27l-.771-1.846c-1.31.547-2.637 1.758-3.572 2.725l-1.184 1.314-.341.414-.093.117-.025.032c-.01.013-.01.013.781.624zm5.204-3.381c.989-.413 1.791-.42 2.697-.307.871.108 2.083.385 3.437.385v-2c-1.197 0-2.041-.226-3.19-.369-1.114-.139-2.297-.146-3.715.447l.771 1.846z"></path>
                        </svg>
                        <span>Submit</span>
                      </button>
                    </div>
                  </form>
                </div>

                {/* Social Icons (using local images from /footer/) */}
                <div className="social-icon pt-[24px] xl:pt-[30px] flex items-center gap-[18px] xl:gap-[20px] justify-center ">
                  {/* Facebook */}
                  <a
                    href="https://www.facebook.com/people/Icon-Packtech-India-Pvt-Ltd/61561593819510/"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Facebook"
                    className="transition-transform duration-300 hover:scale-110 flex items-center justify-center"
                  >
                    <img
                      src="/footer/facebook-app-symbol.png"
                      alt="Facebook"
                      width="24"
                      height="24"
                      className="w-[20px] h-[20px] xl:w-[22px] xl:h-[22px] object-contain brightness-0 invert"
                    />
                  </a>

                  {/* LinkedIn */}
                  <a
                    href="https://www.linkedin.com/company/icon-packtech/"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="LinkedIn"
                    className="transition-transform duration-300 hover:scale-110 flex items-center justify-center"
                  >
                    <img
                      src="/footer/linkedin.png"
                      alt="LinkedIn"
                      width="24"
                      height="24"
                      className="w-[20px] h-[20px] xl:w-[22px] xl:h-[22px] object-contain brightness-0 invert"
                    />
                  </a>

                  {/* Instagram */}
                  <a
                    href="https://www.instagram.com/icon.packtech/"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Instagram"
                    className="transition-transform duration-300 hover:scale-110 flex items-center justify-center"
                  >
                    <img
                      src="/footer/instagram.png"
                      alt="Instagram"
                      width="24"
                      height="24"
                      className="w-[20px] h-[20px] xl:w-[22px] xl:h-[22px] object-contain brightness-0 invert"
                    />
                  </a>

                  {/* X / Twitter */}
                  <a
                    href="https://x.com/iconpacktech"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="X"
                    className="transition-transform duration-300 hover:scale-110 flex items-center justify-center"
                  >
                    <img
                      src="/footer/twitter.png"
                      alt="X"
                      width="24"
                      height="24"
                      className="w-[20px] h-[20px] xl:w-[22px] xl:h-[22px] object-contain brightness-0 invert"
                    />
                  </a>

                  {/* YouTube */}
                  <a
                    href="https://www.youtube.com/@icon.packtech"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="YouTube"
                    className="transition-transform duration-300 hover:scale-110 flex items-center justify-center"
                  >
                    <img
                      src="/footer/youtube.png"
                      alt="YouTube"
                      width="24"
                      height="24"
                      className="w-[22px] h-[22px] xl:w-[24px] xl:h-[24px] object-contain brightness-0 invert"
                    />
                  </a>
                </div>
              </div>
            </div>

            {/* ================= RIGHT COLUMN: 4 ALIGNED COLUMNS FOR ROW 1 & ROW 2 ================= */}
            <div className="flex-1 w-full flex flex-col justify-between gap-8 xl:gap-14">
              {/* ================= ROW 1: NAVIGATION CATEGORIES ================= */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4 xl:gap-6 2xl:gap-8">
                {/* Col 1: Links (line starts below heading, on list only) */}
                <div className="min-w-0 text-left">
                  <h5 className="font-[500] text-[16px] xl:text-[18px] text-white mb-3 xl:mb-3 min-h-[44px] xl:min-h-[48px] flex items-start">
                    Links
                  </h5>
                  <ul className=" border-l-[0.4px] border-[#ffffff2d] pl-4 xl:pl-5">
                    {[
                      { name: "Home", path: "/" },
                      { name: "About US", path: "/about-us" },
                      { name: "Career", path: "/careers" },
                      { name: "Events", path: "/events" },
                      { name: "Contact Us", path: "/contact-us" },
                      { name: "Privacy Policy", path: "#privacy" },
                      { name: "Terms & Conditions", path: "#terms" },
                      { name: "Imprint", path: "#imprint" },
                    ].map((item, idx) => (
                      <li key={idx}>
                        <button
                          type="button"
                          onClick={() =>
                            item.path.startsWith("/")
                              ? handleLink(item.path)
                              : null
                          }
                          className="group relative block text-left text-[12px] xl:text-[13px] text-[#ffffffb3] hover:text-white transition-all duration-300 leading-relaxed"
                        >
                          <span>{item.name}</span>
                          <span className="absolute -bottom-[2px] left-0 h-[1px] w-0 bg-white transition-all duration-300 group-hover:w-full" />
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Col 2: Packaging as per Product (line starts below heading, on list only) */}
                <div className="min-w-0 text-left">
                  <h5 className="font-[500] text-[16px] xl:text-[18px] text-white mb-3 xl:mb-3 min-h-[44px] xl:min-h-[48px] flex items-start">
                    Packaging as per Product
                  </h5>
                  <ul className="space-y-1 xl:space-y-0 border-l-[0.4px] border-[#ffffff2d] pl-4 xl:pl-[15px] pb-2">
                    {[
                      { name: "Paneer & Cheese", slug: "paneer-cheese" },
                      { name: "Dates", slug: "dates" },
                      { name: "Sweet", slug: "sweet" },
                      { name: "Curd", slug: "curd" },
                      { name: "Tamarind", slug: "tamarind" },
                      { name: "Sticky Powder", slug: "sticky-powder" },
                    ].map((item, i) => (
                      <li key={i}>
                        <button
                          type="button"
                          onClick={() =>
                            handleLink(`/packaging-as-per-product/${item.slug}`)
                          }
                          className="group relative block text-left text-[12px] xl:text-[13px] text-[#ffffffb3] hover:text-white transition-all duration-300 leading-relaxed"
                        >
                          <span>{item.name}</span>
                          <span className="absolute -bottom-[2px] left-0 h-[1px] w-0 bg-white transition-all duration-300 group-hover:w-full" />
                        </button>
                      </li>
                    ))}
                    <li className="pt-2">
                      <button
                        type="button"
                        onClick={() => handleLink("/packaging-as-per-product")}
                        className="flex items-center gap-[6px] text-[13px] xl:text-[14px] font-[500] text-white hover:text-red-400 transition-all duration-300"
                      >
                        <span>View More</span>
                        <ArrowRight size={18} className="rotate-[-50deg]" />
                      </button>
                    </li>
                  </ul>
                </div>

                {/* Col 3: Packaging Types (line starts below heading, on list only) */}
                <div className="min-w-0 text-left">
                  <h5 className="font-[500] text-[16px] xl:text-[18px] text-white mb-3 xl:mb-3 min-h-[44px] xl:min-h-[48px] flex items-start">
                    Packaging Types
                  </h5>
                  <ul className="space-y-1 xl:space-y-0 border-l-[0.4px] border-[#ffffff2d] pl-4 xl:pl-[15px] pb-2">
                    {[
                      { name: "Counting", slug: "counting" },
                      { name: "Pick", slug: "pick" },
                      { name: "Strapping", slug: "strapping" },
                      { name: "Standy Pouch", slug: "standy-pouch" },
                      { name: "Seal", slug: "seal" },
                      { name: "Fill", slug: "fill" },
                    ].map((item, i) => (
                      <li key={i}>
                        <button
                          type="button"
                          onClick={() =>
                            handleLink(`/packaging-solutions/${item.slug}`)
                          }
                          className="group relative block text-left text-[12px] xl:text-[13px] text-[#ffffffb3] hover:text-white transition-all duration-300 leading-relaxed"
                        >
                          <span>{item.name}</span>
                          <span className="absolute -bottom-[2px] left-0 h-[1px] w-0 bg-white transition-all duration-300 group-hover:w-full" />
                        </button>
                      </li>
                    ))}
                    <li className="pt-2">
                      <button
                        type="button"
                        onClick={() => handleLink("/packaging-solutions")}
                        className="flex items-center gap-[6px] text-[13px] xl:text-[14px] font-[500] text-white hover:text-red-400 transition-all duration-300"
                      >
                        <span>View More</span>
                        <ArrowRight size={18} className="rotate-[-50deg]" />
                      </button>
                    </li>
                  </ul>
                </div>

                {/* Col 4: All Products (line starts below heading, on list only) */}
                <div className="min-w-0 text-left">
                  <h5 className="font-[500] text-[16px] xl:text-[18px] text-white mb-3 xl:mb-3 min-h-[44px] xl:min-h-[48px] flex items-start">
                    All Products
                  </h5>
                  <ul className="space-y-1 xl:space-y-0 border-l-[0.4px] border-[#ffffff2d] pl-4 xl:pl-[15px] pb-2">
                    {[
                      {
                        name: "Thermoforming Vacuum Packing",
                        slug: "thermoforming-vacuum-packing-machine-itf-250",
                      },
                      { name: "Tray Sealer", slug: "inline-tray-sealer-map" },
                      {
                        name: "Cup Filing Sealing",
                        slug: "linear-cup-filling-sealing-machine",
                      },
                      {
                        name: "Vacuum Packing",
                        slug: "double-chamber-vacuum-packing-machine",
                      },
                      {
                        name: "Dates Processing",
                        slug: "thermoforming-vacuum-packing-machine-itf-400",
                      },
                      {
                        name: "Pick-Fill-Seal Machine",
                        slug: "premade-pouch-pick-fill-seal-machine",
                      },
                    ].map((item, i) => (
                      <li key={i}>
                        <button
                          type="button"
                          onClick={() =>
                            handleLink(`/product-details/${item.slug}`)
                          }
                          className="group relative block text-left text-[12px] xl:text-[13px] text-[#ffffffb3] hover:text-white transition-all duration-300 leading-relaxed"
                        >
                          <span>{item.name}</span>
                          <span className="absolute -bottom-[2px] left-0 h-[1px] w-0 bg-white transition-all duration-300 group-hover:w-full" />
                        </button>
                      </li>
                    ))}
                    <li className="pt-2">
                      <button
                        type="button"
                        onClick={() => handleLink("/all-packaging-machines")}
                        className="flex items-center gap-[6px] text-[13px] xl:text-[14px] font-[500] text-white hover:text-red-400 transition-all duration-300"
                      >
                        <span>View More</span>
                        <ArrowRight size={18} className="rotate-[-50deg]" />
                      </button>
                    </li>
                  </ul>
                </div>
              </div>

              {/* ================= ROW 2: GET IN TOUCH & POPULAR BLOGS ================= */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4 xl:gap-6 2xl:gap-5 pt-2 xl:pt-4">
                {/* Col 1: Corporate Office (line starts below heading) */}
                <div className="min-w-0 text-left">
                  <h5 className="font-[400] text-[16px] xl:text-[18px] text-white mb-3 xl:mb-1 min-h-[24px] xl:min-h-[27px] flex items-center">
                    Get In Touch
                  </h5>
                  <div className="space-y-0 border-l-[0.4px] border-[#ffffff2d] pl-4 xl:pl-5 pb-2">
                    <h6 className="font-[600] pt-3 text-white text-[13px] xl:text-[13px]">
                      Corporate Office :-
                    </h6>
                    <a
                      href="https://www.google.com/maps/place/ICON+INDUSTRIES/@22.236774,70.8015475,17z/data=!3m1!4b1!4m6!3m5!1s0x3959ca98477fbf91:0xff4eb073219a81d4!8m2!3d22.236774!4d70.8015475!16s%2Fg%2F1pxwlmbfq?entry=ttu&g_ep=EgoyMDI1MDcyNy4wIKXMDSoASAFQAw%3D%3D"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative block text-[12px] xl:text-[13px] text-[#ffffffb3] hover:text-white transition-all leading-relaxed"
                    >
                      <span>
                        "Happy Home", Plot No.8, Atlas Industrial Estate, N.H.
                        No. 8, Opp. Hotel Krishna Park, Nr. Gondal Chowkdi,
                        Rajkot – 360004, Gujarat, India
                      </span>
                      <span className="absolute left-0 -bottom-[2px] h-[1px] w-0 bg-white transition-all duration-300 group-hover:w-full" />
                    </a>
                    <div className="text-[12px] xl:text-[13px] text-[#ffffff80]">
                      GST No: 24ARUPP0359E1ZL
                    </div>
                    <div className="text-[12px] xl:text-[13px] pt-1">
                      <span className="text-[#ffffff80]">Phone:</span>{" "}
                      <a
                        href="tel:+919909036307"
                        className="group relative inline-block text-[#ffffffb3] hover:text-white transition-all"
                      >
                        <span>+91 9909036307</span>
                        <span className="absolute left-0 -bottom-[2px] h-[1px] w-0 bg-white transition-all duration-300 group-hover:w-full" />
                      </a>
                    </div>
                    <div className="text-[12px] xl:text-[13px]">
                      <span className="text-[#ffffff80] block">Email:</span>
                      <a
                        href="mailto:info@iconindustriesindia.com"
                        className="group relative inline-block text-[#ffffffb3] hover:text-white transition-all break-all"
                      >
                        <span>info@iconindustriesindia.com</span>
                        <span className="absolute left-0 -bottom-[2px] h-[1px] w-0 bg-white transition-all duration-300 group-hover:w-full" />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Col 2: State of the art Factory (line starts below heading) */}
                <div className="min-w-0 text-left max-w-[340px]">
                  <h5
                    className="font-[400] text-[16px] xl:text-[18px] text-transparent mb-3 xl:mb-4 min-h-[24px] xl:min-h-[27px] select-none hidden lg:block"
                    aria-hidden="true"
                  >
                    &nbsp;
                  </h5>
                  <div className="space-y-2 border-l-[0.4px] border-[#ffffff2d] pl-4 xl:pl-5">
                    <h6 className="font-[600] text-white text-[13px] xl:text-[13px]">
                      State of the art Factory :-
                    </h6>
                    <a
                      href="https://www.google.com/maps/place/ICON+PACKTECH+(INDIA)+PVT+LTD./@22.179618,70.7100117,3a,75y,68.42h,83.07t/data=!3m7!1e1!3m5!1slBV7KF-mIcdVXIr2dVPDpQ!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fcb_client%3Dmaps_sv.tactile%26w%3D900%26h%3D600%26pitch%3D6.926012519226646%26panoid%3DlBV7KF-mIcdVXIr2dVPDpQ%26yaw%3D68.42246486532297!7i13312!8i6656!4m9!1m2!2m1!1s%22Happy+Home%22,+Plot+No.8,+Atlas+Industrial+Estate,+N.H.+No.+8,+Opp.+Hotel+Krishna+Park,+Nr.+Gondal+Chowkdi,+Rajkot+%E2%80%93+360004,+Gujarat,+India+map+address!3m5!1s0x395833002ee53373:0xfb02dfe3c7197ac4!8m2!3d22.179705!4d70.7097974!16s%2Fg%2F11lct5_lfj?entry=ttu&g_ep=EgoyMDI1MDcyNy4wIKXMDSoASAFQAw%3D%3D"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative block text-[12px] xl:text-[13px] text-[#ffffffb3] hover:text-white transition-all leading-relaxed"
                    >
                      <span>
                        Plot no 24, J K Industrial Area, Ravki-Makhavad Road,
                        Taravada,Rajkot – 360004, Gujarat, India
                      </span>
                      <span className="absolute left-0 -bottom-[2px] h-[1px] w-0 bg-white transition-all duration-300 group-hover:w-full" />
                    </a>
                    <div className="text-[12px] xl:text-[13px] text-[#ffffff80]">
                      GST No: 24AAHCI6683H1ZA
                    </div>
                  </div>
                </div>

                {/* Col 3 & 4: Popular Blogs (line starts below heading) */}

                <div className="min-w-0 text-left col-span-1 sm:col-span-2 lg:col-span-2">
                  <h5
                    className="font-[600] text-[16px] xl:text-[18px] text-transparent mb-3 xl:mb-4 min-h-[24px] xl:min-h-[27px] select-none hidden lg:block"
                    aria-hidden="true"
                  >
                    &nbsp;
                  </h5>
                  {/* <h5 className="font-[500] text-[16px] xl:text-[18px] text-white mb-3 xl:mb-4 min-h-[24px] xl:min-h-[27px] flex items-center">
                    Popular Blogs
                  </h5> */}
                  <div className="border-l-[0.4px] border-[#ffffff2d] pl-4 xl:pl-5">
                    <h5 className="font-[500] text-[13px] xl:text-[13px] text-white mb-3 xl:mb-4 min-h-[24px] xl:min-h-[27px] flex items-center">
                      Popular Blogs
                    </h5>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 xl:gap-x-6 gap-y-3">
                      {/* Blog 1 */}
                      <button
                        type="button"
                        onClick={() =>
                          handleLink(`/blogs/${popularBlogs[0].slug}`)
                        }
                        className="group flex items-center gap-3 text-left w-full cursor-pointer"
                      >
                        <img
                          src={popularBlogs[0].image}
                          alt={popularBlogs[0].title}
                          width="52"
                          height="52"
                          className="w-[44px] h-[44px] xl:w-[48px] xl:h-[48px] 2xl:w-[52px] 2xl:h-[52px] rounded-[10px] object-cover border border-[#ffffff1f] flex-shrink-0"
                          loading="lazy"
                          decoding="async"
                          onError={(e) => {
                            e.currentTarget.src = "/home/blog/blog1.webp";
                          }}
                        />
                        <div className="relative min-w-0 flex-1">
                          <p className="text-[11px] xl:text-[12px] 2xl:text-[13px] leading-[15px] xl:leading-[17px] text-[#ffffffb3] group-hover:text-white transition-all line-clamp-2 duration-300">
                            {popularBlogs[0].title}
                          </p>
                          <span className="absolute left-0 -bottom-[2px] h-[1px] w-0 bg-white transition-all duration-300 group-hover:w-full" />
                        </div>
                      </button>

                      {/* Blog 2 */}
                      <button
                        type="button"
                        onClick={() =>
                          handleLink(`/blogs/${popularBlogs[1].slug}`)
                        }
                        className="group flex items-center gap-3 text-left w-full cursor-pointer"
                      >
                        <img
                          src={popularBlogs[1].image}
                          alt={popularBlogs[1].title}
                          width="52"
                          height="52"
                          className="w-[44px] h-[44px] xl:w-[48px] xl:h-[48px] 2xl:w-[52px] 2xl:h-[52px] rounded-[10px] object-cover border border-[#ffffff1f] flex-shrink-0"
                          loading="lazy"
                          decoding="async"
                          onError={(e) => {
                            e.currentTarget.src = "/home/blog/blog2.webp";
                          }}
                        />
                        <div className="relative min-w-0 flex-1">
                          <p className="text-[11px] xl:text-[12px] 2xl:text-[13px] leading-[15px] xl:leading-[17px] text-[#ffffffb3] group-hover:text-white transition-all line-clamp-2 duration-300">
                            {popularBlogs[1].title}
                          </p>
                          <span className="absolute left-0 -bottom-[2px] h-[1px] w-0 bg-white transition-all duration-300 group-hover:w-full" />
                        </div>
                      </button>

                      {/* Blog 3 */}
                      <button
                        type="button"
                        onClick={() =>
                          handleLink(`/blogs/${popularBlogs[2].slug}`)
                        }
                        className="group flex items-center gap-3 text-left w-full cursor-pointer"
                      >
                        <img
                          src={popularBlogs[2].image}
                          alt={popularBlogs[2].title}
                          width="52"
                          height="52"
                          className="w-[44px] h-[44px] xl:w-[48px] xl:h-[48px] 2xl:w-[52px] 2xl:h-[52px] rounded-[10px] object-cover border border-[#ffffff1f] flex-shrink-0"
                          loading="lazy"
                          decoding="async"
                          onError={(e) => {
                            e.currentTarget.src = "/home/blog/blog3.webp";
                          }}
                        />
                        <div className="relative min-w-0 flex-1">
                          <p className="text-[11px] xl:text-[12px] 2xl:text-[13px] leading-[15px] xl:leading-[17px] text-[#ffffffb3] group-hover:text-white transition-all line-clamp-2 duration-300">
                            {popularBlogs[2].title}
                          </p>
                          <span className="absolute left-0 -bottom-[2px] h-[1px] w-0 bg-white transition-all duration-300 group-hover:w-full" />
                        </div>
                      </button>

                      {/* Blog 4 */}
                      <button
                        type="button"
                        onClick={() =>
                          handleLink(`/blogs/${popularBlogs[3].slug}`)
                        }
                        className="group flex items-center gap-3 text-left w-full cursor-pointer"
                      >
                        <img
                          src={popularBlogs[3].image}
                          alt={popularBlogs[3].title}
                          width="52"
                          height="52"
                          className="w-[44px] h-[44px] xl:w-[48px] xl:h-[48px] 2xl:w-[52px] 2xl:h-[52px] rounded-[10px] object-cover border border-[#ffffff1f] flex-shrink-0"
                          loading="lazy"
                          decoding="async"
                          onError={(e) => {
                            e.currentTarget.src = "/home/blog/blog4.webp";
                          }}
                        />
                        <div className="relative min-w-0 flex-1">
                          <p className="text-[11px] xl:text-[12px] 2xl:text-[13px] leading-[15px] xl:leading-[17px] text-[#ffffffb3] group-hover:text-white transition-all line-clamp-2 duration-300">
                            {popularBlogs[3].title}
                          </p>
                          <span className="absolute left-0 -bottom-[2px] h-[1px] w-0 bg-white transition-all duration-300 group-hover:w-full" />
                        </div>
                      </button>
                    </div>

                    {/* View More Blog link */}
                    <div className="pt-2 xl:pt-3">
                      <button
                        type="button"
                        onClick={() => handleLink("/blogs")}
                        className="flex items-center gap-[6px] text-[13px] xl:text-[14px] font-[500] text-white hover:text-red-400 transition-all duration-300"
                      >
                        <span>View More</span>
                        <ArrowRight size={18} className="rotate-[-50deg]" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
