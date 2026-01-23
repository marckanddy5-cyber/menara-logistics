
import React from 'react';
import { Language } from '../types';
import { TRANSLATIONS } from '../constants';

interface PricingProps {
  lang: Language;
}

const Pricing: React.FC<PricingProps> = ({ lang }) => {
  const t = TRANSLATIONS[lang].pricing;

  return (
    <div className="container mx-auto px-6">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-4xl font-bold text-navy mb-4">{t.title}</h2>
        <p className="text-gray-600">{t.subtitle}</p>
        <div className="h-1 w-20 bg-menara-orange mx-auto mt-4"></div>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {t.tiers.map((tier: any, index: number) => (
          <div 
            key={index} 
            className={`relative p-8 rounded-3xl transition-all ${
              tier.recommended 
                ? 'bg-navy text-white shadow-2xl scale-105 border-4 border-menara-orange z-10' 
                : 'bg-white text-navy shadow-lg border border-gray-100 hover:scale-105'
            }`}
          >
            {tier.recommended && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-menara-orange text-white px-4 py-1 rounded-full text-xs font-bold uppercase">
                Best Value
              </div>
            )}
            <h3 className={`text-xl font-bold mb-4 ${tier.recommended ? 'text-menara-orange' : 'text-gray-500'}`}>
              {tier.range}
            </h3>
            <div className="flex items-baseline mb-6">
              <span className="text-5xl font-extrabold">{tier.price}</span>
            </div>
            <p className={`mb-8 ${tier.recommended ? 'text-gray-400' : 'text-gray-500'}`}>
              {tier.desc}
            </p>
            <ul className="space-y-4 mb-8">
               {['Last-Mile Delivery', 'COD Management', 'Electronic Invoice', 'Insurance Available'].map((feat, i) => (
                 <li key={i} className="flex items-center gap-3 text-sm">
                   <svg className={`w-5 h-5 ${tier.recommended ? 'text-menara-orange' : 'text-green-500'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                   {feat}
                 </li>
               ))}
            </ul>
            <button className={`w-full py-4 rounded-xl font-bold transition-all ${
              tier.recommended 
                ? 'bg-menara-orange text-white hover:bg-orange-600' 
                : 'bg-gray-100 text-navy hover:bg-gray-200'
            }`}>
              {lang === 'en' ? 'Choose Plan' : 'Choisir ce plan'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
