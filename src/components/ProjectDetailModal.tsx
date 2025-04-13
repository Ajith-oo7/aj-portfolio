
import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github, ArrowRight, Image as ImageIcon, Code, BarChart } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export interface ProjectDetail {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  techStack: string[];
  challenges: string[];
  solutions: string[];
  outcomes: string[];
  demoLink: string;
  githubLink: string;
  imageSrc: string;
  color: 'blue' | 'purple' | 'pink';
}

interface ProjectDetailModalProps {
  project: ProjectDetail;
  trigger: React.ReactNode;
}

const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({ project, trigger }) => {
  const getColorClass = (color: string) => {
    switch (color) {
      case 'blue':
        return 'neon-blue';
      case 'purple':
        return 'neon-purple';
      case 'pink':
        return 'neon-pink';
      default:
        return 'neon-blue';
    }
  };

  const colorClass = getColorClass(project.color);

  return (
    <Dialog>
      <DialogTrigger asChild>
        {trigger}
      </DialogTrigger>
      <DialogContent className="sm:max-w-3xl max-h-[90vh] overflow-y-auto neo-blur border border-white/20 text-white p-0">
        <div className={`h-2 w-full bg-${colorClass}`} />
        <div className="p-6">
          <DialogHeader>
            <div className="flex justify-between items-start">
              <div>
                <DialogTitle className="text-2xl font-bold mb-2">{project.title}</DialogTitle>
                <DialogDescription className="text-gray-300 text-base">
                  {project.description}
                </DialogDescription>
              </div>
              <div className="flex gap-2">
                {project.githubLink && (
                  <Button 
                    variant="outline" 
                    size="icon"
                    className="border-white/10 hover:bg-white/10 bg-transparent"
                    asChild
                  >
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4" />
                    </a>
                  </Button>
                )}
                
                {project.demoLink && (
                  <Button 
                    variant="outline" 
                    size="icon"
                    className="border-white/10 hover:bg-white/10 bg-transparent"
                    asChild
                  >
                    <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </Button>
                )}
              </div>
            </div>
          </DialogHeader>
          
          <div className="mt-6">
            <Tabs defaultValue="overview">
              <TabsList className="grid grid-cols-3 bg-black/30">
                <TabsTrigger value="overview" className="data-[state=active]:bg-white/10">
                  <ImageIcon className="h-4 w-4 mr-2" />
                  Overview
                </TabsTrigger>
                <TabsTrigger value="technical" className="data-[state=active]:bg-white/10">
                  <Code className="h-4 w-4 mr-2" />
                  Technical
                </TabsTrigger>
                <TabsTrigger value="results" className="data-[state=active]:bg-white/10">
                  <BarChart className="h-4 w-4 mr-2" />
                  Results
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="overview" className="mt-4">
                <div className="aspect-video mb-4 rounded-lg overflow-hidden bg-gray-800 flex items-center justify-center border border-white/10">
                  {project.imageSrc ? (
                    <img 
                      src={project.imageSrc} 
                      alt={project.title} 
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="text-gray-500 flex flex-col items-center">
                      <ImageIcon size={48} className="opacity-40" />
                      <span className="mt-2 text-sm">Project image placeholder</span>
                    </div>
                  )}
                </div>
                
                <h3 className="text-lg font-semibold mb-2">About this project</h3>
                <p className="text-gray-300 mb-4">{project.longDescription}</p>
                
                <div className="mt-6">
                  <h3 className="text-lg font-semibold mb-3">Tech Stack</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, index) => (
                      <Badge 
                        key={index} 
                        variant="outline" 
                        className={`bg-${colorClass}/10 text-${colorClass} border-${colorClass}/20`}
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="technical" className="mt-4">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-3">Challenges</h3>
                    <ul className="space-y-2">
                      {project.challenges.map((challenge, index) => (
                        <li key={index} className="flex items-start">
                          <ArrowRight className={`h-5 w-5 text-${colorClass} mr-2 mt-0.5 flex-shrink-0`} />
                          <span className="text-gray-300">{challenge}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold mb-3">Solutions</h3>
                    <ul className="space-y-2">
                      {project.solutions.map((solution, index) => (
                        <li key={index} className="flex items-start">
                          <ArrowRight className={`h-5 w-5 text-${colorClass} mr-2 mt-0.5 flex-shrink-0`} />
                          <span className="text-gray-300">{solution}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="results" className="mt-4">
                <div>
                  <h3 className="text-lg font-semibold mb-3">Outcomes & Impact</h3>
                  <ul className="space-y-2">
                    {project.outcomes.map((outcome, index) => (
                      <li key={index} className="flex items-start">
                        <ArrowRight className={`h-5 w-5 text-${colorClass} mr-2 mt-0.5 flex-shrink-0`} />
                        <span className="text-gray-300">{outcome}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mt-6 flex gap-4">
                  {project.demoLink && (
                    <Button 
                      className={`bg-${colorClass} hover:bg-${colorClass}/80`}
                      asChild
                    >
                      <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        View Demo
                      </a>
                    </Button>
                  )}
                  
                  {project.githubLink && (
                    <Button 
                      variant="outline" 
                      className="border-white/10 hover:bg-white/10"
                      asChild
                    >
                      <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-2" />
                        View Code
                      </a>
                    </Button>
                  )}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectDetailModal;
