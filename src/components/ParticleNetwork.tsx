
import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Add type definition for particlesJS
declare global {
  interface Window {
    particlesJS: any;
  }
}

export type ParticleTheme = 'purple' | 'blue' | 'green' | 'orange' | 'rainbow';

interface ParticleNetworkProps {
  className?: string;
  id?: string;
  enabled?: boolean;
  theme?: ParticleTheme;
}

const ParticleNetwork: React.FC<ParticleNetworkProps> = ({ 
  className, 
  id = 'particle-1',
  enabled = true,
  theme = 'purple'
}) => {
  const particlesRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [showHint, setShowHint] = useState(true);
  const [easterEggActive, setEasterEggActive] = useState(false);
  const [isParticleActive, setIsParticleActive] = useState(false);
  const activeTimerRef = useRef<NodeJS.Timeout | null>(null);
  const sequenceRef = useRef<string[]>([]);
  const easterEggCode = ['p', 'a', 'r', 't', 'y'];
  
  useEffect(() => {
    if (typeof window !== "undefined" && particlesRef.current && enabled) {
      // Load particles.js from CDN
      const script = document.createElement('script');
      script.src = 'https://cdn.jsdelivr.net/npm/particles.min.js@2.0.0/particles.min.js';
      script.async = true;
      
      script.onload = () => {
        if (window.particlesJS) {
          initParticles();
          setIsLoaded(true);
          
          // Hide the hint after a delay
          setTimeout(() => {
            setShowHint(false);
          }, 5000);
        }
      };
      
      document.body.appendChild(script);
      
      // Set up keyboard listener for easter egg
      const handleKeyDown = (e: KeyboardEvent) => {
        const key = e.key.toLowerCase();
        
        // Add the key to the sequence
        sequenceRef.current = [...sequenceRef.current, key].slice(-easterEggCode.length);
        
        // Check if the sequence matches the easter egg code
        if (sequenceRef.current.join('') === easterEggCode.join('')) {
          setEasterEggActive(true);
          setIsParticleActive(true);
          
          // Reset easter egg after 10 seconds
          setTimeout(() => setEasterEggActive(false), 10000);
          
          // Reset active state after random time between 15-25 seconds
          const randomDuration = Math.floor(Math.random() * (25000 - 15000 + 1) + 15000);
          if (activeTimerRef.current) {
            clearTimeout(activeTimerRef.current);
          }
          activeTimerRef.current = setTimeout(() => {
            setIsParticleActive(false);
          }, randomDuration);
        }
      };
      
      // Handle click events to activate particles
      const handleClick = () => {
        setIsParticleActive(true);
        
        // Reset active state after random time between 15-25 seconds
        const randomDuration = Math.floor(Math.random() * (25000 - 15000 + 1) + 15000);
        if (activeTimerRef.current) {
          clearTimeout(activeTimerRef.current);
        }
        activeTimerRef.current = setTimeout(() => {
          setIsParticleActive(false);
        }, randomDuration);
      };
      
      window.addEventListener('keydown', handleKeyDown);
      window.addEventListener('click', handleClick);
      
      return () => {
        if (document.body.contains(script)) {
          document.body.removeChild(script);
        }
        window.removeEventListener('keydown', handleKeyDown);
        window.removeEventListener('click', handleClick);
        if (activeTimerRef.current) {
          clearTimeout(activeTimerRef.current);
        }
      };
    }
  }, [enabled]);
  
  // Effect to handle theme changes and active state
  useEffect(() => {
    if (isLoaded && window.particlesJS && enabled) {
      initParticles();
    }
  }, [theme, easterEggActive, enabled, isParticleActive]);
  
  const getThemeColors = () => {
    if (easterEggActive) {
      return {
        particleColors: ["#ff0000", "#ff7700", "#ffff00", "#00ff00", "#0000ff", "#8B5CF6", "#D946EF"],
        lineColor: "#ffffff",
        speed: 5,
        size: 4
      };
    }
    
    switch (theme) {
      case 'blue':
        return {
          particleColors: ["#1EAEDB", "#33C3F0", "#6DEAFF", "#0FA0CE", "#0078A8"],
          lineColor: "#1EAEDB",
          speed: 2.2,
          size: 3
        };
      case 'green':
        return {
          particleColors: ["#10B981", "#34D399", "#6EE7B7", "#059669", "#047857"],
          lineColor: "#10B981",
          speed: 2.5,
          size: 3.2
        };
      case 'orange':
        return {
          particleColors: ["#F97316", "#FB923C", "#FDBA74", "#EA580C", "#C2410C"],
          lineColor: "#F97316",
          speed: 2.8,
          size: 3.5
        };
      case 'rainbow':
        return {
          particleColors: ["#D946EF", "#8B5CF6", "#3B82F6", "#10B981", "#F97316"],
          lineColor: "#8B5CF6",
          speed: 3,
          size: 3.8
        };
      case 'purple':
      default:
        return {
          particleColors: ["#D946EF", "#8B5CF6", "#9b87f5", "#7E69AB", "#6E59A5"],
          lineColor: "#8B5CF6",
          speed: 2.5,
          size: 3.5
        };
    }
  };
  
  const initParticles = () => {
    if (particlesRef.current && window.particlesJS) {
      const themeConfig = getThemeColors();
      
      // Only show interactive particles when active
      if (!isParticleActive && !easterEggActive) {
        window.particlesJS(particlesRef.current.id, {
          particles: {
            number: { value: 50, density: { enable: true, value_area: 800 } },
            color: { value: themeConfig.particleColors },
            shape: { type: "circle" },
            opacity: { 
              value: 0.3,
              random: true, 
              anim: { enable: false }
            },
            size: { 
              value: 2,
              random: true, 
              anim: { enable: false }
            },
            line_linked: {
              enable: true,
              distance: 150,
              color: themeConfig.lineColor,
              opacity: 0.2,
              width: 1
            },
            move: {
              enable: true,
              speed: 0.8,
              direction: "none",
              random: true,
              straight: false,
              out_mode: "out",
              bounce: false,
              attract: { enable: false }
            }
          },
          interactivity: {
            detect_on: "window",
            events: {
              onhover: { enable: false },
              onclick: { enable: false },
              resize: true
            }
          },
          retina_detect: true
        });
      } else {
        window.particlesJS(particlesRef.current.id, {
          particles: {
            number: { 
              value: easterEggActive ? 120 : 80,
              density: { enable: true, value_area: 800 } 
            },
            color: { 
              value: themeConfig.particleColors
            },
            shape: { type: "circle" },
            opacity: { 
              value: 0.7,
              random: true, 
              anim: { 
                enable: true, 
                speed: 1, 
                opacity_min: 0.3,
                sync: false 
              } 
            },
            size: { 
              value: themeConfig.size,
              random: true, 
              anim: { 
                enable: true, 
                speed: 2, 
                size_min: 0.1, 
                sync: false 
              } 
            },
            line_linked: {
              enable: true,
              distance: 150,
              color: themeConfig.lineColor,
              opacity: 0.5,
              width: 1.2
            },
            move: {
              enable: true,
              speed: easterEggActive ? themeConfig.speed * 1.5 : themeConfig.speed,
              direction: "none",
              random: true,
              straight: false,
              out_mode: "out",
              bounce: false,
              attract: { enable: true, rotateX: 600, rotateY: 1200 }
            }
          },
          interactivity: {
            detect_on: "window",
            events: {
              onhover: { 
                enable: true, 
                mode: "grab"
              },
              onclick: { 
                enable: true, 
                mode: easterEggActive ? "repulse" : "push"
              },
              resize: true
            },
            modes: {
              grab: {
                distance: 180,
                line_linked: {
                  opacity: 0.9
                }
              },
              repulse: {
                distance: 200,
                duration: 0.4
              },
              push: {
                particles_nb: easterEggActive ? 12 : 8
              },
              bubble: {
                distance: 100,
                size: easterEggActive ? 8 : 6,
                duration: 0.4,
                opacity: 0.8,
                speed: 3
              }
            }
          },
          retina_detect: true
        });
      }
    }
  };
  
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
        data-active={isParticleActive || easterEggActive ? "true" : "false"}
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
      {easterEggActive && (
        <motion.div 
          className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 px-8 py-4 rounded-lg bg-black/80 backdrop-blur-md border border-white/20 text-white text-center"
          initial={{ scale: 0, rotate: -10 }}
          animate={{ scale: 1, rotate: 0 }}
          exit={{ scale: 0, rotate: 10 }}
          transition={{ type: "spring", bounce: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-2 text-gradient">Party Mode Activated! 🎉</h2>
          <p>Enjoy the rainbow particles for 10 seconds!</p>
        </motion.div>
      )}
    </>
  );
};

export default ParticleNetwork;
