import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section id="about" className="py-24 bg-slate-900 relative">
      <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-5 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-4xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#D4AF37] mb-6 tracking-wide drop-shadow-sm">
              Our Philosophy
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto rounded-full"></div>
          </motion.div>

          <div className="space-y-8 text-lg md:text-xl text-slate-300 leading-relaxed font-light">
            <motion.p variants={itemVariants}>
              At <strong className="text-white font-medium">Marquis Overseas International</strong>, we understand that the decision to work abroad represents far more than a professional move — it reflects ambition, responsibility, and the desire to build a stronger future.
            </motion.p>
            
            <motion.p variants={itemVariants}>
              Our role is to ensure that this journey begins with confidence. Through a structured and transparent approach, we guide individuals through the overseas employment and visa process with precision, integrity, and unwavering commitment.
            </motion.p>
            
            <motion.div variants={itemVariants} className="bg-slate-800/50 border border-slate-700 p-8 rounded-2xl relative">
              <div className="absolute -top-4 -left-4 text-6xl text-[#D4AF37]/30 font-serif">"</div>
              <p className="relative z-10 italic text-[#F3E5AB]">
                Every application entrusted to us carries someone’s hopes, plans, and responsibilities. That understanding shapes the way we operate — with attention to detail, clear communication, and a deep respect for the trust placed in us.
              </p>
              <div className="absolute -bottom-8 -right-4 text-6xl text-[#D4AF37]/30 font-serif rotate-180">"</div>
            </motion.div>
            
            <motion.p variants={itemVariants}>
              At <strong className="text-white font-medium">Marquis Overseas International</strong>, we do more than facilitate documentation. We serve as a trusted gateway to international opportunities, helping people move forward toward the next chapter of their lives with clarity and assurance.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
