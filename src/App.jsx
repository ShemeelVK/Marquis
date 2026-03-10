import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Destinations from './components/Destinations';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-slate-950 text-slate-100 font-sans selection:bg-[#D4AF37] selection:text-slate-900 overflow-x-hidden w-full">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Destinations />
        <Footer />
      </main>
    </div>
  );
}

export default App;
