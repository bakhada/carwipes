
import React from 'react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  // FIX: Corrected product IDs to match constants.ts for proper badge rendering
  const isBestseller = ['sonax-panel-inner', 'armor-all-antibac-20', 'nuke-guys-gamma-dryer'].includes(product.id);
  const isValue = ['vileda-colours-14', 'spontex-16-pack', 'homexcel-100-pack'].includes(product.id);

  const getCategoryLabel = (cat: string) => {
    switch (cat) {
      case 'Microfibre': return 'Fibre Tech';
      case 'Wet Wipes': return 'Preservation';
      case 'Specialist': return 'Professional';
      case 'Multi-purpose': return 'Utility';
      default: return cat;
    }
  };

  return (
    <article className="group bg-white rounded-[2rem] overflow-hidden border border-slate-100 transition-all hover:shadow-[0_20px_50px_rgba(0,0,0,0.05)] hover:-translate-y-2">
      <div className="aspect-[4/3] relative overflow-hidden bg-white">
        <img 
          src={product.image} 
          alt={`Professional Detailing: ${product.name}`} 
          className="w-full h-full object-contain p-10 mix-blend-multiply group-hover:scale-110 transition-transform duration-700"
          loading="lazy"
        />
        
        <div className="absolute top-5 left-5 flex flex-col gap-2">
          {isBestseller && (
            <span className="px-3 py-1.5 bg-brand-accent text-white text-[9px] font-black uppercase tracking-widest rounded-lg shadow-lg">
              High Demand
            </span>
          )}
          {isValue && (
            <span className="px-3 py-1.5 bg-emerald-500 text-white text-[9px] font-black uppercase tracking-widest rounded-lg shadow-lg">
              Best Value
            </span>
          )}
          <span className="px-3 py-1.5 bg-brand-dark/5 backdrop-blur-md text-brand-dark text-[9px] font-black uppercase tracking-widest rounded-lg border border-brand-dark/10">
            {getCategoryLabel(product.category)}
          </span>
        </div>
      </div>
      
      <div className="p-8 pt-2">
        <h3 className="text-slate-900 font-bold font-outfit text-xl leading-snug mb-3 line-clamp-2 h-14 group-hover:text-brand-primary transition-colors">
          {product.name}
        </h3>
        <p className="text-slate-500 text-sm mb-8 line-clamp-2 leading-relaxed h-10">
          {product.description}
        </p>
        
        <div className="space-y-4">
          <a 
            href={product.link}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-brand-primary text-white text-center py-4 rounded-xl text-xs font-black uppercase tracking-[0.15em] hover:bg-brand-dark transition-all shadow-xl shadow-indigo-100 flex items-center justify-center gap-3 group/btn"
          >
            Check Price
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
          <div className="flex items-center justify-center gap-2 opacity-40 group-hover:opacity-100 transition-opacity">
            <svg viewBox="0 0 24 24" className="w-3 h-3 fill-indigo-600" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15l-5-5 1.41-1.41L11 14.17l7.59-7.59L20 8l-9 9z"/></svg>
            <span className="text-[9px] font-black text-slate-500 tracking-[0.1em] uppercase">Authentic Item</span>
          </div>
        </div>
      </div>
    </article>
  );
};

export default ProductCard;
