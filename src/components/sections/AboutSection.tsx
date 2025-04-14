
import React from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';
import SectionContainer from '../layout/SectionContainer';
import { useTranslation } from '@/context/TranslationContext';

const AboutSection: React.FC = () => {
  const { t } = useTranslation();
  
  return (
    <SectionContainer 
      id="about" 
      title={t('about.title')}
      description={t('about.description')}
    >
      <div className="neo-blur border border-white/10 rounded-lg p-8">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="w-full md:w-1/3">
            <div className="aspect-square overflow-hidden rounded-lg border-2 border-neon-blue/30 neon-border">
              <img 
                src="/lovable-uploads/6f95a394-2f70-4adb-9882-a3a774b96785.png" 
                alt="Ajith Annavarapu" 
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="flex justify-center mt-6 space-x-4">
              <a 
                href="https://github.com/Ajith-oo7" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-white hover:text-neon-blue transition-colors"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://www.linkedin.com/in/aajith7/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-white hover:text-neon-blue transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="mailto:ajith.anna5599@gmail.com" 
                className="text-white hover:text-neon-blue transition-colors"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          <div className="w-full md:w-2/3">
            <h3 className="text-xl font-bold text-white mb-4">Ajith Annavarapu</h3>
            <p className="text-gray-300 mb-4">
              {t('about.paragraph1')}
            </p>
            <p className="text-gray-300 mb-4">
              {t('about.paragraph2')}
            </p>
            <p className="text-gray-300 mb-6">
              {t('about.paragraph3')}
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="w-24 text-sm text-gray-400">{t('about.location')}</div>
                <div className="text-white">Irving, TX</div>
              </div>
              <div className="flex items-center">
                <div className="w-24 text-sm text-gray-400">{t('about.education')}</div>
                <div className="text-white">M.S. in Data Science</div>
              </div>
              <div className="flex items-center">
                <div className="w-24 text-sm text-gray-400">{t('about.email')}</div>
                <a href="mailto:ajith.anna5599@gmail.com" className="text-neon-blue hover:underline">ajith.anna5599@gmail.com</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default AboutSection;
