
import React from 'react';

const DataViz2D: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <div className={`w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-900/20 to-purple-900/20 rounded-xl ${className || ''}`}>
      <div className="text-center">
        <div className="text-xl font-semibold text-blue-400 mb-2">Skills Visualization</div>
        <p className="text-gray-400 max-w-md mx-auto">
          An interactive visualization of my technical skills and their relationships.
        </p>
        <div className="mt-4 grid grid-cols-3 gap-2 max-w-xs mx-auto">
          {['Python', 'SQL', 'AWS', 'Spark', 'React', 'ML'].map((skill) => (
            <div 
              key={skill}
              className="bg-blue-900/30 px-3 py-1 rounded border border-blue-500/30 text-sm text-blue-300"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DataViz2D;
