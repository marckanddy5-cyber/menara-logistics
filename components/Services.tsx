
import React from 'react';
import { Language } from '../types';
import { TRANSLATIONS } from '../constants';

interface ServicesProps {
  lang: Language;
}

const Services: React.FC<ServicesProps> = ({ lang }) => {
  const t = TRANSLATIONS[lang].services;

  const services = [
    {
      title: t.lastMile.title,
      desc: t.lastMile.desc,
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
        </svg>
      )
    },
    {
      title: t.cod.title,
      desc: t.cod.desc,
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
      )
    },
    {
      title: t.ecommerce.title,
      desc: t.ecommerce.desc,
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path>
        </svg>
      )
    }
  ];

  return (
    <div className="container mx-auto px-4 md:px-6">
      <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
        <h2 className="text-3xl md:text-5xl font-black text-navy mb-4 leading-tight uppercase tracking-tighter">
          {t.title}
        </h2>
        <div className="h-1.5 w-20 bg-menara-orange mx-auto rounded-full"></div>
      </div>

      <div className="grid md:grid-cols-3 gap-6 md:gap-8">
        {services.map((service, index) => (
          <div 
            key={index} 
            className="bg-white p-8 md:p-10 rounded-3xl shadow-xl shadow-gray-200/50 border border-gray-100 hover:shadow-2xl hover:-translate-y-1 transition-all group"
          >
            <div className="w-16 h-16 md:w-20 md:h-20 bg-orange-50 text-menara-orange rounded-2xl flex items-center justify-center mb-6 md:mb-8 group-hover:bg-menara-orange group-hover:text-white transition-all transform group-hover:rotate-6">
              {service.icon}
            </div>
            <h3 className="text-2xl md:text-3xl font-black text-navy mb-4 md:mb-6 leading-tight uppercase tracking-tight">
              {service.title}
            </h3>
            <p className="text-gray-500 text-base md:text-lg leading-relaxed font-medium">
              {service.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
