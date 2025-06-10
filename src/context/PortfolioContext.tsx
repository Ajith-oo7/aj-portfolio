
import React, { createContext, useContext, useState, useEffect } from 'react';

export interface HeroData {
  name: string;
  title: string;
  subtitle: string;
  description: string;
  openTo: string;
}

export interface AboutData {
  name: string;
  bio: string;
  location: string;
  education: string;
  email: string;
  paragraph1: string;
  paragraph2: string;
  paragraph3: string;
}

export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  period: string;
  description: string;
  responsibilities: string[];
  technologies: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  techStack: string[];
  demoLink?: string;
  githubLink?: string;
  color: string;
  challenges: string[];
  solutions: string[];
  outcomes: string[];
}

export interface SkillCategory {
  id: string;
  name: string;
  skills: Array<{
    name: string;
    level: number;
    icon?: string;
  }>;
}

export interface CertificationItem {
  id: string;
  title: string;
  provider: string;
  date: string;
}

export interface ContactData {
  email: string;
  linkedin: string;
  github: string;
  paragraph: string;
}

export interface JourneyData {
  title: string;
  description: string;
  paragraph1: string;
  paragraph2: string;
}

export interface PortfolioData {
  hero: HeroData;
  about: AboutData;
  experience: ExperienceItem[];
  projects: ProjectItem[];
  skills: SkillCategory[];
  certifications: CertificationItem[];
  contact: ContactData;
  journey: JourneyData;
}

interface PortfolioContextType {
  data: PortfolioData;
  updateHero: (hero: Partial<HeroData>) => void;
  updateAbout: (about: Partial<AboutData>) => void;
  updateExperience: (experience: ExperienceItem[]) => void;
  updateProjects: (projects: ProjectItem[]) => void;
  updateSkills: (skills: SkillCategory[]) => void;
  updateCertifications: (certifications: CertificationItem[]) => void;
  updateContact: (contact: Partial<ContactData>) => void;
  updateJourney: (journey: Partial<JourneyData>) => void;
  addExperience: (experience: ExperienceItem) => void;
  removeExperience: (id: string) => void;
  addProject: (project: ProjectItem) => void;
  removeProject: (id: string) => void;
  addSkillCategory: (category: SkillCategory) => void;
  removeSkillCategory: (id: string) => void;
}

const PortfolioContext = createContext<PortfolioContextType | undefined>(undefined);

const defaultData: PortfolioData = {
  hero: {
    name: 'Ajith Annavarapu',
    title: 'AI Data Engineer',
    subtitle: 'Turning data into intelligent solutions',
    description: 'I specialize in building scalable data pipelines, implementing AI-driven analytics, and creating intelligent systems that drive business value.',
    openTo: 'Open to new opportunities and collaborations'
  },
  about: {
    name: 'Ajith Annavarapu',
    bio: 'Passionate AI Data Engineer with expertise in machine learning, data engineering, and cloud technologies.',
    location: 'Irving, TX',
    education: 'M.S. in Data Science',
    email: 'ajith.anna5599@gmail.com',
    paragraph1: 'Passionate AI Data Engineer with expertise in machine learning, data engineering, and cloud technologies. I love turning complex data into actionable insights.',
    paragraph2: 'With a strong background in both technical implementation and strategic thinking, I bridge the gap between data science theory and practical business applications.',
    paragraph3: 'Currently focused on building the next generation of intelligent data systems that can adapt and learn from evolving business needs.'
  },
  experience: [
    {
      id: '1',
      company: 'Infokeys',
      role: 'AI Data Engineer',
      period: 'Apr 2024–Present',
      description: 'Leading AI and data engineering initiatives',
      responsibilities: [
        'Led migration of ETL workflows to Databricks',
        'Developed data governance frameworks', 
        'Implemented AI-driven monitoring systems'
      ],
      technologies: ['Databricks', 'Python', 'SQL', 'Azure']
    }
  ],
  projects: [
    {
      id: '1',
      title: 'AI Data Pipeline',
      description: 'Scalable data processing pipeline with ML integration',
      longDescription: 'Built an end-to-end data pipeline that processes millions of records daily with integrated machine learning models for real-time insights.',
      techStack: ['Python', 'Apache Spark', 'Databricks', 'Azure'],
      color: 'purple',
      challenges: ['Handling large-scale data processing', 'Real-time ML inference'],
      solutions: ['Implemented distributed computing', 'Optimized model serving'],
      outcomes: ['50% improvement in processing speed', 'Real-time analytics capabilities']
    }
  ],
  skills: [
    {
      id: '1',
      name: 'Programming Languages',
      skills: [
        { name: 'Python', level: 90 },
        { name: 'SQL', level: 85 },
        { name: 'R', level: 75 },
        { name: 'JavaScript', level: 70 }
      ]
    },
    {
      id: '2', 
      name: 'Cloud Platforms',
      skills: [
        { name: 'Azure', level: 85 },
        { name: 'AWS', level: 80 },
        { name: 'Databricks', level: 90 }
      ]
    }
  ],
  certifications: [
    {
      id: '1',
      title: 'AWS Data Engineer Associate',
      provider: 'Amazon Web Services',
      date: 'Sept 2024'
    },
    {
      id: '2',
      title: 'Apache Cassandra 3 Developer',
      provider: 'DataStax',
      date: 'April 2025'
    },
    {
      id: '3',
      title: 'Databricks Generative AI Fundamentals',
      provider: 'Databricks',
      date: 'Jan 2025'
    }
  ],
  contact: {
    email: 'ajith.anna5599@gmail.com',
    linkedin: 'https://www.linkedin.com/in/aajith7/',
    github: 'https://github.com/Ajith-oo7',
    paragraph: 'I\'m always interested in new opportunities and collaborations. Feel free to reach out if you\'d like to discuss potential projects or just connect!'
  },
  journey: {
    title: 'My Journey',
    description: 'From curiosity to expertise in AI and data engineering',
    paragraph1: 'My journey in data science began with a fascination for uncovering patterns in complex datasets. What started as curiosity evolved into a passion for building intelligent systems that can learn and adapt.',
    paragraph2: 'Today, I focus on creating scalable AI solutions that bridge the gap between cutting-edge research and practical business applications, always with an eye toward the future of intelligent automation.'
  }
};

