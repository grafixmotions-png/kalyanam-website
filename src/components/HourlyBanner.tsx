import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const HourlyBanner = () => {
  return (
    <section className="w-full bg-dark text-beige py-20 px-6 md:px-12 relative overflow-hidden">
      {/* Subtle Background Pattern or Graphic */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4" />

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
        <div className="max-w-xl text-center md:text-left">
          <motion.h3 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-serif mb-4 leading-tight"
          >
            Need a custom package? <br className="hidden md:block" />
            Opt for our hourly rate at <span className="text-accent italic font-semibold">₹2,500/hr</span>
          </motion.h3>
          <motion.p 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-beige/70 font-light"
          >
            Perfect for intimate gatherings, pre-wedding shoots, or extending coverage beyond our standard packages. Minimum 2 hours required.
          </motion.p>
        </div>

        <motion.div
           initial={{ opacity: 0, x: 20 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           transition={{ delay: 0.2 }}
        >
          <a href="#contact" className="w-full sm:w-auto justify-center group px-8 py-4 bg-transparent border-2 border-accent text-accent hover:bg-accent hover:text-dark rounded-sm uppercase tracking-widest text-sm font-semibold transition-all flex items-center gap-3">
            Book Hourly Session
            <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HourlyBanner;
