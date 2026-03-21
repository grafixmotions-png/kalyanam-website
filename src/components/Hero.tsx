import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1542042161784-26ab9e041e89?auto=format&fit=crop&q=80&w=2000")' }}
      >
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 text-center flex flex-col items-center">
        {/* Subtitle / Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-accent uppercase tracking-[0.2em] text-sm md:text-base mb-6 font-medium"
        >
          Kalyanam Videography
        </motion.p>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-beige mb-6 leading-tight max-w-4xl"
        >
          Timeless Stories,<br />
          <span className="bg-gradient-to-r from-accent via-yellow-200 to-accent bg-clip-text text-transparent italic">
            Beautifully Told.
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-beige/80 text-lg md:text-xl max-w-2xl mb-12 font-light"
        >
          We capture the fleeting moments, the unseen glances, and the raw emotion of your special day, crafting cinematic legacy films.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center gap-6"
        >
          <a 
            href="#gallery" 
            className="w-full sm:w-auto px-8 py-4 bg-accent hover:bg-yellow-600 text-dark rounded-sm uppercase tracking-widest text-sm font-semibold transition-colors flex items-center justify-center gap-2"
          >
            View My Work <span className="text-xl leading-none">↓</span>
          </a>
          <a 
            href="#pricing" 
            className="w-full sm:w-auto px-8 py-4 bg-transparent border border-beige/30 hover:bg-beige hover:text-dark text-beige rounded-sm uppercase tracking-widest text-sm font-semibold transition-all"
          >
            See Pricing
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 text-beige/60"
      >
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-beige/60 to-transparent" />
      </motion.div>
    </section>
  );
};

export default Hero;
