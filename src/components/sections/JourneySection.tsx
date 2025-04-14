
import React from 'react';
import SectionContainer from '../layout/SectionContainer';

const JourneySection: React.FC = () => {
  return (
    <SectionContainer 
      id="story" 
      title="My Journey"
      description="From curious data enthusiast to professional data engineer."
    >
      <div className="neo-blur border border-white/10 rounded-lg p-8">
        <p className="text-gray-300 mb-6">
          My journey in the data field began with a fascination for extracting insights from raw information. Starting with a solid foundation in computer science, I quickly developed expertise in data engineering and analytics, working across various domains and technologies.
        </p>
        <p className="text-gray-300">
          Along this path, I've continually expanded my skills, adapting to emerging technologies and methodologies, and building a comprehensive toolkit that allows me to tackle complex data challenges with confidence and creativity.
        </p>
      </div>
    </SectionContainer>
  );
};

export default JourneySection;
