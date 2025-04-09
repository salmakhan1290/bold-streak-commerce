
import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Star, ArrowRight } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  rating: number;
  reviewCount: number;
  category: string;
  path: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "Classic White Formal Shirt",
    price: 799,
    image: "https://images.unsplash.com/photo-1603252109303-2751441dd157?q=80&w=1974&auto=format&fit=crop",
    rating: 4.8,
    reviewCount: 42,
    category: "Formal",
    path: "/products/classic-white-formal-shirt"
  },
  {
    id: 2,
    name: "Slim Fit Black Denim",
    price: 1299,
    image: "https://images.unsplash.com/photo-1519058082700-08a0b56da9b4?q=80&w=1974&auto=format&fit=crop",
    rating: 4.7,
    reviewCount: 36,
    category: "Jeans",
    path: "/products/slim-fit-black-denim"
  },
  {
    id: 3,
    name: "Premium Cotton T-Shirt",
    price: 449,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1780&auto=format&fit=crop",
    rating: 4.9,
    reviewCount: 51,
    category: "T-Shirts",
    path: "/products/premium-cotton-t-shirt"
  },
  {
    id: 4,
    name: "Classic Fit Blazer",
    price: 2699,
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1771&auto=format&fit=crop",
    rating: 4.6,
    reviewCount: 28,
    category: "Formal",
    path: "/products/classic-fit-blazer"
  },
  {
    id: 5,
    name: "Casual Checkered Shirt",
    price: 699,
    image: "https://images.unsplash.com/photo-1561339429-d5da4e6dbe54?q=80&w=1974&auto=format&fit=crop",
    rating: 4.5,
    reviewCount: 34,
    category: "Casual",
    path: "/products/casual-checkered-shirt"
  },
  {
    id: 6,
    name: "Brown Leather Belt",
    price: 549,
    image: "https://images.unsplash.com/photo-1603252109612-24fa03d38f8e?q=80&w=1974&auto=format&fit=crop",
    rating: 4.7,
    reviewCount: 26,
    category: "Accessories",
    path: "/products/brown-leather-belt"
  }
];

const BestSellers = () => {
  const isMobile = useIsMobile();
  const displayProducts = isMobile ? products.slice(0, 4) : products;
  
  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-6 md:mb-8">
          <h2 className="text-brand-black font-heading text-2xl md:text-3xl lg:text-4xl font-bold">CUSTOMER FAVORITES</h2>
          <Link 
            to="/bestsellers" 
            className="text-brand-black font-medium hover:text-brand-yellow flex items-center gap-1 transition-colors"
          >
            View All
            <span className="text-xl font-bold">→</span>
          </Link>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {displayProducts.map((product) => (
            <div key={product.id} className="group relative bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <Link to={product.path} className="block">
                <div className="relative aspect-square overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />
                  
                  <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <button 
                    className="absolute bottom-4 right-4 bg-brand-yellow text-brand-black rounded-full 
                    w-10 h-10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 
                    transform translate-y-4 group-hover:translate-y-0"
                    aria-label="Add to cart"
                  >
                    <ShoppingBag size={16} />
                  </button>
                </div>
                
                <div className="p-4">
                  <div className="flex items-center mb-2">
                    <div className="flex text-brand-yellow">
                      <Star size={14} fill="currentColor" stroke="none" />
                      <Star size={14} fill="currentColor" stroke="none" />
                      <Star size={14} fill="currentColor" stroke="none" />
                      <Star size={14} fill="currentColor" stroke="none" />
                      <Star size={14} fill="currentColor" stroke="none" className={product.rating < 4.8 ? 'opacity-50' : ''} />
                    </div>
                    <span className="text-xs text-gray-500 ml-1">({product.reviewCount})</span>
                  </div>
                  <p className="text-xs text-brand-gray font-medium">{product.category}</p>
                  <h3 className="text-brand-black font-medium mt-1 truncate">{product.name}</h3>
                  <p className="text-brand-black font-bold mt-1">₹{product.price}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-8 md:mt-10">
          <Link 
            to="/bestsellers" 
            className="inline-flex items-center bg-brand-black text-white px-5 py-2.5 md:px-6 md:py-3 rounded-md font-medium 
            hover:bg-brand-dark-gray transition-colors duration-300 group"
          >
            SEE ALL BEST SELLERS
            <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BestSellers;
