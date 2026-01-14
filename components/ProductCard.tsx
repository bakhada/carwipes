
import React from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, Star, ShieldCheck } from 'lucide-react';
import { Product } from '../types';

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  return (
    <div className="group bg-white rounded-[2rem] shadow-sm hover:shadow-2xl hover:shadow-teal-900/10 transition-all duration-500 border border-slate-100 flex flex-col overflow-hidden relative">
      <Link to={`/product/${product.slug}`} className="relative block aspect-[4/5] overflow-hidden bg-[#fbfcfc]">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-contain p-8 group-hover:scale-110 transition-transform duration-700" 
        />
        <div className="absolute top-4 left-4 flex flex-col gap-2">
          <div className="bg-teal-600 text-white text-[10px] font-black px-3 py-1.5 rounded-full uppercase tracking-widest shadow-lg shadow-teal-600/20">
            {product.brand}
          </div>
          <div className="bg-white/90 backdrop-blur-sm text-slate-800 text-[10px] font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-sm border border-slate-100">
            <ShieldCheck className="w-3 h-3 text-teal-500" /> Professional
          </div>
        </div>
      </Link>
      
      <div className="p-6 flex flex-col flex-grow bg-white">
        <div className="flex items-center gap-1 mb-3">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-3.5 h-3.5 fill-teal-500 text-teal-500" />
          ))}
          <span className="text-[10px] text-slate-400 font-black ml-1 uppercase tracking-tighter">Bestseller</span>
        </div>
        
        <Link to={`/product/${product.slug}`}>
          <h3 className="text-lg font-bold text-slate-800 line-clamp-2 hover:text-teal-600 transition-colors mb-4 leading-tight">
            {product.name}
          </h3>
        </Link>
        
        <div className="mt-auto flex items-center justify-between pt-4 border-t border-slate-50">
          <a 
            href={product.link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-slate-900 text-white px-5 py-2.5 rounded-xl font-bold text-xs hover:bg-teal-600 transition-all shadow-lg shadow-slate-900/10"
          >
            Check Price
            <ExternalLink className="w-3 h-3" />
          </a>
          <Link 
            to={`/product/${product.slug}`}
            className="text-slate-400 hover:text-teal-600 text-[10px] font-black uppercase tracking-widest transition-colors"
          >
            Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
