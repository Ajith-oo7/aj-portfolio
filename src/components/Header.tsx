
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import LanguageSwitcher from './LanguageSwitcher';
import { useTranslation } from '@/context/TranslationContext';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    console.log(`Attempting to scroll to section: ${sectionId}`);
    
    // Close mobile menu first
    setIsMobileMenuOpen(false);
    
    // Add a small delay to ensure UI updates before scrolling
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      console.log(`Found element:`, element);
      
      if (element) {
        // Increased header offset to ensure sections are properly aligned
        const headerOffset = 100; // Increased from 80 to 100 for better alignment
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
    }, 300); // Increased delay for better reliability
  };

  const navItems = [
    { id: 'story', label: t('navigation.story') },
    { id: 'skills', label: t('navigation.skills') },
    { id: 'projects', label: t('navigation.projects') },
    { id: 'about', label: t('navigation.about') },
    { id: 'contact', label: t('navigation.contact') }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/80 backdrop-blur-md py-3 shadow-lg' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <div className="text-white font-mono text-2xl flex items-center">
          <span className="text-gradient font-bold">AA</span>
          <span className="text-neon-blue">.</span>
        </div>

        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map(item => (
            <a
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              href={`#${item.id}`}
              className="text-white opacity-80 hover:opacity-100 hover:text-neon-blue transition-colors text-sm uppercase tracking-wide cursor-pointer"
            >
              {item.label}
            </a>
          ))}
          <div className="flex items-center space-x-3">
            <LanguageSwitcher />
            <Button 
              onClick={() => scrollToSection('contact')} 
              className="bg-neon-blue text-white hover:bg-neon-blue/80 font-medium"
            >
              {t('navigation.getInTouch')}
            </Button>
          </div>
        </nav>

        <div className="md:hidden flex items-center space-x-3">
          <LanguageSwitcher />
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-white"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-md py-4 shadow-lg">
          <nav className="container mx-auto px-4 flex flex-col space-y-4">
            {navItems.map(item => (
              <a
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                href={`#${item.id}`}
                className="text-white py-2 opacity-80 hover:opacity-100 hover:text-neon-blue transition-colors text-sm uppercase tracking-wide"
              >
                {item.label}
              </a>
            ))}
            <Button 
              onClick={() => scrollToSection('contact')} 
              className="bg-neon-blue text-white hover:bg-neon-blue/80 font-medium w-full"
            >
              {t('navigation.getInTouch')}
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
