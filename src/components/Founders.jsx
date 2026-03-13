import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedinIn, FaFacebookF, FaInstagram } from 'react-icons/fa';

const founders = [
  {
    name: 'Midhun A M',
    title: 'Chief Executive Officer',
    image: 'https://www.marquisoverseas.com/Midhun.jpg',
    message: '"Our mission transcends basic recruitment. We secure proper visa pathways and verified employment for our candidates, ensuring that every transition to the Gulf or Europe is safe, legal, and built for long-term career success."',
    socials: {
      linkedin: 'https://www.linkedin.com/in/midhun-am',
      facebook: 'https://www.facebook.com/midhun.muthu.186',
      instagram: 'https://www.instagram.com/midhun__am'
    }
  },
  {
    name: 'Mehaq Safvath Chungath',
    title: 'Chairman and Managing Director',
    image: 'https://www.marquisoverseas.com/Mehaq.jpg',
    message: '"We eliminate the borders standing between skilled professionals and life-changing global opportunities. From rigorous employer verification to transparent visa processing, we guarantee absolute peace of mind for every candidate we place."',
    socials: {
      linkedin: '#',
      facebook: 'https://www.facebook.com/share/18GJqFf2Nd/',
      instagram: 'https://www.instagram.com/mehaq_safvath'
    }
  }
];

const Founders = () => {
  return (
    <section id="leadership" className="py-24 bg-slate-950 border-t border-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-5xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#D4AF37] mb-6 tracking-wide drop-shadow-sm"
          >
            Our Leadership
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
            Guiding our global vision with uncompromising standards.
          </motion.p>
        </div>

        {/* Founders Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          {founders.map((founder, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="flex flex-col items-center text-center group"
            >
              {/* Image Container with Glow Effect */}
              <div className="relative mb-8">
                <div className="absolute inset-0 rounded-full bg-gradient-to-b from-[#D4AF37] to-slate-900 blur-md opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
                <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-2 border-[#D4AF37]/30 shadow-2xl p-1 bg-slate-900">
                  <img 
                    src={founder.image} 
                    alt={founder.name}
                    className="w-full h-full object-cover rounded-full"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Founder Info */}
              <h3 className="text-2xl font-serif font-semibold text-white mb-2">{founder.name}</h3>
              <p className="text-[#D4AF37] font-medium tracking-wide mb-6 uppercase text-sm">{founder.title}</p>
              
              {/* Quote/Message */}
              {/* Quote/Message */}
              <div className="relative mb-8 flex-grow">
                <span className="absolute -top-4 -left-4 text-4xl text-slate-800 font-serif leading-none">"</span>
                <p className="text-slate-300 italic px-6 relative z-10 leading-relaxed font-light mt-2">
                  {founder.message}
                </p>
                <span className="absolute -bottom-6 -right-4 text-4xl text-slate-800 font-serif leading-none opacity-50">"</span>
              </div>

              {/* Social Icons */}
              <div className="flex items-center justify-center space-x-4 mt-auto">
                <a 
                  href={founder.socials.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-slate-900 border border-slate-700 flex items-center justify-center text-slate-400 hover:text-[#D4AF37] hover:border-[#D4AF37] hover:shadow-[0_0_10px_rgba(212,175,55,0.3)] transition-all duration-300 hover:-translate-y-1"
                >
                  <FaLinkedinIn size={16} />
                </a>
                <a 
                  href={founder.socials.facebook} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-slate-900 border border-slate-700 flex items-center justify-center text-slate-400 hover:text-[#D4AF37] hover:border-[#D4AF37] hover:shadow-[0_0_10px_rgba(212,175,55,0.3)] transition-all duration-300 hover:-translate-y-1"
                >
                  <FaFacebookF size={16} />
                </a>
                <a 
                  href={founder.socials.instagram} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-slate-900 border border-slate-700 flex items-center justify-center text-slate-400 hover:text-[#D4AF37] hover:border-[#D4AF37] hover:shadow-[0_0_10px_rgba(212,175,55,0.3)] transition-all duration-300 hover:-translate-y-1"
                >
                  <FaInstagram size={18} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Founders;
