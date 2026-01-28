// German SEO Keywords & Optimization Guide for CarWipes.de
// Add these keywords to your content for better German search rankings

export const germanSeoKeywords = {
  // Main Keywords - High Priority (Volume & Competition)
  mainKeywords: [
    "Mikrofasertücher Auto",
    "Autopflege Mikrofaser",
    "Autoreinigung Tücher",
    "Autopflege Set",
    "Trockentücher Auto",
    "Autotücher kaufen",
    "Detailing Tücher",
    "Autoaufbereitung",
    "Lackpflege Auto",
    "Autopolitur"
  ],

  // Long-tail Keywords - Medium Priority (Lower competition, high intent)
  longtailKeywords: [
    "beste Mikrofasertücher für Auto",
    "hochwertige Autoreinigungstücher",
    "Mikrofasertuch GSM",
    "Mikrofasertücher lackschonend",
    "Autopflege Tücher Test",
    "professionelle Trockentücher Auto",
    "Detailing Tücher Set",
    "Auto Innenraum Reinigung Tücher",
    "Lederpflege Auto Tücher",
    "Felgen Reinigung Tücher"
  ],

  // Product-specific Keywords
  productKeywords: {
    microfibre: [
      "Mikrofasertuch",
      "Mikrofaser Tuch",
      "Trockentuch Auto",
      "Detailing Cloth",
      "Polishing cloth",
      "Waxing towel"
    ],
    interior: [
      "Innenraum Reinigungstücher",
      "Ledertücher Auto",
      "Polymer Reiniger Tücher",
      "Britische Innenraum Tücher",
      "Dashboard Reinigung"
    ],
    drying: [
      "Trockentücher",
      "super Trockentuch",
      "XXL Trockentuch",
      "Waffle Weave Towel",
      "Drying towel heavy duty"
    ]
  },

  // Blog Keywords - High Intent Content
  blogKeywords: [
    "Mikrofasertuch richtig waschen",
    "GSM Wert Mikrofasertücher",
    "Autopflege Anleitung Anfänger",
    "professionelle Lackpflege",
    "Keramikbeschichtung Pflege",
    "Felgen Detaillierung Anleitung",
    "Lederpflege Auto Schritt für Schritt",
    "Streifenfreie Scheibenreinigung Auto",
    "Innenraum Restaurierung Auto"
  ],

  // Location-based Keywords (if expanding)
  locationKeywords: [
    "Autopflege Deutschland",
    "Detailing Zubehör Deutschland",
    "Online Shop Autoreinigung DE",
    "Mikrofasertücher Hamburg",
    "Auto Zubehör Berlin"
  ],

  // Seasonal Keywords
  seasonalKeywords: [
    "Auto Winterpflege",
    "Auto Frühjahrskur",
    "Auto Detailing Winter",
    "Autopflege Sommer"
  ]
};

// German Page Titles & Descriptions
export const germanPageSeo = {
  home: {
    title: "CarWipes.de | Premium Mikrofasertücher & Autopflege für Profis",
    description: "Entdecken Sie kuratierte Mikrofasertücher, Autopflege-Sets und professionelle Detailing-Zubehör. Lackschonend, hochwertig und von Experten geprüft.",
    keywords: "Mikrofasertücher, Autopflege, Detailing, Trockentücher, Autoreinigung"
  },
  
  products: {
    title: "Autopflege Katalog | Premium Mikrofasertücher kaufen | CarWipes.de",
    description: "Professionelle Mikrofasertücher, Trockentücher und Autopflege-Zubehör von SONAX, Meguiar's und mehr. Jedes Produkt auf Langlebigkeit und Lackschonung getestet.",
    keywords: "Mikrofasertücher kaufen, Autopflege Zubehör, Detailing Set, hochwertige Trockentücher"
  },

  blog: {
    title: "Autopflege Ratgeber & Detailing Guides | CarWipes.de Blog",
    description: "Kostenlose Anleitungen: Wie waschen Sie Mikrofasertücher? Was bedeutet GSM? Professionelle Tipps zur Lackpflege, Keramikbeschichtung und Innenraum-Aufbereitung.",
    keywords: "Autopflege Ratgeber, Detailing Anleitung, Lackpflege Tipps, Auto Reinigung"
  },

  about: {
    title: "Über CarWipes.de | Unsere Mission für perfekte Autorenpflege",
    description: "Warum CarWipes.de gegründet wurde und wie wir die besten Autopflege-Produkte für Deutschland kuratieren. Expertenwissen aus jahrelanger Detailing-Erfahrung.",
    keywords: "Über CarWipes, Autopflege Experte, Detailing Zubehör Spezialist"
  },

  contact: {
    title: "Kontaktieren Sie uns | CarWipes.de Support",
    description: "Haben Sie Fragen zu Autopflege oder Detailing? Kontaktieren Sie unser Expertenteam für Beratung zu Mikrofasertüchern und Autopflege-Produkten.",
    keywords: "Kontakt CarWipes, Autopflege Beratung, Detailing Support"
  }
};

