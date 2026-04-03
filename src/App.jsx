import React, { Suspense, lazy } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

// Lazy load below-the-fold components to prioritize initial Hero render & animation
const About = lazy(() => import('./components/About'));
const Founders = lazy(() => import('./components/Founders')); // Leadership Section
const Services = lazy(() => import('./components/Services'));
const Destinations = lazy(() => import('./components/Destinations'));
const Footer = lazy(() => import('./components/Footer'));

function App() {
  return (
    <div className="bg-slate-950 text-slate-100 font-sans selection:bg-[#D4AF37] selection:text-slate-900 overflow-x-hidden w-full">
      <Navbar />
      <main>
        {/* Hero loads immediately to ensure zero-delay LCP (Largest Contentful Paint) */}
        <Hero />
        
        {/* Other heavy sections (Google Maps, Marquees, EmailJS) load asynchronously */}
        <Suspense fallback={<div className="min-h-screen bg-slate-950"></div>}>
          <About />
          <Services />
          <Destinations />
          <Founders />
          <Footer />
        </Suspense>
      </main>

      {/* Global Floating WhatsApp Section */}
      <div className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 z-50 flex items-center gap-2 sm:gap-3 group animate-bounce">
        
        {/* Chat Message Bubble (Always visible on desktop, hidden on tiny mobile or adjusted) */}
        <div className="hidden sm:block relative bg-slate-800 text-slate-200 text-sm font-medium px-4 py-2.5 rounded-xl shadow-xl border border-slate-700">
          Request a Consultation
          {/* Little pointing arrow */}
          <div className="absolute top-1/2 -right-1.5 -mt-1.5 w-3 h-3 bg-slate-800 border-t border-r border-slate-700 transform rotate-45"></div>
        </div>

        {/* WhatsApp Button */}
        <a
          href="https://wa.me/8921362760" // Replace with actual WhatsApp number including country code (e.g., https://wa.me/447123456789)
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#25D366] text-white p-3 sm:p-4 rounded-full shadow-2xl hover:bg-[#128C7E] hover:scale-110 hover:shadow-[#25D366]/50 transition-all duration-300 flex items-center justify-center relative"
          aria-label="Chat on WhatsApp"
          title="Chat on WhatsApp"
        >
          {/* Subtle Glow effect pulsing slowly behind it */}
          <div className="absolute inset-0 bg-[#25D366] rounded-full blur-md opacity-40 animate-pulse transition-opacity duration-300"></div>
          <FaWhatsapp className="w-6 h-6 sm:w-8 sm:h-8 relative z-10" />
        </a>
      </div>
    </div>
  );
}

export default App;
