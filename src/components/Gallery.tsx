import { useState } from 'react';
import { motion } from 'framer-motion';
import CustomVideoPlayer from './CustomVideoPlayer';

const portfolioItems = {
  Photos: [
    { id: 1, url: '/IMG_4858.JPG', category: 'BRIDAL' },
    { id: 2, url: '/IMG_4870.JPG', category: 'CEREMONY' },
    { id: 3, url: '/IMG_4873.JPG', category: 'JEWELLERY CLOSEUP' },
    { id: 4, url: '/IMG_0163.jpg', category: 'PORTRAIT' },
    { id: 5, url: '/IMG_0154.jpg', category: 'CANDID' },
  ],
    Reels: [
    { id: 7, url: '/reel1.mp4', category: 'HIGHLIGHTS' },
    { id: 8, url: '/reel2.mp4', category: 'TEASER' },
    { id: 9, url: '/reel3.mp4', category: 'REEL' },
  ],
};

const Gallery = () => {
  const [activeTab, setActiveTab] = useState<'Photos' | 'Reels'>('Photos');

  // Using simple columns layout for masonry effect
  return (
    <section id="gallery" className="w-full py-24 px-6 md:px-12 bg-beige">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-accent uppercase tracking-widest text-sm font-semibold mb-4"
          >
            Portfolio
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-serif text-dark mb-10"
          >
            Selected Works
          </motion.h2>

          {/* Toggle Tabs */}
          <div className="flex flex-wrap justify-center items-center gap-4 mb-12">
            {(['Photos', 'Reels'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-8 py-3 rounded-full text-sm font-medium tracking-widest transition-all ${activeTab === tab
                  ? 'bg-dark text-beige shadow-lg'
                  : 'bg-transparent text-dark/60 hover:text-dark hover:bg-dark/5'
                  }`}
              >
                {tab.toUpperCase()}
              </button>
            ))}
          </div>
        </div>

        {/* Masonry Grid Simulation using columns */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {portfolioItems[activeTab].map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="relative group overflow-hidden break-inside-avoid rounded-sm shadow-sm"
            >
              {item.url.match(/\.(mp4|mov|webm)$/i) ? (
                <div className="w-full h-full relative overflow-hidden bg-black aspect-[9/16]">
                  <CustomVideoPlayer src={item.url} />
                </div>
              ) : (
                <img
                  src={item.url}
                  alt={item.category}
                  className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              )}
              <div
                className={`absolute pointer-events-none transition-opacity duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100 ${item.url.match(/\.(mp4|mov|webm)$/i) ? 'top-6 left-0 right-0 z-40' : 'inset-0 bg-black/40'
                  }`}
              >
                <span className="text-beige border border-beige/40 px-6 py-2 uppercase tracking-[0.2em] text-xs font-semibold backdrop-blur-sm bg-black/20">
                  {item.category}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
