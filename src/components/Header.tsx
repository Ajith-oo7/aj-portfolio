
import React, { useState, useEffect, useRef } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import LanguageSwitcher from './LanguageSwitcher';
import AdminLoginButton from './AdminLoginButton';
import { useTranslation } from '@/context/TranslationContext';
import { motion, AnimatePresence } from 'framer-motion';

interface HeaderProps {
  children?: React.ReactNode;
}

const Header: React.FC<HeaderProps> = ({ children }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const { t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    // Close mobile menu when screen is resized to desktop
    const handleResize = () => {
      if (window.innerWidth >= 768 && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    
    // Handle clicking outside to close mobile menu
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isMobileMenuOpen && 
        mobileMenuRef.current && 
        !mobileMenuRef.current.contains(event.target as Node) &&
        !(event.target as Element).closest('button')
      ) {
        setIsMobileMenuOpen(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMobileMenuOpen]);

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
      <a href="#main-content" className="skip-link">Skip to content</a>
      
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <motion.div 
          className="text-white font-mono text-2xl flex items-center"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-gradient font-bold">AA</span>
          <span className="text-neon-blue">.</span>
        </motion.div>

        <motion.nav 
          className="hidden md:flex items-center space-x-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {navItems.map((item, index) => (
            <motion.a
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              href={`#${item.id}`}
              className="text-white opacity-80 hover:opacity-100 hover:text-neon-blue transition-colors text-sm uppercase tracking-wide cursor-pointer"
              aria-label={`Navigate to ${item.label} section`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 + index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              {item.label}
            </motion.a>
          ))}
          <div className="flex items-center space-x-3">
            {children}
            <LanguageSwitcher />
            <AdminLoginButton />
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                onClick={() => scrollToSection('contact')} 
                className="bg-neon-blue text-white hover:bg-neon-blue/80 font-medium"
                aria-label="Get in touch"
              >
                {t('navigation.getInTouch')}
              </Button>
            </motion.div>
          </div>
        </motion.nav>

        <div className="md:hidden flex items-center space-x-3">
          {children}
          <LanguageSwitcher />
          <AdminLoginButton />
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-white p-2 rounded-md hover:bg-white/10 transition-colors"
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            ref={mobileMenuRef}
            id="mobile-menu"
            className="md:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-md py-4 shadow-lg"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <nav className="container mx-auto px-4 flex flex-col space-y-4">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  href={`#${item.id}`}
                  className="text-white py-3 opacity-80 hover:opacity-100 hover:text-neon-blue transition-colors text-sm uppercase tracking-wide"
                  aria-label={`Navigate to ${item.label} section`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  {item.label}
                </motion.a>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navItems.length * 0.05 }}
              >
                <Button 
                  onClick={() => scrollToSection('contact')} 
                  className="bg-neon-blue text-white hover:bg-neon-blue/80 font-medium w-full py-3"
                  aria-label="Get in touch"
                >
                  {t('navigation.getInTouch')}
                </Button>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
