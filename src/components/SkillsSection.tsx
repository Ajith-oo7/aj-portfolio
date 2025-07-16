
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIdx) => (
                  <Badge
                    key={skillIdx}
                    variant="outline"
                    className="bg-neon-blue/10 text-neon-blue border-neon-blue/20 hover:bg-neon-blue/20 transition-colors"
                  >
                    {skill.name}
                  </Badge>
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
