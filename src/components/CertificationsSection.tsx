
import React from 'react';
import { Award, Calendar } from 'lucide-react';
import { usePortfolio } from '@/context/PortfolioContext';

const CertificationsSection: React.FC = () => {
  const { data } = usePortfolio();
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {data.certifications.map((cert) => (
        <div 
          key={cert.id}
          className="neo-blur border border-white/10 rounded-lg p-6 transition-all duration-300 hover:border-neon-blue/30 flex flex-col"
        >
          <div className="flex items-center mb-4">
            <Award className="w-6 h-6 text-neon-blue" />
            <h3 className="ml-2 text-lg font-semibold text-white">{cert.title}</h3>
          </div>
          {cert.provider && (
            <p className="text-gray-400 text-sm mb-2">{cert.provider}</p>
          )}
          <div className="mt-auto flex items-center text-gray-300 text-sm">
            <Calendar className="w-4 h-4 mr-2 text-neon-pink" />
            {cert.date}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CertificationsSection;
