import React from 'react';
import { MapPin, Award, Clock } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const About = () => {
  const { t } = useLanguage();

  const stats = [
    {
      icon: Award,
      number: '21+',
      label: t('about.projects.completed'),
      color: 'text-primary',
    },
    {
      icon: Clock,
      number: '5+',
      label: 'Years Experience',
      color: 'text-accent',
    },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-surface">
      <div className="container-custom">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              {t('about.title')}
            </h2>
            <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <div className="animate-slide-up">
              <div className="space-y-6">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {t('about.description')}
                </p>
                
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Au plaisir de vous rencontrer prochainement pour vous présenter plus en détail 
                  mon parcours, en attendant veuillez recevoir, Madame, Monsieur, l'expression 
                  de mes meilleurs sentiments.
                </p>

                {/* Location */}
                <div className="flex items-center gap-3 text-foreground font-medium">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span>{t('about.location')}</span>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-6 pt-8">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center p-6 glass-effect rounded-lg hover-lift">
                      <stat.icon className={`h-8 w-8 mx-auto mb-3 ${stat.color}`} />
                      <div className="text-3xl font-bold gradient-text mb-2">
                        {stat.number}
                      </div>
                      <div className="text-sm text-muted-foreground font-medium">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="text-center text-muted-foreground italic pt-4">
                  {t('about.projects.ongoing')}
                </div>
              </div>
            </div>

            {/* Profile Image Area */}
            <div className="animate-scale-in">
              <div className="relative">
                <div className="aspect-square rounded-2xl bg-gradient-card p-8 shadow-glow">
                  <div className="w-full h-full rounded-xl bg-gradient-primary/10 flex items-center justify-center relative overflow-hidden">
                    {/* Professional illustration placeholder */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20"></div>
                    <div className="relative z-10 text-center">
                      <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-primary/20 flex items-center justify-center border-4 border-primary/30">
                        <div className="text-4xl font-bold gradient-text">&lt;K/&gt;</div>
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-xl font-semibold gradient-text">Kumar</h3>
                        <p className="text-muted-foreground text-sm">
                          Developer Web | Mobile | Application
                        </p>
                        <p className="text-xs text-muted-foreground italic max-w-xs mx-auto">
                          "Une personne qui vend des services à des employeurs sans engagement 
                          à long terme envers aucun d'entre eux"
                        </p>
                      </div>
                    </div>
                    
                    {/* Decorative elements */}
                    <div className="absolute top-4 right-4 w-16 h-16 bg-primary/10 rounded-full blur-xl"></div>
                    <div className="absolute bottom-4 left-4 w-20 h-20 bg-accent/10 rounded-full blur-xl"></div>
                  </div>
                </div>
                
                {/* Floating elements */}
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-primary/20 rounded-full animate-pulse"></div>
                <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-accent/20 rounded-full animate-pulse delay-1000"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;