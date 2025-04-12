
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-brand-navy text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-brand-red font-heading text-lg font-bold mb-4">DISCOVER</h3>
            <ul className="space-y-2">
              <li><Link to="/buy" className="text-gray-300 hover:text-white transition-colors">Buy a Home</Link></li>
              <li><Link to="/rent" className="text-gray-300 hover:text-white transition-colors">Rent a Home</Link></li>
              <li><Link to="/sell" className="text-gray-300 hover:text-white transition-colors">Sell Your Home</Link></li>
              <li><Link to="/home-loans" className="text-gray-300 hover:text-white transition-colors">Home Loans</Link></li>
              <li><Link to="/agents" className="text-gray-300 hover:text-white transition-colors">Find an Agent</Link></li>
              <li><Link to="/new-developments" className="text-gray-300 hover:text-white transition-colors">New Developments</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-brand-red font-heading text-lg font-bold mb-4">RESOURCES</h3>
            <ul className="space-y-2">
              <li><Link to="/buyers-guide" className="text-gray-300 hover:text-white transition-colors">Buyer's Guide</Link></li>
              <li><Link to="/sellers-guide" className="text-gray-300 hover:text-white transition-colors">Seller's Guide</Link></li>
              <li><Link to="/mortgage-calculator" className="text-gray-300 hover:text-white transition-colors">Mortgage Calculator</Link></li>
              <li><Link to="/market-trends" className="text-gray-300 hover:text-white transition-colors">Market Trends</Link></li>
              <li><Link to="/blog" className="text-gray-300 hover:text-white transition-colors">Real Estate Blog</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-brand-red font-heading text-lg font-bold mb-4">ABOUT US</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors">Company</Link></li>
              <li><Link to="/careers" className="text-gray-300 hover:text-white transition-colors">Careers</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white transition-colors">Contact Us</Link></li>
              <li><Link to="/privacy" className="text-gray-300 hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-gray-300 hover:text-white transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-brand-red font-heading text-lg font-bold mb-4">CONTACT</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={18} className="text-brand-red mr-2 mt-1 flex-shrink-0" />
                <span className="text-gray-300">
                  123 Real Estate Way<br />
                  Los Angeles, CA 90001
                </span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="text-brand-red mr-2 flex-shrink-0" />
                <a href="tel:8885551234" className="text-gray-300 hover:text-white transition-colors">
                  (888) 555-1234
                </a>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="text-brand-red mr-2 flex-shrink-0" />
                <a href="mailto:info@primeestates.com" className="text-gray-300 hover:text-white transition-colors">
                  info@primeestates.com
                </a>
              </li>
              <li>
                <h4 className="text-white font-medium mb-2">Follow Us</h4>
                <div className="flex space-x-4">
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-brand-red transition-colors">
                    <Facebook size={20} />
                  </a>
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-brand-red transition-colors">
                    <Twitter size={20} />
                  </a>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-brand-red transition-colors">
                    <Instagram size={20} />
                  </a>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-brand-red transition-colors">
                    <Linkedin size={20} />
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <Link to="/" className="font-heading text-2xl font-bold">
                <span className="text-white">Prime</span>
                <span className="text-brand-red">Estates</span>
              </Link>
            </div>
            
            <div className="text-sm text-gray-400">
              <p>© 2025 PrimeEstates. All Rights Reserved</p>
              <p className="mt-1">Equal Housing Opportunity</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
