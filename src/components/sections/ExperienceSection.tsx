
import React from 'react';
import ExperienceSectionComponent from '@/components/ExperienceSection';
import SectionContainer from '../layout/SectionContainer';

const ExperienceSectionWrapper: React.FC = () => {
  return (
    <SectionContainer 
      id="experience" 
      title="Work Experience"
      description="My professional journey and the impact I've made."
    >
      <ExperienceSectionComponent />
    </SectionContainer>
  );
};

export default ExperienceSectionWrapper;
