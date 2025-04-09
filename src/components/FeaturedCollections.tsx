
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
    name: "RUNNING",
    image: "https://images.unsplash.com/photo-1539795845756-4fadad2905ec?q=80&w=1974&auto=format&fit=crop",
    path: "/collections/running"
  },
  {
    id: 2,
    name: "TRAINING",
    image: "https://images.unsplash.com/photo-1550259979-ed79b48d2a30?q=80&w=1968&auto=format&fit=crop",
    path: "/collections/training"
  },
  {
    id: 3,
    name: "STREET STYLE",
    image: "https://images.unsplash.com/photo-1512374382149-233c42b6a83b?q=80&w=1935&auto=format&fit=crop",
    path: "/collections/street-style"
  },
  {
    id: 4,
    name: "BASKETBALL",
    image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=2090&auto=format&fit=crop",
    path: "/collections/basketball"
  }
];

const FeaturedCollections = () => {
  return (
    <section className="py-16 bg-brand-black">
      <div className="container mx-auto px-4">
        <h2 className="text-brand-white font-heading text-3xl md:text-4xl font-bold mb-8 text-center">
          FEATURED <span className="text-brand-yellow">COLLECTIONS</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {collections.map((collection) => (
            <Link 
              key={collection.id} 
              to={collection.path}
              className="group relative overflow-hidden rounded-lg h-64 md:h-80 hover-scale"
            >
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url(${collection.image})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              
              <div className="absolute bottom-0 left-0 p-6 w-full">
                <h3 className="text-brand-white font-heading text-xl font-bold mb-2">{collection.name}</h3>
                <div className="flex items-center">
                  <span className="text-brand-yellow text-sm font-medium tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-300">
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
