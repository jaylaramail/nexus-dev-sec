import React from 'react';
import { GraduationCap, Calendar, MapPin, Award, BookOpen } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const FormationNew = () => {
  const { language } = useLanguage();

  const formations = [
    {
      title: language === 'fr' ? 'Concepteur Développeur D\'applications (CDA) - BAC +4' : 'Application Developer Designer (CDA) - BAC +4',
      institution: 'Greta de l\'Essonne',
      location: 'Massy, FRANCE',
      period: '2021 - 2022',
      description: language === 'fr' 
        ? 'Le concepteur développeur informatique assure la conception et le développement d\'applications informatiques. Il réalise de nouvelles applications ou la maintenance évolutive d\'applications existantes.'
        : 'The IT developer designer ensures the design and development of computer applications. They create new applications or perform evolutionary maintenance on existing applications.',
      type: 'primary',
      icon: <GraduationCap className="h-6 w-6" />
    },
    {
      title: language === 'fr' ? 'Développeur Web et Web Mobile (DWWM) - BAC +2' : 'Web and Mobile Web Developer (DWWM) - BAC +2',
      institution: 'Greta de l\'Essonne',
      location: 'Arpajon, FRANCE',
      period: '2020 - 2021',
      description: language === 'fr'
        ? 'Concevez et développez du contenu interactif pour le web et le mobile sur les plateformes émergentes, les compétences et les connaissances exigées par l\'industrie et ouvrez la porte au monde de l\'animation.'
        : 'Design and develop interactive content for web and mobile on emerging platforms, industry-required skills and knowledge, opening the door to the animation world.',
      type: 'primary',
      icon: <BookOpen className="h-6 w-6" />
    },
    {
      title: language === 'fr' ? 'Cours en programmation (JAVA)' : 'Programming Course (JAVA)',
      institution: 'STG Intl. Ltd.',
      location: 'Puduchéry, INDE',
      period: '2000 - 2001',
      description: language === 'fr'
        ? 'Java fait partie des langages de programmation les plus populaires, principalement en raison de sa polyvalence et de sa compatibilité.'
        : 'Java is one of the most popular programming languages, mainly due to its versatility and compatibility.',
      type: 'secondary',
      icon: <Award className="h-6 w-6" />
    },
    {
      title: language === 'fr' ? 'Cours en technologie (Spécial WEB)' : 'Technology Course (Special WEB)',
      institution: 'Net Object Systems Pvt. Ltd.',
      location: 'Puduchéry, INDE',
      period: '2000 - 2001',
      description: language === 'fr'
        ? 'En savoir plus sur les éléments HTML, CSS et Javascript sont de style et combinés vous donnera un aperçu plus approfondi de ce qui fait qu\'une Spécial fonctionne.'
        : 'Learning more about HTML, CSS and Javascript styling elements and their combination gives you deeper insight into what makes a Special work.',
      type: 'secondary',
      icon: <BookOpen className="h-6 w-6" />
    },
    {
      title: language === 'fr' ? 'Diplôme en PAO (Publication assistée par ordinateur)' : 'DTP Diploma (Desktop Publishing)',
      institution: 'University of Community College',
      location: 'Puduchéry, INDE',
      period: '1999 - 2000',
      description: language === 'fr'
        ? 'Savoir ce que Microsoft Word, Pagemaker, CorelDraw et Pagination pour la publication de livres et de presse donne un aperçu plus approfondi de ce qui fait un travail spécial.'
        : 'Learning Microsoft Word, Pagemaker, CorelDraw and Pagination for book and press publishing provides deeper insight into what makes special work.',
      type: 'secondary',
      icon: <Award className="h-6 w-6" />
    }
  ];

  const onlineFormations = [
    {
      title: language === 'fr' ? 'COMPUTER NETWORKING - DIGITAL NETWORK SECURITY' : 'COMPUTER NETWORKING - DIGITAL NETWORK SECURITY',
      provider: 'Alison - Cybersecurity',
      year: '2023',
      category: 'cybersecurity'
    },
    {
      title: language === 'fr' ? 'DIPLOMA IN IDENTITY AND ACCESS MANAGEMENT' : 'DIPLOMA IN IDENTITY AND ACCESS MANAGEMENT',
      provider: 'Alison - Cybersecurity',
      year: '2023',
      category: 'cybersecurity'
    },
    {
      title: language === 'fr' ? 'IT & CYBERSECURITY RISK MANAGEMENT ESSENTIAL TRAINING' : 'IT & CYBERSECURITY RISK MANAGEMENT ESSENTIAL TRAINING',
      provider: 'LinkedIn - Cybersecurity',
      year: '2023',
      category: 'cybersecurity'
    },
    {
      title: language === 'fr' ? 'INTERMEDIATE PYTHON PROGRAMMING' : 'INTERMEDIATE PYTHON PROGRAMMING',
      provider: 'DataCamp - Python',
      year: '2022',
      category: 'programming'
    }
  ];

  return (
    <section id="formation" className="py-20 bg-background">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
            {language === 'fr' ? 'Formation & Éducation' : 'Education & Training'}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {language === 'fr' 
              ? 'Mon parcours éducatif et mes formations continues en développement et cybersécurité'
              : 'My educational journey and continuous training in development and cybersecurity'
            }
          </p>
        </div>

        {/* Formal Education */}
        <div className="max-w-4xl mx-auto mb-16">
          <h3 className="text-2xl font-semibold mb-8 text-center">
            {language === 'fr' ? 'Formation Académique' : 'Academic Education'}
          </h3>
          
          <div className="space-y-8">
            {formations.map((formation, index) => (
              <div 
                key={index}
                className="relative group"
              >
                {/* Timeline line */}
                {index !== formations.length - 1 && (
                  <div className="absolute left-8 top-20 w-px h-full bg-border group-hover:bg-primary/30 transition-colors duration-300"></div>
                )}
                
                <div className="flex gap-6">
                  {/* Icon */}
                  <div className={`relative z-10 flex items-center justify-center w-16 h-16 rounded-full ${formation.type === 'primary' ? 'bg-primary text-primary-foreground' : 'bg-secondary text-secondary-foreground'} border-4 border-background shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    {formation.icon}
                  </div>

                  {/* Content */}
                  <div className="flex-1 pb-8">
                    <div className="bg-card hover:bg-card-hover border border-border rounded-xl p-6 transition-all duration-300 hover:shadow-lg hover-lift">
                      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                        <div className="flex-1">
                          <h4 className="text-xl font-semibold text-foreground mb-2">
                            {formation.title}
                          </h4>
                          <div className="flex items-center gap-2 text-muted-foreground mb-2">
                            <GraduationCap className="h-4 w-4" />
                            <span className="font-medium">{formation.institution}</span>
                          </div>
                          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-3">
                            <div className="flex items-center gap-2">
                              <Calendar className="h-4 w-4" />
                              <span>{formation.period}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <MapPin className="h-4 w-4" />
                              <span>{formation.location}</span>
                            </div>
                          </div>
                          <p className="text-muted-foreground leading-relaxed">
                            {formation.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Online Certifications */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-semibold mb-8 text-center">
            {language === 'fr' ? 'Formation Continue & Certifications' : 'Continuous Learning & Certifications'}
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            {onlineFormations.map((cert, index) => (
              <div 
                key={index}
                className="bg-card hover:bg-card-hover border border-border rounded-xl p-6 transition-all duration-300 hover:shadow-lg hover-lift"
              >
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full mb-4 ${cert.category === 'cybersecurity' ? 'bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400' : 'bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400'}`}>
                  {cert.category === 'cybersecurity' ? <Award className="h-6 w-6" /> : <BookOpen className="h-6 w-6" />}
                </div>
                
                <h4 className="text-lg font-semibold text-foreground mb-2">
                  {cert.title}
                </h4>
                
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground font-medium">
                    {cert.provider}
                  </span>
                  <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                    {cert.year}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FormationNew;