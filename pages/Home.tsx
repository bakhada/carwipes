import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  ShieldCheck, 
  ArrowRight, 
  Sparkles, 
  TrendingUp, 
  Droplets,
  Wind,
  Layers,
  Star,
  Search as SearchIcon,
  Zap,
  MousePointer2
} from 'lucide-react';
import { products, articles } from '../data';
import ProductCard from '../components/ProductCard';
import { useLanguage } from '../context/LanguageContext';

const Home: React.FC = () => {
  const { t, updateSeo, language } = useLanguage();
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState('');
  
  const trending = products.slice(0, 4);
  const featuredArticle = articles[0];

  useEffect(() => {
    updateSeo(t('seo.home.title'), t('seo.home.desc'));
  }, [language, t, updateSeo]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchValue.trim()) {
      navigate(`/products?search=${encodeURIComponent(searchValue)}`);
    }
  };

  const categories = [
    { name: t('cat.microfibre'), icon: <Layers className="w-8 h-8" />, count: products.filter(p => p.name.toLowerCase().includes('microfibre')).length },
    { name: t('cat.interior'), icon: <Droplets className="w-8 h-8" />, count: products.filter(p => p.name_de.toLowerCase().includes('innen') || p.name_de.toLowerCase().includes('pflege')).length },
    { name: t('cat.drying'), icon: <Wind className="w-8 h-8" />, count: products.filter(p => p.name_de.toLowerCase().includes('trocken')).length },
    { name: t('cat.sets'), icon: <Zap className="w-8 h-8" />, count: products.filter(p => p.name.toLowerCase().includes('set') || p.name.toLowerCase().includes('pack')).length },
  ];

  const brands = ['SONAX', 'Meguiars', 'Vileda', 'Armor All', 'Nuke Guys', 'Koch Chemie'];

  return (
    <div className="bg-white">
      {/* Hero Section - Professional Dark Theme */}
      <section className="relative pt-20 pb-32 lg:pt-32 lg:pb-48 overflow-hidden bg-[#0a0c10]">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-teal-500/5 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-cyan-500/5 rounded-full blur-[100px]"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            <div className="lg:col-span-7 space-y-10">
              <div className="inline-flex items-center gap-2 bg-teal-500/10 border border-teal-500/20 px-4 py-1.5 rounded-full text-teal-400 text-[10px] font-black uppercase tracking-[0.2em]">
                <Sparkles className="w-3.5 h-3.5" /> {t('hero.badge')}
              </div>
              
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[1] tracking-tighter">
                {t('hero.title.1')} <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400 italic font-black">{t('hero.title.2')}</span>
              </h1>

              <p className="text-lg text-slate-400 max-w-xl leading-relaxed font-medium">
                {t('hero.desc')}
              </p>

              <div className="flex flex-col gap-8 max-w-xl">
                <form onSubmit={handleSearch} className="relative group">
                  <input 
                    type="text" 
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                    placeholder={t('hero.searchPlaceholder')}
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 outline-none focus:border-teal-400 focus:bg-white/10 transition-all text-lg text-white font-bold"
                  />
                  <button type="submit" className="absolute right-3 top-1/2 -translate-y-1/2 bg-teal-500 text-white p-3 rounded-xl hover:bg-teal-400 transition-all shadow-lg active:scale-95">
                    <SearchIcon className="w-6 h-6" />
                  </button>
                </form>

                <div className="flex items-center gap-8 flex-wrap">
                  <div className="flex -space-x-3">
                    {[1, 2, 3, 4].map(i => (
                      <img key={i} src={`https://i.pravatar.cc/100?img=${i+20}`} className="w-10 h-10 rounded-full border-2 border-[#0a0c10]" alt="Pro User" />
                    ))}
                    <div className="w-10 h-10 rounded-full bg-teal-500/20 border-2 border-[#0a0c10] flex items-center justify-center text-teal-400 text-[10px] font-black">+4k</div>
                  </div>
                  <div className="text-sm font-black text-slate-400 uppercase tracking-widest">{t('hero.happyUsers')}</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 relative group hidden lg:block">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white/5 backdrop-blur-xl rotate-2 group-hover:rotate-0 transition-all duration-700 aspect-square">
                <img 
                  src="https://m.media-amazon.com/images/I/91aUiP4twwL._AC_SL1500_.jpg" 
                  alt={t('alt.heroImage')} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[2000ms]" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6 p-6 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10">
                  <p className="text-[10px] font-black text-teal-400 uppercase tracking-[0.2em] mb-1">{t('hero.editorChoice')}</p>
                  <h4 className="text-xl font-black text-white truncate">Nuke Guys Gamma Dryer</h4>
                  <p className="text-xs text-slate-400 mt-2 italic">"{t('hero.editorQuote')}"</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="py-12 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 overflow-hidden">
          <p className="text-center text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] mb-8">{t('home.trustBar')}</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-30 grayscale hover:grayscale-0 transition-all duration-1000">
            {brands.map(brand => (
              <span key={brand} className="text-xl md:text-2xl font-black text-slate-900 tracking-tighter italic select-none">
                {brand}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Spotlight */}
      <section className="py-24 bg-[#0a0c10] text-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-6xl font-black mb-6 italic tracking-tighter">
              {t('home.categories.title.1')} <span className="text-teal-400 not-italic">{t('home.categories.title.2')}</span>
            </h2>
            <p className="text-slate-400 text-lg font-medium">{t('home.categories.desc')}</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((cat, idx) => (
              <Link 
                to={`/products?search=${encodeURIComponent(cat.name)}`} 
                key={idx} 
                className="group p-8 bg-white/5 border border-white/10 rounded-3xl hover:bg-white/10 transition-all duration-300 backdrop-blur-sm flex flex-col items-center text-center"
              >
                <div className="mb-8 p-5 bg-white/5 rounded-2xl group-hover:bg-teal-500 group-hover:text-white transition-all">
                  {React.cloneElement(cat.icon as React.ReactElement, { className: "w-8 h-8" })}
                </div>
                <h3 className="text-2xl font-black mb-2 group-hover:text-teal-400 transition-colors">{cat.name}</h3>
                <span className="text-[10px] font-black tracking-widest uppercase text-slate-500 mb-8">{cat.count} {t('cat.items')}</span>
                <div className="mt-auto inline-flex items-center gap-2 text-teal-400 text-[10px] font-black uppercase tracking-widest group-hover:text-white transition-all">
                  {t('home.categories.discover')} <MousePointer2 className="w-3.5 h-3.5" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Trending Products */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 text-teal-600 font-black text-[10px] uppercase tracking-widest mb-3">
                <TrendingUp className="w-5 h-5" /> {t('trending.badge')}
              </div>
              <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter italic">{t('trending.title')}</h2>
            </div>
            <Link to="/products" className="group flex items-center gap-3 bg-slate-950 text-white px-8 py-4 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-teal-600 transition-all">
              {t('trending.viewAll')} <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {trending.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Expert Article Insight */}
      {featuredArticle && (
        <section className="py-24 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-[2.5rem] p-8 md:p-16 flex flex-col lg:flex-row items-center gap-12 border border-slate-100 shadow-sm relative overflow-hidden">
               <div className="lg:w-1/2 space-y-8 relative z-10">
                  <div className="inline-flex items-center gap-2 text-teal-600 font-black text-[10px] uppercase tracking-widest">
                    <Zap className="w-5 h-5" /> {t('home.expert.badge')}
                  </div>
                  <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tighter italic leading-[1.1]">
                    {language === 'de' ? featuredArticle.title_de : featuredArticle.title}
                  </h2>
                  <p className="text-lg text-slate-500 font-medium leading-relaxed italic">
                    "{language === 'de' ? featuredArticle.excerpt_de : featuredArticle.excerpt}"
                  </p>
                  <Link to={`/blog/${featuredArticle.slug}`} className="inline-flex items-center gap-3 bg-slate-950 text-white px-8 py-4 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-teal-600 transition-all">
                    {t('home.expert.readNow')} <ArrowRight className="w-5 h-5" />
                  </Link>
               </div>
               <div className="lg:w-1/2 relative group w-full aspect-video lg:aspect-square">
                  <div className="relative rounded-3xl overflow-hidden shadow-xl aspect-square">
                    <img src={featuredArticle.image} alt="Journal Feature" className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700" />
                  </div>
               </div>
            </div>
          </div>
        </section>
      )}

      {/* Value Proposition */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-950 rounded-[3rem] p-10 md:p-20 text-white relative overflow-hidden shadow-2xl">
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-4xl md:text-6xl font-black tracking-tighter italic">{t('value.title')}</h2>
                <p className="text-slate-400 text-lg font-medium leading-relaxed">{t('value.desc')}</p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { title: t('value.q1.title'), desc: t('value.q1.desc'), icon: <ShieldCheck /> },
                  { title: t('value.q2.title'), desc: t('value.q2.desc'), icon: <Wind /> },
                  { title: t('value.prime.title'), desc: t('value.prime.desc'), icon: <Zap /> },
                  { title: t('value.support.title'), desc: t('value.support.desc'), icon: <Sparkles /> },
                ].map((item, i) => (
                  <div key={i} className="group p-8 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-all">
                    <div className="w-10 h-10 bg-teal-500/10 rounded-xl flex items-center justify-center text-teal-400 mb-6 group-hover:scale-110 group-hover:bg-teal-500 group-hover:text-white transition-all">
                      {React.cloneElement(item.icon as React.ReactElement, { className: "w-5 h-5" })}
                    </div>
                    <h3 className="text-lg font-black text-white mb-2 italic">{item.title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed font-medium group-hover:text-slate-400 transition-colors">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="relative p-10 md:p-20 rounded-[3rem] overflow-hidden group bg-gradient-to-br from-teal-600 to-cyan-600 shadow-2xl">
            <div className="relative z-10 space-y-8">
              <h2 className="text-4xl md:text-6xl font-black text-white italic tracking-tighter leading-none">{t('cta.title')}</h2>
              <p className="text-teal-50 text-lg font-medium max-w-xl mx-auto opacity-90">{t('cta.desc')}</p>
              <Link to="/products" className="inline-block bg-white text-teal-600 px-10 py-5 rounded-2xl font-black uppercase tracking-widest text-sm hover:shadow-xl hover:scale-105 transition-all">
                {t('cta.button')}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;