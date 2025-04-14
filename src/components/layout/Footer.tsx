
import React from 'react';
import { useTranslation } from '@/context/TranslationContext';

const Footer: React.FC = () => {
  const { t } = useTranslation();
  
  return (
    <footer className="py-6 border-t border-white/10">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-white font-mono text-xl mb-4 md:mb-0">
            <span className="text-gradient font-bold">AA</span>
            <span className="text-neon-blue">.</span>
          </div>
          
          <div className="text-gray-400 text-sm text-center md:text-right">
            <p>{t('footer.rights')}</p>
            <p className="mt-1">
              {t('footer.builtWith')}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
