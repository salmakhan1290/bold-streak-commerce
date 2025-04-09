
import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  isNew: boolean;
  category: string;
  path: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "Performance Running Jacket",
    price: 120,
    image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?q=80&w=2005&auto=format&fit=crop",
    isNew: true,
    category: "Men",
    path: "/products/performance-running-jacket"
  },
  {
    id: 2,
    name: "Lightweight Training Shorts",
    price: 65,
    image: "https://images.unsplash.com/photo-1562183241-840b8af0721e?q=80&w=1965&auto=format&fit=crop",
    isNew: true,
    category: "Women",
    path: "/products/lightweight-training-shorts"
  },
  {
    id: 3,
    name: "Urban Street Hoodie",
    price: 89,
    image: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=1972&auto=format&fit=crop",
    isNew: true,
    category: "Men",
    path: "/products/urban-street-hoodie"
  },
  {
    id: 4,
    name: "Performance Sports Bra",
    price: 49,
    image: "https://images.unsplash.com/photo-1648368283135-e5dcbf69f420?q=80&w=1972&auto=format&fit=crop",
    isNew: true,
    category: "Women",
    path: "/products/performance-sports-bra"
  },
  {
    id: 5,
    name: "Graphic T-Shirt",
    price: 35,
    image: "https://images.unsplash.com/photo-1583744946564-b52d01a7f418?q=80&w=1974&auto=format&fit=crop",
    isNew: true,
    category: "Kids",
    path: "/products/graphic-t-shirt"
  },
  {
    id: 6,
    name: "Basketball Sneakers",
    price: 129,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2070&auto=format&fit=crop",
    isNew: true,
    category: "Men",
    path: "/products/basketball-sneakers"
  }
];

const NewArrivals = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-brand-black font-heading text-3xl md:text-4xl font-bold">NEW ARRIVALS</h2>
          <Link 
            to="/products/new" 
            className="text-brand-black font-medium hover:text-brand-yellow flex items-center gap-1 transition-colors"
          >
            View All
            <span className="text-xl font-bold">→</span>
          </Link>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6 overflow-x-auto pb-4">
          {products.map((product) => (
            <div key={product.id} className="group relative">
              <Link to={product.path} className="block">
                <div className="relative rounded-lg overflow-hidden bg-gray-100 aspect-[3/4]">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />
                  
                  {product.isNew && (
                    <div className="absolute top-2 left-2 bg-brand-yellow text-brand-black text-xs font-bold px-2 py-1 rounded">
                      NEW
                    </div>
                  )}
                  
                  <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <button 
                    className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-brand-black text-brand-white rounded-full 
                    w-10 h-10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 
                    translate-y-4 group-hover:translate-y-0"
                    aria-label="Add to cart"
                  >
                    <ShoppingBag size={16} />
                  </button>
                </div>
                
                <div className="mt-3">
                  <p className="text-xs text-brand-gray font-medium">{product.category}</p>
                  <h3 className="text-brand-black font-medium mt-1 truncate">{product.name}</h3>
                  <p className="text-brand-black font-bold mt-1">${product.price}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewArrivals;
