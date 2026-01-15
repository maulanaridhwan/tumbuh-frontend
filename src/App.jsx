import React from 'react';
import './App.css';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { ServicesSection } from './components/ServicesSection';
import { FeaturesSection } from './components/FeaturesSection';
import { DemoSection } from './components/DemoSection';
import { Footer } from './components/Footer';
import { useScroll } from './hooks/useScroll';

const App = () => {
  useScroll();

  return (
    <div className="app">
      <Header />
      <HeroSection />
      <ServicesSection />
      <FeaturesSection />
      <DemoSection />
      <Footer />
    </div>
  );
};

export default App;