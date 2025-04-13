
import { useEffect, useRef } from 'react';

// Add type definition for particlesJS
declare global {
  interface Window {
    particlesJS: any;
  }
}

interface ParticleNetworkProps {
  className?: string;
}

const ParticleNetwork: React.FC<ParticleNetworkProps> = ({ className }) => {
  const particlesRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (typeof window !== "undefined" && particlesRef.current) {
      // Load particles.js from CDN
      const script = document.createElement('script');
      script.src = 'https://cdn.jsdelivr.net/npm/particles.js@2.0.0/particles.min.js';
      script.async = true;
      
      script.onload = () => {
        if (window.particlesJS) {
          window.particlesJS(particlesRef.current?.id, {
            particles: {
              number: { value: 40, density: { enable: true, value_area: 1200 } },
              color: { value: ["#1EAEDB", "#8B5CF6", "#D946EF"] },
              shape: { type: "circle" },
              opacity: { value: 0.5, random: true },
              size: { value: 2, random: true },
              line_linked: {
                enable: true,
                distance: 150,
                color: "#1EAEDB", // Neon blue color for the connecting lines
                opacity: 0.3,
                width: 1
              },
              move: {
                enable: true,
                speed: 1.5,
                direction: "none",
                random: true,
                straight: false,
                out_mode: "out",
                bounce: false
              }
            },
            interactivity: {
              detect_on: "canvas",
              events: {
                onhover: { enable: true, mode: "grab" }, // Lines connect when hovering
                onclick: { enable: true, mode: "push" }, // Add particles on click
                resize: true
              },
              modes: {
                grab: {
                  distance: 140,
                  line_linked: { opacity: 0.8 }
                },
                push: {
                  particles_nb: 3
                }
              }
            },
            retina_detect: true
          });
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
  
  return (
    <div 
      id="particles-js" 
      ref={particlesRef} 
      className={`absolute inset-0 z-0 ${className || ''}`}
    ></div>
  );
};

export default ParticleNetwork;
