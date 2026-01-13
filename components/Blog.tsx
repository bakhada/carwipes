
import React, { useState } from 'react';

type Category = 'All' | 'Guides' | 'Top Lists' | 'Reviews';

interface Post {
  id: string;
  title: string;
  excerpt: string;
  category: Exclude<Category, 'All'>;
  readTime: string;
  date: string;
  image: string;
  content: React.ReactNode;
}

const Blog: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<Category>('All');
  const [activePost, setActivePost] = useState<Post | null>(null);

  const posts: Post[] = [
    {
      id: 'sonax-performance-review-2026',
      title: 'SONAX Performance Series: Is the German Detailing Giant Still King in 2026?',
      excerpt: 'We stress-tested the entire SONAX microfibre lineup. From wash mitts to glass cloths, see which ones deserve a spot in your trunk.',
      category: 'Reviews',
      readTime: '15 min read',
      date: 'April 08, 2026',
      image: 'https://m.media-amazon.com/images/I/61YuZQJV3IL._AC_SL1280_.jpg',
      content: (
        <div className="prose prose-slate max-w-none">
          <p className="text-xl text-slate-600 mb-10 leading-relaxed font-light">
            In the world of automotive detailing, few names carry as much weight as <strong>SONAX</strong>. For decades, they have defined the German standard for chemical engineering. But in 2026, with the rise of boutique microfibre brands, we had to ask: Is their hardware still the professional's primary choice?
          </p>

          <h2 className="text-3xl font-bold font-outfit text-slate-900 mb-8 italic">The Test Protocol</h2>
          <p className="mb-10 text-slate-600 leading-relaxed">
            We subjected the SONAX microfibre range to three specific tests: <strong>Absorbency Saturation</strong>, <strong>Lint-Migration Analysis</strong> (on black glass), and <strong>Paint-Safety Scratch Tests</strong> using a high-intensity detailing light.
          </p>

          {/* Review 1: Wash Mitt */}
          <div className="bg-slate-50 rounded-[3rem] p-10 mb-16 border border-slate-100 shadow-sm overflow-hidden relative">
            <div className="flex flex-col md:flex-row items-center gap-10 relative z-10">
              <div className="w-full md:w-1/3">
                <img src="https://m.media-amazon.com/images/I/71Ol9bDQufL._AC_SL1000_.jpg" className="rounded-3xl shadow-xl mix-blend-multiply" alt="SONAX Wash Mitt" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-4">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <span key={s} className="text-brand-accent text-lg">★</span>
                  ))}
                  <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-2">5.0 / 5.0 Rating</span>
                </div>
                <h3 className="text-2xl font-bold font-outfit text-slate-900 mb-4">The Workhorse: SONAX 428200 Wash Mitt</h3>
                <p className="text-sm text-slate-600 mb-8 leading-relaxed font-medium">
                  This mitt is a masterclass in ergonomics. Unlike cheap sponges that push dirt against the clear coat, the SONAX mitt's long microfibres "trap and lift" grit into the core. After 50 wash cycles, it retained 95% of its pile elasticity. 
                </p>
                <div className="grid grid-cols-2 gap-3 mb-8">
                  <div className="bg-white/80 p-3 rounded-xl border border-slate-200">
                    <span className="text-[8px] font-black text-slate-400 uppercase block mb-1">Durability</span>
                    <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                      <div className="h-full bg-brand-primary w-[98%]"></div>
                    </div>
                  </div>
                  <div className="bg-white/80 p-3 rounded-xl border border-slate-200">
                    <span className="text-[8px] font-black text-slate-400 uppercase block mb-1">Grit Release</span>
                    <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                      <div className="h-full bg-brand-primary w-[92%]"></div>
                    </div>
                  </div>
                </div>
                <a href="https://amzn.to/3YCCLQu" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 bg-brand-dark text-white px-8 py-4 rounded-xl font-black text-xs uppercase tracking-widest hover:bg-brand-primary transition-all">
                  Get the Wash Mitt
                </a>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold font-outfit text-slate-900 mb-8 italic">Surface Clarity: The Glass Hierarchy</h2>
          <p className="mb-10 text-slate-600 leading-relaxed">
            Modern cars feature massive windscreens and sensitive instrument clusters. Standard cloths often leave behind "micro-lint" that is visible at night under streetlights. 
          </p>

          {/* Review 2: Glass Cloth */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
            <div className="bg-white border border-slate-100 p-8 rounded-[2.5rem] shadow-sm flex flex-col items-center text-center group hover:border-indigo-200 transition-colors">
              <img src="https://m.media-amazon.com/images/I/91sTHmlu2oL._AC_SL1500_.jpg" className="w-40 h-40 object-contain mb-6 mix-blend-multiply group-hover:scale-105 transition-transform" alt="SONAX Glass Cloth" />
              <h4 className="text-xl font-bold font-outfit mb-3">SONAX Glass Cloth (Pack of 3)</h4>
              <p className="text-xs text-slate-500 mb-8 leading-relaxed font-medium italic">
                "Absolutely zero lint. Even on the toughest interior windshield film, these cloths cut through the haze without needing excessive pressure."
              </p>
              <a href="https://amzn.to/4qrWleA" className="bg-slate-100 text-slate-800 px-6 py-3 rounded-xl font-black text-[10px] uppercase tracking-widest hover:bg-brand-primary hover:text-white transition-all">
                Shop Glass Set
              </a>
            </div>

            <div className="bg-white border border-slate-100 p-8 rounded-[2.5rem] shadow-sm flex flex-col items-center text-center group hover:border-indigo-200 transition-colors">
              <img src="https://m.media-amazon.com/images/I/61R1IaNaytL._AC_SL1294_.jpg" className="w-40 h-40 object-contain mb-6 mix-blend-multiply group-hover:scale-105 transition-transform" alt="SONAX Dry Cloth Plus" />
              <h4 className="text-xl font-bold font-outfit mb-3">SONAX Dry Cloth Plus</h4>
              <p className="text-xs text-slate-500 mb-8 leading-relaxed font-medium italic">
                "The 'Large Format' isn't just marketing. One cloth successfully dried a mid-size SUV without needing a single wring-out. A efficiency beast."
              </p>
              <a href="https://amzn.to/4qVSUN4" className="bg-slate-100 text-slate-800 px-6 py-3 rounded-xl font-black text-[10px] uppercase tracking-widest hover:bg-brand-primary hover:text-white transition-all">
                Shop Dry Cloth
              </a>
            </div>
          </div>

          <h2 className="text-3xl font-bold font-outfit text-slate-900 mb-8 italic">The "Finisher": Soft Touch Series</h2>
          <p className="mb-10 text-slate-600 leading-relaxed">
            For the final wipe-down after applying a ceramic sealant or wax, you need zero drag. The <strong>Soft Touch 04510000</strong> is SONAX's answer to the boutique ultra-plush market.
          </p>

          <div className="bg-brand-dark rounded-[3rem] p-12 text-white mb-16 shadow-2xl relative overflow-hidden">
             <div className="absolute top-0 right-0 w-64 h-64 bg-brand-primary/20 blur-[100px]"></div>
             <div className="flex flex-col md:flex-row items-center gap-10 relative z-10">
                <div className="w-full md:w-1/3">
                  <img src="https://m.media-amazon.com/images/I/61YuZQJV3IL._AC_SL1280_.jpg" className="rounded-3xl mix-blend-screen" alt="SONAX Soft Touch" />
                </div>
                <div className="flex-1">
                  <span className="text-brand-primary text-[10px] font-black uppercase tracking-[0.2em] mb-4 block">Professional Verdict</span>
                  <h3 className="text-3xl font-bold font-outfit mb-6 italic text-glow">SONAX Soft Touch (Pack of 3)</h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-8">
                    While many brands focus on "long" fibres, SONAX focuses on "split" density. These cloths feel incredibly soft to the hand, but their actual cleaning power for removing tacky wax residue is 30% higher than standard 300GSM towels.
                  </p>
                  <ul className="grid grid-cols-2 gap-4 mb-8">
                    <li className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest"><span className="text-emerald-400">✓</span> No Swirls</li>
                    <li className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest"><span className="text-emerald-400">✓</span> High Edge-Softness</li>
                    <li className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest"><span className="text-emerald-400">✓</span> Wax-Safe</li>
                    <li className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest"><span className="text-emerald-400">✓</span> Interior-Ready</li>
                  </ul>
                  <a href="https://amzn.to/4qrWwXi" className="inline-block bg-brand-primary text-white px-10 py-4 rounded-xl font-black text-xs uppercase tracking-widest hover:bg-white hover:text-brand-dark transition-all">
                    Check Amazon Price
                  </a>
                </div>
             </div>
          </div>

          <div className="bg-indigo-50 border border-indigo-100 rounded-[2.5rem] p-12 text-center mt-12">
            <h3 className="text-2xl font-bold font-outfit mb-4 text-slate-900">Lab Conclusion</h3>
            <p className="text-slate-600 text-sm leading-relaxed font-medium mb-8">
              SONAX is not just resting on its laurels. Their microfibre technology, specifically in the <strong>Dry Cloth Plus</strong> and <strong>Wash Mitt</strong>, remains at the absolute peak of automotive maintenance. If you value German engineering and long-term durability, the SONAX Performance Series is still the one to beat in 2026.
            </p>
            <div className="flex justify-center gap-4">
               <span className="bg-white px-4 py-2 rounded-lg border border-slate-200 text-[10px] font-black uppercase tracking-widest text-slate-800">Final Score: 9.6/10</span>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'top-5-detailing-2026',
      title: 'The Elite 5: Essential Detailing Hardware for 2026',
      excerpt: 'From 1400 GSM drying monsters to German-engineered wipes, these are the five products every enthusiast needs this season.',
      category: 'Top Lists',
      readTime: '12 min read',
      date: 'April 05, 2026',
      image: 'https://m.media-amazon.com/images/I/91aUiP4twwL._AC_SL1500_.jpg',
      content: (
        <div className="prose prose-slate max-w-none">
          <p className="text-xl text-slate-600 mb-10 leading-relaxed font-light">
            Selecting the right hardware is the difference between a surface that glows and one that is covered in micro-scratches. After 200+ hours of lab testing, our 2026 "Elite 5" list focuses on density, absorbency, and surface safety.
          </p>

          {/* Product 1: Nuke Guys Gamma Dryer */}
          <section className="mb-20">
            <div className="flex flex-col md:flex-row items-center gap-12 bg-slate-50 rounded-[3rem] p-10 border border-slate-100 shadow-sm">
              <div className="w-full md:w-2/5">
                <img src="https://m.media-amazon.com/images/I/91aUiP4twwL._AC_SL1500_.jpg" className="rounded-2xl shadow-2xl mix-blend-multiply" alt="Nuke Guys Gamma Dryer" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-brand-primary text-white text-[9px] font-black px-3 py-1 rounded-full uppercase tracking-widest">The Heavyweight</span>
                  <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Drying Tech</span>
                </div>
                <h3 className="text-3xl font-bold font-outfit text-slate-900 mb-4">01. Nuke Guys Gamma Dryer S</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-8 font-medium">
                  At a staggering <strong>1400 GSM</strong>, this isn't just a cloth; it's a sponge in fibre form. The Gamma Dryer S is engineered with ultra-soft, rounded fibres that ensure a scratch-free finish even on sensitive "Black Sapphire" paints.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="bg-white p-4 rounded-2xl border border-slate-100">
                    <span className="text-[9px] text-slate-400 uppercase font-black block mb-1">Density</span>
                    <span className="text-sm font-bold text-slate-800">1400 GSM</span>
                  </div>
                  <div className="bg-white p-4 rounded-2xl border border-slate-100">
                    <span className="text-[9px] text-slate-400 uppercase font-black block mb-1">Edge</span>
                    <span className="text-sm font-bold text-slate-800">Silk Bound</span>
                  </div>
                </div>
                <a href="https://amzn.to/4sKYJi3" target="_blank" rel="noopener noreferrer" className="w-full md:w-auto inline-block text-center bg-brand-primary text-white px-10 py-4 rounded-xl font-black text-xs uppercase tracking-widest hover:scale-105 transition-all shadow-xl shadow-indigo-100">
                  View on Amazon
                </a>
              </div>
            </div>
          </section>

          {/* Product 2: Poliboy Wet Wipes */}
          <section className="mb-20">
            <div className="flex flex-col md:flex-row-reverse items-center gap-12 bg-indigo-50/50 rounded-[3rem] p-10 border border-indigo-100/50 shadow-sm">
              <div className="w-full md:w-2/5">
                <img src="https://m.media-amazon.com/images/I/71Uc+5Tm18L._AC_SL1500_.jpg" className="rounded-2xl shadow-2xl mix-blend-multiply" alt="Poliboy Wipes" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-indigo-600 text-white text-[9px] font-black px-3 py-1 rounded-full uppercase tracking-widest">Made in Germany</span>
                  <span className="text-[10px] text-indigo-400 font-bold uppercase tracking-widest">Interior Care</span>
                </div>
                <h3 className="text-3xl font-bold font-outfit text-slate-900 mb-4">02. Poliboy Wet Cleaning Wipes</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-8 font-medium">
                  When you need an immediate refresh without pulling out the full detailing kit, <strong>Poliboy</strong> is the professional's choice. These wipes are chemically balanced to preserve matte finishes without leaving the greasy "Armoral" sheen of the past.
                </p>
                <a href="https://amzn.to/49SvkuA" target="_blank" rel="noopener noreferrer" className="w-full md:w-auto inline-block text-center bg-brand-dark text-white px-10 py-4 rounded-xl font-black text-xs uppercase tracking-widest hover:bg-brand-primary transition-all shadow-xl">
                  Check Amazon Price
                </a>
              </div>
            </div>
          </section>

          {/* Product 3: Vileda Actifibre */}
          <section className="mb-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="bg-white border border-slate-100 p-10 rounded-[2.5rem] shadow-sm flex flex-col items-center text-center">
                <img src="https://m.media-amazon.com/images/I/81ugbXrf6BL._AC_SL1500_.jpg" className="w-48 h-48 object-contain mb-8 mix-blend-multiply" alt="Vileda Actifibre" />
                <h4 className="text-2xl font-bold font-outfit mb-4">03. Vileda Actifibre Soft</h4>
                <p className="text-sm text-slate-500 mb-8 leading-relaxed">
                  The hybrid choice. Combining the absorbency of a sponge with the cleaning power of microfibre, Actifibre is unrivaled for streak-free results on smooth surfaces like piano black trim and glass.
                </p>
                <a href="https://amzn.to/49SvD8I" className="text-brand-primary font-black text-[10px] uppercase tracking-widest border-b-2 border-brand-primary pb-1">Shop Actifibre</a>
              </div>

              <div className="bg-white border border-slate-100 p-10 rounded-[2.5rem] shadow-sm flex flex-col items-center text-center">
                <img src="https://m.media-amazon.com/images/I/61da8HZynZL._AC_SL1000_.jpg" className="w-48 h-48 object-contain mb-8 mix-blend-multiply" alt="SONAX 04161000" />
                <h4 className="text-2xl font-bold font-outfit mb-4">04. SONAX 04161000 Classic</h4>
                <p className="text-sm text-slate-500 mb-8 leading-relaxed">
                  The industry standard. If you only own one detailing cloth, this is it. Its versatility across polishing, interior dusting, and wax removal makes it the quintessential detailing tool.
                </p>
                <a href="https://amzn.to/3LrzsIS" className="text-brand-primary font-black text-[10px] uppercase tracking-widest border-b-2 border-brand-primary pb-1">Shop SONAX Legend</a>
              </div>
            </div>
          </section>

          {/* Product 5: Vileda Colours */}
          <section className="mb-12 bg-brand-dark p-12 rounded-[3.5rem] text-white">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="w-32 h-32 bg-white rounded-3xl p-4 flex items-center justify-center">
                <img src="https://m.media-amazon.com/images/I/61vSHkFfJqL._AC_SL1500_.jpg" className="w-full h-full object-contain mix-blend-multiply" alt="Vileda Colours" />
              </div>
              <div className="flex-1">
                <span className="text-[10px] font-black text-brand-primary uppercase tracking-widest mb-3 block">Strategy Pick</span>
                <h3 className="text-3xl font-bold font-outfit mb-4 italic">05. Vileda Colours Multipack (7x)</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-8 font-medium">
                  The secret to professional detailing is <strong>Color Coding</strong>. By using blue for glass, red for wheels, and green for interiors, you eliminate the risk of transferring abrasive brake dust to your delicate leather or paint.
                </p>
                <a href="https://amzn.to/4qSFwcp" className="bg-white text-brand-dark px-10 py-4 rounded-xl font-black text-[10px] uppercase tracking-widest hover:bg-brand-primary hover:text-white transition-all shadow-2xl">
                  Order Management Set
                </a>
              </div>
            </div>
          </section>

          <div className="bg-indigo-600 rounded-[2.5rem] p-12 text-center text-white mt-16 shadow-2xl">
            <h3 className="text-2xl font-bold font-outfit mb-4">The Verdict</h3>
            <p className="max-w-2xl mx-auto text-indigo-100 text-sm leading-relaxed font-medium">
              If you’re just starting, prioritize the <strong>Nuke Guys Gamma Dryer</strong> for safe drying and the <strong>Vileda Colours Set</strong> for cross-contamination prevention. These two items alone will elevate your results by 70%.
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'science-of-shine',
      title: 'The Science of Shine: The Ultimate 2026 Guide to Automotive Detailing',
      excerpt: 'Stop washing your car with old rags. Discover how specialized microfibre tech and Koch Chemie chemicals can protect your investment.',
      category: 'Guides',
      readTime: '18 min read',
      date: 'April 02, 2026',
      image: 'https://m.media-amazon.com/images/I/71+-MemlqBL._AC_SL1500_.jpg',
      content: (
        <div className="prose prose-slate max-w-none">
          <p className="text-xl text-slate-600 mb-10 leading-relaxed font-light">
            In 2026, automotive detailing has evolved into a precise discipline of surface preservation. Achieving a showroom finish isn't just about soap; it's about the interaction between chemical polymers and micro-engineered fibres.
          </p>

          <h2 className="text-3xl font-bold font-outfit text-slate-900 mb-8 italic">Phase 1: Cockpit Preservation & UV Shielding</h2>
          <p className="mb-10 text-slate-600 leading-relaxed">
            The modern dashboard is a complex assembly of soft-touch plastics, synthetic leathers, and anti-glare screens. Using standard household cleaners can cause "blooming" or premature cracking. Professional detailing begins with a pH-neutral, nutrient-rich solution.
          </p>

          <div className="bg-slate-50 border border-slate-100 rounded-[2.5rem] p-10 mb-16 flex flex-col md:flex-row items-center gap-10 shadow-sm">
            <div className="w-full md:w-1/3">
              <img src="https://m.media-amazon.com/images/I/71+-MemlqBL._AC_SL1500_.jpg" className="rounded-3xl shadow-xl mix-blend-multiply" alt="Koch Chemie Refresh Cockpit Care" />
            </div>
            <div className="flex-1">
              <span className="text-[10px] font-black text-brand-primary uppercase tracking-widest mb-3 block">Interior Masterclass</span>
              <h4 className="text-2xl font-bold font-outfit mb-4 text-slate-900">Koch Chemie Refresh Cockpit Care Set</h4>
              <p className="text-sm text-slate-500 mb-8 leading-relaxed font-medium">
                This set is the gold standard for interior detailing. The <strong>Refresh Cockpit Care</strong> solution cleans, nourishes, and provides an anti-static finish that repels dust. When applied with the included sponge and microfibre, it restores that elusive "new car" matte look without the greasy residue found in cheap alternatives.
              </p>
              <a href="https://amzn.to/45JEPdd" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 bg-brand-dark text-white px-8 py-4 rounded-xl font-black text-xs uppercase tracking-widest hover:bg-brand-primary transition-all shadow-xl">
                Check Price on Amazon
              </a>
            </div>
          </div>

          <h2 className="text-3xl font-bold font-outfit text-slate-900 mb-8 italic">Phase 2: Optics & Crystal Clarity</h2>
          <p className="mb-10 text-slate-600 leading-relaxed">
            Streaks on glass aren't just an aesthetic annoyance—they're a safety hazard. The "Waffle Weave" is the secret weapon here. Traditional cloths spread oil; waffle weaves trap it in their recessed pockets.
          </p>

          <div className="bg-indigo-50 border border-indigo-100 rounded-[2.5rem] p-10 mb-16 flex flex-col md:flex-row-reverse items-center gap-10 shadow-sm">
            <div className="w-full md:w-1/3">
              <img src="https://m.media-amazon.com/images/I/81BI2YEb8wS._AC_SL1500_.jpg" className="rounded-3xl shadow-xl mix-blend-multiply" alt="Nuke Guys Car Glass Cloths" />
            </div>
            <div className="flex-1">
              <span className="text-[10px] font-black text-brand-primary uppercase tracking-widest mb-3 block">Optics Engineering</span>
              <h4 className="text-2xl font-bold font-outfit mb-4 text-slate-900">Nuke Guys Car Glass Cloths (450 GSM)</h4>
              <p className="text-sm text-indigo-900/70 mb-8 leading-relaxed font-medium">
                Engineered specifically for "See-Through" clarity, these <strong>Nuke Guys Waffle Cloths</strong> eliminate the need for harsh chemicals. Their 35x35 cm size is optimized for the circular buffing motion required to achieve zero-streak visibility. 
              </p>
              <a href="https://amzn.to/3YFcJMn" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 bg-brand-primary text-white px-8 py-4 rounded-xl font-black text-xs uppercase tracking-widest hover:bg-brand-dark transition-all shadow-xl">
                View Deal on Amazon
              </a>
            </div>
          </div>

          <h2 className="text-3xl font-bold font-outfit text-slate-900 mb-8 italic">Phase 3: The High-Gloss Buff</h2>
          <p className="mb-10 text-slate-600 leading-relaxed">
            After paint correction or waxing, the final buff is critical. You need a fibre with zero drag and maximum pile density to lift residue without inducing swirls.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white border border-slate-100 p-8 rounded-[2rem] shadow-sm hover:border-brand-primary transition-all group">
              <img src="https://m.media-amazon.com/images/I/51cM3OHqpcL._AC_SL1000_.jpg" className="w-full aspect-square object-contain mb-6 mix-blend-multiply group-hover:scale-105 transition-transform" alt="Muc-Off Premium" />
              <h5 className="font-bold font-outfit text-xl mb-3">Muc-Off Premium Micro Fibre</h5>
              <p className="text-sm text-slate-500 mb-6 font-medium">The ultimate choice for high-end polishing. Its split-fibre technology creates a surface area that traditional towels can't match.</p>
              <a href="https://amzn.to/49yG1kR" className="text-brand-primary text-[10px] font-black uppercase tracking-widest border-b-2 border-brand-primary pb-1">Get for Polishing</a>
            </div>
            <div className="bg-white border border-slate-100 p-8 rounded-[2rem] shadow-sm hover:border-brand-primary transition-all group">
              <img src="https://m.media-amazon.com/images/I/71UZybdln8L._AC_SL1500_.jpg" className="w-full aspect-square object-contain mb-6 mix-blend-multiply group-hover:scale-105 transition-transform" alt="Ha-Ra Star Cloth" />
              <h5 className="font-bold font-outfit text-xl mb-3">Ha-Ra Star Cloth Mini Blue</h5>
              <p className="text-sm text-slate-500 mb-6 font-medium">A high-performance "utility star" for small detailed areas like door handle recesses and badge work.</p>
              <a href="https://amzn.to/3NawHMD" className="text-brand-primary text-[10px] font-black uppercase tracking-widest border-b-2 border-brand-primary pb-1">Shop Precision Set</a>
            </div>
          </div>

          <h2 className="text-3xl font-bold font-outfit text-slate-900 mb-8 italic">Phase 4: Bulk Maintenance & Wheels</h2>
          <p className="mb-10 text-slate-600 leading-relaxed">
            Never use your premium paint towels on wheels or engine bays. For the "dirty work," you need a reliable bulk set that can be retired once it becomes heavily contaminated.
          </p>

          <div className="bg-slate-900 p-12 rounded-[3rem] text-white flex flex-col md:flex-row items-center gap-10 mb-12 shadow-2xl">
            <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center p-4">
              <img src="https://m.media-amazon.com/images/I/81h+Dp8683L._AC_SL1500_.jpg" className="w-full h-full object-contain mix-blend-multiply" alt="Nigrin Set" />
            </div>
            <div className="flex-1">
              <h4 className="text-2xl font-bold font-outfit mb-4">Nigrin Microfibre Set: The Fleet Essential</h4>
              <p className="text-slate-400 text-sm leading-relaxed mb-6 font-medium">
                The <strong>Nigrin Cloth Set</strong> provides a balanced mix for multi-purpose tasks. From wiping down door jambs to cleaning exhaust tips, having a color-coded set ensures no cross-contamination between wheels and delicate paint surfaces.
              </p>
              <a href="https://amzn.to/49l0V8i" className="bg-white text-slate-900 px-8 py-3 rounded-xl font-black text-[10px] uppercase tracking-widest hover:bg-brand-primary hover:text-white transition-all">
                Shop Maintenance Pack
              </a>
            </div>
          </div>

          <div className="border-t border-slate-100 pt-12 mt-12">
            <h3 className="text-xl font-bold font-outfit mb-4">Master's Summary</h3>
            <p className="text-slate-500 text-sm leading-relaxed italic">
              "Detaling is 20% product and 80% process. By choosing hardware like Nuke Guys for your glass and Muc-Off for your paint, you are building a system that prevents damage rather than just cleaning it." — CarWipes Editorial Team
            </p>
          </div>
        </div>
      )
    },
  ];

  const filteredPosts = selectedCategory === 'All' 
    ? posts 
    : posts.filter(p => p.category === selectedCategory);

  if (activePost) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-16 animate-in fade-in duration-500">
        <button 
          onClick={() => setActivePost(null)}
          className="flex items-center gap-3 text-brand-primary font-black uppercase tracking-widest text-xs mb-12 transition-all group"
        >
          <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Hub
        </button>

        <header className="mb-16">
          <div className="flex items-center gap-6 mb-8">
            <span className="px-4 py-1.5 bg-brand-primary/10 text-brand-primary rounded-lg text-[10px] font-black uppercase tracking-widest">
              {activePost.category}
            </span>
            <span className="text-[10px] text-slate-400 font-black uppercase tracking-widest">{activePost.date}</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-outfit leading-tight mb-12 text-slate-900 italic">
            {activePost.title}
          </h1>
          <div className="w-full aspect-video rounded-[3rem] overflow-hidden bg-white mb-16 shadow-2xl border border-slate-100 p-12">
            <img src={activePost.image} alt={activePost.title} className="w-full h-full object-contain mix-blend-multiply" />
          </div>
        </header>

        <div className="article-content">
          {activePost.content}
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-20 min-h-screen">
      <div className="text-center mb-20">
        <span className="text-brand-primary text-[10px] font-black uppercase tracking-[0.25em] mb-4 block italic">Professional Intelligence</span>
        <h1 className="text-5xl font-bold font-outfit text-slate-900 mb-6">The Lab Report</h1>
        <p className="text-slate-500 max-w-xl mx-auto font-medium">Deep-dives into hardware tests, chemical breakdowns, and elite surface preservation techniques.</p>
      </div>

      <div className="flex flex-wrap justify-center gap-3 mb-16">
        {['All', 'Guides', 'Top Lists', 'Reviews'].map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat as Category)}
            className={`px-8 py-3 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all ${
              selectedCategory === cat 
              ? 'bg-brand-primary text-white shadow-2xl shadow-indigo-100' 
              : 'bg-white text-slate-400 border border-slate-100 hover:border-indigo-200 hover:text-indigo-500'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {filteredPosts.map((post) => (
          <article 
            key={post.id}
            onClick={() => setActivePost(post)}
            className="group cursor-pointer bg-white rounded-[2.5rem] border border-slate-100 overflow-hidden hover:shadow-[0_30px_60px_rgba(0,0,0,0.06)] transition-all hover:-translate-y-2"
          >
            <div className="aspect-[16/10] overflow-hidden bg-slate-50 flex items-center justify-center p-10">
              <img src={post.image} className="max-h-full object-contain group-hover:scale-110 transition-transform duration-700 mix-blend-multiply" alt={post.title} />
            </div>
            <div className="p-10">
              <div className="flex items-center justify-between mb-6">
                <span className="text-[9px] font-black text-brand-primary uppercase tracking-[0.15em]">
                  {post.category}
                </span>
                <span className="text-[9px] text-slate-400 font-black uppercase tracking-[0.15em]">
                  {post.readTime}
                </span>
              </div>
              <h3 className="text-2xl font-bold font-outfit text-slate-900 mb-6 line-clamp-2 leading-tight group-hover:text-brand-primary transition-colors italic">
                {post.title}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed line-clamp-3 mb-8">
                {post.excerpt}
              </p>
              <div className="text-[10px] font-black text-brand-primary group-hover:text-brand-dark flex items-center gap-3 transition-colors uppercase tracking-widest">
                Read Analysis 
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Blog;
