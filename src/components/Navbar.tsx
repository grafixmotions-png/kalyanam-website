import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'HOME', href: '#' },
    { name: 'GALLERY', href: '#gallery' },
    { name: 'PRICING', href: '#pricing' },
    { name: 'CONTACT', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 md:px-12 py-4 ${
        isScrolled ? 'bg-beige/95 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center relative">
        {/* Logo */}
        <a 
          href="#" 
          className={`font-cinzel text-2xl md:text-3xl font-bold tracking-widest uppercase origin-left transition-colors duration-300 ${isScrolled ? 'text-dark' : 'text-beige'}`}
        >
          Kalyanam
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          <ul className="flex space-x-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className={`text-sm font-medium tracking-widest transition-colors hover:text-accent ${
                    isScrolled ? 'text-dark/80' : 'text-beige/90'
                  }`}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <a href="#contact" className="bg-btn-dark hover:bg-dark text-beige px-6 py-2.5 rounded-sm text-sm font-medium tracking-wider transition-colors">
            GET A QUOTE
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className={`md:hidden ${isScrolled ? 'text-dark' : 'text-beige'}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-beige shadow-lg border-t border-dark/10 p-6 md:hidden flex flex-col space-y-6"
          >
            <ul className="flex flex-col space-y-4 text-center">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-dark font-medium tracking-widest block py-2 hover:text-accent"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            <a href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="bg-btn-dark text-beige px-6 py-3 rounded-sm text-sm font-medium tracking-wider w-full text-center">
              GET A QUOTE
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
