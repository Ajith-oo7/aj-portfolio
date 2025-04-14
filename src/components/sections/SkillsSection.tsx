
import React from 'react';
import SkillsSectionComponent from '@/components/SkillsSection';
import SectionContainer from '../layout/SectionContainer';
import { useTranslation } from '@/context/TranslationContext';

const SkillsSectionWrapper: React.FC = () => {
  const { t } = useTranslation();
  
  return (
    <SectionContainer 
      id="skills" 
      title={t('sections.skills.title')}
      description={t('sections.skills.description')}
    >
      <SkillsSectionComponent />
    </SectionContainer>
  );
};

export default SkillsSectionWrapper;
