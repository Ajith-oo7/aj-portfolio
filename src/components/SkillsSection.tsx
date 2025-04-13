
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
  GitBranch
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

const skills = [
  {
    category: 'Languages & Databases',
    icon: <Code className="w-6 h-6 text-neon-blue" />,
    skills: ['Python', 'SQL (Postgres, MS-SQL, MySQL)']
  },
  {
    category: 'Cloud & DevOps',
    icon: <Cloud className="w-6 h-6 text-neon-purple" />,
    skills: ['AWS (Glue, Lambda, S3, EC2, EMR, ECR)', 'API Gateway', 'KMS', 'SageMaker', 'QuickSight', 'CloudWatch', 'IAM', 'DMS', 'Redshift', 'Docker', 'Git', 'CI/CD']
  },
  {
    category: 'Big Data & ETL',
    icon: <Database className="w-6 h-6 text-neon-pink" />,
    skills: ['Snowflake', 'Databricks', 'PySpark', 'Informatica', 'Delta Lake', 'Snowpipe', 'Unity Catalog', 'Z-Ordering', 'Auto-Optimize']
  },
  {
    category: 'Machine Learning',
    icon: <Bot className="w-6 h-6 text-neon-orange" />,
    skills: ['Decision Trees', 'K-means', 'SVM', 'Random Forest', 'Linear Regression', 'XGBoost', 'Generative AI', 'LLMs', 'TensorFlow', 'PyTorch', 'Keras']
  },
  {
    category: 'Data Analysis & Visualization',
    icon: <BarChart4 className="w-6 h-6 text-neon-blue" />,
    skills: ['Tableau', 'Matplotlib', 'Plotly', 'Seaborn', 'Excel', 'A/B Testing', 'Prompt Engineering', 'RAG']
  },
  {
    category: 'Data Science Libraries',
    icon: <Braces className="w-6 h-6 text-neon-purple" />,
    skills: ['Scikit-learn', 'NumPy', 'Pandas', 'SciPy', 'Langchain', 'Streamlit']
  },
  {
    category: 'Workflow Orchestration',
    icon: <Workflow className="w-6 h-6 text-neon-pink" />,
    skills: ['Jenkins', 'n8n', 'Hadoop', 'Apache Airflow']
  },
  {
    category: 'Version Control',
    icon: <GitBranch className="w-6 h-6 text-neon-orange" />,
    skills: ['Git', 'AWS Cloud Source Repositories']
  }
];

const SkillsSection: React.FC = () => {
  return (
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
  );
};

export default SkillsSection;
