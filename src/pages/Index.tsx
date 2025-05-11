import React, { useEffect, useRef, useState } from 'react';
import Header from '@/components/Header';
import ParticleNetwork from '@/components/ParticleNetwork';
import NetworkToggle from '@/components/NetworkToggle';
import ScrollProgressIndicator from '@/components/ScrollProgressIndicator';
import HeroSection from '@/components/sections/HeroSection';
import JourneySection from '@/components/sections/JourneySection';
import SkillsSectionWrapper from '@/components/sections/SkillsSection';
import ExperienceSectionWrapper from '@/components/sections/ExperienceSection';
import CertificationsSectionWrapper from '@/components/sections/CertificationsSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import AboutSection from '@/components/sections/AboutSection';
import ContactSection from '@/components/sections/ContactSection';
import Footer from '@/components/layout/Footer';
import { motion, AnimatePresence } from 'framer-motion';
import { ParticleTheme } from '../types/particle';

interface IndexProps {
  networkEnabled: boolean;
  setNetworkEnabled: (enabled: boolean) => void;
  networkTheme: ParticleTheme;
  setNetworkTheme: (theme: ParticleTheme) => void;
}

const Index: React.FC<IndexProps> = ({
  networkEnabled,
  setNetworkEnabled,
  networkTheme,
  setNetworkTheme
}) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [showNetworkTip, setShowNetworkTip] = useState(false);
  const [particleDensity, setParticleDensity] = useState(1);
  
  const scrollToContent = () => {
    scrollRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  
  const scrollToSection = (sectionId: string) => {
    console.log(`Attempting to scroll to section from Index: ${sectionId}`);
    
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      console.log(`Found element:`, element);
      
      if (element) {
        const headerOffset = 80; // Account for fixed header height
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        
        console.log(`Scrolling to position: ${offsetPosition}`);
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      } else {
        console.error(`Element with ID "${sectionId}" not found`);
      }
    }, 300); // Delay for better reliability
  };
  
  // Create a pulsing animation effect on first load to draw attention to background
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowNetworkTip(true);
    }, 3000); // Show tip after 3 seconds
    
    return () => clearTimeout(timer);
  }, []);
  
  useEffect(() => {
    if (showNetworkTip) {
      const timer = setTimeout(() => {
        setShowNetworkTip(false);
      }, 5000); // Hide tip after 5 seconds
      
      return () => clearTimeout(timer);
    }
  }, [showNetworkTip]);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const blob = document.getElementById('mouse-blob');
      if (blob) {
        requestAnimationFrame(() => {
          blob.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`;
        });
      }
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  
  return (
    <div className="bg-black relative min-h-screen overflow-x-hidden">
      {/* Scroll Progress Indicator */}
      <ScrollProgressIndicator />
      
      {/* Particle network background */}
      <ParticleNetwork 
        enabled={networkEnabled} 
        theme={networkTheme} 
        density={particleDensity}
      />
      
      {/* Rest of components */}
      <div 
        className="fixed inset-0 bg-grid-pattern bg-[length:30px_30px] opacity-5 pointer-events-none z-0"
        aria-hidden="true"
      ></div>
      
      <Header>
        <NetworkToggle
          enabled={networkEnabled}
          onToggle={() => setNetworkEnabled(!networkEnabled)}
          currentTheme={networkTheme}
          onThemeChange={setNetworkTheme}
          density={particleDensity}
          onDensityChange={setParticleDensity}
        />
      </Header>
      
      {/* Network interaction tip */}
      <AnimatePresence>
        {showNetworkTip && networkEnabled && (
          <motion.div
            className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50 py-2 px-4 bg-purple-800/80 backdrop-blur-sm rounded-lg shadow-lg border border-purple-400/20 text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            role="status"
            aria-live="polite"
          >
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-8 h-8 bg-purple-700/50 rounded-full">
                <span className="block w-3 h-3 bg-purple-400 rounded-full animate-ping"></span>
              </div>
              <p>Explore the interactive network by clicking anywhere!</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Mouse blob effect */}
      <motion.div 
        id="mouse-blob" 
        className="fixed w-48 h-48 rounded-full bg-radial-glow pointer-events-none opacity-60 z-0"
        style={{ transform: 'translate(-50%, -50%)' }}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 0.6, scale: 1 }}
        transition={{ duration: 1 }}
        aria-hidden="true"
      ></motion.div>
      
      {/* Hero Section */}
      <HeroSection onScroll={scrollToSection} onScrollToContent={scrollToContent} />
      
      {/* Main Content Sections */}
      <main id="main-content" ref={scrollRef}>
        <JourneySection />
        <SkillsSectionWrapper />
        <ExperienceSectionWrapper />
        <CertificationsSectionWrapper />
        <ProjectsSection />
        <AboutSection />
        <ContactSection />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
