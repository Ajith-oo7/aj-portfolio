
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/80 backdrop-blur-md py-3 shadow-lg' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <div className="text-white font-mono text-2xl flex items-center">
          <div className="logo-container relative">
            <span className="text-gradient font-bold tracking-tighter">AA</span>
            <span className="text-neon-purple opacity-70 blur-[2px] absolute top-0 left-0 font-bold tracking-tighter">AA</span>
            <span className="text-neon-pink opacity-50 blur-[3px] absolute top-0.5 left-0.5 font-bold tracking-tighter">AA</span>
          </div>
        </div>

        <nav className="hidden md:flex items-center space-x-8">
          {['Story', 'Skills', 'Projects', 'About', 'Contact'].map(item => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-white opacity-80 hover:opacity-100 hover:text-neon-blue transition-colors text-sm uppercase tracking-wide"
            >
              {item}
            </a>
          ))}
          <Button className="bg-neon-blue text-white hover:bg-neon-blue/80 font-medium">
            Resume
          </Button>
        </nav>

        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-white"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-md py-4 shadow-lg">
          <nav className="container mx-auto px-4 flex flex-col space-y-4">
            {['Story', 'Skills', 'Projects', 'About', 'Contact'].map(item => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-white py-2 opacity-80 hover:opacity-100 hover:text-neon-blue transition-colors text-sm uppercase tracking-wide"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <Button className="bg-neon-blue text-white hover:bg-neon-blue/80 font-medium w-full">
              Resume
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
