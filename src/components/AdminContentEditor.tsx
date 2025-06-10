import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Edit3, Save, X, Plus, Trash2 } from 'lucide-react';
import { usePortfolio, ExperienceItem, ProjectItem, SkillCategory, CertificationItem } from '@/context/PortfolioContext';

interface SectionEditorProps {
  title: string;
  children: React.ReactNode;
}

const SectionEditor: React.FC<SectionEditorProps> = ({ title, children }) => {
  return (
    <Card className="bg-gray-800/50 border border-white/10">
      <CardHeader>
        <CardTitle className="text-white">{title}</CardTitle>
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  );
};

const AdminContentEditor: React.FC = () => {
  const { data, updateHero, updateAbout, updateContact, updateJourney, addExperience, removeExperience, addProject, removeProject, addSkillCategory, removeSkillCategory, updateCertifications } = usePortfolio();
  const [editingSection, setEditingSection] = useState<string | null>(null);

  // Hero Section Editor
  const HeroEditor = () => {
    const [heroData, setHeroData] = useState(data.hero);

    const handleSave = () => {
      updateHero(heroData);
      setEditingSection(null);
    };

    return (
      <SectionEditor title="Hero Section">
        {editingSection === 'hero' ? (
          <div className="space-y-4">
            <Input
              value={heroData.name}
              onChange={(e) => setHeroData({ ...heroData, name: e.target.value })}
              placeholder="Name"
              className="bg-gray-900 border-white/10 text-white"
            />
            <Input
              value={heroData.title}
              onChange={(e) => setHeroData({ ...heroData, title: e.target.value })}
              placeholder="Title"
              className="bg-gray-900 border-white/10 text-white"
            />
            <Input
              value={heroData.subtitle}
              onChange={(e) => setHeroData({ ...heroData, subtitle: e.target.value })}
              placeholder="Subtitle"
              className="bg-gray-900 border-white/10 text-white"
            />
            <Textarea
              value={heroData.description}
              onChange={(e) => setHeroData({ ...heroData, description: e.target.value })}
              placeholder="Description"
              className="bg-gray-900 border-white/10 text-white"
            />
            <Input
              value={heroData.openTo}
              onChange={(e) => setHeroData({ ...heroData, openTo: e.target.value })}
              placeholder="Open To"
              className="bg-gray-900 border-white/10 text-white"
            />
            <div className="flex gap-2">
              <Button onClick={handleSave} className="bg-green-600 hover:bg-green-700">
                <Save className="w-4 h-4 mr-2" />
                Save
              </Button>
              <Button onClick={() => setEditingSection(null)} variant="outline" className="border-white/20">
                <X className="w-4 h-4 mr-2" />
                Cancel
              </Button>
            </div>
          </div>
        ) : (
          <div className="space-y-2">
            <p className="text-gray-300"><strong>Name:</strong> {data.hero.name}</p>
            <p className="text-gray-300"><strong>Title:</strong> {data.hero.title}</p>
            <p className="text-gray-300"><strong>Subtitle:</strong> {data.hero.subtitle}</p>
            <p className="text-gray-300"><strong>Description:</strong> {data.hero.description}</p>
            <p className="text-gray-300"><strong>Open To:</strong> {data.hero.openTo}</p>
            <Button onClick={() => setEditingSection('hero')} variant="outline" className="border-white/20 mt-4">
              <Edit3 className="w-4 h-4 mr-2" />
              Edit
            </Button>
          </div>
        )}
      </SectionEditor>
    );
  };

  // About Section Editor
  const AboutEditor = () => {
    const [aboutData, setAboutData] = useState(data.about);

    const handleSave = () => {
      updateAbout(aboutData);
      setEditingSection(null);
    };

    return (
      <SectionEditor title="About Section">
        {editingSection === 'about' ? (
          <div className="space-y-4">
            <Input
              value={aboutData.name}
              onChange={(e) => setAboutData({ ...aboutData, name: e.target.value })}
              placeholder="Name"
              className="bg-gray-900 border-white/10 text-white"
            />
            <Input
              value={aboutData.location}
              onChange={(e) => setAboutData({ ...aboutData, location: e.target.value })}
              placeholder="Location"
              className="bg-gray-900 border-white/10 text-white"
            />
            <Input
              value={aboutData.education}
              onChange={(e) => setAboutData({ ...aboutData, education: e.target.value })}
              placeholder="Education"
              className="bg-gray-900 border-white/10 text-white"
            />
            <Input
              value={aboutData.email}
              onChange={(e) => setAboutData({ ...aboutData, email: e.target.value })}
              placeholder="Email"
              className="bg-gray-900 border-white/10 text-white"
            />
            <Textarea
              value={aboutData.paragraph1}
              onChange={(e) => setAboutData({ ...aboutData, paragraph1: e.target.value })}
              placeholder="Paragraph 1"
              className="bg-gray-900 border-white/10 text-white"
            />
            <Textarea
              value={aboutData.paragraph2}
              onChange={(e) => setAboutData({ ...aboutData, paragraph2: e.target.value })}
              placeholder="Paragraph 2"
              className="bg-gray-900 border-white/10 text-white"
            />
            <Textarea
              value={aboutData.paragraph3}
              onChange={(e) => setAboutData({ ...aboutData, paragraph3: e.target.value })}
              placeholder="Paragraph 3"
              className="bg-gray-900 border-white/10 text-white"
            />
            <div className="flex gap-2">
              <Button onClick={handleSave} className="bg-green-600 hover:bg-green-700">
                <Save className="w-4 h-4 mr-2" />
                Save
              </Button>
              <Button onClick={() => setEditingSection(null)} variant="outline" className="border-white/20">
                <X className="w-4 h-4 mr-2" />
                Cancel
              </Button>
            </div>
          </div>
        ) : (
          <div className="space-y-2">
            <p className="text-gray-300"><strong>Name:</strong> {data.about.name}</p>
            <p className="text-gray-300"><strong>Location:</strong> {data.about.location}</p>
            <p className="text-gray-300"><strong>Education:</strong> {data.about.education}</p>
            <p className="text-gray-300"><strong>Email:</strong> {data.about.email}</p>
            <Button onClick={() => setEditingSection('about')} variant="outline" className="border-white/20 mt-4">
              <Edit3 className="w-4 h-4 mr-2" />
              Edit
            </Button>
          </div>
        )}
      </SectionEditor>
    );
  };

  // Experience Section Editor
  const ExperienceEditor = () => {
    const [newExperience, setNewExperience] = useState<Partial<ExperienceItem>>({
      company: '',
      role: '',
      period: '',
      description: '',
      responsibilities: [],
      technologies: []
    });

    const handleAddExperience = () => {
      if (newExperience.company && newExperience.role) {
        addExperience({
          id: Date.now().toString(),
          company: newExperience.company,
          role: newExperience.role,
          period: newExperience.period || '',
          description: newExperience.description || '',
          responsibilities: newExperience.responsibilities || [],
          technologies: newExperience.technologies || []
        });
        setNewExperience({
          company: '',
          role: '',
          period: '',
          description: '',
          responsibilities: [],
          technologies: []
        });
      }
    };

    return (
      <SectionEditor title="Experience Section">
        <div className="space-y-6">
          {/* Existing experiences */}
          {data.experience.map((exp) => (
            <div key={exp.id} className="bg-gray-900/50 p-4 rounded-lg border border-white/5">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="text-white font-semibold">{exp.role} at {exp.company}</h4>
                  <p className="text-gray-400 text-sm">{exp.period}</p>
                  <p className="text-gray-300 text-sm mt-2">{exp.description}</p>
                </div>
                <Button
                  onClick={() => removeExperience(exp.id)}
                  variant="destructive"
                  size="sm"
                >
                  <Trash2 className="w-4 h-4" />
                </Button>
              </div>
            </div>
          ))}

          {/* Add new experience */}
          <div className="bg-gray-900/50 p-4 rounded-lg border border-white/5">
            <h4 className="text-white font-semibold mb-4">Add New Experience</h4>
            <div className="space-y-3">
              <Input
                value={newExperience.company || ''}
                onChange={(e) => setNewExperience({ ...newExperience, company: e.target.value })}
                placeholder="Company"
                className="bg-gray-800 border-white/10 text-white"
              />
              <Input
                value={newExperience.role || ''}
                onChange={(e) => setNewExperience({ ...newExperience, role: e.target.value })}
                placeholder="Role"
                className="bg-gray-800 border-white/10 text-white"
              />
              <Input
                value={newExperience.period || ''}
                onChange={(e) => setNewExperience({ ...newExperience, period: e.target.value })}
                placeholder="Period (e.g., Jan 2020 - Present)"
                className="bg-gray-800 border-white/10 text-white"
              />
              <Textarea
                value={newExperience.description || ''}
                onChange={(e) => setNewExperience({ ...newExperience, description: e.target.value })}
                placeholder="Description"
                className="bg-gray-800 border-white/10 text-white"
              />
              <Button onClick={handleAddExperience} className="bg-blue-600 hover:bg-blue-700">
                <Plus className="w-4 h-4 mr-2" />
                Add Experience
              </Button>
            </div>
          </div>
        </div>
      </SectionEditor>
    );
  };

  return (
    <div className="space-y-8">
      <HeroEditor />
      <AboutEditor />
      <ExperienceEditor />
    </div>
  );
};

export default AdminContentEditor;
