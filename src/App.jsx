import React, { Suspense, lazy } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

// Lazy load below-the-fold components to prioritize initial Hero render & animation
const About = lazy(() => import('./components/About'));
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
          <Footer />
        </Suspense>
      </main>
    </div>
  );
}

export default App;
