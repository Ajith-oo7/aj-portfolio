
import React, { useEffect, useRef } from 'react';
import Header from '@/components/Header';
import EnhancedParticleNetwork from '@/components/EnhancedParticleNetwork';
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

const Index = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  
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
  
  const backgroundSkills = [
    { name: 'Data Engineering', category: 'Core', proficiency: 95, color: '#1EAEDB' },
    { name: 'Machine Learning', category: 'AI', proficiency: 90, color: '#8B5CF6' },
    { name: 'Cloud Architecture', category: 'Infrastructure', proficiency: 88, color: '#D946EF' },
    { name: 'Business Intelligence', category: 'Analytics', proficiency: 92, color: '#F97316' },
    { name: 'Big Data', category: 'Data', proficiency: 94, color: '#10B981' },
    { name: 'LLMs', category: 'AI', proficiency: 85, color: '#EC4899' },
    { name: 'Python', category: 'Languages', proficiency: 93, color: '#0EA5E9' },
    { name: 'SQL', category: 'Languages', proficiency: 96, color: '#F59E0B' },
    { name: 'Data Visualization', category: 'Analytics', proficiency: 89, color: '#1EAEDB' },
    { name: 'Data Modeling', category: 'Data', proficiency: 91, color: '#8B5CF6' },
    { name: 'ETL', category: 'Data', proficiency: 94, color: '#D946EF' },
    { name: 'API Development', category: 'Development', proficiency: 87, color: '#F97316' }
  ];
  
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
      
      {/* Enhanced Particle network background */}
      <EnhancedParticleNetwork id="background-particles" skills={backgroundSkills} />
      
      {/* Mouse blob effect - smaller and more responsive */}
      <div 
        id="mouse-blob" 
        className="fixed w-48 h-48 rounded-full bg-radial-glow pointer-events-none opacity-60 z-0"
        style={{ transform: 'translate(-50%, -50%)' }}
      ></div>
      
      <div 
        className="fixed inset-0 bg-grid-pattern bg-[length:30px_30px] opacity-5 pointer-events-none z-0"
      ></div>
      
      <Header />
      
      {/* Hero Section */}
      <HeroSection onScroll={scrollToSection} onScrollToContent={scrollToContent} />
      
      {/* Main Content Sections */}
      <div ref={scrollRef}>
        <JourneySection />
        <SkillsSectionWrapper />
        <ExperienceSectionWrapper />
        <CertificationsSectionWrapper />
        <ProjectsSection />
        <AboutSection />
        <ContactSection />
      </div>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
