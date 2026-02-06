
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Pricing from './components/Pricing';
import WhyUs from './components/WhyUs';
import Contact from './components/Contact';
import Footer from './components/Footer';
import MerchantLogin from './components/MerchantLogin';
import AdminDashboard from './components/AdminDashboard';
import { Language } from './types';
import { SpeedInsights } from "@vercel/speed-insights/react";

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('fr');
  const [showLogin, setShowLogin] = useState(false);
  const [showAdmin, setShowAdmin] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toggleLanguage = () => {
    setLang(prev => {
      if (prev === 'fr') return 'en';
      if (prev === 'en') return 'ar';
      return 'fr';
    });
  };

  // Admin access remains available via keyboard shortcut for maintenance/demo purposes
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.altKey && e.key === 'a') {
        setShowAdmin(true);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div 
      className={`min-h-screen bg-white ${lang === 'ar' ? 'font-[Cairo,Inter,sans-serif]' : ''}`}
      dir={lang === 'ar' ? 'rtl' : 'ltr'}
    >
      <SpeedInsights />
      <Header 
        lang={lang} 
        onToggleLang={toggleLanguage} 
        onOpenLogin={() => setShowLogin(true)} 
      />
      
      <main>
        <section id="home">
          <Hero 
            lang={lang} 
            isLoggedIn={isLoggedIn} 
            onOpenLogin={() => setShowLogin(true)} 
          />
        </section>
        
        <section id="services" className="py-20 bg-gray-50">
          <Services lang={lang} />
        </section>
        
        <section id="pricing" className="py-20">
          <Pricing lang={lang} />
        </section>
        
        <section id="why-us" className="py-20 bg-gray-50">
          <WhyUs lang={lang} />
        </section>
        
        <section id="contact" className="py-20">
          <Contact lang={lang} />
        </section>
      </main>

      <Footer lang={lang} />

      {showLogin && (
        <MerchantLogin 
          lang={lang} 
          onClose={() => setShowLogin(false)}
          onLoginSuccess={() => {
            setIsLoggedIn(true);
            setShowLogin(false);
          }}
        />
      )}

      {showAdmin && (
        <AdminDashboard 
          lang={lang} 
          onClose={() => setShowAdmin(false)} 
        />
      )}
    </div>
  );
};

export default App;
