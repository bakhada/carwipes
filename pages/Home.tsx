
import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, 
  ArrowRight, 
  Sparkles, 
  TrendingUp, 
  Zap, 
  Droplets,
  Wind,
  Layers,
  Star
} from 'lucide-react';
import { products, articles } from '../data';
import ProductCard from '../components/ProductCard';
import AdPlacement from '../components/AdPlacement';

const Home: React.FC = () => {
  const trending = products.slice(0, 4);

  // Calculate dynamic counts based on the current product list
  const counts = useMemo(() => {
    const summary = {
      microfibre: 0,
      interior: 0,
      drying: 0,
      sets: 0
    };

    products.forEach(p => {
      const name = p.name.toLowerCase();
      
      // Order of checks matters for exclusive categorization
      if (name.includes('set') || name.includes('pack') || name.includes('kit') || name.includes('collection')) {
        summary.sets++;
      } else if (name.includes('dry') || name.includes('drying') || name.includes('chamois')) {
        summary.drying++;
      } else if (name.includes('wipes') || name.includes('interior') || name.includes('plastic') || name.includes('cockpit') || name.includes('glass')) {
        summary.interior++;
      } else if (name.includes('microfibre') || name.includes('fibre') || name.includes('cloth')) {
        summary.microfibre++;
      } else {
        // Fallback to microfibre as it's the core niche
        summary.microfibre++;
      }
    });

    return summary;
  }, []);

  const categories = [
    { name: 'Microfibre', icon: <Layers className="w-6 h-6" />, count: `${counts.microfibre} Items`, color: 'bg-teal-50 text-teal-600' },
    { name: 'Interior', icon: <Droplets className="w-6 h-6" />, count: `${counts.interior} Items`, color: 'bg-cyan-50 text-cyan-600' },
    { name: 'Drying', icon: <Wind className="w-6 h-6" />, count: `${counts.drying} Items`, color: 'bg-emerald-50 text-emerald-600' },
    { name: 'Sets', icon: <Sparkles className="w-6 h-6" />, count: `${counts.sets} Items`, color: 'bg-blue-50 text-blue-600' },
  ];

  return (
    <div className="bg-[#fcfdfd]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-4">
        <AdPlacement type="leaderboard" id="home-top-leaderboard" />
      </div>

      {/* Dynamic Hero Section */}
      <section className="relative pt-8 pb-24 lg:pt-12 lg:pb-32 overflow-hidden bg-gradient-to-b from-cyan-50/50 to-white">
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-[600px] h-[600px] bg-teal-100/30 rounded-full blur-3xl opacity-60"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-8">
              <div className="inline-flex items-center gap-2 bg-teal-500/10 px-4 py-2 rounded-full border border-teal-500/20 text-teal-700 text-xs font-bold uppercase tracking-widest">
                <Sparkles className="w-4 h-4 animate-pulse" /> Shop the 2026 Collection
              </div>
              <h1 className="text-5xl md:text-7xl font-black text-slate-900 leading-[1.1] tracking-tight">
                Everything you need for a <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-500">Spotless Finish.</span>
              </h1>
              <p className="text-lg text-slate-600 max-w-xl leading-relaxed">
                Expert-curated car detailing supplies delivered fast. Transform your ride with professional-grade microfibres and wipes from Germany's top brands.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/products" className="bg-teal-600 text-white px-10 py-5 rounded-2xl font-bold text-lg text-center hover:bg-teal-700 transition-all flex items-center justify-center gap-2 shadow-xl shadow-teal-600/20">
                  Browse Shop <ArrowRight className="w-5 h-5" />
                </Link>
                <div className="flex items-center gap-4 px-4">
                  <div className="flex -space-x-3">
                    {[1,2,3,4].map(i => (
                      <img key={i} className="w-10 h-10 rounded-full border-2 border-white shadow-sm" src={`https://i.pravatar.cc/100?img=${i+10}`} alt="user" />
                    ))}
                  </div>
                  <div className="text-sm">
                    <p className="font-bold text-slate-900">4,000+ happy detailers</p>
                    <div className="flex text-yellow-400"><Star className="w-3 h-3 fill-current"/><Star className="w-3 h-3 fill-current"/><Star className="w-3 h-3 fill-current"/><Star className="w-3 h-3 fill-current"/><Star className="w-3 h-3 fill-current"/></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:col-span-5 relative">
              <div className="relative z-10 bg-white p-4 rounded-[2.5rem] shadow-2xl shadow-teal-900/10 border border-white">
                <img 
                  src="https://m.media-amazon.com/images/I/91aUiP4twwL._AC_SL1500_.jpg" 
                  alt="Featured Product" 
                  className="rounded-[2rem] w-full h-auto object-cover"
                />
                <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-3xl shadow-xl border border-teal-50 max-w-[200px] animate-bounce-slow">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center text-white">
                      <Zap className="w-4 h-4 fill-current" />
                    </div>
                    <span className="font-bold text-slate-800 text-sm">Best Seller</span>
                  </div>
                  <p className="text-xs text-slate-500">Nuke Guys Gamma Dryer S - Selling Fast!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {categories.map((cat, idx) => (
              <Link to="/products" key={idx} className={`${cat.color} p-8 rounded-[2rem] flex flex-col items-center text-center transition-transform hover:-translate-y-2 group`}>
                <div className="mb-4 p-4 bg-white rounded-2xl shadow-sm group-hover:shadow-md transition-shadow">
                  {cat.icon}
                </div>
                <h3 className="font-bold text-lg mb-1">{cat.name}</h3>
                <span className="text-xs font-medium opacity-70">{cat.count}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <AdPlacement type="in-feed" id="home-mid-feed" />

      {/* Trending Products */}
      <section className="py-20 bg-[#fcfdfd]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-12">
            <div>
              <div className="flex items-center gap-2 text-teal-600 font-bold text-sm uppercase tracking-widest mb-2">
                <TrendingUp className="w-4 h-4" /> Hot Right Now
              </div>
              <h2 className="text-3xl font-black text-slate-900">Trending in Detailing</h2>
            </div>
            <Link to="/products" className="px-6 py-3 bg-white border border-slate-200 rounded-xl font-bold text-slate-600 hover:border-teal-500 hover:text-teal-600 transition-all flex items-center gap-2">
              View All Collection <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {trending.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Modern Value Prop Section */}
      <section className="py-24 overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-900 rounded-[3rem] p-12 md:p-20 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-teal-500/20 to-transparent"></div>
            <div className="relative z-10 max-w-2xl">
              <h2 className="text-4xl md:text-5xl font-black text-white mb-8 leading-tight">
                Why professionals choose <span className="text-teal-400 underline decoration-teal-400/30 underline-offset-8">CarWipes.de</span>
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-teal-500/20 rounded-xl flex items-center justify-center text-teal-400">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Quality Assured</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">We manually verify every product listing to ensure it meets automotive safety standards.</p>
                </div>
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-teal-500/20 rounded-xl flex items-center justify-center text-teal-400">
                    <Droplets className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Streak-Free Tech</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">Our focus is on high-GSM microfibre tech that guarantees a lint-free shine.</p>
                </div>
              </div>
            </div>
            <div className="hidden lg:block absolute right-[-5%] top-1/2 -translate-y-1/2 w-1/3">
              <img src="https://m.media-amazon.com/images/I/61F8GBdK-mL._AC_SL1280_.jpg" alt="Detailing" className="rotate-12 rounded-3xl shadow-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section - New Card Style */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-4xl font-black text-slate-900 mb-4">Deep Clean Guides</h2>
            <p className="text-slate-500">Master the art of car detailing with our expert advice and step-by-step tutorials.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {articles.slice(0, 4).map(article => (
              <Link to={`/blog/${article.slug}`} key={article.id} className="group relative rounded-[2.5rem] overflow-hidden aspect-[16/10] shadow-xl">
                <img src={article.image} alt={article.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-10 text-white">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="px-3 py-1 bg-teal-500 rounded-full text-[10px] font-bold uppercase tracking-wider">Expert Guide</span>
                    <span className="text-xs text-slate-300">{article.date}</span>
                  </div>
                  <h3 className="text-2xl font-bold group-hover:text-teal-400 transition-colors mb-4 leading-snug">{article.title}</h3>
                  <div className="flex items-center gap-2 font-bold text-sm">
                    Read Article <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <AdPlacement type="leaderboard" id="home-bottom-leaderboard" />
      </div>

      {/* Instant Support / Contact CTA */}
      <section className="py-20 border-t border-slate-100 bg-teal-50/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-black text-slate-900 mb-6">Need help picking the right wipe?</h2>
          <p className="text-slate-600 mb-10 max-w-xl mx-auto">Our detailing enthusiasts are ready to help you find the perfect setup for your specific car model.</p>
          <Link to="/contact" className="inline-flex items-center gap-2 bg-slate-900 text-white px-8 py-4 rounded-2xl font-bold hover:bg-slate-800 transition-all shadow-lg">
            Chat with an Expert
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
