
import React, { useEffect, useRef, useState } from 'react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

// Add type definition for particlesJS
declare global {
  interface Window {
    particlesJS: any;
    pJSDom: Array<{
      pJS: {
        particles: {
          array: Array<any>;
        };
        canvas: {
          w: number;
          h: number;
        };
      };
    }>;
  }
}

interface EnhancedParticleNetworkProps {
  className?: string;
  id?: string;
  skills?: Array<{
    name: string;
    category: string;
    proficiency: number;
    color?: string;
  }>;
  showTooltips?: boolean;
}

const EnhancedParticleNetwork: React.FC<EnhancedParticleNetworkProps> = ({ 
  className, 
  id = 'enhanced-particles',
  skills,
  showTooltips = true
}) => {
  const particlesRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const [tooltipPosition, setTooltipPosition] = useState<{ x: number, y: number } | null>(null);
  
  // Default skills if none provided
  const defaultSkills = [
    { name: 'Python', category: 'Languages', proficiency: 90, color: '#1EAEDB' },
    { name: 'SQL', category: 'Languages', proficiency: 85, color: '#8B5CF6' },
    { name: 'AWS', category: 'Cloud', proficiency: 88, color: '#D946EF' },
    { name: 'Snowflake', category: 'Big Data', proficiency: 92, color: '#F97316' },
    { name: 'LLMs', category: 'AI', proficiency: 88, color: '#10B981' },
    { name: 'Machine Learning', category: 'AI', proficiency: 90, color: '#EC4899' },
    { name: 'Tableau', category: 'Visualization', proficiency: 91, color: '#0EA5E9' },
    { name: 'Scikit-learn', category: 'Libraries', proficiency: 90, color: '#F59E0B' }
  ];
  
  const skillsToUse = skills || defaultSkills;
  
  // Generate skill-based particle colors
  const getParticleColors = () => {
    return skillsToUse.map(skill => skill.color || '#D946EF');
  };
  
  // Calculate node sizes based on proficiency scores
  const getNodeSizes = () => {
    return skillsToUse.map(skill => Math.max(4, skill.proficiency / 10));
  };
  
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
      const colors = getParticleColors();
      const sizes = getNodeSizes();
      
      window.particlesJS(particlesRef.current.id, {
        particles: {
          number: { 
            value: skillsToUse.length || 40,
            density: { enable: true, value_area: 800 } 
          },
          color: { 
            value: colors
          },
          shape: { 
            type: "circle",
            stroke: { width: 1, color: "#ffffff30" },
          },
          opacity: { 
            value: 0.8, 
            random: false, 
            anim: { 
              enable: true, 
              speed: 0.8, 
              opacity_min: 0.4, 
              sync: false 
            } 
          },
          size: { 
            value: 6, 
            random: true, 
            anim: { 
              enable: true, 
              speed: 2, 
              size_min: 3, 
              sync: false 
            } 
          },
          line_linked: {
            enable: true,
            distance: 150,
            color: "#D946EF",
            opacity: 0.5,
            width: 1.5
          },
          move: {
            enable: true,
            speed: 2.5,
            direction: "none",
            random: true,
            straight: false,
            out_mode: "bounce",
            bounce: true,
            attract: { enable: true, rotateX: 600, rotateY: 1200 }
          }
        },
        interactivity: {
          detect_on: "window",
          events: {
            onhover: { 
              enable: true, 
              mode: "bubble" 
            },
            onclick: { 
              enable: true, 
              mode: "repulse" 
            },
            resize: true
          },
          modes: {
            grab: {
              distance: 180,
              line_linked: {
                opacity: 1
              }
            },
            bubble: {
              distance: 200,
              size: 12,
              duration: 1.5,
              opacity: 0.8,
              speed: 3
            },
            repulse: {
              distance: 200,
              duration: 1.5
            },
            push: {
              particles_nb: 4
            },
            remove: {
              particles_nb: 2
            }
          }
        },
        retina_detect: true,
        fps_limit: 60,
        particles_nbr: skillsToUse.length
      });
      
      // Add skill labels to particles
      setTimeout(() => {
        addSkillLabels();
      }, 1000);
    }
  };
  
  // Add skill labels to particles
  const addSkillLabels = () => {
    const canvas = particlesRef.current?.querySelector('canvas');
    if (!canvas || !showTooltips) return;
    
    canvas.addEventListener('mousemove', (e) => {
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      // Get particles from particlesJS
      if (window.pJSDom && window.pJSDom[0]?.pJS?.particles?.array) {
        const particles = window.pJSDom[0].pJS.particles.array;
        const canvasWidth = window.pJSDom[0].pJS.canvas.w;
        const canvasHeight = window.pJSDom[0].pJS.canvas.h;
        
        // Find the closest particle
        let closestDist = Infinity;
        let closestParticle = null;
        let closestIndex = -1;
        
        for (let i = 0; i < particles.length; i++) {
          const p = particles[i];
          const dx = p.x - (x / rect.width * canvasWidth);
          const dy = p.y - (y / rect.height * canvasHeight);
          const dist = Math.sqrt(dx * dx + dy * dy);
          
          if (dist < closestDist && dist < p.radius * 2) {
            closestDist = dist;
            closestParticle = p;
            closestIndex = i;
          }
        }
        
        if (closestParticle && closestIndex >= 0 && closestIndex < skillsToUse.length) {
          setHoveredSkill(skillsToUse[closestIndex % skillsToUse.length].name);
          setTooltipPosition({ x: e.clientX, y: e.clientY });
        } else {
          setHoveredSkill(null);
          setTooltipPosition(null);
        }
      }
    });
    
    canvas.addEventListener('mouseleave', () => {
      setHoveredSkill(null);
      setTooltipPosition(null);
    });
  };
  
  // Find the hovered skill details
  const getHoveredSkillDetails = () => {
    if (!hoveredSkill) return null;
    return skillsToUse.find(skill => skill.name === hoveredSkill);
  };
  
  const hoveredSkillDetails = getHoveredSkillDetails();
  
  return (
    <div className="relative">
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
      ></div>
      
      {showTooltips && hoveredSkill && tooltipPosition && (
        <TooltipProvider>
          <Tooltip open>
            <TooltipTrigger asChild>
              <div 
                style={{ 
                  position: 'fixed', 
                  left: tooltipPosition.x, 
                  top: tooltipPosition.y,
                  pointerEvents: 'none',
                  width: 1,
                  height: 1
                }}
              />
            </TooltipTrigger>
            <TooltipContent side="right" className="bg-black/90 border-neon-purple/50">
              <div className="text-sm">
                <div className="font-bold">{hoveredSkillDetails?.name}</div>
                <div className="text-xs mt-1 text-gray-400">{hoveredSkillDetails?.category}</div>
                <div className="mt-1 flex items-center gap-2">
                  <div className="h-1.5 w-20 bg-gray-800 rounded-full">
                    <div 
                      className="h-full bg-gradient-to-r from-neon-blue to-neon-purple rounded-full" 
                      style={{ width: `${hoveredSkillDetails?.proficiency || 0}%` }}
                    />
                  </div>
                  <span className="text-xs text-gray-400">{hoveredSkillDetails?.proficiency}%</span>
                </div>
              </div>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      )}
    </div>
  );
};

export default EnhancedParticleNetwork;
