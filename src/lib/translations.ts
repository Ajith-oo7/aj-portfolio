
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
  | 'sections.about.title'
  | 'sections.about.description'
  | 'sections.contact.title'
  | 'sections.contact.description'
  | 'skills.languages'
  | 'skills.cloud'
  | 'skills.bigdata'
  | 'skills.ai'
  | 'skills.ml'
  | 'skills.analysis'
  | 'skills.libraries'
  | 'skills.workflow'
  | 'skills.version'
  | 'hero.greeting'
  | 'hero.name'
  | 'hero.title'
  | 'hero.description'
  | 'hero.collaboration'
  | 'hero.exploreWork'
  | 'hero.getInTouch'
  | 'about.title'
  | 'about.description'
  | 'about.bio1'
  | 'about.bio2'
  | 'about.bio3'
  | 'about.location'
  | 'about.locationValue'
  | 'about.education'
  | 'about.educationValue'
  | 'about.email'
  | 'contact.title'
  | 'contact.description'
  | 'contact.info'
  | 'contact.openTo'
  | 'contact.emailTitle'
  | 'contact.linkedinTitle'
  | 'contact.githubTitle';

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
    'sections.about.title': 'About Me',
    'sections.about.description': 'Beyond the code and data, here\'s a bit more about who I am.',
    'sections.contact.title': 'Get In Touch',
    'sections.contact.description': 'Interested in working together? Feel free to reach out!',
    'skills.languages': 'Languages & Databases',
    'skills.cloud': 'Cloud & DevOps',
    'skills.bigdata': 'Big Data & ETL',
    'skills.ai': 'Artificial Intelligence',
    'skills.ml': 'Machine Learning Algorithms',
    'skills.analysis': 'Data Analysis & Visualization',
    'skills.libraries': 'Data Science Libraries',
    'skills.workflow': 'Workflow Orchestration',
    'skills.version': 'Version Control',
    'hero.greeting': 'Hi, I\'m',
    'hero.name': 'Ajith Annavarapu',
    'hero.title': 'Data Engineer & Data Scientist',
    'hero.description': 'I transform raw data into meaningful insights that drive business decisions. With expertise in building robust data pipelines and scalable data systems, I help organizations harness the full potential of their data.',
    'hero.collaboration': 'I\'m always open to new challenges and collaborations. If you\'re working on an interesting project that requires data expertise, A.I or even Vibe Coding. I\'d love to hear about it!',
    'hero.exploreWork': 'Explore My Work',
    'hero.getInTouch': 'Get in Touch',
    'about.title': 'Ajith Annavarapu',
    'about.description': 'Beyond the code and data, here\'s a bit more about who I am.',
    'about.bio1': 'I\'m a passionate Data Engineer with a Master\'s degree in Data Science, dedicated to building robust and scalable data systems that transform raw data into valuable insights.',
    'about.bio2': 'When I\'m not immersed in data, you\'ll find me exploring new hiking trails, Vibe Coding, experimenting with cooking recipes, or diving into a good thriller movie. I believe in continuous learning and staying curious about the world around us.',
    'about.bio3': 'I\'m always open to new challenges and collaborations. If you\'re working on an interesting project that requires data expertise, I\'d love to hear about it!',
    'about.location': 'Location:',
    'about.locationValue': 'Irving, TX',
    'about.education': 'Education:',
    'about.educationValue': 'M.S. in Data Science',
    'about.email': 'Email:',
    'contact.title': 'Contact Information',
    'contact.description': 'I\'m currently open to freelance opportunities, consulting work, and full-time positions. Don\'t hesitate to reach out if you think we could work together!',
    'contact.info': 'Contact Information',
    'contact.openTo': 'I\'m currently open to freelance opportunities, consulting work, and full-time positions. Don\'t hesitate to reach out if you think we could work together!',
    'contact.emailTitle': 'Email',
    'contact.linkedinTitle': 'LinkedIn',
    'contact.githubTitle': 'GitHub'
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
    'sections.about.title': 'Sobre Mí',
    'sections.about.description': 'Más allá del código y los datos, aquí hay un poco más sobre quién soy.',
    'sections.contact.title': 'Ponte en Contacto',
    'sections.contact.description': '¿Interesado en trabajar juntos? ¡No dudes en contactarme!',
    'skills.languages': 'Lenguajes y Bases de Datos',
    'skills.cloud': 'Nube y DevOps',
    'skills.bigdata': 'Big Data y ETL',
    'skills.ai': 'Inteligencia Artificial',
    'skills.ml': 'Algoritmos de Aprendizaje Automático',
    'skills.analysis': 'Análisis y Visualización de Datos',
    'skills.libraries': 'Bibliotecas de Ciencia de Datos',
    'skills.workflow': 'Orquestación de Flujos de Trabajo',
    'skills.version': 'Control de Versiones',
    'hero.greeting': 'Hola, soy',
    'hero.name': 'Ajith Annavarapu',
    'hero.title': 'Ingeniero de Datos y Científico de Datos',
    'hero.description': 'Transformo datos brutos en insights significativos que impulsan decisiones empresariales. Con experiencia en la construcción de robustos pipelines de datos y sistemas escalables, ayudo a las organizaciones a aprovechar todo el potencial de sus datos.',
    'hero.collaboration': 'Siempre estoy abierto a nuevos desafíos y colaboraciones. Si estás trabajando en un proyecto interesante que requiere experiencia en datos, IA o incluso Vibe Coding, ¡me encantaría saber de ello!',
    'hero.exploreWork': 'Explorar Mi Trabajo',
    'hero.getInTouch': 'Contactarme',
    'about.title': 'Ajith Annavarapu',
    'about.description': 'Más allá del código y los datos, aquí hay un poco más sobre quién soy.',
    'about.bio1': 'Soy un apasionado Ingeniero de Datos con una Maestría en Ciencia de Datos, dedicado a construir sistemas de datos robustos y escalables que transforman datos brutos en información valiosa.',
    'about.bio2': 'Cuando no estoy inmerso en datos, me encontrarás explorando nuevas rutas de senderismo, haciendo Vibe Coding, experimentando con recetas de cocina o sumergiéndome en una buena película de suspense. Creo en el aprendizaje continuo y en mantener la curiosidad sobre el mundo que nos rodea.',
    'about.bio3': 'Siempre estoy abierto a nuevos desafíos y colaboraciones. Si estás trabajando en un proyecto interesante que requiere experiencia en datos, ¡me encantaría saber de ello!',
    'about.location': 'Ubicación:',
    'about.locationValue': 'Irving, TX',
    'about.education': 'Educación:',
    'about.educationValue': 'Maestría en Ciencia de Datos',
    'about.email': 'Correo electrónico:',
    'contact.title': 'Información de Contacto',
    'contact.description': 'Actualmente estoy abierto a oportunidades freelance, trabajo de consultoría y posiciones a tiempo completo. No dudes en contactarme si crees que podríamos trabajar juntos.',
    'contact.info': 'Información de Contacto',
    'contact.openTo': 'Actualmente estoy abierto a oportunidades freelance, trabajo de consultoría y posiciones a tiempo completo. No dudes en contactarme si crees que podríamos trabajar juntos.',
    'contact.emailTitle': 'Correo electrónico',
    'contact.linkedinTitle': 'LinkedIn',
    'contact.githubTitle': 'GitHub'
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
    'sections.about.title': 'À Propos de Moi',
    'sections.about.description': 'Au-delà du code et des données, voici un peu plus sur qui je suis.',
    'sections.contact.title': 'Entrer en Contact',
    'sections.contact.description': 'Intéressé à travailler ensemble? N\'hésitez pas à me contacter!',
    'skills.languages': 'Langages et Bases de Données',
    'skills.cloud': 'Cloud et DevOps',
    'skills.bigdata': 'Big Data et ETL',
    'skills.ai': 'Intelligence Artificielle',
    'skills.ml': 'Algorithmes d\'Apprentissage Automatique',
    'skills.analysis': 'Analyse et Visualisation de Données',
    'skills.libraries': 'Bibliothèques de Science des Données',
    'skills.workflow': 'Orchestration de Flux de Travail',
    'skills.version': 'Contrôle de Version',
    'hero.greeting': 'Bonjour, je suis',
    'hero.name': 'Ajith Annavarapu',
    'hero.title': 'Ingénieur de Données et Data Scientist',
    'hero.description': 'Je transforme les données brutes en insights significatifs qui orientent les décisions commerciales. Avec mon expertise dans la construction de pipelines de données robustes et de systèmes évolutifs, j\'aide les organisations à exploiter tout le potentiel de leurs données.',
    'hero.collaboration': 'Je suis toujours ouvert à de nouveaux défis et collaborations. Si vous travaillez sur un projet intéressant qui nécessite une expertise en données, IA ou même Vibe Coding, j\'aimerais en entendre parler!',
    'hero.exploreWork': 'Explorer Mon Travail',
    'hero.getInTouch': 'Me Contacter',
    'about.title': 'Ajith Annavarapu',
    'about.description': 'Au-delà du code et des données, voici un peu plus sur qui je suis.',
    'about.bio1': 'Je suis un Ingénieur de Données passionné avec un Master en Science des Données, dédié à la construction de systèmes de données robustes et évolutifs qui transforment les données brutes en informations précieuses.',
    'about.bio2': 'Quand je ne suis pas immergé dans les données, vous me trouverez en train d\'explorer de nouveaux sentiers de randonnée, faire du Vibe Coding, expérimenter des recettes de cuisine ou plonger dans un bon thriller. Je crois en l\'apprentissage continu et à rester curieux du monde qui nous entoure.',
    'about.bio3': 'Je suis toujours ouvert à de nouveaux défis et collaborations. Si vous travaillez sur un projet intéressant qui nécessite une expertise en données, j\'aimerais en entendre parler!',
    'about.location': 'Emplacement:',
    'about.locationValue': 'Irving, TX',
    'about.education': 'Éducation:',
    'about.educationValue': 'Master en Science des Données',
    'about.email': 'Email:',
    'contact.title': 'Informations de Contact',
    'contact.description': 'Je suis actuellement ouvert aux opportunités freelance, aux travaux de consultation et aux postes à temps plein. N\'hésitez pas à me contacter si vous pensez que nous pourrions travailler ensemble.',
    'contact.info': 'Informations de Contact',
    'contact.openTo': 'Je suis actuellement ouvert aux opportunités freelance, aux travaux de consultation et aux postes à temps plein. N\'hésitez pas à me contacter si vous pensez que nous pourrions travailler ensemble.',
    'contact.emailTitle': 'Email',
    'contact.linkedinTitle': 'LinkedIn',
    'contact.githubTitle': 'GitHub'
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
    'sections.about.title': 'Über Mich',
    'sections.about.description': 'Jenseits von Code und Daten, hier ist ein bisschen mehr darüber, wer ich bin.',
    'sections.contact.title': 'Kontakt Aufnehmen',
    'sections.contact.description': 'Interesse an einer Zusammenarbeit? Zögern Sie nicht, mich zu kontaktieren!',
    'skills.languages': 'Sprachen und Datenbanken',
    'skills.cloud': 'Cloud und DevOps',
    'skills.bigdata': 'Big Data und ETL',
    'skills.ai': 'Künstliche Intelligenz',
    'skills.ml': 'Algorithmen für Maschinelles Lernen',
    'skills.analysis': 'Datenanalyse und Visualisierung',
    'skills.libraries': 'Bibliotheken für Data Science',
    'skills.workflow': 'Workflow-Orchestrierung',
    'skills.version': 'Versionskontrolle',
    'hero.greeting': 'Hallo, ich bin',
    'hero.name': 'Ajith Annavarapu',
    'hero.title': 'Dateningenieur & Datenwissenschaftler',
    'hero.description': 'Ich verwandle Rohdaten in aussagekräftige Erkenntnisse, die Geschäftsentscheidungen vorantreiben. Mit Expertise im Aufbau robuster Datenpipelines und skalierbarer Datensysteme helfe ich Organisationen, das volle Potenzial ihrer Daten auszuschöpfen.',
    'hero.collaboration': 'Ich bin immer offen für neue Herausforderungen und Kooperationen. Wenn Sie an einem interessanten Projekt arbeiten, das Datenexpertise, KI oder sogar Vibe Coding erfordert, würde ich gerne davon hören!',
    'hero.exploreWork': 'Meine Arbeit Erkunden',
    'hero.getInTouch': 'Kontakt Aufnehmen',
    'about.title': 'Ajith Annavarapu',
    'about.description': 'Jenseits von Code und Daten, hier ist ein bisschen mehr darüber, wer ich bin.',
    'about.bio1': 'Ich bin ein leidenschaftlicher Dateningenieur mit einem Master-Abschluss in Datenwissenschaft, der sich dem Aufbau robuster und skalierbarer Datensysteme widmet, die Rohdaten in wertvolle Erkenntnisse umwandeln.',
    'about.bio2': 'Wenn ich nicht in Daten vertieft bin, findet man mich beim Erkunden neuer Wanderwege, beim Vibe Coding, beim Experimentieren mit Kochrezepten oder beim Eintauchen in einen guten Thriller. Ich glaube an kontinuierliches Lernen und Neugierde für die Welt um uns herum.',
    'about.bio3': 'Ich bin immer offen für neue Herausforderungen und Kooperationen. Wenn Sie an einem interessanten Projekt arbeiten, das Datenexpertise erfordert, würde ich gerne davon hören!',
    'about.location': 'Standort:',
    'about.locationValue': 'Irving, TX',
    'about.education': 'Ausbildung:',
    'about.educationValue': 'M.S. in Datenwissenschaft',
    'about.email': 'E-Mail:',
    'contact.title': 'Kontaktinformationen',
    'contact.description': 'Ich bin derzeit offen für Freelance-Möglichkeiten, Beratungsarbeit und Vollzeitstellen. Zögern Sie nicht, sich zu melden, wenn Sie denken, dass wir zusammenarbeiten könnten.',
    'contact.info': 'Kontaktinformationen',
    'contact.openTo': 'Ich bin derzeit offen für Freelance-Möglichkeiten, Beratungsarbeit und Vollzeitstellen. Zögern Sie nicht, sich zu melden, wenn Sie denken, dass wir zusammenarbeiten könnten.',
    'contact.emailTitle': 'E-Mail',
    'contact.linkedinTitle': 'LinkedIn',
    'contact.githubTitle': 'GitHub'
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
    'sections.about.title': '关于我',
    'sections.about.description': '除了代码和数据，这里有更多关于我是谁的信息。',
    'sections.contact.title': '联系我',
    'sections.contact.description': '有兴趣一起工作吗？请随时联系！',
    'skills.languages': '编程语言和数据库',
    'skills.cloud': '云计算和开发运维',
    'skills.bigdata': '大数据和ETL',
    'skills.ai': '人工智能',
    'skills.ml': '机器学习算法',
    'skills.analysis': '数据分析和可视化',
    'skills.libraries': '数据科学库',
    'skills.workflow': '工作流编排',
    'skills.version': '版本控制',
    'hero.greeting': '你好，我是',
    'hero.name': 'Ajith Annavarapu',
    'hero.title': '数据工程师和数据科学家',
    'hero.description': '我将原始数据转化为有意义的见解，推动业务决策。凭借构建强大数据管道和可扩展数据系统的专业知识，我帮助组织充分发挥其数据的潜力。',
    'hero.collaboration': '我始终对新挑战和合作持开放态度。如果您正在进行一个需要数据专业知识、人工智能甚至是Vibe Coding的有趣项目，我很乐意了解！',
    'hero.exploreWork': '探索我的工作',
    'hero.getInTouch': '联系我',
    'about.title': 'Ajith Annavarapu',
    'about.description': '除了代码和数据，这里有更多关于我是谁的信息。',
    'about.bio1': '我是一名热情的数据工程师，拥有数据科学硕士学位，致力于构建将原始数据转化为有价值见解的强大且可扩展的数据系统。',
    'about.bio2': '当我不沉浸在数据中时，你会发现我在探索新的徒步路线，进行Vibe Coding，尝试烹饪食谱，或者沉浸在一部好的惊悚电影中。我相信持续学习和对周围世界保持好奇心。',
    'about.bio3': '我始终对新挑战和合作持开放态度。如果您正在进行一个需要数据专业知识的有趣项目，我很乐意了解！',
    'about.location': '位置:',
    'about.locationValue': 'Irving, TX',
    'about.education': '教育:',
    'about.educationValue': '数据科学硕士',
    'about.email': '电子邮件:',
    'contact.title': '联系信息',
    'contact.description': '我目前对自由职业机会、咨询工作和全职职位持开放态度。如果您认为我们可以一起工作，请随时联系我。',
    'contact.info': '联系信息',
    'contact.openTo': '我目前对自由职业机会、咨询工作和全职职位持开放态度。如果您认为我们可以一起工作，请随时联系我。',
    'contact.emailTitle': '电子邮件',
    'contact.linkedinTitle': 'LinkedIn',
    'contact.githubTitle': 'GitHub'
  }
};
