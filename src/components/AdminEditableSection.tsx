
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Edit3, Save, X } from 'lucide-react';

interface AdminEditableSectionProps {
  title: string;
  description: string;
  isPreviewMode: boolean;
  onContentChange: () => void;
}

const AdminEditableSection: React.FC<AdminEditableSectionProps> = ({
  title,
  description,
  isPreviewMode,
  onContentChange
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [content, setContent] = useState(getSampleContent(title));
  const [tempContent, setTempContent] = useState(content);

  function getSampleContent(sectionTitle: string): string {
    switch (sectionTitle) {
      case 'Hero Section':
        return JSON.stringify({
          name: 'Ajith Annavarapu',
          title: 'AI Data Engineer',
          subtitle: 'Turning data into intelligent solutions',
          description: 'I specialize in building scalable data pipelines, implementing AI-driven analytics, and creating intelligent systems that drive business value.',
          openTo: 'Open to new opportunities and collaborations'
        }, null, 2);
      case 'About Section':
        return JSON.stringify({
          bio: 'Passionate AI Data Engineer with expertise in machine learning, data engineering, and cloud technologies. I love turning complex data into actionable insights.',
          location: 'Irving, TX',
          education: 'M.S. in Data Science',
          email: 'ajith.anna5599@gmail.com'
        }, null, 2);
      case 'Experience Section':
        return JSON.stringify({
          currentRole: 'AI Data Engineer',
          company: 'Infokeys',
          period: 'Apr 2024–Present',
          responsibilities: [
            'Led migration of ETL workflows to Databricks',
            'Developed data governance frameworks',
            'Implemented AI-driven monitoring systems'
          ]
        }, null, 2);
      default:
        return JSON.stringify({
          title: sectionTitle,
          content: 'Edit this section to update your portfolio content.'
        }, null, 2);
    }
  }

  const handleEdit = () => {
    setIsEditing(true);
    setTempContent(content);
  };

  const handleSave = () => {
    setContent(tempContent);
    setIsEditing(false);
    onContentChange();
  };

  const handleCancel = () => {
    setTempContent(content);
    setIsEditing(false);
  };

  if (isPreviewMode) {
    return (
      <div className="bg-gray-800/50 border border-white/10 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
        <p className="text-gray-400 text-sm mb-4">{description}</p>
        <div className="bg-gray-900/50 rounded-lg p-4 border border-white/5">
          <pre className="text-sm text-gray-300 whitespace-pre-wrap overflow-auto">
            {content}
          </pre>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-800/50 border border-white/10 rounded-lg p-6">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="text-lg font-semibold text-white">{title}</h3>
          <p className="text-gray-400 text-sm">{description}</p>
        </div>
        
        {!isEditing && (
          <Button
            onClick={handleEdit}
            size="sm"
            variant="outline"
            className="border-white/20 text-white hover:bg-white/10"
          >
            <Edit3 className="w-4 h-4 mr-2" />
            Edit
          </Button>
        )}
      </div>

      {isEditing ? (
        <div className="space-y-4">
          <textarea
            value={tempContent}
            onChange={(e) => setTempContent(e.target.value)}
            className="w-full h-64 bg-gray-900 border border-white/10 rounded-lg p-4 text-white font-mono text-sm resize-none focus:outline-none focus:border-neon-blue"
            placeholder="Edit content as JSON..."
          />
          <div className="flex gap-2">
            <Button
              onClick={handleSave}
              size="sm"
              className="bg-green-600 hover:bg-green-700 text-white"
            >
              <Save className="w-4 h-4 mr-2" />
              Save Changes
            </Button>
            <Button
              onClick={handleCancel}
              size="sm"
              variant="outline"
              className="border-white/20 text-white hover:bg-white/10"
            >
              <X className="w-4 h-4 mr-2" />
              Cancel
            </Button>
          </div>
        </div>
      ) : (
        <div className="bg-gray-900/50 rounded-lg p-4 border border-white/5">
          <pre className="text-sm text-gray-300 whitespace-pre-wrap overflow-auto max-h-48">
            {content}
          </pre>
        </div>
      )}
    </div>
  );
};

export default AdminEditableSection;
