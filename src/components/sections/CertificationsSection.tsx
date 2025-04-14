
import React from 'react';
import CertificationsSectionComponent from '@/components/CertificationsSection';
import SectionContainer from '../layout/SectionContainer';
import { useTranslation } from '@/context/TranslationContext';

const CertificationsSectionWrapper: React.FC = () => {
  const { t } = useTranslation();
  
  return (
    <SectionContainer 
      id="certifications" 
      title={t('certifications.title')}
      description={t('certifications.description')}
    >
      <CertificationsSectionComponent />
    </SectionContainer>
  );
};

export default CertificationsSectionWrapper;
