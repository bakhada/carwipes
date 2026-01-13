
import React from 'react';
import { AppSection } from '../types';

interface HeaderProps {
  onNavigate: (section: AppSection) => void;
  activeSection: AppSection;
}

const Header: React.FC<HeaderProps> = ({ onNavigate, activeSection }) => {
  return (
    <header className="sticky top-0 z-50 glass-morphism shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <nav className="flex items-center gap-2 cursor-pointer" onClick={() => onNavigate(AppSection.Home)} aria-label="Home">
            <div className="w-10 h-10 bg-brand-primary rounded-lg flex items-center justify-center shadow-lg shadow-indigo-200">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <span className="text-xl font-bold font-outfit tracking-tight text-slate-800">Car<span className="text-brand-primary">Wipes</span><span className="text-sm font-light text-slate-400">.de</span></span>
          </nav>
          
          <nav className="hidden md:flex space-x-8" aria-label="Main Navigation">
            {[AppSection.Home, AppSection.Products, AppSection.Blog, AppSection.Guide].map((section) => (
              <button 
                key={section}
                onClick={() => onNavigate(section)}
                className={`text-sm font-bold transition-all uppercase tracking-wider ${
                  activeSection === section ? 'text-brand-primary' : 'text-slate-500 hover:text-indigo-500'
                }`}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            ))}
          </nav>

          <div className="flex items-center">
            <button 
              onClick={() => onNavigate(AppSection.Products)}
              className="bg-brand-primary text-white px-6 py-2.5 rounded-full text-xs font-black uppercase tracking-widest hover:bg-brand-dark transition-all shadow-xl shadow-indigo-100 hover:-translate-y-0.5"
            >
              Best Deals
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;