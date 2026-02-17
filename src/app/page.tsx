import AccessibilityWidget from '@/components/AccessibilityWidget';
import Contact from '@/components/Contact';
import Employers from '@/components/Employers';
import Features from '@/components/Features';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import HowItWorks from '@/components/HowItWorks';
import Impact from '@/components/Impact';
import Navbar from '@/components/Navbar';
import Stories from '@/components/Stories';

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main-content" role="main">
        <Hero />
        <Features />
        <HowItWorks />
        <Impact />
        <Employers />
        <Stories />
        <Contact />
      </main>
      <Footer />
      <AccessibilityWidget />
    </>
  );
}
