import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, Search, Car, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import ScrollToTop from './ScrollToTop';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { language, setLanguage, t } = useLanguage();

  return (
    <div className="min-h-screen flex flex-col selection:bg-teal-100 selection:text-teal-900 bg-white">
      {/* Dynamic Progress Bar - Just a visual detail */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gradient-to-r from-teal-500 to-cyan-500 z-[100] opacity-50"></div>

      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link to="/" className="flex items-center gap-2.5 group">
              <div className="bg-slate-900 p-2.5 rounded-2xl group-hover:bg-teal-600 transition-all duration-500 rotate-[-5deg] group-hover:rotate-0 shadow-lg shadow-slate-900/10">
                <Car className="text-white w-6 h-6" />
              </div>
              <span className="text-2xl font-black tracking-tighter text-slate-900 italic">CarWipes<span className="text-teal-500 font-bold not-italic">.de</span></span>
            </Link>

            <nav className="hidden lg:flex items-center space-x-12">
              <Link to="/" className="text-sm font-black uppercase tracking-[0.2em] text-slate-400 hover:text-teal-600 transition-all relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5 after:bg-teal-500 after:transition-all hover:after:w-full">{t('nav.home')}</Link>
              <Link to="/products" className="text-sm font-black uppercase tracking-[0.2em] text-slate-400 hover:text-teal-600 transition-all relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5 after:bg-teal-500 after:transition-all hover:after:w-full">{t('nav.catalog')}</Link>
              <Link to="/blog" className="text-sm font-black uppercase tracking-[0.2em] text-slate-400 hover:text-teal-600 transition-all relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5 after:bg-teal-500 after:transition-all hover:after:w-full">{t('nav.journal')}</Link>
              <Link to="/about" className="text-sm font-black uppercase tracking-[0.2em] text-slate-400 hover:text-teal-600 transition-all relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5 after:bg-teal-500 after:transition-all hover:after:w-full">{t('nav.about')}</Link>
            </nav>

            <div className="flex items-center gap-4">
              <div className="flex items-center bg-slate-50 p-1.5 rounded-2xl border border-slate-200 shadow-inner">
                <button 
                  onClick={() => setLanguage('en')}
                  className={`px-3 py-1.5 text-[10px] font-black rounded-xl transition-all ${language === 'en' ? 'bg-white text-teal-600 shadow-md ring-1 ring-slate-100' : 'text-slate-400 hover:text-slate-600'}`}
                >
                  EN
                </button>
                <button 
                  onClick={() => setLanguage('de')}
                  className={`px-3 py-1.5 text-[10px] font-black rounded-xl transition-all ${language === 'de' ? 'bg-white text-teal-600 shadow-md ring-1 ring-slate-100' : 'text-slate-400 hover:text-slate-600'}`}
                >
                  DE
                </button>
              </div>

              <Link to="/products" className="hidden md:flex items-center gap-3 bg-slate-900 text-white px-6 py-3 rounded-2xl font-black text-xs uppercase tracking-[0.2em] hover:bg-teal-600 transition-all shadow-xl shadow-slate-900/10 active:scale-95">
                {t('nav.shopNow')}
              </Link>

              <button className="lg:hidden p-2 text-slate-900 bg-slate-50 rounded-xl">
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-grow">
        {children}
      </main>

      <ScrollToTop />

      <footer className="bg-white border-t border-slate-100 pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-20 mb-32">
            <div className="md:col-span-5 space-y-10">
              <Link to="/" className="flex items-center gap-3">
                <div className="bg-slate-900 p-2 rounded-xl">
                  <Car className="text-white w-6 h-6" />
                </div>
                <span className="text-3xl font-black text-slate-900 tracking-tighter italic">CarWipes<span className="text-teal-500 not-italic">.de</span></span>
              </Link>
              <p className="text-xl leading-relaxed text-slate-500 font-medium">
                {t('footer.mission')}
              </p>
              <div className="flex gap-5">
                {[Facebook, Twitter, Instagram, Youtube].map((Icon, i) => (
                  <a key={i} href="#" className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center hover:bg-teal-600 hover:text-white transition-all duration-300 group shadow-sm border border-slate-100">
                    <Icon className="w-5 h-5 text-slate-400 group-hover:text-white transition-colors" />
                  </a>
                ))}
              </div>
            </div>
            
            <div className="md:col-span-2 space-y-8">
              <h4 className="text-slate-900 font-black text-xs uppercase tracking-[0.3em]">{t('nav.catalog')}</h4>
              <ul className="space-y-5 text-sm font-bold">
                <li><Link to="/products" className="text-slate-400 hover:text-teal-600 transition-colors flex items-center gap-2 group"><div className="w-1.5 h-1.5 rounded-full bg-teal-500 opacity-0 group-hover:opacity-100 transition-opacity"></div> {t('cat.microfibre')}</Link></li>
                <li><Link to="/products" className="text-slate-400 hover:text-teal-600 transition-colors flex items-center gap-2 group"><div className="w-1.5 h-1.5 rounded-full bg-teal-500 opacity-0 group-hover:opacity-100 transition-opacity"></div> {t('cat.interior')}</Link></li>
                <li><Link to="/products" className="text-slate-400 hover:text-teal-600 transition-colors flex items-center gap-2 group"><div className="w-1.5 h-1.5 rounded-full bg-teal-500 opacity-0 group-hover:opacity-100 transition-opacity"></div> {t('cat.drying')}</Link></li>
              </ul>
            </div>

            <div className="md:col-span-2 space-y-8">
              <h4 className="text-slate-900 font-black text-xs uppercase tracking-[0.3em]">Company</h4>
              <ul className="space-y-5 text-sm font-bold">
                <li><Link to="/about" className="text-slate-400 hover:text-teal-600 transition-colors flex items-center gap-2 group"><div className="w-1.5 h-1.5 rounded-full bg-teal-500 opacity-0 group-hover:opacity-100 transition-opacity"></div> {t('nav.about')}</Link></li>
                <li><Link to="/contact" className="text-slate-400 hover:text-teal-600 transition-colors flex items-center gap-2 group"><div className="w-1.5 h-1.5 rounded-full bg-teal-500 opacity-0 group-hover:opacity-100 transition-opacity"></div> Kontakt</Link></li>
                <li><Link to="/disclosure" className="text-slate-400 hover:text-teal-600 transition-colors flex items-center gap-2 group"><div className="w-1.5 h-1.5 rounded-full bg-teal-500 opacity-0 group-hover:opacity-100 transition-opacity"></div> Affiliate Disclosure</Link></li>
              </ul>
            </div>

            <div className="md:col-span-3 space-y-8">
              <h4 className="text-slate-900 font-black text-xs uppercase tracking-[0.3em]">Legal</h4>
              <ul className="space-y-5 text-sm font-bold">
                <li><Link to="/privacy" className="text-slate-400 hover:text-teal-600 transition-colors">Privacy Policy</Link></li>
                <li><Link to="/terms" className="text-slate-400 hover:text-teal-600 transition-colors">Terms of Service</Link></li>
                <li><a href="/sitemap.xml" className="text-slate-200 text-[8px] hover:text-teal-500">Sitemap</a></li>
              </ul>
            </div>
          </div>
          
          <div className="pt-16 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-10">
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em]">&copy; 2026 CARWIPES.DE • {t('footer.rights')}</p>
            <div className="flex gap-10">
              <span className="text-[10px] font-black text-slate-900 uppercase tracking-[0.3em] bg-slate-100 px-4 py-2 rounded-full">{t('footer.design')}</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;