export const PortfolioProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [data, setData] = useState<PortfolioData>(() => {
    const savedData = localStorage.getItem('portfolioData');
    return savedData ? JSON.parse(savedData) : defaultData;
  });

  useEffect(() => {
    localStorage.setItem('portfolioData', JSON.stringify(data));
  }, [data]);

  const updateHero = (hero: Partial<HeroData>) => {
    setData(prev => ({ ...prev, hero: { ...prev.hero, ...hero } }));
  };

  const updateAbout = (about: Partial<AboutData>) => {
    setData(prev => ({ ...prev, about: { ...prev.about, ...about } }));
  };

  const updateExperience = (experience: ExperienceItem[]) => {
    setData(prev => ({ ...prev, experience }));
  };

  const updateProjects = (projects: ProjectItem[]) => {
    setData(prev => ({ ...prev, projects }));
  };

  const updateSkills = (skills: SkillCategory[]) => {
    setData(prev => ({ ...prev, skills }));
  };

  const updateCertifications = (certifications: CertificationItem[]) => {
    setData(prev => ({ ...prev, certifications }));
  };

  const updateContact = (contact: Partial<ContactData>) => {
    setData(prev => ({ ...prev, contact: { ...prev.contact, ...contact } }));
  };

  const updateJourney = (journey: Partial<JourneyData>) => {
    setData(prev => ({ ...prev, journey: { ...prev.journey, ...journey } }));
  };

  const addExperience = (experience: ExperienceItem) => {
    setData(prev => ({ ...prev, experience: [...prev.experience, experience] }));
  };

  const removeExperience = (id: string) => {
    setData(prev => ({ ...prev, experience: prev.experience.filter(exp => exp.id !== id) }));
  };

  const addProject = (project: ProjectItem) => {
    setData(prev => ({ ...prev, projects: [...prev.projects, project] }));
  };

  const removeProject = (id: string) => {
    setData(prev => ({ ...prev, projects: prev.projects.filter(proj => proj.id !== id) }));
  };

  const addSkillCategory = (category: SkillCategory) => {
    setData(prev => ({ ...prev, skills: [...prev.skills, category] }));
  };

  const removeSkillCategory = (id: string) => {
    setData(prev => ({ ...prev, skills: prev.skills.filter(cat => cat.id !== id) }));
  };

  const value: PortfolioContextType = {
    data,
    updateHero,
    updateAbout,
    updateExperience,
    updateProjects,
    updateSkills,
    updateCertifications,
    updateContact,
    updateJourney,
    addExperience,
    removeExperience,
    addProject,
    removeProject,
    addSkillCategory,
    removeSkillCategory
  };

  return (
    <PortfolioContext.Provider value={value}>
      {children}
    </PortfolioContext.Provider>
  );
};

export const usePortfolio = () => {
  const context = useContext(PortfolioContext);
  if (context === undefined) {
    throw new Error('usePortfolio must be used within a PortfolioProvider');
  }
  return context;
};
