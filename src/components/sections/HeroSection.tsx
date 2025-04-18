
import React, { Suspense } from 'react';
import { ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import DataViz3D from '@/components/DataViz3D';
import { useTranslation } from '@/context/TranslationContext';
import { useIsMobile } from '@/hooks/use-mobile';

interface HeroSectionProps {
  onScroll: (sectionId: string) => void;
  onScrollToContent: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onScroll, onScrollToContent }) => {
  const { t } = useTranslation();
  const isMobile = useIsMobile();
  
  return (
    <section className="relative min-h-screen pb-20 pt-28 md:pt-20 flex items-center justify-center overflow-hidden px-4">
      <div className="container mx-auto max-w-6xl flex flex-col md:flex-row items-center z-10">
        <div className="w-full md:w-1/2 mb-10 md:mb-0 relative z-10">
          <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-4">
            <span className="text-white mr-2">Hi, I'm</span>
            <span className="text-gradient text-glow text-white">
              {t('hero.name')}
            </span>
          </h1>
          <div className="h-1 w-24 bg-neon-blue mb-6"></div>
          <h2 className="text-xl md:text-2xl text-gray-300 mb-6">
            {t('hero.subtitle')}
          </h2>
          <p className="text-gray-400 max-w-lg mb-8">
            {t('hero.description')}
          </p>
          <p className="text-gray-300 mb-6">
            {t('hero.openTo')}
          </p>
          <div className="flex flex-wrap gap-4">
            <Button 
              className="bg-neon-blue hover:bg-neon-blue/80 text-white"
              onClick={() => onScroll('experience')}
            >
              {t('hero.exploreWork')}
            </Button>
            <Button 
              onClick={() => onScroll('contact')} 
              variant="outline" 
              className="border-white/20 hover:border-white/50 text-white"
            >
              {t('hero.getInTouch')}
            </Button>
          </div>
        </div>
        <div className="w-full md:w-1/2 h-[250px] md:h-[400px] lg:h-[500px] relative backdrop-blur-sm bg-black/30 rounded-xl border border-white/5 p-2">
          <Suspense fallback={<div className="w-full h-full flex items-center justify-center text-white">Loading...</div>}>
            <DataViz3D className="animate-float" />
          </Suspense>
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
