import React from 'react';
import { motion } from 'framer-motion';
import { 
  MdBolt, 
  MdEngineering, 
  MdAcUnit, 
  MdArchitecture,
  MdWaterDrop,
  MdPrecisionManufacturing,
  MdConstruction,
  MdLocalShipping,
  MdFrontLoader,
  MdInventory,
  MdRestaurantMenu,
  MdCleaningServices
} from 'react-icons/md';

const servicesList = [
  { title: 'Industrial Electrician', icon: <MdBolt /> },
  { title: 'Mechanical Technician', icon: <MdEngineering /> },
  { title: 'HVAC Technician', icon: <MdAcUnit /> },
  { title: 'Structural Welder', icon: <MdArchitecture /> },
  { title: 'Pipe Fitter', icon: <MdWaterDrop /> },
  { title: 'CNC Machine Operator', icon: <MdPrecisionManufacturing /> },
  { title: 'Construction Supervisor', icon: <MdConstruction /> },
  { title: 'Heavy Truck Driver', icon: <MdLocalShipping /> },
  { title: 'Forklift Operator', icon: <MdFrontLoader /> },
  { title: 'Warehouse Associate', icon: <MdInventory /> },
  { title: 'Executive Chef', icon: <MdRestaurantMenu /> },
  { title: 'Housekeeping Staff', icon: <MdCleaningServices /> }
];

const Services = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="services" className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#D4AF37] mb-6 tracking-wide drop-shadow-sm"
          >
            Skilled Occupations
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
            We recruit across a wide range of specialized industries seamlessly.
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {servicesList.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-[#D4AF37]/50 transition-all duration-300 group hover:shadow-[0_0_20px_rgba(212,175,55,0.1)] flex items-center space-x-4"
            >
              <div className="bg-slate-800 p-4 rounded-xl text-[#D4AF37] text-3xl group-hover:bg-[#D4AF37] group-hover:text-slate-900 transition-colors duration-300">
                {service.icon}
              </div>
              <h3 className="text-white font-medium text-lg leading-tight group-hover:text-[#F3E5AB] transition-colors">
                {service.title}
              </h3>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
