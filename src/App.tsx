import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Gallery from './components/Gallery';
import Pricing from './components/Pricing';
import HourlyBanner from './components/HourlyBanner';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen font-sans bg-beige selection:bg-accent selection:text-dark">
      <Navbar />
      <Hero />
      <Gallery />
      <Pricing />
      <HourlyBanner />
      <Footer />
    </div>
  );
}

export default App;

