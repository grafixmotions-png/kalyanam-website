import { ArrowUp, Instagram, Mail } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="bg-dark text-beige pt-20 pb-8 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand Col */}
          <div className="md:col-span-2">
            <h2 className="font-cinzel text-3xl md:text-4xl font-bold tracking-widest uppercase mb-4 text-beige">
              Kalyanam
            </h2>
            <p className="text-beige/70 text-sm max-w-sm leading-relaxed font-light">
              Timeless stories, beautifully told. Cinematic wedding videography capturing the essence of your love story.
            </p>
          </div>

          {/* Links Col 1: Navigate */}
          <div>
            <h4 className="text-accent text-xs font-bold tracking-[0.2em] uppercase mb-6">Navigate</h4>
            <ul className="space-y-4">
              {['Home', 'Gallery', 'Pricing', 'Contact'].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="text-beige/80 hover:text-accent transition-colors text-sm tracking-wide">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Links Col 2: Connect */}
          <div>
            <h4 className="text-accent text-xs font-bold tracking-[0.2em] uppercase mb-6">Connect</h4>
            <ul className="space-y-4">
              <li>
                <a href="mailto:kalyanamvideography@gmail.com" className="group flex items-center gap-3 text-beige/80 hover:text-accent transition-colors text-sm tracking-wide">
                  <Mail size={16} className="group-hover:-translate-y-0.5 transition-transform" />
                  kalyanamvideography@gmail.com
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/_kalyanam_01/?hl=en" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3 text-beige/80 hover:text-accent transition-colors text-sm tracking-wide">
                  <Instagram size={16} className="group-hover:-translate-y-0.5 transition-transform" />
                  @_kalyanam_01
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-beige/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-beige/50 text-xs tracking-wider">
            &copy; {new Date().getFullYear()} KALYANAM VIDEOGRAPHY. ALL RIGHTS RESERVED. BUILT BY <a href="https://www.instagram.com/turntople" target="_blank">TURNTOPLE STUDIOS</a>
          </p>

          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 text-beige/50 hover:text-accent transition-colors text-xs font-semibold uppercase tracking-widest"
          >
            Back to Top
            <ArrowUp size={14} className="group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