// Internal Linking Strategy for German Content
export const germanInternalLinks = {
  blog_to_products: [
    {
      blog: "Bester Mikrofaser Leitfaden",
      products: ["1200 GSM Trockentücher", "Edgeless Polishing Cloths", "Mikrofaser Sets"]
    },
    {
      blog: "Keramikbeschichtung Wartung",
      products: ["Keramik-sichere Tücher", "Detailing Spray"] 
    },
    {
      blog: "Innenraum Restaurierung",
      products: ["Lederpflege Sets", "Kunststoff Reiniger", "Mikrofaser Innenraum Tücher"]
    }
  ]
};

// German Language Hreflang Strategy
export const hreflangTags = {
  // English home
  en_home: {
    href: "https://carwipes.de/?lang=en",
    hreflang: "en",
    rel: "alternate"
  },
  // German home
  de_home: {
    href: "https://carwipes.de/?lang=de",
    hreflang: "de",
    rel: "alternate"
  },
  // German blog
  de_blog: {
    href: "https://carwipes.de/blog?lang=de",
    hreflang: "de",
    rel: "alternate"
  }
};

// German Meta Keywords by Category
export const germanCategoryKeywords = {
  "Mikrofasertücher": [
    "Mikrofasertücher GSM",
    "Mikrofaser Reinigungstücher",
    "hochwertige Mikrofasertücher",
    "Mikrofasertücher Test",
    "beste Mikrofasertücher",
    "Mikrofasertücher günstiger",
    "waffle weave Tücher"
  ],
  "Trockentücher": [
    "Auto Trockentücher",
    "XXL Trockentuch",
    "super saugfähige Trockentücher",
    "Trockentücher Auto Test",
    "hochwertige Trockentücher",
    "Trockentuch Mikrofaser"
  ],
  "Innenraum": [
    "Innenraum Reinigungstücher",
    "Kunststoff Pflege Tücher",
    "Lederpflege Tücher",
    "Armaturenbrett Reinigung"
  ],
  "Sets": [
    "Autopflege Set",
    "Detailing Set",
    "Mikrofasertücher Set",
    "Autopflege Starterpaket"
  ]
};

// Schema.org Markup for German Content
export const germanSchemaMarkup = {
  breadcrumbs: {
    de: [
      { name: "Startseite", url: "https://carwipes.de/" },
      { name: "Katalog", url: "https://carwipes.de/products" },
      { name: "Mikrofasertücher", url: "https://carwipes.de/products?category=microfibre" }
    ]
  },
  
  faqSchema: {
    de: [
      {
        question: "Was ist GSM bei Mikrofasertüchern?",
        answer: "GSM steht für Gramm pro Quadratmeter und gibt die Dichte des Tuchgewebes an. Höhere GSM-Werte bedeuten mehr Saugkraft."
      },
      {
        question: "Wie wasche ich Mikrofasertücher richtig?",
        answer: "Verwenden Sie 40-60°C warmes Wasser, kein Weichspüler, und hängen Sie sie zum Trocknen auf. Niemals in den Trockner!"
      },
      {
        question: "Sind die Tücher lackschonend?",
        answer: "Ja, wir wählen nur edgeless oder seideneinfasste Tücher aus, die Ihre Lacke nicht beschädigen."
      }
    ]
  }
};

export default {
  germanSeoKeywords,
  germanPageSeo,
  germanInternalLinks,
  hreflangTags,
  germanCategoryKeywords,
  germanSchemaMarkup
};
