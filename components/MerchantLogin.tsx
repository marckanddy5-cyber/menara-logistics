
import React from 'react';
import { Language } from '../types';

interface MerchantLoginProps {
  lang: Language;
  onClose: () => void;
}

const MerchantLogin: React.FC<MerchantLoginProps> = ({ lang, onClose }) => {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-navy/80 backdrop-blur-sm">
      <div className="bg-white w-full max-w-md rounded-3xl shadow-2xl overflow-hidden relative">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-navy"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
        </button>

        <div className="p-8">
          <div className="text-center mb-8">
             <div className="w-16 h-16 bg-orange-100 text-menara-orange rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
             </div>
             <h2 className="text-2xl font-bold text-navy">
               {lang === 'en' ? 'Merchant Dashboard' : 'Espace Marchand'}
             </h2>
             <p className="text-gray-500 mt-2">
               {lang === 'en' ? 'Access your COD stats and manage orders' : 'Accédez à vos stats COD et gérez vos commandes'}
             </p>
          </div>

          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label className="block text-sm font-bold text-navy mb-2">
                {lang === 'en' ? 'Email' : 'Email'}
              </label>
              <input type="email" placeholder="merchant@store.com" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-menara-orange outline-none" />
            </div>
            <div>
              <label className="block text-sm font-bold text-navy mb-2">
                {lang === 'en' ? 'Password' : 'Mot de passe'}
              </label>
              <input type="password" placeholder="••••••••" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-menara-orange outline-none" />
            </div>
            <div className="flex items-center justify-between text-sm">
               <label className="flex items-center gap-2">
                  <input type="checkbox" className="rounded text-menara-orange" />
                  <span className="text-gray-600">{lang === 'en' ? 'Remember me' : 'Se souvenir de moi'}</span>
               </label>
               <a href="#" className="text-menara-orange font-bold">{lang === 'en' ? 'Forgot?' : 'Oublié ?'}</a>
            </div>
            <button className="w-full bg-navy text-white py-4 rounded-xl font-bold text-lg hover:bg-black transition-all shadow-lg mt-6">
              {lang === 'en' ? 'Login' : 'Se connecter'}
            </button>
          </form>

          <div className="mt-8 text-center border-t pt-6">
             <p className="text-sm text-gray-500">
               {lang === 'en' ? "Don't have an account yet?" : "Pas encore de compte ?"}
               <button className="text-menara-orange font-bold ml-2">{lang === 'en' ? 'Register Now' : "S'inscrire"}</button>
             </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MerchantLogin;
