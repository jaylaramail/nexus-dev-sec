import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import FormationNew from '@/components/FormationNew';
import ExperienceNew from '@/components/ExperienceNew';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Security from '@/components/Security';
import { useLanguage } from '@/contexts/LanguageContext';

const Index = () => {
  const { language } = useLanguage();

  // Update document title and meta tags based on language
  useEffect(() => {
    const title = language === 'fr' 
      ? 'Jay - Développeur d\'Application & Spécialiste Cybersécurité | Portfolio' 
      : 'Jay - Application Developer & Cybersecurity Specialist | Portfolio';
    
    const description = language === 'fr'
      ? 'Portfolio professionnel de Jay, développeur d\'application et spécialiste en cybersécurité basé à Massy, France. Expertise en React, Node.js, sécurité, et développement mobile.'
      : 'Professional portfolio of Jay, application developer and cybersecurity specialist based in Massy, France. Expertise in React, Node.js, security, and mobile development.';

    document.title = title;
    
    // Update meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    }

    // Update Open Graph meta tags
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', title);
    }

    let ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute('content', description);
    }

    // Set document language
    document.documentElement.lang = language;
  }, [language]);

  return (
    <div className="min-h-screen bg-background font-inter select-none">
      {/* Security Component */}
      <Security />
      
      {/* Header with Navigation */}
      <Header />
      
      {/* Main Content */}
      <main className="relative">
        {/* Hero Section */}
        <Hero />
        
        {/* About Section */}
        <About />
        
        {/* Skills Section */}
        <Skills />
        
        {/* Formation Section */}
        <FormationNew />
        
        {/* Experience Section */}
        <ExperienceNew />
        
        {/* Projects Section */}
        <Projects />
        
        {/* Contact Section */}
        <Contact />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;