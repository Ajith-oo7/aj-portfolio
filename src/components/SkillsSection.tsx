
import React from 'react';
import { 
  Database, 
  Code, 
  Server, 
  BarChart4, 
  Cloud,
  Workflow,
  Bot,
  Braces,
  GitBranch,
  Check,
  Star,
  ChevronRight
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Progress } from "@/components/ui/progress";
import { HoverCard, HoverCardTrigger, HoverCardContent } from "@/components/ui/hover-card";
import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from "@/components/ui/tooltip";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const skills = [
  {
    category: 'Languages & Databases',
    icon: <Code className="w-6 h-6 text-neon-blue" />,
    skills: ['Python', 'SQL (Postgres, MS-SQL, MySQL)'],
    proficiency: [90, 85]
  },
  {
    category: 'Cloud & DevOps',
    icon: <Cloud className="w-6 h-6 text-neon-purple" />,
    skills: ['AWS (Glue, Lambda, S3, EC2, EMR, ECR)', 'API Gateway', 'KMS', 'SageMaker', 'QuickSight', 'CloudWatch', 'IAM', 'DMS', 'Redshift', 'Docker', 'Git', 'CI/CD'],
    proficiency: [88, 85, 82, 87, 80, 89, 90, 75, 82, 88, 92, 84]
  },
  {
    category: 'Big Data & ETL',
    icon: <Database className="w-6 h-6 text-neon-pink" />,
    skills: ['Snowflake', 'Databricks', 'PySpark', 'Informatica', 'Delta Lake', 'Snowpipe', 'Unity Catalog', 'Z-Ordering', 'Auto-Optimize'],
    proficiency: [92, 89, 87, 80, 85, 82, 78, 75, 76]
  },
  {
    category: 'Machine Learning',
    icon: <Bot className="w-6 h-6 text-neon-orange" />,
    skills: ['Decision Trees', 'K-means', 'SVM', 'Random Forest', 'Linear Regression', 'XGBoost', 'Generative AI', 'LLMs', 'TensorFlow', 'PyTorch', 'Keras'],
    proficiency: [88, 87, 85, 90, 92, 88, 85, 82, 79, 78, 80]
  },
  {
    category: 'Data Analysis & Visualization',
    icon: <BarChart4 className="w-6 h-6 text-neon-blue" />,
    skills: ['Tableau', 'Matplotlib', 'Plotly', 'Seaborn', 'Excel', 'A/B Testing', 'Prompt Engineering', 'RAG'],
    proficiency: [91, 88, 85, 87, 94, 89, 86, 83]
  },
  {
    category: 'Data Science Libraries',
    icon: <Braces className="w-6 h-6 text-neon-purple" />,
    skills: ['Scikit-learn', 'NumPy', 'Pandas', 'SciPy', 'Langchain', 'Streamlit'],
    proficiency: [90, 92, 93, 88, 82, 85]
  },
  {
    category: 'Workflow Orchestration',
    icon: <Workflow className="w-6 h-6 text-neon-pink" />,
    skills: ['Jenkins', 'n8n', 'Hadoop', 'Apache Airflow'],
    proficiency: [85, 78, 82, 89]
  },
  {
    category: 'Version Control',
    icon: <GitBranch className="w-6 h-6 text-neon-orange" />,
    skills: ['Git', 'AWS Cloud Source Repositories'],
    proficiency: [94, 85]
  }
];

// Flatten skills for consistent display
const normalizeSkillLength = () => {
  const maxSkills = Math.max(...skills.map(category => category.skills.length));
  return skills.map(category => {
    // Clone to avoid modifying original
    const normalizedSkills = [...category.skills];
    // Fill with empty strings if needed
    while (normalizedSkills.length < maxSkills) {
      normalizedSkills.push("");
    }
    return {
      ...category,
      normalizedSkills
    };
  });
};

const normalizedSkills = normalizeSkillLength();

