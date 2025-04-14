
import React from 'react';
import { useTranslation } from '@/context/TranslationContext';
import InteractiveSkillsVisualization from './InteractiveSkillsVisualization';

const SkillsSection: React.FC = () => {
  const { t } = useTranslation();
  
  return (
    <div className="space-y-10">
      <InteractiveSkillsVisualization />
    </div>
  );
};

export default SkillsSection;
