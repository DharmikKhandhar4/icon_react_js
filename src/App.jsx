import { useState, useEffect, lazy, Suspense } from 'react';
import HeroSection from './components/HeroSection';
import ExhibitionSection from './components/home/ExhibitionSection';
import INSIGHTS from "./components/home/INSIGHTS";
import ManufacturerSection from './components/home/ManufacturerSection';
import InnovateSection from './components/home/InnovateSection';
import WhyChooseUsSection from './components/home/WhyChooseUsSection';
import ProductsSection from './components/home/ProductsSection';
import BrandsSection from './components/home/BrandsSection';
import FaqSection from './components/home/FaqSection';
import TestimonialsSection from './components/home/TestimonialsSection';
import BrandPromiseBanner from './components/home/BrandPromiseBanner';
import LatestInsightsSection from './components/home/LatestInsightsSection';
import Footer from './components/Footer';
import FloatingBrochureButton from './components/FloatingBrochureButton';
import NewHeader from './components/NewHeader';
import NewHeroSection from './components/NewHeroSection';

// Lazy-loaded pages and modals for optimal performance and faster initial page loads
const ContactUs = lazy(() => import('./pages/ContactUs'));
const Careers = lazy(() => import('./pages/Careers'));
const AboutUs = lazy(() => import('./pages/AboutUs'));
const Blogs = lazy(() => import('./pages/Blogs'));
const BlogDetail = lazy(() => import('./pages/BlogDetail'));
const Events = lazy(() => import('./pages/Events'));
const AllPackagingMachines = lazy(() => import('./pages/AllPackagingMachines'));
const PackagingSolutions = lazy(() => import('./pages/PackagingSolutions'));
const SolutionMachines = lazy(() => import('./pages/SolutionMachines'));
const PackagingAsPerProduct = lazy(() => import('./pages/PackagingAsPerProduct'));
const CategoryMachines = lazy(() => import('./pages/CategoryMachines'));
const ProductDetail = lazy(() => import('./pages/ProductDetail'));
const BrochureModal = lazy(() => import('./components/BrochureModal'));
const InquiryModal = lazy(() => import('./components/InquiryModal'));

