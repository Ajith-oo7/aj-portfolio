
import React from 'react';
import { ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import DataViz3D from '@/components/DataViz3D';

interface HeroSectionProps {
  onScroll: (sectionId: string) => void;
  onScrollToContent: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onScroll, onScrollToContent }) => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden px-4">
      <div className="container mx-auto max-w-6xl flex flex-col md:flex-row items-center z-10">
        <div className="w-full md:w-1/2 mb-10 md:mb-0 relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            <span className="text-white">Hi, I'm </span>
            <span className="text-gradient text-glow">Ajith Annavarapu</span>
          </h1>
          <div className="h-1 w-24 bg-neon-blue mb-6"></div>
          <h2 className="text-xl md:text-2xl text-gray-300 mb-6">
            Data Engineer & Data Scientist
          </h2>
          <p className="text-gray-400 max-w-lg mb-8">
            I transform raw data into meaningful insights that drive business decisions. 
            With expertise in building robust data pipelines and scalable data systems, 
            I help organizations harness the full potential of their data.
          </p>
          <p className="text-gray-300 mb-6">
            I'm always open to new challenges and collaborations. If you're working on an interesting project that requires data expertise, A.I or even Vibe Coding. I'd love to hear about it!
          </p>
          <div className="flex flex-wrap gap-4">
            <Button 
              className="bg-neon-blue hover:bg-neon-blue/80 text-white"
              onClick={() => onScroll('experience')}
            >
              Explore My Work
            </Button>
            <Button 
              onClick={() => onScroll('contact')} 
              variant="outline" 
              className="border-white/20 hover:border-white/50 text-white"
            >
              Get in Touch
            </Button>
          </div>
        </div>
        <div className="w-full md:w-1/2 h-[300px] md:h-[400px] lg:h-[500px] relative backdrop-blur-sm bg-black/30 rounded-xl border border-white/5 p-2">
          <DataViz3D className="animate-float" />
        </div>
      </div>
      
      <button 
        onClick={onScrollToContent}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white opacity-60 hover:opacity-100 transition-all duration-300 animate-bounce"
        aria-label="Scroll down"
      >
        <ArrowDown size={24} />
      </button>
    </section>
  );
};

export default HeroSection;
