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
  
  // Add blinking effect for party mode
  if (isEasterEggActive && themeConfig.blinking) {
    startBlinkingEffect(elementId, themeConfig);
  } else {
    stopBlinkingEffect(elementId);
  }
};

/**
 * Creates a blinking effect by changing particle colors
 */
const startBlinkingEffect = (elementId: string, themeConfig: ThemeConfig) => {
  // Clear any existing interval
  stopBlinkingEffect(elementId);
  
  // Store the interval ID on the window object
  if (typeof window !== "undefined") {
    const neonColors = [
      "#ff0000", // Red
      "#ff7700", // Orange
      "#ffff00", // Yellow
      "#00ff00", // Green
      "#0000ff", // Blue
      "#8B5CF6", // Purple
      "#D946EF", // Pink
      "#1EAEDB", // Cyan
      "#F97316"  // Bright Orange
    ];
    
    // Create a blinking interval
    const blinkInterval = window.setInterval(() => {
      const particles = document.getElementById(elementId);
      if (particles && window.pJSDom && window.pJSDom.length > 0) {
        // Get the particles instance
        const pJS = window.pJSDom.find(dom => dom.pJS.canvas.el.id === elementId)?.pJS;
        
        if (pJS) {
          // Change particles color
          const randomColor = neonColors[Math.floor(Math.random() * neonColors.length)];
          const randomColor2 = neonColors[Math.floor(Math.random() * neonColors.length)];
          
          // Update particle colors and line colors
          pJS.particles.color.value = randomColor;
          pJS.particles.line_linked.color = randomColor2;
          
          // Update existing particles
          for (let i = 0; i < pJS.particles.array.length; i++) {
            const particle = pJS.particles.array[i];
            particle.color.value = neonColors[Math.floor(Math.random() * neonColors.length)];
          }
          
          // Increase emissive intensity
          pJS.canvas.pxratio = 1 + Math.random() * 0.3; // Simulate glow by changing pixel ratio
        }
      }
    }, 1000 / (themeConfig.blinkSpeed || 1));
    
    // Store the interval ID
    window._particleBlinkInterval = blinkInterval;
  }
};

/**
 * Stops the blinking effect
 */
const stopBlinkingEffect = (elementId: string) => {
  if (typeof window !== "undefined" && window._particleBlinkInterval) {
    clearInterval(window._particleBlinkInterval);
    delete window._particleBlinkInterval;
  }
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
      shape: { 
        type: isEasterEggActive ? ["circle", "star", "triangle"] : "circle" 
      },
      opacity: { 
        value: 0.7,
        random: true, 
        anim: { 
          enable: true, 
          speed: isEasterEggActive ? 3 : 1, 
          opacity_min: 0.3,
          sync: false 
        } 
      },
      size: { 
        value: themeConfig.size,
        random: true, 
        anim: { 
          enable: true, 
          speed: isEasterEggActive ? 6 : 2, 
          size_min: 0.1, 
          sync: false 
        } 
      },
      line_linked: {
        enable: true,
        distance: isEasterEggActive ? 120 : 150,
        color: themeConfig.lineColor,
        opacity: isEasterEggActive ? 0.8 : 0.5,
        width: isEasterEggActive ? 2 : 1.2
      },
      move: {
        enable: true,
        speed: isEasterEggActive ? themeConfig.speed * 1.5 : themeConfig.speed,
        direction: "none",
        random: true,
        straight: false,
        out_mode: "out",
        bounce: isEasterEggActive,
        attract: { enable: true, rotateX: 600, rotateY: 1200 }
      }
    },
    interactivity: {
      detect_on: "window",
      events: {
        onhover: { 
          enable: true, 
          mode: isEasterEggActive ? "bubble" : "grab"
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
export const loadParticlesScript = (callback: () => void): (() => void) => {
  if (typeof window !== "undefined") {
    if (window.particlesJS) {
      // Execute callback immediately if particlesJS is already loaded
      callback();
      return () => {}; // Return empty cleanup function
    }
    
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/particles.js@2.0.0/particles.min.js';
    script.async = true;
    
    script.onload = () => {
      callback();
    };
    
    document.body.appendChild(script);
    
    // Return cleanup function
    return () => {
      if (window._particleBlinkInterval) {
        clearInterval(window._particleBlinkInterval);
        delete window._particleBlinkInterval;
      }
    };
  }
  
  return () => {}; // Return empty cleanup function for SSR
};

// Add type definition for the window object
declare global {
  interface Window {
    particlesJS: any;
    pJSDom?: any[];
    _particleBlinkInterval?: number;
  }
}
