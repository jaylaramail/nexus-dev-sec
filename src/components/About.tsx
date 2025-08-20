import React from 'react';
import { MapPin, Award, Clock, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import aboutProfileImg from '@/assets/about-profile.png';

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

  const education = [
    {
      title: 'Concepteur Développeur D\'applications (CDA) - BAC +4',
      period: '2021 - 2022',
      institution: 'Greta de l\'Essonne, Massy, FRANCE',
      description: 'Le concepteur développeur informatique assure la conception et le développement d\'applications informatiques.'
    },
    {
      title: 'Développeur Web et Web Mobile (DWWM) - BAC +2',
      period: '2020 - 2021',
      institution: 'Greta de l\'Essonne, Arpajon, FRANCE',
      description: 'Conception et développement de contenu interactif pour le web et le mobile.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-surface">
      <div className="container-custom">
        <div className="max-w-7xl mx-auto">
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
                  J'ai plusieurs années d'expérience dans le secteur informatique et des services, notamment 
                  HTML-5, CSS, JS, Bootstrap, SEO, XML, JSON, jQuery, PHP, Node JS, MariaDB, MySQL, 
                  Symphony, Laravel, Angular 7, React Native, React JS, CMS, WordPress, RGPD, 
                  Cybersécurité, Back office, Graphisme, Multimédia, Systèmes et Gestion de Serveurs.
                </p>
                
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Joueur d'équipe, j'aime rencontrer de nouvelles personnes et j'ai l'habitude de 
                  travailler en mode projet avec un souci constant de relation client. De plus, 
                  extrêmement organisé par ma grande éthique de travail et mes compétences sociales 
                  sera très utile pour répondre aux besoins de l'organisation.
                </p>

                {/* Location & Contact */}
                <div className="flex items-center gap-3 text-foreground font-medium">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span>{t('about.location')}</span>
                </div>

                {/* CV Download */}
                <div className="pt-4">
                  <Button
                    variant="outline"
                    size="lg"
                    className="group"
                    onClick={() => window.open('https://jayvues.web.app/assets/resource/JAY-CV.pdf', '_blank')}
                  >
                    <Download className="h-5 w-5 mr-2 group-hover:animate-bounce" />
                    Télécharger mon CV
                  </Button>
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

            {/* Profile Image */}
            <div className="animate-scale-in">
              <div className="relative">
                <div className="aspect-square rounded-2xl bg-gradient-card p-4 shadow-glow overflow-hidden">
                  <div className="w-full h-full rounded-xl relative overflow-hidden">
                    <img
                      src={aboutProfileImg}
                      alt="Kumar - Profile"
                      className="w-full h-full object-cover"
                      onContextMenu={(e) => e.preventDefault()}
                      onDragStart={(e) => e.preventDefault()}
                      style={{ imageRendering: 'crisp-edges' }}
                    />
                    
                    {/* Overlay with info */}
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-4 left-4 right-4 text-white">
                        <h3 className="text-xl font-semibold mb-1">Kumar</h3>
                        <p className="text-sm opacity-90">Developer Web | Mobile | Application</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Floating elements */}
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-primary/20 rounded-full animate-pulse"></div>
                <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-accent/20 rounded-full animate-pulse delay-1000"></div>
              </div>
            </div>
          </div>

          {/* Education Section */}
          <div className="mt-20 animate-fade-in">
            <h3 className="text-3xl font-bold text-center mb-12 gradient-text">Formation</h3>
            <div className="grid md:grid-cols-2 gap-8">
              {education.map((edu, index) => (
                <div key={index} className="glass-effect rounded-xl p-6 hover-lift">
                  <div className="space-y-3">
                    <h4 className="text-lg font-semibold text-foreground">
                      {edu.title}
                    </h4>
                    <div className="text-primary font-medium">
                      {edu.period}
                    </div>
                    <div className="text-muted-foreground font-medium">
                      {edu.institution}
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {edu.description}
                    </p>
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

export default About;