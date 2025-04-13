
import React, { useRef, useEffect } from 'react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

interface Skill {
  name: string;
  value: number;
  category: string;
  color: string;
}

interface SkillNode {
  id: string;
  radius: number;
  x: number;
  y: number;
  color: string;
  skill: Skill;
  vx: number;
  vy: number;
}

const InteractiveSkillsVisualization: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const animationRef = useRef<number | null>(null);
  const nodesRef = useRef<SkillNode[]>([]);
  const tooltipPositionRef = useRef<{ x: number, y: number } | null>(null);
  const [hoveredSkill, setHoveredSkill] = React.useState<Skill | null>(null);
  const [dimensions, setDimensions] = React.useState({ width: 800, height: 400 });

  const skills: Skill[] = [
    { name: 'Python', value: 90, category: 'Languages', color: '#1EAEDB' },
    { name: 'SQL', value: 85, category: 'Languages', color: '#1EAEDB' },
    { name: 'Java', value: 88, category: 'Languages', color: '#1EAEDB' },
    { name: 'React', value: 87, category: 'Languages', color: '#1EAEDB' },
    { name: 'AWS', value: 88, category: 'Cloud', color: '#8B5CF6' },
    { name: 'Snowflake', value: 92, category: 'Big Data', color: '#D946EF' },
    { name: 'Databricks', value: 89, category: 'Big Data', color: '#D946EF' },
    { name: 'LLMs', value: 88, category: 'AI', color: '#F97316' },
    { name: 'Machine Learning', value: 90, category: 'AI', color: '#F97316' },
    { name: 'Tableau', value: 91, category: 'Visualization', color: '#1EAEDB' },
    { name: 'Scikit-learn', value: 90, category: 'Libraries', color: '#8B5CF6' },
    { name: 'Docker', value: 88, category: 'DevOps', color: '#D946EF' }
  ];

  // Initialize nodes
  useEffect(() => {
    if (!containerRef.current) return;
    
    const updateDimensions = () => {
      if (containerRef.current) {
        const { width, height } = containerRef.current.getBoundingClientRect();
        setDimensions({ width, height });
      }
    };

    updateDimensions();
    
    // Initialize nodes
    nodesRef.current = skills.map((skill) => {
      return {
        id: skill.name,
        radius: skill.value / 4 + 10, // Scale radius based on skill level
        x: Math.random() * dimensions.width,
        y: Math.random() * dimensions.height,
        color: skill.color,
        skill: skill,
        vx: (Math.random() - 0.5) * 2,
        vy: (Math.random() - 0.5) * 2
      };
    });

    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  // Draw and animate
  useEffect(() => {
    if (!canvasRef.current || !containerRef.current) return;
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = dimensions.width;
    canvas.height = dimensions.height;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update positions
      nodesRef.current.forEach(node => {
        // Boundary check
        if (node.x <= node.radius || node.x >= canvas.width - node.radius) {
          node.vx *= -1;
        }
        if (node.y <= node.radius || node.y >= canvas.height - node.radius) {
          node.vy *= -1;
        }
        
        // Move at reduced speed for smoother animation
        node.x += node.vx * 0.5;
        node.y += node.vy * 0.5;
        
        // Draw node
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = `${node.color}30`; // 30% opacity
        ctx.fill();
        ctx.strokeStyle = node.color;
        ctx.lineWidth = 2;
        ctx.stroke();
        
        // Draw text
        ctx.fillStyle = '#ffffff';
        ctx.font = '12px Inter';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(node.skill.name, node.x, node.y);
      });
      
      animationRef.current = requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [dimensions]);

  // Handle mouse interactions
  useEffect(() => {
    if (!canvasRef.current) return;
    
    const canvas = canvasRef.current;
    
    const handleMouseMove = (event: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      
      // Find node under mouse
      const hoveredNode = nodesRef.current.find(node => {
        const dx = node.x - x;
        const dy = node.y - y;
        return Math.sqrt(dx * dx + dy * dy) <= node.radius;
      });
      
      if (hoveredNode) {
        setHoveredSkill(hoveredNode.skill);
        tooltipPositionRef.current = { x: event.clientX, y: event.clientY };
        document.body.style.cursor = 'pointer';
      } else {
        setHoveredSkill(null);
        document.body.style.cursor = 'default';
      }
    };
    
    canvas.addEventListener('mousemove', handleMouseMove);
    return () => canvas.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div ref={containerRef} className="w-full h-[500px] neo-blur border border-white/10 rounded-lg overflow-hidden">
      <canvas ref={canvasRef} className="w-full h-full" />
      <TooltipProvider>
        {hoveredSkill && (
          <Tooltip open>
            <TooltipTrigger asChild>
              <div 
                style={{ 
                  position: 'fixed', 
                  left: tooltipPositionRef.current?.x, 
                  top: tooltipPositionRef.current?.y,
                  pointerEvents: 'none',
                  width: 1,
                  height: 1
                }}
              />
            </TooltipTrigger>
            <TooltipContent side="right" className="bg-black/90 border-neon-purple/50">
              <div className="text-sm">
                <div className="font-bold">{hoveredSkill.name}</div>
                <div className="text-xs mt-1 text-gray-400">{hoveredSkill.category}</div>
                <div className="mt-1 flex items-center gap-2">
                  <div className="h-1.5 w-20 bg-gray-800 rounded-full">
                    <div 
                      className="h-full bg-gradient-to-r from-neon-blue to-neon-purple rounded-full" 
                      style={{ width: `${hoveredSkill.value}%` }}
                    />
                  </div>
                  <span className="text-xs text-gray-400">{hoveredSkill.value}%</span>
                </div>
              </div>
            </TooltipContent>
          </Tooltip>
        )}
      </TooltipProvider>
    </div>
  );
};

export default InteractiveSkillsVisualization;
