
import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  path?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items, className = "" }) => {
  return (
    <nav aria-label="Breadcrumb" className={`flex mb-6 ${className}`}>
      <ol className="flex flex-wrap items-center gap-2">
        <li>
          <Link 
            to="/" 
            className="flex items-center text-slate-400 hover:text-teal-600 transition-colors"
            aria-label="Home"
          >
            <Home className="w-3.5 h-3.5" />
          </Link>
        </li>
        
        {items.map((item, index) => (
          <li key={index} className="flex items-center gap-2 group">
            <ChevronRight className="w-3.5 h-3.5 text-slate-300" />
            {item.path ? (
              <Link 
                to={item.path} 
                className="text-[10px] font-black uppercase tracking-[0.15em] text-slate-400 hover:text-teal-600 transition-colors"
              >
                {item.label}
              </Link>
            ) : (
              <span 
                className="text-[10px] font-black uppercase tracking-[0.15em] text-slate-900 truncate max-w-[150px] sm:max-w-none"
                aria-current="page"
              >
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
