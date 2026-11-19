import { useState, useEffect, useRef } from 'react';
import { ChevronDown, Menu, X, ArrowRight, Layers, Boxes, Cpu, BookOpen, Calendar } from 'lucide-react';
import { machineCategories, productIndustries, packagingSolutions } from '../data/navigationData';

export default function Header({ currentPath = '/', onNavigate = () => {} }) {
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [blogsOpen, setBlogsOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileBlogsOpen, setMobileBlogsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('machines');
  const dropdownRef = useRef(null);
  const blogDropdownRef = useRef(null);

  // Close dropdown on click outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setSolutionsOpen(false);
      }
      if (blogDropdownRef.current && !blogDropdownRef.current.contains(event.target)) {
        setBlogsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, []);

  // Close menus on Escape key
  useEffect(() => {
    function handleKeyDown(e) {
      if (e.key === 'Escape') {
        setSolutionsOpen(false);
        setBlogsOpen(false);
        setMobileMenuOpen(false);
      }
    }
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleLinkClick = (path) => {
    setSolutionsOpen(false);
    setBlogsOpen(false);
    setMobileMenuOpen(false);
    onNavigate(path);
  };

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'Our Solutions', path: '/all-packaging-machines', hasDropdown: true },
    { label: 'About us', path: '/about-us' },
    { label: 'Blogs', path: '/blogs', hasBlogDropdown: true },
    { label: 'Career', path: '/careers' },
    { label: 'Contact us', path: '/contact-us' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white   font-sans">
      <div className="max-w-[1380px] mx-auto   h-17 flex items-center justify-between border-b border-[#13002f] ">
        
        {/* 1. BRAND LOGO (Left) */}
        <button
          onClick={() => handleLinkClick('/')}
          className="flex items-center text-left focus:outline-none transition-opacity hover:opacity-95  "
          aria-label="ICON Home"
        >
          <img
            src="/logo.svg"
            alt="ICON Packtech"
            width="160"
            height="48"
            fetchPriority="high"
            className="h-11 sm:h-full w-[130px] object-contain"
            onError={(e) => {
              // Fallback if SVG fails to load
              e.currentTarget.style.display = 'none';
              const fallback = e.currentTarget.nextElementSibling;
              if (fallback) fallback.style.display = 'flex';
            }}
          />
          {/* Fallback branded text emblem if needed */}
          <div className="hidden items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-brand-500 text-white font-black flex items-center justify-center text-xl shadow-sm">
              I
            </div>
            <span className="text-2xl font-black tracking-tight text-industrial-900">
              ICON
            </span>
          </div>
        </button>

        {/* 2. DESKTOP NAVIGATION (Right, with exact pipe | separators) */}
        <nav className="hidden md:flex items-center text-[15px] font-[400] font-Poppins tracking-normal text-[#373737] mt-3">
          {navLinks.map((item, index) => {
            const isActive = currentPath === item.path || 
              (item.path === '/blogs' && currentPath.startsWith('/blog')) ||
              (item.hasDropdown && (currentPath.startsWith('/all-packaging-machines') || currentPath.startsWith('/packaging-')));

            return (
              <div key={item.label} className="flex items-center">
                {/* Separator Pipe before each item except the first */}
                {index > 0 && (
                  <span
                    className={`shrink-0 mx-2.5 sm:mx-4 block h-[22px] bg-black select-none pointer-events-none ${
                      index === 2 || index === 1  ? 'w-[1.5px]' : 'w-[1.5px]'
                    }`}
                    aria-hidden="true"
                  />
                )}

                {item.hasDropdown ? (
                  /* Our Solutions with Click Dropdown */
                  <div 
                    ref={dropdownRef}
                    className="relative"
                  >
                    <button
                      type="button"
                      onClick={() => {
                        setSolutionsOpen((prev) => !prev);
                        setBlogsOpen(false);
                      }}
                      className={`transition-colors py-2 focus:outline-none tracking-normal font-normal cursor-pointer ${
                        isActive && !solutionsOpen
                          ? 'text-red-600'
                          : solutionsOpen
                          ? 'text-black'
                          : 'text-[#373737] hover:text-black'
                      }`}
                    >
                      {item.label}
                    </button>

                    {/* CLICK DROPDOWN MENU FOR OUR SOLUTIONS */}
                    {solutionsOpen && (
                      <div className="absolute -left-14 top-full pt-1 w-[220px] z-50 animate-in fade-in duration-150">
                        <div className="bg-white rounded-lg shadow-lg border border-gray-300 overflow-hidden">
                          <button
                            type="button"
                            onClick={() => handleLinkClick('/packaging-as-per-product')}
                            className="w-full text-left px-4 py-2.5 text-[14px] font-Poppins text-gray-700 hover:text-gray-900 hover:bg-gray-50 border-b border-gray-100 transition-colors"
                          >
                            Packaging as per Product
                          </button>

                          <button
                            type="button"
                            onClick={() => handleLinkClick('/packaging-solutions')}
                            className="w-full text-left px-4 py-2.5 text-[14px] font-Poppins text-gray-700 hover:text-gray-900 hover:bg-gray-50 border-b border-gray-100 transition-colors"
                          >
                            Packaging Solutions
                          </button>

                          <button
                            type="button"
                            onClick={() => handleLinkClick('/all-packaging-machines')}
                            className="w-full text-left px-4 py-2.5 text-[14px] font-Poppins text-gray-700 hover:text-gray-900 hover:bg-gray-50 transition-colors"
                          >
                            All Packaging Machines
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                ) : item.hasBlogDropdown ? (
                  /* Blogs with Click Dropdown */
                  <div
                    ref={blogDropdownRef}
                    className="relative"
                  >
                    <button
                      type="button"
                      onClick={() => {
                        setBlogsOpen((prev) => !prev);
                        setSolutionsOpen(false);
                      }}
                      className={`transition-colors py-2 focus:outline-none tracking-normal font-normal cursor-pointer ${
                        isActive && !blogsOpen
                          ? 'text-red-600'
                          : blogsOpen
                          ? 'text-black'
                          : 'text-[#373737] hover:text-black'
                      }`}
                    >
                      {item.label}
                    </button>

                    {/* CLICK DROPDOWN MENU FOR BLOGS & EVENTS */}
                    {blogsOpen && (
                      <div className="absolute left-0 top-full pt-1 w-[130px] z-50 animate-in fade-in duration-150">
                        <div className="bg-white rounded-lg shadow-lg border border-gray-100 border-t-0 overflow-hidden">
                          <button
                            type="button"
                            onClick={() => handleLinkClick('/blogs')}
                            className="w-full text-left px-4 py-2 text-[14px] font-Poppins text-gray-700 hover:text-gray-900 hover:bg-gray-100 border-b border-gray-100 transition-colors"
                          >
                            Blogs
                          </button>

                          <button
                            type="button"
                            onClick={() => handleLinkClick('/events')}
                            className="w-full text-left px-4 py-2 text-[14px] font-Poppins text-gray-700 hover:text-gray-900 hover:bg-gray-100 transition-colors"
                          >
                            Events
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  /* Standard Link */
                  <button
                    onClick={() => handleLinkClick(item.path)}
                    className={`transition-colors py-2 focus:outline-none tracking-normal font-normal cursor-pointer ${
                      isActive 
                        ? 'text-red-600' 
                        : 'text-[#373737] hover:text-black'
                    }`}
                  >
                    {item.label}
                  </button>
                )}
              </div>
            );
          })}
        </nav>

        {/* 3. MOBILE MENU TOGGLE BUTTON (Right, visible only on small screens) */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMobileMenuOpen(prev => !prev)}
            className="p-2 rounded-lg text-slate-700 hover:text-brand-500 hover:bg-slate-100 transition-colors focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-brand-500" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* 4. MOBILE NAVIGATION DRAWER */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white px-5 py-4 space-y-2 shadow-lg animate-in slide-in-from-top-2 duration-150">
          <button
            onClick={() => handleLinkClick('/')}
            className={`w-full text-left py-2 px-3 rounded-lg text-sm font-medium transition-colors ${
              currentPath === '/' ? 'text-brand-500 bg-brand-50' : 'text-slate-700'
            }`}
          >
            Home
          </button>

          {/* Solutions Collapsible */}
          <div>
            <button
              onClick={() => setSolutionsOpen(prev => !prev)}
              className="w-full flex items-center justify-between py-2 px-3 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50"
            >
              <span>Our Solutions</span>
              <ChevronDown className={`w-4 h-4 transition-transform ${solutionsOpen ? 'rotate-180 text-brand-500' : 'text-slate-400'}`} />
            </button>

            {solutionsOpen && (
              <div className="pl-4 pr-2 py-2 space-y-1.5 border-l-2 border-brand-100 ml-3 text-xs">
                <button
                  onClick={() => handleLinkClick('/packaging-as-per-product')}
                  className="block w-full text-left py-1.5 text-slate-700 hover:text-red-600"
                >
                  Packaging as per Product
                </button>
                <button
                  onClick={() => handleLinkClick('/packaging-solutions')}
                  className="block w-full text-left py-1.5 text-slate-700 hover:text-red-600"
                >
                  Packaging Solutions
                </button>
                <button
                  onClick={() => handleLinkClick('/all-packaging-machines')}
                  className="block w-full text-left py-1.5 text-slate-700 hover:text-red-600"
                >
                  All Packaging Machines
                </button>
              </div>
            )}
          </div>

          <button
            onClick={() => handleLinkClick('/about-us')}
            className={`w-full text-left py-2 px-3 rounded-lg text-sm font-medium transition-colors ${
              currentPath === '/about-us' ? 'text-brand-500 bg-brand-50' : 'text-slate-700'
            }`}
          >
            About us
          </button>

          {/* Blogs Collapsible (Blog & Event) */}
          <div>
            <button
              onClick={() => setMobileBlogsOpen(prev => !prev)}
              className="w-full flex items-center justify-between py-2 px-3 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50"
            >
              <span>Blogs</span>
              <ChevronDown className={`w-4 h-4 transition-transform ${mobileBlogsOpen ? 'rotate-180 text-brand-500' : 'text-slate-400'}`} />
            </button>

            {mobileBlogsOpen && (
              <div className="pl-4 pr-2 py-2 space-y-1.5 border-l-2 border-brand-100 ml-3 text-xs">
                <button
                  onClick={() => handleLinkClick('/blogs')}
                  className="flex items-center gap-2 w-full text-left py-1.5 font-medium text-slate-700 hover:text-brand-500"
                >
                  <BookOpen className="w-3.5 h-3.5 text-red-600" />
                  <span>Blogs</span>
                </button>
                <button
                  onClick={() => handleLinkClick('/events')}
                  className="flex items-center gap-2 w-full text-left py-1.5 font-medium text-slate-700 hover:text-brand-500"
                >
                  <Calendar className="w-3.5 h-3.5 text-red-600" />
                  <span>Events</span>
                </button>
              </div>
            )}
          </div>

          <button
            onClick={() => handleLinkClick('/careers')}
            className={`w-full text-left py-2 px-3 rounded-lg text-sm font-medium transition-colors ${
              currentPath === '/careers' ? 'text-brand-500 bg-brand-50' : 'text-slate-700'
            }`}
          >
            Career
          </button>

          <button
            onClick={() => handleLinkClick('/contact-us')}
            className={`w-full text-left py-2 px-3 rounded-lg text-sm font-medium transition-colors ${
              currentPath === '/contact-us' ? 'text-brand-500 bg-brand-50' : 'text-slate-700'
            }`}
          >
            Contact us
          </button>
        </div>
      )}
    </header>
  );
}
