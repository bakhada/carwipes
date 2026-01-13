
import React from 'react';

interface HeroProps {
  onStartShopping: () => void;
  onViewGuide: () => void;
}

const Hero: React.FC<HeroProps> = ({ onStartShopping, onViewGuide }) => {
  return (
    <section className="relative overflow-hidden bg-brand-dark pt-20 pb-24 lg:pt-32 lg:pb-40">
      <div className="absolute inset-0 z-0 opacity-30 pointer-events-none">
        <div className="absolute top-0 -left-1/4 w-1/2 h-full bg-indigo-600 blur-[160px] rounded-full"></div>
        <div className="absolute bottom-0 -right-1/4 w-1/2 h-full bg-cyan-600 blur-[160px] rounded-full"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-block px-4 py-1.5 mb-8 bg-white/10 backdrop-blur-md border border-white/10 rounded-full text-cyan-400 text-[10px] font-black uppercase tracking-[0.2em]">
          Master Your Shine • Est. 2026
        </div>
        
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold font-outfit text-white leading-[1.1] mb-8 text-balance">
          Professional <span className="text-brand-primary text-glow italic">Detailing</span> <br className="hidden sm:block" /> Results, Anywhere.
        </h1>
        <p className="max-w-2xl mx-auto text-lg sm:text-xl text-slate-400 mb-12 text-balance leading-relaxed">
          The curated hub for elite car care. From high-GSM microfibre to professional cockpit preservation—engineered for enthusiasts.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <button 
            onClick={onStartShopping}
            className="w-full sm:w-auto px-12 py-5 bg-brand-primary text-white rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-white hover:text-brand-dark hover:scale-105 transition-all shadow-2xl shadow-indigo-500/20"
          >
            Shop Top Picks
          </button>
          <button 
            onClick={onViewGuide}
            className="w-full sm:w-auto px-12 py-5 bg-white/5 text-white border border-white/10 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-white/10 transition-all backdrop-blur-sm"
          >
            Buying Guide
          </button>
        </div>

        <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-12 max-w-5xl mx-auto border-t border-white/5 pt-12">
          {[
            { label: 'Pro Grade', icon: '💎' },
            { label: 'Verified Deals', icon: '🏷️' },
            { label: 'Expert Tested', icon: '🛡️' },
            { label: 'Ultra Fast', icon: '⚡' },
          ].map((item) => (
            <div key={item.label} className="flex flex-col items-center">
              <span className="text-3xl mb-3" role="img" aria-hidden="true">{item.icon}</span>
              <span className="text-slate-500 text-[10px] font-black tracking-[0.2em] uppercase">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;