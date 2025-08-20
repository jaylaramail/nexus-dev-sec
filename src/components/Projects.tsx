import React from 'react';
import { ExternalLink, Github, Code2, Smartphone, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

const Projects = () => {
  const { t } = useLanguage();

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with React, Node.js, and secure payment integration. Features include user authentication, product management, and order tracking.',
      image: '/api/placeholder/600/400',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'JWT'],
      category: 'Web Development',
      icon: Code2,
      color: 'text-primary',
    },
    {
      title: 'Mobile Banking App',
      description: 'Secure mobile banking application built with React Native. Implements biometric authentication, transaction history, and real-time notifications.',
      image: '/api/placeholder/600/400',
      technologies: ['React Native', 'TypeScript', 'Firebase', 'Biometric Auth'],
      category: 'Mobile Development',
      icon: Smartphone,
      color: 'text-accent',
    },
    {
      title: 'Security Audit Dashboard',
      description: 'Cybersecurity dashboard for monitoring and analyzing security threats. Features vulnerability scanning, real-time alerts, and compliance reporting.',
      image: '/api/placeholder/600/400',
      technologies: ['Angular', 'Python', 'PostgreSQL', 'Security APIs'],
      category: 'Cybersecurity',
      icon: Shield,
      color: 'text-success',
    },
    {
      title: 'CMS Platform',
      description: 'Custom content management system with multi-language support, SEO optimization, and advanced user roles management.',
      image: '/api/placeholder/600/400',
      technologies: ['PHP', 'Laravel', 'MySQL', 'Vue.js', 'SEO'],
      category: 'Web Development',
      icon: Code2,
      color: 'text-primary',
    },
    {
      title: 'Healthcare Mobile App',
      description: 'GDPR-compliant healthcare application for patient management, appointment scheduling, and secure medical data handling.',
      image: '/api/placeholder/600/400',
      technologies: ['React Native', 'GDPR', 'Node.js', 'Encryption'],
      category: 'Mobile Development',
      icon: Smartphone,
      color: 'text-accent',
    },
    {
      title: 'Network Security Tool',
      description: 'Enterprise security tool for network monitoring, penetration testing, and vulnerability assessment with detailed reporting.',
      image: '/api/placeholder/600/400',
      technologies: ['Python', 'Security Protocols', 'Network Analysis'],
      category: 'Cybersecurity',
      icon: Shield,
      color: 'text-success',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-surface">
      <div className="container-custom">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              {t('projects.title')}
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
              {t('projects.subtitle')}
            </p>
            <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full"></div>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group glass-effect rounded-xl overflow-hidden hover-lift animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Project Image */}
                <div className="relative h-48 bg-gradient-to-br from-primary/10 to-accent/10 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-primary opacity-10"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <project.icon className={`h-16 w-16 ${project.color} opacity-50`} />
                  </div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 text-xs font-medium bg-background/80 backdrop-blur-sm rounded-full border border-border/50">
                      {project.category}
                    </span>
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-primary/90 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                    <div className="flex space-x-3">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="bg-white/20 hover:bg-white/30 text-white border-white/30"
                      >
                        <ExternalLink className="h-5 w-5" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="bg-white/20 hover:bg-white/30 text-white border-white/30"
                      >
                        <Github className="h-5 w-5" />
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors duration-200">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 text-xs font-medium bg-secondary/50 text-secondary-foreground rounded-md border border-border/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 group/btn"
                    >
                      {t('projects.view')}
                      <ExternalLink className="h-4 w-4 ml-2 group-hover/btn:scale-110 transition-transform duration-200" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="group/btn"
                    >
                      <Github className="h-4 w-4 group-hover/btn:scale-110 transition-transform duration-200" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16 animate-fade-in">
            <div className="glass-effect rounded-xl p-8 max-w-2xl mx-auto">
              <h3 className="text-xl font-semibold mb-4 gradient-text">
                Interested in Working Together?
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                These are just a few examples of my work. I'm always excited to take on new 
                challenges and create innovative solutions for your business needs.
              </p>
              <Button
                variant="gradient"
                size="lg"
                onClick={() => {
                  const element = document.getElementById('contact');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                Let's Discuss Your Project
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;