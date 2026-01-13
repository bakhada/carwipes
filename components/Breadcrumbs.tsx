
import React, { useEffect } from 'react';
import { AppSection } from '../types';

interface BreadcrumbItem {
  label: string;
  section?: AppSection;
  isCurrent?: boolean;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  onNavigate: (section: AppSection) => void;
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items, onNavigate }) => {
  // Inject JSON-LD for SEO breadcrumbs
  useEffect(() => {
    const schema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": items.map((item, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "name": item.label,
        "item": item.section ? `${window.location.origin}/?section=${item.section}` : window.location.href
      }))
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.innerHTML = JSON.stringify(schema);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, [items]);

  return (
    <nav aria-label="Breadcrumb" className="mb-8">
      <ol className="flex flex-wrap items-center gap-2">
        {items.map((item, index) => (
          <li key={index} className="flex items-center gap-2">
            {index > 0 && (
              <svg 
                className="w-3 h-3 text-slate-300" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
              </svg>
            )}
            
            {item.isCurrent || !item.section ? (
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
                {item.label}
              </span>
            ) : (
              <button
                onClick={() => onNavigate(item.section!)}
                className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-primary hover:text-brand-dark transition-colors"
              >
                {item.label}
              </button>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
