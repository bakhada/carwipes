// Quick Reference: German Keywords by Page
// Copy-paste these into your components for immediate SEO boost

// HOME PAGE
export const HOME_PAGE_DE = {
  title: "CarWipes.de | Premium Mikrofasertücher & Autopflege für Profis & Hobby-Detailer",
  description: "Entdecken Sie hochwertige Mikrofasertücher, Trockentücher und Autopflege-Sets von führenden Marken. Alle Produkte sind handverlesen und auf Qualität getestet.",
  h1: "Premium Mikrofasertücher & Autopflege Zubehör für perfekte Autoaufbereitung",
  keywords: ["Mikrofasertücher", "Autopflege", "Detailing Tücher", "Trockentücher Auto"]
};

// PRODUCTS PAGE
export const PRODUCTS_PAGE_DE = {
  title: "Autopflege Katalog | Mikrofasertücher kaufen | Detailing Sets | CarWipes.de",
  description: "Professionelles Autopflege-Zubehör: Mikrofasertücher (GSM 400-1200), Trockentücher, Detailing Sets und Zubehör von SONAX, Meguiar's und mehr.",
  h1: "Unser Autopflege Katalog | Premium Mikrofasertücher & Detailing Zubehör",
  keywords: ["Mikrofasertücher kaufen", "Autopflege Zubehör", "Detailing Set", "professionelle Trockentücher"]
};

// BLOG PAGE
export const BLOG_PAGE_DE = {
  title: "Autopflege Ratgeber & Detailing Blog | Expert Tips für Lackschonung | CarWipes.de",
  description: "Kostenlose Anleitungen zur Autopflege: GSM-Werte erklären, Mikrofasertücher waschen, Keramikbeschichtung pflegen, Innenraum aufbereiten. Tipps von Detailing-Experten.",
  h1: "Autopflege Ratgeber & Detailing Blog",
  keywords: ["Autopflege Ratgeber", "Detailing Anleitung", "Mikrofaserpflege", "Lackpflege"]
};

// BLOG POSTS (German Keywords)
export const BLOG_POSTS_DE = [
  {
    slug: "bester-mikrofaser-leitfaden",
    title: "Die besten Mikrofasertücher 2026 | GSM-Werte erklärt & Test",
    metaDescription: "Welche Mikrofasertücher sind die besten? Erklärung von GSM-Werten, Webart und worauf Sie beim Kauf achten sollten.",
    h1: "Der ultimative Leitfaden zu den besten Mikrofasertüchern",
    keywords: ["Mikrofasertücher Test", "beste Mikrofasertücher", "GSM Wert", "hochwertige Tücher"],
    internalLinks: [
      { text: "400 GSM Mikrofasertücher", url: "/products?category=microfibre&gsm=400" },
      { text: "1200 GSM Trockentücher", url: "/products?category=drying&gsm=1200" },
      { text: "Edgeless Polishing Tücher", url: "/products?type=edgeless" }
    ]
  },
  {
    slug: "mikrofasertuch-richtig-waschen",
    title: "Mikrofasertuch waschen: Die richtige Pflege für lange Lebensdauer",
    metaDescription: "Wie wäscht man Mikrofasertücher richtig? Temperatur, Waschmittel und Trocknungstipps für maximale Langlebigkeit.",
    h1: "So pflegen Sie Ihre Mikrofasertücher richtig",
    keywords: ["Mikrofasertuch waschen", "Pflege Anleitung", "Tuchpflege", "Lebensdauer verlängern"],
    internalLinks: [
      { text: "Hochwertige Mikrofasertücher", url: "/products?category=microfibre" },
      { text: "Tuch-Pflegeprodukte", url: "/products?category=care" }
    ]
  },
  {
    slug: "autopflege-anfaenger-guide",
    title: "Autopflege für Anfänger | Detailing Schritt für Schritt Anleitung",
    metaDescription: "Anfänger-Guide zur Autopflege: Welche Tücher brauche ich? Reihenfolge, Techniken und häufige Fehler vermeiden.",
    h1: "Autopflege für Anfänger: So pflegen Sie Ihr Auto wie ein Profi",
    keywords: ["Autopflege Anfänger", "Detailing Anleitung", "Lackpflege Tipps", "erste Schritte"],
    internalLinks: [
      { text: "Anfänger-Sets", url: "/products?category=sets&tag=beginner" },
      { text: "Weiterführende Anleitungen", url: "/blog?tag=intermediate" }
    ]
  }
];

// PRODUCT CATEGORY PAGES (German)
export const PRODUCT_CATEGORIES_DE = {
  microfibre: {
    title: "Mikrofasertücher | Hochwertige Reinigungstücher für Autopflege",
    description: "Peeling-Tücher, Polier-Tücher und Reinigungstücher aus Mikrofaser. GSM 300-800 für perfekte Ergebnisse ohne Kratzer.",
    pageKeywords: ["Mikrofasertücher", "Reinigungstücher", "hochwertig", "kratzerrei", "professionell"],
    productKeywords: ["Waffle Weave", "GSM 400", "GSM 600", "edgeless", "seidengesäumt", "fusselfrei"]
  },
  drying: {
    title: "Trockentücher Auto | XXL Trockentücher für perfekte Trockenheit",
    description: "Super saugfähige Trockentücher in XXL-Größe. Perfekt für Einfahrten, Lacke und Fenster nach dem Waschen.",
    pageKeywords: ["Trockentücher", "Auto Trockentuch", "XXL", "saugfähig", "hochwertig"],
    productKeywords: ["super absorbent", "GSM 1200", "Waffle Weave", "langlebig"]
  },
  sets: {
    title: "Autopflege Sets | Komplette Detailing Sets für Profis & Anfänger",
    description: "Fertig zusammengestellte Autopflege-Sets: Alles was Sie für perfekte Lackpflege und Detailing brauchen.",
    pageKeywords: ["Autopflege Sets", "Detailing Set", "Komplettset", "System"],
    productKeywords: ["Anfänger Set", "Pro Set", "Komfort Set", "mit Anleitung"]
  },
  interior: {
    title: "Innenraum Pflege Tücher | Leder & Kunststoff Reinigung",
    description: "Spezielle Mikrofasertücher für Leder, Kunststoff und Armaturenbrett. Pflegt ohne Kratzer oder Streifen.",
    pageKeywords: ["Innenraum", "Lederpflege", "Kunststoff", "Dashboard", "Sitze"],
    productKeywords: ["Leder Tücher", "weiches Gewebe", "fusselarm", "Innenraum-Set"]
  }
};

