
import React from 'react';

const BuyingGuide: React.FC = () => {
  return (
    <div className="bg-white">
      <article className="max-w-4xl mx-auto px-4 py-16 prose prose-slate">
        <header className="mb-12 text-center">
          <span className="text-brand-primary text-[10px] font-black uppercase tracking-[0.2em] mb-4 block">Editorial Masterclass</span>
          <h1 className="text-4xl md:text-5xl font-bold font-outfit text-slate-900 mb-6 italic">The Ultimate Guide to Surface Preservation</h1>
          <p className="text-xl text-slate-600 leading-relaxed font-light">
            Maintaining a showroom finish is a science. Our expert detailing team breaks down the essential hardware for every surface of your vehicle.
          </p>
        </header>

        <section className="mb-16">
          <h2 className="text-2xl font-bold font-outfit text-slate-800 mb-6">Material Science: Why Specific Hardware Matters</h2>
          <p className="text-slate-600 mb-6 leading-relaxed">
            Many car owners make the mistake of using household cleaners and recycled rags. Standard paper towels are abrasive at a microscopic level, causing "swirl marks" on clear coats. Specialized <strong>interior wipes</strong> and <strong>high-GSM microfibres</strong> are engineered to lift contaminants without scouring the surface.
          </p>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
          <div className="bg-indigo-50 p-10 rounded-[2.5rem] border border-indigo-100">
            <h3 className="text-xl font-bold font-outfit text-indigo-900 mb-4">Grams per Square Meter (GSM)</h3>
            <p className="text-indigo-800/80 text-sm leading-relaxed">
              For drying, higher is better. A 1200+ GSM cloth like the <strong>Nuke Guys Gamma Dryer</strong> traps more water and dirt deeper into the pile, keeping it away from your paint. For glass, a lower GSM waffle-weave is preferred to prevent linting.
            </p>
          </div>
          <div className="bg-slate-50 p-10 rounded-[2.5rem] border border-slate-200">
            <h3 className="text-xl font-bold font-outfit text-slate-900 mb-4">The pH-Neutral Standard</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Professional-grade wipes from brands like <strong>Armor All</strong> and <strong>Poliboy</strong> ensure that no harsh alcohols strip the natural oils from your leather or cloud your plastic trims over time.
            </p>
          </div>
        </div>

        <section className="mb-16">
          <h2 className="text-2xl font-bold font-outfit text-slate-800 mb-6">The Three Pillars of Professional Detailing</h2>
          <ul className="space-y-6 text-slate-600">
            <li className="flex gap-6 items-start">
              <span className="flex-shrink-0 w-10 h-10 rounded-2xl bg-brand-primary text-white flex items-center justify-center font-black shadow-lg shadow-indigo-100">01</span>
              <div>
                <h4 className="font-bold text-slate-900 mb-1">Coolant Thermal Management</h4>
                <p className="text-sm">Never clean a hot vehicle. Direct sunlight causes chemicals to evaporate instantly, leaving "chemical etch" marks that often require professional polishing to remove.</p>
              </div>
            </li>
            <li className="flex gap-6 items-start">
              <span className="flex-shrink-0 w-10 h-10 rounded-2xl bg-brand-primary text-white flex items-center justify-center font-black shadow-lg shadow-indigo-100">02</span>
              <div>
                <h4 className="font-bold text-slate-900 mb-1">The Sectional Protocol</h4>
                <p className="text-sm">Work in small, manageable sections (e.g., half a door panel). This ensures full coverage and prevents the cleaning agent from drying before you can buff it off.</p>
              </div>
            </li>
            <li className="flex gap-6 items-start">
              <span className="flex-shrink-0 w-10 h-10 rounded-2xl bg-brand-primary text-white flex items-center justify-center font-black shadow-lg shadow-indigo-100">03</span>
              <div>
                <h4 className="font-bold text-slate-900 mb-1">Microfibre Maintenance</h4>
                <p className="text-sm">Always wash your cloths with a dedicated microfibre detergent and <strong>never</strong> use fabric softeners, which clog the polyester/polyamide loops and ruin absorbency.</p>
              </div>
            </li>
          </ul>
        </section>

        <div className="bg-brand-dark rounded-[3rem] p-12 text-center relative overflow-hidden shadow-2xl">
          <div className="relative z-10">
            <h2 className="text-3xl font-bold font-outfit text-white mb-6 italic">Ready to Upgrade Your Kit?</h2>
            <p className="text-slate-400 mb-10 max-w-lg mx-auto font-medium">Explore our curated selection of verified detailing hardware, tested for the most demanding surfaces.</p>
            <button className="bg-brand-primary text-white font-black px-12 py-5 rounded-2xl uppercase tracking-widest text-xs hover:scale-105 transition-all shadow-xl shadow-indigo-500/20">
              Browse Professional Catalog
            </button>
          </div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 blur-[100px]"></div>
        </div>
      </article>
    </div>
  );
};

export default BuyingGuide;
