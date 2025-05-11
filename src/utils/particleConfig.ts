
import { getThemeColors, ThemeConfig } from './particleThemes';
import { ParticleTheme } from '../types/particle';

/**
 * Initializes particles.js with the appropriate configuration
 */
export const initParticles = (
  elementId: string, 
  theme: ParticleTheme, 
  isEasterEggActive: boolean,
  density: number = 1
): void => {
  if (typeof window === "undefined" || !window.particlesJS) {
    return;
  }

  const themeConfig = getThemeColors(theme, isEasterEggActive);
  const config = generateConfig(themeConfig, isEasterEggActive, density);
  window.particlesJS(elementId, config);
};

/**
 * Generates the configuration object for particles.js
 */
const generateConfig = (
  themeConfig: ThemeConfig, 
  isEasterEggActive: boolean,
  density: number
) => {
  // Calculate the number of particles based on density
  // density 0.5 = 40 particles, density 1 = 80 particles, density 1.5 = 120 particles
  const particleCount = Math.floor(80 * density);
  
  return {
    particles: {
      number: { 
        value: isEasterEggActive ? particleCount * 1.5 : particleCount, 
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
        speed: isEasterEggActive ? themeConfig.speed * 1.5 : themeConfig.speed,
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
          mode: isEasterEggActive ? "repulse" : "push"
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
          particles_nb: isEasterEggActive ? 12 : 8
        },
        bubble: {
          distance: 100,
          size: isEasterEggActive ? 8 : 6,
          duration: 0.4,
          opacity: 0.8,
          speed: 3
        }
      }
    },
    retina_detect: true
  };
};

/**
 * Loads particles.js script dynamically
 */
export const loadParticlesScript = (callback: () => void): void => {
  if (typeof window !== "undefined") {
    if (window.particlesJS) {
      // Execute callback immediately if particlesJS is already loaded
      callback();
      return;
    }
    
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/particles.js@2.0.0/particles.min.js';
    script.async = true;
    
    // Fix the type error by changing how we handle the callback
    script.onload = () => {
      callback();
    };
    
    document.body.appendChild(script);
  }
};
