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
  const { 
    data, 
    updateHero, 
    updateAbout, 
    updateContact, 
    updateJourney, 
    addExperience, 
    removeExperience, 
    updateExperience,
    addProject, 
    removeProject, 
    updateProjects,
    addSkillCategory, 
    removeSkillCategory, 
    updateSkills,
    updateCertifications 
  } = usePortfolio();
  
  const [editingSection, setEditingSection] = useState<string | null>(null);
  const [editingExperience, setEditingExperience] = useState<string | null>(null);
  const [editingProject, setEditingProject] = useState<string | null>(null);
  const [editingSkill, setEditingSkill] = useState<string | null>(null);
  const [editingExpData, setEditingExpData] = useState<ExperienceItem | null>(null);
  const [editingProjectData, setEditingProjectData] = useState<ProjectItem | null>(null);
  const [editingSkillData, setEditingSkillData] = useState<SkillCategory | null>(null);

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

    const handleEditExperience = (exp: ExperienceItem) => {
      setEditingExperience(exp.id);
      setEditingExpData({ ...exp });
    };

    const handleSaveExperience = () => {
      if (editingExpData) {
        const updatedExperiences = data.experience.map(exp => 
          exp.id === editingExpData.id ? editingExpData : exp
        );
        updateExperience(updatedExperiences);
        setEditingExperience(null);
        setEditingExpData(null);
      }
    };

    const handleCancelEdit = () => {
      setEditingExperience(null);
      setEditingExpData(null);
    };

    const handleResponsibilitiesChange = (value: string) => {
      if (editingExpData) {
        const responsibilities = value.split('\n').filter(r => r.trim());
        setEditingExpData({ ...editingExpData, responsibilities });
      }
    };

    const handleTechnologiesChange = (value: string) => {
      if (editingExpData) {
        const technologies = value.split(',').map(t => t.trim()).filter(t => t);
        setEditingExpData({ ...editingExpData, technologies });
      }
    };

    return (
      <SectionEditor title="Experience Section">
        <div className="space-y-6">
          {/* Existing experiences */}
          {data.experience.map((exp) => (
            <div key={exp.id} className="bg-gray-900/50 p-4 rounded-lg border border-white/5">
              {editingExperience === exp.id ? (
                // Edit mode
                <div className="space-y-3">
                  <Input
                    value={editingExpData?.company || ''}
                    onChange={(e) => setEditingExpData(prev => prev ? { ...prev, company: e.target.value } : null)}
                    placeholder="Company"
                    className="bg-gray-800 border-white/10 text-white"
                  />
                  <Input
                    value={editingExpData?.role || ''}
                    onChange={(e) => setEditingExpData(prev => prev ? { ...prev, role: e.target.value } : null)}
                    placeholder="Role"
                    className="bg-gray-800 border-white/10 text-white"
                  />
                  <Input
                    value={editingExpData?.period || ''}
                    onChange={(e) => setEditingExpData(prev => prev ? { ...prev, period: e.target.value } : null)}
                    placeholder="Period"
                    className="bg-gray-800 border-white/10 text-white"
                  />
                  <Textarea
                    value={editingExpData?.description || ''}
                    onChange={(e) => setEditingExpData(prev => prev ? { ...prev, description: e.target.value } : null)}
                    placeholder="Description"
                    className="bg-gray-800 border-white/10 text-white"
                  />
                  <Textarea
                    value={editingExpData?.responsibilities?.join('\n') || ''}
                    onChange={(e) => handleResponsibilitiesChange(e.target.value)}
                    placeholder="Responsibilities (one per line)"
                    className="bg-gray-800 border-white/10 text-white"
                  />
                  <Input
                    value={editingExpData?.technologies?.join(', ') || ''}
                    onChange={(e) => handleTechnologiesChange(e.target.value)}
                    placeholder="Technologies (comma separated)"
                    className="bg-gray-800 border-white/10 text-white"
                  />
                  <div className="flex gap-2">
                    <Button onClick={handleSaveExperience} className="bg-green-600 hover:bg-green-700">
                      <Save className="w-4 h-4 mr-2" />
                      Save
                    </Button>
                    <Button onClick={handleCancelEdit} variant="outline" className="border-white/20">
                      <X className="w-4 h-4 mr-2" />
                      Cancel
                    </Button>
                  </div>
                </div>
              ) : (
                // View mode
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <h4 className="text-white font-semibold">{exp.role} at {exp.company}</h4>
                    <p className="text-gray-400 text-sm">{exp.period}</p>
                    <p className="text-gray-300 text-sm mt-2">{exp.description}</p>
                    {exp.responsibilities && exp.responsibilities.length > 0 && (
                      <div className="mt-2">
                        <p className="text-gray-400 text-xs">Responsibilities:</p>
                        <ul className="text-gray-300 text-xs ml-4">
                          {exp.responsibilities.slice(0, 2).map((resp, idx) => (
                            <li key={idx}>• {resp}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                  <div className="flex gap-2">
                    <Button
                      onClick={() => handleEditExperience(exp)}
                      variant="outline"
                      size="sm"
                      className="border-white/20"
                    >
                      <Edit3 className="w-4 h-4" />
                    </Button>
                    <Button
                      onClick={() => removeExperience(exp.id)}
                      variant="destructive"
                      size="sm"
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              )}
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

  // Projects Section Editor
  const ProjectsEditor = () => {
    const [newProject, setNewProject] = useState<Partial<ProjectItem>>({
      title: '',
      description: '',
      longDescription: '',
      techStack: [],
      demoLink: '',
      githubLink: '',
      color: 'blue',
      challenges: [],
      solutions: [],
      outcomes: []
    });

    const handleAddProject = () => {
      if (newProject.title && newProject.description) {
        addProject({
          id: Date.now().toString(),
          title: newProject.title,
          description: newProject.description,
          longDescription: newProject.longDescription || '',
          techStack: newProject.techStack || [],
          demoLink: newProject.demoLink,
          githubLink: newProject.githubLink,
          color: newProject.color || 'blue',
          challenges: newProject.challenges || [],
          solutions: newProject.solutions || [],
          outcomes: newProject.outcomes || []
        });
        setNewProject({
          title: '',
          description: '',
          longDescription: '',
          techStack: [],
          demoLink: '',
          githubLink: '',
          color: 'blue',
          challenges: [],
          solutions: [],
          outcomes: []
        });
      }
    };

    const handleEditProject = (project: ProjectItem) => {
      setEditingProject(project.id);
      setEditingProjectData({ ...project });
    };

    const handleSaveProject = () => {
      if (editingProjectData) {
        const updatedProjects = data.projects.map(proj => 
          proj.id === editingProjectData.id ? editingProjectData : proj
        );
        updateProjects(updatedProjects);
        setEditingProject(null);
        setEditingProjectData(null);
      }
    };

    const handleTechStackChange = (value: string, isNew = false) => {
      const techStack = value.split(',').map(t => t.trim()).filter(t => t);
      if (isNew) {
        setNewProject({ ...newProject, techStack });
      } else if (editingProjectData) {
        setEditingProjectData({ ...editingProjectData, techStack });
      }
    };

    return (
      <SectionEditor title="Projects Section">
        <div className="space-y-6">
          {/* Existing projects */}
          {data.projects.map((project) => (
            <div key={project.id} className="bg-gray-900/50 p-4 rounded-lg border border-white/5">
              {editingProject === project.id ? (
                // Edit mode
                <div className="space-y-3">
                  <Input
                    value={editingProjectData?.title || ''}
                    onChange={(e) => setEditingProjectData(prev => prev ? { ...prev, title: e.target.value } : null)}
                    placeholder="Project Title"
                    className="bg-gray-800 border-white/10 text-white"
                  />
                  <Textarea
                    value={editingProjectData?.description || ''}
                    onChange={(e) => setEditingProjectData(prev => prev ? { ...prev, description: e.target.value } : null)}
                    placeholder="Short Description"
                    className="bg-gray-800 border-white/10 text-white"
                  />
                  <Textarea
                    value={editingProjectData?.longDescription || ''}
                    onChange={(e) => setEditingProjectData(prev => prev ? { ...prev, longDescription: e.target.value } : null)}
                    placeholder="Long Description"
                    className="bg-gray-800 border-white/10 text-white"
                  />
                  <Input
                    value={editingProjectData?.techStack?.join(', ') || ''}
                    onChange={(e) => handleTechStackChange(e.target.value)}
                    placeholder="Tech Stack (comma separated)"
                    className="bg-gray-800 border-white/10 text-white"
                  />
                  <Input
                    value={editingProjectData?.demoLink || ''}
                    onChange={(e) => setEditingProjectData(prev => prev ? { ...prev, demoLink: e.target.value } : null)}
                    placeholder="Demo Link"
                    className="bg-gray-800 border-white/10 text-white"
                  />
                  <Input
                    value={editingProjectData?.githubLink || ''}
                    onChange={(e) => setEditingProjectData(prev => prev ? { ...prev, githubLink: e.target.value } : null)}
                    placeholder="GitHub Link"
                    className="bg-gray-800 border-white/10 text-white"
                  />
                  <div className="flex gap-2">
                    <Button onClick={handleSaveProject} className="bg-green-600 hover:bg-green-700">
                      <Save className="w-4 h-4 mr-2" />
                      Save
                    </Button>
                    <Button onClick={() => { setEditingProject(null); setEditingProjectData(null); }} variant="outline" className="border-white/20">
                      <X className="w-4 h-4 mr-2" />
                      Cancel
                    </Button>
                  </div>
                </div>
              ) : (
                // View mode
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <h4 className="text-white font-semibold">{project.title}</h4>
                    <p className="text-gray-300 text-sm mt-1">{project.description}</p>
                    <div className="flex flex-wrap gap-1 mt-2">
                      {project.techStack.slice(0, 3).map((tech, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button
                      onClick={() => handleEditProject(project)}
                      variant="outline"
                      size="sm"
                      className="border-white/20"
                    >
                      <Edit3 className="w-4 h-4" />
                    </Button>
                    <Button
                      onClick={() => removeProject(project.id)}
                      variant="destructive"
                      size="sm"
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              )}
            </div>
          ))}

          {/* Add new project */}
          <div className="bg-gray-900/50 p-4 rounded-lg border border-white/5">
            <h4 className="text-white font-semibold mb-4">Add New Project</h4>
            <div className="space-y-3">
              <Input
                value={newProject.title || ''}
                onChange={(e) => setNewProject({ ...newProject, title: e.target.value })}
                placeholder="Project Title"
                className="bg-gray-800 border-white/10 text-white"
              />
              <Textarea
                value={newProject.description || ''}
                onChange={(e) => setNewProject({ ...newProject, description: e.target.value })}
                placeholder="Short Description"
                className="bg-gray-800 border-white/10 text-white"
              />
              <Input
                value={newProject.techStack?.join(', ') || ''}
                onChange={(e) => handleTechStackChange(e.target.value, true)}
                placeholder="Tech Stack (comma separated)"
                className="bg-gray-800 border-white/10 text-white"
              />
              <Button onClick={handleAddProject} className="bg-blue-600 hover:bg-blue-700">
                <Plus className="w-4 h-4 mr-2" />
                Add Project
              </Button>
            </div>
          </div>
        </div>
      </SectionEditor>
    );
  };

  // Skills Section Editor
  const SkillsEditor = () => {
    const [newSkillCategory, setNewSkillCategory] = useState<Partial<SkillCategory>>({
      name: '',
      skills: []
    });
    const [newSkillName, setNewSkillName] = useState('');
    const [newSkillLevel, setNewSkillLevel] = useState(50);

    const handleAddSkillCategory = () => {
      if (newSkillCategory.name) {
        addSkillCategory({
          id: Date.now().toString(),
          name: newSkillCategory.name,
          skills: newSkillCategory.skills || []
        });
        setNewSkillCategory({ name: '', skills: [] });
      }
    };

    const handleEditSkill = (category: SkillCategory) => {
      setEditingSkill(category.id);
      setEditingSkillData({ ...category });
    };

    const handleSaveSkill = () => {
      if (editingSkillData) {
        const updatedSkills = data.skills.map(skill => 
          skill.id === editingSkillData.id ? editingSkillData : skill
        );
        updateSkills(updatedSkills);
        setEditingSkill(null);
        setEditingSkillData(null);
      }
    };

    const addSkillToNewCategory = () => {
      if (newSkillName) {
        const newSkill = { name: newSkillName, level: newSkillLevel };
        setNewSkillCategory({
          ...newSkillCategory,
          skills: [...(newSkillCategory.skills || []), newSkill]
        });
        setNewSkillName('');
        setNewSkillLevel(50);
      }
    };

    return (
      <SectionEditor title="Skills Section">
        <div className="space-y-6">
          {/* Existing skill categories */}
          {data.skills.map((category) => (
            <div key={category.id} className="bg-gray-900/50 p-4 rounded-lg border border-white/5">
              {editingSkill === category.id ? (
                // Edit mode
                <div className="space-y-3">
                  <Input
                    value={editingSkillData?.name || ''}
                    onChange={(e) => setEditingSkillData(prev => prev ? { ...prev, name: e.target.value } : null)}
                    placeholder="Category Name"
                    className="bg-gray-800 border-white/10 text-white"
                  />
                  <div className="space-y-2">
                    {editingSkillData?.skills.map((skill, idx) => (
                      <div key={idx} className="flex gap-2 items-center">
                        <Input
                          value={skill.name}
                          onChange={(e) => {
                            if (editingSkillData) {
                              const updatedSkills = editingSkillData.skills.map((s, i) => 
                                i === idx ? { ...s, name: e.target.value } : s
                              );
                              setEditingSkillData({ ...editingSkillData, skills: updatedSkills });
                            }
                          }}
                          placeholder="Skill Name"
                          className="bg-gray-800 border-white/10 text-white"
                        />
                        <Input
                          type="number"
                          min="0"
                          max="100"
                          value={skill.level}
                          onChange={(e) => {
                            if (editingSkillData) {
                              const updatedSkills = editingSkillData.skills.map((s, i) => 
                                i === idx ? { ...s, level: parseInt(e.target.value) } : s
                              );
                              setEditingSkillData({ ...editingSkillData, skills: updatedSkills });
                            }
                          }}
                          placeholder="Level"
                          className="bg-gray-800 border-white/10 text-white w-20"
                        />
                        <Button
                          onClick={() => {
                            if (editingSkillData) {
                              const updatedSkills = editingSkillData.skills.filter((_, i) => i !== idx);
                              setEditingSkillData({ ...editingSkillData, skills: updatedSkills });
                            }
                          }}
                          variant="destructive"
                          size="sm"
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <Button onClick={handleSaveSkill} className="bg-green-600 hover:bg-green-700">
                      <Save className="w-4 h-4 mr-2" />
                      Save
                    </Button>
                    <Button onClick={() => { setEditingSkill(null); setEditingSkillData(null); }} variant="outline" className="border-white/20">
                      <X className="w-4 h-4 mr-2" />
                      Cancel
                    </Button>
                  </div>
                </div>
              ) : (
                // View mode
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <h4 className="text-white font-semibold">{category.name}</h4>
                    <div className="flex flex-wrap gap-1 mt-2">
                      {category.skills.slice(0, 3).map((skill, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {skill.name} ({skill.level}%)
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button
                      onClick={() => handleEditSkill(category)}
                      variant="outline"
                      size="sm"
                      className="border-white/20"
                    >
                      <Edit3 className="w-4 h-4" />
                    </Button>
                    <Button
                      onClick={() => removeSkillCategory(category.id)}
                      variant="destructive"
                      size="sm"
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              )}
            </div>
          ))}

          {/* Add new skill category */}
          <div className="bg-gray-900/50 p-4 rounded-lg border border-white/5">
            <h4 className="text-white font-semibold mb-4">Add New Skill Category</h4>
            <div className="space-y-3">
              <Input
                value={newSkillCategory.name || ''}
                onChange={(e) => setNewSkillCategory({ ...newSkillCategory, name: e.target.value })}
                placeholder="Category Name (e.g., Programming Languages)"
                className="bg-gray-800 border-white/10 text-white"
              />
              
              <div className="flex gap-2">
                <Input
                  value={newSkillName}
                  onChange={(e) => setNewSkillName(e.target.value)}
                  placeholder="Skill Name"
                  className="bg-gray-800 border-white/10 text-white"
                />
                <Input
                  type="number"
                  min="0"
                  max="100"
                  value={newSkillLevel}
                  onChange={(e) => setNewSkillLevel(parseInt(e.target.value))}
                  placeholder="Level"
                  className="bg-gray-800 border-white/10 text-white w-20"
                />
                <Button onClick={addSkillToNewCategory} variant="outline" className="border-white/20">
                  <Plus className="w-4 h-4" />
                </Button>
              </div>

              {newSkillCategory.skills && newSkillCategory.skills.length > 0 && (
                <div className="flex flex-wrap gap-1">
                  {newSkillCategory.skills.map((skill, idx) => (
                    <Badge key={idx} variant="outline" className="text-xs">
                      {skill.name} ({skill.level}%)
                    </Badge>
                  ))}
                </div>
              )}

              <Button onClick={handleAddSkillCategory} className="bg-blue-600 hover:bg-blue-700">
                <Plus className="w-4 h-4 mr-2" />
                Add Skill Category
              </Button>
            </div>
          </div>
        </div>
      </SectionEditor>
    );
  };

  // Contact & Journey Editors
  const ContactEditor = () => {
    const [contactData, setContactData] = useState(data.contact);

    const handleSave = () => {
      updateContact(contactData);
      setEditingSection(null);
    };

    return (
      <SectionEditor title="Contact Section">
        {editingSection === 'contact' ? (
          <div className="space-y-4">
            <Input
              value={contactData.email}
              onChange={(e) => setContactData({ ...contactData, email: e.target.value })}
              placeholder="Email"
              className="bg-gray-900 border-white/10 text-white"
            />
            <Input
              value={contactData.linkedin}
              onChange={(e) => setContactData({ ...contactData, linkedin: e.target.value })}
              placeholder="LinkedIn URL"
              className="bg-gray-900 border-white/10 text-white"
            />
            <Input
              value={contactData.github}
              onChange={(e) => setContactData({ ...contactData, github: e.target.value })}
              placeholder="GitHub URL"
              className="bg-gray-900 border-white/10 text-white"
            />
            <Textarea
              value={contactData.paragraph}
              onChange={(e) => setContactData({ ...contactData, paragraph: e.target.value })}
              placeholder="Contact Description"
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
            <p className="text-gray-300"><strong>Email:</strong> {data.contact.email}</p>
            <p className="text-gray-300"><strong>LinkedIn:</strong> {data.contact.linkedin}</p>
            <p className="text-gray-300"><strong>GitHub:</strong> {data.contact.github}</p>
            <Button onClick={() => setEditingSection('contact')} variant="outline" className="border-white/20 mt-4">
              <Edit3 className="w-4 h-4 mr-2" />
              Edit
            </Button>
          </div>
        )}
      </SectionEditor>
    );
  };

  const JourneyEditor = () => {
    const [journeyData, setJourneyData] = useState(data.journey);

    const handleSave = () => {
      updateJourney(journeyData);
      setEditingSection(null);
    };

    return (
      <SectionEditor title="Journey Section">
        {editingSection === 'journey' ? (
          <div className="space-y-4">
            <Input
              value={journeyData.title}
              onChange={(e) => setJourneyData({ ...journeyData, title: e.target.value })}
              placeholder="Journey Title"
              className="bg-gray-900 border-white/10 text-white"
            />
            <Input
              value={journeyData.description}
              onChange={(e) => setJourneyData({ ...journeyData, description: e.target.value })}
              placeholder="Journey Description"
              className="bg-gray-900 border-white/10 text-white"
            />
            <Textarea
              value={journeyData.paragraph1}
              onChange={(e) => setJourneyData({ ...journeyData, paragraph1: e.target.value })}
              placeholder="Journey Paragraph 1"
              className="bg-gray-900 border-white/10 text-white"
            />
            <Textarea
              value={journeyData.paragraph2}
              onChange={(e) => setJourneyData({ ...journeyData, paragraph2: e.target.value })}
              placeholder="Journey Paragraph 2"
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
            <p className="text-gray-300"><strong>Title:</strong> {data.journey.title}</p>
            <p className="text-gray-300"><strong>Description:</strong> {data.journey.description}</p>
            <Button onClick={() => setEditingSection('journey')} variant="outline" className="border-white/20 mt-4">
              <Edit3 className="w-4 h-4 mr-2" />
              Edit
            </Button>
          </div>
        )}
      </SectionEditor>
    );
  };

  return (
    <div className="space-y-8">
      <HeroEditor />
      <AboutEditor />
      <ExperienceEditor />
      <ProjectsEditor />
      <SkillsEditor />
      <ContactEditor />
      <JourneyEditor />
    </div>
  );
};

export default AdminContentEditor;
