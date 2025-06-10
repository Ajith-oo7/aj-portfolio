
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from '@/components/ui/progress';
import { usePortfolio } from '@/context/PortfolioContext';

const SkillsSection: React.FC = () => {
  const { data } = usePortfolio();
  
  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.skills.map((category) => (
          <Card 
            key={category.id} 
            className="neo-blur border border-white/10 hover:border-neon-purple/30 hover:neon-border-purple transition-all duration-300"
          >
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center text-lg">
                <span className="ml-2">{category.name}</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Separator className="mb-4 bg-white/10" />
              <div className="space-y-3">
                {category.skills.map((skill, skillIdx) => (
                  <div key={skillIdx} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300 text-sm">{skill.name}</span>
                      <span className="text-neon-blue text-xs">{skill.level}%</span>
                    </div>
                    <Progress 
                      value={skill.level} 
                      className="h-2 bg-gray-800"
                    />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default SkillsSection;
