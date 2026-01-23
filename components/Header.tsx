
import React, { useState, useEffect } from 'react';
import { Language } from '../types';
import { TRANSLATIONS } from '../constants';
import Logo from './Logo';

interface HeaderProps {
  lang: Language;
  onToggleLang: () => void;
  onOpenLogin: () => void;
}

const Header: React.FC<HeaderProps> = ({ lang, onToggleLang, onOpenLogin }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = TRANSLATIONS[lang].nav;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const navLinks = [
    { name: t.services, id: 'services' },
    { name: t.pricing, id: 'pricing' },
    { name: t.contact, id: 'contact' },
  ];

  const langNames = { fr: 'FR', en: 'EN', ar: 'AR' };

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-[60] transition-all duration-300 ${
        scrolled || mobileMenuOpen ? 'bg-white shadow-lg py-2' : 'bg-transparent py-5'
      }`}>
        <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
          <a href="#home" onClick={(e) => handleScrollTo(e, 'home')} className="z-[70]">
            <Logo light={!scrolled && !mobileMenuOpen} className="h-10 md:h-12" />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => handleScrollTo(e, link.id)}
                className={`text-[15px] font-bold uppercase tracking-wider hover:text-menara-orange transition-colors ${
                  scrolled ? 'text-navy' : 'text-white'
                }`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2 md:gap-4">
            <button
              onClick={onToggleLang}
              className={`text-xs md:text-sm font-black w-10 h-10 md:w-14 md:h-10 flex items-center justify-center rounded-xl border-2 transition-all ${
                scrolled || mobileMenuOpen
                  ? 'border-gray-100 text-navy hover:border-menara-orange' 
                  : 'border-white/20 text-white hover:border-white'
              }`}
            >
              {langNames[lang]}
            </button>
            <button
              onClick={onOpenLogin}
              className="hidden sm:block bg-menara-orange text-white px-4 md:px-8 py-2 md:py-3 rounded-xl text-xs md:text-sm font-black uppercase tracking-widest shadow-xl hover:bg-orange-600 transition-all"
            >
              {t.login}
            </button>
            
            {/* Mobile Menu Toggle */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`lg:hidden p-2 rounded-xl transition-colors ${
                scrolled || mobileMenuOpen ? 'text-navy' : 'text-white'
              }`}
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 6h16M4 12h16m-7 6h7" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-[55] bg-white transition-all duration-500 lg:hidden ${
        mobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'
      }`}>
        <div className="flex flex-col items-center justify-center h-full gap-8 px-6 pt-20">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={(e) => handleScrollTo(e, link.id)}
              className="text-3xl font-black text-navy uppercase tracking-tighter hover:text-menara-orange transition-colors"
            >
              {link.name}
            </a>
          ))}
          <button
            onClick={() => { onOpenLogin(); setMobileMenuOpen(false); }}
            className="w-full bg-navy text-white py-5 rounded-2xl text-lg font-black uppercase tracking-widest mt-4 shadow-2xl"
          >
            {t.login}
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;