// SCHEMA.ORG MARKUP (German)
export const SCHEMA_MARKUP_DE = {
  faqPage: [
    {
      question: "Was bedeutet GSM bei Mikrofasertüchern?",
      answer: "GSM steht für Gramm pro Quadratmeter und gibt die Dichte und Saugkraft des Tuchs an. Höhere GSM-Werte (800-1200) sind ideal für Trockentücher, niedrigere (300-600) für Polieren und Detailing."
    },
    {
      question: "Sind Mikrofasertücher kratzerrei?",
      answer: "Ja, hochwertige Mikrofasertücher mit edgeless oder seidengesäumten Kanten sind kratzerrei und sicher für Autolacke, wenn sie richtig gepflegt werden."
    },
    {
      question: "Wie oft sollte man Mikrofasertücher waschen?",
      answer: "Nach jedem Gebrauch sollten Sie die Tücher ausspülen. Eine gründliche Wäsche alle 2-3 Anwendungen wird empfohlen. Verwenden Sie 40-60°C warmes Wasser ohne Weichspüler."
    },
    {
      question: "Kann ich verschiedene Tücher zusammen waschen?",
      answer: "Ja, aber trennen Sie dunkle und helle Farben. Waschen Sie Mikrofasertücher separat von Handschuhen oder anderen Materials für beste Ergebnisse."
    }
  ],

  breadcrumb: [
    {
      position: 1,
      name: "Startseite",
      item: "https://carwipes.de/"
    },
    {
      position: 2,
      name: "Produkte",
      item: "https://carwipes.de/products"
    },
    {
      position: 3,
      name: "Mikrofasertücher",
      item: "https://carwipes.de/products?category=microfibre"
    }
  ]
};

// Internal Linking Strategy (German)
export const GERMAN_INTERNAL_LINKS = {
  // From blog posts to products
  blog_to_products: {
    "Bester Mikrofaser Leitfaden": [
      { anchor: "hochwertige Mikrofasertücher kaufen", url: "/products?category=microfibre" },
      { anchor: "professionelle Poliert-Tücher", url: "/products?type=polishing" },
      { anchor: "GSM 600 Standard Tücher", url: "/products?gsm=600" }
    ],
    
    "Mikrofasertuch waschen Anleitung": [
      { anchor: "langlebige Mikrofasertücher", url: "/products?filter=durable" },
      { anchor: "Tuchpflege Sets", url: "/products?category=care-sets" }
    ],

    "Autopflege Anfänger Guide": [
      { anchor: "Anfänger Sets", url: "/products?category=sets&tag=beginner" },
      { anchor: "komplette Autopflege Systeme", url: "/products?category=sets" },
      { anchor: "Trockentücher für Anfänger", url: "/products?category=drying" }
    ]
  },

  // From products to blog
  products_to_blog: {
    "Mikrofasertücher": [
      { anchor: "Mehr über GSM-Werte", url: "/blog/bester-mikrofaser-leitfaden" },
      { anchor: "Richtige Pflege Anleitung", url: "/blog/mikrofasertuch-richtig-waschen" }
    ],

    "Trockentücher": [
      { anchor: "Beste Trockentücher", url: "/blog/bester-mikrofaser-leitfaden#trockentuecher" },
      { anchor: "Autopflege Anfänger", url: "/blog/autopflege-anfaenger-guide" }
    ],

    "Sets": [
      { anchor: "Anfänger Sets erklärt", url: "/blog/autopflege-anfaenger-guide" },
      { anchor: "Professionelle Sets", url: "/blog/bester-mikrofaser-leitfaden" }
    ]
  }
};

// German SEO Checklist (Copy into your content)
export const GERMAN_SEO_CHECKLIST = {
  perPage: [
    "✅ Unique H1 mit Deutsch Keyword",
    "✅ Meta-Beschreibung 155-160 Zeichen",
    "✅ Alt-Text auf alle Bilder (Deutsch)",
    "✅ Mindestens 3 interne Links (Deutsch Ankertexte)",
    "✅ Bold/Strong auf Hauptkeywords (2-3 mal)",
    "✅ Strukturierte Daten (Schema.org)",
    "✅ Länge: 500+ Wörter für Pages, 1500+ für Blog"
  ],
  
  perBlogPost: [
    "✅ H1, H2, H3 mit Keywords",
    "✅ 1500-2500 Wörter",
    "✅ 3-5 Interne Links zu Products",
    "✅ 2 Bilder mit Deutsch Alt-Text",
    "✅ FAQ Section am Ende",
    "✅ Outbound Link zu Authority Site",
    "✅ Meta Description mit Keyword"
  ]
};

export default {
  HOME_PAGE_DE,
  PRODUCTS_PAGE_DE,
  BLOG_PAGE_DE,
  BLOG_POSTS_DE,
  PRODUCT_CATEGORIES_DE,
  SCHEMA_MARKUP_DE,
  GERMAN_INTERNAL_LINKS,
  GERMAN_SEO_CHECKLIST
};
