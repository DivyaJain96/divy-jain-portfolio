import { useEffect } from 'react';
import Preloader from '@/components/Preloader';
import SmoothScroll from '@/components/SmoothScroll';
import GrainOverlay from '@/components/GrainOverlay';
import CustomCursor from '@/components/CustomCursor';
import AmbientBackground from '@/components/AmbientBackground';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Highlights from '@/components/Highlights';
import Recognition, { SHOW_RECOGNITION } from '@/components/Recognition';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Services from '@/components/Services';
import WhyMe from '@/components/WhyMe';
import Process from '@/components/Process';
import Pricing from '@/components/Pricing';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import ThankYou from '@/pages/ThankYou';
import NotFound from '@/pages/NotFound';
import Seo from '@/components/Seo';
import { ReadyProvider } from '@/context/ReadyContext';
import { scrollToHash } from '@/lib/motion';

function HomePage() {
  useEffect(() => {
    if (!window.location.hash) return;
    const timer = window.setTimeout(() => scrollToHash(window.location.hash), 80);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <ReadyProvider>
      <Seo />
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>
      <Preloader />
      <SmoothScroll>
        <AmbientBackground />
        <GrainOverlay />
        <CustomCursor />
        <Navbar />
        <main id="main-content">
          <Hero />
          <About />
          <Services />
          <Skills />
          <Highlights />
          <Projects />
          {SHOW_RECOGNITION ? <Recognition /> : null}
          <Experience />
          <WhyMe />
          <Process />
          <Pricing />
          <Contact />
        </main>
        <Footer />
      </SmoothScroll>
    </ReadyProvider>
  );
}

function App() {
  const path = window.location.pathname.replace(/\/$/, '') || '/';
  if (path === '/thank-you') {
    return <ThankYou />;
  }
  if (path !== '/') {
    return <NotFound />;
  }
  return <HomePage />;
}

export default App;
