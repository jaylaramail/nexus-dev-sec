import React from 'react';
import { Briefcase, Calendar, MapPin, Building } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Experience = () => {
  const { t } = useLanguage();

  const experiences = [
    {
      title: 'Développeur WordPress',
      type: 'Bénévole',
      company: 'Altruistic Business Solutions Pvt. Ltd.',
      location: 'Puduchèry, Inde (Télétravail)',
      period: '2023 - 2023',
      description: 'Développement et maintenance de sites WordPress, optimisation des performances et intégration de nouvelles fonctionnalités.',
      technologies: ['WordPress', 'PHP', 'MySQL', 'CSS', 'JavaScript']
    },
    {
      title: 'Développeur Full-Stack',
      type: 'Stagiaire',
      company: 'Altruistic Business Solutions Pvt. Ltd.',
      location: 'Puduchèry, Inde (Télétravail)',
      period: '2022 - 2022',
      description: 'Développement d\'applications web complètes utilisant des technologies modernes, intégration d\'APIs et gestion de base de données.',
      technologies: ['Spring', 'React', 'MySQL', 'Java', 'REST API']
    },
    {
      title: 'Développeur Web WooCommerce',
      type: 'Stagiaire',
      company: 'Curetea',
      location: 'Paris, France',
      period: '2021 - 2021',
      description: 'Développement et personnalisation de sites e-commerce WooCommerce, intégration de moyens de paiement et optimisation UX.',
      technologies: ['WooCommerce', 'WordPress', 'PHP', 'JavaScript', 'CSS']
    },
    {
      title: 'Support Technique',
      type: 'Freelancer à Distance',
      company: 'Altruistic Business Solutions Pvt. Ltd.',
      location: 'Puduchèry, Inde',
      period: '2019 - 2020',
      description: 'Support technique à distance, résolution de problèmes informatiques et maintenance de systèmes.',
      technologies: ['Support IT', 'Diagnostic', 'Maintenance', 'Communication']
    },
    {
      title: 'Spécialiste de Support Technique',
      type: 'Employé',
      company: 'Altruistic Business Solutions Pvt. Ltd.',
      location: 'Puduchèry, Inde',
      period: '2015 - 2016',
      description: 'Spécialisation dans le support technique avancé, formation des utilisateurs et documentation des procédures.',
      technologies: ['Support Avancé', 'Formation', 'Documentation', 'Systèmes']
    },
    {
      title: 'Analyse Technique de Recherche et Design',
      type: 'Employé',
      company: 'Chendurr Technologies Pvt. Ltd.',
      location: 'Puduchèry, Inde',
      period: '2012 - 2015',
      description: 'Analyse technique des projets, recherche de solutions innovantes et conception de designs adaptés aux besoins clients.',
      technologies: ['Analyse', 'Design', 'Recherche', 'Innovation']
    },
    {
      title: 'Assistant Responsable des Opérations',
      type: 'Employé',
      company: 'Extol Technologies Pvt. Ltd.',
      location: 'Puduchèry, Inde',
      period: '2007 - 2011',
      description: 'Assistance dans la gestion des opérations quotidiennes, coordination des équipes et optimisation des processus.',
      technologies: ['Gestion', 'Coordination', 'Processus', 'Leadership']
    },
    {
      title: 'Recherche et Développement & Administrateur Système',
      type: 'Employé',
      company: 'Mukesh Technologies Pvt. Ltd.',
      location: 'Puduchèry, Inde',
      period: '2005 - 2007',
      description: 'Recherche et développement de nouvelles technologies, administration système et maintenance infrastructure IT.',
      technologies: ['R&D', 'Administration Système', 'Infrastructure', 'Maintenance']
    },
    {
      title: 'Designer Adobe Flash & Administrateur de Bureau',
      type: 'Employé',
      company: 'Agni Nets Pvt. Ltd.',
      location: 'Puduchèry, Inde',
      period: '2002 - 2004',
      description: 'Création de designs et animations Flash, administration des systèmes de bureau et support utilisateur.',
      technologies: ['Adobe Flash', 'ActionScript', 'Design', 'Administration']
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Bénévole':
        return 'bg-green-500/10 text-green-600 border-green-500/20';
      case 'Stagiaire':
        return 'bg-blue-500/10 text-blue-600 border-blue-500/20';
      case 'Freelancer à Distance':
        return 'bg-purple-500/10 text-purple-600 border-purple-500/20';
      default:
        return 'bg-primary/10 text-primary border-primary/20';
    }
  };

  return (
    <section id="experience" className="py-20 bg-gradient-surface">
      <div className="container-custom">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Expérience Professionnelle
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
              Plus de 20 ans d'expérience dans le développement web, la cybersécurité et les technologies de l'information.
            </p>
            <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full"></div>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-primary opacity-30 transform md:-translate-x-px"></div>

            {/* Experience Items */}
            <div className="space-y-12">
              {experiences.map((experience, index) => (
                <div
                  key={index}
                  className={`relative flex flex-col md:flex-row items-start gap-8 animate-scale-in ${
                    index % 2 === 0 ? 'md:flex-row-reverse' : ''
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-primary rounded-full transform -translate-x-1/2 shadow-glow z-10"></div>

                  {/* Content Card */}
                  <div className={`flex-1 ml-12 md:ml-0 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                    <div className="glass-effect rounded-xl p-6 hover-lift group">
                      {/* Header */}
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-200">
                            {experience.title}
                          </h3>
                          
                          <div className="flex items-center gap-2 mb-2">
                            <Building className="h-4 w-4 text-muted-foreground" />
                            <span className="text-muted-foreground font-medium">
                              {experience.company}
                            </span>
                          </div>
                          
                          <div className="flex items-center gap-2 mb-3">
                            <MapPin className="h-4 w-4 text-muted-foreground" />
                            <span className="text-muted-foreground text-sm">
                              {experience.location}
                            </span>
                          </div>
                        </div>

                        <div className="flex flex-col items-start sm:items-end gap-2">
                          <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getTypeColor(experience.type)}`}>
                            {experience.type}
                          </span>
                          <div className="flex items-center text-muted-foreground text-sm">
                            <Calendar className="h-4 w-4 mr-1" />
                            {experience.period}
                          </div>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-muted-foreground leading-relaxed mb-4">
                        {experience.description}
                      </p>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2">
                        {experience.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-2 py-1 text-xs font-medium bg-secondary/50 text-secondary-foreground rounded-md border border-border/30"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Experience Stats */}
          <div className="grid md:grid-cols-3 gap-8 mt-16 animate-fade-in">
            <div className="text-center glass-effect rounded-xl p-6">
              <div className="text-3xl font-bold gradient-text mb-2">20+</div>
              <div className="text-muted-foreground font-medium">Années d'Expérience</div>
            </div>
            <div className="text-center glass-effect rounded-xl p-6">
              <div className="text-3xl font-bold gradient-text mb-2">9</div>
              <div className="text-muted-foreground font-medium">Entreprises Différentes</div>
            </div>
            <div className="text-center glass-effect rounded-xl p-6">
              <div className="text-3xl font-bold gradient-text mb-2">15+</div>
              <div className="text-muted-foreground font-medium">Technologies Maîtrisées</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;