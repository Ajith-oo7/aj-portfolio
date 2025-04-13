
import React, { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface ProjectCardProps {
  title: string;
  description: string;
  techStack: string[];
  image?: string;
  demoLink?: string;
  githubLink?: string;
  color?: 'blue' | 'purple' | 'pink';
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  techStack,
  image,
  demoLink,
  githubLink,
  color = 'blue'
}) => {
  const [isHovered, setIsHovered] = useState(false);
  
  const colorClasses = {
    border: {
      blue: 'border-neon-blue/30',
      purple: 'border-neon-purple/30',
      pink: 'border-neon-pink/30'
    },
    glow: {
      blue: 'neon-border',
      purple: 'neon-border-purple',
      pink: 'neon-border-pink'
    },
    textGlow: {
      blue: 'text-glow',
      purple: 'text-glow-purple',
      pink: 'text-glow-pink'
    },
    text: {
      blue: 'text-neon-blue',
      purple: 'text-neon-purple',
      pink: 'text-neon-pink'
    },
    bg: {
      blue: 'bg-neon-blue',
      purple: 'bg-neon-purple',
      pink: 'bg-neon-pink'
    }
  };
  
  return (
    <Card 
      className={`bg-black neo-blur border ${colorClasses.border[color]} rounded-lg overflow-hidden transition-all duration-300 transform hover:-translate-y-1 ${isHovered ? colorClasses.glow[color] : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {image && (
        <div className="relative w-full h-48 overflow-hidden">
          <div className={`absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent z-10`} />
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover object-center" 
          />
        </div>
      )}
      
      <CardContent className="p-6">
        <h3 className={`text-xl font-bold mb-2 ${colorClasses.text[color]} ${isHovered ? colorClasses.textGlow[color] : ''}`}>{title}</h3>
        <p className="text-gray-300 text-sm mb-4">{description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {techStack.map((tech, index) => (
            <span 
              key={index} 
              className={`text-xs px-2 py-1 rounded-full ${colorClasses.bg[color]}/10 text-white border border-${colorClasses.bg[color]}/30`}
            >
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex space-x-3 mt-4">
          {githubLink && (
            <Button 
              asChild
              size="sm" 
              variant="outline" 
              className="border-white/20 hover:bg-white/10"
            >
              <a href={githubLink} target="_blank" rel="noopener noreferrer">
                <Github size={16} className="mr-1" />
                Code
              </a>
            </Button>
          )}
          
          {demoLink && (
            <Button 
              asChild
              size="sm" 
              className={`${colorClasses.bg[color]} hover:${colorClasses.bg[color]}/90`}
            >
              <a href={demoLink} target="_blank" rel="noopener noreferrer">
                <ExternalLink size={16} className="mr-1" />
                Demo
              </a>
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
