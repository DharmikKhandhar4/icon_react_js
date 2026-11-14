import React, { useState, useEffect, useRef } from 'react';

export default function NewHeader({ currentPath = '/', onNavigate = () => {} }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [blogsOpen, setBlogsOpen] = useState(false);
  const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(false);
  const [mobileBlogsOpen, setMobileBlogsOpen] = useState(false);

  const solutionsRef = useRef(null);
  const blogsRef = useRef(null);

  // Close dropdowns on outside click
  useEffect(() => {
    function handleClickOutside(e) {
      if (solutionsRef.current && !solutionsRef.current.contains(e.target)) {
        setSolutionsOpen(false);
      }
      if (blogsRef.current && !blogsRef.current.contains(e.target)) {
        setBlogsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLink = (path, e) => {
    if (e) e.preventDefault();
    setMobileMenuOpen(false);
    setSolutionsOpen(false);
    setBlogsOpen(false);
    setMobileSolutionsOpen(false);
    setMobileBlogsOpen(false);
    if (typeof onNavigate === 'function') {
      onNavigate(path);
    } else if (typeof window !== 'undefined') {
      window.location.href = path;
    }
  };

  return (
    <header className="bg-white flex w-full font-Poppins !z-[1350] mx-auto fixed top-0 left-0" role="banner">
      <div className="flex md:w-[83%] 2xl:w-[1380px] w-[90%] h-[62px] mt-[10px] mx-auto flex-col">
        <div className="flex w-full">
          <div className="flex w-full">
            <div className="flex w-full relative justify-between">
              
              {/* Brand Logo */}
              <a 
                className="w-fit" 
                href="/"
                aria-label="ICON Packtech - Home"
                onClick={(e) => handleLink('/', e)}
              >
                <img 
                  className="flex w-[140px] md:w-[130px] h-auto object-contain" 
                  src="/assets/logo-BmE9Wap-.svg" 
                  alt="ICON Packtech - Packaging Machinery Manufacturer" 
                  width="130"
                  height="45"
                  fetchPriority="high"
                />
              </a>

              {/* Navigation Wrapper */}
              <div className="flex w-auto md11:w-[75%] 2xl:w-[830px] md:mt-[20px] items-center justify-end px-[20px] md:items-start">
                <div className="w-fit flex justify-end">
                  <nav aria-label="Main Navigation" className="xl:text-[15px] gap-[15px] text-[#000] items-center pl-[20px] font-Montserrat mt-[-0.4%] font-[400] justify-end hidden md11:flex">
                    
                    {/* Home Link */}
                    <a 
                      className={`cursor-pointer font-[400] font-Poppins transition-colors ${
                        currentPath === '/' ? 'text-icon font-[400]' : 'text-[#515151] hover:text-red-600'
                      }`} 
                      href="/"
                      onClick={(e) => handleLink('/', e)}
                    >
                      Home
                    </a>

                    <span className="flex h-[22px] w-[1.5px] bg-black"></span>

                    {/* Our Solutions Dropdown */}
                    <div 
                      className="relative" 
                      ref={solutionsRef}
                      onMouseEnter={() => setSolutionsOpen(true)}
                      onMouseLeave={() => setSolutionsOpen(false)}
                    >
                      <p 
                        className={`cursor-pointer font-[400] font-Poppins transition-colors flex items-center gap-1 ${
                          currentPath.startsWith('/all-packaging-machines') || currentPath.startsWith('/packaging-') || solutionsOpen
                            ? 'text-icon font-[400]'
                            : 'text-[#515151] hover:text-red-600'
                        }`}
                        onClick={() => {
                          setSolutionsOpen((prev) => !prev);
                          setBlogsOpen(false);
                        }}
                      >
                        Our Solutions
                      </p>

                      {solutionsOpen && (
                        <div className="absolute -left-6 top-full pt-2 w-[220px] z-50 animate-in fade-in duration-150">
                          <div className="bg-white rounded-lg shadow-xl border border-gray-200 overflow-hidden py-1">
                            <a
                              href="/packaging-as-per-product"
                              onClick={(e) => handleLink('/packaging-as-per-product', e)}
                              className="block px-4 py-2.5 text-[14px] font-normal text-gray-700 hover:text-red-600 hover:bg-red-50/50 border-b border-gray-100 transition-colors"
                            >
                              Packaging as per Product
                            </a>
                            <a
                              href="/packaging-solutions"
                              onClick={(e) => handleLink('/packaging-solutions', e)}
                              className="block px-4 py-2.5 text-[14px] font-normal text-gray-700 hover:text-red-600 hover:bg-red-50/50 border-b border-gray-100 transition-colors"
                            >
                              Packaging Solutions
                            </a>
                            <a
                              href="/all-packaging-machines"
                              onClick={(e) => handleLink('/all-packaging-machines', e)}
                              className="block px-4 py-2.5 text-[14px] font-normal text-gray-700 hover:text-red-600 hover:bg-red-50/50 transition-colors"
                            >
                              All Packaging Machines
                            </a>
                          </div>
                        </div>
                      )}
                    </div>

                    <span className="flex h-[22px] w-[1.5px] bg-black"></span>

                    {/* About Us Link */}
                    <a 
                      className={`cursor-pointer font-[400] font-Poppins transition-colors ${
                        currentPath === '/about-us' ? 'text-icon font-[400]' : 'text-[#515151] hover:text-red-600'
                      }`} 
                      href="/about-us"
                      onClick={(e) => handleLink('/about-us', e)}
                    >
                      About us
                    </a>

                    <span className="flex h-[22px] flex-shrink-0 w-[1.5px] bg-black"></span>

                    {/* Blogs Dropdown */}
                    <div 
                      className="relative" 
                      ref={blogsRef}
                      onMouseEnter={() => setBlogsOpen(true)}
                      onMouseLeave={() => setBlogsOpen(false)}
                    >
                      <p 
                        className={`cursor-pointer font-[400] font-Poppins transition-colors flex items-center gap-1 ${
                          currentPath.startsWith('/blog') || currentPath === '/events' || blogsOpen
                            ? 'text-icon font-[400]'
                            : 'text-[#515151] hover:text-red-600'
                        }`}
                        onClick={() => {
                          setBlogsOpen((prev) => !prev);
                          setSolutionsOpen(false);
                        }}
                      >
                        Blogs
                      </p>

                      {blogsOpen && (
                        <div className="absolute left-0 top-full pt-2 w-[140px] z-50 animate-in fade-in duration-150">
                          <div className="bg-white rounded-lg shadow-xl border border-gray-200 overflow-hidden py-1">
                            <a
                              href="/blogs"
                              onClick={(e) => handleLink('/blogs', e)}
                              className="block px-4 py-2 text-[14px] font-normal text-gray-700 hover:text-red-600 hover:bg-red-50/50 border-b border-gray-100 transition-colors"
                            >
                              Blogs
                            </a>
                            <a
                              href="/events"
                              onClick={(e) => handleLink('/events', e)}
                              className="block px-4 py-2 text-[14px] font-normal text-gray-700 hover:text-red-600 hover:bg-red-50/50 transition-colors"
                            >
                              Events
                            </a>
                          </div>
                        </div>
                      )}
                    </div>

                    <span className="flex h-[22px] w-[1.5px] bg-black"></span>

                    {/* Career Link */}
                    <a 
                      className={`cursor-pointer font-[400] font-Poppins transition-colors ${
                        currentPath === '/careers' || currentPath === '/career' ? 'text-icon font-[400]' : 'text-[#515151] hover:text-red-600'
                      }`} 
                      href="/careers"
                      onClick={(e) => handleLink('/careers', e)}
                    >
                      Career
                    </a>

                    <span className="flex h-[22px] w-[1.5px] bg-black"></span>

                    {/* Contact Us Link */}
                    <a 
                      className={`cursor-pointer font-[400] font-Poppins transition-colors ${
                        currentPath === '/contact-us' ? 'text-icon font-[400]' : 'text-[#515151] hover:text-red-600'
                      }`} 
                      href="/contact-us"
                      onClick={(e) => handleLink('/contact-us', e)}
                    >
                      Contact us
                    </a>
                  </nav>
                </div>

                {/* Bottom Border Accent Line */}
                <span className="absolute h-[0.5px] bg-[#13002f] right-0 top-[58.5px] hidden md:flex w-[100%] pointer-events-none"></span>

                {/* Mobile Menu Hamburger Button */}
                <button 
                  type="button"
                  onClick={() => setMobileMenuOpen((prev) => !prev)}
                  aria-label="Toggle navigation menu"
                  aria-expanded={mobileMenuOpen}
                  className="md11:hidden flex border-[1.3px] mb-[0px] md77:mb-[10px] rounded-[4px] p-[5px] cursor-pointer hover:bg-gray-100 transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                  </svg>
                </button>

                {/* Mobile Navigation Drawer */}
                <nav 
                  aria-label="Mobile Navigation"
                  className={`md11:hidden fixed top-[70px] left-0 w-full bg-white z-[999] shadow-lg transition-transform duration-300 ease-in-out ${
                    mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
                  }`}
                >
                  <div className="flex flex-col space-y-4 p-5 max-h-[calc(100vh-80px)] overflow-y-auto">
                    
                    <a 
                      className={`text-[17px] font-medium transition-colors ${
                        currentPath === '/' ? 'text-icon font-semibold' : 'text-gray-700'
                      }`} 
                      href="/"
                      onClick={(e) => handleLink('/', e)}
                    >
                      Home
                    </a>

                    <a 
                      className={`text-[17px] font-medium transition-colors ${
                        currentPath === '/about-us' ? 'text-icon font-semibold' : 'text-gray-700'
                      }`} 
                      href="/about-us"
                      onClick={(e) => handleLink('/about-us', e)}
                    >
                      About Us
                    </a>

                    {/* Mobile Our Solutions Accordion */}
                    <div>
                      <button 
                        type="button" 
                        onClick={() => setMobileSolutionsOpen((prev) => !prev)}
                        className="text-[17px] font-medium text-gray-700 cursor-pointer flex items-center justify-between w-full"
                      >
                        <span>Our Solutions</span>
                        <span className={`text-xs transition-transform duration-200 ${mobileSolutionsOpen ? 'rotate-180' : ''}`}>▾</span>
                      </button>

                      {mobileSolutionsOpen && (
                        <div className="pl-4 pt-2 flex flex-col space-y-2.5 border-l-2 border-red-200 mt-2">
                          <a
                            href="/packaging-as-per-product"
                            onClick={(e) => handleLink('/packaging-as-per-product', e)}
                            className="text-[15px] text-gray-600 hover:text-red-600"
                          >
                            Packaging as per Product
                          </a>
                          <a
                            href="/packaging-solutions"
                            onClick={(e) => handleLink('/packaging-solutions', e)}
                            className="text-[15px] text-gray-600 hover:text-red-600"
                          >
                            Packaging Solutions
                          </a>
                          <a
                            href="/all-packaging-machines"
                            onClick={(e) => handleLink('/all-packaging-machines', e)}
                            className="text-[15px] text-gray-600 hover:text-red-600"
                          >
                            All Packaging Machines
                          </a>
                        </div>
                      )}
                    </div>

                    {/* Mobile Blogs Accordion */}
                    <div>
                      <button 
                        type="button" 
                        onClick={() => setMobileBlogsOpen((prev) => !prev)}
                        className="text-[17px] font-medium text-gray-700 cursor-pointer flex items-center justify-between w-full"
                      >
                        <span>Blogs</span>
                        <span className={`text-xs transition-transform duration-200 ${mobileBlogsOpen ? 'rotate-180' : ''}`}>▾</span>
                      </button>

                      {mobileBlogsOpen && (
                        <div className="pl-4 pt-2 flex flex-col space-y-2.5 border-l-2 border-red-200 mt-2">
                          <a
                            href="/blogs"
                            onClick={(e) => handleLink('/blogs', e)}
                            className="text-[15px] text-gray-600 hover:text-red-600"
                          >
                            All Blogs
                          </a>
                          <a
                            href="/events"
                            onClick={(e) => handleLink('/events', e)}
                            className="text-[15px] text-gray-600 hover:text-red-600"
                          >
                            Events
                          </a>
                        </div>
                      )}
                    </div>

                    <a 
                      className={`text-[17px] font-medium transition-colors ${
                        currentPath === '/careers' || currentPath === '/career' ? 'text-icon font-semibold' : 'text-gray-700'
                      }`} 
                      href="/career"
                      onClick={(e) => handleLink('/careers', e)}
                    >
                      Career
                    </a>

                    <a 
                      className={`text-[17px] font-medium transition-colors ${
                        currentPath === '/contact-us' ? 'text-icon font-semibold' : 'text-gray-700'
                      }`} 
                      href="/contact-us"
                      onClick={(e) => handleLink('/contact-us', e)}
                    >
                      Contact Us
                    </a>

                  </div>
                </nav>

              </div>

            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

