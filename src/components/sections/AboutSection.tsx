
import React from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';
import SectionContainer from '../layout/SectionContainer';

const AboutSection: React.FC = () => {
  return (
    <SectionContainer 
      id="about" 
      title="About Me"
      description="Beyond the code and data, here's a bit more about who I am."
    >
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
    </SectionContainer>
  );
};

export default AboutSection;
