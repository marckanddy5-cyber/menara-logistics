
import React, { useState } from 'react';
import { Language } from '../types';
import { TRANSLATIONS } from '../constants';
import { GoogleGenAI } from '@google/genai';

interface HeroProps {
  lang: Language;
  isLoggedIn: boolean;
  onOpenLogin: () => void;
}

const Hero: React.FC<HeroProps> = ({ lang, isLoggedIn, onOpenLogin }) => {
  const [trackingId, setTrackingId] = useState('');
  const [trackingInfo, setTrackingInfo] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const t = TRANSLATIONS[lang].hero;

  const handleTrack = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!trackingId.trim()) return;

    // Redirect to login if not authenticated
    if (!isLoggedIn) {
      onOpenLogin();
      return;
    }

    setLoading(true);
    try {
        const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
        const prompt = `Simulate a delivery status response for tracking ID "${trackingId}" for a courier in Marrakech. 
        Return a JSON with fields: status (in ${lang}), currentLocation (in Marrakech), lastUpdate (date), and a list of 3 steps (history).
        Tone: Professional.`;
        
        const response = await ai.models.generateContent({
          model: 'gemini-3-flash-preview',
          contents: prompt,
          config: {
              responseMimeType: 'application/json'
          }
        });
        
        const data = JSON.parse(response.text || '{}');
        setTrackingInfo(data);
    } catch (error) {
        setTrackingInfo({
            status: lang === 'en' ? 'Out for Delivery' : 'En cours de livraison',
            currentLocation: 'Gueliz, Marrakech',
            lastUpdate: new Date().toLocaleDateString(),
            steps: [
                lang === 'en' ? 'Package received at warehouse' : 'Colis reçu au dépôt',
                lang === 'en' ? 'Sorted and dispatched' : 'Trié et expédié',
                lang === 'en' ? 'Arrived at local hub' : 'Arrivé au centre local'
            ]
        });
    } finally {
        setLoading(false);
    }
  };

  return (
    <div className="relative min-h-[85vh] md:min-h-screen flex items-center pt-24 md:pt-32 pb-12 md:pb-20 bg-[#1e293b] overflow-hidden">
      {/* Background decoration for "Butter" feel */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-navy/20 -skew-x-12 translate-x-1/4 pointer-events-none"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl">
          <span className="inline-block px-3 py-1 md:px-5 md:py-2 bg-menara-orange text-white text-[10px] md:text-[13px] font-black rounded-full mb-4 md:mb-8 uppercase tracking-[0.2em] animate-in fade-in slide-in-from-left-4 duration-500">
            {lang === 'en' ? 'Leading in Marrakech' : 'Leader à Marrakech'}
          </span>
          
          <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-[100px] font-black text-white leading-[0.9] tracking-tighter mb-6 md:mb-10 animate-in fade-in slide-in-from-bottom-4 duration-700">
            {t.title.split(',')[0]}<br/>
            <span className="text-menara-orange">{t.title.split(',')[1] || ''}</span>
          </h1>
          
          <p className="text-lg md:text-2xl text-gray-300 font-medium mb-8 md:mb-12 max-w-2xl leading-relaxed animate-in fade-in slide-in-from-bottom-6 duration-1000">
            {t.subtitle}
          </p>

          <form onSubmit={handleTrack} className="flex flex-col sm:flex-row gap-3 md:gap-4 max-w-2xl animate-in fade-in slide-in-from-bottom-8 duration-1000">
            <div className="flex-1 relative">
              <input 
                type="text" 
                value={trackingId}
                onChange={(e) => setTrackingId(e.target.value)}
                placeholder={t.trackPlaceholder}
                className="w-full px-6 py-4 md:py-6 rounded-2xl md:rounded-3xl bg-white/10 border border-white/20 text-white placeholder:text-white/40 focus:outline-none focus:ring-4 focus:ring-menara-orange/30 focus:bg-white/20 transition-all text-base md:text-xl font-bold"
              />
              {!isLoggedIn && trackingId.length > 0 && (
                <div className="absolute left-6 -bottom-6 text-[10px] text-menara-orange font-black uppercase tracking-widest">
                  {lang === 'en' ? 'Login required to track' : 'Connexion requise pour le suivi'}
                </div>
              )}
            </div>
            <button 
              type="submit"
              disabled={loading}
              className="bg-menara-orange text-white px-8 md:px-12 py-4 md:py-6 rounded-2xl md:rounded-3xl font-black text-base md:text-xl uppercase tracking-widest hover:bg-orange-600 transition-all shadow-2xl shadow-orange-500/20 active:scale-95 disabled:opacity-50"
            >
              {loading ? '...' : t.trackButton}
            </button>
          </form>

          {trackingInfo && (
            <div className="mt-8 md:mt-12 p-6 md:p-8 bg-white rounded-3xl md:rounded-[40px] shadow-2xl animate-in zoom-in duration-300 max-w-2xl">
              <div className="flex justify-between items-start mb-6 md:mb-8">
                <div>
                  <h3 className="text-navy text-2xl md:text-3xl font-black uppercase tracking-tight">{trackingInfo.status}</h3>
                  <p className="text-gray-500 font-bold mt-1 uppercase text-xs tracking-widest">{trackingInfo.currentLocation}</p>
                </div>
                <button onClick={() => setTrackingInfo(null)} className="text-gray-300 hover:text-navy transition-colors">
                   <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12"></path></svg>
                </button>
              </div>
              <div className="space-y-4 md:space-y-6">
                 {trackingInfo.steps?.map((step: string, i: number) => (
                   <div key={i} className="flex items-center gap-4">
                      <div className={`w-3 h-3 rounded-full ${i === 0 ? 'bg-menara-orange animate-pulse' : 'bg-gray-200'}`}></div>
                      <span className={`font-bold ${i === 0 ? 'text-navy' : 'text-gray-400'} text-sm md:text-base`}>{step}</span>
                   </div>
                 ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Hero;
