
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
      description: 'Leading AI and data engineering initiatives to transform business operations through intelligent automation and scalable data solutions.',
      responsibilities: [
        'Led migration of 15+ ETL workflows from legacy systems to Databricks, reducing processing time by 40% and improving data quality',
        'Developed comprehensive data governance frameworks ensuring GDPR compliance and establishing data lineage tracking',
        'Implemented AI-driven monitoring systems that proactively identify data anomalies, reducing downtime by 60%',
        'Architected real-time streaming pipelines processing 2M+ events daily with sub-second latency requirements',
        'Mentored junior engineers and established best practices for MLOps and DataOps workflows'
      ],
      technologies: ['Databricks', 'Python', 'SQL', 'Azure', 'Apache Spark', 'Docker', 'Kubernetes', 'MLflow']
    },
    {
      id: '2',
      company: 'DataTech Solutions',
      role: 'Senior Data Engineer',
      period: 'Jan 2022–Mar 2024',
      description: 'Designed and implemented enterprise-scale data platforms serving millions of users with high availability and performance.',
      responsibilities: [
        'Built and maintained data lakes processing 500GB+ daily across multiple business units',
        'Optimized SQL queries and database performance, achieving 70% improvement in query response times',
        'Developed automated data quality monitoring tools reducing manual validation time by 80%',
        'Collaborated with cross-functional teams to deliver 20+ data-driven products and features'
      ],
      technologies: ['AWS', 'PostgreSQL', 'Apache Airflow', 'Python', 'Terraform', 'Redis', 'Elasticsearch']
    },
    {
      id: '3',
      company: 'Analytics Corp',
      role: 'Data Analyst',
      period: 'Jun 2020–Dec 2021',
      description: 'Transformed raw data into actionable business insights through advanced analytics and machine learning models.',
      responsibilities: [
        'Created executive dashboards and reports using Tableau and Power BI for C-level stakeholders',
        'Developed predictive models for customer churn and revenue forecasting with 85%+ accuracy',
        'Automated reporting processes saving 15 hours per week of manual work',
        'Conducted A/B testing and statistical analysis to optimize marketing campaigns'
      ],
      technologies: ['Python', 'R', 'Tableau', 'Power BI', 'MySQL', 'Pandas', 'Scikit-learn']
    }
  ],
  projects: [
    {
      id: '1',
      title: 'Real-Time AI Analytics Platform',
      description: 'Scalable data processing pipeline with ML integration for real-time business intelligence',
      longDescription: 'Built an end-to-end data pipeline that processes millions of records daily with integrated machine learning models for real-time insights. The platform serves multiple business units with sub-second query response times.',
      techStack: ['Python', 'Apache Spark', 'Databricks', 'Azure', 'Kafka', 'PostgreSQL'],
      demoLink: 'https://demo.example.com',
      githubLink: 'https://github.com/Ajith-oo7/ai-analytics-platform',
      color: 'purple',
      challenges: ['Handling large-scale data processing with low latency', 'Real-time ML inference at scale', 'Data consistency across distributed systems'],
      solutions: ['Implemented distributed computing with Apache Spark', 'Optimized model serving with dedicated inference clusters', 'Established event-driven architecture with proper error handling'],
      outcomes: ['50% improvement in processing speed', 'Real-time analytics capabilities', '99.9% system uptime achieved']
    },
    {
      id: '2',
      title: 'Predictive Maintenance System',
      description: 'IoT-powered predictive analytics for industrial equipment monitoring',
      longDescription: 'Developed a comprehensive predictive maintenance solution that monitors industrial equipment health in real-time and predicts failures before they occur, saving millions in downtime costs.',
      techStack: ['Python', 'TensorFlow', 'AWS IoT', 'Lambda', 'DynamoDB', 'Grafana'],
      demoLink: 'https://maintenance-demo.example.com',
      githubLink: 'https://github.com/Ajith-oo7/predictive-maintenance',
      color: 'blue',
      challenges: ['Processing massive IoT sensor data streams', 'Building accurate failure prediction models', 'Real-time alerting and notification systems'],
      solutions: ['Implemented efficient data ingestion with AWS IoT Core', 'Developed ensemble ML models with 92% accuracy', 'Created intelligent alerting with priority-based notifications'],
      outcomes: ['60% reduction in unplanned downtime', '30% decrease in maintenance costs', 'Improved equipment lifespan by 25%']
    },
    {
      id: '3',
      title: 'Customer Intelligence Platform',
      description: 'Advanced customer segmentation and behavior analysis using ML',
      longDescription: 'Created a sophisticated customer intelligence platform that segments users based on behavior patterns and predicts lifetime value, enabling personalized marketing strategies.',
      techStack: ['Python', 'Scikit-learn', 'PostgreSQL', 'Redis', 'Docker', 'FastAPI'],
      demoLink: 'https://customer-intel.example.com',
      githubLink: 'https://github.com/Ajith-oo7/customer-intelligence',
      color: 'pink',
      challenges: ['Complex customer behavior modeling', 'Real-time personalization at scale', 'Privacy-compliant data processing'],
      solutions: ['Developed advanced clustering algorithms', 'Implemented efficient caching strategies', 'Built privacy-first data processing pipeline'],
      outcomes: ['40% increase in marketing campaign effectiveness', '25% improvement in customer retention', 'GDPR-compliant data handling achieved']
    }
  ],
  skills: [
    {
      id: '1',
      name: 'Programming Languages',
      skills: [
        { name: 'Python', level: 95 },
        { name: 'SQL', level: 90 },
        { name: 'R', level: 80 },
        { name: 'Scala', level: 75 },
        { name: 'JavaScript', level: 70 }
      ]
    },
    {
      id: '2',
      name: 'Cloud Platforms & Big Data',
      skills: [
        { name: 'Databricks', level: 95 },
        { name: 'Azure', level: 90 },
        { name: 'AWS', level: 85 },
        { name: 'Apache Spark', level: 90 },
        { name: 'Kafka', level: 80 }
      ]
    },
    {
      id: '3',
      name: 'Machine Learning & AI',
      skills: [
        { name: 'TensorFlow', level: 85 },
        { name: 'PyTorch', level: 80 },
        { name: 'Scikit-learn', level: 90 },
        { name: 'MLflow', level: 85 },
        { name: 'Hugging Face', level: 75 }
      ]
    },
    {
      id: '4',
      name: 'Data Engineering Tools',
      skills: [
        { name: 'Apache Airflow', level: 90 },
        { name: 'Docker', level: 85 },
        { name: 'Kubernetes', level: 80 },
        { name: 'Terraform', level: 75 },
        { name: 'PostgreSQL', level: 90 }
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
