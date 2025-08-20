import React from 'react';
import { ExternalLink, Github, Code2, Smartphone, Palette, Database } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

// Import portfolio images
import absbenqImg from '@/assets/portfolio/abs-benq.png';
import wsabsImg from '@/assets/portfolio/ws-abs.png';
import wsplantaorImg from '@/assets/portfolio/ws-plantaor.png';
import jsgameImg from '@/assets/portfolio/js-game.png';
import wpkodImg from '@/assets/portfolio/wp-kod.jpg';
import wsp2s01Img from '@/assets/portfolio/ws-p2s-01.jpg';
import wsp2s04Img from '@/assets/portfolio/ws-p2s-04.jpg';
import wsbellImg from '@/assets/portfolio/ws-bell.jpg';
import wsmukflashImg from '@/assets/portfolio/ws-muk-flash.jpg';

const Projects = () => {
  const { t } = useLanguage();

  const projects = [
    {
      title: 'Commercial Website',
      description: 'Site web commercial développé avec WordPress, intégrant un système de gestion de contenu avancé et une interface utilisateur moderne.',
      image: absbenqImg,
      technologies: ['WordPress', 'PHP', 'MySQL', 'CSS3', 'JavaScript', 'SEO'],
      category: 'Site Web',
      icon: Code2,
      color: 'text-primary',
      type: 'web'
    },
    {
      title: 'Application Full Stack',
      description: 'Application complète développée avec Spring Framework, JPA pour la persistance, MySQL comme base de données, et ReactJS pour l\'interface utilisateur.',
      image: wsabsImg,
      technologies: ['Spring', 'JPA', 'MySQL', 'Maven', 'ReactJS', 'Bootstrap'],
      category: 'Application Web',
      icon: Database,
      color: 'text-success',
      type: 'fullstack'
    },
    {
      title: 'Site E-commerce WooCommerce',
      description: 'Plateforme e-commerce complète utilisant WordPress et WooCommerce avec gestion des produits, commandes et paiements sécurisés.',
      image: wsplantaorImg,
      technologies: ['WordPress', 'WooCommerce', 'PHP', 'MySQL', 'Payment Gateway'],
      category: 'E-commerce',
      icon: Code2,
      color: 'text-accent',
      type: 'web'
    },
    {
      title: 'Jeu JavaScript',
      description: 'Jeu interactif développé en JavaScript pur avec animations fluides, système de score et interface utilisateur responsive.',
      image: jsgameImg,
      technologies: ['JavaScript', 'HTML5', 'CSS3', 'Canvas API', 'Local Storage'],
      category: 'Jeu',
      icon: Smartphone,
      color: 'text-warning',
      type: 'game'
    },
    {
      title: 'Site Bootstrap',
      description: 'Site web responsive développé avec Bootstrap, optimisé pour tous les appareils avec une navigation fluide et un design moderne.',
      image: wpkodImg,
      technologies: ['Bootstrap', 'HTML5', 'CSS3', 'JavaScript', 'jQuery'],
      category: 'Site Web',
      icon: Code2,
      color: 'text-primary',
      type: 'web'
    },
    {
      title: 'Site HTML Corporatif 1',
      description: 'Site web corporatif avec design personnalisé, navigation intuitive et contenu optimisé pour le référencement.',
      image: wsp2s01Img,
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'SEO', 'Responsive Design'],
      category: 'Site Web',
      icon: Code2,
      color: 'text-primary',
      type: 'web'
    },
    {
      title: 'Site HTML Corporatif 2',
      description: 'Deuxième version du site corporatif avec amélioration de l\'expérience utilisateur et intégration de nouvelles fonctionnalités.',
      image: wsp2s04Img,
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'UI/UX', 'Performance'],
      category: 'Site Web',
      icon: Code2,
      color: 'text-primary',
      type: 'web'
    },
    {
      title: 'Site Web Bell',
      description: 'Site web moderne avec design épuré, animations CSS et optimisation des performances pour une expérience utilisateur optimale.',
      image: wsbellImg,
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'Animations', 'Performance'],
      category: 'Site Web',
      icon: Code2,
      color: 'text-primary',
      type: 'web'
    },
    {
      title: 'Site Web Animé Flash',
      description: 'Site web avec animations Flash créatives, interface interactive et expérience utilisateur immersive (projet historique).',
      image: wsmukflashImg,
      technologies: ['Adobe Flash', 'ActionScript', 'HTML', 'CSS', 'Animation'],
      category: 'Animation Web',
      icon: Palette,
      color: 'text-accent',
      type: 'animation'
    }
  ];

  const categories = ['Tous', 'Site Web', 'Application Web', 'E-commerce', 'Jeu', 'Animation Web'];
  const [selectedCategory, setSelectedCategory] = React.useState('Tous');

  const filteredProjects = selectedCategory === 'Tous' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <section id="projects" className="py-20 bg-gradient-surface">
      <div className="container-custom">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Portefeuille
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
              Quelques exemples de mes travaux réalisés il y a longtemps !
            </p>
            <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full"></div>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12 animate-fade-in">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-primary text-primary-foreground shadow-glow'
                    : 'glass-effect hover:bg-card-hover text-muted-foreground hover:text-foreground'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={index}
                className="group glass-effect rounded-xl overflow-hidden hover-lift animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Project Image */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    style={{ imageRendering: 'crisp-edges' }}
                    onContextMenu={(e) => e.preventDefault()}
                    onDragStart={(e) => e.preventDefault()}
                  />
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 text-xs font-medium bg-background/90 backdrop-blur-sm rounded-full border border-border/50">
                      {project.category}
                    </span>
                  </div>

                  {/* Type Icon */}
                  <div className="absolute top-4 right-4">
                    <div className={`p-2 bg-background/90 backdrop-blur-sm rounded-full ${project.color}`}>
                      <project.icon className="h-4 w-4" />
                    </div>
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-90 transition-all duration-300 flex items-center justify-center">
                    <div className="flex space-x-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="bg-white/20 hover:bg-white/30 text-white border-white/30 backdrop-blur-sm"
                      >
                        <ExternalLink className="h-5 w-5" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="bg-white/20 hover:bg-white/30 text-white border-white/30 backdrop-blur-sm"
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
                    {project.technologies.slice(0, 4).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 text-xs font-medium bg-secondary/50 text-secondary-foreground rounded-md border border-border/30"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-2 py-1 text-xs font-medium text-muted-foreground">
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 group/btn"
                    >
                      Voir le Projet
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

          {/* Portfolio Stats */}
          <div className="grid md:grid-cols-3 gap-8 mt-16 animate-fade-in">
            <div className="text-center glass-effect rounded-xl p-6">
              <div className="text-3xl font-bold gradient-text mb-2">21+</div>
              <div className="text-muted-foreground font-medium">Projets Terminés</div>
            </div>
            <div className="text-center glass-effect rounded-xl p-6">
              <div className="text-3xl font-bold gradient-text mb-2">9</div>
              <div className="text-muted-foreground font-medium">Technologies Maîtrisées</div>
            </div>
            <div className="text-center glass-effect rounded-xl p-6">
              <div className="text-3xl font-bold gradient-text mb-2">5+</div>
              <div className="text-muted-foreground font-medium">Années d'Expérience</div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16 animate-fade-in">
            <div className="glass-effect rounded-xl p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-semibold mb-4 gradient-text">
                Intéressé par une Collaboration?
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Ces projets ne représentent qu'un échantillon de mon travail. Je suis toujours 
                enthousiaste à l'idée de relever de nouveaux défis et de créer des solutions 
                innovantes adaptées à vos besoins spécifiques.
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
                Discutons de Votre Projet
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;