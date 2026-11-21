import { useState } from 'react';
import { Phone, Mail, MapPin, Building2, Send, CheckCircle2 } from 'lucide-react';
import WhyChooseUsSection from '../components/home/WhyChooseUsSection';
import FaqSection from '../components/home/FaqSection';
import LatestInsightsSection from '../components/home/LatestInsightsSection';

export default function ContactUs({ onNavigate }) {
  const [isBrochureOpen, setIsBrochureOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    message: '',
  });
  const [brochureForm, setBrochureForm] = useState({
    name: '',
    companyName: '',
    email: '',
    phone: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleBrochureInput = (e) => {
    const { name, value } = e.target;
    setBrochureForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleBrochureSubmit = (e) => {
    e.preventDefault();
    const link = document.createElement('a');
    link.href = '/Complete_Brochure.pdf';
    link.download = 'Complete_Brochure.pdf';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setIsBrochureOpen(false);
    setBrochureForm({ name: '', companyName: '', email: '', phone: '' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        message: '',
      });
    }, 4000);
  };

  return (
    <div className="min-h-screen bg-white pb-  font-Poppins">
      {/* ================= 1. HERO / BANNER SECTION ================= */}
      <div className="max-w-7xl px-4 2xl:w-[1200px] lg:w-[80%] md11:w-[76%]  mx-auto pt-4">
        <section className="relative bg-gradient-to-br from-red-50  to-red-100  py-3 md:py-[20px] rounded-[16px]  shadow-sm overflow-hidden">
          {/* Decorative Dot Background Pattern */}
          {/* <div 
            className="absolute inset-0 opacity-15 pointer-events-none"
            style={{
              backgroundImage: 'radial-gradient(#dc2626 1px, transparent 1px)',
              backgroundSize: '24px 24px',
            }}
          /> */}

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-3xl lg:text-3xl font-bold text-gray-900 mb-6 ">
                Let's <span className="text-red-600">Connect</span> and Build Your Future
              </h1>

              <p className="
              text-[13px] !md:text-[15px] text-gray-700 mb-5 leading-relaxed
              ">
                Whether you're just getting started or ready to level up your packaging operations, our team is here to help. No pressure, just real conversations that move you forward.
              </p>

              <div className="flex flex-row gap-4 justify-center items-center">
                <button
                  type="button"
                  onClick={() => setIsBrochureOpen(true)}
                  className="
                  border border-red-600 text-red-600 hover:bg-red-50 text-[12px] font-medium px-4 py-2 rounded-lg transition
                  "
                >
                  {/* <FileText className="w-4 h-4" /> */}
                  <span>Explore Our Brochure</span>
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* ================= 2. GET IN TOUCH / CONTACT FORM SECTION ================= */}
      <div className="max-w-7xl px-4   pt-16 pb-10   font-Poppins w-[90%] md11:w-[76%]  2xl:w-[1200px]    h-[100%] mx-auto">
        {/* Section Heading */}
        <div className="text-center space-y-3 mb-14">
          <h2 className="text-5xl md:text-5xl font-bold tracking-tight text-gray-900">
           <span className="bg-[linear-gradient(38.46deg,red_.5%,#610303_98.48%)] bg-clip-text text-transparent">  Get in Touch</span>
          </h2>
          <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto ">
            Ready to take control of your packaging operations? Our team of seasoned experts is here to guide you every step of the way.
          </p>
        </div>

        {/* 2-Column Grid: Form & Info */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Left Column: Contact Form */}
          <div className="lg:col-span-6">
            <div className="relative p-6 sm:p-8 border border-red-500/80 bg-white rounded-[16px] shadow-lg">
              {submitted ? (
                <div className="py-12 flex flex-col items-center text-center space-y-3 animate-in fade-in zoom-in duration-300">
                  <div className="w-14 h-14 rounded-full bg-red-50 flex items-center justify-center text-red-600 mb-2">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Thank You for Connecting!</h3>
                  <p className="text-sm text-gray-600 max-w-md">
                    We have received your message. An ICON packaging specialist will get in touch with you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* First Name & Last Name */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-[32px] ">
                    <div className="relative">
                      <input
                        type="text"
                        name="firstName"
                        required
                        value={formData.firstName}
                        onChange={handleChange}
                        placeholder="First Name"
                        className="w-full h-[42px] pl-[10px] border-b border-[#ff1d1d] bg-transparent font-Poppins text-gray-900 text-[15px] placeholder:text-gray-400 placeholder:font-normal focus:outline-none  transition rounded-none"
                      />
                    </div>

                    <div className="relative">
                      <input
                        type="text"
                        name="lastName"
                        required
                        value={formData.lastName}
                        onChange={handleChange}
                        placeholder="Last Name"
                        className="w-full h-[42px] pl-[10px] border-b border-[#ff1d1d] bg-transparent font-Poppins text-gray-900 text-[15px] placeholder:text-gray-400 placeholder:font-normal focus:outline-none transition rounded-none"
                      />
                    </div>
                  </div>

                  {/* Phone & Email Address */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
                    <div className="relative">
                      <input
                        type="tel"
                        name="phone"
                        required
                        maxLength={10}
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Phone"
                        className="w-full h-[42px] pl-[10px] border-b border-[#ff1d1d] bg-transparent font-Poppins text-gray-900 text-[15px] placeholder:text-gray-400 placeholder:font-normal focus:outline-none focus:border-b-2 focus:border-b-red-600 transition rounded-none"
                      />
                    </div>

                    <div className="relative">
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Email Address"
                        className="w-full h-[42px] pl-[10px] border-b border-[#ff1d1d] bg-transparent font-Poppins text-gray-900 text-[15px] placeholder:text-gray-400 placeholder:font-normal focus:outline-none focus:border-b-2 focus:border-b-red-600 transition rounded-none"
                      />
                    </div>
                  </div>

                  {/* Message Textarea */}
                  <div className="relative">
                  
                    <textarea
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Message"
                      className="w-full p-3.5 rounded-md border border-red-400 bg-white text-gray-900 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-600 transition resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full font-semibold text-red-600  border border-red-600  py-3 px-4 rounded-md transition-all duration-200 shadow-sm hover:shadow flex items-center justify-center gap-2 group cursor-pointer"
                  >
                    <span>Send Message</span>
                  
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Right Column: Contact Details */}
          <div className="lg:col-span-6 lg:py-2">
            <div className="space-y-2">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 ">
                Let's Collaborate to Engineer the Future
              </h2>
              <p className="text-gray-600 text-sm sm:text-base ">
                From product development to precision packaging machinery, ICON Industries is equipped to deliver. Reach out to us for custom solutions or detailed consultations.
              </p>

              {/* Contact Info List */}
              <div className="grid gap-[15px] pt-[30px]">
                
                {/* Call Us */}
                <div className="flex items-start gap-4  rounded-xl hover:bg-red-50/40 transition-colors">
                  <div className="w-10 h-10 rounded-full bg-red-100/70 flex items-center justify-center flex-shrink-0 text-red-600">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-gray-700 font-semibold ">Call Us</p>
                    <a
                      href="tel:+919909036307"
                      className="text-red-600  text-[13px] font-medium transition-colors"
                    >
                      +91 99090 36307
                    </a>
                  </div>
                </div>

                {/* Email Us */}
                <div className="flex items-start gap-4  rounded-xl hover:bg-red-50/40 transition-colors">
                  <div className="w-10 h-10 rounded-full bg-red-100/70 flex items-center justify-center flex-shrink-0 text-red-600">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-gray-700 font-semibold ">Email Us</p>
                    <a
                      href="mailto:info@iconindustriesindia.com"
                      className="text-red-600  text-[13px] font-medium transition-colors"
                    >
                      info@iconindustriesindia.com
                    </a>
                  </div>
                </div>

                {/* Corporate Office */}
                <div className="flex items-center gap-4  rounded-xl hover:bg-red-50/40 transition-colors">
                  <div className="w-10 h-10 flex-shrink-0 rounded-full bg-red-100/70 flex items-center justify-center text-red-600 mt-0.5">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div className="space-y-0">
                    <p className="text-gray-700 font-semibold  mb-1">Corporate Office :-</p>
                    <a
                      href="https://www.google.com/maps/place/ICON+INDUSTRIES/@22.236774,70.8015475,17z/data=!3m1!4b1!4m6!3m5!1s0x3959ca98477fbf91:0xff4eb073219a81d4!8m2!3d22.236774!4d70.8015475!16s%2Fg%2F1pxwlmbfq?entry=ttu&g_ep=EgoyMDI1MDcyNy4wIKXMDSoASAFQAw%3D%3D"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-red-600  text-[13px] leading-relaxed block"
                    >
                      "Happy Home", Plot No.8, Atlas Industrial Estate, N.H. No. 8, Opp. Hotel Krishna Park, Nr. Gondal Chowkdi, Rajkot – 360004, Gujarat, India.
                    </a>
                    <span className="inline-block text-[13px] font-[500]  text-red-600  ">
                      GST No: 24ARUPP0359E1ZL
                    </span>
                  </div>
                </div>

                {/* State of the art Factory */}
                <div className="flex items-center gap-4  rounded-xl hover:bg-red-50/40 transition-colors">
                  <div className="w-10 h-10 flex-shrink-0 rounded-full bg-red-100/70 flex items-center justify-center text-red-600 mt-0.5">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div className="space-y-0">
                    <p className="text-gray-700 font-semibold  mb-1">State of the art Factory :-</p>
                    <a
                      href="https://www.google.com/maps/place/ICON+PACKTECH+(INDIA)+PVT+LTD./@22.179618,70.7100117,3a,75y,68.42h,83.07t/data=!3m7!1e1!3m5!1slBV7KF-mIcdVXIr2dVPDpQ!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fcb_client%3Dmaps_sv.tactile%26w%3D900%26h%3D600%26pitch%3D6.926012519226646%26panoid%3DlBV7KF-mIcdVXIr2dVPDpQ%26yaw%3D68.42246486532297!7i13312!8i6656!4m9!1m2!2m1!1s%22Happy+Home%22,+Plot+No.8,+Atlas+Industrial+Estate,+N.H.+No.+8,+Opp.+Hotel+Krishna+Park,+Nr.+Gondal+Chowkdi,+Rajkot+%E2%80%93+360004,+Gujarat,+India+map+address!3m5!1s0x395833002ee53373:0xfb02dfe3c7197ac4!8m2!3d22.179705!4d70.7097974!16s%2Fg%2F11lct5_lfj?entry=ttu&g_ep=EgoyMDI1MDcyNy4wIKXMDSoASAFQAw%3D%3D"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-red-600  text-[13px] leading-relaxed block"
                    >
                      Plot no 24, J K Industrial Area, Ravki-Makhavad Road, Taravada, Rajkot – 360004, Gujarat, India.
                    </a>
                    <span className="inline-block text-xs font-[500] text-red-600  rounded">
                      GST No: 24AAHCI6683H1ZA
                    </span>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>

      {/* ================= 3. WHY CHOOSE US SECTION ================= */}
      <WhyChooseUsSection />

      {/* ================= 4. FAQ SECTION ================= */}
      <FaqSection />

      {/* ================= 5. BLOG SECTION ================= */}
      <LatestInsightsSection />

      {/* Brochure Popup */}
      {isBrochureOpen && (
        <div
          className="fixed inset-0 z-[3000] bg-black/60 font-Poppins backdrop-blur-md flex items-center justify-center px-4 animate-[fadeIn_0.25s_ease-out_forwards]"
        >
          <div
            className="relative w-full max-w-[850px] bg-white rounded-3xl shadow-2xl flex flex-col md:flex-row overflow-hidden animate-[popIn_0.35s_cubic-bezier(0.34,1.56,0.64,1)_forwards]"
          >
            {/* Close Button */}
            <button
              onClick={() => setIsBrochureOpen(false)}
              className="absolute top-3 right-4 text-red-500 text-xl z-10 cursor-pointer"
            >
              ✕
            </button>

            {/* Left Image */}
            <div className="md:w-1/2 w-full h-[250px] md:h-auto">
              <img
                src="/assets/2image-BNMcTZMN.webp"
                alt="Contact ICON Packtech — packaging machine manufacturer in Rajkot, Gujarat, India"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Right Form */}
            <div className="md:w-1/2 w-full p-6 flex flex-col justify-center font-serif">
              <h2 className="text-2xl font-[600] mb-2 md:text-[20px]">Download Brochure</h2>
              <p className="text-sm text-gray-500 mb-4">
                Fill your details to access brochure instantly.
              </p>

              <form onSubmit={handleBrochureSubmit} className="space-y-3">
                <input
                  name="name"
                  value={brochureForm.name}
                  onChange={handleBrochureInput}
                  placeholder="Name"
                  required
                  className="w-full h-[45px] border border-gray-200 rounded-lg px-4"
                />
                <input
                  name="companyName"
                  value={brochureForm.companyName}
                  onChange={handleBrochureInput}
                  placeholder="Company Name"
                  required
                  className="w-full h-[45px] border border-gray-200 rounded-lg px-4"
                />
                <input
                  type="email"
                  name="email"
                  value={brochureForm.email}
                  onChange={handleBrochureInput}
                  placeholder="Email"
                  required
                  className="w-full h-[45px] border border-gray-200 rounded-lg px-4"
                />
                <input
                  name="phone"
                  value={brochureForm.phone}
                  onChange={handleBrochureInput}
                  placeholder="Phone"
                  required
                  className="w-full h-[45px] border border-gray-200 rounded-lg px-4"
                />
                <button
                  type="submit"
                  className="w-full h-[48px] bg-red-500/90 text-white rounded-lg font-[600] cursor-pointer text-[14px]"
                >
                  Submit &amp; Download
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
