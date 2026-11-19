import { useState, useEffect } from "react";
import { X, Send, User, Mail, Phone, MessageSquare, CheckCircle } from "lucide-react";

/**
 * InquiryModal Component
 * - Pure UI modal without backend API integration.
 * - Sleek, responsive inquiry popup matching the design specifications.
 * - Client-side validation, loading spinner, and success state.
 */
export default function InquiryModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Lock background scrolling and allow Escape key to close
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        handleClose();
      }
    };

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const handleClose = () => {
    setIsSubmitted(false);
    setErrors({});
    if (onClose) onClose();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = "Please enter your full name";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Please enter your email";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    const phoneRegex = /^\+?[\d\s-]{7,15}$/;
    if (!formData.phone.trim()) {
      newErrors.phone = "Please enter your phone number";
    } else if (!phoneRegex.test(formData.phone)) {
      newErrors.phone = "Please enter a valid phone number (7-15 digits)";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) return;

    setIsSubmitting(true);

    // Pure frontend simulated submission (no backend API integration)
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);

      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ name: "", email: "", phone: "", message: "" });
        if (onClose) onClose();
      }, 2500);
    }, 700);
  };

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="inquiry-modal-title"
      className="fixed inset-0 z-[2500] font-Poppins flex items-center justify-center bg-black/65 backdrop-blur-md p-3 sm:p-4 transition-opacity duration-300 animate-in fade-in"
    >
      {/* Backdrop click to close */}
      <div className="absolute inset-0" onClick={handleClose} />

      {/* Modal Card */}
      <div
        className="relative w-[95%] sm:w-full max-w-[440px] max-h-[92vh] overflow-y-auto bg-white rounded-2xl sm:rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.3)] border border-gray-100 z-10 transition-all duration-200 animate-in fade-in zoom-in-95"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={handleClose}
          aria-label="Close inquiry popup"
          className="absolute top-3 right-3 sm:top-4 sm:right-4 text-gray-400 hover:text-red-600 bg-gray-100/80 hover:bg-red-50 p-1.5 sm:p-2 rounded-full transition-all duration-200 z-20 cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="p-4 sm:p-7">
          {isSubmitted ? (
            /* Success State */
            <div className="text-center py-6 sm:py-8 animate-in fade-in zoom-in-95 duration-200">
              <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-red-50 text-red-600 flex items-center justify-center mx-auto mb-3 sm:mb-4 border border-red-200">
                <CheckCircle className="w-7 h-7 sm:w-9 sm:h-9" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-1 sm:mb-2">Thank You!</h3>
              <p className="text-gray-600 text-xs sm:text-sm max-w-xs mx-auto">
                Your inquiry has been submitted successfully. Our packaging machinery specialists will get in touch with you shortly.
              </p>
            </div>
          ) : (
            /* Form State */
            <>
              {/* Header with ICON Logo */}
              <div className="flex flex-col items-center text-center mb-4 sm:mb-5">
                <div className="mb-2 sm:mb-2.5">
                  <img
                    src="/logo.svg"
                    alt="ICON Industries Logo"
                    className="h-8 sm:h-9 w-auto object-contain mx-auto"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "/logo.svg";
                    }}
                  />
                </div>

                <h2
                  id="inquiry-modal-title"
                  className="text-lg sm:text-xl font-bold text-gray-900 tracking-tight"
                >
                  Inquire With Us
                </h2>
                <p className="text-gray-500 text-[11px] sm:text-xs mt-0.5 max-w-xs">
                  Send us your requirement and our packaging machinery experts will assist you.
                </p>
              </div>

              {/* Form with Red-Accented Focus Inputs */}
              <form onSubmit={handleSubmit} className="space-y-2.5 sm:space-y-3">
                {/* Full Name */}
                <div>
                  <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400 group-focus-within:text-[#e00000] transition-colors">
                      <User className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    </div>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your Full Name *"
                      autoComplete="name"
                      className={`w-full pl-9 sm:pl-10 pr-3 sm:pr-4 py-2 sm:py-2.5 bg-gray-50/70 hover:bg-white focus:bg-white text-xs sm:text-sm text-gray-800 placeholder-gray-400 rounded-lg sm:rounded-xl border outline-none transition-all duration-200 ${
                        errors.name
                          ? "border-red-500 ring-1 sm:ring-2 ring-red-500/20"
                          : "border-gray-200 hover:border-red-200 focus:border-[#e00000] focus:ring-2 sm:focus:ring-4 focus:ring-red-500/10 shadow-sm"
                      }`}
                    />
                  </div>
                  {errors.name && (
                    <p className="text-red-500 text-[10px] sm:text-[11px] font-medium mt-0.5 pl-1">{errors.name}</p>
                  )}
                </div>

                {/* Email & Phone Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
                  {/* Email */}
                  <div>
                    <div className="relative group">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400 group-focus-within:text-[#e00000] transition-colors">
                        <Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                      </div>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Email Address *"
                        autoComplete="email"
                        className={`w-full pl-9 sm:pl-10 pr-3 sm:pr-4 py-2 sm:py-2.5 bg-gray-50/70 hover:bg-white focus:bg-white text-xs sm:text-sm text-gray-800 placeholder-gray-400 rounded-lg sm:rounded-xl border outline-none transition-all duration-200 ${
                          errors.email
                            ? "border-red-500 ring-1 sm:ring-2 ring-red-500/20"
                            : "border-gray-200 hover:border-red-200 focus:border-[#e00000] focus:ring-2 sm:focus:ring-4 focus:ring-red-500/10 shadow-sm"
                        }`}
                      />
                    </div>
                    {errors.email && (
                      <p className="text-red-500 text-[10px] sm:text-[11px] font-medium mt-0.5 pl-1">{errors.email}</p>
                    )}
                  </div>

                  {/* Phone */}
                  <div>
                    <div className="relative group">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400 group-focus-within:text-[#e00000] transition-colors">
                        <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                      </div>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Phone Number *"
                        autoComplete="tel"
                        className={`w-full pl-9 sm:pl-10 pr-3 sm:pr-4 py-2 sm:py-2.5 bg-gray-50/70 hover:bg-white focus:bg-white text-xs sm:text-sm text-gray-800 placeholder-gray-400 rounded-lg sm:rounded-xl border outline-none transition-all duration-200 ${
                          errors.phone
                            ? "border-red-500 ring-1 sm:ring-2 ring-red-500/20"
                            : "border-gray-200 hover:border-red-200 focus:border-[#e00000] focus:ring-2 sm:focus:ring-4 focus:ring-red-500/10 shadow-sm"
                        }`}
                      />
                    </div>
                    {errors.phone && (
                      <p className="text-red-500 text-[10px] sm:text-[11px] font-medium mt-0.5 pl-1">{errors.phone}</p>
                    )}
                  </div>
                </div>

                {/* Requirement / Message */}
                <div>
                  <div className="relative group">
                    <div className="absolute top-2.5 sm:top-3 left-3 flex items-center pointer-events-none text-gray-400 group-focus-within:text-[#e00000] transition-colors">
                      <MessageSquare className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    </div>
                    <textarea
                      rows={2}
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your machine requirement..."
                      className="w-full pl-9 sm:pl-10 pr-3 sm:pr-4 py-2 sm:py-2.5 bg-gray-50/70 hover:bg-white focus:bg-white text-xs sm:text-sm text-gray-800 placeholder-gray-400 rounded-lg sm:rounded-xl border border-gray-200 hover:border-red-200 focus:border-[#e00000] focus:ring-2 sm:focus:ring-4 focus:ring-red-500/10 shadow-sm outline-none transition-all duration-200 resize-none"
                    />
                  </div>
                </div>

                {/* Inquiry Now Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full mt-1.5 sm:mt-2 py-2.5 sm:py-3 px-5 sm:px-6 bs-mix-red text-white font-semibold rounded-lg sm:rounded-xl shadow-[0_6px_18px_rgba(239,0,0,0.22)] hover:shadow-[0_10px_24px_rgba(239,0,0,0.32)] hover:scale-[1.01] active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-2 text-xs sm:text-sm disabled:opacity-60 cursor-pointer"
                >
                  {isSubmitting ? (
                    <div className="flex items-center gap-2">
                      <div className="w-3.5 h-3.5 sm:w-4 sm:h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Submitting...</span>
                    </div>
                  ) : (
                    <div className="flex items-center gap-1.5 sm:gap-2">
                      <span>Inquire Now</span>
                      <Send className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    </div>
                  )}
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
