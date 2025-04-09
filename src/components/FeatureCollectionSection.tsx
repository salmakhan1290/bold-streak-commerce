
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  path: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "Premium Cotton Formal Shirt",
    price: 999,
    image: "https://images.unsplash.com/photo-1621072156002-e2fccdc0b176?q=80&w=1974&auto=format&fit=crop",
    category: "Formal",
    path: "/products/premium-cotton-formal-shirt"
  },
  {
    id: 2,
    name: "Classic Fit Blazer",
    price: 2499,
    image: "https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?q=80&w=1974&auto=format&fit=crop",
    category: "Formal",
    path: "/products/classic-fit-blazer"
  },
  {
    id: 3,
    name: "Slim Fit Formal Trousers",
    price: 1299,
    image: "https://images.unsplash.com/photo-1594938374196-d2fd21eb0526?q=80&w=1935&auto=format&fit=crop",
    category: "Formal",
    path: "/products/slim-fit-formal-trousers"
  },
  {
    id: 4,
    name: "Casual Denim Shirt",
    price: 899,
    image: "https://images.unsplash.com/photo-1589310243389-96a5483213a8?q=80&w=1974&auto=format&fit=crop",
    category: "Casual",
    path: "/products/casual-denim-shirt"
  },
  {
    id: 5,
    name: "Relaxed Fit Chinos",
    price: 999,
    image: "https://images.unsplash.com/photo-1584865288642-42078afe6942?q=80&w=1960&auto=format&fit=crop",
    category: "Casual",
    path: "/products/relaxed-fit-chinos"
  },
  {
    id: 6,
    name: "Graphic Print Casual T-Shirt",
    price: 599,
    image: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?q=80&w=1974&auto=format&fit=crop",
    category: "Casual",
    path: "/products/graphic-print-casual-t-shirt"
  }
];

const FeaturedCollectionSection = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-brand-black font-heading text-3xl md:text-4xl font-bold mb-8 text-center">
          SEASON'S <span className="text-brand-yellow">MUST-HAVES</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <Link 
              key={product.id}
              to={product.path}
              className="group overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative aspect-[4/5]">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <p className="text-white/80 text-sm">{product.category}</p>
                  <h3 className="text-white font-medium text-lg mt-1">{product.name}</h3>
                  <div className="flex justify-between items-center mt-2">
                    <p className="text-brand-yellow font-bold">₹{product.price}</p>
                    <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center text-sm">
                      View Details
                      <ArrowRight size={14} className="ml-1" />
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <Link 
            to="/collections/seasons-must-haves" 
            className="inline-flex items-center bg-brand-black text-white px-6 py-3 rounded-md font-medium 
            hover:bg-brand-dark-gray transition-colors duration-300 group"
          >
            EXPLORE FULL COLLECTION
            <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCollectionSection;
