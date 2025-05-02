
import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

// Add type definition for particlesJS
declare global {
  interface Window {
    particlesJS: any;
  }
}

interface ParticleNetworkProps {
  className?: string;
  id?: string;
}

const ParticleNetwork: React.FC<ParticleNetworkProps> = ({ 
  className, 
  id = 'particle-1' 
}) => {
  const particlesRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [showHint, setShowHint] = useState(true);
  
  useEffect(() => {
    if (typeof window !== "undefined" && particlesRef.current) {
      // Load particles.js from CDN
      const script = document.createElement('script');
      script.src = 'https://cdn.jsdelivr.net/npm/particles.js@2.0.0/particles.min.js';
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
      
      return () => {
        if (document.body.contains(script)) {
          document.body.removeChild(script);
        }
      };
    }
  }, []);
  
  const initParticles = () => {
    if (particlesRef.current && window.particlesJS) {
      window.particlesJS(particlesRef.current.id, {
        particles: {
          number: { 
            value: 80, // Increased for more visible network
            density: { enable: true, value_area: 800 } 
          },
          color: { 
            value: ["#D946EF", "#8B5CF6", "#9b87f5", "#7E69AB", "#6E59A5"] // Pink/purple tones
          },
          shape: { type: "circle" },
          opacity: { 
            value: 0.7, // Increased for better visibility
            random: true, 
            anim: { 
              enable: true, 
              speed: 1, 
              opacity_min: 0.3, // Increased minimum opacity
              sync: false 
            } 
          },
          size: { 
            value: 3.5, // Slightly larger particles
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
            color: "#8B5CF6", // More vibrant connection lines
            opacity: 0.5, // Increased opacity
            width: 1.2 // Slightly thicker lines
          },
          move: {
            enable: true,
            speed: 2.5, // Slightly faster movement
            direction: "none",
            random: true,
            straight: false,
            out_mode: "out",
            bounce: false,
            attract: { enable: true, rotateX: 600, rotateY: 1200 }
          }
        },
        interactivity: {
          detect_on: "window", // Detect on entire window
          events: {
            onhover: { 
              enable: true, 
              mode: "grab" // "Grabbing" effect connecting particles to cursor
            },
            onclick: { 
              enable: true, 
              mode: "push" // Add particles on click
            },
            resize: true
          },
          modes: {
            grab: {
              distance: 180, // Increased grab distance
              line_linked: {
                opacity: 0.9 // More visible grab lines
              }
            },
            repulse: {
              distance: 100,
              duration: 0.4
            },
            push: {
              particles_nb: 8 // Add more particles on click
            },
            bubble: {
              distance: 100,
              size: 6,
              duration: 0.4,
              opacity: 0.8,
              speed: 3
            }
          }
        },
        retina_detect: true
      });
    }
  };
  
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
          pointerEvents: 'auto' // Allow interaction with particles
        }}
        aria-hidden="true"
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
    </>
  );
};

export default ParticleNetwork;
