
import React from 'react';
import CertificationsSectionComponent from '@/components/CertificationsSection';
import SectionContainer from '../layout/SectionContainer';

const CertificationsSectionWrapper: React.FC = () => {
  return (
    <SectionContainer 
      id="certifications" 
      title="Certifications"
      description="Professional certifications and achievements."
    >
      <CertificationsSectionComponent />
    </SectionContainer>
  );
};

export default CertificationsSectionWrapper;
