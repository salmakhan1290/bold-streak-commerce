
import React, { useState } from 'react';
import { ShoppingCart, User, Search, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const categories = [
  { name: "MEN", path: "/men" },
  { name: "WOMEN", path: "/women" },
  { name: "KIDS", path: "/kids" },
  { name: "PERFORMANCE", path: "/performance" },
  { name: "STREET", path: "/street" },
  { name: "COLLECTIONS", path: "/collections" }
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-brand-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="font-heading text-2xl font-bold">
            <span className="text-brand-black">BOLD</span>
            <span className="text-brand-yellow">STREAK</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {categories.map((category) => (
              <Link 
                key={category.name} 
                to={category.path} 
                className="text-brand-black font-medium text-sm tracking-wider hover-underline"
              >
                {category.name}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <button className="hidden md:flex p-2 hover:text-brand-yellow transition-colors duration-200">
              <Search size={20} />
            </button>
            <Link to="/account" className="p-2 hover:text-brand-yellow transition-colors duration-200">
              <User size={20} />
            </Link>
            <Link to="/cart" className="p-2 hover:text-brand-yellow transition-colors duration-200 relative">
              <ShoppingCart size={20} />
              <span className="absolute -top-1 -right-1 bg-brand-yellow text-brand-black text-xs font-bold rounded-full h-4 w-4 flex items-center justify-center">
                0
              </span>
            </Link>
            <button 
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-brand-white border-t border-gray-200 animate-slide-in">
          <div className="container mx-auto px-4 py-4">
            <div className="flex justify-center mb-4">
              <Search size={20} />
            </div>
            <nav className="flex flex-col space-y-4">
              {categories.map((category) => (
                <Link 
                  key={category.name} 
                  to={category.path} 
                  className="text-brand-black font-medium text-center text-sm tracking-wider py-2 border-b border-gray-100"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {category.name}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
