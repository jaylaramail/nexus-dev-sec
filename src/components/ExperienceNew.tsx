import React from 'react';
import { Calendar, MapPin, Building, Code, Server, Shield, Globe } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const ExperienceNew = () => {
  const { language } = useLanguage();

  const experiences = [
    {
      title: language === 'fr' ? 'DÉVELOPPEUR WORDPRESS' : 'WORDPRESS DEVELOPER',
      company: 'ALTRUISTIC BUSINESS SOLUTIONS Pvt. Ltd.',
      type: language === 'fr' ? 'Bénévole' : 'Volunteer',
      location: 'Puduchéry, Inde (Télétravail)',
      period: '2023',
      icon: <Code className="h-5 w-5" />,
      color: 'text-blue-500'
    },
    {
      title: language === 'fr' ? 'DÉVELOPPEUR FULL-STACK' : 'FULL-STACK DEVELOPER',
      company: 'ALTRUISTIC BUSINESS SOLUTIONS Pvt. Ltd.',
      type: language === 'fr' ? 'Stagiaire' : 'Intern',
      location: 'Puduchéry, Inde (Télétravail)',
      period: '2022',
      icon: <Server className="h-5 w-5" />,
      color: 'text-green-500'
    },
    {
      title: language === 'fr' ? 'DÉVELOPPEUR WEB WOOCOMMERCE' : 'WOOCOMMERCE WEB DEVELOPER',
      company: 'CURETEA',
      type: language === 'fr' ? 'Stagiaire' : 'Intern',
      location: 'Paris, France',
      period: '2021',
      icon: <Globe className="h-5 w-5" />,
      color: 'text-purple-500'
    },
    {
      title: language === 'fr' ? 'TECHNIQUE SUPPORT' : 'TECHNICAL SUPPORT',
      company: 'ALTRUISTIC BUSINESS SOLUTIONS Pvt. Ltd.',
      type: language === 'fr' ? 'Freelancer à Distance' : 'Remote Freelancer',
      location: 'Puduchéry, Inde',
      period: '2019 - 2020',
      icon: <Shield className="h-5 w-5" />,
      color: 'text-orange-500'
    },
    {
      title: language === 'fr' ? 'SPÉCIALISTE DE SOUTIEN TECHNIQUE' : 'TECHNICAL SUPPORT SPECIALIST',
      company: 'ALTRUISTIC BUSINESS SOLUTIONS Pvt. Ltd.',
      type: 'Full-time',
      location: 'Puduchéry, Inde',
      period: '2015 - 2016',
      icon: <Server className="h-5 w-5" />,
      color: 'text-red-500'
    },
    {
      title: language === 'fr' ? 'ANALYSE TECHNIQUE DE RECHERCHE ET ANALYSE DESIGN' : 'RESEARCH TECHNICAL ANALYSIS & DESIGN ANALYST',
      company: 'CHENDURR TECHNOLOGIES Pvt. Ltd.',
      type: 'Full-time',
      location: 'Puduchéry, Inde',
      period: '2012 - 2015',
      icon: <Code className="h-5 w-5" />,
      color: 'text-cyan-500'
    }
  ];

  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
            {language === 'fr' ? 'Expérience Professionnelle' : 'Professional Experience'}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {language === 'fr' 
              ? 'Mon parcours professionnel dans le développement web et la cybersécurité'
              : 'My professional journey in web development and cybersecurity'
            }
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div 
                key={index}
                className="relative group"
              >
                {/* Timeline line */}
                {index !== experiences.length - 1 && (
                  <div className="absolute left-6 top-16 w-px h-full bg-border group-hover:bg-primary/30 transition-colors duration-300"></div>
                )}
                
                <div className="flex gap-6">
                  {/* Icon */}
                  <div className={`relative z-10 flex items-center justify-center w-12 h-12 rounded-full bg-background border-2 border-border group-hover:border-primary transition-all duration-300 ${exp.color}`}>
                    {exp.icon}
                  </div>

                  {/* Content */}
                  <div className="flex-1 pb-8">
                    <div className="bg-card hover:bg-card-hover border border-border rounded-xl p-6 transition-all duration-300 hover:shadow-lg hover-lift">
                      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-semibold text-foreground mb-1">
                            {exp.title}
                          </h3>
                          <div className="flex items-center gap-2 text-muted-foreground mb-2">
                            <Building className="h-4 w-4" />
                            <span className="font-medium">{exp.company}</span>
                            <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                              {exp.type}
                            </span>
                          </div>
                        </div>
                        
                        <div className="flex flex-col lg:items-end">
                          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-1">
                            <Calendar className="h-4 w-4" />
                            <span>{exp.period}</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <MapPin className="h-4 w-4" />
                            <span>{exp.location}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceNew;