import React from 'react';
import { Code, Smartphone, Shield, Settings } from 'lucide-react';
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
        'HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'React.js', 'Angular 7',
        'Vue.js', 'PHP', 'Node.js', 'Laravel', 'Symphony', 'Bootstrap',
        'Tailwind CSS', 'jQuery', 'SEO'
      ]
    },
    {
      icon: Smartphone,
      title: t('skills.mobile.title'),
      color: 'text-accent',
      bgColor: 'bg-accent/10',
      skills: [
        'React Native', 'Flutter', 'Ionic', 'Cordova', 'Android Development',
        'iOS Development', 'Cross-platform', 'Mobile UI/UX', 'App Store Deployment'
      ]
    },
    {
      icon: Shield,
      title: t('skills.security.title'),
      color: 'text-success',
      bgColor: 'bg-success/10',
      skills: [
        'Cybersécurité', 'RGPD', 'Security Audits', 'Penetration Testing',
        'Vulnerability Assessment', 'Security Protocols', 'Data Protection',
        'Ethical Hacking', 'Security Compliance'
      ]
    },
    {
      icon: Settings,
      title: t('skills.tools.title'),
      color: 'text-warning',
      bgColor: 'bg-warning/10',
      skills: [
        'MySQL', 'MariaDB', 'MongoDB', 'PostgreSQL', 'Git', 'Docker',
        'AWS', 'Firebase', 'CMS', 'WordPress', 'XML', 'JSON',
        'Back Office', 'Server Management', 'API Development'
      ]
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container-custom">
        <div className="max-w-6xl mx-auto">
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
          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className="group glass-effect rounded-xl p-8 hover-lift animate-slide-up"
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

                {/* Skills List */}
                <div className="grid grid-cols-2 gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="group/skill flex items-center gap-2 p-2 rounded-lg hover:bg-card-hover transition-colors duration-200"
                    >
                      <div className="w-2 h-2 rounded-full bg-gradient-primary opacity-60 group-hover/skill:opacity-100 transition-opacity duration-200"></div>
                      <span className="text-sm text-muted-foreground group-hover/skill:text-foreground transition-colors duration-200 font-medium">
                        {skill}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Progress Bar */}
                <div className="mt-6 pt-4 border-t border-border/50">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-muted-foreground">Expertise Level</span>
                    <span className="text-sm font-medium text-foreground">Advanced</span>
                  </div>
                  <div className="w-full bg-secondary rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full bg-gradient-to-r ${
                        index === 0 ? 'from-primary to-primary-hover' :
                        index === 1 ? 'from-accent to-accent-hover' :
                        index === 2 ? 'from-success to-success' :
                        'from-warning to-warning'
                      } transition-all duration-1000 group-hover:scale-x-105`}
                      style={{ width: '85%' }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Info */}
          <div className="text-center mt-16 animate-fade-in">
            <div className="glass-effect rounded-xl p-8 max-w-2xl mx-auto">
              <h3 className="text-xl font-semibold mb-4 gradient-text">
                Continuous Learning
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Technology evolves rapidly, and I stay current with the latest trends, 
                frameworks, and security practices. I believe in continuous improvement 
                and adapting to new challenges in the ever-changing tech landscape.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;