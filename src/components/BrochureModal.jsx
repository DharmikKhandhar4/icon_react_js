import { useState, useEffect } from 'react';

export default function BrochureModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    companyName: '',
    email: '',
    phone: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

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

    // Trigger brochure download
    const brochureUrl = 'https://storage.server.grafizen.in/uploads/img_68b96a1834a003.08049055.pdf';
    const link = document.createElement('a');
    link.href = brochureUrl;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.download = 'ICON-Packtech-Brochure.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setIsSuccess(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(false);
      setFormData({ name: '', companyName: '', email: '', phone: '' });
      onClose();
    }, 1500);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="brochure-title"
      className="fixed inset-0 font-Poppins z-[3000] bg-black/60 backdrop-blur-md flex items-center justify-center px-4 transition-opacity duration-300"
      style={{ opacity: 1 }}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        className="relative w-full max-w-[850px] bg-white rounded-3xl shadow-2xl flex flex-col md:flex-row overflow-hidden animate-in fade-in zoom-in-95 duration-200"
        style={{ opacity: 1, transform: 'none' }}
      >
        {/* Close Button */}
        <button
          type="button"
          aria-label="Close brochure form"
          onClick={onClose}
          className="absolute top-3 right-4 text-red-500 hover:text-red-700 text-xl z-10 p-1 cursor-pointer transition-colors"
        >
          ✕
        </button>

        {/* Left Image Section */}
        <div className="md:w-1/2 w-full h-[250px] md:h-auto bg-gray-100">
          <img
            src="/assets/2image-BNMcTZMN.webp"
            alt="ICON Packtech packaging solutions brochure"
            className="w-full h-full object-cover"
            width="425"
            height="500"
            loading="lazy"
            decoding="async"
            onError={(e) => {
              e.currentTarget.src =
                'https://storage.server.grafizen.in/uploads/img_6ad74c460f4b70.18245951.jpg';
            }}
          />
        </div>

        {/* Right Form Section */}
        <div className="md:w-1/2 w-full p-6 sm:p-8 flex flex-col justify-center">
          <h2 id="brochure-title" className="text-2xl font-semibold mb-2 text-gray-900">
            Download Brochure
          </h2>
          <p className="text-sm text-gray-500 mb-4">
            Fill in your details to access the brochure instantly.
          </p>

          <form className="space-y-3" onSubmit={handleSubmit}>
            <div>
              <input
                type="text"
                name="name"
                autoComplete="name"
                placeholder="Name"
                required
                className="w-full h-[45px] border border-gray-300 rounded-lg px-4 outline-none focus:border-red-500 transition-colors text-gray-800 placeholder-gray-400 text-sm"
                value={formData.name}
                onChange={handleChange}
              />
            </div>

            <div>
              <input
                type="text"
                name="companyName"
                autoComplete="organization"
                placeholder="Company Name"
                required
                className="w-full h-[45px] border border-gray-300 rounded-lg px-4 outline-none focus:border-red-500 transition-colors text-gray-800 placeholder-gray-400 text-sm"
                value={formData.companyName}
                onChange={handleChange}
              />
            </div>

            <div>
              <input
                type="email"
                name="email"
                autoComplete="email"
                placeholder="Email"
                required
                className="w-full h-[45px] border border-gray-300 rounded-lg px-4 outline-none focus:border-red-500 transition-colors text-gray-800 placeholder-gray-400 text-sm"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div>
              <input
                type="tel"
                name="phone"
                autoComplete="tel"
                inputMode="tel"
                placeholder="Phone"
                required
                className="w-full h-[45px] border border-gray-300 rounded-lg px-4 outline-none focus:border-red-500 transition-colors text-gray-800 placeholder-gray-400 text-sm"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full h-[48px] bs-mix-red text-white rounded-lg font-semibold hover:opacity-95 transition-opacity disabled:opacity-60 cursor-pointer shadow-md"
            >
              {isSuccess ? 'Downloading Brochure...' : isSubmitting ? 'Please wait...' : 'Submit & Download'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
