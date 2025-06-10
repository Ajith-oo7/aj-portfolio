
import React, { Suspense } from 'react';
import { ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import DataViz3D from '@/components/DataViz3D';
import { useTranslation } from '@/context/TranslationContext';
import { usePortfolio } from '@/context/PortfolioContext';
import { useIsMobile } from '@/hooks/use-mobile';
import { motion } from 'framer-motion';

interface HeroSectionProps {
  onScroll: (sectionId: string) => void;
  onScrollToContent: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onScroll, onScrollToContent }) => {
  const { t } = useTranslation();
  const { data } = usePortfolio();
  const isMobile = useIsMobile();
  
  return (
    <section className="relative min-h-screen pb-20 pt-28 md:pt-20 flex items-center justify-center overflow-hidden px-4 sm:px-6">
      <div className="container mx-auto max-w-6xl flex flex-col md:flex-row items-center z-10">
        <motion.div 
          className="w-full md:w-1/2 mb-10 md:mb-0 relative z-10"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h1 
            className="text-3xl md:text-4xl lg:text-6xl font-bold mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <span className="text-white mr-2">Hi, I'm</span>
            <span className="text-gradient text-glow text-white">
              {data.hero.name}
            </span>
          </motion.h1>
          
          <motion.div 
            className="h-1 w-24 bg-neon-blue mb-6"
            initial={{ width: 0 }}
            animate={{ width: 96 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          ></motion.div>
          
          <motion.h2 
            className="text-xl md:text-2xl text-gray-300 mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            {data.hero.title}
          </motion.h2>
          
          <motion.p 
            className="text-xl md:text-2xl text-neon-blue mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            {data.hero.subtitle}
          </motion.p>
          
          <motion.p 
            className="text-gray-400 max-w-lg mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            {data.hero.description}
          </motion.p>
          
          <motion.p 
            className="text-gray-300 mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.8 }}
          >
            {data.hero.openTo}
          </motion.p>
          
          <motion.div 
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.8 }}
          >
            <Button 
              className="bg-neon-blue hover:bg-neon-blue/80 text-white"
              onClick={() => onScroll('experience')}
              aria-label="Explore my work"
            >
              {t('hero.exploreWork')}
            </Button>
            <Button 
              onClick={() => onScroll('contact')} 
              variant="outline" 
              className="border-white/20 hover:border-white/50 text-white"
              aria-label="Get in touch with me"
            >
              {t('hero.getInTouch')}
            </Button>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="w-full md:w-1/2 h-[250px] md:h-[400px] lg:h-[500px] relative backdrop-blur-sm bg-black/30 rounded-xl border border-white/5 p-2"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <Suspense fallback={
            <div className="w-full h-full flex items-center justify-center text-white">
              <div className="animate-spin h-8 w-8 border-4 border-neon-blue border-t-transparent rounded-full" role="status">
                <span className="sr-only">Loading...</span>
              </div>
            </div>
          }>
            <DataViz3D className="animate-float" />
          </Suspense>
        </motion.div>
      </div>
      
      <motion.button 
        onClick={onScrollToContent}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white opacity-60 hover:opacity-100 transition-all duration-300"
        aria-label="Scroll down"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          delay: 1.2, 
          duration: 0.5,
          repeat: Infinity,
          repeatType: "reverse",
          repeatDelay: 0.5
        }}
      >
        <ArrowDown size={24} />
      </motion.button>
    </section>
  );
};

export default HeroSection;
