import React from 'react';
import { GraduationCap, Calendar, MapPin, BookOpen } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Formation = () => {
  const { t } = useLanguage();

  const formations = [
    {
      title: 'Concepteur Développeur D\'applications',
      degree: 'CDA - BAC +4',
      period: '2021 - 2022',
      institution: 'Greta de l\'Essonne',
      location: 'Massy, FRANCE',
      description: 'Le concepteur développeur informatique assure la conception et le développement d\'applications informatiques. Il réalise de nouvelles applications ou la maintenance évolutive d\'applications existantes.',
      type: 'formal'
    },
    {
      title: 'Développeur Web et Web Mobile',
      degree: 'DWWM - BAC +2',
      period: '2020 - 2021',
      institution: 'Greta de l\'Essonne',
      location: 'Arpajon, FRANCE',
      description: 'Concevez et développez du contenu interactif pour le web et le mobile sur les plateformes émergentes, les compétences et les connaissances exigées par l\'industrie et ouvrez la porte au monde de l\'animation.',
      type: 'formal'
    },
    {
      title: 'Cours en programmation',
      degree: 'JAVA',
      period: '2000 - 2001',
      institution: 'STG Intl. Ltd.',
      location: 'Puduchèry, INDE',
      description: 'Java fait partie des langages de programmation les plus populaires, principalement en raison de sa polyvalence et de sa compatibilité.',
      type: 'course'
    },
    {
      title: 'Cours en technologie',
      degree: 'Spécial WEB',
      period: '2000 - 2001',
      institution: 'Net Object Systems Pvt. Ltd.',
      location: 'Puduchèry, INDE',
      description: 'En savoir plus sur les éléments HTML, CSS et Javascript sont de style et combinés vous donnera un aperçu plus approfondi de ce qui fait qu\'une Spécial fonctionne.',
      type: 'course'
    },
    {
      title: 'Diplôme en PAO',
      degree: 'Publication assistée par ordinateur',
      period: '1999 - 2000',
      institution: 'University of Community College',
      location: 'Puduchèry, INDE',
      description: 'Savoir ce que Microsoft Word, Pagemaker, CorelDraw et Pagination pour la publication de livres et de presse donne un aperçu plus approfondi de ce qui fait un travail spécial.',
      type: 'formal'
    }
  ];

  const continuingEducation = [
    {
      title: 'Computer Networking - Digital Network Security',
      provider: 'Alison',
      field: 'Cybersecurity',
      year: '2023'
    },
    {
      title: 'Diploma in Identity and Access Management',
      provider: 'Alison',
      field: 'Cybersecurity',
      year: '2023'
    },
    {
      title: 'IT & Cybersecurity Risk Management Essential Training',
      provider: 'LinkedIn Learning',
      field: 'Cybersecurity',
      year: '2023'
    },
    {
      title: 'Intermediate Python Programming',
      provider: 'DataCamp',
      field: 'Python',
      year: '2022'
    }
  ];

  return (
    <section id="formation" className="py-20 bg-background">
      <div className="container-custom">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Formation
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
              Mon parcours académique et mes formations continues qui ont façonné mon expertise en développement et cybersécurité.
            </p>
            <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full"></div>
          </div>

          {/* Formal Education */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold mb-8 text-center">
              <GraduationCap className="inline-block mr-2 text-primary" />
              Formation Académique
            </h3>
            
            <div className="space-y-8">
              {formations.map((formation, index) => (
                <div
                  key={index}
                  className="glass-effect rounded-xl p-6 hover-lift animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                    {/* Icon and Timeline */}
                    <div className="flex-shrink-0">
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                        formation.type === 'formal' ? 'bg-primary/10 text-primary' : 'bg-accent/10 text-accent'
                      }`}>
                        {formation.type === 'formal' ? <GraduationCap className="h-6 w-6" /> : <BookOpen className="h-6 w-6" />}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-3">
                        <div>
                          <h4 className="text-xl font-semibold text-foreground mb-1">
                            {formation.title}
                          </h4>
                          <p className="text-primary font-medium">{formation.degree}</p>
                        </div>
                        <div className="flex items-center text-muted-foreground text-sm mt-2 sm:mt-0">
                          <Calendar className="h-4 w-4 mr-1" />
                          {formation.period}
                        </div>
                      </div>

                      <div className="flex items-center text-muted-foreground text-sm mb-3">
                        <MapPin className="h-4 w-4 mr-1" />
                        {formation.institution}, {formation.location}
                      </div>

                      <p className="text-muted-foreground leading-relaxed">
                        {formation.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Continuing Education */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 text-center">
              <BookOpen className="inline-block mr-2 text-accent" />
              Formation Continue
            </h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              {continuingEducation.map((course, index) => (
                <div
                  key={index}
                  className="glass-effect rounded-xl p-6 hover-lift animate-scale-in"
                  style={{ animationDelay: `${(index + formations.length) * 0.1}s` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-accent/10 text-accent flex items-center justify-center flex-shrink-0">
                      <BookOpen className="h-5 w-5" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-foreground mb-2 leading-tight">
                        {course.title}
                      </h4>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-sm text-muted-foreground">
                        <span className="font-medium">{course.provider}</span>
                        <span className="hidden sm:block">•</span>
                        <span className="px-2 py-1 bg-accent/10 text-accent rounded-full text-xs font-medium">
                          {course.field}
                        </span>
                        <span className="hidden sm:block">•</span>
                        <span>{course.year}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Formation;