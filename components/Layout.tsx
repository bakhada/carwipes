
import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, Search, Car, Heart, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col selection:bg-teal-100 selection:text-teal-900">
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="bg-teal-600 p-2 rounded-xl group-hover:scale-110 transition-transform shadow-lg shadow-teal-600/20">
                <Car className="text-white w-6 h-6" />
              </div>
              <span className="text-2xl font-black tracking-tight text-slate-900 italic">CarWipes<span className="text-teal-500 font-bold not-italic">.de</span></span>
            </Link>

            <nav className="hidden lg:flex items-center space-x-10">
              <Link to="/" className="text-slate-500 hover:text-teal-600 font-bold transition-colors">Home</Link>
              <Link to="/products" className="text-slate-500 hover:text-teal-600 font-bold transition-colors">Catalog</Link>
              <Link to="/blog" className="text-slate-500 hover:text-teal-600 font-bold transition-colors">Journal</Link>
              <Link to="/about" className="text-slate-500 hover:text-teal-600 font-bold transition-colors">About</Link>
            </nav>

            <div className="flex items-center gap-2 md:gap-4">
              <button className="hidden sm:flex p-2.5 text-slate-400 hover:text-teal-600 transition-all hover:bg-teal-50 rounded-xl" title="Search catalog">
                <Search className="w-5 h-5" />
              </button>
              <button className="hidden sm:flex p-2.5 text-slate-400 hover:text-rose-500 transition-all hover:bg-rose-50 rounded-xl" title="Your favorites">
                <Heart className="w-5 h-5" />
              </button>
              
              <Link to="/products" className="hidden md:flex items-center gap-2 bg-teal-600 text-white px-5 py-2.5 rounded-xl font-bold hover:bg-teal-700 transition-all shadow-lg shadow-teal-600/20">
                <span className="text-sm">Shop Now</span>
              </Link>

              <button className="lg:hidden p-2 text-slate-500">
                <Menu className="w-7 h-7" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-grow">
        {children}
      </main>

      <footer className="bg-slate-950 text-slate-300 pt-24 pb-12 overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-teal-500 via-cyan-500 to-emerald-500"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-20">
            <div className="md:col-span-4 space-y-8">
              <div className="flex items-center gap-2">
                <Car className="text-teal-400 w-8 h-8" />
                <span className="text-2xl font-black text-white italic">CarWipes<span className="text-teal-400 not-italic">.de</span></span>
              </div>
              <p className="text-lg leading-relaxed text-slate-400 font-medium">
                Elevating German automotive care with curated detailing tools that protect and preserve.
              </p>
              <div className="flex gap-4">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-slate-900 rounded-lg border border-slate-800 flex items-center justify-center hover:border-teal-500 transition-all hover:bg-teal-600/10 group">
                  <Facebook className="w-5 h-5 text-slate-500 group-hover:text-teal-400 transition-colors" />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-slate-900 rounded-lg border border-slate-800 flex items-center justify-center hover:border-teal-500 transition-all hover:bg-teal-600/10 group">
                  <Twitter className="w-5 h-5 text-slate-500 group-hover:text-teal-400 transition-colors" />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-slate-900 rounded-lg border border-slate-800 flex items-center justify-center hover:border-teal-500 transition-all hover:bg-teal-600/10 group">
                  <Instagram className="w-5 h-5 text-slate-500 group-hover:text-teal-400 transition-colors" />
                </a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-slate-900 rounded-lg border border-slate-800 flex items-center justify-center hover:border-teal-500 transition-all hover:bg-teal-600/10 group">
                  <Youtube className="w-5 h-5 text-slate-500 group-hover:text-teal-400 transition-colors" />
                </a>
              </div>
            </div>
            
            <div className="md:col-span-2 space-y-6">
              <h4 className="text-white font-black text-sm uppercase tracking-[0.2em]">Shop</h4>
              <ul className="space-y-4 text-sm font-bold">
                <li><Link to="/products" className="text-slate-500 hover:text-teal-400 transition-colors">Microfibre Towels</Link></li>
                <li><Link to="/products" className="text-slate-500 hover:text-teal-400 transition-colors">Interior Kits</Link></li>
                <li><Link to="/products" className="text-slate-500 hover:text-teal-400 transition-colors">Drying Cloths</Link></li>
                <li><Link to="/products" className="text-slate-500 hover:text-teal-400 transition-colors">Bestsellers</Link></li>
              </ul>
            </div>

            <div className="md:col-span-2 space-y-6">
              <h4 className="text-white font-black text-sm uppercase tracking-[0.2em]">Legal</h4>
              <ul className="space-y-4 text-sm font-bold">
                <li><Link to="/disclosure" className="text-slate-500 hover:text-teal-400 transition-colors">Affiliate Policy</Link></li>
                <li><Link to="/privacy" className="text-slate-500 hover:text-teal-400 transition-colors">Privacy</Link></li>
                <li><Link to="/terms" className="text-slate-500 hover:text-teal-400 transition-colors">Terms</Link></li>
                <li><Link to="/contact" className="text-slate-500 hover:text-teal-400 transition-colors">Support</Link></li>
              </ul>
            </div>

            <div className="md:col-span-4 space-y-8 bg-slate-900/50 p-8 rounded-3xl border border-slate-800">
              <h4 className="text-white font-black text-sm uppercase tracking-[0.2em]">Newsletter</h4>
              <p className="text-sm text-slate-400 font-medium leading-relaxed">Join 5,000+ car enthusiasts getting weekly detailing tips and Amazon deals.</p>
              <form className="flex flex-col gap-3" onSubmit={(e) => e.preventDefault()}>
                <input type="email" placeholder="Enter your email" className="bg-slate-950 border border-slate-800 rounded-xl px-5 py-4 text-sm w-full focus:ring-2 focus:ring-teal-500 outline-none transition-all placeholder:text-slate-700" />
                <button type="submit" className="bg-teal-600 hover:bg-teal-700 text-white px-5 py-4 rounded-xl font-black text-sm uppercase tracking-widest transition-all shadow-xl shadow-teal-950/40">Sign Up</button>
              </form>
            </div>
          </div>
          
          <div className="pt-12 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] font-black text-slate-700 uppercase tracking-[0.2em]">
            <p>&copy; 2026 CARWIPES.DE • AMAZON PARTNER</p>
            <div className="flex gap-8">
              <span className="hover:text-teal-500 transition-colors cursor-default">DESIGNED IN GERMANY</span>
              <span className="hover:text-teal-500 transition-colors cursor-default">PREMIUM DETAILING</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
