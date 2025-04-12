
import React, { useState } from 'react';
import { Home, Search, User, Menu, X, Phone, Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const categories = [
  { name: "BUY", path: "/buy" },
  { name: "RENT", path: "/rent" },
  { name: "SELL", path: "/sell" },
  { name: "MORTGAGE", path: "/mortgage" },
  { name: "AGENTS", path: "/agents" },
  { name: "NEW DEVELOPMENTS", path: "/new-developments" },
];

const announcements = [
  "Free Home Valuation for Limited Time",
  "New Listings Available Daily",
  "Schedule a Virtual Tour Today"
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentAnnouncement, setCurrentAnnouncement] = useState(0);

  // Rotate announcements every 5 seconds
  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentAnnouncement((prev) => (prev + 1) % announcements.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-brand-white">
      {/* Announcement Bar */}
      <div className="bg-brand-blue text-brand-white py-2">
        <div className="container mx-auto px-4 text-center text-sm font-medium">
          {announcements[currentAnnouncement]}
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="font-heading text-2xl font-bold">
            <span className="text-brand-navy">Prime</span>
            <span className="text-brand-red">Estates</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            {categories.map((category) => (
              <Link 
                key={category.name} 
                to={category.path} 
                className="text-brand-navy font-medium text-sm tracking-wider hover-underline"
              >
                {category.name}
              </Link>
            ))}
          </nav>

          {/* Contact Info - Desktop */}
          <div className="hidden md:flex items-center mr-4">
            <a href="tel:8899404820" className="flex items-center text-sm text-brand-navy hover:text-brand-blue">
              <Phone size={16} className="mr-1" />
              <span>888-555-1234</span>
            </a>
            <a href="mailto:contact@primeestates.com" className="ml-3 text-brand-navy hover:text-brand-blue">
              <Mail size={18} />
            </a>
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <button className="hidden md:flex p-2 hover:text-brand-blue transition-colors duration-200">
              <Search size={20} />
            </button>
            <Link to="/account" className="p-2 hover:text-brand-blue transition-colors duration-200">
              <User size={20} />
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
                  className="text-brand-navy font-medium text-center text-sm tracking-wider py-2 border-b border-gray-100"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {category.name}
                </Link>
              ))}
            </nav>
            {/* Contact Info - Mobile */}
            <div className="flex justify-center space-x-4 mt-4 pt-2 border-t border-gray-100">
              <a href="tel:8885551234" className="flex items-center text-sm text-brand-navy">
                <Phone size={16} className="mr-1" />
                <span>888-555-1234</span>
              </a>
              <a href="mailto:contact@primeestates.com" className="text-brand-navy">
                <Mail size={18} />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
