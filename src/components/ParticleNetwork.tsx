
import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { initParticles, loadParticlesScript } from '../utils/particleConfig';
import { useEasterEgg } from '../hooks/useEasterEgg';
import { ParticleTheme } from '../types/particle';

interface ParticleNetworkProps {
  className?: string;
  id?: string;
  enabled?: boolean;
  theme?: ParticleTheme;
  density?: number;
}

const ParticleNetwork: React.FC<ParticleNetworkProps> = ({ 
  className, 
  id = 'particle-1',
  enabled = true,
  theme = 'purple',
  density = 1
}) => {
  const particlesRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [showHint, setShowHint] = useState(true);
  
  // Easter egg functionality
  const easterEggActive = useEasterEgg(['p', 'a', 'r', 't', 'y']);
  
  // Load the particles.js script
  useEffect(() => {
    if (typeof window !== "undefined" && particlesRef.current && enabled) {
      const cleanup = loadParticlesScript(() => {
        initParticles(id, theme, easterEggActive, density);
        setIsLoaded(true);
        
        // Hide the hint after a delay
        setTimeout(() => {
          setShowHint(false);
        }, 5000);
      });
      
      return cleanup;
    }
  }, [enabled, id]);
  
  // Effect to handle theme changes
  useEffect(() => {
    if (isLoaded && window.particlesJS && enabled) {
      initParticles(id, theme, easterEggActive, density);
    }
  }, [theme, easterEggActive, enabled, density, id, isLoaded]);
  
  if (!enabled) return null;
  
  return (
    <>
      <div 
        id={id} 
        ref={particlesRef} 
        className={`fixed inset-0 z-0 ${className || ''}`}
        style={{ 
          width: '100%', 
          height: '100%',
          position: 'fixed',
          top: 0,
          left: 0,
          pointerEvents: 'auto'
        }}
        aria-hidden="true"
        data-theme={theme}
        data-density={density}
      ></div>
      
      {/* Visual hint to show interactivity */}
      {showHint && (
        <motion.div 
          className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-20 bg-black/60 backdrop-blur-sm text-white px-4 py-2 rounded-full flex items-center gap-2 border border-purple-400/30"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          aria-live="polite"
        >
          <span className="text-sm font-medium">Try clicking or moving your cursor</span>
          <div className="w-3 h-3 bg-purple-500 rounded-full animate-pulse"></div>
        </motion.div>
      )}
      
      {/* Easter Egg Activation Message */}
      <AnimatePresence>
        {easterEggActive && (
          <motion.div 
            className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 px-8 py-4 rounded-lg bg-black/80 backdrop-blur-md border border-white/20 text-white text-center"
            initial={{ scale: 0, rotate: -10 }}
            animate={{ scale: 1, rotate: 0 }}
            exit={{ scale: 0, rotate: 10 }}
            transition={{ type: "spring", bounce: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-2 text-gradient">Party Mode Activated! 🎉</h2>
            <p>Enjoy the rainbow neon particles for 10 seconds!</p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ParticleNetwork;
