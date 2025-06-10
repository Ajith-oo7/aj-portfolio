
import React from 'react';
import { BriefcaseIcon, CalendarIcon, MapPinIcon } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from '@/components/ui/badge';
import { usePortfolio } from '@/context/PortfolioContext';

const ExperienceSection: React.FC = () => {
  const { data } = usePortfolio();
  
  return (
    <div className="space-y-6">
      {data.experience.map((exp) => (
        <Card 
          key={exp.id} 
          className="neo-blur border border-white/10 hover:border-neon-blue/30 hover:neon-border transition-all duration-300"
        >
          <CardHeader>
            <div className="flex items-start justify-between">
              <div className="flex items-center space-x-3">
                <div className="bg-neon-blue/20 p-2 rounded-full">
                  <BriefcaseIcon className="w-5 h-5 text-neon-blue" />
                </div>
                <div>
                  <CardTitle className="text-xl text-white">{exp.role}</CardTitle>
                  <p className="text-neon-blue font-medium">{exp.company}</p>
                </div>
              </div>
              <div className="flex items-center text-gray-400 text-sm">
                <CalendarIcon className="w-4 h-4 mr-1" />
                {exp.period}
              </div>
            </div>
          </CardHeader>
          
          <CardContent className="space-y-4">
            <p className="text-gray-300">{exp.description}</p>
            
            {exp.responsibilities && exp.responsibilities.length > 0 && (
              <div>
                <h4 className="text-white font-semibold mb-2">Key Responsibilities:</h4>
                <ul className="space-y-1">
                  {exp.responsibilities.map((responsibility, idx) => (
                    <li key={idx} className="text-gray-300 text-sm flex items-start">
                      <span className="text-neon-blue mr-2">•</span>
                      {responsibility}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            
            {exp.technologies && exp.technologies.length > 0 && (
              <div>
                <h4 className="text-white font-semibold mb-2">Technologies:</h4>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, idx) => (
                    <Badge 
                      key={idx} 
                      variant="outline" 
                      className="bg-neon-blue/10 text-neon-blue border-neon-blue/20"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default ExperienceSection;
