import React, { useEffect, useRef } from 'react';
import { ArrowDown, Mail, Github, Linkedin, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import DataViz3D from '@/components/DataViz3D';
import ProjectCard from '@/components/ProjectCard';
import SkillsSection from '@/components/SkillsSection';
import ParticleNetwork from '@/components/ParticleNetwork';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

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
        // Use requestAnimationFrame for smoother updates
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
  
  const projects = [
    {
      title: 'Real-time Data Pipeline',
      description: 'Built a scalable real-time data processing system using Apache Kafka and Spark Streaming for a financial services company.',
      techStack: ['Apache Kafka', 'Spark Streaming', 'AWS', 'Python'],
      color: 'blue' as const,
      demoLink: '#',
      githubLink: '#'
    },
    {
      title: 'Data Warehouse Optimization',
      description: 'Redesigned and optimized a data warehouse architecture, reducing query times by 70% and storage costs by 30%.',
      techStack: ['Snowflake', 'dbt', 'SQL', 'Python'],
      color: 'purple' as const,
      demoLink: '#',
      githubLink: '#'
    },
    {
      title: 'Machine Learning Pipeline',
      description: 'Developed an end-to-end ML pipeline for customer segmentation that increased marketing campaign conversion rates by 25%.',
      techStack: ['Scikit-learn', 'Airflow', 'Docker', 'Python'],
      color: 'pink' as const,
      demoLink: '#',
      githubLink: '#'
    },
    {
      title: 'Data Quality Framework',
      description: 'Implemented a comprehensive data quality monitoring system with automated alerts and dashboards.',
      techStack: ['Great Expectations', 'Airflow', 'Grafana', 'Python'],
      color: 'blue' as const,
      demoLink: '#',
      githubLink: '#'
    },
    {
      title: 'IoT Analytics Platform',
      description: 'Built a scalable analytics platform for processing and analyzing data from thousands of IoT devices in real-time.',
      techStack: ['Kafka', 'Elasticsearch', 'Kibana', 'Python'],
      color: 'purple' as const,
      demoLink: '#',
      githubLink: '#'
    },
    {
      title: 'Sentiment Analysis Dashboard',
      description: 'Created an interactive dashboard for real-time sentiment analysis of customer feedback across multiple channels.',
      techStack: ['NLP', 'React', 'Flask', 'MongoDB'],
      color: 'pink' as const,
      demoLink: '#',
      githubLink: '#'
    }
  ];
  
  return (
    <div className="bg-black relative min-h-screen overflow-x-hidden">
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
            <div className="flex flex-wrap gap-4">
              <Button className="bg-neon-blue hover:bg-neon-blue/80 text-white">
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
          
          <div className="space-y-16">
            <div className="neo-blur border border-white/10 rounded-lg p-8 relative">
              <div className="absolute top-0 left-10 transform -translate-y-1/2 bg-neon-blue text-black px-4 py-1 rounded-full text-sm font-medium">
                Chapter 1
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-4">The Beginning</h3>
              <p className="text-gray-300 mb-6">
                My fascination with data began during my undergraduate studies in Computer Science. 
                I was captivated by how data could tell stories and reveal insights that weren't 
                immediately apparent. This curiosity led me to pursue a Master's in Data Science, 
                where I deepened my understanding of data engineering principles.
              </p>
              <p className="text-gray-300">
                During this time, I worked on several academic projects involving large datasets, 
                which taught me the challenges and rewards of managing and processing data effectively.
              </p>
            </div>
            
            <div className="neo-blur border border-white/10 rounded-lg p-8 relative">
              <div className="absolute top-0 left-10 transform -translate-y-1/2 bg-neon-purple text-black px-4 py-1 rounded-full text-sm font-medium">
                Chapter 2
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-4">Professional Growth</h3>
              <p className="text-gray-300 mb-6">
                After completing my Master's, I joined a tech startup as a Data Engineer, where I was 
                responsible for building data pipelines and ETL processes. This experience taught me 
                the practical aspects of data engineering and the importance of creating scalable and 
                maintainable systems.
              </p>
              <p className="text-gray-300">
                I then moved to a larger enterprise, where I worked on more complex data architectures 
                and gained experience with cloud technologies and distributed computing frameworks.
              </p>
            </div>
            
            <div className="neo-blur border border-white/10 rounded-lg p-8 relative">
              <div className="absolute top-0 left-10 transform -translate-y-1/2 bg-neon-pink text-black px-4 py-1 rounded-full text-sm font-medium">
                Chapter 3
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-4">Current Endeavors</h3>
              <p className="text-gray-300 mb-6">
                Today, I specialize in designing and implementing robust data solutions that help 
                businesses make data-driven decisions. I'm passionate about leveraging the latest 
                technologies and best practices to create efficient and reliable data systems.
              </p>
              <p className="text-gray-300">
                I continue to expand my knowledge and skills through continuous learning and 
                staying updated with the latest developments in the field of data engineering.
              </p>
            </div>
          </div>
        </div>
      </section>
      
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
            {projects.map((project, index) => (
              <ProjectCard 
                key={index}
                title={project.title}
                description={project.description}
                techStack={project.techStack}
                demoLink={project.demoLink}
                githubLink={project.githubLink}
                color={project.color}
              />
            ))}
          </div>
        </div>
      </section>
      
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
                  When I'm not immersed in data, you'll find me exploring new hiking trails, experimenting with 
                  cooking recipes, or diving into a good sci-fi novel. I believe in continuous learning and 
                  staying curious about the world around us.
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
                <a href="mailto:ajith.anna5599@gmail.com">
                  <Button className="w-full bg-neon-blue hover:bg-neon-blue/80 text-white py-6 text-lg">
                    <Mail className="w-4 h-4 mr-2" />
                    Send me an email
                  </Button>
                </a>
                
                <div className="mt-6 text-center">
                  <p className="text-gray-400 text-sm">
                    or download my resume
                  </p>
                  <Button variant="outline" className="mt-2 border-white/20 hover:border-white/50 text-white">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Download Resume
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
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
