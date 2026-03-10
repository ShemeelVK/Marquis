import React from 'react';
import Marquee from 'react-fast-marquee';
import { motion } from 'framer-motion';

const destinations = [
  { name: 'Poland', code: 'PL' },
  { name: 'Romania', code: 'RO' },
  { name: 'Croatia', code: 'HR' },
  { name: 'Lithuania', code: 'LT' },
  { name: 'Latvia', code: 'LV' },
  { name: 'Hungary', code: 'HU' },
  { name: 'Slovakia', code: 'SK' },
  { name: 'Czech Republic', code: 'CZ' },
  { name: 'Germany', code: 'DE' },
  { name: 'Portugal', code: 'PT' },
  { name: 'Malta', code: 'MT' },
  { name: 'United Arab Emirates', code: 'AE' }
];

const Destinations = () => {
  return (
    <section id="destinations" className="py-24 bg-slate-900 border-t border-slate-800/50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#D4AF37] mb-6 tracking-wide drop-shadow-sm"
        >
          Global Destinations
        </motion.h2>
        <motion.div 
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          className="w-24 h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto rounded-full mb-6"
        ></motion.div>
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-slate-400 max-w-2xl mx-auto text-lg"
        >
          We facilitate placements across top European nations and the UAE.
        </motion.p>
      </div>

      <div className="relative">
        {/* Gradient Overlays for smooth fade effect at edges */}
        <div className="absolute top-0 bottom-0 left-0 w-16 md:w-32 bg-gradient-to-r from-slate-900 to-transparent z-10 pointer-events-none"></div>
        <div className="absolute top-0 bottom-0 right-0 w-16 md:w-32 bg-gradient-to-l from-slate-900 to-transparent z-10 pointer-events-none"></div>

        <Marquee gradient={false} speed={50} pauseOnHover={false} className="py-8">
          {destinations.map((country, index) => (
            <div 
              key={index} 
              className="mx-6 md:mx-10 flex flex-col items-center justify-center space-y-4 group transition-transform duration-300"
            >
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden shadow-[0_0_15px_rgba(0,0,0,0.5)] border-2 border-slate-700 group-hover:border-[#D4AF37] transition-all duration-300 transform group-hover:scale-110">
                <img 
                  src={`https://flagcdn.com/w160/${country.code.toLowerCase()}.png`} 
                  alt={`${country.name} flag`} 
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-white font-medium tracking-wide text-sm md:text-base text-center">
                {country.name}
              </span>
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default Destinations;