const SkillsSection: React.FC = () => {
  return (
    <div className="space-y-12">
      {/* OPTION 1: Badge-based Design (Current) */}
      <div className="space-y-4">
        <h2 className="text-xl font-bold text-white mb-4">Option 1: Badge-based Design</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((category, idx) => (
            <div 
              key={idx}
              className="neo-blur border border-white/10 rounded-lg p-6 transition-all duration-300 hover:border-neon-blue/30 hover:neon-border flex flex-col h-full"
            >
              <div className="flex items-center mb-4">
                {category.icon}
                <h3 className="ml-2 text-lg font-semibold text-white">{category.category}</h3>
              </div>
              <Separator className="mb-4 bg-white/10" />
              <div className="flex flex-wrap gap-2 flex-grow">
                {category.skills.map((skill, skillIdx) => (
                  <Badge 
                    key={skillIdx} 
                    variant="outline" 
                    className="bg-black/50 text-gray-300 border-white/10 py-1 px-2 text-xs"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* OPTION 2: Tooltip-enhanced Badges */}
      <div className="space-y-4">
        <h2 className="text-xl font-bold text-white mb-4">Option 2: Tooltip-enhanced Badges</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((category, idx) => (
            <Card key={idx} className="neo-blur border border-white/10 hover:border-neon-purple/30 hover:neon-border-purple">
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center text-lg">
                  {category.icon}
                  <span className="ml-2">{category.category}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIdx) => (
                    <TooltipProvider key={skillIdx}>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Badge 
                            variant="outline" 
                            className="bg-black/60 text-gray-300 border-white/10 py-1 px-2 text-xs cursor-help"
                          >
                            {skill}
                          </Badge>
                        </TooltipTrigger>
                        <TooltipContent className="bg-black/90 border-neon-purple/50">
                          <div className="text-xs">
                            <span className="font-bold">{skill}</span>
                            <div className="text-gray-400 mt-1">Experience: {category.proficiency[skillIdx]}%</div>
                          </div>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* OPTION 3: Skill Progress Bars */}
      <div className="space-y-4">
        <h2 className="text-xl font-bold text-white mb-4">Option 3: Skill Progress Bars</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.map((category, idx) => (
            <Card key={idx} className="neo-blur border border-white/10 hover:border-neon-pink/30 hover:neon-border-pink">
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center text-lg">
                  {category.icon}
                  <span className="ml-2">{category.category}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {category.skills.map((skill, skillIdx) => (
                    <div key={skillIdx} className="space-y-1">
                      <div className="flex justify-between text-xs">
                        <span className="text-white">{skill}</span>
                        <span className="text-gray-400">{category.proficiency[skillIdx]}%</span>
                      </div>
                      <Progress value={category.proficiency[skillIdx]} 
                        className="h-1 bg-gray-800" 
                        indicatorClassName={`bg-gradient-to-r from-neon-blue to-neon-pink`} 
                      />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* OPTION 4: Icon-based Skills */}
      <div className="space-y-4">
        <h2 className="text-xl font-bold text-white mb-4">Option 4: Icon-based Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((category, idx) => (
            <div 
              key={idx}
              className="neo-blur border border-white/10 rounded-lg p-6 transition-all duration-300 hover:border-neon-orange/30 hover:neon-border flex flex-col h-full"
            >
              <div className="flex items-center mb-4">
                {category.icon}
                <h3 className="ml-2 text-lg font-semibold text-white">{category.category}</h3>
              </div>
              <Separator className="mb-4 bg-white/10" />
              <div className="grid grid-cols-2 gap-y-2 gap-x-1">
                {category.skills.map((skill, skillIdx) => (
                  <div key={skillIdx} className="flex items-center">
                    <Star className="w-3 h-3 text-neon-orange mr-2 flex-shrink-0" />
                    <span className="text-gray-300 text-sm truncate">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* OPTION 5: Grouped Skills with Subheadings */}
      <div className="space-y-4">
        <h2 className="text-xl font-bold text-white mb-4">Option 5: Grouped Skills with Subheadings</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.map((category, idx) => (
            <HoverCard key={idx} openDelay={200}>
              <HoverCardTrigger asChild>
                <div className="neo-blur border border-white/10 rounded-lg p-6 transition-all duration-300 hover:border-neon-blue/30 flex flex-col h-full cursor-pointer">
                  <div className="flex items-center mb-3">
                    {category.icon}
                    <h3 className="ml-2 text-lg font-semibold text-white">{category.category}</h3>
                  </div>
                  <p className="text-gray-400 text-sm mb-3">
                    Proficient in {category.skills.length} technologies
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {category.skills.slice(0, 3).map((skill, skillIdx) => (
                      <Badge 
                        key={skillIdx} 
                        variant="outline" 
                        className="bg-black/50 text-gray-300 border-white/10 py-1 px-2 text-xs"
                      >
                        {skill}
                      </Badge>
                    ))}
                    {category.skills.length > 3 && (
                      <Badge className="bg-neon-blue/20 text-white border-0 py-1 px-2 text-xs">
                        +{category.skills.length - 3} more
                      </Badge>
                    )}
                  </div>
                </div>
              </HoverCardTrigger>
              <HoverCardContent className="w-80 bg-black/90 border border-white/20">
                <div className="space-y-4">
                  <div className="flex items-center">
                    {category.icon}
                    <h3 className="ml-2 text-lg font-semibold text-white">{category.category}</h3>
                  </div>
                  <Separator className="bg-white/10" />
                  <div className="space-y-3">
                    {(() => {
                      // Group skills into subcategories based on similarity
                      // This is a simplified example - in a real app, you'd have proper grouping logic
                      const half = Math.ceil(category.skills.length / 2);
                      const firstHalf = category.skills.slice(0, half);
                      const secondHalf = category.skills.slice(half);
                      
                      return (
                        <>
                          <div>
                            <h4 className="text-neon-blue text-xs font-medium mb-2">Core Skills</h4>
                            <ul className="space-y-1">
                              {firstHalf.map((skill, i) => (
                                <li key={i} className="flex items-center text-gray-300 text-sm">
                                  <ChevronRight className="w-3 h-3 text-neon-blue mr-1" />
                                  {skill}
                                </li>
                              ))}
                            </ul>
                          </div>
                          {secondHalf.length > 0 && (
                            <div>
                              <h4 className="text-neon-purple text-xs font-medium mb-2">Advanced Skills</h4>
                              <ul className="space-y-1">
                                {secondHalf.map((skill, i) => (
                                  <li key={i} className="flex items-center text-gray-300 text-sm">
                                    <ChevronRight className="w-3 h-3 text-neon-purple mr-1" />
                                    {skill}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </>
                      );
                    })()}
                  </div>
                </div>
              </HoverCardContent>
            </HoverCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;
