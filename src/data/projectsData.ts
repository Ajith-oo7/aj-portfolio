
export type ProjectDetail = {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  techStack: string[];
  challenges: string[];
  solutions: string[];
  outcomes: string[];
  demoLink: string;
  githubLink: string;
  imageSrc: string;
  color: "blue" | "purple" | "pink";
};

export const projectsData: ProjectDetail[] = [
  {
    id: 'cleaning-automation',
    title: 'Data Cleaning Automation',
    description: 'Automated data cleaning and preprocessing pipeline for handling complex datasets efficiently.',
    longDescription: 'Developed a robust data cleaning automation framework that streamlines the preprocessing of large and complex datasets. This tool reduces manual effort, improves data quality, and ensures consistency across different data sources.',
    techStack: ['Python', 'Pandas', 'Numpy', 'Scikit-learn', 'Jupyter Notebooks'],
    challenges: [
      'Processing heterogeneous data from multiple sources',
      'Handling missing values and outliers automatically',
      'Creating a reusable pipeline for different dataset formats',
      'Reducing manual intervention in data preparation tasks'
    ],
    solutions: [
      'Implemented modular data cleaning functions for different data types',
      'Created automated detection and handling of missing values and outliers',
      'Designed a configurable pipeline that adapts to different dataset schemas',
      'Built comprehensive logging and validation checks throughout the process'
    ],
    outcomes: [
      'Reduced data preparation time by 70%',
      'Improved data quality and consistency across projects',
      'Created reusable components that save time in future projects',
      'Enhanced reproducibility of data preparation steps'
    ],
    demoLink: '#',
    githubLink: 'https://github.com/Ajith-oo7/Cleaning-Automation',
    imageSrc: '',
    color: "blue"
  },
  {
    id: 'data-analysis-automation',
    title: 'Data Analysis Automation',
    description: 'An end-to-end automated data analysis tool for generating insights and visualizations from raw data.',
    longDescription: 'Built a comprehensive data analysis automation framework that processes raw data, performs statistical analysis, creates visualizations, and generates reports with minimal user intervention. This tool helps extract valuable insights faster and more consistently.',
    techStack: ['Python', 'Pandas', 'Matplotlib', 'Seaborn', 'Statsmodels', 'Jupyter'],
    challenges: [
      'Automating complex analytical workflows that normally require expertise',
      'Creating meaningful visualizations automatically based on data patterns',
      'Handling diverse data types and relationships',
      'Making the analysis results accessible to non-technical users'
    ],
    solutions: [
      'Designed an intelligent pipeline that selects appropriate analyses based on data types',
      'Implemented auto-generation of relevant visualizations for detected patterns',
      'Created adaptive preprocessing for different data formats',
      'Developed templated report generation with interactive components'
    ],
    outcomes: [
      'Accelerated data analysis workflows by 60%',
      'Enabled non-technical stakeholders to obtain insights independently',
      'Standardized reporting across the organization',
      'Improved decision-making through consistent and timely analysis'
    ],
    demoLink: '#',
    githubLink: 'https://github.com/Ajith-oo7/data-analysis-automation',
    imageSrc: '',
    color: "purple"
  },
  {
    id: 'linkedin-post-generator',
    title: 'LinkedIn Post Generator',
    description: 'AI-powered content generation tool that creates engaging LinkedIn posts from minimal input.',
    longDescription: 'Developed an intelligent content generation system specifically designed for LinkedIn. The tool analyzes user input, understands context, and generates professional, engaging posts optimized for LinkedIn\'s algorithm and audience engagement patterns.',
    techStack: ['Python', 'NLP', 'OpenAI API', 'Flask', 'React', 'CSS'],
    challenges: [
      'Creating content that sounds natural and professional, not AI-generated',
      'Adapting to different industries and professional contexts',
      'Optimizing content for LinkedIn\'s specific engagement patterns',
      'Building a user-friendly interface for non-technical users'
    ],
    solutions: [
      'Fine-tuned language models on professional LinkedIn content',
      'Implemented industry-specific templates and tone adjustment',
      'Developed engagement optimization features based on LinkedIn analytics',
      'Created an intuitive UI with preview and editing capabilities'
    ],
    outcomes: [
      'Increased posting frequency and consistency for users',
      'Improved engagement rates on generated content',
      'Reduced content creation time from hours to minutes',
      'Positive feedback on content quality and professional tone'
    ],
    demoLink: '#',
    githubLink: 'https://github.com/Ajith-oo7/Linkedin-Post-Generator',
    imageSrc: '',
    color: "pink"
  },
  {
    id: 'project-dare',
    title: 'Project DARE',
    description: 'Dynamic Anomaly Recognition Engine - An advanced system for detecting outliers in complex datasets.',
    longDescription: 'Developed Project DARE (Dynamic Anomaly Recognition Engine), a sophisticated system that identifies anomalies and outliers in complex, high-dimensional datasets. The project combines traditional statistical methods with modern machine learning approaches to provide robust anomaly detection across various data types.',
    techStack: ['Python', 'TensorFlow', 'PyTorch', 'Scikit-learn', 'Docker', 'Kubernetes'],
    challenges: [
      'Detecting subtle anomalies in high-dimensional data',
      'Handling both labeled and unlabeled datasets effectively',
      'Minimizing false positives while maintaining sensitivity',
      'Creating a scalable system for large datasets'
    ],
    solutions: [
      'Implemented ensemble of detection algorithms for different data patterns',
      'Developed semi-supervised learning approach for sparse labeled data',
      'Created adaptive thresholding based on data characteristics',
      'Designed containerized architecture for horizontal scaling'
    ],
    outcomes: [
      'Achieved 92% detection rate on benchmark datasets',
      'Reduced false positive rate by 40% compared to baseline methods',
      'Successfully deployed in production environments',
      'Enabled real-time anomaly detection for critical systems'
    ],
    demoLink: '#',
    githubLink: 'https://github.com/Ajith-oo7/project_dare',
    imageSrc: '',
    color: "blue"
  },
  {
    id: 'ml-model-deployment',
    title: 'ML Model Deployment Framework',
    description: 'End-to-end framework for deploying machine learning models to production environments.',
    longDescription: 'Created a comprehensive framework for deploying machine learning models from development to production environments. The system handles model versioning, A/B testing, monitoring, and scaling while providing a simple interface for data scientists to push their models to production.',
    techStack: ['Python', 'Docker', 'Kubernetes', 'Flask', 'MLflow', 'Prometheus', 'Grafana'],
    challenges: [
      'Bridging the gap between data science and production engineering',
      'Ensuring reliable deployment and version control of models',
      'Monitoring model performance in production',
      'Handling model updates without service disruption'
    ],
    solutions: [
      'Developed a CI/CD pipeline specifically for ML models',
      'Implemented containerized deployment with automatic scaling',
      'Created comprehensive monitoring and alerting system',
      'Designed canary deployments and A/B testing infrastructure'
    ],
    outcomes: [
      'Reduced model deployment time from weeks to hours',
      'Improved model reliability in production',
      'Enhanced visibility into model performance metrics',
      'Enabled easy rollback and version management'
    ],
    demoLink: '#',
    githubLink: 'https://github.com/Ajith-oo7/deploying-machine-learning-models',
    imageSrc: '',
    color: "purple"
  },
  {
    id: 'sentiment-analysis-dashboard',
    title: 'Sentiment Analysis Dashboard',
    description: 'Interactive dashboard for real-time sentiment analysis of customer feedback across multiple channels.',
    longDescription: 'Developed a comprehensive sentiment analysis solution that aggregates customer feedback from social media, support tickets, and reviews. The system uses natural language processing to determine sentiment and identify emerging issues.',
    techStack: ['NLP', 'React', 'Flask', 'MongoDB', 'BERT', 'AWS Comprehend'],
    challenges: [
      'Processing unstructured text data in multiple languages',
      'Handling sentiment analysis in domain-specific contexts',
      'Integrating multiple data sources in real-time',
      'Creating intuitive visualizations for non-technical users'
    ],
    solutions: [
      'Fine-tuned BERT models for domain-specific sentiment analysis',
      'Created a microservices architecture for data ingestion',
      'Implemented real-time streaming with WebSockets',
      'Designed interactive dashboards with React'
    ],
    outcomes: [
      'Reduced response time to negative feedback by 80%',
      'Identified product improvement opportunities',
      'Tracked sentiment trends over time and by feature',
      'Improved overall customer satisfaction scores'
    ],
    demoLink: '#',
    githubLink: '#',
    imageSrc: '',
    color: "pink"
  }
];
