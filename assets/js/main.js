// Main JavaScript for Portfolio Website

// Language and Theme Management
class PortfolioApp {
    constructor() {
        this.currentLanguage = localStorage.getItem('portfolio-language') || 'fr';
        this.currentTheme = localStorage.getItem('portfolio-theme') || 'light';
        this.currentColorTheme = localStorage.getItem('portfolio-color-theme') || 'blue';
        
        this.translations = {
            fr: {
                // Navigation
                'nav.about': 'À propos',
                'nav.skills': 'Compétences',
                'nav.formation': 'Formation',
                'nav.experience': 'Expérience',
                'nav.projects': 'Projets',
                'nav.contact': 'Contact',
                
                // Hero Section
                'hero.greeting': 'Salut, je suis',
                'hero.title': 'Développeur d\'Application & Spécialiste Cybersécurité',
                'hero.subtitle': 'Plus de 10 années d\'expérience dans le secteur informatique et des services, spécialisé dans le développement web moderne, applications full-stack et cybersécurité. Basé à Massy, France.',
                'hero.cta.contact': 'Me Contacter',
                'hero.cta.projects': 'Voir les Projets',
                
                // About Section
                'about.title': 'À propos de moi',
                'about.description': 'J\'ai des années d\'expérience dans le secteur informatique et des services, notamment en développement web et cybersécurité. Joueur d\'équipe, j\'aime rencontrer de nouvelles personnes et travailler en mode projet avec un souci constant de relation client.',
                'about.location': 'Massy, France',
                'about.projects.completed': 'Projets Terminés',
                'about.projects.ongoing': 'Toujours en cours plus...',
                
                // Skills Section
                'skills.title': 'Compétences Techniques',
                'skills.subtitle': 'Les compétences sont ce qui rend confiant et indépendant dans la programmation et sont essentielles à la réussite.',
                'skills.web.title': 'Développement Web',
                'skills.mobile.title': 'Développement Mobile',
                'skills.security.title': 'Cybersécurité',
                'skills.tools.title': 'Outils & Autres',
                
                // Formation Section
                'formation.title': 'Formation',
                
                // Experience Section
                'experience.title': 'Expérience Professionnelle',
                'experience.subtitle': 'Mon parcours professionnel dans le développement web et la cybersécurité',
                
                // Projects Section
                'projects.title': 'Projets Principaux',
                'projects.subtitle': 'Voici quelques projets sur lesquels j\'ai travaillé récemment.',
                'projects.view': 'Voir le Projet',
                'projects.code': 'Voir le Code',
                
                // Contact Section
                'contact.title': 'Contactez-moi',
                'contact.subtitle': 'Prêt à travailler ensemble ? Discutons de votre projet.',
                'contact.form.name': 'Votre Nom',
                'contact.form.email': 'Votre Email',
                'contact.form.subject': 'Sujet',
                'contact.form.message': 'Votre Message',
                'contact.form.send': 'Envoyer le Message',
                'contact.form.sending': 'Envoi en cours...',
                'contact.success': 'Message envoyé avec succès !',
                'contact.error': 'Échec de l\'envoi du message. Veuillez réessayer.',
                
                // Footer
                'footer.rights': 'Tous droits réservés.',
                'footer.built': 'Créé avec Bootstrap & JavaScript',
            },
            en: {
                // Navigation
                'nav.about': 'About',
                'nav.skills': 'Skills',
                'nav.formation': 'Education',
                'nav.experience': 'Experience',
                'nav.projects': 'Projects',
                'nav.contact': 'Contact',
                
                // Hero Section
                'hero.greeting': 'Hi, I\'m',
                'hero.title': 'Application Developer & Cybersecurity Specialist',
                'hero.subtitle': 'More than 10 years of experience in IT and services sector, specializing in modern web development, full-stack applications, and cybersecurity. Based in Massy, France.',
                'hero.cta.contact': 'Get In Touch',
                'hero.cta.projects': 'View Projects',
                
                // About Section
                'about.title': 'About Me',
                'about.description': 'I have years of experience in IT and services, specializing in web development and cybersecurity. Team player who loves meeting new people and working in project mode with constant focus on client relationships.',
                'about.location': 'Massy, France',
                'about.projects.completed': 'Completed Projects',
                'about.projects.ongoing': 'Always working on more...',
                
                // Skills Section
                'skills.title': 'Technical Skills',
                'skills.subtitle': 'Skills are what make me confident and independent in programming and are essential for success.',
                'skills.web.title': 'Web Development',
                'skills.mobile.title': 'Mobile Development',
                'skills.security.title': 'Cybersecurity',
                'skills.tools.title': 'Tools & Others',
                
                // Formation Section
                'formation.title': 'Education',
                
                // Experience Section
                'experience.title': 'Professional Experience',
                'experience.subtitle': 'My professional journey in web development and cybersecurity',
                
                // Projects Section
                'projects.title': 'Featured Projects',
                'projects.subtitle': 'Here are some of the projects I\'ve worked on recently.',
                'projects.view': 'View Project',
                'projects.code': 'View Code',
                
                // Contact Section
                'contact.title': 'Get In Touch',
                'contact.subtitle': 'Ready to work together? Let\'s discuss your project.',
                'contact.form.name': 'Your Name',
                'contact.form.email': 'Your Email',
                'contact.form.subject': 'Subject',
                'contact.form.message': 'Your Message',
                'contact.form.send': 'Send Message',
                'contact.form.sending': 'Sending...',
                'contact.success': 'Message sent successfully!',
                'contact.error': 'Failed to send message. Please try again.',
                
                // Footer
                'footer.rights': 'All rights reserved.',
                'footer.built': 'Built with Bootstrap & JavaScript',
            }
        };
        
        this.skills = {
            web: {
                title: this.currentLanguage === 'fr' ? 'Développement Web' : 'Web Development',
                icon: 'bi-code-slash',
                items: ['HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'React', 'Vue.js', 'Node.js', 'Express', 'PHP', 'WordPress']
            },
            mobile: {
                title: this.currentLanguage === 'fr' ? 'Développement Mobile' : 'Mobile Development',
                icon: 'bi-phone',
                items: ['React Native', 'Flutter', 'Ionic', 'Cordova', 'Android', 'iOS']
            },
            security: {
                title: this.currentLanguage === 'fr' ? 'Cybersécurité' : 'Cybersecurity',
                icon: 'bi-shield-check',
                items: ['Penetration Testing', 'OWASP', 'Security Audits', 'Vulnerability Assessment', 'Network Security', 'Ethical Hacking']
            },
            tools: {
                title: this.currentLanguage === 'fr' ? 'Outils & Autres' : 'Tools & Others',
                icon: 'bi-tools',
                items: ['Git', 'Docker', 'AWS', 'Firebase', 'MySQL', 'PostgreSQL', 'MongoDB', 'Linux']
            }
        };
        
        this.formation = [
            {
                title: this.currentLanguage === 'fr' ? 'Master en Cybersécurité' : 'Master in Cybersecurity',
                institution: 'ESIEA',
                period: '2020-2022',
                location: 'Paris, France',
                description: this.currentLanguage === 'fr' ? 
                    'Spécialisation en sécurité des systèmes d\'information, cryptographie et audit de sécurité.' :
                    'Specialization in information systems security, cryptography and security auditing.'
            },
            {
                title: this.currentLanguage === 'fr' ? 'Licence en Informatique' : 'Bachelor in Computer Science',
                institution: 'Université Paris-Saclay',
                period: '2017-2020',
                location: 'Orsay, France',
                description: this.currentLanguage === 'fr' ? 
                    'Formation complète en développement logiciel, algorithmiques et structures de données.' :
                    'Comprehensive training in software development, algorithms and data structures.'
            }
        ];
        
        this.experiences = [
            {
                title: this.currentLanguage === 'fr' ? 'DÉVELOPPEUR WORDPRESS' : 'WORDPRESS DEVELOPER',
                company: 'ALTRUISTIC BUSINESS SOLUTIONS Pvt. Ltd.',
                type: this.currentLanguage === 'fr' ? 'Bénévole' : 'Volunteer',
                location: 'Puduchéry, Inde (Télétravail)',
                period: '2023',
                icon: 'bi-code-slash',
                color: 'text-primary'
            },
            {
                title: this.currentLanguage === 'fr' ? 'DÉVELOPPEUR FULL-STACK' : 'FULL-STACK DEVELOPER',
                company: 'ALTRUISTIC BUSINESS SOLUTIONS Pvt. Ltd.',
                type: this.currentLanguage === 'fr' ? 'Stagiaire' : 'Intern',
                location: 'Puduchéry, Inde (Télétravail)',
                period: '2022',
                icon: 'bi-server',
                color: 'text-success'
            },
            {
                title: this.currentLanguage === 'fr' ? 'DÉVELOPPEUR WEB WOOCOMMERCE' : 'WOOCOMMERCE WEB DEVELOPER',
                company: 'CURETEA',
                type: this.currentLanguage === 'fr' ? 'Stagiaire' : 'Intern',
                location: 'Paris, France',
                period: '2021',
                icon: 'bi-globe',
                color: 'text-info'
            }
        ];
        
        this.projects = [
            {
                title: 'E-commerce Platform',
                description: this.currentLanguage === 'fr' ? 
                    'Plateforme e-commerce complète avec React et Node.js' :
                    'Complete e-commerce platform with React and Node.js',
                image: './assets/images/project-ecommerce.jpg',
                technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
                liveUrl: 'https://example-ecommerce.com',
                codeUrl: 'https://github.com/jay/ecommerce'
            },
            {
                title: 'Security Dashboard',
                description: this.currentLanguage === 'fr' ? 
                    'Tableau de bord de sécurité pour surveillance réseau' :
                    'Security dashboard for network monitoring',
                image: './assets/images/project-security.jpg',
                technologies: ['Vue.js', 'Python', 'PostgreSQL', 'Docker'],
                liveUrl: 'https://security-dashboard.com',
                codeUrl: 'https://github.com/jay/security-dashboard'
            },
            {
                title: 'Mobile Banking App',
                description: this.currentLanguage === 'fr' ? 
                    'Application bancaire mobile sécurisée' :
                    'Secure mobile banking application',
                image: './assets/images/project-mobile.jpg',
                technologies: ['React Native', 'Firebase', 'Biometric Auth'],
                liveUrl: null,
                codeUrl: 'https://github.com/jay/mobile-banking'
            }
        ];
        
        this.init();
    }
    
    init() {
        this.applyTheme();
        this.applyColorTheme();
        this.applyLanguage();
        this.setupEventListeners();
        this.populateSkills();
        this.populateFormation();
        this.populateExperience();
        this.populateProjects();
        this.setupContactForm();
        this.setupNavigation();
        this.setupSecurityComponent();
    }
    
    // Theme Management
    applyTheme() {
        document.documentElement.setAttribute('data-bs-theme', this.currentTheme);
    }
    
    applyColorTheme() {
        document.documentElement.setAttribute('data-color-theme', this.currentColorTheme);
    }
    
    // Language Management
    applyLanguage() {
        document.documentElement.lang = this.currentLanguage;
        document.getElementById('currentLang').textContent = this.currentLanguage.toUpperCase();
        
        // Update page title and meta
        const title = this.currentLanguage === 'fr' 
            ? 'Jay - Développeur d\'Application & Spécialiste Cybersécurité | Portfolio'
            : 'Jay - Application Developer & Cybersecurity Specialist | Portfolio';
        document.title = title;
        
        // Translate all elements
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            const translation = this.translations[this.currentLanguage][key];
            if (translation) {
                element.textContent = translation;
            }
        });
    }
    
    // Event Listeners
    setupEventListeners() {
        // Smooth scrolling for navigation
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href');
                const target = document.querySelector(targetId);
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            });
        });
        
        // Navbar scroll effect
        window.addEventListener('scroll', () => {
            const navbar = document.getElementById('mainHeader');
            if (window.scrollY > 100) {
                navbar.style.background = 'rgba(0, 0, 0, 0.95)';
            } else {
                navbar.style.background = 'rgba(0, 0, 0, 0.9)';
            }
        });
    }
    
    // Content Population
    populateSkills() {
        const container = document.getElementById('skillsContainer');
        if (!container) return;
        
        container.innerHTML = Object.entries(this.skills).map(([key, skill]) => `
            <div class="col-md-6 col-lg-3">
                <div class="card skill-card h-100 text-white">
                    <div class="card-body text-center">
                        <i class="${skill.icon} fs-1 text-primary mb-3"></i>
                        <h5 class="card-title">${skill.title}</h5>
                        <div class="mt-3">
                            ${skill.items.map(item => `
                                <span class="badge bg-primary me-1 mb-1">${item}</span>
                            `).join('')}
                        </div>
                    </div>
                </div>
            </div>
        `).join('');
    }
    
    populateFormation() {
        const container = document.getElementById('formationContainer');
        if (!container) return;
        
        container.innerHTML = `
            <div class="col-12">
                <div class="timeline">
                    ${this.formation.map((item, index) => `
                        <div class="timeline-item">
                            <div class="timeline-content">
                                <div class="d-flex justify-content-between align-items-start mb-3">
                                    <div>
                                        <h5 class="fw-bold text-primary">${item.title}</h5>
                                        <h6 class="text-muted">${item.institution}</h6>
                                    </div>
                                    <span class="badge bg-primary">${item.period}</span>
                                </div>
                                <p class="text-muted mb-2">
                                    <i class="bi bi-geo-alt me-2"></i>${item.location}
                                </p>
                                <p class="mb-0">${item.description}</p>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    }
    
    populateExperience() {
        const container = document.getElementById('experienceContainer');
        if (!container) return;
        
        container.innerHTML = `
            <div class="col-12">
                <div class="timeline">
                    ${this.experiences.map((exp, index) => `
                        <div class="timeline-item">
                            <div class="timeline-content">
                                <div class="d-flex justify-content-between align-items-start mb-3">
                                    <div>
                                        <h5 class="fw-bold">${exp.title}</h5>
                                        <h6 class="text-muted">${exp.company}</h6>
                                        <span class="badge bg-light text-dark">${exp.type}</span>
                                    </div>
                                    <div class="text-end">
                                        <i class="${exp.icon} fs-4 ${exp.color} mb-2"></i>
                                        <div class="badge bg-primary">${exp.period}</div>
                                    </div>
                                </div>
                                <p class="text-muted mb-0">
                                    <i class="bi bi-geo-alt me-2"></i>${exp.location}
                                </p>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    }
    
    populateProjects() {
        const container = document.getElementById('projectsContainer');
        if (!container) return;
        
        container.innerHTML = this.projects.map((project, index) => `
            <div class="col-md-6 col-lg-4">
                <div class="card project-card h-100">
                    <img src="${project.image}" class="card-img-top project-image" alt="${project.title}" onerror="this.src='https://via.placeholder.com/400x250/3b82f6/ffffff?text=Project'">
                    <div class="card-body">
                        <h5 class="card-title fw-bold">${project.title}</h5>
                        <p class="card-text text-muted">${project.description}</p>
                        <div class="mb-3">
                            ${project.technologies.map(tech => `
                                <span class="badge bg-light text-dark me-1 mb-1">${tech}</span>
                            `).join('')}
                        </div>
                        <div class="d-flex gap-2">
                            ${project.liveUrl ? `
                                <a href="${project.liveUrl}" target="_blank" class="btn btn-primary btn-sm">
                                    <i class="bi bi-eye me-1"></i>
                                    ${this.translations[this.currentLanguage]['projects.view']}
                                </a>
                            ` : ''}
                            <a href="${project.codeUrl}" target="_blank" class="btn btn-outline-primary btn-sm">
                                <i class="bi bi-github me-1"></i>
                                ${this.translations[this.currentLanguage]['projects.code']}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        `).join('');
    }
    
    // Contact Form
    setupContactForm() {
        const form = document.getElementById('contactForm');
        if (!form) return;
        
        form.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            if (!form.checkValidity()) {
                e.stopPropagation();
                form.classList.add('was-validated');
                return;
            }
            
            const submitBtn = form.querySelector('button[type="submit"]');
            const submitText = document.getElementById('submitText');
            const loadingSpinner = document.getElementById('loadingSpinner');
            const alertDiv = document.getElementById('contactAlert');
            
            // Show loading state
            loadingSpinner.classList.remove('d-none');
            submitText.textContent = this.translations[this.currentLanguage]['contact.form.sending'];
            submitBtn.disabled = true;
            
            try {
                // Simulate form submission (replace with actual endpoint)
                await new Promise(resolve => setTimeout(resolve, 2000));
                
                // Success
                alertDiv.className = 'alert alert-success';
                alertDiv.textContent = this.translations[this.currentLanguage]['contact.success'];
                alertDiv.classList.remove('d-none');
                form.reset();
                form.classList.remove('was-validated');
                
            } catch (error) {
                // Error
                alertDiv.className = 'alert alert-danger';
                alertDiv.textContent = this.translations[this.currentLanguage]['contact.error'];
                alertDiv.classList.remove('d-none');
            } finally {
                // Reset button state
                loadingSpinner.classList.add('d-none');
                submitText.textContent = this.translations[this.currentLanguage]['contact.form.send'];
                submitBtn.disabled = false;
                
                // Hide alert after 5 seconds
                setTimeout(() => {
                    alertDiv.classList.add('d-none');
                }, 5000);
            }
        });
    }
    
    // Navigation
    setupNavigation() {
        // Active link highlighting
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.nav-link');
        
        window.addEventListener('scroll', () => {
            let current = '';
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                if (scrollY >= sectionTop - 200) {
                    current = section.getAttribute('id');
                }
            });
            
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${current}`) {
                    link.classList.add('active');
                }
            });
        });
    }
    
    // Security Component (placeholder)
    setupSecurityComponent() {
        // Add any security-related functionality here
        console.log('Security component initialized');
    }
}

// Global Functions (called from HTML)
function switchLanguage(lang) {
    const app = window.portfolioApp;
    app.currentLanguage = lang;
    localStorage.setItem('portfolio-language', lang);
    
    // Update data that depends on language
    app.skills = {
        web: {
            title: lang === 'fr' ? 'Développement Web' : 'Web Development',
            icon: 'bi-code-slash',
            items: ['HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'React', 'Vue.js', 'Node.js', 'Express', 'PHP', 'WordPress']
        },
        mobile: {
            title: lang === 'fr' ? 'Développement Mobile' : 'Mobile Development',
            icon: 'bi-phone',
            items: ['React Native', 'Flutter', 'Ionic', 'Cordova', 'Android', 'iOS']
        },
        security: {
            title: lang === 'fr' ? 'Cybersécurité' : 'Cybersecurity',
            icon: 'bi-shield-check',
            items: ['Penetration Testing', 'OWASP', 'Security Audits', 'Vulnerability Assessment', 'Network Security', 'Ethical Hacking']
        },
        tools: {
            title: lang === 'fr' ? 'Outils & Autres' : 'Tools & Others',
            icon: 'bi-tools',
            items: ['Git', 'Docker', 'AWS', 'Firebase', 'MySQL', 'PostgreSQL', 'MongoDB', 'Linux']
        }
    };
    
    app.formation = [
        {
            title: lang === 'fr' ? 'Master en Cybersécurité' : 'Master in Cybersecurity',
            institution: 'ESIEA',
            period: '2020-2022',
            location: 'Paris, France',
            description: lang === 'fr' ? 
                'Spécialisation en sécurité des systèmes d\'information, cryptographie et audit de sécurité.' :
                'Specialization in information systems security, cryptography and security auditing.'
        },
        {
            title: lang === 'fr' ? 'Licence en Informatique' : 'Bachelor in Computer Science',
            institution: 'Université Paris-Saclay',
            period: '2017-2020',
            location: 'Orsay, France',
            description: lang === 'fr' ? 
                'Formation complète en développement logiciel, algorithmiques et structures de données.' :
                'Comprehensive training in software development, algorithms and data structures.'
        }
    ];
    
    app.experiences = [
        {
            title: lang === 'fr' ? 'DÉVELOPPEUR WORDPRESS' : 'WORDPRESS DEVELOPER',
            company: 'ALTRUISTIC BUSINESS SOLUTIONS Pvt. Ltd.',
            type: lang === 'fr' ? 'Bénévole' : 'Volunteer',
            location: 'Puduchéry, Inde (Télétravail)',
            period: '2023',
            icon: 'bi-code-slash',
            color: 'text-primary'
        },
        {
            title: lang === 'fr' ? 'DÉVELOPPEUR FULL-STACK' : 'FULL-STACK DEVELOPER',
            company: 'ALTRUISTIC BUSINESS SOLUTIONS Pvt. Ltd.',
            type: lang === 'fr' ? 'Stagiaire' : 'Intern',
            location: 'Puduchéry, Inde (Télétravail)',
            period: '2022',
            icon: 'bi-server',
            color: 'text-success'
        },
        {
            title: lang === 'fr' ? 'DÉVELOPPEUR WEB WOOCOMMERCE' : 'WOOCOMMERCE WEB DEVELOPER',
            company: 'CURETEA',
            type: lang === 'fr' ? 'Stagiaire' : 'Intern',
            location: 'Paris, France',
            period: '2021',
            icon: 'bi-globe',
            color: 'text-info'
        }
    ];
    
    app.projects = [
        {
            title: 'E-commerce Platform',
            description: lang === 'fr' ? 
                'Plateforme e-commerce complète avec React et Node.js' :
                'Complete e-commerce platform with React and Node.js',
            image: './assets/images/project-ecommerce.jpg',
            technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
            liveUrl: 'https://example-ecommerce.com',
            codeUrl: 'https://github.com/jay/ecommerce'
        },
        {
            title: 'Security Dashboard',
            description: lang === 'fr' ? 
                'Tableau de bord de sécurité pour surveillance réseau' :
                'Security dashboard for network monitoring',
            image: './assets/images/project-security.jpg',
            technologies: ['Vue.js', 'Python', 'PostgreSQL', 'Docker'],
            liveUrl: 'https://security-dashboard.com',
            codeUrl: 'https://github.com/jay/security-dashboard'
        },
        {
            title: 'Mobile Banking App',
            description: lang === 'fr' ? 
                'Application bancaire mobile sécurisée' :
                'Secure mobile banking application',
            image: './assets/images/project-mobile.jpg',
            technologies: ['React Native', 'Firebase', 'Biometric Auth'],
            liveUrl: null,
            codeUrl: 'https://github.com/jay/mobile-banking'
        }
    ];
    
    app.applyLanguage();
    app.populateSkills();
    app.populateFormation();
    app.populateExperience();
    app.populateProjects();
}

function switchTheme(theme) {
    const app = window.portfolioApp;
    app.currentTheme = theme;
    localStorage.setItem('portfolio-theme', theme);
    app.applyTheme();
}

function switchColorTheme(colorTheme) {
    const app = window.portfolioApp;
    app.currentColorTheme = colorTheme;
    localStorage.setItem('portfolio-color-theme', colorTheme);
    app.applyColorTheme();
}

// Initialize App
document.addEventListener('DOMContentLoaded', () => {
    window.portfolioApp = new PortfolioApp();
});

// Service Worker Registration (for PWA capabilities)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('./sw.js')
            .then(registration => console.log('SW registered'))
            .catch(registrationError => console.log('SW registration failed'));
    });
}