
import React from 'react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
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

  const shareProduct = (platform: 'facebook' | 'twitter' | 'pinterest') => {
    // Generate the deep link to the current website
    const siteUrl = window.location.origin + window.location.pathname + `?product=${product.id}`;
    const encodedUrl = encodeURIComponent(siteUrl);
    const text = encodeURIComponent(`Check out ${product.name} - Essential gear for your car! Found on CarWipes.de`);
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
        <p className="text-slate-500 text-sm mb-6 line-clamp-2 leading-relaxed h-10">
          {product.description}
        </p>

        {/* Share Section */}
        <div className="flex items-center gap-3 mb-8 pb-6 border-b border-slate-50">
          <span className="text-[9px] font-black text-slate-300 uppercase tracking-widest mr-2">Share Gear</span>
          
          <button 
            onClick={() => shareProduct('facebook')}
            aria-label="Share on Facebook"
            className="w-8 h-8 rounded-lg flex items-center justify-center text-slate-400 hover:bg-brand-primary hover:text-white transition-all"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-8.783h-2.954v-3.429h2.954v-2.527c0-2.925 1.787-4.516 4.396-4.516 1.25 0 2.324.093 2.637.135v3.058l-1.811.001c-1.42 0-1.694.675-1.694 1.664v2.185h3.385l-.441 3.429h-2.944v8.783h6.111c.731 0 1.325-.593 1.325-1.324v-21.351c0-.732-.594-1.325-1.325-1.325z"/>
            </svg>
          </button>

          <button 
            onClick={() => shareProduct('twitter')}
            aria-label="Share on Twitter"
            className="w-8 h-8 rounded-lg flex items-center justify-center text-slate-400 hover:bg-brand-dark hover:text-white transition-all"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
          </button>

          <button 
            onClick={() => shareProduct('pinterest')}
            aria-label="Share on Pinterest"
            className="w-8 h-8 rounded-lg flex items-center justify-center text-slate-400 hover:bg-[#E60023] hover:text-white transition-all"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.966 1.406-5.966s-.359-.72-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.654 2.569-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.056-4.86-4.991-4.86-3.398 0-5.393 2.548-5.393 5.184 0 1.027.395 2.127.889 2.726a.36.36 0 0 1 .083.343c-.091.378-.293 1.189-.332 1.355-.053.218-.173.265-.4.159-1.492-.694-2.424-2.875-2.424-4.625 0-3.769 2.737-7.229 7.892-7.229 4.144 0 7.365 2.953 7.365 6.899 0 4.117-2.595 7.431-6.199 7.431-1.211 0-2.348-.63-2.738-1.373 0 0-.599 2.282-.744 2.84-.282 1.084-1.064 2.445-1.585 3.298a12.042 12.042 0 0 0 3.658.56c6.62 0 11.988-5.367 11.988-11.988 0-6.62-5.368-11.987-11.988-11.987z"/>
            </svg>
          </button>
        </div>
        
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
