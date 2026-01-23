
import React, { useState } from 'react';
import { Language } from '../types';
import Logo from './Logo';
import { TRANSLATIONS } from '../constants';

interface FooterProps {
  lang: Language;
}

const Footer: React.FC<FooterProps> = ({ lang }) => {
  const t = TRANSLATIONS[lang].nav;
  const legal = TRANSLATIONS[lang].legal;
  const [modalContent, setModalContent] = useState<{ title: string; content: string } | null>(null);

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
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

  return (
    <footer className="bg-[#0f172a] py-16 text-white border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12">
          <div className="flex flex-col items-start">
            <Logo light className="h-12 mb-6" />
            <p className="text-gray-400 text-sm max-w-sm leading-relaxed">
              {lang === 'en' 
                ? 'Your trusted partner for last-mile delivery and secure COD logistics in the heart of Marrakech.' 
                : (lang === 'fr' 
                  ? 'Votre partenaire de confiance pour la livraison du dernier kilomètre et la logistique COD sécurisée au cœur de Marrakech.'
                  : 'شريككم الموثوق لتوصيل الميل الأخير والخدمات اللوجستية الآمنة للدفع عند الاستلام في قلب مراكش.')}
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-12">
            <div className="flex flex-col gap-4">
              <h4 className="font-black text-menara-orange uppercase tracking-widest text-xs">
                {lang === 'ar' ? 'تصفح' : 'Navigation'}
              </h4>
              <a href="#services" onClick={(e) => handleScrollTo(e, 'services')} className="text-gray-400 hover:text-white transition-colors">
                {t.services}
              </a>
              <a href="#pricing" onClick={(e) => handleScrollTo(e, 'pricing')} className="text-gray-400 hover:text-white transition-colors">
                {t.pricing}
              </a>
              <a href="#contact" onClick={(e) => handleScrollTo(e, 'contact')} className="text-gray-400 hover:text-white transition-colors">
                {t.contact}
              </a>
            </div>
            <div className="flex flex-col gap-4">
              <h4 className="font-black text-menara-orange uppercase tracking-widest text-xs">
                {lang === 'ar' ? 'قانوني' : 'Legal'}
              </h4>
              <button 
                onClick={() => setModalContent(legal.privacy)}
                className="text-left text-gray-400 hover:text-white transition-colors focus:outline-none"
              >
                {legal.privacy.title}
              </button>
              <button 
                onClick={() => setModalContent(legal.terms)}
                className="text-left text-gray-400 hover:text-white transition-colors focus:outline-none"
              >
                {legal.terms.title}
              </button>
            </div>
            <div className="hidden md:flex flex-col gap-4">
              <h4 className="font-black text-menara-orange uppercase tracking-widest text-xs">
                {lang === 'ar' ? 'المقر' : 'Headquarters'}
              </h4>
              <p className="text-gray-400 text-sm">
                Azli rue ibn batota<br/>
                Marrakech, Morocco
              </p>
            </div>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 text-xs font-bold uppercase tracking-widest">
          <span>© {new Date().getFullYear()} Menara Logistics. Marrakech, Morocco.</span>
          <div className="flex gap-6">
            <span>Powered by Gemini AI</span>
            <span>Last-Mile Excellence</span>
          </div>
        </div>
      </div>

      {/* Legal Modal */}
      {modalContent && (
        <div className="fixed inset-0 z-[120] flex items-center justify-center p-6 bg-navy/90 backdrop-blur-md animate-in fade-in duration-300 overflow-y-auto">
          <div className="bg-white text-navy w-full max-w-2xl rounded-3xl shadow-2xl overflow-hidden relative my-auto">
            <button 
              onClick={() => setModalContent(null)}
              className="absolute top-6 right-6 text-gray-400 hover:text-navy transition-colors z-10"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
            <div className="p-10 max-h-[80vh] overflow-y-auto custom-scrollbar">
              <h2 className="text-3xl font-black mb-6 uppercase tracking-tight">{modalContent.title}</h2>
              <div className="h-1 w-16 bg-menara-orange mb-8"></div>
              <div className="text-base text-gray-600 leading-relaxed font-medium whitespace-pre-wrap">
                {modalContent.content}
              </div>
              <button 
                onClick={() => setModalContent(null)}
                className="mt-10 bg-navy text-white px-8 py-3 rounded-xl font-black uppercase tracking-widest hover:bg-black transition-all"
              >
                {lang === 'ar' ? 'إغلاق' : 'Close'}
              </button>
            </div>
          </div>
        </div>
      )}
      <style>{`
        .custom-scrollbar::-webkit-scrollbar { width: 6px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: #f1f1f1; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #ea580c; border-radius: 10px; }
      `}</style>
    </footer>
  );
};

export default Footer;
