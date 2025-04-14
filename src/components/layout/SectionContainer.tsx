
import React from 'react';

interface SectionContainerProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
  title: string;
  description?: string;
}

const SectionContainer: React.FC<SectionContainerProps> = ({ 
  id, 
  className = "", 
  children, 
  title, 
  description 
}) => {
  return (
    <section id={id} className={`py-20 relative ${className}`}>
      <div className="container mx-auto max-w-6xl px-4 z-10 relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4">{title}</h2>
          {description && (
            <p className="text-gray-400 max-w-2xl mx-auto">
              {description}
            </p>
          )}
        </div>
        {children}
      </div>
    </section>
  );
};

export default SectionContainer;
