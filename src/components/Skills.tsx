import React from 'react';
import { Code, Database, Palette, Settings, Smartphone, Shield } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Skills = () => {
  const { t } = useLanguage();

  const skillCategories = [
    {
      icon: Code,
      title: t('skills.web.title'),
      color: 'text-primary',
      bgColor: 'bg-primary/10',
      skills: [
        { name: 'HTML5', level: 75 },
        { name: 'CSS3', level: 80 },
        { name: 'JavaScript', level: 85 },
        { name: 'PHP', level: 90 },
        { name: 'Node.js', level: 85 },
        { name: 'React.js', level: 80 },
        { name: 'Angular 7', level: 70 },
        { name: 'Laravel', level: 85 },
        { name: 'Symphony', level: 75 },
        { name: 'Bootstrap', level: 90 },
        { name: 'jQuery', level: 85 },
        { name: 'SEO', level: 80 }
      ]
    },
    {
      icon: Smartphone,
      title: t('skills.mobile.title'),
      color: 'text-accent',
      bgColor: 'bg-accent/10',
      skills: [
        { name: 'React Native', level: 80 },
        { name: 'Flutter', level: 70 },
        { name: 'Ionic', level: 75 },
        { name: 'Mobile UI/UX', level: 85 },
        { name: 'App Store Deployment', level: 80 }
      ]
    },
    {
      icon: Database,
      title: 'Base de Données & Backend',
      color: 'text-success',
      bgColor: 'bg-success/10',
      skills: [
        { name: 'MySQL', level: 80 },
        { name: 'MariaDB', level: 75 },
        { name: 'MongoDB', level: 70 },
        { name: 'PostgreSQL', level: 70 },
        { name: 'Spring Framework', level: 75 },
        { name: 'JPA', level: 75 },
        { name: 'Maven', level: 75 }
      ]
    },
    {
      icon: Palette,
      title: 'Design & Graphisme',
      color: 'text-warning',
      bgColor: 'bg-warning/10',
      skills: [
        { name: 'Design et Graphisme', level: 90 },
        { name: 'Aspect Visuel', level: 90 },
        { name: 'Maquette', level: 85 },
        { name: 'Adobe Flash', level: 80 },
        { name: 'CorelDraw', level: 85 },
        { name: 'Pagemaker', level: 75 }
      ]
    },
    {
      icon: Shield,
      title: t('skills.security.title'),
      color: 'text-destructive',
      bgColor: 'bg-destructive/10',
      skills: [
        { name: 'Cybersécurité', level: 85 },
        { name: 'RGPD', level: 90 },
        { name: 'Network Security', level: 80 },
        { name: 'Identity & Access Management', level: 85 },
        { name: 'Risk Management', level: 80 },
        { name: 'Security Audits', level: 75 }
      ]
    },
    {
      icon: Settings,
      title: 'Outils & Gestion',
      color: 'text-info',
      bgColor: 'bg-info/10',
      skills: [
        { name: 'GIT', level: 85 },
        { name: 'Gestion de projet', level: 80 },
        { name: 'Modélisation', level: 75 },
        { name: 'CMS', level: 85 },
        { name: 'WordPress', level: 90 },
        { name: 'WooCommerce', level: 85 },
        { name: 'XML', level: 80 },
        { name: 'JSON', level: 85 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container-custom">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              {t('skills.title')}
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
              {t('skills.subtitle')}
            </p>
            <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full"></div>
          </div>

          {/* Skills Grid */}
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className="group glass-effect rounded-xl p-6 hover-lift animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Category Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className={`p-3 rounded-lg ${category.bgColor} group-hover:scale-110 transition-transform duration-300`}>
                    <category.icon className={`h-6 w-6 ${category.color}`} />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">
                    {category.title}
                  </h3>
                </div>

                {/* Skills List with Progress Bars */}
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="group/skill"
                    >
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium text-foreground group-hover/skill:text-primary transition-colors duration-200">
                          {skill.name}
                        </span>
                        <span className="text-xs text-muted-foreground font-semibold">
                          {skill.level}%
                        </span>
                      </div>
                      
                      {/* Progress Bar */}
                      <div className="w-full bg-secondary rounded-full h-2 overflow-hidden">
                        <div 
                          className={`h-2 rounded-full transition-all duration-1000 ease-out ${
                            index === 0 ? 'bg-gradient-to-r from-primary to-primary-hover' :
                            index === 1 ? 'bg-gradient-to-r from-accent to-accent-hover' :
                            index === 2 ? 'bg-gradient-to-r from-success to-success' :
                            index === 3 ? 'bg-gradient-to-r from-warning to-warning' :
                            index === 4 ? 'bg-gradient-to-r from-destructive to-destructive' :
                            'bg-gradient-to-r from-primary to-accent'
                          } group-hover/skill:shadow-glow`}
                          style={{ 
                            width: `${skill.level}%`,
                            animationDelay: `${(index * 0.1) + (skillIndex * 0.05)}s`
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Category Stats */}
                <div className="mt-6 pt-4 border-t border-border/50">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Moyenne</span>
                    <span className="text-sm font-medium text-foreground">
                      {Math.round(category.skills.reduce((sum, skill) => sum + skill.level, 0) / category.skills.length)}%
                    </span>
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

export default Skills;