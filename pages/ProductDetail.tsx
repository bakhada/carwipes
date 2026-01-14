
import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '../data';
import { ExternalLink, Star, ArrowLeft, CheckCircle, Info } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import ShareButtons from '../components/ShareButtons';

const ProductDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const product = products.find(p => p.slug === slug);
  const currentUrl = window.location.href;

  useEffect(() => {
    if (product) {
      document.title = `${product.name} - Review & Price | CarWipes.de`;
      window.scrollTo(0, 0);
    }
  }, [product]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Product not found</h2>
          <Link to="/products" className="text-teal-600 font-bold underline">Back to Catalog</Link>
        </div>
      </div>
    );
  }

  const related = products.filter(p => p.brand === product.brand && p.id !== product.id).slice(0, 4);

  return (
    <div className="bg-white min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link to="/products" className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-teal-600 font-bold mb-8 transition-colors uppercase tracking-widest">
          <ArrowLeft className="w-4 h-4" /> Back to Catalog
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          {/* Image Gallery */}
          <div className="bg-[#fbfcfc] rounded-[3rem] p-12 border border-slate-50 flex items-center justify-center sticky top-24 h-fit group">
            <img 
              src={product.image} 
              alt={product.name} 
              className="max-w-full h-auto drop-shadow-2xl transform transition-transform duration-700 group-hover:scale-105" 
            />
          </div>

          {/* Content */}
          <div className="flex flex-col">
            <div className="mb-8">
              <div className="inline-flex items-center gap-2 bg-teal-50 text-teal-600 text-[10px] font-black px-4 py-2 rounded-full uppercase tracking-[0.2em] mb-6 border border-teal-100">
                {product.brand} Professional
              </div>
              <h1 className="text-4xl md:text-5xl font-black text-slate-900 leading-[1.1] mb-6">
                {product.name}
              </h1>
              <div className="flex items-center gap-3 mb-8">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-teal-500 text-teal-500" />
                  ))}
                </div>
                <span className="text-sm font-bold text-slate-400">4.9/5 based on certified Amazon reviews</span>
              </div>
            </div>

            <div className="bg-slate-900 rounded-[2.5rem] p-8 md:p-10 border border-slate-800 mb-10 text-white shadow-2xl shadow-slate-900/20">
              <h3 className="font-bold text-teal-400 flex items-center gap-2 mb-3 text-lg">
                <Info className="w-5 h-5" /> Official Amazon Partner
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed mb-8">
                This is a curated recommendation. Purchases are safely processed on Amazon.de. Prime shipping available.
              </p>
              <a 
                href={product.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 bg-teal-500 hover:bg-teal-400 text-white font-black py-5 px-8 rounded-2xl transition-all shadow-xl shadow-teal-500/20 w-full text-lg uppercase tracking-widest active:scale-95"
              >
                Buy on Amazon.de <ExternalLink className="w-5 h-5" />
              </a>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
              <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-2xl border border-slate-100">
                <div className="bg-teal-100 p-2 rounded-xl flex-shrink-0">
                  <CheckCircle className="w-4 h-4 text-teal-600" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-xs uppercase tracking-wider mb-1">Superior Tech</h4>
                  <p className="text-slate-500 text-[11px] leading-relaxed">Premium density microfibres for deep cleaning.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-2xl border border-slate-100">
                <div className="bg-teal-100 p-2 rounded-xl flex-shrink-0">
                  <CheckCircle className="w-4 h-4 text-teal-600" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-xs uppercase tracking-wider mb-1">Safe Finish</h4>
                  <p className="text-slate-500 text-[11px] leading-relaxed">Guaranteed scratch-free on all clear coats.</p>
                </div>
              </div>
            </div>

            <ShareButtons title={product.name} url={currentUrl} className="mt-4" />
          </div>
        </div>

        {/* SEO Detail Text */}
        <section className="border-t border-slate-100 pt-16 mb-20">
          <div className="max-w-4xl">
            <h2 className="text-3xl font-black text-slate-900 mb-8">Expert Product Insight</h2>
            <div className="prose prose-slate prose-lg max-w-none text-slate-600 leading-relaxed space-y-6">
              <p>
                When it comes to maintaining a pristine car interior and exterior, the <strong>{product.name}</strong> stands out as a top-tier choice. Brands like <strong>{product.brand}</strong> have long been synonymous with high-end automotive care.
              </p>
              <p>
                This specific product is designed to solve common detailing problems such as streaking, lint residue, and surface scratching. Whether you are performing a full paint correction or just a quick interior wipe-down, the high-absorbency fibers of this tool make the process effortless.
              </p>
              <p className="italic bg-teal-50 p-6 rounded-2xl border border-teal-100 text-teal-800">
                "{product.description}"
              </p>
              <h3 className="text-xl font-bold text-slate-900 mt-10">Why We Recommend It:</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 list-none p-0">
                <li className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm border border-slate-100"><span className="w-2 h-2 bg-teal-500 rounded-full"></span> Durable & Machine Washable</li>
                <li className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm border border-slate-100"><span className="w-2 h-2 bg-teal-500 rounded-full"></span> Lint-Free Technology</li>
                <li className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm border border-slate-100"><span className="w-2 h-2 bg-teal-500 rounded-full"></span> Multi-Surface Compatibility</li>
                <li className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm border border-slate-100"><span className="w-2 h-2 bg-teal-500 rounded-full"></span> Trusted Detailing Brand</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Related Products */}
        {related.length > 0 && (
          <section className="bg-[#fcfdfd] -mx-4 sm:-mx-8 px-4 sm:px-8 py-20 rounded-[4rem]">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl font-black text-slate-900 mb-10">More from <span className="text-teal-600">{product.brand}</span></h2>
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
