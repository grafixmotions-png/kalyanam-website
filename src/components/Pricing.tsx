import { Check } from 'lucide-react';
import { motion } from 'framer-motion';

const pricingPlans = [
  {
    name: 'BASIC',
    price: '₹5,999',
    description: 'Perfect for creators who need fast and clean edits.',
    features: [
      '3 Short-form videos (Reels / Shorts)',
      '24-hour delivery',
      'Clean cuts & smooth transitions',
      'Basic color correction',
      'Background music',
    ],
    highlighted: false,
    buttonText: 'Get Started',
  },
  {
    name: 'STANDARD',
    price: '₹11,999',
    description: 'Ideal for creators who want engaging and professional content.',
    features: [
      '6 Short-form videos',
      '36-hour delivery',
      'Professional color grading',
      'Cinematic transitions',
      'Motion graphics & captions',
      'Background music sync',
    ],
    highlighted: true,
    buttonText: 'Start Project',
  },
  {
    name: 'DELUXE',
    price: '₹19,999',
    description: 'Best for brands and creators who want premium storytelling.',
    features: [
      '9 Short-form videos',
      '4-day delivery',
      'Advanced color grading',
      'Cinematic storytelling edit',
      'Motion graphics & custom titles',
      'Sound design & mixing',
      'Priority support',
    ],
    highlighted: false,
    buttonText: 'Book Project',
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="w-full py-24 px-6 md:px-12 bg-beige bg-opacity-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-accent uppercase tracking-widest text-sm font-semibold mb-4"
          >
            Pricing
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-serif text-dark mb-6"
          >
            Transparent Pricing
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-dark/70 text-lg max-w-2xl mx-auto font-light"
          >
            Invest in memories that will last a lifetime. Choose a package that best fits your love story.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-y-12 lg:gap-8 items-center max-w-md lg:max-w-none mx-auto">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className={`relative rounded-lg p-8 md:p-10 shadow-lg ${
                plan.highlighted
                  ? 'bg-dark text-beige transform md:-translate-y-4 ring-2 ring-accent ring-offset-2 ring-offset-beige shadow-[0_0_30px_rgba(200,169,110,0.3)]'
                  : 'bg-white text-dark border border-dark/10'
              }`}
            >
              {plan.highlighted && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <span className="bg-accent text-dark text-xs uppercase tracking-widest font-bold py-1 px-4 rounded-full shadow-md">
                    Most Popular
                  </span>
                </div>
              )}

              <h3 className="text-2xl font-serif font-semibold mb-2">{plan.name}</h3>
              <p className={`text-sm mb-6 pb-6 border-b ${plan.highlighted ? 'text-beige/70 border-beige/20' : 'text-dark/60 border-dark/10'}`}>
                {plan.description}
              </p>
              
              <div className="mb-8">
                <span className="text-4xl font-serif font-bold">{plan.price}</span>
                <span className={`text-sm ml-2 ${plan.highlighted ? 'text-beige/70' : 'text-dark/60'}`}>
                  / event
                </span>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="text-accent shrink-0 mt-0.5" size={18} />
                    <span className="text-sm font-medium">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-4 rounded-sm text-sm font-bold uppercase tracking-widest transition-colors duration-300 ${
                  plan.highlighted
                    ? 'bg-accent text-dark hover:bg-yellow-600'
                    : 'bg-btn-dark hover:bg-dark text-beige'
                }`}
              >
                {plan.buttonText}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
