
import React from 'react';
import SectionContainer from '../layout/SectionContainer';
import { useTranslation } from '@/context/TranslationContext';

const JourneySection: React.FC = () => {
  const { t } = useTranslation();
  
  return (
    <SectionContainer 
      id="story" 
      title={t('journey.title')}
      description={t('journey.description')}
    >
      <div className="neo-blur border border-white/10 rounded-lg p-8">
        <p className="text-gray-300 mb-6">
          {t('journey.paragraph1')}
        </p>
        <p className="text-gray-300">
          {t('journey.paragraph2')}
        </p>
      </div>
    </SectionContainer>
  );
};

export default JourneySection;
