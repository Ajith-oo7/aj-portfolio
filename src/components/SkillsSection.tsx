
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
  Brain,
  Zap,
  BrainCircuit
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from "@/components/ui/tooltip";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from '@/components/ui/progress';

const skills = [
  {
    category: 'Languages & Databases',
    icon: <Code className="w-6 h-6 text-neon-blue" />,
    skills: ['Python', 'SQL (Postgres, MS-SQL, MySQL)', 'Java', 'C', 'React', 'Cassandra'],
    proficiency: [90, 85, 88, 82, 87, 80]
  },
  {
    category: 'Cloud & DevOps',
    icon: <Cloud className="w-6 h-6 text-neon-purple" />,
    skills: ['AWS (Glue, Lambda, S3, EC2, EMR, ECR)', 'API Gateway', 'KMS', 'SageMaker', 'CloudWatch', 'IAM', 'DMS', 'Redshift', 'CI/CD'],
    proficiency: [88, 85, 82, 87, 89, 90, 75, 82, 84]
  },
  {
    category: 'Big Data & ETL',
    icon: <Database className="w-6 h-6 text-neon-pink" />,
    skills: ['Snowflake', 'Databricks', 'PySpark', 'Informatica', 'Delta Lake', 'Snowpipe', 'Unity Catalog', 'Z-Ordering', 'Auto-Optimize'],
    proficiency: [92, 89, 87, 80, 85, 82, 78, 75, 76]
  },
  {
    category: 'Artificial Intelligence',
    icon: <BrainCircuit className="w-6 h-6 text-neon-green" />,
    skills: [
      'Large Language Models (LLMs)', 
      'Generative AI', 
      'Prompt Engineering', 
      'RAG (Retrieval Augmented Generation)',
      'Neural Networks',
      'NLP & Text Processing',
      'Vector Databases',
      'AI Model Deployment'
    ],
    proficiency: [88, 85, 86, 83, 82, 85, 84, 82]
  },
  {
    category: 'Machine Learning Algorithms',
    icon: <Brain className="w-6 h-6 text-neon-orange" />,
    skills: ['Decision Trees', 'K-means', 'SVM', 'Random Forest', 'Linear Regression', 'XGBoost', 'TensorFlow', 'PyTorch', 'Keras'],
    proficiency: [88, 87, 85, 90, 92, 88, 79, 78, 80]
  },
  {
    category: 'Data Analysis & Visualization',
    icon: <BarChart4 className="w-6 h-6 text-neon-blue" />,
    skills: ['Tableau', 'Matplotlib', 'Plotly', 'Seaborn', 'Excel', 'A/B Testing', 'QuickSight', 'PowerBI'],
    proficiency: [91, 88, 85, 87, 94, 89, 82, 84]
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
    skills: ['Jenkins', 'n8n', 'Hadoop', 'Apache Airflow', 'Docker'],
    proficiency: [85, 78, 82, 89, 88]
  },
  {
    category: 'Version Control',
    icon: <GitBranch className="w-6 h-6 text-neon-orange" />,
    skills: ['Git', 'AWS Cloud Source Repositories'],
    proficiency: [94, 85]
  }
];

const SkillsSection: React.FC = () => {
  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold text-white mb-6">Skills & Expertise</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((category, idx) => (
          <Card 
            key={idx} 
            className="neo-blur border border-white/10 hover:border-neon-purple/30 hover:neon-border-purple transition-all duration-300"
          >
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center text-lg">
                {category.icon}
                <span className="ml-2">{category.category}</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Separator className="mb-4 bg-white/10" />
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIdx) => (
                  <TooltipProvider key={skillIdx}>
                    <Tooltip delayDuration={100}>
                      <TooltipTrigger asChild>
                        <Badge 
                          variant="outline" 
                          className="bg-black/60 text-gray-300 border-white/10 py-1.5 px-3 text-xs cursor-help"
                        >
                          {skill}
                        </Badge>
                      </TooltipTrigger>
                      <TooltipContent 
                        sideOffset={5}
                        className="bg-black/90 border-neon-purple/50 z-50"
                      >
                        <div className="text-xs">
                          <span className="font-bold">{skill}</span>
                          <div className="flex items-center mt-1">
                            <div className="h-1.5 w-24 bg-gray-800 rounded-full mr-2">
                              <div 
                                className="h-full bg-gradient-to-r from-neon-blue to-neon-purple rounded-full" 
                                style={{ width: `${category.proficiency[skillIdx]}%` }}
                              ></div>
                            </div>
                            <span className="text-gray-400">{category.proficiency[skillIdx]}%</span>
                          </div>
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
  );
};

export default SkillsSection;
