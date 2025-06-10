
import React from 'react';
import ProjectCard from '@/components/ProjectCard';
import ProjectDetailModal from '@/components/ProjectDetailModal';
import SectionContainer from '../layout/SectionContainer';
import { useTranslation } from '@/context/TranslationContext';
import { usePortfolio } from '@/context/PortfolioContext';

const ProjectsSection: React.FC = () => {
  const { t } = useTranslation();
  const { data } = usePortfolio();
  
  return (
    <SectionContainer 
      id="projects" 
      title={t('projects.title')}
      description={t('projects.description')}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.projects.map((project) => (
          <ProjectDetailModal
            key={project.id}
            project={{
              id: project.id,
              title: project.title,
              description: project.description,
              longDescription: project.longDescription,
              techStack: project.techStack,
              challenges: project.challenges,
              solutions: project.solutions,
              outcomes: project.outcomes,
              demoLink: project.demoLink || '',
              githubLink: project.githubLink || '',
              imageSrc: '',
              color: project.color as 'blue' | 'purple' | 'pink'
            }}
            trigger={
              <div className="cursor-pointer">
                <ProjectCard 
                  title={project.title}
                  description={project.description}
                  techStack={project.techStack}
                  demoLink={project.demoLink}
                  githubLink={project.githubLink}
                  color={project.color as 'blue' | 'purple' | 'pink'}
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
