
import React, { useState, useEffect } from 'react';
import { products } from '../data';
import ProductCard from '../components/ProductCard';
import AdPlacement from '../components/AdPlacement';
import { Filter, Search as SearchIcon, ChevronLeft, ChevronRight } from 'lucide-react';

const PRODUCTS_PER_PAGE = 12;

const Products: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeBrand, setActiveBrand] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);

  const brands = ['All', ...new Set(products.map(p => p.brand))];

  // Filter products based on search and brand
  const filteredProducts = products.filter(p => {
    const matchesSearch = p.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesBrand = activeBrand === 'All' || p.brand === activeBrand;
    return matchesSearch && matchesBrand;
  });

  // Calculate pagination
  const totalPages = Math.ceil(filteredProducts.length / PRODUCTS_PER_PAGE);
  const startIndex = (currentPage - 1) * PRODUCTS_PER_PAGE;
  const paginatedProducts = filteredProducts.slice(startIndex, startIndex + PRODUCTS_PER_PAGE);

  // Reset to first page when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, activeBrand]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Car Care Catalog</h1>
          <p className="text-gray-600 max-w-2xl leading-relaxed">
            Browse our complete collection of microfibre towels, drying cloths, and interior wipes. Discover professional tools from Germany's most trusted manufacturers.
          </p>
        </header>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <aside className="lg:w-64 space-y-8 flex-shrink-0">
            <div className="bg-white p-6 rounded-[2rem] shadow-sm border border-slate-100">
              <h3 className="font-black text-slate-900 mb-6 flex items-center gap-2 text-xs uppercase tracking-widest">
                <SearchIcon className="w-4 h-4 text-teal-600" /> Search
              </h3>
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="e.g. Sonax cloth..." 
                  className="w-full px-5 py-3.5 bg-slate-50 border border-slate-200 rounded-2xl text-sm focus:ring-2 focus:ring-teal-500 outline-none transition-all placeholder:text-slate-400"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>

            <div className="bg-white p-6 rounded-[2rem] shadow-sm border border-slate-100">
              <h3 className="font-black text-slate-900 mb-6 flex items-center gap-2 text-xs uppercase tracking-widest">
                <Filter className="w-4 h-4 text-teal-600" /> Brands
              </h3>
              <div className="space-y-2">
                {brands.map(brand => (
                  <button
                    key={brand}
                    onClick={() => setActiveBrand(brand)}
                    className={`w-full text-left px-4 py-3 rounded-xl text-sm transition-all font-bold ${
                      activeBrand === brand 
                        ? 'bg-teal-600 text-white shadow-lg shadow-teal-600/20' 
                        : 'text-slate-500 hover:bg-teal-50 hover:text-teal-600'
                    }`}
                  >
                    {brand}
                  </button>
                ))}
              </div>
            </div>

            <div className="hidden lg:block">
              <AdPlacement type="sidebar" id="catalog-sidebar-ad" />
            </div>
          </aside>

          {/* Product Grid */}
          <div className="flex-grow flex flex-col">
            <div className="flex justify-between items-center mb-8 bg-white p-4 px-6 rounded-2xl border border-slate-100 shadow-sm">
              <p className="text-xs font-black text-slate-400 uppercase tracking-widest">
                Showing <span className="text-slate-900">{Math.min(startIndex + 1, filteredProducts.length)} - {Math.min(startIndex + PRODUCTS_PER_PAGE, filteredProducts.length)}</span> of <span className="text-slate-900">{filteredProducts.length}</span> results
              </p>
            </div>

            {paginatedProducts.length > 0 ? (
              <>
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8 mb-8">
                  {/* First Row of Products */}
                  {paginatedProducts.slice(0, 3).map(product => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>

                {/* Mid-Catalog Ad */}
                <AdPlacement type="leaderboard" id="catalog-mid-leaderboard" className="mb-12" />

                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8 mb-12">
                  {/* Rest of the Products */}
                  {paginatedProducts.slice(3).map(product => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>

                {/* Pagination Controls */}
                {totalPages > 1 && (
                  <div className="mt-auto flex justify-center items-center gap-2 pt-8 border-t border-slate-200">
                    <button
                      onClick={() => handlePageChange(currentPage - 1)}
                      disabled={currentPage === 1}
                      className="p-3 rounded-xl border border-slate-200 bg-white text-slate-600 hover:bg-teal-50 hover:text-teal-600 hover:border-teal-200 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    
                    <div className="flex items-center gap-2">
                      {[...Array(totalPages)].map((_, i) => {
                        const pageNumber = i + 1;
                        return (
                          <button
                            key={pageNumber}
                            onClick={() => handlePageChange(pageNumber)}
                            className={`w-12 h-12 rounded-xl text-sm font-black transition-all ${
                              currentPage === pageNumber
                                ? 'bg-teal-600 text-white shadow-lg shadow-teal-600/30 scale-110'
                                : 'bg-white border border-slate-200 text-slate-500 hover:bg-teal-50 hover:text-teal-600 hover:border-teal-200'
                            }`}
                          >
                            {pageNumber}
                          </button>
                        );
                      })}
                    </div>

                    <button
                      onClick={() => handlePageChange(currentPage + 1)}
                      disabled={currentPage === totalPages}
                      className="p-3 rounded-xl border border-slate-200 bg-white text-slate-600 hover:bg-teal-50 hover:text-teal-600 hover:border-teal-200 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>
                )}
              </>
            ) : (
              <div className="bg-white rounded-[3rem] p-20 text-center border-2 border-dashed border-slate-200">
                <div className="bg-slate-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <SearchIcon className="w-8 h-8 text-slate-300" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">No matches found</h3>
                <p className="text-slate-500 mb-8">Try adjusting your filters or search terms.</p>
                <button 
                  onClick={() => { setSearchTerm(''); setActiveBrand('All'); }}
                  className="bg-slate-900 text-white px-8 py-3.5 rounded-2xl font-bold text-sm hover:bg-teal-600 transition-all shadow-xl shadow-slate-900/10"
                >
                  Clear all filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
