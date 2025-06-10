
import React from 'react';
import SectionContainer from '../layout/SectionContainer';
import { useTranslation } from '@/context/TranslationContext';
import { usePortfolio } from '@/context/PortfolioContext';

const JourneySection: React.FC = () => {
  const { t } = useTranslation();
  const { data } = usePortfolio();
  
  return (
    <SectionContainer 
      id="story" 
      title={data.journey.title}
      description={data.journey.description}
    >
      <div className="neo-blur border border-white/10 rounded-lg p-8">
        <p className="text-gray-300 mb-6">
          {data.journey.paragraph1}
        </p>
        <p className="text-gray-300">
          {data.journey.paragraph2}
        </p>
      </div>
    </SectionContainer>
  );
};

export default JourneySection;
