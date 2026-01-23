
import React from 'react';
import { Language } from '../types';
import { TRANSLATIONS } from '../constants';

interface WhyUsProps {
  lang: Language;
}

const WhyUs: React.FC<WhyUsProps> = ({ lang }) => {
  const t = TRANSLATIONS[lang].whyUs;

  return (
    <div className="container mx-auto px-6">
      <div className="flex flex-col lg:flex-row gap-16 items-center">
        <div className="lg:w-1/2">
           <img 
             src="https://images.unsplash.com/photo-1554224155-1696413565d3?auto=format&fit=crop&q=80&w=800" 
             alt="Office trust" 
             className="rounded-3xl shadow-xl"
           />
        </div>
        <div className="lg:w-1/2">
          <h2 className="text-4xl font-bold text-navy mb-8">{t.title}</h2>
          <div className="grid gap-8">
            {t.items.map((item: any, index: number) => (
              <div key={index} className="flex gap-6">
                <div className="shrink-0 w-12 h-12 bg-orange-100 text-menara-orange rounded-xl flex items-center justify-center font-bold text-xl">
                  {index + 1}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-navy mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
