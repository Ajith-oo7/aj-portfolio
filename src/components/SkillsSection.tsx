
import React from 'react';
import { 
  Database, 
  Code, 
  Server, 
  BarChart4, 
  Cloud,
  Workflow
} from 'lucide-react';

const skills = [
  {
    category: 'Data Engineering',
    icon: <Database className="w-6 h-6 text-neon-blue" />,
    skills: ['ETL/ELT Pipelines', 'Data Warehousing', 'Data Modeling', 'Data Integration', 'Data Governance']
  },
  {
    category: 'Programming',
    icon: <Code className="w-6 h-6 text-neon-purple" />,
    skills: ['Python', 'SQL', 'Scala', 'R', 'Shell Scripting']
  },
  {
    category: 'Big Data Technologies',
    icon: <Server className="w-6 h-6 text-neon-pink" />,
    skills: ['Apache Spark', 'Hadoop', 'Kafka', 'Hive', 'Presto']
  },
  {
    category: 'Data Analysis & Visualization',
    icon: <BarChart4 className="w-6 h-6 text-neon-orange" />,
    skills: ['Tableau', 'Power BI', 'Matplotlib', 'Pandas', 'NumPy']
  },
  {
    category: 'Cloud Platforms',
    icon: <Cloud className="w-6 h-6 text-neon-blue" />,
    skills: ['AWS (S3, Redshift, EMR)', 'Azure', 'GCP', 'Snowflake', 'Databricks']
  },
  {
    category: 'Workflow Orchestration',
    icon: <Workflow className="w-6 h-6 text-neon-purple" />,
    skills: ['Airflow', 'Prefect', 'Luigi', 'Control-M', 'dbt']
  }
];

const SkillsSection: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {skills.map((category, idx) => (
        <div 
          key={idx}
          className="neo-blur border border-white/10 rounded-lg p-6 transition-all duration-300 hover:border-neon-blue/30 hover:neon-border"
        >
          <div className="flex items-center mb-4">
            {category.icon}
            <h3 className="ml-2 text-lg font-semibold text-white">{category.category}</h3>
          </div>
          <ul className="space-y-2">
            {category.skills.map((skill, skillIdx) => (
              <li key={skillIdx} className="flex items-center text-gray-300">
                <div className="w-1.5 h-1.5 rounded-full bg-neon-blue mr-2"></div>
                {skill}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default SkillsSection;
