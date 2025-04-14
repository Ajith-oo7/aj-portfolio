
import React, { useState } from 'react';
import ProjectCard from '@/components/ProjectCard';
import ProjectDetailModal from '@/components/ProjectDetailModal';
import SectionContainer from '../layout/SectionContainer';
import { projectsData } from '@/data/projectsData';
import { useTranslation } from '@/context/TranslationContext';

const ProjectsSection: React.FC = () => {
  const { t } = useTranslation();
  const [projects] = useState(projectsData);
  
  return (
    <SectionContainer 
      id="projects" 
      title={t('projects.title')}
      description={t('projects.description')}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <ProjectDetailModal
            key={project.id}
            project={project}
            trigger={
              <div className="cursor-pointer">
                <ProjectCard 
                  title={project.title}
                  description={project.description}
                  techStack={project.techStack}
                  demoLink={project.demoLink}
                  githubLink={project.githubLink}
                  color={project.color}
                />
              </div>
            }
          />
        ))}
      </div>
    </SectionContainer>
  );
};

export default ProjectsSection;
