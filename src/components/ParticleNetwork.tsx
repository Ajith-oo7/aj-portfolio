
import { useEffect, useRef, useState } from 'react';

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
  const [isHovering, setIsHovering] = useState(false);
  
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
              number: { value: 60, density: { enable: true, value_area: 1200 } },
              color: { value: ["#1EAEDB", "#8B5CF6", "#D946EF", "#0EA5E9"] },
              shape: { type: "circle" },
              opacity: { value: 0.6, random: true, anim: { enable: true, speed: 1, opacity_min: 0.3, sync: false } },
              size: { value: 3, random: true, anim: { enable: true, speed: 2, size_min: 0.3, sync: false } },
              line_linked: {
                enable: true,
                distance: 150,
                color: "#1EAEDB", // Neon blue color for the connecting lines
                opacity: 0.3,
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
              detect_on: "canvas",
              events: {
                onhover: { 
                  enable: true, 
                  mode: "bubble",
                  parallax: { enable: true, force: 60, smooth: 10 }
                },
                onclick: { enable: true, mode: "repulse" }, // Particles repulse on click for a cool effect
                resize: true
              },
              modes: {
                grab: {
                  distance: 180,
                  line_linked: { opacity: 0.8 }
                },
                bubble: {
                  distance: 200,
                  size: 6,
                  duration: 2,
                  opacity: 0.8,
                  speed: 3
                },
                repulse: {
                  distance: 250,
                  duration: 2
                },
                push: {
                  particles_nb: 4
                }
              }
            },
            retina_detect: true
          });
        }
      };
      
      document.body.appendChild(script);
      
      // Add event listeners for mouse interactions
      const handleMouseEnter = () => setIsHovering(true);
      const handleMouseLeave = () => setIsHovering(false);
      
      if (particlesRef.current) {
        particlesRef.current.addEventListener('mouseenter', handleMouseEnter);
        particlesRef.current.addEventListener('mouseleave', handleMouseLeave);
      }
      
      return () => {
        if (document.body.contains(script)) {
          document.body.removeChild(script);
        }
        if (particlesRef.current) {
          particlesRef.current.removeEventListener('mouseenter', handleMouseEnter);
          particlesRef.current.removeEventListener('mouseleave', handleMouseLeave);
        }
      };
    }
  }, []);
  
  return (
    <div 
      id="particles-js" 
      ref={particlesRef} 
      className={`absolute inset-0 z-0 transition-all duration-300 ${isHovering ? 'opacity-100' : 'opacity-80'} ${className || ''}`}
    ></div>
  );
};

export default ParticleNetwork;
