
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
  const [isClicked, setIsClicked] = useState(false);
  
  useEffect(() => {
    if (typeof window !== "undefined" && particlesRef.current) {
      // Load particles.js from CDN
      const script = document.createElement('script');
      script.src = 'https://cdn.jsdelivr.net/npm/particles.js@2.0.0/particles.min.js';
      script.async = true;
      
      script.onload = () => {
        if (window.particlesJS) {
          initParticles();
        }
      };
      
      document.body.appendChild(script);
      
      // Add event listeners for mouse interactions
      const handleMouseEnter = () => setIsHovering(true);
      const handleMouseLeave = () => setIsHovering(false);
      const handleClick = () => {
        setIsClicked(true);
        setTimeout(() => setIsClicked(false), 1500);
        
        // Reinitialize particles with more intensity when clicked
        if (window.particlesJS) {
          initParticles(true);
          // Return to normal state after 1.5 seconds
          setTimeout(() => initParticles(false), 1500);
        }
      };
      
      if (particlesRef.current) {
        particlesRef.current.addEventListener('mouseenter', handleMouseEnter);
        particlesRef.current.addEventListener('mouseleave', handleMouseLeave);
        particlesRef.current.addEventListener('click', handleClick);
      }
      
      return () => {
        if (document.body.contains(script)) {
          document.body.removeChild(script);
        }
        if (particlesRef.current) {
          particlesRef.current.removeEventListener('mouseenter', handleMouseEnter);
          particlesRef.current.removeEventListener('mouseleave', handleMouseLeave);
          particlesRef.current.removeEventListener('click', handleClick);
        }
      };
    }
  }, []);
  
  const initParticles = (intense = false) => {
    if (particlesRef.current && window.particlesJS) {
      window.particlesJS(particlesRef.current.id, {
        particles: {
          number: { 
            value: intense ? 120 : 80, 
            density: { enable: true, value_area: 1200 } 
          },
          color: { 
            value: ["#1EAEDB", "#8B5CF6", "#D946EF", "#0EA5E9", "#22D3EE"] 
          },
          shape: { type: "circle" },
          opacity: { 
            value: intense ? 0.8 : 0.6, 
            random: true, 
            anim: { 
              enable: true, 
              speed: intense ? 3 : 1, 
              opacity_min: 0.3, 
              sync: false 
            } 
          },
          size: { 
            value: intense ? 5 : 3, 
            random: true, 
            anim: { 
              enable: true, 
              speed: intense ? 5 : 2, 
              size_min: 0.3, 
              sync: false 
            } 
          },
          line_linked: {
            enable: true,
            distance: intense ? 120 : 150,
            color: intense ? "#22D3EE" : "#1EAEDB",
            opacity: intense ? 0.6 : 0.3,
            width: intense ? 2 : 1
          },
          move: {
            enable: true,
            speed: intense ? 5 : 2,
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
              mode: intense ? "bubble" : isHovering ? "bubble" : "grab",
              parallax: { enable: true, force: 80, smooth: 10 }
            },
            onclick: { 
              enable: true, 
              mode: intense ? "push" : "repulse"
            },
            resize: true
          },
          modes: {
            grab: {
              distance: 180,
              line_linked: { opacity: 0.8 }
            },
            bubble: {
              distance: 200,
              size: intense ? 10 : 6,
              duration: 2,
              opacity: 0.8,
              speed: 3
            },
            repulse: {
              distance: intense ? 300 : 250,
              duration: 2
            },
            push: {
              particles_nb: intense ? 8 : 4
            }
          }
        },
        retina_detect: true
      });
    }
  };
  
  return (
    <div 
      id="particles-js" 
      ref={particlesRef} 
      className={`absolute inset-0 z-0 transition-all duration-300 cursor-pointer
        ${isHovering ? 'opacity-100' : 'opacity-85'} 
        ${isClicked ? 'scale-105' : 'scale-100'}
        ${className || ''}`}
      style={{ 
        transition: 'all 0.3s ease-out',
      }}
    ></div>
  );
};

export default ParticleNetwork;
