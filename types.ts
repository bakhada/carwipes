
import React from 'react';

export interface Product {
  id: string;
  name: string;
  link: string;
  image: string;
  category: 'Microfibre' | 'Wet Wipes' | 'Specialist' | 'Multi-purpose';
  description: string;
  priceEstimate?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  summary: string;
  content: React.ReactNode;
  date: string;
  image: string;
  type: 'Top 3' | 'Top 5' | 'Guide';
}

// FIX: Added ChatMessage interface to resolve the import error in AIAdvisor.tsx
export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

export enum AppSection {
  Home = 'home',
  Products = 'products',
  Guide = 'guide',
  Blog = 'blog',
  About = 'about',
  Contact = 'contact',
  Privacy = 'privacy',
  Terms = 'terms',
  Impressum = 'impressum'
}
