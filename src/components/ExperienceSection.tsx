
import React from 'react';
import { Briefcase, Building } from 'lucide-react';
import { useTranslation } from '@/context/TranslationContext';

type ExperienceItem = {
  role: string;
  company: string;
  period: string;
  summary: string;
};

const ExperienceSection: React.FC = () => {
  const { currentLanguage } = useTranslation();
  
  // Experience items with translations based on language
  const getExperiences = (): ExperienceItem[] => {
    switch (currentLanguage.code) {
      case 'es':
        return [
          {
            role: "Ingeniero de Datos",
            company: "Accenture",
            period: "Abr 2024–Presente",
            summary: "Dirigí la migración de flujos de trabajo ETL a Databricks, desarrollé marcos de gobierno de datos e implementé sistemas de monitoreo basados en IA. Creé estrategias de optimización de datos en Snowflake e integré LLMs para etiquetado de metadatos e informes automatizados, mejorando significativamente el tiempo de procesamiento, reduciendo costos y mejorando la calidad y accesibilidad de los datos."
          },
          {
            role: "Asociado de Ingeniería de Datos",
            company: "HomeOMattic Service Pvt Ltd",
            period: "Abr 2021–Ene 2022",
            summary: "Diseñé canalizaciones ETL de alto rendimiento y arquitecturas basadas en eventos que mejoraron los ciclos de actualización de datos y redujeron los retrasos de ingesta. Implementé orquestación integral de flujos de trabajo con Apache Airflow y desplegué sistemas de detección de anomalías basados en IA, garantizando alta disponibilidad y monitoreo automatizado para canalizaciones de datos que atienden a miles de usuarios diarios."
          },
          {
            role: "Analista de Programa en Formación",
            company: "Cognizant Technology Solutions",
            period: "Jul 2020–Abr 2021",
            summary: "Construí canalizaciones PySpark a gran escala para la agregación de datos de clientes y desarrollé modelos predictivos para el análisis de abandono de clientes. Integré servicios de AWS para optimizar los costos de almacenamiento en la nube y creé canalizaciones de análisis de sentimiento de PNL, mejorando las capacidades de personalización y análisis de marketing."
          },
          {
            role: "Pasante",
            company: "Cognizant Technology Solutions",
            period: "Ene 2020–May 2020",
            summary: "Diseñé paneles de Tableau para métricas de cumplimiento y desarrollé flujos de trabajo de integración de datos con validación robusta. Automaticé procesos de catalogación de metadatos y optimicé el rendimiento de consultas de Snowflake, mejorando significativamente la eficiencia de informes y permitiendo el monitoreo en tiempo real."
          },
          {
            role: "Pasante",
            company: "HomeOMattic Service Pvt Ltd",
            period: "Ene 2019–Ene 2020",
            summary: "Desarrollé clasificadores de aprendizaje automático para la detección de fraudes y construí algoritmos de detección de anomalías no supervisados que redujeron los falsos positivos y las auditorías manuales. Creé flujos de trabajo automatizados de entrenamiento de modelos y paneles de visualización, mejorando la eficiencia operativa y la precisión de datos para el análisis de riesgos."
          }
        ];
      case 'fr':
        return [
          {
            role: "Ingénieur de Données",
            company: "Accenture",
            period: "Avr 2024–Présent",
            summary: "J'ai dirigé la migration des flux de travail ETL vers Databricks, développé des cadres de gouvernance des données et mis en œuvre des systèmes de surveillance basés sur l'IA. J'ai créé des stratégies d'optimisation des données dans Snowflake et intégré des LLMs pour le balisage des métadonnées et les rapports automatisés, améliorant considérablement le temps de traitement, réduisant les coûts et améliorant la qualité et l'accessibilité des données."
          },
          {
            role: "Associé Ingénieur de Données",
            company: "HomeOMattic Service Pvt Ltd",
            period: "Avr 2021–Jan 2022",
            summary: "J'ai conçu des pipelines ETL haute performance et des architectures événementielles qui ont amélioré les cycles de rafraîchissement des données et réduit les délais d'ingestion. J'ai mis en œuvre une orchestration complète des flux de travail avec Apache Airflow et déployé des systèmes de détection d'anomalies basés sur l'IA, assurant une haute disponibilité et une surveillance automatisée pour les pipelines de données desservant des milliers d'utilisateurs quotidiens."
          },
          {
            role: "Analyste de Programme Stagiaire",
            company: "Cognizant Technology Solutions",
            period: "Juil 2020–Avr 2021",
            summary: "J'ai construit des pipelines PySpark à grande échelle pour l'agrégation de données clients et développé des modèles prédictifs pour l'analyse de l'attrition des clients. J'ai intégré des services AWS pour optimiser les coûts de stockage cloud et créé des pipelines d'analyse de sentiment NLP, améliorant les capacités de personnalisation du marketing et d'analyse."
          },
          {
            role: "Stagiaire",
            company: "Cognizant Technology Solutions",
            period: "Jan 2020–Mai 2020",
            summary: "J'ai conçu des tableaux de bord Tableau pour les métriques de conformité et développé des flux de travail d'intégration de données avec une validation robuste. J'ai automatisé les processus de catalogage des métadonnées et optimisé les performances des requêtes Snowflake, améliorant considérablement l'efficacité des rapports et permettant une surveillance en temps réel."
          },
          {
            role: "Stagiaire",
            company: "HomeOMattic Service Pvt Ltd",
            period: "Jan 2019–Jan 2020",
            summary: "J'ai développé des classificateurs d'apprentissage automatique pour la détection de fraudes et construit des algorithmes de détection d'anomalies non supervisés qui ont réduit les faux positifs et les audits manuels. J'ai créé des flux de travail automatisés de formation de modèles et des tableaux de bord de visualisation, améliorant l'efficacité opérationnelle et la précision des données pour l'analyse des risques."
          }
        ];
      case 'de':
        return [
          {
            role: "Dateningenieur",
            company: "Accenture",
            period: "Apr 2024–Heute",
            summary: "Ich leitete die Migration von ETL-Workflows zu Databricks, entwickelte Daten-Governance-Frameworks und implementierte KI-gestützte Überwachungssysteme. Ich erstellte Datenoptimierungsstrategien in Snowflake und integrierte LLMs für Metadaten-Tagging und automatisierte Berichterstattung, was die Verarbeitungszeit erheblich verbesserte, Kosten reduzierte und die Datenqualität und -zugänglichkeit verbesserte."
          },
          {
            role: "Dateningenieur Associate",
            company: "HomeOMattic Service Pvt Ltd",
            period: "Apr 2021–Jan 2022",
            summary: "Ich entwarf hochleistungsfähige ETL-Pipelines und ereignisgesteuerte Architekturen, die die Datenaktualisierungszyklen verbesserten und Erfassungsverzögerungen reduzierten. Ich implementierte umfassende Workflow-Orchestrierung mit Apache Airflow und setzte KI-basierte Anomalieerkennungssysteme ein, um hohe Verfügbarkeit und automatisierte Überwachung für Datenpipelines zu gewährleisten, die täglich Tausende von Benutzern bedienen."
          },
          {
            role: "Programmanalyst Trainee",
            company: "Cognizant Technology Solutions",
            period: "Juli 2020–Apr 2021",
            summary: "Ich baute umfangreiche PySpark-Pipelines für die Aggregation von Kundendaten und entwickelte prädiktive Modelle für die Kundenabwanderungsanalyse. Ich integrierte AWS-Dienste zur Optimierung der Cloud-Speicherkosten und erstellte NLP-Stimmungsanalyse-Pipelines, die die Marketing-Personalisierung und Analysefähigkeiten verbesserten."
          },
          {
            role: "Praktikant",
            company: "Cognizant Technology Solutions",
            period: "Jan 2020–Mai 2020",
            summary: "Ich entwarf Tableau-Dashboards für Compliance-Metriken und entwickelte Datenintegrations-Workflows mit robuster Validierung. Ich automatisierte Metadaten-Katalogisierungsprozesse und optimierte die Snowflake-Abfrageleistung, was die Berichtseffizienz erheblich verbesserte und Echtzeitüberwachung ermöglichte."
          },
          {
            role: "Praktikant",
            company: "HomeOMattic Service Pvt Ltd",
            period: "Jan 2019–Jan 2020",
            summary: "Ich entwickelte Machine-Learning-Klassifikatoren zur Betrugserkennung und baute unüberwachte Anomalieerkennungsalgorithmen, die Falschmeldungen und manuelle Prüfungen reduzierten. Ich erstellte automatisierte Modelltrainings-Workflows und Visualisierungs-Dashboards, die die betriebliche Effizienz und Datengenauigkeit für Risikoanalysen verbesserten."
          }
        ];
      case 'zh':
        return [
          {
            role: "数据工程师",
            company: "Accenture",
            period: "2024年4月至今",
            summary: "领导ETL工作流程迁移到Databricks，开发数据治理框架，并实施AI驱动的监控系统。在Snowflake中创建数据优化策略，并集成LLM用于元数据标记和自动报告，显著改善处理时间，降低成本，提高数据质量和可访问性。"
          },
          {
            role: "数据工程师助理",
            company: "HomeOMattic Service Pvt Ltd",
            period: "2021年4月-2022年1月",
            summary: "设计高性能ETL管道和事件驱动架构，改进数据刷新周期并减少摄取延迟。使用Apache Airflow实施全面的工作流编排，并部署基于AI的异常检测系统，确保为每天服务于数千用户的数据管道提供高可用性和自动监控。"
          },
          {
            role: "程序分析师培训生",
            company: "Cognizant Technology Solutions",
            period: "2020年7月-2021年4月",
            summary: "构建大规模PySpark管道用于客户数据聚合，并开发用于客户流失分析的预测模型。集成AWS服务以优化云存储成本，并创建NLP情感分析管道，增强营销个性化和分析能力。"
          },
          {
            role: "实习生",
            company: "Cognizant Technology Solutions",
            period: "2020年1月-2020年5月",
            summary: "设计用于合规指标的Tableau仪表板，并开发具有强大验证功能的数据集成工作流。自动化元数据编目过程并优化Snowflake查询性能，显著提高报告效率并实现实时监控。"
          },
          {
            role: "实习生",
            company: "HomeOMattic Service Pvt Ltd",
            period: "2019年1月-2020年1月",
            summary: "开发用于欺诈检测的机器学习分类器，并构建无监督异常检测算法，减少误报和人工审计。创建自动化模型训练工作流和可视化仪表板，提高风险分析的运营效率和数据准确性。"
          }
        ];
      default:
        return [
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
    }
  };

  const experiences = getExperiences();

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
