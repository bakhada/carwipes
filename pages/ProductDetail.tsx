import React, { useEffect, useMemo, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '../data';
import { 
  ExternalLink, 
  Star, 
  ArrowLeft, 
  ShieldCheck, 
  Zap, 
  Trophy, 
  ThumbsUp, 
  ThumbsDown,
  Target,
  Sparkles,
  ShoppingBag,
  ChevronRight
} from 'lucide-react';
import ProductCard from '../components/ProductCard';
import ShareButtons from '../components/ShareButtons';
import Breadcrumbs from '../components/Breadcrumbs';
import { useLanguage } from '../context/LanguageContext';

const ProductDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const product = products.find(p => p.slug === slug);
  const currentUrl = window.location.href;
  const { language, t, updateSeo } = useLanguage();
  const [showSticky, setShowSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowSticky(window.scrollY > 600);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (product) {
      const name = language === 'de' ? product.name_de : product.name;
      const brand = product.brand;
      const desc = language === 'de' ? product.description_de : product.description;
      
      // Dynamic Keyword-Rich SEO Title
      const seoTitle = language === 'de' 
        ? `${name} im Test & Erfahrung - Beste Autopflege | CarWipes.de`
        : `${name} Review & Expert Guide - Premium Detailing | CarWipes.de`;
        
      // Dynamic Keyword-Rich SEO Description (using product snippet)
      const seoDesc = language === 'de'
        ? `${name} von ${brand} für die professionelle Lackpflege. ${desc.substring(0, 130)}... Jetzt bei Amazon.de ansehen.`
        : `Comprehensive look at ${name} by ${brand}. ${desc.substring(0, 130)}... Check current price and reviews on Amazon.`;

      // Optimized Keywords
      const keywords = language === 'de'
        ? `${brand}, Autopflege Test, Lackpflege, Mikrofasertuch, Autoaufbereitung, Autoreinigung, Fahrzeugpflege`
        : `${brand}, car detailing, car cleaning wipes, microfibre cloth review, vehicle maintenance, Amazon car care`;

      updateSeo(seoTitle, seoDesc, product.image, keywords);
      window.scrollTo(0, 0);
    }
  }, [product, language, updateSeo]);

  const related = useMemo(() => {
    if (!product) return [];
    let brandMatches = products.filter(p => p.brand === product.brand && p.id !== product.id);
    
    if (brandMatches.length < 4) {
      const others = products
        .filter(p => p.brand !== product.brand && p.id !== product.id)
        .sort(() => 0.5 - Math.random())
        .slice(0, 4 - brandMatches.length);
      return [...brandMatches, ...others];
    }
    
    return brandMatches.slice(0, 4);
  }, [product]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">{t('catalog.noMatches')}</h2>
          <Link to="/products" className="text-teal-600 font-bold underline">{t('nav.catalog')}</Link>
        </div>
      </div>
    );
  }

  const name = language === 'de' ? product.name_de : product.name;
  const description = language === 'de' ? product.description_de : product.description;
  const altText = `Product image of ${name}`;

  const breadcrumbItems = [
    { label: t('nav.catalog'), path: '/products' },
    { label: name }
  ];

  return (
    <div className="bg-white min-h-screen">
      <div className={`fixed top-0 left-0 w-full bg-white/95 backdrop-blur-md border-b border-slate-200 z-[60] py-3 transition-all duration-500 transform ${showSticky ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}>
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between gap-4">
          <div className="flex items-center gap-4 min-w-0">
            <img src={product.image} className="w-10 h-10 object-contain flex-shrink-0" alt="" />
            <div className="hidden sm:block min-w-0">
              <h4 className="text-sm font-black text-slate-900 truncate">{name}</h4>
              <div className="flex items-center gap-1">
                 <Star className="w-3 h-3 fill-teal-500 text-teal-500" />
                 <span className="text-[10px] font-bold text-slate-400">4.9/5</span>
              </div>
            </div>
          </div>
          <a 
            href={product.link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-teal-600 text-white px-6 py-3 rounded-xl font-black text-xs uppercase tracking-widest hover:bg-teal-700 transition-all shadow-lg shadow-teal-600/20 active:scale-95 whitespace-nowrap"
          >
            {t('product.buyOnAmazon')} <ShoppingBag className="w-4 h-4" />
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-4">
          <Link to="/products" className="inline-flex items-center gap-2 text-[10px] text-slate-400 hover:text-teal-600 font-black transition-colors uppercase tracking-[0.2em]">
            <ArrowLeft className="w-4 h-4" /> {t('nav.catalog')}
          </Link>
          <Breadcrumbs items={breadcrumbItems} className="mb-0" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          <div className="space-y-8 lg:sticky lg:top-24 h-fit">
            <div className="bg-[#fbfcfc] rounded-[3rem] p-6 md:p-10 border border-slate-100 flex items-center justify-center group aspect-square max-h-[400px] md:max-h-[550px] mx-auto w-full overflow-hidden shadow-sm relative">
              <img 
                src={product.image} 
                alt={altText} 
                loading="eager"
                className="max-w-full max-h-full w-auto h-auto drop-shadow-xl transform transition-transform duration-700 group-hover:scale-105 object-contain" 
              />
              <div className="absolute bottom-8 right-8 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-2xl border border-slate-100 text-[10px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-teal-500" /> Verified Listing
              </div>
            </div>
          </div>

          <div className="flex flex-col">
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-teal-600 text-white text-[10px] font-black px-4 py-2 rounded-full uppercase tracking-[0.2em] shadow-lg shadow-teal-600/20">
                  {product.brand} {language === 'de' ? 'Spitzenklasse' : 'Top Tier'}
                </div>
                <div className="bg-slate-100 text-slate-500 text-[10px] font-black px-4 py-2 rounded-full uppercase tracking-[0.2em]">
                  {language === 'de' ? 'Lagernd' : 'In Stock'}
                </div>
              </div>
              
              <h1 className="text-3xl md:text-5xl font-black text-slate-900 leading-[1.1] mb-6 tracking-tight">
                {name}
              </h1>
              
              <div className="flex items-center gap-6 mb-8">
                <div className="flex items-center gap-1.5">
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-teal-500 text-teal-500" />
                    ))}
                  </div>
                  <span className="text-sm font-black text-slate-900 ml-1">4.9/5</span>
                </div>
                <div className="w-px h-6 bg-slate-200"></div>
                <span className="text-sm font-bold text-slate-400">1,240+ {language === 'de' ? 'Bewertungen' : 'Reviews'}</span>
              </div>
            </div>

            <div className="bg-slate-950 rounded-[2.5rem] p-8 md:p-10 border border-slate-800 mb-10 text-white shadow-2xl shadow-slate-900/40 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-teal-500/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <Zap className="w-5 h-5 text-teal-400" />
                  <h3 className="font-black text-teal-400 text-lg uppercase tracking-widest">{t('product.partnerTitle')}</h3>
                </div>
                <p className="text-sm text-slate-400 leading-relaxed mb-10">
                  {t('product.partnerDesc')}
                </p>
                <a 
                  href={product.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-4 bg-teal-500 hover:bg-teal-400 text-white font-black py-6 px-10 rounded-[1.5rem] transition-all shadow-xl shadow-teal-500/30 w-full text-xl uppercase tracking-widest active:scale-[0.98] group-hover:scale-[1.02] duration-300"
                >
                  {t('product.buyOnAmazon')} <ExternalLink className="w-6 h-6" />
                </a>
              </div>
            </div>

            <div className="bg-slate-50 rounded-[2.5rem] p-8 border border-slate-200 mb-10">
              <h3 className="text-xl font-black text-slate-900 mb-8 flex items-center gap-3 italic">
                <Trophy className="w-6 h-6 text-teal-600" /> {t('product.verdict')}
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-emerald-100 p-2 rounded-xl flex-shrink-0">
                    <ThumbsUp className="w-4 h-4 text-emerald-600" />
                  </div>
                  <div>
                    <h4 className="font-black text-slate-900 text-xs uppercase tracking-wider mb-1">{t('product.pros')}</h4>
                    <ul className="text-slate-500 text-xs space-y-1 font-medium">
                      <li>• {language === 'de' ? 'Überragende Wasseraufnahme' : 'Superior water absorption'}</li>
                      <li>• {language === 'de' ? 'Extrem lackschonend' : 'Ultra-safe for clear coats'}</li>
                      <li>• {language === 'de' ? 'Hohe Langlebigkeit' : 'High wash-cycle durability'}</li>
                    </ul>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-slate-200 p-2 rounded-xl flex-shrink-0">
                    <Target className="w-4 h-4 text-slate-600" />
                  </div>
                  <div>
                    <h4 className="font-black text-slate-900 text-xs uppercase tracking-wider mb-1">{t('product.bestFor')}</h4>
                    <p className="text-slate-500 text-xs font-medium">
                      {language === 'de' 
                        ? 'Ideal für Enthusiasten, die eine streifenfreie Trocknung bei der Autoaufbereitung suchen.' 
                        : 'Perfect for enthusiasts seeking streak-free drying in their detailing routine.'}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <ShareButtons title={name} url={currentUrl} className="mt-4" />
          </div>
        </div>

        <section className="border-t border-slate-100 pt-16 mb-20 grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div className="lg:col-span-2 prose prose-slate prose-lg max-w-none">
             <h2 className="text-4xl font-black text-slate-900 mb-10 italic">
               {language === 'de' ? 'Warum wir dieses Produkt für die Lackpflege kuratiert haben' : 'Why We Curated This Gear'}
             </h2>
             <div className="text-slate-600 leading-[1.8] space-y-8 text-lg font-medium">
                <p>
                  {language === 'de' 
                    ? `In der professionellen Autoaufbereitung in Deutschland ist das ${name} ein unverzichtbarer Standard. Während billige Tücher oft feine Kratzer verursachen, schützt dieses Produkt Ihren Lack effektiv.`
                    : `In the world of high-end detailing, the ${name} is a known heavy-hitter. While many budget alternatives simply push water around, this gear utilizes a specialized fiber structure.`}
                </p>
                
                <div className="bg-teal-50 border-l-8 border-teal-500 p-10 rounded-r-[2.5rem] my-12 relative overflow-hidden">
                   <Sparkles className="absolute top-4 right-4 w-12 h-12 text-teal-200/50" />
                   <h4 className="text-teal-900 font-black text-xl mb-4 italic uppercase tracking-tight">Detailing Tipp:</h4>
                   <p className="text-teal-800 font-bold m-0 italic">
                     {language === 'de'
                       ? "Die Lackpflege beginnt beim Trocknen. Lassen Sie das Tuch sanft über die Oberfläche gleiten, um Wasserflecken und Swirls zu vermeiden."
                       : "Lay the drying towel flat on the wet panel and pull it slowly towards you. Let the weight of the towel do the work."}
                   </p>
                </div>

                <div className="bg-slate-50 p-8 rounded-[2rem] border border-slate-200 italic text-slate-500 text-base">
                  "{description}"
                </div>
             </div>
          </div>

          <div className="lg:col-span-1">
             <div className="bg-white border border-slate-200 rounded-[2.5rem] p-10 shadow-sm sticky top-24">
                <h3 className="text-2xl font-black text-slate-900 mb-8 border-b border-slate-100 pb-4">
                  {t('product.techTitle')}
                </h3>
                <div className="space-y-8">
                  <div className="flex gap-4">
                    <div className="w-10 h-10 bg-teal-50 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Zap className="w-5 h-5 text-teal-600" />
                    </div>
                    <div>
                      <h5 className="font-black text-slate-900 text-sm uppercase tracking-wider mb-1">GSM Dichte</h5>
                      <p className="text-slate-500 text-xs font-bold leading-relaxed">
                        {language === 'de' ? 'Maximale Wasseraufnahme für die Lackpflege.' : 'Premium pile density for maximum water lift.'}
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-10 h-10 bg-teal-50 rounded-xl flex items-center justify-center flex-shrink-0">
                      <ShieldCheck className="w-5 h-5 text-teal-600" />
                    </div>
                    <div>
                      <h5 className="font-black text-slate-900 text-sm uppercase tracking-wider mb-1">Edgeless Design</h5>
                      <p className="text-slate-500 text-xs font-bold leading-relaxed">
                        {language === 'de' ? 'Randlose Fasern verhindern Mikrokratzer am Fahrzeug.' : 'Zero-hard edges to prevent surface marring.'}
                      </p>
                    </div>
                  </div>
                </div>
             </div>
          </div>
        </section>

        {related.length > 0 && (
          <section className="bg-slate-50 -mx-4 sm:-mx-8 px-4 sm:px-8 py-24 rounded-[4rem] border-y border-slate-100">
            <div className="max-w-7xl mx-auto">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-16">
                <div className="flex items-center gap-4">
                  <div className="bg-teal-600 p-4 rounded-2xl text-white shadow-xl shadow-teal-600/30">
                    <ShoppingBag className="w-6 h-6" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-black text-slate-900 italic">
                      {t('product.kitTitle')}
                    </h2>
                    <p className="text-slate-500 font-bold uppercase tracking-widest text-[10px] mt-1">
                      {t('product.kitDesc')}
                    </p>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {related.map(p => (
                  <ProductCard key={p.id} product={p} />
                ))}
              </div>
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;