
import React, { useState, useEffect } from 'react';
import ProjectCard from '@/components/ProjectCard';
import ProjectDetailModal from '@/components/ProjectDetailModal';
import SectionContainer from '../layout/SectionContainer';
import { projectsData } from '@/data/projectsData';
import { useTranslation } from '@/context/TranslationContext';
import { supabase } from '@/integrations/supabase/client';
import { ProjectDetail } from '@/components/ProjectDetailModal';

const ProjectsSection: React.FC = () => {
  const { t } = useTranslation();
  const [projects, setProjects] = useState<ProjectDetail[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const { data, error } = await supabase
          .from('projects')
          .select('*');
        
        if (error) {
          throw new Error(error.message);
        }
        
        // If we got data from Supabase, use it. Otherwise, fall back to the hardcoded data
        if (data && data.length > 0) {
          setProjects(data as ProjectDetail[]);
        } else {
          setProjects(projectsData);
        }
      } catch (err) {
        console.error('Error fetching projects:', err);
        setError('Failed to load projects');
        setProjects(projectsData); // Fallback to hardcoded data
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  if (loading) {
    return (
      <SectionContainer 
        id="projects" 
        title={t('projects.title')}
        description={t('projects.description')}
      >
        <div className="flex justify-center items-center h-40">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-neon-blue"></div>
        </div>
      </SectionContainer>
    );
  }
  
  return (
    <SectionContainer 
      id="projects" 
      title={t('projects.title')}
      description={t('projects.description')}
    >
      {error && (
        <div className="mb-6 text-red-500 bg-red-100/10 p-4 rounded-lg">
          {error}
        </div>
      )}
      
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
