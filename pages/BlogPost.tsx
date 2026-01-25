
import React, { useEffect, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { articles, products } from '../data';
import { ArrowLeft, Calendar, User, Tag, ChevronRight, BookOpen, Sparkles, LayoutGrid } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import ShareButtons from '../components/ShareButtons';
import AdPlacement from '../components/AdPlacement';
import Breadcrumbs from '../components/Breadcrumbs';
import { useLanguage } from '../context/LanguageContext';

const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const article = articles.find(a => a.slug === slug);
  const currentUrl = window.location.href;
  const { language, t, updateSeo } = useLanguage();

  useEffect(() => {
    if (article) {
      const title = language === 'de' ? article.title_de : article.title;
      const excerpt = language === 'de' ? article.excerpt_de : article.excerpt;
      
      const seoTitle = language === 'de' 
        ? `${title} | Autopflege Magazin CarWipes.de`
        : `${title} | CarWipes.de Journal`;
        
      updateSeo(seoTitle, excerpt);
      window.scrollTo(0, 0);
    }
  }, [article, language, updateSeo]);

  const recommendedProducts = useMemo(() => {
    return products.sort(() => 0.5 - Math.random()).slice(0, 4);
  }, []);

  const sidebarProducts = recommendedProducts.slice(0, 3);
  
  const relatedArticles = useMemo(() => {
    if (!article) return [];
    return articles
      .filter(a => a.slug !== article.slug)
      .sort(() => 0.5 - Math.random())
      .slice(0, 2);
  }, [article]);

  if (!article) return <div className="py-20 text-center"><h2 className="text-2xl font-bold">Article not found</h2><Link to="/blog" className="text-teal-600 underline">Back to Blog</Link></div>;

  const title = language === 'de' ? article.title_de : article.title;
  const content = language === 'de' ? article.content_de : article.content;
  const excerpt = language === 'de' ? article.excerpt_de : article.excerpt;
  const paragraphs = content.split('\n\n');
  const altText = `${t('alt.articlePrefix')} ${title}`;

  const breadcrumbItems = [
    { label: t('nav.journal'), path: '/blog' },
    { label: title }
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Header */}
      <div className="relative h-[400px] md:h-[600px] overflow-hidden">
        <img 
          src={article.image} 
          alt={altText} 
          fetchPriority="high"
          loading="eager"
          className="w-full h-full object-cover" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full p-8 md:p-20">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-4">
              <Link to="/blog" className="inline-flex items-center gap-2 text-teal-400 font-black hover:text-teal-300 uppercase tracking-[0.2em] text-xs">
                <ArrowLeft className="w-4 h-4" /> {t('nav.journal')}
              </Link>
              <Breadcrumbs items={breadcrumbItems} className="mb-0 [&_span]:text-white [&_a]:text-slate-300 [&_a:hover]:text-teal-400" />
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-white leading-tight mb-8 drop-shadow-lg">{title}</h1>
            <div className="flex flex-wrap items-center gap-8 text-slate-300 text-sm font-bold uppercase tracking-widest">
              <span className="flex items-center gap-2 border-r border-slate-700 pr-8"><Calendar className="w-4 h-4 text-teal-500" /> {article.date}</span>
              <span className="flex items-center gap-2 border-r border-slate-700 pr-8"><User className="w-4 h-4 text-teal-500" /> Detailing Expert</span>
              <span className="flex items-center gap-2"><Tag className="w-4 h-4 text-teal-500" /> Maintenance Guide</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 flex flex-col lg:flex-row gap-16">
        {/* Main Content */}
        <article className="lg:w-2/3">
          <div className="prose prose-lg prose-slate max-w-none text-slate-600 leading-relaxed space-y-8">
            <p className="text-2xl font-bold text-slate-900 border-l-8 border-teal-500 pl-10 mb-12 italic leading-relaxed">
              {excerpt}
            </p>
            
            {paragraphs.map((para, i) => (
              <React.Fragment key={i}>
                <p className="text-lg" dangerouslySetInnerHTML={{ __html: para }} />
                {i === 1 && <AdPlacement type="leaderboard" id="blog-mid-content-ad" className="!my-12" />}
              </React.Fragment>
            ))}
            
            <h2 className="text-4xl font-black text-slate-900 pt-10 mb-6">{language === 'de' ? "Das Geheimnis der Profis" : "The Professional Detailer's Secret"}</h2>
            <p className="text-lg">
              {language === 'de' 
                ? "Die meisten Enthusiasten vergessen, dass ein Tuch ein Präzisionswerkzeug ist. So wie man keinen Hammer zum Streichen einer Wand verwenden würde, sollte man auch kein generisches Mikrofasertuch zum Polieren von teurem Wachs verwenden. Die Dichte der Fasern bestimmt, wie viel Schmutz eingeschlossen wird, anstatt über den Klarlack gezogen zu werden."
                : "Most enthusiasts forget that a cloth is a precision tool. Just like you wouldn't use a hammer to paint a wall, you shouldn't use a generic microfibre to buff expensive wax. The density of the fibers determines how much debris is trapped versus how much is dragged across your clear coat."}
            </p>

            <AdPlacement type="in-feed" id="blog-post-secret-ad" className="!my-12" />
            
            <div className="bg-slate-900 rounded-[3rem] p-12 text-white my-16 shadow-2xl shadow-teal-900/20 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-teal-500/20 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl group-hover:bg-teal-500/30 transition-colors"></div>
              <h3 className="text-3xl font-black text-teal-400 mb-8 flex items-center gap-4 italic">
                <span className="w-12 h-1 bg-teal-400 rounded-full block"></span> {language === 'de' ? "Profi-Pflegetipps" : "Pro Maintenance Tips"}
              </h3>
              <ul className="space-y-6">
                <li className="flex gap-4">
                  <div className="w-8 h-8 bg-teal-500 rounded-lg flex items-center justify-center flex-shrink-0 font-bold text-white">1</div>
                  <span className="text-slate-300"><strong>{language === 'de' ? 'Neue Tücher vorwaschen:' : 'Pre-wash your new cloths:'}</strong> {language === 'de' ? 'Vor dem ersten Gebrauch immer waschen, um Fabrikfusseln zu entfernen.' : 'Always wash before first use to eliminate factory lint.'}</span>
                </li>
                <li className="flex gap-4">
                  <div className="w-8 h-8 bg-teal-500 rounded-lg flex items-center justify-center flex-shrink-0 font-bold text-white">2</div>
                  <span className="text-slate-300"><strong>{language === 'de' ? 'Farbcodierung:' : 'Color Code your workflow:'}</strong> {language === 'de' ? 'Blau für Glas, Gelb für Kunststoff, Schwarz für Felgen.' : 'Blue for glass, Yellow for trim, Black for dirty wheels to prevent cross-contamination.'}</span>
                </li>
                <li className="flex gap-4">
                  <div className="w-8 h-8 bg-teal-500 rounded-lg flex items-center justify-center flex-shrink-0 font-bold text-white">3</div>
                  <span className="text-slate-300"><strong>{language === 'de' ? 'Kein Weichspüler:' : 'Zero Softener Policy:'}</strong> {language === 'de' ? 'Weichspüler verstopfen die Mikrofasern und hinterlassen Schlieren.' : 'Never use fabric softeners; they clog microfibres and leave oily streaks.'}</span>
                </li>
              </ul>
            </div>
          </div>

          <section className="mt-20 py-16 px-8 bg-teal-50 rounded-[3rem] border border-teal-100">
            <div className="flex items-center gap-3 mb-8">
              <Sparkles className="text-teal-600 w-6 h-6 animate-pulse" />
              <h3 className="text-2xl font-black text-slate-900">{language === 'de' ? 'Empfohlenes Equipment' : 'Recommended Gear'}</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {recommendedProducts.slice(0, 2).map(p => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </section>

          <div className="mt-20 pt-10 border-t border-slate-100 flex flex-col sm:flex-row justify-between items-center gap-8">
            <ShareButtons title={title} url={currentUrl} />
            <div className="flex flex-wrap gap-2">
              <span className="px-4 py-2 bg-slate-50 text-slate-400 text-xs font-black rounded-lg uppercase tracking-widest border border-slate-100">#detailing</span>
              <span className="px-4 py-2 bg-slate-50 text-slate-400 text-xs font-black rounded-lg uppercase tracking-widest border border-slate-100">#autopflege</span>
              <span className="px-4 py-2 bg-slate-50 text-slate-400 text-xs font-black rounded-lg uppercase tracking-widest border border-slate-100">#carcare</span>
            </div>
          </div>

          <section className="mt-24 pt-20 border-t border-slate-100">
            <div className="flex items-center gap-4 mb-10">
              <div className="bg-teal-600 p-3 rounded-2xl text-white">
                <BookOpen className="w-6 h-6" />
              </div>
              <h3 className="text-3xl font-black text-slate-900">{language === 'de' ? 'Verwandte Artikel' : 'Related Reading'}</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {relatedArticles.map(a => (
                <Link to={`/blog/${a.slug}`} key={a.id} className="group bg-white rounded-[2.5rem] overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all flex flex-col">
                  <div className="aspect-video overflow-hidden">
                    <img 
                      src={a.image} 
                      alt={`${t('alt.articlePrefix')} ${language === 'de' ? a.title_de : a.title}`} 
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                    />
                  </div>
                  <div className="p-8">
                    <h4 className="text-xl font-black text-slate-900 mb-4 group-hover:text-teal-600 transition-colors line-clamp-2">{language === 'de' ? a.title_de : a.title}</h4>
                    <p className="text-sm text-slate-500 mb-6 line-clamp-2">{language === 'de' ? a.excerpt_de : a.excerpt}</p>
                    <div className="flex items-center gap-2 text-xs font-black text-teal-600 uppercase tracking-widest">
                      {language === 'de' ? 'Mehr lesen' : 'Read More'} <ChevronRight className="w-4 h-4" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        </article>

        <aside className="lg:w-1/3">
          <div className="sticky top-24 space-y-10">
            <div className="bg-[#fbfcfc] rounded-[2.5rem] p-10 border border-slate-50 shadow-sm">
              <h3 className="text-2xl font-black mb-8 text-slate-900 border-b border-teal-500/20 pb-4">{language === 'de' ? 'Top-Produkte' : 'Essential Gear'}</h3>
              <div className="space-y-8">
                {sidebarProducts.map(p => (
                  <div key={p.id} className="flex gap-5 group">
                    <Link to={`/product/${p.slug}`} className="w-24 h-24 bg-white rounded-2xl overflow-hidden flex-shrink-0 border border-slate-100 p-3 shadow-sm group-hover:shadow-md transition-all">
                      <img 
                        src={p.image} 
                        alt={`${t('alt.productPrefix')} ${language === 'de' ? p.name_de : p.name}`} 
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-contain group-hover:scale-110 transition-transform" 
                      />
                    </Link>
                    <div className="flex flex-col justify-center">
                      <Link to={`/product/${p.slug}`} className="text-sm font-black text-slate-800 line-clamp-2 hover:text-teal-600 mb-2 leading-tight transition-colors">{language === 'de' ? p.name_de : p.name}</Link>
                      <span className="text-[10px] text-teal-600 font-black uppercase tracking-[0.2em]">{p.brand}</span>
                    </div>
                  </div>
                ))}
              </div>
              <Link to="/products" className="mt-10 block w-full bg-slate-900 text-white text-center py-5 rounded-2xl font-black text-xs uppercase tracking-[0.2em] shadow-xl shadow-slate-900/10 hover:bg-teal-600 transition-all">
                {t('hero.browse')}
              </Link>
            </div>

            <AdPlacement type="sidebar" id="blog-sidebar-fixed" />

            <div className="bg-gradient-to-br from-teal-600 to-teal-500 rounded-[2.5rem] p-10 text-white shadow-2xl shadow-teal-600/20 relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="text-2xl font-black mb-4">{language === 'de' ? 'Teilen macht Freude' : 'Sharing is Caring'}</h3>
                <p className="text-teal-50 text-sm mb-8 leading-relaxed font-bold opacity-80 italic">{language === 'de' ? 'Helfen Sie anderen Enthusiasten, ihr Auto zu pflegen!' : 'Help your fellow enthusiasts protect their rides. Share this guide!'}</p>
                <ShareButtons title={title} url={currentUrl} className="bg-white/10 p-4 rounded-3xl backdrop-blur-md" />
              </div>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default BlogPost;
