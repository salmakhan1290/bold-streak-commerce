
import React from 'react';
import { Link } from 'react-router-dom';

interface Collection {
  id: number;
  name: string;
  image: string;
  path: string;
}

const collections: Collection[] = [
  {
    id: 1,
    name: "FORMAL SHIRTS",
    image: "https://images.unsplash.com/photo-1607345366928-199ea26cfe3e?q=80&w=1974&auto=format&fit=crop",
    path: "/collections/formal-shirts"
  },
  {
    id: 2,
    name: "CASUAL SHIRTS",
    image: "https://images.unsplash.com/photo-1563630423918-b58f07336ac5?q=80&w=1974&auto=format&fit=crop",
    path: "/collections/casual-shirts"
  },
  {
    id: 3,
    name: "T-SHIRTS",
    image: "https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?q=80&w=1974&auto=format&fit=crop",
    path: "/collections/t-shirts"
  },
  {
    id: 4,
    name: "JEANS",
    image: "https://images.unsplash.com/photo-1542272604-787c3835535d?q=80&w=1926&auto=format&fit=crop",
    path: "/collections/jeans"
  },
  {
    id: 5,
    name: "TROUSERS",
    image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?q=80&w=1974&auto=format&fit=crop",
    path: "/collections/trousers"
  },
  {
    id: 6,
    name: "ACCESSORIES",
    image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=1980&auto=format&fit=crop",
    path: "/collections/accessories"
  }
];

const FeaturedCollections = () => {
  return (
    <section className="py-16 bg-brand-white">
      <div className="container mx-auto px-4">
        <h2 className="text-brand-black font-heading text-3xl md:text-4xl font-bold mb-8 text-center">
          CATEGORY <span className="text-brand-yellow">QUICKLINKS</span>
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {collections.map((collection) => (
            <Link 
              key={collection.id} 
              to={collection.path}
              className="group relative overflow-hidden rounded-lg aspect-square hover-scale"
            >
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url(${collection.image})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              
              <div className="absolute bottom-0 left-0 p-4 w-full">
                <h3 className="text-brand-white font-heading text-sm md:text-base font-bold mb-2">{collection.name}</h3>
                <div className="flex items-center">
                  <span className="text-brand-yellow text-xs font-medium tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    SHOP NOW
                  </span>
                  <div className="ml-2 h-px w-0 bg-brand-yellow group-hover:w-16 transition-all duration-300" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCollections;
