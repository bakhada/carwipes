
import React, { useState, useEffect, useMemo } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductCard from './components/ProductCard';
import BuyingGuide from './components/BuyingGuide';
import Blog from './components/Blog';
import About from './components/About';
import Contact from './components/Contact';
import { PrivacyPolicy, TermsOfService, Impressum } from './components/Legal';
import Footer from './components/Footer';
import { PRODUCTS } from './constants';
import { AppSection } from './types';

const ITEMS_PER_PAGE = 9;

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<AppSection>(AppSection.Home);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedProductId, setSelectedProductId] = useState<string | null>(null);

  useEffect(() => {
    // Check for deep links on mount (e.g., ?product=id)
    const params = new URLSearchParams(window.location.search);
    const productId = params.get('product');
    if (productId && PRODUCTS.find(p => p.id === productId)) {
      setSelectedProductId(productId);
      setActiveSection(AppSection.Products);
    }
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    // Reset search and page when switching sections
    if (activeSection !== AppSection.Products) {
      setSearchTerm('');
      setCurrentPage(1);
      // Clear URL param if we navigate away from products
      if (selectedProductId) {
        setSelectedProductId(null);
        window.history.replaceState({}, '', window.location.pathname);
      }
    }
  }, [activeSection]);

  // Reset to first page when search changes
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm]);

  // Scroll to top on page change
  useEffect(() => {
    if (activeSection === AppSection.Products) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [currentPage]);

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

  const handleClearSpotlight = () => {
    setSelectedProductId(null);
    window.history.replaceState({}, '', window.location.pathname);
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
              <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8 text-balance">
                <div>
                  <span className="text-brand-primary text-[10px] font-black uppercase tracking-[0.2em] mb-3 block">Top Tier Gear</span>
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
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                {PRODUCTS.slice(0, 6).map(product => (
                  <ProductCard key={product.id} product={product} />
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

            <section className="bg-slate-50 py-32">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
                  <div className="p-10 bg-white rounded-[2.5rem] shadow-sm border border-slate-100 group hover:border-brand-primary transition-colors">
                    <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform">🔬</div>
                    <h3 className="text-xl font-bold font-outfit text-slate-900 mb-3">Chem-Safe Formulas</h3>
                    <p className="text-slate-500 text-sm leading-relaxed font-medium">Validated against modern synthetic leathers and anti-glare screen coatings.</p>
                  </div>
                  <div className="p-10 bg-white rounded-[2.5rem] shadow-sm border border-slate-100 group hover:border-brand-primary transition-colors">
                    <div className="w-12 h-12 bg-cyan-50 rounded-xl flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform">🦾</div>
                    <h3 className="text-xl font-bold font-outfit text-slate-900 mb-3">Durability Metrics</h3>
                    <p className="text-slate-500 text-sm leading-relaxed font-medium">Every fibre count and absorbency rate is verified in real-world detailing sessions.</p>
                  </div>
                  <div className="p-10 bg-white rounded-[2.5rem] shadow-sm border border-slate-100 group hover:border-brand-primary transition-colors">
                    <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform">📊</div>
                    <h3 className="text-xl font-bold font-outfit text-slate-900 mb-3">Expert Curated</h3>
                    <p className="text-slate-500 text-sm leading-relaxed font-medium">Human-verified inventory ensuring you always access the most reliable hardware.</p>
                  </div>
                </div>
              </div>
            </section>
          </>
        );
      case AppSection.Products:
        if (selectedProductId) {
          const product = PRODUCTS.find(p => p.id === selectedProductId);
          if (product) {
            return (
              <div className="max-w-5xl mx-auto px-4 py-20 min-h-screen">
                <button 
                  onClick={handleClearSpotlight}
                  className="flex items-center gap-3 text-brand-primary font-black uppercase tracking-widest text-xs mb-12 group"
                >
                  <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" />
                  </svg>
                  Browse Collection
                </button>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center bg-white p-12 rounded-[3rem] border border-slate-100 shadow-2xl">
                  <div className="bg-slate-50 rounded-[2rem] p-12 flex items-center justify-center aspect-square">
                    <img src={product.image} alt={product.name} className="max-w-full max-h-full object-contain mix-blend-multiply drop-shadow-2xl" />
                  </div>
                  <div>
                    <span className="text-brand-primary text-[10px] font-black uppercase tracking-[0.2em] mb-4 block">Detailing Spotlight</span>
                    <h1 className="text-4xl font-bold font-outfit text-slate-900 mb-6 leading-tight">{product.name}</h1>
                    <p className="text-slate-500 text-lg mb-10 leading-relaxed font-medium">{product.description}</p>
                    <a 
                      href={product.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-brand-primary text-white text-center py-5 rounded-2xl text-sm font-black uppercase tracking-widest hover:bg-brand-dark transition-all shadow-xl shadow-indigo-100 flex items-center justify-center gap-4 group"
                    >
                      Check Price on Amazon
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </a>
                    <div className="mt-12 flex items-center gap-4 p-6 bg-slate-50 rounded-2xl">
                      <div className="w-10 h-10 bg-brand-accent/10 rounded-xl flex items-center justify-center text-brand-accent">✓</div>
                      <div>
                        <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Authentic Gear</p>
                        <p className="text-sm font-bold text-slate-900">Verified Detailing Standard</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-20">
                    <h3 className="text-2xl font-bold font-outfit text-slate-900 mb-10 text-center">Recommended For You</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                      {PRODUCTS.filter(p => p.id !== selectedProductId).slice(0, 3).map(p => (
                        <ProductCard key={p.id} product={p} />
                      ))}
                    </div>
                </div>
              </div>
            );
          }
        }

        return (
          <div className="max-w-7xl mx-auto px-4 py-20 min-h-screen">
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
                {searchTerm && (
                  <button 
                    onClick={() => setSearchTerm('')}
                    className="absolute inset-y-0 right-5 flex items-center text-slate-400 hover:text-slate-600"
                  >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                )}
              </div>
            </div>
            
            {paginatedProducts.length > 0 ? (
              <>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-20">
                  {paginatedProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>

                {/* Pagination Controls */}
                {totalPages > 1 && (
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-12 py-10 border-t border-slate-100">
                    <button 
                      onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                      disabled={currentPage === 1}
                      className="flex items-center gap-2 px-6 py-3 rounded-xl font-black text-[10px] uppercase tracking-widest transition-all border border-slate-100 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-slate-50"
                    >
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" /></svg>
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
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" /></svg>
                    </button>
                  </div>
                )}
              </>
            ) : (
              <div className="py-32 text-center bg-slate-50 rounded-[3rem] border border-dashed border-slate-200">
                <div className="text-5xl mb-6">🔍</div>
                <h3 className="text-2xl font-bold font-outfit text-slate-900 mb-3">No hardware found</h3>
                <p className="text-slate-500 mb-8 max-w-sm mx-auto font-medium">We couldn't find any products matching "{searchTerm}". Try checking your spelling or using more general terms.</p>
                <button 
                  onClick={() => setSearchTerm('')}
                  className="bg-brand-primary text-white px-8 py-3 rounded-xl font-black text-[10px] uppercase tracking-widest hover:bg-brand-dark transition-all shadow-xl shadow-indigo-100"
                >
                  Clear Search
                </button>
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
        onNavigate={(section) => setActiveSection(section as AppSection)} 
        activeSection={activeSection} 
      />
      
      <main className="flex-1">
        {renderSection()}
      </main>

      <Footer onNavigate={(section) => setActiveSection(section as AppSection)} />
    </div>
  );
};

export default App;
