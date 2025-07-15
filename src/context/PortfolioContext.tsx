
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
    title: 'Data Engineer & Data Scientist',
    subtitle: 'Transforming raw data into meaningful insights',
    description: 'I transform raw data into meaningful insights that drive business decisions. With expertise in building robust data pipelines and scalable data systems, I help organizations harness the full potential of their data.',
    openTo: 'I\'m always open to new challenges and collaborations. If you\'re working on an interesting project that requires data expertise, A.I or even Vibe Coding. I\'d love to hear about it!'
  },
  about: {
    name: 'Ajith Annavarapu',
    bio: 'I\'m a passionate Data Engineer with a Master\'s degree in Data Science, dedicated to building robust and scalable data systems that transform raw data into valuable insights.',
    location: 'Irving, TX',
    education: 'M.S. in Data Science',
    email: 'ajith.anna5599@gmail.com',
    paragraph1: 'I\'m a passionate Data Engineer with a Master\'s degree in Data Science, dedicated to building robust and scalable data systems that transform raw data into valuable insights.',
    paragraph2: 'When I\'m not immersed in data, you\'ll find me exploring new hiking trails, Vibe Coding, experimenting with cooking recipes, or diving into a good thriller movie. I believe in continuous learning and staying curious about the world around us.',
    paragraph3: 'I\'m always open to new challenges and collaborations. If you\'re working on an interesting project that requires data expertise, I\'d love to hear about it!'
  },
  experience: [
    {
      id: '1',
      company: 'Accenture',
      role: 'Data Engineer',
      period: 'Apr 2024–Present',
      description: 'Led migration of ETL workflows to Databricks, developed data governance frameworks, and implemented AI-driven monitoring systems.',
      responsibilities: [
        'Led migration of ETL workflows to Databricks',
        'Developed data governance frameworks',
        'Implemented AI-driven monitoring systems',
        'Created data optimization strategies in Snowflake',
        'Integrated LLMs for metadata tagging and automated reporting',
        'Significantly improving processing time, reducing costs, and enhancing data quality and accessibility'
      ],
      technologies: ['Databricks', 'Snowflake', 'Python', 'SQL', 'LLMs', 'ETL', 'AI']
    },
    {
      id: '2',
      company: 'HomeOMattic Service Pvt Ltd',
      role: 'Data Engineer Associate',
      period: 'Apr 2021–Jan 2022',
      description: 'Designed high-performance ETL pipelines and event-driven architectures that improved data refresh cycles and reduced ingestion delays.',
      responsibilities: [
        'Designed high-performance ETL pipelines and event-driven architectures',
        'Improved data refresh cycles and reduced ingestion delays',
        'Implemented comprehensive workflow orchestration with Apache Airflow',
        'Deployed AI-based anomaly detection systems',
        'Ensuring high availability and automated monitoring for data pipelines serving thousands of daily users'
      ],
      technologies: ['Apache Airflow', 'ETL', 'Python', 'AI', 'Anomaly Detection']
    },
    {
      id: '3',
      company: 'Cognizant Technology Solutions',
      role: 'Programme Analyst Trainee',
      period: 'July 2020–Apr 2021',
      description: 'Built large-scale PySpark pipelines for customer data aggregation and developed predictive models for customer churn analysis.',
      responsibilities: [
        'Built large-scale PySpark pipelines for customer data aggregation',
        'Developed predictive models for customer churn analysis',
        'Integrated AWS services to optimize cloud storage costs',
        'Created NLP sentiment analysis pipelines',
        'Enhanced marketing personalization and analytics capabilities'
      ],
      technologies: ['PySpark', 'AWS', 'Python', 'NLP', 'Machine Learning', 'Predictive Analytics']
    },
    {
      id: '4',
      company: 'Cognizant Technology Solutions',
      role: 'Intern',
      period: 'Jan 2020–May 2020',
      description: 'Designed Tableau dashboards for compliance metrics and developed data integration workflows with robust validation.',
      responsibilities: [
        'Designed Tableau dashboards for compliance metrics',
        'Developed data integration workflows with robust validation',
        'Automated metadata cataloging processes',
        'Optimized Snowflake query performance',
        'Significantly improving reporting efficiency and enabling real-time monitoring'
      ],
      technologies: ['Tableau', 'Snowflake', 'SQL', 'Data Integration', 'Automation']
    },
    {
      id: '5',
      company: 'HomeOMattic Service Pvt Ltd',
      role: 'Intern',
      period: 'Jan 2019–Jan 2020',
      description: 'Developed machine learning classifiers for fraud detection and built unsupervised anomaly detection algorithms.',
      responsibilities: [
        'Developed machine learning classifiers for fraud detection',
        'Built unsupervised anomaly detection algorithms that reduced false positives and manual audits',
        'Created automated model training workflows',
        'Built visualization dashboards',
        'Improving operational efficiency and data accuracy for risk analysis'
      ],
      technologies: ['Machine Learning', 'Python', 'Fraud Detection', 'Anomaly Detection', 'Visualization']
    }
  ],
  projects: [
    {
      id: '1',
      title: 'Data Cleaning Automation',
      description: 'Automated data cleaning and preprocessing pipeline for handling complex datasets efficiently.',
      longDescription: 'Automated data cleaning and preprocessing pipeline for handling complex datasets efficiently.',
      techStack: ['Python', 'Pandas', 'Numpy', 'Scikit-learn', 'Jupyter Notebooks'],
      githubLink: 'https://github.com/Ajith-oo7/Cleaning-Automation',
      color: 'purple',
      challenges: ['Handling complex data inconsistencies', 'Automating manual cleaning processes', 'Maintaining data quality'],
      solutions: ['Built automated validation rules', 'Created intelligent preprocessing algorithms', 'Implemented quality monitoring'],
      outcomes: ['90% reduction in manual cleaning time', 'Improved data quality', 'Scalable automation framework']
    },
    {
      id: '2',
      title: 'Data Analysis Automation',
      description: 'An end-to-end automated data analysis tool for generating insights and visualizations from raw data.',
      longDescription: 'An end-to-end automated data analysis tool for generating insights and visualizations from raw data.',
      techStack: ['Python', 'Pandas', 'Matplotlib', 'Seaborn', 'Statsmodels', 'Jupyter'],
      githubLink: 'https://github.com/Ajith-oo7/data-analysis-automation',
      color: 'blue',
      challenges: ['Automating complex analysis workflows', 'Dynamic visualization generation', 'Statistical model selection'],
      solutions: ['Created flexible analysis framework', 'Built dynamic visualization engine', 'Implemented automated model selection'],
      outcomes: ['Automated report generation', 'Consistent analysis quality', 'Reduced analysis time by 70%']
    },
    {
      id: '3',
      title: 'LinkedIn Post Generator',
      description: 'AI-powered content generation tool that creates engaging LinkedIn posts from minimal input.',
      longDescription: 'AI-powered content generation tool that creates engaging LinkedIn posts from minimal input.',
      techStack: ['Python', 'NLP', 'OpenAI API', 'Flask', 'React', 'CSS'],
      githubLink: 'https://github.com/Ajith-oo7/Linkedin-Post-Generator',
      color: 'pink',
      challenges: ['Content relevance and engagement', 'AI prompt optimization', 'User experience design'],
      solutions: ['Fine-tuned AI prompts for LinkedIn context', 'Built intuitive user interface', 'Implemented content validation'],
      outcomes: ['High-quality content generation', 'Improved posting efficiency', 'Enhanced social media presence']
    },
    {
      id: '4',
      title: 'Project DARE',
      description: 'Dynamic Anomaly Recognition Engine - An advanced system for detecting outliers in complex datasets.',
      longDescription: 'Dynamic Anomaly Recognition Engine - An advanced system for detecting outliers in complex datasets.',
      techStack: ['Python', 'TensorFlow', 'PyTorch', 'Scikit-learn', 'Docker', 'Kubernetes'],
      githubLink: 'https://github.com/Ajith-oo7/project_dare',
      color: 'green',
      challenges: ['Complex anomaly detection', 'Real-time processing', 'Scalable architecture'],
      solutions: ['Advanced ML algorithms', 'Distributed processing', 'Containerized deployment'],
      outcomes: ['95% anomaly detection accuracy', 'Real-time processing capabilities', 'Scalable production system']
    },
    {
      id: '5',
      title: 'ML Model Deployment Framework',
      description: 'End-to-end framework for deploying machine learning models to production environments.',
      longDescription: 'End-to-end framework for deploying machine learning models to production environments.',
      techStack: ['Python', 'Docker', 'Kubernetes', 'Flask', 'MLflow', 'Prometheus', 'Grafana'],
      githubLink: 'https://github.com/Ajith-oo7/deploying-machine-learning-models',
      color: 'orange',
      challenges: ['Model versioning and deployment', 'Production monitoring', 'Scalable infrastructure'],
      solutions: ['MLOps pipeline automation', 'Comprehensive monitoring setup', 'Container orchestration'],
      outcomes: ['Streamlined deployment process', 'Improved model reliability', 'Production-ready ML systems']
    }
  ],
  skills: [
    {
      id: '1',
      name: 'Languages & Databases',
      skills: [
        { name: 'Python', level: 95 },
        { name: 'SQL (Postgres, MS-SQL, MySQL)', level: 90 },
        { name: 'Java', level: 80 },
        { name: 'C', level: 75 },
        { name: 'React', level: 85 },
        { name: 'Cassandra', level: 80 }
      ]
    },
    {
      id: '2',
      name: 'Cloud & DevOps',
      skills: [
        { name: 'AWS (Glue, Lambda, S3, EC2, EMR, ECR)', level: 90 },
        { name: 'API Gateway', level: 85 },
        { name: 'KMS', level: 80 },
        { name: 'SageMaker', level: 85 },
        { name: 'CloudWatch', level: 85 },
        { name: 'IAM', level: 85 },
        { name: 'DMS', level: 80 },
        { name: 'Redshift', level: 85 },
        { name: 'CI/CD', level: 80 }
      ]
    },
    {
      id: '3',
      name: 'Big Data & ETL',
      skills: [
        { name: 'Snowflake', level: 90 },
        { name: 'Databricks', level: 95 },
        { name: 'PySpark', level: 90 },
        { name: 'Informatica', level: 80 },
        { name: 'Delta Lake', level: 85 },
        { name: 'Snowpipe', level: 85 },
        { name: 'Unity Catalog', level: 80 },
        { name: 'Z-Ordering', level: 80 },
        { name: 'Auto-Optimize', level: 80 }
      ]
    },
    {
      id: '4',
      name: 'Artificial Intelligence',
      skills: [
        { name: 'Large Language Models (LLMs)', level: 90 },
        { name: 'Generative AI', level: 85 },
        { name: 'Prompt Engineering', level: 90 },
        { name: 'RAG (Retrieval Augmented Generation)', level: 85 },
        { name: 'Neural Networks', level: 85 },
        { name: 'NLP & Text Processing', level: 90 },
        { name: 'Vector Databases', level: 80 },
        { name: 'AI Model Deployment', level: 85 }
      ]
    },
    {
      id: '5',
      name: 'Machine Learning Algorithms',
      skills: [
        { name: 'Decision Trees', level: 90 },
        { name: 'K-means', level: 85 },
        { name: 'SVM', level: 85 },
        { name: 'Random Forest', level: 90 },
        { name: 'Linear Regression', level: 90 },
        { name: 'XGBoost', level: 85 },
        { name: 'TensorFlow', level: 85 },
        { name: 'PyTorch', level: 80 },
        { name: 'Keras', level: 85 }
      ]
    },
    {
      id: '6',
      name: 'Data Analysis & Visualization',
      skills: [
        { name: 'Tableau', level: 90 },
        { name: 'Matplotlib', level: 85 },
        { name: 'Plotly', level: 85 },
        { name: 'Seaborn', level: 85 },
        { name: 'Excel', level: 80 },
        { name: 'A/B Testing', level: 85 },
        { name: 'QuickSight', level: 80 },
        { name: 'PowerBI', level: 80 }
      ]
    },
    {
      id: '7',
      name: 'Data Science Libraries',
      skills: [
        { name: 'Scikit-learn', level: 90 },
        { name: 'NumPy', level: 90 },
        { name: 'Pandas', level: 95 },
        { name: 'SciPy', level: 85 },
        { name: 'Langchain', level: 80 },
        { name: 'Streamlit', level: 85 }
      ]
    },
    {
      id: '8',
      name: 'Workflow Orchestration',
      skills: [
        { name: 'Jenkins', level: 80 },
        { name: 'n8n', level: 75 },
        { name: 'Hadoop', level: 80 },
        { name: 'Apache Airflow', level: 90 },
        { name: 'Docker', level: 85 }
      ]
    },
    {
      id: '9',
      name: 'Version Control',
      skills: [
        { name: 'Git', level: 90 },
        { name: 'AWS Cloud Source Repositories', level: 80 }
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
    description: 'From curious data enthusiast to professional data engineer.',
    paragraph1: 'My journey in the data field began with a fascination for extracting insights from raw information. Starting with a solid foundation in computer science, I quickly developed expertise in data engineering and analytics, working across various domains and technologies.',
    paragraph2: 'Along this path, I\'ve continually expanded my skills, adapting to emerging technologies and methodologies, and building a comprehensive toolkit that allows me to tackle complex data challenges with confidence and creativity.'
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
