import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type Language = 'en' | 'fr';

export interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Translations
const translations = {
  en: {
    // Navigation
    'nav.about': 'About',
    'nav.skills': 'Skills',
    'nav.projects': 'Projects',
    'nav.contact': 'Contact',
    
    // Hero Section
    'hero.greeting': 'Hi, I\'m',
    'hero.title': 'Application Developer & Cybersecurity Specialist',
    'hero.subtitle': 'More than 10 years of experience in IT and services sector, specializing in modern web development, full-stack applications, and cybersecurity. Based in Massy, France.',
    'hero.cta.contact': 'Get In Touch',
    'hero.cta.projects': 'View Projects',
    
    // About Section
    'about.title': 'About Me',
    'about.description': 'I have years of experience in IT and services, specializing in web development and cybersecurity. Team player who loves meeting new people and working in project mode with constant focus on client relationships.',
    'about.location': 'Massy, France',
    'about.projects.completed': 'Completed Projects',
    'about.projects.ongoing': 'Always working on more...',
    
    // Skills Section
    'skills.title': 'Technical Skills',
    'skills.subtitle': 'Skills are what make me confident and independent in programming and are essential for success.',
    'skills.web.title': 'Web Development',
    'skills.mobile.title': 'Mobile Development',
    'skills.security.title': 'Cybersecurity',
    'skills.tools.title': 'Tools & Others',
    
    // Projects Section
    'projects.title': 'Featured Projects',
    'projects.subtitle': 'Here are some of the projects I\'ve worked on recently.',
    'projects.view': 'View Project',
    'projects.code': 'View Code',
    
    // Contact Section
    'contact.title': 'Get In Touch',
    'contact.subtitle': 'Ready to work together? Let\'s discuss your project.',
    'contact.form.name': 'Your Name',
    'contact.form.email': 'Your Email',
    'contact.form.subject': 'Subject',
    'contact.form.message': 'Your Message',
    'contact.form.send': 'Send Message',
    'contact.form.sending': 'Sending...',
    'contact.success': 'Message sent successfully!',
    'contact.error': 'Failed to send message. Please try again.',
    
    // Footer
    'footer.rights': 'All rights reserved.',
    'footer.built': 'Built with React & TypeScript',
    
    // Common
    'common.loading': 'Loading...',
    'common.error': 'An error occurred',
  },
  fr: {
    // Navigation
    'nav.about': 'À propos',
    'nav.skills': 'Compétences',
    'nav.projects': 'Projets',
    'nav.contact': 'Contact',
    
    // Hero Section
    'hero.greeting': 'Salut, je suis',
    'hero.title': 'Développeur d\'Application & Spécialiste Cybersécurité',
    'hero.subtitle': 'Plus de 10 années d\'expérience dans le secteur informatique et des services, spécialisé dans le développement web moderne, applications full-stack et cybersécurité. Basé à Massy, France.',
    'hero.cta.contact': 'Me Contacter',
    'hero.cta.projects': 'Voir les Projets',
    
    // About Section
    'about.title': 'À propos de moi',
    'about.description': 'J\'ai des années d\'expérience dans le secteur informatique et des services, notamment en développement web et cybersécurité. Joueur d\'équipe, j\'aime rencontrer de nouvelles personnes et travailler en mode projet avec un souci constant de relation client.',
    'about.location': 'Massy, France',
    'about.projects.completed': 'Projets Terminés',
    'about.projects.ongoing': 'Toujours en cours plus...',
    
    // Skills Section
    'skills.title': 'Compétences Techniques',
    'skills.subtitle': 'Les compétences sont ce qui rend confiant et indépendant dans la programmation et sont essentielles à la réussite.',
    'skills.web.title': 'Développement Web',
    'skills.mobile.title': 'Développement Mobile',
    'skills.security.title': 'Cybersécurité',
    'skills.tools.title': 'Outils & Autres',
    
    // Projects Section
    'projects.title': 'Projets Principaux',
    'projects.subtitle': 'Voici quelques projets sur lesquels j\'ai travaillé récemment.',
    'projects.view': 'Voir le Projet',
    'projects.code': 'Voir le Code',
    
    // Contact Section
    'contact.title': 'Contactez-moi',
    'contact.subtitle': 'Prêt à travailler ensemble ? Discutons de votre projet.',
    'contact.form.name': 'Votre Nom',
    'contact.form.email': 'Votre Email',
    'contact.form.subject': 'Sujet',
    'contact.form.message': 'Votre Message',
    'contact.form.send': 'Envoyer le Message',
    'contact.form.sending': 'Envoi en cours...',
    'contact.success': 'Message envoyé avec succès !',
    'contact.error': 'Échec de l\'envoi du message. Veuillez réessayer.',
    
    // Footer
    'footer.rights': 'Tous droits réservés.',
    'footer.built': 'Créé avec React & TypeScript',
    
    // Common
    'common.loading': 'Chargement...',
    'common.error': 'Une erreur s\'est produite',
  },
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('fr'); // Default to French

  // Load language preference from localStorage
  useEffect(() => {
    const savedLanguage = localStorage.getItem('portfolio-language') as Language;
    if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'fr')) {
      setLanguage(savedLanguage);
    }
  }, []);

  // Save language preference to localStorage
  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('portfolio-language', lang);
  };

  // Translation function
  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  const value: LanguageContextType = {
    language,
    setLanguage: handleSetLanguage,
    t,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};