
export interface Product {
  id: string;
  name: string;
  link: string;
  image: string;
  slug: string;
  brand: string;
  description?: string;
}

export interface Article {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  slug: string;
  date: string;
  image: string;
}
