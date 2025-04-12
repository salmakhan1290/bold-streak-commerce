
import React from 'react';
import { Link } from 'react-router-dom';

interface Category {
  id: number;
  name: string;
  image: string;
  count: number;
  path: string;
}

const categories: Category[] = [
  {
    id: 1,
    name: "LUXURY HOMES",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=1771&auto=format&fit=crop",
    count: 25,
    path: "/category/luxury-homes"
  },
  {
    id: 2,
    name: "CONDOS",
    image: "https://images.unsplash.com/photo-1669071192880-0a94316e6e09?q=80&w=1770&auto=format&fit=crop",
    count: 42,
    path: "/category/condos"
  },
  {
    id: 3,
    name: "APARTMENTS",
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=1770&auto=format&fit=crop",
    count: 38,
    path: "/category/apartments"
  },
  {
    id: 4,
    name: "FAMILY HOMES",
    image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=1770&auto=format&fit=crop",
    count: 56,
    path: "/category/family-homes"
  },
  {
    id: 5,
    name: "WATERFRONT",
    image: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?q=80&w=1932&auto=format&fit=crop",
    count: 18,
    path: "/category/waterfront"
  },
  {
    id: 6,
    name: "MOUNTAIN VIEW",
    image: "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?q=80&w=1765&auto=format&fit=crop",
    count: 22,
    path: "/category/mountain-view"
  }
];

const PropertyCategories = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-brand-navy font-heading text-3xl md:text-4xl font-bold mb-8 text-center">
          BROWSE BY <span className="text-brand-red">CATEGORY</span>
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {categories.map((category) => (
            <Link 
              key={category.id} 
              to={category.path}
              className="group relative overflow-hidden rounded-lg aspect-square hover-scale"
            >
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url(${category.image})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              
              <div className="absolute bottom-0 left-0 p-4 w-full">
                <h3 className="text-white font-heading text-sm md:text-base font-bold mb-1">{category.name}</h3>
                <p className="text-gray-300 text-xs mb-2">{category.count} Properties</p>
                <div className="flex items-center">
                  <span className="text-brand-red text-xs font-medium tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    VIEW PROPERTIES
                  </span>
                  <div className="ml-2 h-px w-0 bg-brand-red group-hover:w-16 transition-all duration-300" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PropertyCategories;
