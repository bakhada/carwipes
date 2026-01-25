import React from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, Star, ChevronRight } from 'lucide-react';
import { Product } from '../types';
import { useLanguage } from '../context/LanguageContext';

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  const { language, t } = useLanguage();
  const name = language === 'de' ? product.name_de : product.name;
  const altText = `${t('alt.productPrefix')} ${name}`;

  return (
    <div className="group bg-white rounded-3xl shadow-sm hover:shadow-xl transition-all duration-500 border border-slate-100 flex flex-col overflow-hidden relative">
      <div className="absolute top-4 left-4 z-10">
        <div className="bg-slate-950 text-white text-[10px] font-black px-3 py-1.5 rounded-lg uppercase tracking-widest opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300">
          {product.brand}
        </div>
      </div>

      <Link to={`/product/${product.slug}`} className="relative block aspect-square overflow-hidden bg-[#fbfcfc] border-b border-slate-50">
        <img 
          src={product.image} 
          alt={altText} 
          loading="lazy"
          className="w-full h-full object-contain p-8 group-hover:scale-105 transition-transform duration-700" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-teal-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
      </Link>
      
      <div className="p-8 flex flex-col flex-grow bg-white">
        <div className="flex items-center gap-2 mb-4">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-3.5 h-3.5 fill-teal-500 text-teal-500" />
            ))}
          </div>
          <span className="text-[9px] text-teal-600 font-black uppercase tracking-widest">{t('product.bestseller')}</span>
        </div>
        
        <Link to={`/product/${product.slug}`} className="block mb-6">
          <h3 className="text-lg font-black text-slate-900 line-clamp-2 hover:text-teal-600 transition-colors leading-tight italic tracking-tight">
            {name}
          </h3>
        </Link>
        
        <div className="mt-auto flex flex-col gap-4">
          <a 
            href={product.link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-slate-950 text-white px-6 py-3.5 rounded-xl font-black text-xs uppercase tracking-widest hover:bg-teal-600 transition-all shadow-md active:scale-95"
          >
            {t('product.checkPrice')}
            <ExternalLink className="w-4 h-4" />
          </a>
          <Link 
            to={`/product/${product.slug}`}
            className="flex items-center justify-center gap-1.5 text-slate-400 hover:text-slate-900 text-[10px] font-black uppercase tracking-widest transition-all group/btn"
          >
            {t('product.details')} <ChevronRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;