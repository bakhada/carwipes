
import React, { useState, useEffect, useMemo } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductCard from './components/ProductCard';
import BuyingGuide from './components/BuyingGuide';
import Blog from './components/Blog';
import About from './components/About';
import Contact from './components/Contact';
import Breadcrumbs from './components/Breadcrumbs';
import { PrivacyPolicy, TermsOfService, Impressum } from './components/Legal';
import Footer from './components/Footer';
import { PRODUCTS } from './constants';
import { AppSection, Product } from './types';

const ITEMS_PER_PAGE = 9;

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<AppSection>(AppSection.Home);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedProductId, setSelectedProductId] = useState<string | null>(null);

  // Initial Deep Link Check
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const productId = params.get('product');
    if (productId && PRODUCTS.find(p => p.id === productId)) {
      setSelectedProductId(productId);
      setActiveSection(AppSection.Products);
    }
  }, []);

  // Handle section and product navigation effects
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    // Reset search and page when switching sections
    if (activeSection !== AppSection.Products) {
      setSearchTerm('');
      setCurrentPage(1);
      
      // If we navigate away from products, clear the spotlight
      if (selectedProductId) {
        setSelectedProductId(null);
        window.history.replaceState({}, '', window.location.pathname);
      }
    }
  }, [activeSection, selectedProductId]);

  // Reset pagination on search
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm]);

  const filteredProducts = useMemo(() => {
    if (!searchTerm.trim()) return PRODUCTS;
    const lowerTerm = searchTerm.toLowerCase();
    return PRODUCTS.filter(product => 
      product.name.toLowerCase().includes(lowerTerm) || 
      product.description.toLowerCase().includes(lowerTerm) ||
      product.category.toLowerCase().includes(lowerTerm)
    );
  }, [searchTerm]);

  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);
  
  const paginatedProducts = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredProducts.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  }, [filteredProducts, currentPage]);

  const handleSelectProduct = (productId: string) => {
    setSelectedProductId(productId);
    setActiveSection(AppSection.Products);
    // Update URL for deep linking
    const newUrl = `${window.location.pathname}?product=${productId}`;
    window.history.pushState({ path: newUrl }, '', newUrl);
  };

  const handleClearSpotlight = () => {
    setSelectedProductId(null);
    if (window.location.search.includes('product=')) {
      window.history.replaceState({}, '', window.location.pathname);
    }
  };

  const shareSpecificProduct = (product: Product, platform: 'facebook' | 'twitter' | 'pinterest') => {
    const siteUrl = window.location.origin + window.location.pathname + `?product=${product.id}`;
    const encodedUrl = encodeURIComponent(siteUrl);
    const text = encodeURIComponent(`Professional Detailing Pick: ${product.name}. Check it out on CarWipes.de`);
    const media = encodeURIComponent(product.image);
    
    let shareUrl = '';
    switch (platform) {
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`;
        break;
      case 'twitter':
        shareUrl = `https://twitter.com/intent/tweet?text=${text}&url=${encodedUrl}`;
        break;
      case 'pinterest':
        shareUrl = `https://pinterest.com/pin/create/button/?url=${encodedUrl}&media=${media}&description=${text}`;
        break;
    }
    window.open(shareUrl, '_blank', 'width=600,height=400,location=0,menubar=0');
  };

  const renderSection = () => {
    switch (activeSection) {
      case AppSection.Home:
        return (
          <>
            <Hero 
              onStartShopping={() => setActiveSection(AppSection.Products)}
              onViewGuide={() => setActiveSection(AppSection.Guide)}
            />
            
            <section className="max-w-7xl mx-auto px-4 py-24">
              <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                <div>
                  <span className="text-brand-primary text-[10px] font-black uppercase tracking-[0.2em] mb-3 block text-glow">Top Tier Gear</span>
                  <h2 className="text-4xl sm:text-5xl font-bold font-outfit text-slate-900 mb-2 leading-tight">Elite Surface Hardware</h2>
                  <p className="text-slate-500 font-medium">Precision-tested accessories for high-performance maintenance.</p>
                </div>
                <button 
                  onClick={() => setActiveSection(AppSection.Products)}
                  className="bg-slate-50 text-brand-primary font-black uppercase tracking-widest text-[10px] px-8 py-4 rounded-xl hover:bg-brand-primary hover:text-white transition-all flex items-center gap-3 group border border-slate-100"
                >
                  View Full 2026 Fleet
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-24">
                {PRODUCTS.slice(0, 6).map(product => (
                  <ProductCard key={product.id} product={product} onClick={() => handleSelectProduct(product.id)} />
                ))}
              </div>

              <div className="mt-24 p-12 bg-indigo-600 rounded-[3rem] text-center relative overflow-hidden shadow-2xl shadow-indigo-200">
                <div className="relative z-10">
                  <h3 className="text-2xl sm:text-3xl font-bold font-outfit text-white mb-6 italic">New to Professional Detailing?</h3>
                  <p className="text-indigo-100 mb-10 max-w-xl mx-auto font-medium">Read our comprehensive masterclass on surface preservation, chemical safety, and the science of the showroom shine.</p>
                  <button 
                     onClick={() => setActiveSection(AppSection.Guide)}
                     className="bg-white text-indigo-600 px-10 py-5 rounded-2xl font-black uppercase tracking-widest text-xs hover:scale-105 transition-all shadow-xl"
                  >
                    Consult Expert Guide
                  </button>
                </div>
              </div>
            </section>
          </>
        );
      case AppSection.Products:
        if (selectedProductId) {
          const product = PRODUCTS.find(p => p.id === selectedProductId);
          if (product) {
            const related = PRODUCTS
              .filter(p => p.id !== product.id)
              .sort((a, b) => {
                if (a.category === product.category && b.category !== product.category) return -1;
                if (a.category !== product.category && b.category === product.category) return 1;
                return 0;
              })
              .slice(0, 3);

            return (
              <div className="max-w-7xl mx-auto px-4 py-20 min-h-screen">
                <Breadcrumbs 
                  items={[
                    { label: 'Home', section: AppSection.Home },
                    { label: 'Collection', section: AppSection.Products },
                    { label: product.name, isCurrent: true }
                  ]}
                  onNavigate={(s) => {
                    handleClearSpotlight();
                    setActiveSection(s);
                  }}
                />
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start bg-white p-6 sm:p-16 rounded-[4rem] border border-slate-100 shadow-2xl relative overflow-hidden mb-32">
                  <div className="bg-slate-50 rounded-[3rem] p-8 sm:p-16 flex items-center justify-center aspect-square md:sticky md:top-32">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="max-w-full max-h-full object-contain mix-blend-multiply drop-shadow-[0_20px_60px_rgba(0,0,0,0.15)] hover:scale-105 transition-transform duration-700" 
                    />
                  </div>
                  <div className="py-8">
                    <span className="bg-brand-primary/10 text-brand-primary px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-[0.2em] mb-8 inline-block">
                      {product.category}
                    </span>
                    <h1 className="text-4xl lg:text-5xl font-bold font-outfit text-slate-900 mb-8 leading-tight">{product.name}</h1>
                    <p className="text-slate-500 text-xl mb-12 leading-relaxed font-medium">{product.description}</p>
                    
                    <div className="mb-12 p-8 bg-slate-50 rounded-3xl border border-slate-100">
                      <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-4 text-center">Share This Hardware</span>
                      <div className="flex justify-center gap-6">
                        <button onClick={() => shareSpecificProduct(product, 'facebook')} className="w-12 h-12 rounded-2xl bg-white border border-slate-100 flex items-center justify-center text-slate-400 hover:text-brand-primary hover:border-brand-primary transition-all shadow-sm">
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-8.783h-2.954v-3.429h2.954v-2.527c0-2.925 1.787-4.516 4.396-4.516 1.25 0 2.324.093 2.637.135v3.058l-1.811.001c-1.42 0-1.694.675-1.694 1.664v2.185h3.385l-.441 3.429h-2.944v8.783h6.111c.731 0 1.325-.593 1.325-1.324v-21.351c0-.732-.594-1.325-1.325-1.325z"/></svg>
                        </button>
                        <button onClick={() => shareSpecificProduct(product, 'twitter')} className="w-12 h-12 rounded-2xl bg-white border border-slate-100 flex items-center justify-center text-slate-400 hover:text-slate-900 hover:border-slate-900 transition-all shadow-sm">
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                        </button>
                        <button onClick={() => shareSpecificProduct(product, 'pinterest')} className="w-12 h-12 rounded-2xl bg-white border border-slate-100 flex items-center justify-center text-slate-400 hover:text-[#E60023] hover:border-[#E60023] transition-all shadow-sm">
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.966 1.406-5.966s-.359-.72-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.654 2.569-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.056-4.86-4.991-4.86-3.398 0-5.393 2.548-5.393 5.184 0 1.027.395 2.127.889 2.726a.36.36 0 0 1 .083.343c-.091.378-.293 1.189-.332 1.355-.053.218-.173.265-.4.159-1.492-.694-2.424-2.875-2.424-4.625 0-3.769 2.737-7.229 7.892-7.229 4.144 0 7.365 2.953 7.365 6.899 0 4.117-2.595 7.431-6.199 7.431-1.211 0-2.348-.63-2.738-1.373 0 0-.599 2.282-.744 2.84-.282 1.084-1.064 2.445-1.585 3.298a12.042 12.042 0 0 0 3.658.56c6.62 0 11.988-5.367 11.988-11.988 0-6.62-5.368-11.987-11.988-11.987z"/></svg>
                        </button>
                      </div>
                    </div>

                    <a 
                      href={product.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-brand-primary text-white text-center py-6 rounded-3xl text-sm font-black uppercase tracking-widest hover:bg-brand-dark transition-all shadow-2xl shadow-indigo-100 flex items-center justify-center gap-4 group"
                    >
                      Check Price on Amazon
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </a>
                    
                    <div className="mt-12 flex items-center gap-6 p-8 bg-brand-dark rounded-3xl text-white">
                      <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-xl">🛡️</div>
                      <div>
                        <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">Authentic Lab Gear</p>
                        <p className="text-sm font-bold">Surface Safety Protocol Validated</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-16 animate-in fade-in slide-in-from-bottom-10 duration-1000">
                  <div className="flex items-center justify-between mb-12">
                    <h3 className="text-3xl font-bold font-outfit text-slate-900 italic">Complete Your Detailing Hub</h3>
                    <div className="hidden sm:block h-[1px] flex-1 bg-slate-100 mx-10"></div>
                    <button onClick={handleClearSpotlight} className="text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-brand-primary transition-colors">View All Gear</button>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                    {related.map(p => (
                      <ProductCard key={p.id} product={p} onClick={() => handleSelectProduct(p.id)} />
                    ))}
                  </div>
                </div>
              </div>
            );
          }
        }

        return (
          <div className="max-w-7xl mx-auto px-4 py-20 min-h-screen">
            <Breadcrumbs 
              items={[
                { label: 'Home', section: AppSection.Home },
                { label: 'Products', isCurrent: true }
              ]}
              onNavigate={(s) => setActiveSection(s)}
            />
            
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
              <div className="flex-1">
                <span className="text-brand-primary text-[10px] font-black uppercase tracking-[0.2em] mb-3 block">Complete Fleet</span>
                <h2 className="text-5xl font-bold font-outfit text-slate-900 mb-4 leading-tight">Surface Selection</h2>
                <p className="text-slate-500 font-medium">The comprehensive index of professional-grade detailing hardware.</p>
              </div>
              <div className="w-full md:w-96 relative group">
                <div className="absolute inset-y-0 left-5 flex items-center pointer-events-none">
                  <svg className="w-5 h-5 text-slate-400 group-focus-within:text-brand-primary transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <input 
                  type="text"
                  placeholder="Search gear, materials..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-14 pr-6 py-5 bg-white rounded-2xl border border-slate-200 text-sm font-bold placeholder:text-slate-400 focus:outline-none focus:ring-4 focus:ring-indigo-50 focus:border-brand-primary transition-all shadow-sm"
                />
              </div>
            </div>
            
            {paginatedProducts.length > 0 ? (
              <>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-20">
                  {paginatedProducts.map((product) => (
                    <ProductCard key={product.id} product={product} onClick={() => handleSelectProduct(product.id)} />
                  ))}
                </div>

                {totalPages > 1 && (
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-12 py-10 border-t border-slate-100">
                    <button 
                      onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                      disabled={currentPage === 1}
                      className="flex items-center gap-2 px-6 py-3 rounded-xl font-black text-[10px] uppercase tracking-widest transition-all border border-slate-100 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-slate-50"
                    >
                      Previous
                    </button>
                    <div className="flex items-center gap-2">
                      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                        <button
                          key={page}
                          onClick={() => setCurrentPage(page)}
                          className={`w-10 h-10 rounded-xl text-[10px] font-black transition-all ${
                            currentPage === page 
                            ? 'bg-brand-primary text-white shadow-xl shadow-indigo-100' 
                            : 'bg-white text-slate-400 border border-slate-100 hover:border-brand-primary hover:text-brand-primary'
                          }`}
                        >
                          {page}
                        </button>
                      ))}
                    </div>
                    <button 
                      onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                      disabled={currentPage === totalPages}
                      className="flex items-center gap-2 px-6 py-3 rounded-xl font-black text-[10px] uppercase tracking-widest transition-all border border-slate-100 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-slate-50"
                    >
                      Next
                    </button>
                  </div>
                )}
              </>
            ) : (
              <div className="py-32 text-center bg-slate-50 rounded-[3rem] border border-dashed border-slate-200">
                <h3 className="text-2xl font-bold font-outfit text-slate-900 mb-3 text-center">No hardware found</h3>
              </div>
            )}
          </div>
        );
      case AppSection.Blog:
        return <Blog />;
      case AppSection.Guide:
        return <BuyingGuide onBrowseCatalog={() => setActiveSection(AppSection.Products)} />;
      case AppSection.About:
        return <About />;
      case AppSection.Contact:
        return <Contact />;
      case AppSection.Privacy:
        return <PrivacyPolicy />;
      case AppSection.Terms:
        return <TermsOfService />;
      case AppSection.Impressum:
        return <Impressum />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen flex flex-col selection:bg-indigo-100 selection:text-indigo-900">
      <Header 
        onNavigate={(section) => {
          handleClearSpotlight();
          setActiveSection(section as AppSection);
        }} 
        activeSection={activeSection} 
      />
      <main className="flex-1">
        {renderSection()}
      </main>
      <Footer onNavigate={(section) => {
        handleClearSpotlight();
        setActiveSection(section as AppSection);
      }} />
    </div>
  );
};

export default App;
