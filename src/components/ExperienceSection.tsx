
import React from 'react';
import { Briefcase, Building } from 'lucide-react';

type ExperienceItem = {
  role: string;
  company: string;
  period: string;
  summary: string;
};

const experiences: ExperienceItem[] = [
  {
    role: "Data Engineer",
    company: "Accenture",
    period: "Apr 2024–Present",
    summary: "Led migration of ETL workflows to Databricks, developed data governance frameworks, and implemented AI-driven monitoring systems. Created data optimization strategies in Snowflake and integrated LLMs for metadata tagging and automated reporting, significantly improving processing time, reducing costs, and enhancing data quality and accessibility."
  },
  {
    role: "Data Engineer Associate",
    company: "HomeOMattic Service Pvt Ltd",
    period: "Apr 2021–Jan 2022",
    summary: "Designed high-performance ETL pipelines and event-driven architectures that improved data refresh cycles and reduced ingestion delays. Implemented comprehensive workflow orchestration with Apache Airflow and deployed AI-based anomaly detection systems, ensuring high availability and automated monitoring for data pipelines serving thousands of daily users."
  },
  {
    role: "Programme Analyst Trainee",
    company: "Cognizant Technology Solutions",
    period: "July 2020–Apr 2021",
    summary: "Built large-scale PySpark pipelines for customer data aggregation and developed predictive models for customer churn analysis. Integrated AWS services to optimize cloud storage costs and created NLP sentiment analysis pipelines, enhancing marketing personalization and analytics capabilities."
  },
  {
    role: "Intern",
    company: "Cognizant Technology Solutions",
    period: "Jan 2020–May 2020",
    summary: "Designed Tableau dashboards for compliance metrics and developed data integration workflows with robust validation. Automated metadata cataloging processes and optimized Snowflake query performance, significantly improving reporting efficiency and enabling real-time monitoring."
  },
  {
    role: "Intern",
    company: "HomeOMattic Service Pvt Ltd",
    period: "Jan 2019–Jan 2020",
    summary: "Developed machine learning classifiers for fraud detection and built unsupervised anomaly detection algorithms that reduced false positives and manual audits. Created automated model training workflows and visualization dashboards, improving operational efficiency and data accuracy for risk analysis."
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
              <div className="flex items-center text-neon-blue">
                <Building className="w-4 h-4 mr-1" />
                <span>{exp.company}</span>
              </div>
            </div>
            <div className="bg-black/50 rounded-full px-3 py-1 text-sm text-gray-300 border border-white/10">
              {exp.period}
            </div>
          </div>
          <p className="text-gray-300 text-sm">{exp.summary}</p>
        </div>
      ))}
    </div>
  );
};

export default ExperienceSection;
