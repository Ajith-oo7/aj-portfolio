
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
  | 'sections.skills.description';

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
    'sections.skills.description': 'A comprehensive toolkit built through years of experience and continuous learning.'
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
    'sections.skills.description': 'Un conjunto completo de herramientas construido a través de años de experiencia y aprendizaje continuo.'
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
    'sections.skills.description': 'Une boîte à outils complète construite grâce à des années d\'expérience et d\'apprentissage continu.'
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
    'sections.skills.description': 'Ein umfassendes Toolkit, das durch jahrelange Erfahrung und kontinuierliches Lernen aufgebaut wurde.'
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
    'sections.skills.description': '通过多年的经验和持续学习构建的综合工具包。'
  }
};
