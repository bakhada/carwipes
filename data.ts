
import { Product, Article } from './types';

const generateSlug = (name: string) => name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

const extractBrand = (name: string) => {
  const brands = [
    'SONAX', 'Armor All', 'NIGRIN', 'Vileda', "Meguiar's", 'Nuke Guys', 
    'Liquid Elements', 'Poliboy', 'Meguiars', 'Spontex', 'Dr. Wack', 
    'HOMEXCEL', 'detailmate', 'WHOOSH!', 'HP-Autozubehör', 'Muc-Off', 
    'Ha-Ra', 'eG', 'GENTLEMONKEYS', 'Koch Chemie'
  ];
  const upper = name.toUpperCase();
  for (const brand of brands) {
    if (upper.includes(brand.toUpperCase())) return brand;
  }
  return 'Premium Brand';
};

export const products: Product[] = [
  // --- SET 1 & 2 ---
  {
    name: "SONAX Microfibre Cloth Panel + Inner (Pack of 1) High Quality, Absorbent & Lint-Free for Streak- and Lint-Free Cleaning of Glass, Mirrors, Display and Plastic Surfaces | Item No. 04984000",
    link: "https://amzn.to/4pGIn7l",
    image: "https://m.media-amazon.com/images/I/61F8GBdK-mL._AC_SL1280_.jpg"
  },
  {
    name: "Armor All Wipes, Pack of 20 GAA87020GE, antibacterial and dermatologically tested, Satin",
    link: "https://amzn.to/49l9uQt",
    image: "https://m.media-amazon.com/images/I/61hS5xgUCbL._AC_SL1500_.jpg"
  },
  {
    name: "NIGRIN Plastic care wipes, cleans, nourishes and protects, suitable for all plastic and vinyl surfaces in the vehicle interior, matt, 30 cloths",
    link: "https://amzn.to/49WMOoP",
    image: "https://m.media-amazon.com/images/I/61r5UkNp7LL._AC_SL1500_.jpg"
  },
  {
    name: "Vileda Microfibre Multi-Purpose Cloths Colours, Cleaning Cloths for Dry and Wet Use, 100% Microfibre Material, 30 x 30 cm, Multicoloured, Maxi Pack, Pack of 14",
    link: "https://amzn.to/49zjDYm",
    image: "https://m.media-amazon.com/images/I/71sCYaE5zoL._AC_SL1500_.jpg"
  },
  {
    name: "Spontex Mikrofasertücher für Reinigungsaufgaben | 16 Reinigungstücher der Mikrofaser-Kollektion | Verwendung als Staubtücher und Küchentücher | 30 x 30 cm | 16 Stück",
    link: "https://amzn.to/49iO3PV",
    image: "https://m.media-amazon.com/images/I/91wrjTM5y-L._AC_SL1500_.jpg"
  },
  {
    name: "Vileda Colours Microfibre Cloths, Multipack Multipack, 30 x 30 cm, Multicoloured to Distinguish the Areas of Application, Pack of 7",
    link: "https://amzn.to/4qSFwcp",
    image: "https://m.media-amazon.com/images/I/61vSHkFfJqL._AC_SL1500_.jpg"
  },
  {
    name: "Poliboy Wet Wipes / Cleaning Wipes, Various Types and Pack Sizes, Made in Germany",
    link: "https://amzn.to/49SvkuA",
    image: "https://m.media-amazon.com/images/I/71Uc+5Tm18L._AC_SL1500_.jpg"
  },
  {
    name: "Vileda Microfibre Universal Multi-Purpose Cloth 116359",
    link: "https://amzn.to/49ufqFy",
    image: "https://m.media-amazon.com/images/I/712Iedz6ntL._AC_SL1200_.jpg"
  },
  {
    name: "Vileda Actifibre Soft Universal Microfibre Cloths, Absorbent & Streak-Free Cleaning Cloths for All Smooth Surfaces, Washable & Reusable, Pink & Grey, Pack of 10",
    link: "https://amzn.to/49SvD8I",
    image: "https://m.media-amazon.com/images/I/81ugbXrf6BL._AC_SL1500_.jpg"
  },
  {
    name: "Nuke Guys Gamma Dryer S – Ultra Absorbent Handy Drying Cloth 1400 gsm Grey 40 x 40 cm – Lint-Free Rounded Soft Fibres Scratch-Free – Premium Microfibre Cloth for Cars, Motorcycles, Bicycles",
    link: "https://amzn.to/4sKYJi3",
    image: "https://m.media-amazon.com/images/I/91aUiP4twwL._AC_SL1500_.jpg"
  },
  {
    name: "SONAX 04161000 microfibre cloth",
    link: "https://amzn.to/3LrzsIS",
    image: "https://m.media-amazon.com/images/I/61da8HZynZL._AC_SL1000_.jpg"
  },
  {
    name: "Vileda Professional PVA Microfibre Cloth, All-Purpose Cleaning Sponge, Shiny Streak-free Results, Synthetic Chamois, Ideal for Hard Surfaces, Pack of 5, Green",
    link: "https://amzn.to/4aTxuLH",
    image: "https://m.media-amazon.com/images/I/71sIBKLTjrS._AC_SX569_.jpg"
  },
  {
    name: "Meguiar's G3626EU Ultimate Waterless Wash & Wax Dry Wash, 768ml",
    link: "https://amzn.to/3Zf9WJS",
    image: "https://m.media-amazon.com/images/I/71ZHgjwvwWL._AC_SL1500_.jpg"
  },
  {
    name: "SONAX Microfibre Cloth Glass (Pack of 3) Absorbent and Lint-Free for Streak-free Cleanliness of Windows and Glass Surfaces Item No. 04515410",
    link: "https://amzn.to/4qrWleA",
    image: "https://m.media-amazon.com/images/I/91sTHmlu2oL._AC_SL1500_.jpg"
  },
  {
    name: "SONAX Microfibre Dry Cloth Plus (1 piece) in large format for perfect, streak-free drying of vehicles, item no. 04512000",
    link: "https://amzn.to/4qVSUN4",
    image: "https://m.media-amazon.com/images/I/61R1IaNaytL._AC_SL1294_.jpg"
  },
  {
    name: "Armor All Plastic Care Wipes, 30",
    link: "https://amzn.to/3Zg5WZD",
    image: "https://m.media-amazon.com/images/I/61tlkU-Qd9L._AC_SL1500_.jpg"
  },
  {
    name: "SONAX 428200 Microfibre Wash Mitt",
    link: "https://amzn.to/3YCCLQu",
    image: "https://m.media-amazon.com/images/I/71Ol9bDQufL._AC_SL1000_.jpg"
  },
  {
    name: "SONAX Microfibre Cloth Soft Touch (Pack of 3) Powerful Detailing Cloth for Polishes, Seals and the Entire Vehicle Interior Item No. 04510000",
    link: "https://amzn.to/4qrWwXi",
    image: "https://m.media-amazon.com/images/I/61YuZQJV3IL._AC_SL1280_.jpg"
  },
  {
    name: "HOMEXCEL Microfibre Cloths, Pack of 100, Microfibre Cleaning Cloths, Kitchen Tea Towels for Kitchen, Glass, Car, Motorcycle, Window, 30 x 30 cm",
    link: "https://amzn.to/4qRKtlQ",
    image: "https://m.media-amazon.com/images/I/81vYMtWn-iL._AC_SL1500_.jpg"
  },
  {
    name: "Sonax Microfibre Care Pad - 04172000",
    link: "https://amzn.to/4sCEgM7",
    image: "https://m.media-amazon.com/images/I/61Etm-i1Q8L._AC_SL1000_.jpg"
  },
  {
    name: "Dr. Wack A1 All in One Microfibre Cloth Interior & Glass – 40 x 40 cm – Car Cleaning Cloth – Extremely Soft & Absorbent – 100% Lint-Free – Gentle & Streak-free Car Cleaning – High-Quality Car Care",
    link: "https://amzn.to/49jyXtp",
    image: "https://m.media-amazon.com/images/I/71S-BOTfDjL._AC_SL1500_.jpg"
  },
  {
    name: "Nigrin Microfibre Cloth Set",
    link: "https://amzn.to/4pFs2zE",
    image: "https://m.media-amazon.com/images/I/71yL5Lpf-1L._AC_SL1500_.jpg"
  },
  {
    name: "Nigrin",
    link: "https://amzn.to/4jMyB2c",
    image: "https://m.media-amazon.com/images/I/510XryfwanS._AC_SL1280_.jpg"
  },
  {
    name: "Chamois, 60 x 40 cm Car Drying Cloth, Leather Cloth, Car Leather Drying Cloth, Soft Car Cleaning Cloths, Very Absorbent for Car Care, Window Mirror",
    link: "https://amzn.to/49l0wmi",
    image: "https://m.media-amazon.com/images/I/71fS6WWdT3L._AC_SL1500_.jpg"
  },
  {
    name: "Meguiar's Supreme Shine Microfibre Towel",
    link: "https://amzn.to/49zpWv0",
    image: "https://m.media-amazon.com/images/I/71lar3GYHRL._AC_SX425_.jpg"
  },
  {
    name: "detailmate Car Microfibre Cloths 40 x 40 550 GSM Rimless and Gentle on Paint, 10 x Car Care Microfibre Cloth for Interior, Paint, Rims, Soft Cloth Cleaning Cloth Polishing Cloth",
    link: "https://amzn.to/49uRZMd",
    image: "https://m.media-amazon.com/images/I/91u+s8eb-xL._AC_SL1500_.jpg"
  },
  {
    name: "SONAX Windscreen Cleaning Cloths (Pack of 10) for Quick, Easy and Streak-Free Cleaning of All Glass and Mirror Surfaces, Item No. 04150000",
    link: "https://amzn.to/4qjOsHV",
    image: "https://m.media-amazon.com/images/I/61on4biWhBL._AC_SL1280_.jpg"
  },
  {
    name: "SONAX Polishing Fleece Cloths (Pack of 15) in Fluffy Soft Quality for a Glossy Paint Result Item No. 04222000",
    link: "https://amzn.to/4pNipiE",
    image: "https://m.media-amazon.com/images/I/71ZMTbrIhaL._AC_SL1500_.jpg"
  },
  // --- SET 3 ---
  {
    name: "Meguiar's Wash Mitt",
    link: "https://amzn.to/4pxIpOD",
    image: "https://m.media-amazon.com/images/I/71BGNFU4OLL._AC_SL1500_.jpg"
  },
  {
    name: "WHOOSH! WHWIPES70 Screen Shine Antimicrobial Wipes with Mini Cloth (Pack of 70)",
    link: "https://amzn.to/4qQIJZN",
    image: "https://m.media-amazon.com/images/I/71+kMUwmcZL._AC_SL1500_.jpg"
  },
  {
    name: "HP-Autozubehör 71050 Polishing Cloth Dispenser Pack 50STCK",
    link: "https://amzn.to/49kll19",
    image: "https://m.media-amazon.com/images/I/71z0FgsFH8L._AC_SL1500_.jpg"
  },
  {
    name: "Liquid Elements Car Drying Cloth Orange Baby 800 GSM 40 x 60 cm - Soft Microfibre Cloth for Car Care - Extremely Absorbent, Lint-Free & Gentle on Paint (Pack of 2)",
    link: "https://amzn.to/4qUnEOr",
    image: "https://m.media-amazon.com/images/I/8168GLo6oML._AC_SL1500_.jpg"
  },
  {
    name: "Nuke Guys XL Chenille Car Wash Mitt - Wash Glove Made of Ultra Soft Microfibres - Microfibre Wash Sponge - For Lint-Free and Scratch-Free Car Wash - Black",
    link: "https://amzn.to/49EcqGF",
    image: "https://m.media-amazon.com/images/I/714FgK6ISiL._AC_SL1500_.jpg"
  },
  {
    name: "SONAX 04161000 microfibre cloth",
    link: "https://amzn.to/4qpBf0c",
    image: "https://m.media-amazon.com/images/I/71yHoCts-EL._AC_SL1500_.jpg"
  },
  {
    name: "eG Microfibre Super Absorbent Cloths in Pack of 3 - Top Cleaning Effect Even Without Chemicals",
    link: "https://amzn.to/4sEAcel",
    image: "https://m.media-amazon.com/images/I/81KT4XbZfFL._AC_SL1500_.jpg"
  },
  {
    name: "Meguiar's X1905EU Supreme Microfibre Drying Towel, Extra Large",
    link: "https://amzn.to/4sEga3G",
    image: "https://m.media-amazon.com/images/I/61mNgfPzgQL._AC_SL1000_.jpg"
  },
  {
    name: "Muc-Off Premium Micro Fibre Polishing Cloth",
    link: "https://amzn.to/49yG1kR",
    image: "https://m.media-amazon.com/images/I/51cM3OHqpcL._AC_SL1000_.jpg"
  },
  {
    name: "Nigrin Microfibre Cloth Set",
    link: "https://amzn.to/49l0V8i",
    image: "https://m.media-amazon.com/images/I/81h+Dp8683L._AC_SL1500_.jpg"
  },
  {
    name: "Ha-Ra Star Cloth Mini Blue Set of 2 (Colour May Vary) I Microfibre Cloth for Surface Cleaning I Cleaning Cloths with Hem in 25 x 25 cm I High Performance Microfibre I High Cleaning Power",
    link: "https://amzn.to/3NawHMD",
    image: "https://m.media-amazon.com/images/I/71UZybdln8L._AC_SL1500_.jpg"
  },
  // --- SET 4 (LATEST) ---
  {
    name: "Nuke Guys Car Glass Cloths Streak-Free – See Through Glass Cleaning Cloths – Pack of 2 Microfibre Waffle Cloths Window Cloths 35 x 35 cm, 450 GSM",
    link: "https://amzn.to/3YFcJMn",
    image: "https://m.media-amazon.com/images/I/81BI2YEb8wS._AC_SL1500_.jpg"
  },
  {
    name: "detailmate Koch Chemie Refresh Cockpit Care Set 0.5 L Sponge Applicator Soft + Microfibre Cloth Interior Cleaning",
    link: "https://amzn.to/45JEPdd",
    image: "https://m.media-amazon.com/images/I/71+-MemlqBL._AC_SL1500_.jpg"
  },
  {
    name: "detailmate Interior Cleaning Set – KochChemie® Pol Star 1 Litre Made by Kwazar Mercury Super Pro + 360 Degree Spray Bottle 0.5 Litre, Double Action Trigger – Microfibre Cloth 40 x 40 cm",
    link: "https://amzn.to/4pFWJoz",
    image: "https://m.media-amazon.com/images/I/810EW8GdsVL._AC_SL1500_.jpg"
  },
  {
    name: "Poliboy Wet Wipes / Cleaning Wipes, Various Types and Pack Sizes, Made in Germany",
    link: "https://amzn.to/4qUNS3m",
    image: "https://m.media-amazon.com/images/I/61uPeGqk6BL._AC_SL1200_.jpg"
  },
  {
    name: "1x Liquid Elements Silverback dry cloth XL 50 x 80 cm 1200GSM",
    link: "https://amzn.to/4qkXG6Q",
    image: "https://m.media-amazon.com/images/I/71tXAzjyxCL._AC_SL1500_.jpg"
  },
  {
    name: "detailmate Show & Shine Detailer Set: Koch Chemie Allround Quick Shine Finish Spray Bottle 500 ml Microfibre Polishing Cloth 40 x 40 cm, 550 GSM",
    link: "https://amzn.to/49Xmwmn",
    image: "https://m.media-amazon.com/images/I/71fpnVD+NuL._AC_SL1500_.jpg"
  },
  {
    name: "GENTLEMONKEYS Professional car interior cleaner set (500 ml + microfibre cloth and sponge), deep pore cleaning of all materials installed in the vehicle, universal use, biodegradable",
    link: "https://amzn.to/3LyDkHR",
    image: "https://m.media-amazon.com/images/I/819cQ194nEL._AC_SL1500_.jpg"
  },
  {
    name: "2 x Microfibre Cloths Car 40 x 40 cm - Car Polishing Cloth, Car Care, Drying Cloth Microfibre & Coral Fleece, Absorbent & Scratch-Free - Cleaning Cloth for Vehicles, Windows",
    link: "https://amzn.to/3NiiTje",
    image: "https://m.media-amazon.com/images/I/81aQkXHcuKL._AC_SL1500_.jpg"
  },
  {
    name: "detailmate Car Microfibre Cloths 40 x 40 550 GSM Rimless and Gentle on Paint, 10 x Car Care Microfibre Cloth for Interior, Paint, Rims, Soft Cloth Cleaning Cloth Polishing Cloth",
    link: "https://amzn.to/4jMzo3a",
    image: "https://m.media-amazon.com/images/I/91u+s8eb-xL._AC_SL1500_.jpg"
  },
  {
    name: "Liquid Elements - Microfibre Car Care Multi-Purpose Cloths Value Set of 5 Blue - Microfibre Cleaning Cloth 40 x 40 cm - Ultra Microfibre Cloths for Gentle Vehicle Care without Scratches - For All",
    link: "https://amzn.to/3NGUtQk",
    image: "https://m.media-amazon.com/images/I/71eisnT3MLL._AC_SL1500_.jpg"
  }
].map((p, idx) => ({
  ...p,
  id: `prod-${idx}`,
  slug: generateSlug(p.name),
  brand: extractBrand(p.name),
  description: `Experience professional-grade car detailing with this ${extractBrand(p.name)} accessory. Designed for maximum efficiency, it ensures a scratch-free finish and long-lasting cleanliness for your vehicle interior and exterior. Ideal for both enthusiasts and professional detailers.`
}));

export const articles: Article[] = [
  {
    id: 'art-1',
    title: "How to Choose the Best Microfibre Cloth for Your Car",
    excerpt: "Not all microfibre cloths are created equal. Learn about GSM, weave types, and which one to use for paint vs. interior.",
    content: "When it comes to car detailing, your choice of cloth is as important as your choice of wax. Microfibre cloths are rated by GSM (Grams per Square Meter). A higher GSM typically means a thicker, plusher towel better for drying or buffing delicate paintwork, while lower GSM towels are great for glass or rougher interior surfaces...",
    slug: "best-microfibre-cloth-guide",
    date: "2024-05-15",
    image: "https://picsum.photos/seed/car1/800/400"
  },
  {
    id: 'art-2',
    title: "5 Essential Car Wipes for Every Glovebox",
    excerpt: "Quick spill? Dusty dashboard? These 5 wipes will keep your car interior pristine on the go.",
    content: "Maintaining a clean car doesn't always require a bucket and hose. High-quality interior wipes like Armor All or Nigrin provide instant protection and cleaning. We break down the top 5 types you need for plastic, leather, and glass...",
    slug: "essential-car-wipes-list",
    date: "2024-05-20",
    image: "https://picsum.photos/seed/car2/800/400"
  }
];
