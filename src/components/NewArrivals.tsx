
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
    name: "Slim Fit Formal Shirt",
    price: 799,
    image: "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?q=80&w=1925&auto=format&fit=crop",
    isNew: true,
    category: "Formal",
    path: "/products/slim-fit-formal-shirt"
  },
  {
    id: 2,
    name: "Casual Linen Shirt",
    price: 649,
    image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?q=80&w=1976&auto=format&fit=crop",
    isNew: true,
    category: "Casual",
    path: "/products/casual-linen-shirt"
  },
  {
    id: 3,
    name: "Graphic Print T-Shirt",
    price: 399,
    image: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=1974&auto=format&fit=crop",
    isNew: true,
    category: "T-Shirts",
    path: "/products/graphic-print-t-shirt"
  },
  {
    id: 4,
    name: "Slim Fit Stretch Jeans",
    price: 1199,
    image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=1974&auto=format&fit=crop",
    isNew: true,
    category: "Jeans",
    path: "/products/slim-fit-stretch-jeans"
  },
  {
    id: 5,
    name: "Formal Trouser",
    price: 899,
    image: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?q=80&w=1974&auto=format&fit=crop",
    isNew: true,
    category: "Formal",
    path: "/products/formal-trouser"
  },
  {
    id: 6,
    name: "Leather Belt",
    price: 499,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=1974&auto=format&fit=crop",
    isNew: true,
    category: "Accessories",
    path: "/products/leather-belt"
  },
  {
    id: 7,
    name: "Classic Polo T-Shirt",
    price: 549,
    image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=1964&auto=format&fit=crop",
    isNew: true,
    category: "T-Shirts",
    path: "/products/classic-polo-t-shirt"
  },
  {
    id: 8,
    name: "Printed Casual Shirt",
    price: 699,
    image: "https://images.unsplash.com/photo-1588359348347-9bc6cbbb689e?q=80&w=1974&auto=format&fit=crop",
    isNew: true,
    category: "Casual",
    path: "/products/printed-casual-shirt"
  }
];

const NewArrivals = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-brand-black font-heading text-3xl md:text-4xl font-bold">JUST DROPPED</h2>
          <Link 
            to="/new-arrivals" 
            className="text-brand-black font-medium hover:text-brand-yellow flex items-center gap-1 transition-colors"
          >
            View All
            <span className="text-xl font-bold">→</span>
          </Link>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {products.slice(0, 8).map((product) => (
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
                  <p className="text-brand-black font-bold mt-1">₹{product.price}</p>
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
