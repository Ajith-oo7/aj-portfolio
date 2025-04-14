
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
    id: 'real-time-data-pipeline',
    title: 'Real-time Data Pipeline',
    description: 'Built a scalable real-time data processing system using Apache Kafka and Spark Streaming for a financial services company.',
    longDescription: 'Designed and implemented a highly available and fault-tolerant real-time data processing pipeline that processes millions of financial transactions per minute. The system enables real-time fraud detection and business analytics.',
    techStack: ['Apache Kafka', 'Spark Streaming', 'AWS', 'Python', 'Docker', 'Redis'],
    challenges: [
      'Processing millions of transactions per minute with sub-second latency',
      'Ensuring data consistency across distributed systems',
      'Implementing fault tolerance and disaster recovery',
      'Optimizing for cost efficiency while maintaining performance'
    ],
    solutions: [
      'Designed a microservices architecture using Kafka for message queuing',
      'Implemented exactly-once processing semantics',
      'Created auto-scaling pipeline components based on load',
      'Used AWS Lambda for stateless processing and EKS for stateful workloads'
    ],
    outcomes: [
      'Reduced fraud detection time from hours to milliseconds',
      'Saved $2M annually in fraud prevention',
      'Improved system reliability with 99.99% uptime',
      'Enabled real-time business insights for executives'
    ],
    demoLink: '#',
    githubLink: '#',
    imageSrc: '',
    color: "blue"
  },
  {
    id: 'data-warehouse-optimization',
    title: 'Data Warehouse Optimization',
    description: 'Redesigned and optimized a data warehouse architecture, reducing query times by 70% and storage costs by 30%.',
    longDescription: 'Led a complete overhaul of an enterprise data warehouse that was suffering from performance and cost issues. The project involved data modeling, query optimization, and implementing modern data warehouse design patterns.',
    techStack: ['Snowflake', 'dbt', 'SQL', 'Python', 'Airflow', 'Terraform'],
    challenges: [
      'Legacy schema design causing performance bottlenecks',
      'Exponentially growing storage costs',
      'Complex queries taking hours to execute',
      'Inconsistent data quality affecting business decisions'
    ],
    solutions: [
      'Implemented a Kimball dimensional modeling approach',
      'Created materialized views for common query patterns',
      'Optimized storage with clustering and partitioning',
      'Developed an automated data quality framework'
    ],
    outcomes: [
      'Reduced average query time by 70%',
      'Decreased storage costs by 30%',
      'Improved data freshness from daily to hourly',
      'Implemented automated data lineage tracking'
    ],
    demoLink: '#',
    githubLink: '#',
    imageSrc: '',
    color: "purple"
  },
  {
    id: 'machine-learning-pipeline',
    title: 'Machine Learning Pipeline',
    description: 'Developed an end-to-end ML pipeline for customer segmentation that increased marketing campaign conversion rates by 25%.',
    longDescription: 'Created a sophisticated machine learning pipeline that processes customer data to identify distinct customer segments and predict future behavior. The system enables highly targeted marketing campaigns with measurable ROI.',
    techStack: ['Scikit-learn', 'Airflow', 'Docker', 'Python', 'PostgreSQL', 'MLflow'],
    challenges: [
      'Integrating disparate customer data sources',
      'Building explainable ML models for business users',
      'Creating an automated retraining pipeline',
      'Deploying models in a production environment'
    ],
    solutions: [
      'Developed a feature engineering framework for customer data',
      'Used ensemble methods to improve model accuracy',
      'Implemented MLflow for experiment tracking',
      'Built CI/CD pipeline for model deployment'
    ],
    outcomes: [
      'Increased marketing campaign conversion rates by 25%',
      'Improved customer retention by identifying at-risk segments',
      'Enabled personalized product recommendations',
      'Reduced marketing costs by targeting high-value segments'
    ],
    demoLink: '#',
    githubLink: '#',
    imageSrc: '',
    color: "pink"
  },
  {
    id: 'data-quality-framework',
    title: 'Data Quality Framework',
    description: 'Implemented a comprehensive data quality monitoring system with automated alerts and dashboards.',
    longDescription: 'Designed and implemented an enterprise-wide data quality monitoring system that automatically detects anomalies, validates data integrity, and provides visibility into data health across the organization.',
    techStack: ['Great Expectations', 'Airflow', 'Grafana', 'Python', 'Prometheus', 'Slack API'],
    challenges: [
      'Monitoring thousands of datasets across different platforms',
      'Building flexible validation rules for diverse data types',
      'Implementing alerting with minimal false positives',
      'Creating actionable dashboards for different stakeholders'
    ],
    solutions: [
      'Used Great Expectations for declarative data validation',
      'Implemented statistical anomaly detection algorithms',
      'Created a metadata repository for tracking data lineage',
      'Developed custom Grafana dashboards by department'
    ],
    outcomes: [
      'Reduced data incidents by 60%',
      'Improved mean time to detection of issues by 85%',
      'Created comprehensive data health scorecards',
      'Enabled proactive data quality management'
    ],
    demoLink: '#',
    githubLink: '#',
    imageSrc: '',
    color: "blue"
  },
  {
    id: 'iot-analytics-platform',
    title: 'IoT Analytics Platform',
    description: 'Built a scalable analytics platform for processing and analyzing data from thousands of IoT devices in real-time.',
    longDescription: 'Architected a robust IoT analytics platform capable of ingesting, processing, and analyzing telemetry data from thousands of connected devices. The platform enables real-time monitoring, predictive maintenance, and operational insights.',
    techStack: ['Kafka', 'Elasticsearch', 'Kibana', 'Python', 'TimescaleDB', 'MQTT'],
    challenges: [
      'Handling millions of data points per second',
      'Managing device connectivity and message durability',
      'Implementing time series analytics at scale',
      'Creating real-time alerting for device health'
    ],
    solutions: [
      'Used MQTT for lightweight edge device communication',
      'Implemented Kafka for reliable message processing',
      'Leveraged TimescaleDB for time-series data storage',
      'Developed custom anomaly detection algorithms'
    ],
    outcomes: [
      'Enabled predictive maintenance saving $1M annually',
      'Improved device uptime by 15%',
      'Reduced mean time to repair by 40%',
      'Created real-time operational dashboards'
    ],
    demoLink: '#',
    githubLink: '#',
    imageSrc: '',
    color: "purple"
  },
  {
    id: 'sentiment-analysis-dashboard',
    title: 'Sentiment Analysis Dashboard',
    description: 'Created an interactive dashboard for real-time sentiment analysis of customer feedback across multiple channels.',
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
