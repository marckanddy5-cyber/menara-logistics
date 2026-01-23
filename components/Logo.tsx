
import React from 'react';

const Logo: React.FC<{ className?: string; light?: boolean }> = ({ className = "h-12", light = false }) => {
  return (
    <div className={`flex items-center gap-4 ${className}`}>
      <div className="relative w-12 h-12 flex-shrink-0">
        <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-sm">
          <defs>
            <linearGradient id="navyGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1e293b" />
              <stop offset="100%" stopColor="#0f172a" />
            </linearGradient>
            <linearGradient id="orangeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#fb923c" />
              <stop offset="100%" stopColor="#ea580c" />
            </linearGradient>
            <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#fbbf24" />
              <stop offset="100%" stopColor="#d97706" />
            </linearGradient>
          </defs>
          
          {/* Interlocking Links */}
          {/* Left/Navy Link */}
          <path 
            d="M45 25C30 25 20 35 20 50C20 65 30 75 45 75C55 75 62 68 65 60" 
            stroke="url(#navyGradient)" 
            strokeWidth="10" 
            strokeLinecap="round" 
            fill="none"
          />
          
          {/* Right/Orange Link */}
          <path 
            d="M55 75C70 75 80 65 80 50C80 35 70 25 55 25C45 25 38 32 35 40" 
            stroke="url(#orangeGradient)" 
            strokeWidth="10" 
            strokeLinecap="round" 
            fill="none"
          />

          {/* Upward Growth Arrow inside the intersection */}
          <path 
            d="M50 65V35M50 35L42 43M50 35L58 43" 
            stroke="url(#goldGradient)" 
            strokeWidth="7" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
          />
        </svg>
      </div>
      <div className="flex flex-col">
        <span className={`font-black tracking-tighter leading-none text-2xl ${light ? 'text-white' : 'text-[#0f172a]'}`}>
          MENARA LOGISTICS
        </span>
        <span className={`text-[11px] font-bold tracking-[0.25em] leading-none mt-1 ${light ? 'text-white/90' : 'text-[#ea580c]'}`}>
          YOUR TRUST, OUR DELIVERY.
        </span>
      </div>
    </div>
  );
};

export default Logo;
