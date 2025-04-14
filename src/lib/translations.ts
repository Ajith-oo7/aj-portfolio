
// Define all supported languages
export const languages = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
  { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
  { code: 'zh', name: '中文', flag: '🇨🇳' }
];

// Types for our translations
export type TranslationKey = 
  | 'navigation.story'
  | 'navigation.skills'
  | 'navigation.projects'
  | 'navigation.about'
  | 'navigation.contact'
  | 'navigation.getInTouch'
  | 'sections.experience.title'
  | 'sections.experience.description'
  | 'sections.skills.title'
  | 'sections.skills.description'
  | 'skills.languages'
  | 'skills.cloud'
  | 'skills.bigdata'
  | 'skills.ai'
  | 'skills.ml'
  | 'skills.analysis'
  | 'skills.libraries'
  | 'skills.workflow'
  | 'skills.version';

// Translation dictionary type
export type TranslationDictionary = {
  [key in TranslationKey]: string;
};

// Translations for each supported language
export const translations: Record<string, TranslationDictionary> = {
  en: {
    'navigation.story': 'Story',
    'navigation.skills': 'Skills',
    'navigation.projects': 'Projects',
    'navigation.about': 'About',
    'navigation.contact': 'Contact',
    'navigation.getInTouch': 'Get in Touch',
    'sections.experience.title': 'Work Experience',
    'sections.experience.description': 'My professional journey and the impact I\'ve made.',
    'sections.skills.title': 'Skills & Expertise',
    'sections.skills.description': 'A comprehensive toolkit built through years of experience and continuous learning.',
    'skills.languages': 'Languages & Databases',
    'skills.cloud': 'Cloud & DevOps',
    'skills.bigdata': 'Big Data & ETL',
    'skills.ai': 'Artificial Intelligence',
    'skills.ml': 'Machine Learning Algorithms',
    'skills.analysis': 'Data Analysis & Visualization',
    'skills.libraries': 'Data Science Libraries',
    'skills.workflow': 'Workflow Orchestration',
    'skills.version': 'Version Control'
  },
  es: {
    'navigation.story': 'Historia',
    'navigation.skills': 'Habilidades',
    'navigation.projects': 'Proyectos',
    'navigation.about': 'Sobre mí',
    'navigation.contact': 'Contacto',
    'navigation.getInTouch': 'Contáctame',
    'sections.experience.title': 'Experiencia Laboral',
    'sections.experience.description': 'Mi trayectoria profesional y el impacto que he logrado.',
    'sections.skills.title': 'Habilidades y Experiencia',
    'sections.skills.description': 'Un conjunto completo de herramientas construido a través de años de experiencia y aprendizaje continuo.',
    'skills.languages': 'Lenguajes y Bases de Datos',
    'skills.cloud': 'Nube y DevOps',
    'skills.bigdata': 'Big Data y ETL',
    'skills.ai': 'Inteligencia Artificial',
    'skills.ml': 'Algoritmos de Aprendizaje Automático',
    'skills.analysis': 'Análisis y Visualización de Datos',
    'skills.libraries': 'Bibliotecas de Ciencia de Datos',
    'skills.workflow': 'Orquestación de Flujos de Trabajo',
    'skills.version': 'Control de Versiones'
  },
  fr: {
    'navigation.story': 'Histoire',
    'navigation.skills': 'Compétences',
    'navigation.projects': 'Projets',
    'navigation.about': 'À propos',
    'navigation.contact': 'Contact',
    'navigation.getInTouch': 'Me Contacter',
    'sections.experience.title': 'Expérience Professionnelle',
    'sections.experience.description': 'Mon parcours professionnel et l\'impact que j\'ai eu.',
    'sections.skills.title': 'Compétences et Expertise',
    'sections.skills.description': 'Une boîte à outils complète construite grâce à des années d\'expérience et d\'apprentissage continu.',
    'skills.languages': 'Langages et Bases de Données',
    'skills.cloud': 'Cloud et DevOps',
    'skills.bigdata': 'Big Data et ETL',
    'skills.ai': 'Intelligence Artificielle',
    'skills.ml': 'Algorithmes d\'Apprentissage Automatique',
    'skills.analysis': 'Analyse et Visualisation de Données',
    'skills.libraries': 'Bibliothèques de Science des Données',
    'skills.workflow': 'Orchestration de Flux de Travail',
    'skills.version': 'Contrôle de Version'
  },
  de: {
    'navigation.story': 'Geschichte',
    'navigation.skills': 'Fähigkeiten',
    'navigation.projects': 'Projekte',
    'navigation.about': 'Über mich',
    'navigation.contact': 'Kontakt',
    'navigation.getInTouch': 'Kontaktieren',
    'sections.experience.title': 'Berufserfahrung',
    'sections.experience.description': 'Mein beruflicher Werdegang und die Wirkung, die ich erzielt habe.',
    'sections.skills.title': 'Fähigkeiten und Expertise',
    'sections.skills.description': 'Ein umfassendes Toolkit, das durch jahrelange Erfahrung und kontinuierliches Lernen aufgebaut wurde.',
    'skills.languages': 'Sprachen und Datenbanken',
    'skills.cloud': 'Cloud und DevOps',
    'skills.bigdata': 'Big Data und ETL',
    'skills.ai': 'Künstliche Intelligenz',
    'skills.ml': 'Algorithmen für Maschinelles Lernen',
    'skills.analysis': 'Datenanalyse und Visualisierung',
    'skills.libraries': 'Bibliotheken für Data Science',
    'skills.workflow': 'Workflow-Orchestrierung',
    'skills.version': 'Versionskontrolle'
  },
  zh: {
    'navigation.story': '故事',
    'navigation.skills': '技能',
    'navigation.projects': '项目',
    'navigation.about': '关于',
    'navigation.contact': '联系',
    'navigation.getInTouch': '联系我',
    'sections.experience.title': '工作经验',
    'sections.experience.description': '我的专业旅程和取得的成就。',
    'sections.skills.title': '技能与专长',
    'sections.skills.description': '通过多年的经验和持续学习构建的综合工具包。',
    'skills.languages': '编程语言和数据库',
    'skills.cloud': '云计算和开发运维',
    'skills.bigdata': '大数据和ETL',
    'skills.ai': '人工智能',
    'skills.ml': '机器学习算法',
    'skills.analysis': '数据分析和可视化',
    'skills.libraries': '数据科学库',
    'skills.workflow': '工作流编排',
    'skills.version': '版本控制'
  }
};
