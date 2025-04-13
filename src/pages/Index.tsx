import React, { useEffect, useRef } from 'react';
import { ArrowDown, Mail, Github, Linkedin, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import DataViz3D from '@/components/DataViz3D';
import ProjectCard from '@/components/ProjectCard';
import SkillsSection from '@/components/SkillsSection';
import ParticleNetwork from '@/components/ParticleNetwork';
import ExperienceSection from '@/components/ExperienceSection';
import CertificationsSection from '@/components/CertificationsSection';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import ScrollProgressIndicator from '@/components/ScrollProgressIndicator';
import ContactForm from '@/components/ContactForm';
import ProjectDetailModal from '@/components/ProjectDetailModal';

type ProjectDetail = {
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

const projectsData: ProjectDetail[] = [
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

const Index = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  
  const scrollToContent = () => {
    scrollRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  
  const scrollToSection = (sectionId: string) => {
    console.log(`Attempting to scroll to section from Index: ${sectionId}`);
    
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      console.log(`Found element:`, element);
      
      if (element) {
        const headerOffset = 80; // Account for fixed header height
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        
        console.log(`Scrolling to position: ${offsetPosition}`);
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      } else {
        console.error(`Element with ID "${sectionId}" not found`);
      }
    }, 300); // Delay for better reliability
  };
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const blob = document.getElementById('mouse-blob');
      if (blob) {
        requestAnimationFrame(() => {
          blob.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`;
        });
      }
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  
  return (
    <div className="bg-black relative min-h-screen overflow-x-hidden">
      {/* Scroll Progress Indicator */}
      <ScrollProgressIndicator />
      
      {/* Particle network background */}
      <ParticleNetwork />
      
      {/* Mouse blob effect - smaller and more responsive */}
      <div 
        id="mouse-blob" 
        className="fixed w-48 h-48 rounded-full bg-radial-glow pointer-events-none opacity-60 z-0"
        style={{ transform: 'translate(-50%, -50%)' }}
      ></div>
      
      <div 
        className="fixed inset-0 bg-grid-pattern bg-[length:30px_30px] opacity-5 pointer-events-none z-0"
      ></div>
      
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden px-4">
        <div className="container mx-auto max-w-6xl flex flex-col md:flex-row items-center z-10">
          <div className="w-full md:w-1/2 mb-10 md:mb-0 relative z-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              <span className="text-white">Hi, I'm </span>
              <span className="text-gradient text-glow">Ajith Annavarapu</span>
            </h1>
            <div className="h-1 w-24 bg-neon-blue mb-6"></div>
            <h2 className="text-xl md:text-2xl text-gray-300 mb-6">
              Data Engineer & Data Scientist
            </h2>
            <p className="text-gray-400 max-w-lg mb-8">
              I transform raw data into meaningful insights that drive business decisions. 
              With expertise in building robust data pipelines and scalable data systems, 
              I help organizations harness the full potential of their data.
            </p>
            <p className="text-gray-300 mb-6">
              I'm always open to new challenges and collaborations. If you're working on an interesting project that requires data expertise, A.I or even Vibe Coding. I'd love to hear about it!
            </p>
            <div className="flex flex-wrap gap-4">
              <Button 
                className="bg-neon-blue hover:bg-neon-blue/80 text-white"
                onClick={() => scrollToSection('experience')}
              >
                Explore My Work
              </Button>
              <Button 
                onClick={() => scrollToSection('contact')} 
                variant="outline" 
                className="border-white/20 hover:border-white/50 text-white"
              >
                Get in Touch
              </Button>
            </div>
          </div>
          <div className="w-full md:w-1/2 h-[300px] md:h-[400px] lg:h-[500px] relative backdrop-blur-sm bg-black/30 rounded-xl border border-white/5 p-2">
            <DataViz3D className="animate-float" />
          </div>
        </div>
        
        <button 
          onClick={scrollToContent}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white opacity-60 hover:opacity-100 transition-all duration-300 animate-bounce"
          aria-label="Scroll down"
        >
          <ArrowDown size={24} />
        </button>
      </section>
      
      {/* My Journey Section - Removed Interactive Timeline */}
      <section 
        id="story" 
        className="py-20 relative"
      >
        <div className="container mx-auto max-w-4xl px-4 z-10 relative">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4">My Journey</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              From curious data enthusiast to professional data engineer.
            </p>
          </div>
          
          {/* Journey content goes here (simpler content) */}
          <div className="neo-blur border border-white/10 rounded-lg p-8">
            <p className="text-gray-300 mb-6">
              My journey in the data field began with a fascination for extracting insights from raw information. Starting with a solid foundation in computer science, I quickly developed expertise in data engineering and analytics, working across various domains and technologies.
            </p>
            <p className="text-gray-300">
              Along this path, I've continually expanded my skills, adapting to emerging technologies and methodologies, and building a comprehensive toolkit that allows me to tackle complex data challenges with confidence and creativity.
            </p>
          </div>
        </div>
      </section>
      
      {/* Skills Section - Removed Interactive Visualization */}
      <section 
        id="skills" 
        className="py-20 relative"
      >
        <div className="container mx-auto max-w-6xl px-4 z-10 relative">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4">Skills & Expertise</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              A comprehensive toolkit built through years of experience and continuous learning.
            </p>
          </div>
          
          <SkillsSection />
        </div>
      </section>
      
      {/* Experience Section */}
      <section 
        id="experience" 
        className="py-20 relative"
      >
        <div className="container mx-auto max-w-6xl px-4 z-10 relative">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4">Work Experience</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              My professional journey and the impact I've made.
            </p>
          </div>
          
          <ExperienceSection />
        </div>
      </section>
      
      {/* Certifications Section */}
      <section 
        id="certifications" 
        className="py-20 relative"
      >
        <div className="container mx-auto max-w-6xl px-4 z-10 relative">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4">Certifications</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Professional certifications and achievements.
            </p>
          </div>
          
          <CertificationsSection />
        </div>
      </section>
      
      {/* Projects Section with Project Details */}
      <section 
        id="projects" 
        className="py-20 relative"
      >
        <div className="container mx-auto max-w-6xl px-4 z-10 relative">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4">Featured Projects</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              A selection of my work that showcases my skills and experience.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projectsData.map((project) => (
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
        </div>
      </section>
      
      {/* About Me Section */}
      <section 
        id="about" 
        className="py-20 relative"
      >
        <div className="container mx-auto max-w-4xl px-4 z-10 relative">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4">About Me</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Beyond the code and data, here's a bit more about who I am.
            </p>
          </div>
          
          <div className="neo-blur border border-white/10 rounded-lg p-8">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="w-full md:w-1/3">
                <div className="aspect-square overflow-hidden rounded-lg border-2 border-neon-blue/30 neon-border">
                  <img 
                    src="/lovable-uploads/6f95a394-2f70-4adb-9882-a3a774b96785.png" 
                    alt="Ajith Annavarapu" 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="flex justify-center mt-6 space-x-4">
                  <a 
                    href="https://github.com/Ajith-oo7" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-white hover:text-neon-blue transition-colors"
                  >
                    <Github size={20} />
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/aajith7/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-white hover:text-neon-blue transition-colors"
                  >
                    <Linkedin size={20} />
                  </a>
                  <a 
                    href="mailto:ajith.anna5599@gmail.com" 
                    className="text-white hover:text-neon-blue transition-colors"
                  >
                    <Mail size={20} />
                  </a>
                </div>
              </div>
              
              <div className="w-full md:w-2/3">
                <h3 className="text-xl font-bold text-white mb-4">Ajith Annavarapu</h3>
                <p className="text-gray-300 mb-4">
                  I'm a passionate Data Engineer with a Master's degree in Data Science, dedicated to building 
                  robust and scalable data systems that transform raw data into valuable insights.
                </p>
                <p className="text-gray-300 mb-4">
                  When I'm not immersed in data, you'll find me exploring new hiking trails, Vibe Coding, experimenting with cooking recipes, or diving into a good thriller movie. I believe in continuous learning and staying curious about the world around us.
                </p>
                <p className="text-gray-300 mb-6">
                  I'm always open to new challenges and collaborations. If you're working on an interesting 
                  project that requires data expertise, I'd love to hear about it!
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-24 text-sm text-gray-400">Location:</div>
                    <div className="text-white">Irving, TX</div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-24 text-sm text-gray-400">Education:</div>
                    <div className="text-white">M.S. in Data Science</div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-24 text-sm text-gray-400">Email:</div>
                    <a href="mailto:ajith.anna5599@gmail.com" className="text-neon-blue hover:underline">ajith.anna5599@gmail.com</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact Section with Form */}
      <section 
        id="contact" 
        className="py-20 relative"
      >
        <div className="container mx-auto max-w-4xl px-4 z-10 relative">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4">Get In Touch</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Interested in working together? Feel free to reach out!
            </p>
          </div>
          
          <div className="neo-blur border border-white/10 rounded-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-xl font-bold text-white mb-4">Contact Information</h3>
                <p className="text-gray-300 mb-6">
                  I'm currently open to freelance opportunities, consulting work, and full-time positions.
                  Don't hesitate to reach out if you think we could work together!
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <Mail className="w-5 h-5 text-neon-blue mt-1 mr-3" />
                    <div>
                      <h4 className="text-white font-medium">Email</h4>
                      <a href="mailto:ajith.anna5599@gmail.com" className="text-gray-400 hover:text-neon-blue">
                        ajith.anna5599@gmail.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Linkedin className="w-5 h-5 text-neon-blue mt-1 mr-3" />
                    <div>
                      <h4 className="text-white font-medium">LinkedIn</h4>
                      <a 
                        href="https://www.linkedin.com/in/aajith7/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-neon-blue"
                      >
                        linkedin.com/in/aajith7
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Github className="w-5 h-5 text-neon-blue mt-1 mr-3" />
                    <div>
                      <h4 className="text-white font-medium">GitHub</h4>
                      <a 
                        href="https://github.com/Ajith-oo7" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-neon-blue"
                      >
                        github.com/Ajith-oo7
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="py-6 border-t border-white/10">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-white font-mono text-xl mb-4 md:mb-0">
              <span className="text-gradient font-bold">AA</span>
              <span className="text-neon-blue">.</span>
            </div>
            
            <div className="text-gray-400 text-sm text-center md:text-right">
              <p>© {new Date().getFullYear()} Ajith Annavarapu. All rights reserved.</p>
              <p className="mt-1">
                Built with React, TailwindCSS, and Three.js
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
