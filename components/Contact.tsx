
import React, { useState, useRef, useEffect } from 'react';
import { Language } from '../types';
import { TRANSLATIONS } from '../constants';
import { GoogleGenAI } from '@google/genai';

interface Message {
  role: 'user' | 'model';
  text: string;
}

interface ContactProps {
  lang: Language;
}

const Contact: React.FC<ContactProps> = ({ lang }) => {
  const t = TRANSLATIONS[lang].contact;
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: lang === 'en' ? 'Hello! How can I help you with your delivery needs in Marrakech today?' : (lang === 'fr' ? 'Bonjour ! Comment puis-je vous aider pour vos besoins de livraison à Marrakech aujourd\'hui ?' : 'مرحباً! كيف يمكنني مساعدتك في احتياجات التوصيل الخاصة بك في مراكش اليوم؟') }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: messages.concat({ role: 'user', text: userMessage }).map(m => ({
          role: m.role,
          parts: [{ text: m.text }]
        })),
        config: {
          systemInstruction: `You are a helpful and professional customer support assistant for "Menara Logistics", a delivery company in Marrakech, Morocco. 
          Specialties: Last-mile delivery, Cash on Delivery (COD). 
          Pricing: 30DH (1-3 pkgs), 20DH (4-10 pkgs), 18DH (>10 pkgs). 
          Location: Azli rue ibn batota marrakech, Morocco. 
          Contact Info: +212 608 511 400, manaralogistici@gmail.com.
          Coverage: All of Marrakech and surrounding areas. 
          Vibe: Trustworthy, efficient, and local. 
          Respond in ${lang === 'ar' ? 'Arabic' : (lang === 'fr' ? 'French' : 'English')}. 
          Keep answers concise and helpful.`
        }
      });

      const modelText = response.text || "I'm sorry, I couldn't process that. Please try again or call us.";
      setMessages(prev => [...prev, { role: 'model', text: modelText }]);
    } catch (error) {
      console.error("Chat error:", error);
      setMessages(prev => [...prev, { role: 'model', text: "Error connecting. Please try calling us at +212 608 511 400." }]);
    } finally {
      setIsLoading(false);
    }
  };

  const isRtl = lang === 'ar';

  return (
    <div className="container mx-auto px-6">
      <div className="max-w-6xl mx-auto bg-white rounded-[40px] shadow-2xl overflow-hidden flex flex-col md:flex-row min-h-[700px] border border-gray-100">
        {/* Left/Right Info Panel (Dark) */}
        <div className={`md:w-[40%] bg-[#0f172a] p-12 text-white flex flex-col justify-between ${isRtl ? 'order-2' : ''}`}>
          <div>
            <h2 className="text-5xl font-black mb-10 leading-tight">{t.title}</h2>
            <p className="text-gray-400 text-lg mb-12 font-medium leading-relaxed max-w-sm">
              {t.subtitle}
            </p>

            <div className="space-y-8">
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 bg-[#1a2333] rounded-2xl flex items-center justify-center text-menara-orange transition-all group-hover:bg-menara-orange group-hover:text-white">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                  </svg>
                </div>
                <span className="text-xl font-bold tracking-wide">+212 608 511 400</span>
              </div>
              
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 bg-[#1a2333] rounded-2xl flex items-center justify-center text-menara-orange transition-all group-hover:bg-menara-orange group-hover:text-white">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <span className="text-xl font-bold tracking-wide break-all">manaralogistici@gmail.com</span>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 bg-[#1a2333] rounded-2xl flex items-center justify-center text-menara-orange transition-all group-hover:bg-menara-orange group-hover:text-white">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                </div>
                <span className="text-xl font-bold tracking-wide">Azli rue ibn batota marrakech, Morocco</span>
              </div>
            </div>
          </div>

          <div className="mt-16 flex gap-4">
             {['W', 'I', 'F'].map(social => (
                <a key={social} href="#" className="w-12 h-12 rounded-xl bg-[#1a2333] flex items-center justify-center hover:bg-menara-orange transition-all text-sm font-black border border-white/5">
                  {social}
                </a>
             ))}
          </div>
        </div>

        {/* Chat Panel (White) */}
        <div className={`md:w-[60%] flex flex-col h-full bg-gray-50/50 ${isRtl ? 'order-1' : ''}`}>
          {/* Chat Messages Area */}
          <div className="flex-1 p-6 md:p-10 overflow-y-auto space-y-6 max-h-[600px] scrollbar-thin scrollbar-thumb-gray-200">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? (isRtl ? 'justify-start' : 'justify-end') : (isRtl ? 'justify-end' : 'justify-start')}`}>
                <div 
                  className={`max-w-[85%] px-6 py-4 rounded-3xl text-lg font-medium shadow-sm transition-all animate-in fade-in slide-in-from-bottom-2 duration-300 ${
                    msg.role === 'user' 
                      ? 'bg-navy text-white rounded-tr-none' 
                      : 'bg-white text-navy border border-gray-100 rounded-tl-none'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className={`flex ${isRtl ? 'justify-end' : 'justify-start'}`}>
                <div className="bg-white px-6 py-4 rounded-3xl rounded-tl-none border border-gray-100 shadow-sm flex items-center gap-2">
                  <div className="w-2 h-2 bg-menara-orange rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-menara-orange rounded-full animate-bounce delay-100"></div>
                  <div className="w-2 h-2 bg-menara-orange rounded-full animate-bounce delay-200"></div>
                </div>
              </div>
            )}
            <div ref={chatEndRef} />
          </div>

          {/* Chat Input Area */}
          <div className="p-6 md:p-8 bg-white border-t border-gray-100">
            <form onSubmit={handleSend} className="flex gap-4">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder={t.placeholder}
                className="flex-1 px-6 py-4 rounded-2xl border border-gray-100 bg-gray-50 focus:bg-white focus:outline-none focus:ring-4 focus:ring-menara-orange/10 transition-all font-medium text-lg"
              />
              <button 
                type="submit"
                disabled={!input.trim() || isLoading}
                className="bg-menara-orange text-white w-14 h-14 md:w-auto md:px-8 rounded-2xl flex items-center justify-center font-black text-xl hover:bg-orange-600 transition-all shadow-xl shadow-orange-500/20 active:translate-y-1 transform disabled:opacity-50 disabled:shadow-none"
              >
                <span className="hidden md:inline">{t.send}</span>
                <svg className={`w-6 h-6 md:ml-2 ${isRtl ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
