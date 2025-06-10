
import React from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';
import ContactForm from '@/components/ContactForm';
import SectionContainer from '../layout/SectionContainer';
import { useTranslation } from '@/context/TranslationContext';
import { usePortfolio } from '@/context/PortfolioContext';

const ContactSection: React.FC = () => {
  const { t } = useTranslation();
  const { data } = usePortfolio();
  
  return (
    <SectionContainer 
      id="contact" 
      title={t('contact.title')}
      description={t('contact.description')}
    >
      <div className="neo-blur border border-white/10 rounded-lg p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-bold text-white mb-4">{t('contact.title')}</h3>
            <p className="text-gray-300 mb-6">
              {data.contact.paragraph}
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <Mail className="w-5 h-5 text-neon-blue mt-1 mr-3" />
                <div>
                  <h4 className="text-white font-medium">{t('contact.email')}</h4>
                  <a href={`mailto:${data.contact.email}`} className="text-gray-400 hover:text-neon-blue">
                    {data.contact.email}
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <Linkedin className="w-5 h-5 text-neon-blue mt-1 mr-3" />
                <div>
                  <h4 className="text-white font-medium">{t('contact.linkedin')}</h4>
                  <a 
                    href={data.contact.linkedin} 
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
                  <h4 className="text-white font-medium">{t('contact.github')}</h4>
                  <a 
                    href={data.contact.github} 
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
    </SectionContainer>
  );
};

export default ContactSection;
