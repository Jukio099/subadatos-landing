
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Products from '@/components/Products';
import Benefits from '@/components/Benefits';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import DashboardButton from '@/components/DashboardButton';
import CattleAuctionAnimation from '@/components/CattleAuctionAnimation';
import { Toaster } from "@/components/ui/toaster";

const Index = () => {
  useEffect(() => {
    // Initialize scroll animation
    const animateOnScroll = () => {
      const elements = document.querySelectorAll('.animate-on-scroll');

      elements.forEach(element => {
        const position = element.getBoundingClientRect();
        // Check if element is in viewport
        if (position.top < window.innerHeight * 0.8) {
          element.classList.add('visible');
        }
      });
    };

    window.addEventListener('scroll', animateOnScroll);
    setTimeout(animateOnScroll, 100); // Initial check

    return () => {
      window.removeEventListener('scroll', animateOnScroll);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Hero />

      {/* Cattle Auction Animation Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-10 animate-on-scroll">
            <h2 className="text-3xl font-bold mb-2 text-gradient">Inteligencia Ganadera en Acción</h2>
            <div className="h-1 w-20 bg-nature-500 mx-auto mb-4 rounded-full"></div>
            <p className="text-gray-600">Así es como la tecnología y los datos transforman las subastas ganaderas.</p>
          </div>
          <CattleAuctionAnimation />
          <p className="text-center text-xs text-gray-400 mt-4 italic">* Representación visual ilustrativa. Los datos mostrados son simulados con fines estéticos.</p>
        </div>
      </section>

      <Products />
      <About />
      <Benefits />
      <Contact />
      <Footer />

      <Toaster />

      {/* Back to top button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-6 right-6 bg-nature-600 hover:bg-nature-700 text-white p-3 rounded-full shadow-lg z-50 transition-all duration-300"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
        </svg>
      </button>
    </div>
  );
};

export default Index;
