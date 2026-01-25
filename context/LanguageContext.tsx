import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';

type Language = 'en' | 'de';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  updateSeo: (title: string, description: string, image?: string, keywords?: string) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('pref_lang');
    return (saved as Language) || 'de';
  });

  useEffect(() => {
    localStorage.setItem('pref_lang', language);
    document.documentElement.lang = language;
  }, [language]);

  const t = (key: string): string => {
    return uiTranslations[language][key] || key;
  };

  const updateSeo = useCallback((title: string, description: string, image?: string, keywords?: string) => {
    // 1. Update Document Title
    document.title = title;
    
    const locale = language === 'de' ? 'de_DE' : 'en_US';
    const currentPath = window.location.hash || '#/';
    const baseUrl = 'https://carwipes.de';
    const fullUrl = `${baseUrl}/${currentPath}`;
    
    // 2. Manage Canonical Tag (Crucial for individual page indexing)
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', fullUrl);

    // 3. Update Meta Tags
    const metaTags = [
      { name: 'description', content: description },
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:url', content: fullUrl },
      { property: 'og:type', content: 'website' },
      { property: 'og:locale', content: locale },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: title },
      { name: 'twitter:description', content: description },
    ];

    if (image) {
      metaTags.push({ property: 'og:image', content: image });
      metaTags.push({ name: 'twitter:image', content: image });
    }

    if (keywords) {
      metaTags.push({ name: 'keywords', content: keywords });
    }

    metaTags.forEach(tag => {
      const selector = tag.name ? `meta[name="${tag.name}"]` : `meta[property="${tag.property}"]`;
      let el = document.querySelector(selector);
      if (!el) {
        el = document.createElement('meta');
        if (tag.name) el.setAttribute('name', tag.name);
        if (tag.property) el.setAttribute('property', tag.property);
        document.head.appendChild(el);
      }
      el.setAttribute('content', tag.content);
    });

    // 4. Update Hreflang Tags (International SEO)
    const languages: Language[] = ['en', 'de'];
    languages.forEach(lang => {
      let link = document.querySelector(`link[hreflang="${lang}"]`);
      if (!link) {
        link = document.createElement('link');
        link.setAttribute('rel', 'alternate');
        link.setAttribute('hreflang', lang);
        document.head.appendChild(link);
      }
      // Link to the same content but with the language preference
      // In a production environment with SSR, this would be a clean URL
      link.setAttribute('href', `${baseUrl}/${currentPath}${currentPath.includes('?') ? '&' : '?'}lang=${lang}`);
    });
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, updateSeo }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within LanguageProvider');
  return context;
};

