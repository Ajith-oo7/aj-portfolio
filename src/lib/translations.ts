
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
  | 'skills.version'
  | 'hero.title'
  | 'hero.subtitle'
  | 'hero.description'
  | 'hero.openTo'
  | 'hero.exploreWork'
  | 'hero.getInTouch'
  | 'journey.title'
  | 'journey.description'
  | 'journey.paragraph1'
  | 'journey.paragraph2'
  | 'projects.title'
  | 'projects.description'
  | 'certifications.title'
  | 'certifications.description'
  | 'about.title'
  | 'about.description'
  | 'about.paragraph1'
  | 'about.paragraph2'
  | 'about.paragraph3'
  | 'about.location'
  | 'about.education'
  | 'about.email'
  | 'contact.title'
  | 'contact.description'
  | 'contact.paragraph'
  | 'contact.email'
  | 'contact.linkedin'
  | 'contact.github'
  | 'footer.rights'
  | 'footer.builtWith';

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
    'skills.version': 'Version Control',
    'hero.title': 'Hi, I\'m Ajith Annavarapu',
    'hero.subtitle': 'Data Engineer & Data Scientist',
    'hero.description': 'I transform raw data into meaningful insights that drive business decisions. With expertise in building robust data pipelines and scalable data systems, I help organizations harness the full potential of their data.',
    'hero.openTo': 'I\'m always open to new challenges and collaborations. If you\'re working on an interesting project that requires data expertise, A.I or even Vibe Coding. I\'d love to hear about it!',
    'hero.exploreWork': 'Explore My Work',
    'hero.getInTouch': 'Get in Touch',
    'journey.title': 'My Journey',
    'journey.description': 'From curious data enthusiast to professional data engineer.',
    'journey.paragraph1': 'My journey in the data field began with a fascination for extracting insights from raw information. Starting with a solid foundation in computer science, I quickly developed expertise in data engineering and analytics, working across various domains and technologies.',
    'journey.paragraph2': 'Along this path, I\'ve continually expanded my skills, adapting to emerging technologies and methodologies, and building a comprehensive toolkit that allows me to tackle complex data challenges with confidence and creativity.',
    'projects.title': 'Featured Projects',
    'projects.description': 'A selection of my work that showcases my skills and experience.',
    'certifications.title': 'Certifications',
    'certifications.description': 'Professional certifications and achievements.',
    'about.title': 'About Me',
    'about.description': 'Beyond the code and data, here\'s a bit more about who I am.',
    'about.paragraph1': 'I\'m a passionate Data Engineer with a Master\'s degree in Data Science, dedicated to building robust and scalable data systems that transform raw data into valuable insights.',
    'about.paragraph2': 'When I\'m not immersed in data, you\'ll find me exploring new hiking trails, Vibe Coding, experimenting with cooking recipes, or diving into a good thriller movie. I believe in continuous learning and staying curious about the world around us.',
    'about.paragraph3': 'I\'m always open to new challenges and collaborations. If you\'re working on an interesting project that requires data expertise, I\'d love to hear about it!',
    'about.location': 'Location:',
    'about.education': 'Education:',
    'about.email': 'Email:',
    'contact.title': 'Get In Touch',
    'contact.description': 'Interested in working together? Feel free to reach out!',
    'contact.paragraph': 'I\'m currently open to freelance opportunities, consulting work, and full-time positions. Don\'t hesitate to reach out if you think we could work together!',
    'contact.email': 'Email',
    'contact.linkedin': 'LinkedIn',
    'contact.github': 'GitHub',
    'footer.rights': '© 2025 Ajith Annavarapu. All rights reserved.',
    'footer.builtWith': 'Built with React, TailwindCSS, and Three.js'
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
    'skills.version': 'Control de Versiones',
    'hero.title': 'Hola, soy Ajith Annavarapu',
    'hero.subtitle': 'Ingeniero de Datos y Científico de Datos',
    'hero.description': 'Transformo datos brutos en información significativa que impulsa decisiones empresariales. Con experiencia en la construcción de canalizaciones de datos robustas y sistemas de datos escalables, ayudo a las organizaciones a aprovechar todo el potencial de sus datos.',
    'hero.openTo': '¡Siempre estoy abierto a nuevos desafíos y colaboraciones! Si estás trabajando en un proyecto interesante que requiere experiencia en datos, IA o incluso Vibe Coding, ¡me encantaría saber de ti!',
    'hero.exploreWork': 'Explorar mi trabajo',
    'hero.getInTouch': 'Contactar',
    'journey.title': 'Mi Trayectoria',
    'journey.description': 'De entusiasta curioso de datos a ingeniero de datos profesional.',
    'journey.paragraph1': 'Mi viaje en el campo de los datos comenzó con una fascinación por extraer información valiosa de datos sin procesar. Comenzando con una base sólida en informática, rápidamente desarrollé experiencia en ingeniería y análisis de datos, trabajando en diversos dominios y tecnologías.',
    'journey.paragraph2': 'A lo largo de este camino, he expandido continuamente mis habilidades, adaptándome a tecnologías y metodologías emergentes, y construyendo un conjunto completo de herramientas que me permite abordar desafíos complejos de datos con confianza y creatividad.',
    'projects.title': 'Proyectos Destacados',
    'projects.description': 'Una selección de mi trabajo que muestra mis habilidades y experiencia.',
    'certifications.title': 'Certificaciones',
    'certifications.description': 'Certificaciones y logros profesionales.',
    'about.title': 'Sobre Mí',
    'about.description': 'Más allá del código y los datos, aquí hay un poco más sobre quién soy.',
    'about.paragraph1': 'Soy un apasionado Ingeniero de Datos con una Maestría en Ciencia de Datos, dedicado a construir sistemas de datos robustos y escalables que transforman datos sin procesar en información valiosa.',
    'about.paragraph2': 'Cuando no estoy inmerso en datos, me encontrarás explorando nuevas rutas de senderismo, haciendo Vibe Coding, experimentando con recetas de cocina o sumergiéndome en una buena película de suspenso. Creo en el aprendizaje continuo y en mantener la curiosidad sobre el mundo que nos rodea.',
    'about.paragraph3': 'Siempre estoy abierto a nuevos desafíos y colaboraciones. Si estás trabajando en un proyecto interesante que requiere experiencia en datos, ¡me encantaría saber de ello!',
    'about.location': 'Ubicación:',
    'about.education': 'Educación:',
    'about.email': 'Correo electrónico:',
    'contact.title': 'Ponte en Contacto',
    'contact.description': '¿Interesado en trabajar juntos? ¡No dudes en contactarme!',
    'contact.paragraph': 'Actualmente estoy abierto a oportunidades de trabajo freelance, consultoría y posiciones a tiempo completo. ¡No dudes en contactarme si crees que podríamos trabajar juntos!',
    'contact.email': 'Correo electrónico',
    'contact.linkedin': 'LinkedIn',
    'contact.github': 'GitHub',
    'footer.rights': '© 2025 Ajith Annavarapu. Todos los derechos reservados.',
    'footer.builtWith': 'Construido con React, TailwindCSS y Three.js'
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
    'skills.version': 'Contrôle de Version',
    'hero.title': 'Bonjour, je suis Ajith Annavarapu',
    'hero.subtitle': 'Ingénieur de Données et Data Scientist',
    'hero.description': 'Je transforme les données brutes en informations significatives qui guident les décisions d\'entreprise. Avec une expertise dans la construction de pipelines de données robustes et de systèmes de données évolutifs, j\'aide les organisations à exploiter tout le potentiel de leurs données.',
    'hero.openTo': 'Je suis toujours ouvert à de nouveaux défis et collaborations. Si vous travaillez sur un projet intéressant qui nécessite une expertise en données, en IA ou même en Vibe Coding, j\'aimerais en entendre parler !',
    'hero.exploreWork': 'Explorer mon travail',
    'hero.getInTouch': 'Me contacter',
    'journey.title': 'Mon Parcours',
    'journey.description': 'D\'un passionné de données curieux à un ingénieur de données professionnel.',
    'journey.paragraph1': 'Mon parcours dans le domaine des données a commencé par une fascination pour l\'extraction d\'informations à partir de données brutes. Partant d\'une solide formation en informatique, j\'ai rapidement développé une expertise en ingénierie et en analyse de données, travaillant dans divers domaines et technologies.',
    'journey.paragraph2': 'Tout au long de ce parcours, j\'ai continuellement élargi mes compétences, en m\'adaptant aux technologies et méthodologies émergentes, et en construisant une boîte à outils complète qui me permet d\'aborder des défis complexes liés aux données avec confiance et créativité.',
    'projects.title': 'Projets en Vedette',
    'projects.description': 'Une sélection de mon travail qui met en valeur mes compétences et mon expérience.',
    'certifications.title': 'Certifications',
    'certifications.description': 'Certifications et réalisations professionnelles.',
    'about.title': 'À Propos de Moi',
    'about.description': 'Au-delà du code et des données, voici un peu plus sur qui je suis.',
    'about.paragraph1': 'Je suis un Ingénieur de Données passionné avec un Master en Science des Données, dédié à la construction de systèmes de données robustes et évolutifs qui transforment les données brutes en informations précieuses.',
    'about.paragraph2': 'Quand je ne suis pas plongé dans les données, vous me trouverez en train d\'explorer de nouveaux sentiers de randonnée, de faire du Vibe Coding, d\'expérimenter des recettes de cuisine ou de me plonger dans un bon film à suspense. Je crois en l\'apprentissage continu et à rester curieux sur le monde qui nous entoure.',
    'about.paragraph3': 'Je suis toujours ouvert à de nouveaux défis et collaborations. Si vous travaillez sur un projet intéressant qui nécessite une expertise en données, j\'aimerais en entendre parler !',
    'about.location': 'Emplacement:',
    'about.education': 'Éducation:',
    'about.email': 'Email:',
    'contact.title': 'Prendre Contact',
    'contact.description': 'Intéressé à travailler ensemble? N\'hésitez pas à me contacter!',
    'contact.paragraph': 'Je suis actuellement ouvert aux opportunités de freelance, de conseil et de postes à temps plein. N\'hésitez pas à me contacter si vous pensez que nous pourrions travailler ensemble!',
    'contact.email': 'Email',
    'contact.linkedin': 'LinkedIn',
    'contact.github': 'GitHub',
    'footer.rights': '© 2025 Ajith Annavarapu. Tous droits réservés.',
    'footer.builtWith': 'Construit avec React, TailwindCSS, et Three.js'
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
    'skills.version': 'Versionskontrolle',
    'hero.title': 'Hallo, ich bin Ajith Annavarapu',
    'hero.subtitle': 'Dateningenieur & Data Scientist',
    'hero.description': 'Ich transformiere Rohdaten in aussagekräftige Erkenntnisse, die Geschäftsentscheidungen vorantreiben. Mit Expertise im Aufbau robuster Datenpipelines und skalierbarer Datensysteme helfe ich Organisationen, das volle Potenzial ihrer Daten auszuschöpfen.',
    'hero.openTo': 'Ich bin immer offen für neue Herausforderungen und Kooperationen. Wenn Sie an einem interessanten Projekt arbeiten, das Datenexpertise, KI oder sogar Vibe Coding erfordert, würde ich gerne davon hören!',
    'hero.exploreWork': 'Meine Arbeit erkunden',
    'hero.getInTouch': 'Kontakt aufnehmen',
    'journey.title': 'Meine Reise',
    'journey.description': 'Vom neugierigen Datenentusiast zum professionellen Dateningenieur.',
    'journey.paragraph1': 'Meine Reise im Datenbereich begann mit einer Faszination für die Gewinnung von Erkenntnissen aus Rohinformationen. Auf der Basis eines soliden Fundaments in der Informatik entwickelte ich schnell Expertise in Datenengineering und -analyse und arbeitete in verschiedenen Domänen und mit verschiedenen Technologien.',
    'journey.paragraph2': 'Auf diesem Weg habe ich meine Fähigkeiten kontinuierlich erweitert, mich an neue Technologien und Methoden angepasst und ein umfassendes Toolkit aufgebaut, das es mir ermöglicht, komplexe Datenherausforderungen mit Zuversicht und Kreativität anzugehen.',
    'projects.title': 'Ausgewählte Projekte',
    'projects.description': 'Eine Auswahl meiner Arbeiten, die meine Fähigkeiten und Erfahrungen zeigt.',
    'certifications.title': 'Zertifizierungen',
    'certifications.description': 'Berufliche Zertifizierungen und Erfolge.',
    'about.title': 'Über Mich',
    'about.description': 'Über den Code und die Daten hinaus, hier ist ein bisschen mehr darüber, wer ich bin.',
    'about.paragraph1': 'Ich bin ein leidenschaftlicher Dateningenieur mit einem Master-Abschluss in Data Science, der sich dem Aufbau robuster und skalierbarer Datensysteme widmet, die Rohdaten in wertvolle Erkenntnisse umwandeln.',
    'about.paragraph2': 'Wenn ich nicht in Daten vertieft bin, findet man mich auf der Erkundung neuer Wanderwege, beim Vibe Coding, beim Experimentieren mit Kochrezepten oder beim Eintauchen in einen guten Thriller. Ich glaube an kontinuierliches Lernen und bleibe neugierig auf die Welt um uns herum.',
    'about.paragraph3': 'Ich bin immer offen für neue Herausforderungen und Kooperationen. Wenn Sie an einem interessanten Projekt arbeiten, das Datenexpertise erfordert, würde ich gerne davon hören!',
    'about.location': 'Standort:',
    'about.education': 'Ausbildung:',
    'about.email': 'E-Mail:',
    'contact.title': 'Kontakt Aufnehmen',
    'contact.description': 'Interessiert an einer Zusammenarbeit? Zögern Sie nicht, mich zu kontaktieren!',
    'contact.paragraph': 'Ich bin derzeit offen für Freiberufliche Tätigkeiten, Beratungsarbeit und Vollzeitstellen. Zögern Sie nicht, mich zu kontaktieren, wenn Sie denken, dass wir zusammenarbeiten könnten!',
    'contact.email': 'E-Mail',
    'contact.linkedin': 'LinkedIn',
    'contact.github': 'GitHub',
    'footer.rights': '© 2025 Ajith Annavarapu. Alle Rechte vorbehalten.',
    'footer.builtWith': 'Erstellt mit React, TailwindCSS und Three.js'
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
    'skills.version': '版本控制',
    'hero.title': '你好，我是Ajith Annavarapu',
    'hero.subtitle': '数据工程师和数据科学家',
    'hero.description': '我将原始数据转化为有意义的见解，推动业务决策。凭借构建强大数据管道和可扩展数据系统的专业知识，我帮助组织充分发挥其数据的潜力。',
    'hero.openTo': '我总是乐于接受新的挑战和合作。如果您正在开展需要数据专业知识、人工智能甚至是Vibe Coding的有趣项目，我很乐意了解更多！',
    'hero.exploreWork': '探索我的工作',
    'hero.getInTouch': '联系我',
    'journey.title': '我的旅程',
    'journey.description': '从好奇的数据爱好者到专业的数据工程师。',
    'journey.paragraph1': '我在数据领域的旅程始于对从原始信息中提取见解的着迷。在计算机科学的坚实基础上，我迅速发展了数据工程和分析方面的专业知识，在各种领域和技术中工作。',
    'journey.paragraph2': '在这个过程中，我不断扩展自己的技能，适应新兴技术和方法，并建立了一个全面的工具包，使我能够自信和创造性地应对复杂的数据挑战。',
    'projects.title': '精选项目',
    'projects.description': '展示我的技能和经验的工作选集。',
    'certifications.title': '认证',
    'certifications.description': '专业认证和成就。',
    'about.title': '关于我',
    'about.description': '除了代码和数据，这里有更多关于我是谁的信息。',
    'about.paragraph1': '我是一位热情的数据工程师，拥有数据科学硕士学位，致力于构建将原始数据转化为有价值见解的强大和可扩展的数据系统。',
    'about.paragraph2': '当我不沉浸在数据中时，你会发现我在探索新的徒步路线，进行Vibe Coding，尝试烹饪食谱，或深入一部好的惊悚电影。我相信持续学习并对周围世界保持好奇心。',
    'about.paragraph3': '我总是乐于接受新的挑战和合作。如果您正在开展需要数据专业知识的有趣项目，我很乐意了解更多！',
    'about.location': '位置：',
    'about.education': '教育：',
    'about.email': '电子邮件：',
    'contact.title': '联系我',
    'contact.description': '对合作感兴趣？随时与我联系！',
    'contact.paragraph': '我目前接受自由职业机会、咨询工作和全职职位。如果您认为我们可以合作，请随时联系我！',
    'contact.email': '电子邮件',
    'contact.linkedin': 'LinkedIn',
    'contact.github': 'GitHub',
    'footer.rights': '© 2025 Ajith Annavarapu。保留所有权利。',
    'footer.builtWith': '使用React、TailwindCSS和Three.js构建'
  }
};

