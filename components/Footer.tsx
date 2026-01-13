
import React from 'react';
import { AppSection } from '../types';

interface FooterProps {
  onNavigate: (section: AppSection) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-brand-dark text-slate-400 py-24 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-brand-primary rounded-lg flex items-center justify-center shadow-2xl shadow-indigo-500/20">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <span className="text-2xl font-bold font-outfit tracking-tight text-white">Car<span className="text-brand-primary">Wipes</span><span className="text-sm font-light text-slate-600">.de</span></span>
            </div>
            <p className="max-w-md mb-8 leading-relaxed font-medium">
              The premier resource for elite automotive detailing. We analyze material science and surface protection to help enthusiasts achieve the perfect finish.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-black mb-8 uppercase text-[10px] tracking-[0.2em]">Intel</h4>
            <ul className="space-y-5">
              <li><button onClick={() => onNavigate(AppSection.About)} className="hover:text-brand-primary transition-colors text-sm font-bold">Lab Bio</button></li>
              <li><button onClick={() => onNavigate(AppSection.Contact)} className="hover:text-brand-primary transition-colors text-sm font-bold">Partnerships</button></li>
              <li><button onClick={() => onNavigate(AppSection.Blog)} className="hover:text-brand-primary transition-colors text-sm font-bold">The Magazine</button></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-black mb-8 uppercase text-[10px] tracking-[0.2em]">Legal</h4>
            <ul className="space-y-5">
              <li><button onClick={() => onNavigate(AppSection.Privacy)} className="hover:text-brand-primary transition-colors text-sm font-bold text-left">Privacy Protocol</button></li>
              <li><button onClick={() => onNavigate(AppSection.Terms)} className="hover:text-brand-primary transition-colors text-sm font-bold text-left">Service Terms</button></li>
              <li><button onClick={() => onNavigate(AppSection.Impressum)} className="hover:text-brand-primary transition-colors text-sm font-bold text-left">Transparency Disclosure</button></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-12 border-t border-white/5 text-center">
          <div className="bg-white/5 p-8 rounded-[2rem] mb-12 backdrop-blur-md">
            <p className="text-[10px] leading-relaxed max-w-4xl mx-auto uppercase tracking-widest font-black text-slate-500">
              Affiliate Transparency: CarWipes is a participant in the Amazon Services LLC Associates Program. We earn from qualifying purchases to fund our independent laboratory testing.
            </p>
          </div>
          <p className="text-xs font-black uppercase tracking-widest">
            &copy; {new Date().getFullYear()} CarWipes Detailing Intelligence. Engineered in Berlin.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;