
import React from 'react';
import SkillsSectionComponent from '@/components/SkillsSection';
import SectionContainer from '../layout/SectionContainer';

const SkillsSectionWrapper: React.FC = () => {
  return (
    <SectionContainer 
      id="skills" 
      title="Skills & Expertise"
      description="A comprehensive toolkit built through years of experience and continuous learning."
    >
      <SkillsSectionComponent />
    </SectionContainer>
  );
};

export default SkillsSectionWrapper;