const uiTranslations: Record<Language, Record<string, string>> = {
  en: {
    'nav.home': 'Home',
    'nav.catalog': 'Catalog',
    'nav.journal': 'Journal',
    'nav.about': 'About',
    'nav.shopNow': 'Shop Now',
    'seo.home.title': 'CarWipes.de | Premium Car Detailing Supplies & Microfibre Cloths',
    'seo.home.desc': 'Discover the best car cleaning wipes, microfibre cloths, and detailing accessories. Curated Amazon affiliate products for a spotless finish.',
    'seo.catalog.title': 'Car Care Catalog | Professional Wipes & Cloths | CarWipes.de',
    'seo.catalog.desc': 'Browse our collection of professional car detailing products from SONAX, Meguiar\'s, and more. High-quality microfibre towels for enthusiasts.',
    'seo.blog.title': 'Detailing Journal | Car Care Tips & Guides | CarWipes.de',
    'seo.blog.desc': 'Expert guides on how to clean and maintain your car. Learn about GSM, paint safety, and the best microfibre cloths for a perfect shine.',
    'seo.about.title': 'About Us | The Mission of CarWipes.de',
    'seo.about.desc': 'Learn why we started CarWipes.de and how we curate the best car detailing equipment from Amazon for the German market.',
    'hero.badge': 'The Detailing Standard 2026',
    'hero.title.1': 'Uncompromising',
    'hero.title.2': 'Detailing Gear.',
    'hero.desc': "Stop settling for supermarket cloths. We curate professional-grade microfibres, drying towels, and cleaning wipes from the industry's most trusted brands.",
    'hero.searchPlaceholder': 'Search e.g. "1200 GSM towel"',
    'hero.editorChoice': 'Editor\'s Choice',
    'hero.editorQuote': 'Paint Safe & Heavy Duty',
    'home.trustBar': 'Trusted by detailing workshops across Germany',
    'cat.microfibre': 'Microfibre',
    'cat.interior': 'Interior',
    'cat.drying': 'Drying',
    'cat.sets': 'Bundles',
    'cat.items': 'Selected Items',
    'home.categories.title.1': 'Browse',
    'home.categories.title.2': 'Ecosystems',
    'home.categories.desc': 'Specialized tools for every stage of your detailing workflow.',
    'home.categories.discover': 'View Category',
    'home.expert.badge': 'From the Journal',
    'home.expert.readNow': 'Read Full Guide',
    'trending.badge': 'Currently Viral',
    'trending.title': 'Community Favorites',
    'trending.viewAll': 'Browse All Products',
    'value.title': 'Why CarWipes.de?',
    'value.desc': 'We are not just a store; we are a filter for quality. Every item is hand-picked based on performance and paint-safety.',
    'value.q1.title': 'Paint Safe Guarantee',
    'value.q1.desc': 'Only edgeless or silk-bound cloths make our list to prevent micro-marring.',
    'value.q2.title': 'Lab Tested GSM',
    'value.q2.desc': 'We verify density so you get the absorbency promised for heavy drying.',
    'value.prime.title': 'Prime Fast Shipping',
    'value.prime.desc': 'Fulfilled by Amazon for reliable, blazing-fast delivery across Europe.',
    'value.support.title': 'Expert Selection',
    'value.support.desc': 'Curated by detailing enthusiasts with years of "hands-on" experience.',
    'cta.title': 'Ready for the perfect shine?',
    'cta.desc': 'Join thousands of enthusiasts who trust our curated selections for their weekend detailing rituals.',
    'cta.button': 'View Full Catalog',
    'product.bestseller': 'Top Pick',
    'product.checkPrice': 'Check prices',
    'product.buyOnAmazon': 'Check prices',
    'product.details': 'Full Review',
    'product.kitTitle': 'Complete Your Detailing Kit',
    'product.kitDesc': 'Pro-Recommended Add-ons',
    'product.techTitle': 'Technical Specifications',
    'product.verdict': 'The Detailing Verdict',
    'product.pros': 'Core Strengths',
    'product.cons': 'Considerations',
    'product.bestFor': 'Ideal Application',
    'product.partnerTitle': 'Official Partner Link',
    'product.partnerDesc': 'This item is sourced through our verified partner network for guaranteed authenticity.',
    'catalog.title': 'Professional Catalog',
    'catalog.desc': 'Engineered for those who treat their vehicle as an investment. Filter through our curated list of high-performance towels.',
    'catalog.brands': 'Filter by Brand',
    'catalog.showing': 'Showing',
    'catalog.results': 'products',
    'catalog.noMatches': 'No products found',
    'catalog.clearFilters': 'Clear All Filters',
    'footer.mission': 'Your destination for professional automotive surface maintenance tools.',
    'footer.rights': 'AUTHORIZED AMAZON PARTNER',
    'footer.design': 'ENGINEERED IN GERMANY',
    'blog.title': 'The Detailing Journal',
    'blog.desc': 'Master the art of surface perfection with our professional guides.'
  },
  de: {
    'nav.home': 'Home',
    'nav.catalog': 'Katalog',
    'nav.journal': 'Magazin',
    'nav.about': 'Über uns',
    'nav.shopNow': 'Jetzt Shoppen',
    'seo.home.title': 'CarWipes.de | Profi Autopflege, Mikrofasertuch & Auto Reinigungstücher',
    'seo.home.desc': 'Entdecken Sie die besten Autoreinigungstücher, Mikrofasertücher und Detailing-Zubehör im Test. Kuratierte Amazon-Empfehlungen für die professionelle Lackpflege und Autoaufbereitung in Deutschland.',
    'seo.catalog.title': 'Autopflege Katalog | Profi Mikrofasertücher & Reinigungswipes | CarWipes.de',
    'seo.catalog.desc': 'Durchsuchen Sie unsere Auswahl an Profi-Autopflegeprodukten von SONAX, Meguiar\'s und Koch Chemie. Hochwertige Trockentücher für Enthusiasten und Profis.',
    'seo.blog.title': 'Detailing Magazin | Autopflege Tipps & Ratgeber | CarWipes.de',
    'seo.blog.desc': 'Experten-Ratgeber zur Autoreinigung und Lackpflege. Erfahren Sie alles über GSM, Lackschutz und die besten Mikrofasertücher für perfekten Glanz.',
    'seo.about.title': 'Über uns | Die Mission von CarWipes.de',
    'seo.about.desc': 'Erfahren Sie, warum wir CarWipes.de gegründet haben und wie wir das beste Autopflege-Equipment von Amazon für den deutschen Markt kuratieren.',
    'hero.badge': 'Detailing Standard 2026',
    'hero.title.1': 'Kompromissloses',
    'hero.title.2': 'Detailing Equipment.',
    'hero.desc': 'Schluss mit Supermarkt-Tüchern. Wir kuratieren Profi-Mikrofasertücher, Trockentücher und Reinigungswipes von den vertrauenswürdigsten Marken für Ihre Fahrzeugpflege.',
    'hero.browse': 'Equipment Entdecken',
    'hero.happyUsers': '4.000+ zufriedene Detailer',
    'hero.searchPlaceholder': 'Suche z.B. "1200 GSM Tuch"',
    'hero.editorChoice': 'Redaktionstipp',
    'hero.editorQuote': 'Lackschonend & Saugstark',
    'home.trustBar': 'Vertraut von Detailing-Werkstätten in ganz Deutschland',
    'cat.microfibre': 'Mikrofasertücher',
    'cat.interior': 'Innenraum',
    'cat.drying': 'Trocknung',
    'cat.sets': 'Pflegesets',
    'cat.items': 'Ausgewählte Artikel',
    'home.categories.title.1': 'Entdecke das',
    'home.categories.title.2': 'Ecosystem',
    'home.categories.desc': 'Spezialisierte Werkzeuge für jede Phase Ihres Detailing-Workflows.',
    'home.categories.discover': 'Kategorie ansehen',
    'home.expert.badge': 'Aus dem Magazin',
    'home.expert.readNow': 'Vollständigen Guide lesen',
    'trending.badge': 'Aktuell Beliebt',
    'trending.title': 'Favoriten der Community',
    'trending.viewAll': 'Gesamtes Sortiment',
    'value.title': 'Warum CarWipes.de?',
    'value.desc': 'Wir sind kein gewöhnlicher Shop, sondern ein Qualitätsfilter für Autopflege. Jedes Produkt wird nach Lackschonung und Leistung handverlesen.',
    'value.q1.title': 'Lackschutz-Garantie',
    'value.q1.desc': 'Nur randlose oder seideneinfasste Tücher schaffen es in unsere Auswahl für kratzerfreie Aufbereitung.',
    'value.q2.title': 'Geprüfte GSM-Werte',
    'value.q2.desc': 'Wir prüfen die Dichte für maximale Saugkraft beim Trocknen Ihres Fahrzeugs.',
    'value.prime.title': 'Prime Blitzversand',
    'value.prime.desc': 'Abwicklung über Amazon Deutschland für zuverlässige und schnelle Lieferung.',
    'value.support.title': 'Experten-Auswahl',
    'value.support.desc': 'Kuratiert von Enthusiasten mit jahrelanger Praxiserfahrung in der Autoaufbereitung.',
    'cta.title': 'Bereit für den perfekten Glanz?',
    'cta.desc': 'Schließen Sie sich tausenden Enthusiasten an, die unseren Empfehlungen für ihre Detailing-Rituale vertrauen.',
    'cta.button': 'Zum Gesamten Katalog',
    'product.bestseller': 'Top Pick',
    'product.checkPrice': 'Preise prüfen',
    'product.buyOnAmazon': 'Preise prüfen',
    'product.details': 'Vollständiger Test',
    'product.kitTitle': 'Vervollständigen Sie Ihr Detailing-Kit',
    'product.kitDesc': 'Von Profis empfohlene Ergänzungen',
    'product.techTitle': 'Technische Details',
    'product.verdict': 'Das Detailing-Fazit',
    'product.pros': 'Kernstärken',
    'product.cons': 'Überlegungen',
    'product.bestFor': 'Ideale Anwendung',
    'product.partnerTitle': 'Offizieller Partner-Link',
    'product.partnerDesc': 'Dieser Artikel wird über unser verifiziertes Partnernetzwerk für garantierte Originalität bezogen.',
    'catalog.title': 'Profi-Katalog',
    'catalog.desc': 'Entwickelt für Fahrzeugbesitzer, die ihr Auto als Investment sehen. Filtern Sie durch unsere Auswahl an Mikrofasertüchern.',
    'catalog.brands': 'Marken-Filter',
    'catalog.showing': 'Anzeige',
    'catalog.results': 'Produkten',
    'catalog.noMatches': 'Keine Produkte gefunden',
    'catalog.clearFilters': 'Filter zurücksetzen',
    'footer.mission': 'Ihre Anlaufstelle für professionelle Werkzeuge zur Fahrzeugpflege.',
    'footer.rights': 'AUTORISIERTER AMAZON PARTNER',
    'footer.design': 'ENGINEERED IN GERMANY',
    'blog.title': 'Das Detailing Magazin',
    'blog.desc': 'Meistern Sie die Kunst der Oberflächenperfektion mit unseren Profi-Guides.'
  }
};