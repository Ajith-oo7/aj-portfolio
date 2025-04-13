
import React from 'react';
import { Briefcase } from 'lucide-react';

type ExperienceItem = {
  role: string;
  company: string;
  period: string;
  responsibilities: string[];
};

const experiences: ExperienceItem[] = [
  {
    role: "Data Engineer",
    company: "Accenture",
    period: "Apr 2024–Present",
    responsibilities: [
      "Migrated 50+ ETL workflows from AWS Glue to Databricks using PySpark and Delta Live Tables, reducing data processing time by 30% and cutting monthly operational costs by 20%.",
      "Developed a data governance framework in Databricks with Unity Catalog and Apache Hive, ensuring role-based access control and improving data lineage tracking.",
      "Built an AI-driven data quality monitoring system using Great Expectations and Databricks, reducing critical data pipeline failures by 40%.",
      "Developed materialized views and clustering strategies in Snowflake, improving query performance by 35%.",
      "Integrated OpenAI-based LLMs into AWS Lambda workflows to automate metadata tagging and classification for the data lake, improving discoverability by 20%.",
      "Built LLM-driven dashboards to automate anomaly and SLA reporting, cutting reporting time by 45%.",
      "Applied prompt engineering best practices to optimize internal AI tools that auto-generate query templates, documentation summaries, and operational alerts."
    ]
  },
  {
    role: "Data Engineer Associate",
    company: "HomeOMattic Service Pvt Ltd",
    period: "Apr 2021–Jan 2022",
    responsibilities: [
      "Designed high-performance ETL pipelines in Databricks and Snowflake using PySpark and Delta Lake, reducing data refresh cycles by 25-30%.",
      "Built a Kafka-based event-driven architecture integrated with AWS Lambda and Snowflake Snowpipe, reducing data ingestion delays by 50%.",
      "Deployed an AI-based anomaly detection system using AWS SageMaker Random Forest models to identify transaction fraud patterns, improving anomaly detection precision by 35%.",
      "Implemented Apache Airflow for end-to-end workflow orchestration, integrating Databricks Jobs and Snowflake tasks, ensuring 99.9% uptime, real-time monitoring, and automated failure recovery for 5K+ daily users.",
      "Partnered with the data science team to operationalize predictive models (Random Forest, XGBoost) into ETL pipelines, enabling proactive maintenance scheduling and fraud risk scoring.",
      "Developed a data observability framework combining Prometheus and Great Expectations to monitor pipeline health and alert for anomalies."
    ]
  },
  {
    role: "Programme Analyst Trainee",
    company: "Cognizant Technology Solutions",
    period: "July 2020–Apr 2021",
    responsibilities: [
      "Built large-scale PySpark batch pipelines that aggregated real-time customer interaction data, improving marketing campaign personalization by 20%.",
      "Integrated AWS Redshift, S3, and Glue workflows, optimizing cloud storage costs by 18%.",
      "Developed predictive churn models using Logistic Regression and Decision Trees, identifying at-risk customers with 76% precision.",
      "Built NLP sentiment analysis pipelines using AWS Comprehend to extract customer feedback insights, reducing manual survey analysis time by 40%.",
      "Automated Snowflake ingestion pipelines using Snowpipe and Glue, enhancing data availability for analytics teams."
    ]
  },
  {
    role: "Intern",
    company: "Cognizant Technology Solutions",
    period: "Jan 2020–May 2020",
    responsibilities: [
      "Designed Tableau dashboards for cybersecurity compliance metrics and data migration projects, reducing compliance reporting time by 30%.",
      "Built MySQL data integration workflows ensuring end-to-end data validation and encryption for GDPR compliance.",
      "Automated AWS Glue-based metadata cataloging processes, enabling real-time updates to data dictionaries.",
      "Streamlined Tableau KPI tracking dashboards linked to Snowflake, enabling real-time fraud monitoring.",
      "Optimized Snowflake query performance through clustering keys and partitioning strategies."
    ]
  },
  {
    role: "Intern",
    company: "HomeOMattic Service Pvt Ltd",
    period: "Jan 2019–Jan 2020",
    responsibilities: [
      "Developed Decision Tree and Random Forest classifiers for detecting chargeback fraud in property rental payments, reducing false positives by 30% and saving $50K annually.",
      "Built unsupervised anomaly detection algorithms (Isolation Forest) in Python to flag irregular billing activities, reducing manual audits by 40%.",
      "Designed Azure Databricks workflows to automate model training and scoring pipelines for customer risk analysis.",
      "Created Tableau dashboards visualizing model accuracy, fraud trends, and operational KPIs.",
      "Automated early data labeling using rule-based AI scripts to pre-classify transaction categories, improving training dataset accuracy by 25%."
    ]
  }
];

const ExperienceSection: React.FC = () => {
  return (
    <div className="space-y-8">
      {experiences.map((exp, index) => (
        <div key={index} className="neo-blur border border-white/10 rounded-lg p-6 transition-all duration-300 hover:border-neon-blue/30">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="text-xl font-bold text-white">{exp.role}</h3>
              <p className="text-neon-blue">{exp.company}</p>
            </div>
            <div className="bg-black/50 rounded-full px-3 py-1 text-sm text-gray-300 border border-white/10">
              {exp.period}
            </div>
          </div>
          <ul className="space-y-2">
            {exp.responsibilities.map((responsibility, idx) => (
              <li key={idx} className="flex items-start text-gray-300 text-sm">
                <div className="w-1.5 h-1.5 rounded-full bg-neon-blue mt-1.5 mr-2 flex-shrink-0"></div>
                <span>{responsibility}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default ExperienceSection;
