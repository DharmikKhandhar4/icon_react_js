import { useState, useEffect } from 'react';
import { X, User, Mail, Phone, MessageSquare, Send } from 'lucide-react';

export default function InquiryModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };

    document.addEventListener('keydown', handleKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ name: '', email: '', phone: '', message: '' });
        onClose();
      }, 1500);
    }, 600);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="inquiry-modal-title"
      className="fixed inset-0 z-[2500] font-Poppins flex items-center justify-center bg-black/65 backdrop-blur-md p-3 sm:p-4 transition-opacity duration-300"
      style={{ opacity: 1 }}
    >
      {/* Backdrop overlay */}
      <div className="absolute inset-0" onClick={onClose}></div>

      {/* Modal Dialog Card */}
      <div
        className="relative w-[95%] sm:w-full max-w-[480px] max-h-[92vh] overflow-y-auto bg-white rounded-2xl sm:rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.3)] border border-gray-100 z-10 animate-in fade-in zoom-in-95 duration-200 lg:min-h-[460px]"
        style={{ opacity: 1, transform: 'none' }}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close inquiry popup"
          className="absolute top-3 right-3 sm:top-4 sm:right-4 text-gray-400 hover:text-red-600 bg-gray-100/80 hover:bg-red-50 p-1.5 sm:p-2 rounded-full transition-all duration-200 z-20 cursor-pointer"
        >
          <X className="lucide lucide-x w-4 h-4" />
        </button>

        <div className="p-4 sm:p-7">
          {/* Header & Logo */}
          <div className="flex flex-col items-center text-center mb-4 sm:mb-5">
            <div className="mb-2 sm:mb-2.5">
              <img
                src="/logo.svg"
                alt="ICON Industries Logo"
                className="h-8 sm:h-10 w-auto object-contain mx-auto"
              />
            </div>
            <h2
              id="inquiry-modal-title"
              className="text-lg sm:text-[23px] font-bold text-gray-900 tracking-tight"
            >
              Inquire With Us
            </h2>
            <p className="text-gray-500 text-[11px] sm:text-[13px] mt-0.5 max-w-xs leading-4">
              Send us your requirement and our packaging machinery experts will assist you.
            </p>
          </div>

          {/* Form */}
          <form className="space-y-2.5 sm:space-y-3" onSubmit={handleSubmit}>
            {/* Name */}
            <div>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400 group-focus-within:text-[#e00000] transition-colors">
                  <User className="lucide lucide-user w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Full Name *"
                  autoComplete="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full pl-9 sm:pl-10 pr-3 sm:pr-4 py-2 sm:py-2.5 bg-gray-50/70 hover:bg-white focus:bg-white text-sm sm:text-base text-gray-800 placeholder-gray-400 placeholder:text-md rounded-lg sm:rounded-xl border outline-none transition-all duration-200 border-gray-200 hover:border-red-200 focus:border-[#e00000] focus:ring-2 sm:focus:ring-4 focus:ring-red-500/10 shadow-xs"
                />
              </div>
            </div>

            {/* Email & Phone Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
              <div>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400 group-focus-within:text-[#e00000] transition-colors">
                    <Mail className="lucide lucide-mail w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address *"
                    autoComplete="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full pl-9 sm:pl-10 pr-3 sm:pr-4 py-2 sm:py-2.5 bg-gray-50/70 hover:bg-white focus:bg-white text-sm sm:text-base text-gray-800 placeholder-gray-400 placeholder:text-md rounded-lg sm:rounded-xl border outline-none transition-all duration-200 border-gray-200 hover:border-red-200 focus:border-[#e00000] focus:ring-2 sm:focus:ring-4 focus:ring-red-500/10 shadow-xs"
                  />
                </div>
              </div>

              <div>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400 group-focus-within:text-[#e00000] transition-colors">
                    <Phone className="lucide lucide-phone w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </div>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number *"
                    autoComplete="tel"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full pl-9 sm:pl-10 pr-3 sm:pr-4 py-2 sm:py-2.5 bg-gray-50/70 hover:bg-white focus:bg-white text-sm sm:text-base text-gray-800 placeholder-gray-400 placeholder:text-md rounded-lg sm:rounded-xl border outline-none transition-all duration-200 border-gray-200 hover:border-red-200 focus:border-[#e00000] focus:ring-2 sm:focus:ring-4 focus:ring-red-500/10 shadow-xs"
                  />
                </div>
              </div>
            </div>

            {/* Message Requirement */}
            <div>
              <div className="relative group">
                <div className="absolute top-2.5 sm:top-4 left-3 flex items-center pointer-events-none text-gray-400 group-focus-within:text-[#e00000] transition-colors">
                  <MessageSquare className="lucide lucide-message-square w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </div>
                <textarea
                  rows="2"
                  name="message"
                  placeholder="Tell us about your machine requirement..."
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full pl-9 sm:pl-10 pr-3 sm:pr-4 py-2 sm:py-3 bg-gray-50/70 hover:bg-white focus:bg-white text-sm sm:text-base text-gray-800 placeholder-gray-400 placeholder:text-md rounded-lg sm:rounded-xl border border-gray-200 hover:border-red-200 focus:border-[#e00000] focus:ring-2 sm:focus:ring-4 focus:ring-red-500/10 outline-none transition-all duration-200 resize-none shadow-xs"
                ></textarea>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full mt-1.5 sm:mt-2 py-2.5 sm:py-3.5 px-5 sm:px-6 bs-mix-red text-white font-semibold rounded-lg sm:rounded-xl transition-all duration-200 flex items-center justify-center gap-2 text-xs sm:text-[15px] disabled:opacity-60 cursor-pointer"
              tabIndex={0}
            >
              <div className="flex items-center gap-1.5 sm:gap-2">
                <span>{isSubmitted ? 'Inquiry Sent Successfully!' : isSubmitting ? 'Sending...' : 'Inquire Now'}</span>
                {!isSubmitted && (
                  <Send className="lucide lucide-send w-3.5 h-3.5 sm:w-4 sm:h-4" />
                )}
              </div>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
