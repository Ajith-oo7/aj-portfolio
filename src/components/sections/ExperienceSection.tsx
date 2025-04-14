
import React from 'react';
import ExperienceSectionComponent from '@/components/ExperienceSection';
import SectionContainer from '../layout/SectionContainer';
import { useTranslation } from '@/context/TranslationContext';

const ExperienceSectionWrapper: React.FC = () => {
  const { t } = useTranslation();
  
  return (
    <SectionContainer 
      id="experience" 
      title={t('sections.experience.title')}
      description={t('sections.experience.description')}
    >
      <ExperienceSectionComponent />
    </SectionContainer>
  );
};

export default ExperienceSectionWrapper;
