
import { useEffect, useRef, useState } from 'react';

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
            value: 40, // Reduced to 40 as specified
            density: { enable: true, value_area: 800 } 
          },
          color: { 
            value: ["#D946EF", "#8B5CF6", "#9b87f5", "#7E69AB", "#6E59A5"] // Pink/purple tones
          },
          shape: { type: "circle" },
          opacity: { 
            value: 0.6, 
            random: true, 
            anim: { 
              enable: true, 
              speed: 1, 
              opacity_min: 0.1, 
              sync: false 
            } 
          },
          size: { 
            value: 3, 
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
            color: "#D946EF", // Pink connection lines
            opacity: 0.4,
            width: 1
          },
          move: {
            enable: true,
            speed: 2,
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
              distance: 140,
              line_linked: {
                opacity: 0.8
              }
            },
            repulse: {
              distance: 100,
              duration: 0.4
            },
            push: {
              particles_nb: 4 // Add 4 particles on click
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
    ></div>
  );
};

export default ParticleNetwork;
