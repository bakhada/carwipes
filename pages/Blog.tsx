
import React from 'react';
import { Link } from 'react-router-dom';
import { articles } from '../data';
import { Calendar, User, ArrowRight } from 'lucide-react';
import ShareButtons from '../components/ShareButtons';

const Blog: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">The Detailing Journal</h1>
          <p className="text-gray-600 max-w-2xl mx-auto italic">
            "Your car deserves better than a dirty old rag. Learn the secrets of professional detailing here."
          </p>
        </header>

        <div className="space-y-12">
          {articles.map(article => (
            <article key={article.id} className="bg-white rounded-[3rem] overflow-hidden shadow-sm hover:shadow-xl transition-all border border-gray-100 flex flex-col md:flex-row h-full">
              <Link to={`/blog/${article.slug}`} className="md:w-1/3 relative overflow-hidden h-64 md:h-auto">
                <img src={article.image} alt={article.title} className="w-full h-full object-cover transition-transform duration-700 hover:scale-110" />
              </Link>
              <div className="p-8 md:p-12 md:w-2/3 flex flex-col">
                <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                  <div className="flex items-center gap-4 text-xs font-bold text-gray-400 uppercase tracking-widest">
                    <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" /> {article.date}</span>
                    <span className="flex items-center gap-1.5"><User className="w-3.5 h-3.5" /> Expert</span>
                  </div>
                  <div className="hidden sm:block">
                    <ShareButtons title={article.title} url={`${window.location.origin}/#/blog/${article.slug}`} />
                  </div>
                </div>
                
                <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-4 hover:text-teal-600 transition-colors leading-tight">
                  <Link to={`/blog/${article.slug}`}>{article.title}</Link>
                </h2>
                
                <p className="text-gray-600 leading-relaxed mb-8 text-lg line-clamp-3">
                  {article.excerpt}
                </p>
                
                <div className="mt-auto flex items-center justify-between">
                  <Link to={`/blog/${article.slug}`} className="inline-flex items-center gap-2 bg-teal-600 text-white px-8 py-3.5 rounded-2xl font-bold hover:bg-teal-700 transition-all shadow-lg shadow-teal-600/20">
                    Read Article <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
