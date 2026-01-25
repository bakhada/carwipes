import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { products } from '../data';
import ProductCard from '../components/ProductCard';
import { Search as SearchIcon, ChevronLeft, ChevronRight, X, LayoutGrid, List, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const PRODUCTS_PER_PAGE = 12;

const Products: React.FC = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const initialSearch = queryParams.get('search') || '';

  const [searchTerm, setSearchTerm] = useState(initialSearch);
  const [activeBrand, setActiveBrand] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const { t, updateSeo, language } = useLanguage();

  useEffect(() => {
    updateSeo(t('seo.catalog.title'), t('seo.catalog.desc'));
  }, [language, t, updateSeo]);

  useEffect(() => {
    const s = queryParams.get('search') || '';
    if (s !== searchTerm) setSearchTerm(s);
  }, [location.search]);

  const brands = ['All', ...new Set(products.map(p => p.brand))].sort();

  const filteredProducts = products.filter(p => {
    const pName = language === 'de' ? p.name_de : p.name;
    const matchesSearch = pName.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesBrand = activeBrand === 'All' || p.brand === activeBrand;
    return matchesSearch && matchesBrand;
  });

  const totalPages = Math.ceil(filteredProducts.length / PRODUCTS_PER_PAGE);
  const startIndex = (currentPage - 1) * PRODUCTS_PER_PAGE;
  const paginatedProducts = filteredProducts.slice(startIndex, startIndex + PRODUCTS_PER_PAGE);

  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, activeBrand]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const clearFilters = () => {
    setSearchTerm('');
    setActiveBrand('All');
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      <div className="bg-white border-b border-slate-100 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 tracking-tighter italic">{t('catalog.title')}</h1>
            <p className="text-lg text-slate-500 font-medium leading-relaxed mb-10">{t('catalog.desc')}</p>
            
            <div className="relative group max-w-xl">
              <input 
                type="text" 
                placeholder={t('hero.searchPlaceholder')} 
                className="w-full bg-slate-100 border-2 border-transparent rounded-2xl px-12 py-5 outline-none focus:border-teal-500 focus:bg-white transition-all text-lg font-bold shadow-sm"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-teal-600 transition-colors" />
              {searchTerm && (
                <button onClick={() => setSearchTerm('')} className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-white rounded-xl text-slate-400 hover:text-slate-900 shadow-sm transition-all">
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col lg:flex-row gap-12">
        <aside className="lg:w-72 flex-shrink-0">
          <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm sticky top-24">
            <h3 className="text-[10px] font-black text-slate-900 uppercase tracking-widest mb-8 flex items-center justify-between">
              {t('catalog.brands')}
              {activeBrand !== 'All' && <span className="w-2 h-2 rounded-full bg-teal-500"></span>}
            </h3>
            
            <div className="flex flex-col gap-2">
              {brands.map(brand => (
                <button
                  key={brand}
                  onClick={() => setActiveBrand(brand)}
                  className={`text-left px-5 py-3.5 rounded-xl text-sm font-black transition-all flex items-center justify-between ${
                    activeBrand === brand 
                      ? 'bg-slate-950 text-white shadow-lg' 
                      : 'text-slate-400 hover:text-teal-600 hover:bg-teal-50/50'
                  }`}
                >
                  {brand}
                  {activeBrand === brand && <CheckCircle2 className="w-4 h-4 text-teal-400" />}
                </button>
              ))}
            </div>
          </div>
        </aside>

        <div className="flex-grow">
          <div className="flex items-center justify-between mb-10 bg-white px-8 py-4 rounded-2xl border border-slate-100 shadow-sm">
            <div className="flex items-center gap-3">
               <div className="bg-teal-500/10 text-teal-600 px-3 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest">
                 {filteredProducts.length} {t('catalog.results')}
               </div>
            </div>
            <div className="flex items-center gap-2">
               <button className="p-2.5 bg-slate-900 text-white rounded-xl"><LayoutGrid className="w-4 h-4" /></button>
               <button className="p-2.5 bg-slate-50 text-slate-400 rounded-xl hover:text-slate-900"><List className="w-4 h-4" /></button>
            </div>
          </div>

          {paginatedProducts.length > 0 ? (
            <div className="space-y-16">
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
                {paginatedProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>

              {totalPages > 1 && (
                <div className="flex justify-center items-center gap-3 pt-12">
                  <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="w-12 h-12 rounded-xl border border-slate-200 bg-white text-slate-400 hover:text-teal-600 hover:border-teal-200 disabled:opacity-30 flex items-center justify-center transition-all"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  
                  <div className="flex items-center gap-2">
                    {[...Array(totalPages)].map((_, i) => (
                      <button
                        key={i + 1}
                        onClick={() => handlePageChange(i + 1)}
                        className={`w-12 h-12 rounded-xl text-xs font-black transition-all ${
                          currentPage === i + 1
                            ? 'bg-slate-950 text-white shadow-lg scale-105'
                            : 'bg-white border border-slate-200 text-slate-400 hover:border-teal-200'
                        }`}
                      >
                        {i + 1}
                      </button>
                    ))}
                  </div>

                  <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="w-12 h-12 rounded-xl border border-slate-200 bg-white text-slate-400 hover:text-teal-600 hover:border-teal-200 disabled:opacity-30 flex items-center justify-center transition-all"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              )}
            </div>
          ) : (
            <div className="bg-white rounded-3xl p-16 text-center border-2 border-dashed border-slate-200">
              <div className="bg-slate-50 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 text-slate-300">
                <SearchIcon className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-black text-slate-900 mb-2 italic">{t('catalog.noMatches')}</h3>
              <p className="text-slate-500 mb-8 font-medium">{language === 'de' ? 'Versuchen Sie es mit anderen Filtern.' : 'Try adjusting your search terms or filters.'}</p>
              <button 
                onClick={clearFilters}
                className="bg-teal-600 text-white px-8 py-4 rounded-xl font-black text-xs uppercase tracking-widest hover:bg-teal-500 transition-all shadow-lg"
              >
                {t('catalog.clearFilters')}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Products;