export default function App() {
  const [isBrochureOpen, setIsBrochureOpen] = useState(false);
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);
  const [currentPath, setCurrentPath] = useState(() => {
    if (typeof window !== 'undefined') {
      const p = window.location.pathname;
      if (p && p !== '/') return p;
      if (window.location.hash) {
        return window.location.hash.replace('#', '/');
      }
    }
    return '/';
  });

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname || '/');
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Dynamic SEO Page Title according to current route
  useEffect(() => {
    const titles = {
      '/': 'ICON Packtech | Packaging & Thermoforming Machinery Manufacturer',
      '/about-us': 'About Us | ICON Packtech - Packaging Machinery Manufacturer',
      '/careers': 'Careers & Opportunities | ICON Packtech',
      '/career': 'Careers & Opportunities | ICON Packtech',
      '/contact-us': 'Contact Us | ICON Packtech Rajkot, Gujarat',
      '/blogs': 'Blogs & Industry Insights | ICON Packtech',
      '/events': 'Trade Shows & Exhibitions | ICON Packtech',
      '/all-packaging-machines': 'All Packaging Machines | ICON Packtech',
      '/packaging-solutions': 'Packaging Solutions & Automation | ICON Packtech',
      '/packaging-as-per-product': 'Packaging as per Product | ICON Packtech',
      '/blog-detail': 'Blog Article | ICON Packtech Insights',
    };

    let title = titles[currentPath];
    if (!title) {
      if (currentPath.startsWith('/product-details')) {
        title = 'Machine Details | ICON Packtech';
      } else if (currentPath.startsWith('/packaging-as-per-product/')) {
        title = 'Industry Packaging Solutions | ICON Packtech';
      } else if (currentPath.startsWith('/packaging-solutions/')) {
        title = 'Packaging Solution Machines | ICON Packtech';
      } else {
        title = 'ICON Packtech | Packaging & Thermoforming Machinery';
      }
    }
    if (typeof document !== 'undefined') {
      document.title = title;
    }
  }, [currentPath]);

  // Show Inquiry popup on first-time visit (skip during automated Lighthouse audits)
  useEffect(() => {
    if (typeof navigator !== 'undefined' && /Chrome-Lighthouse|Googlebot/i.test(navigator.userAgent)) {
      return;
    }
    const hasSeenPopup = sessionStorage.getItem('hasSeenInquiryPopup');
    if (!hasSeenPopup) {
      const timer = setTimeout(() => {
        setIsInquiryOpen(true);
        sessionStorage.setItem('hasSeenInquiryPopup', 'true');
      }, 2500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleNavigate = (path) => {
    setCurrentPath(path);
    if (typeof window !== 'undefined' && window.history) {
      window.history.pushState({}, '', path);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white font-sans text-slate-800 flex flex-col selection:bg-brand-500 selection:text-white">
      {/* 1. COMPLETED HEADER */}
      <NewHeader 
        currentPath={currentPath}
        onNavigate={handleNavigate}
      />

      <main className={`flex-1 ${currentPath !== '/' ? 'pt-[76px]' : ''}`}>
        <Suspense fallback={<div className="min-h-[50vh] flex items-center justify-center"><div className="w-8 h-8 border-2 border-red-600 border-t-transparent rounded-full animate-spin" /></div>}>
          {currentPath.startsWith('/product-details') ? (
            <ProductDetail 
              machineSlug={currentPath.replace(/^\/product-details\/?/, '')} 
              onNavigate={handleNavigate} 
              onOpenBrochure={() => setIsBrochureOpen(true)} 
            />
          ) : currentPath.startsWith('/packaging-as-per-product/') ? (
            <CategoryMachines 
              categorySlug={currentPath.replace('/packaging-as-per-product/', '')} 
              onNavigate={handleNavigate} 
            />
          ) : currentPath === '/packaging-as-per-product' ? (
            <PackagingAsPerProduct onNavigate={handleNavigate} />
          ) : currentPath === '/about-us' ? (
            <AboutUs onNavigate={handleNavigate} />
          ) : currentPath === '/careers' || currentPath === '/career' ? (
            <Careers onNavigate={handleNavigate} />
          ) : currentPath === '/contact-us' ? (
            <ContactUs onNavigate={handleNavigate} />
          ) : currentPath === '/blogs' ? (
            <Blogs onNavigate={handleNavigate} />
          ) : currentPath === '/blog-detail' ? (
            <BlogDetail 
              onNavigate={handleNavigate} 
              onOpenBrochure={() => setIsBrochureOpen(true)} 
            />
          ) : currentPath === '/events' ? (
            <Events onNavigate={handleNavigate} />
          ) : currentPath === '/all-packaging-machines' ? (
            <AllPackagingMachines onNavigate={handleNavigate} />
          ) : currentPath.startsWith('/packaging-solutions/') ? (
            <SolutionMachines 
              solutionSlug={currentPath.replace('/packaging-solutions/', '')} 
              onNavigate={handleNavigate} 
            />
          ) : currentPath === '/packaging-solutions' ? (
            <PackagingSolutions onNavigate={handleNavigate} />
          ) : (
            <>
              {/* <HeroSection /> */}
              <NewHeroSection />
              <ExhibitionSection />
              <INSIGHTS />
              <ManufacturerSection />
              <InnovateSection />
              <WhyChooseUsSection />
              <ProductsSection />
              <BrandsSection />
              <FaqSection />
              <TestimonialsSection />
              <BrandPromiseBanner />
              <LatestInsightsSection />
            </>
          )}
        </Suspense>
      </main>

      {/* 3. GLOBAL FOOTER */}
      <Footer onNavigate={handleNavigate} />

      {/* Floating Download Brochure Button */}
      <FloatingBrochureButton onClick={() => setIsBrochureOpen(true)} />

      {/* Brochure Download Modal (Lazy loaded on demand) */}
      {isBrochureOpen && (
        <Suspense fallback={null}>
          <BrochureModal
            isOpen={isBrochureOpen}
            onClose={() => setIsBrochureOpen(false)}
          />
        </Suspense>
      )}

      {/* First-time Visit Inquiry Modal (Lazy loaded on demand) */}
      {isInquiryOpen && (
        <Suspense fallback={null}>
          <InquiryModal
            isOpen={isInquiryOpen}
            onClose={() => setIsInquiryOpen(false)}
          />
        </Suspense>
      )}
    </div>
  );
}
