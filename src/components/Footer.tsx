
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-brand-black text-brand-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-brand-yellow font-heading text-lg font-bold mb-4">SHOP</h3>
            <ul className="space-y-2">
              <li><Link to="/men" className="text-brand-gray hover:text-brand-white transition-colors">Men</Link></li>
              <li><Link to="/women" className="text-brand-gray hover:text-brand-white transition-colors">Women</Link></li>
              <li><Link to="/kids" className="text-brand-gray hover:text-brand-white transition-colors">Kids</Link></li>
              <li><Link to="/casual" className="text-brand-gray hover:text-brand-white transition-colors">Casual</Link></li>
              <li><Link to="/formal" className="text-brand-gray hover:text-brand-white transition-colors">Formal</Link></li>
              <li><Link to="/collections" className="text-brand-gray hover:text-brand-white transition-colors">Collections</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-brand-yellow font-heading text-lg font-bold mb-4">INFORMATION</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-brand-gray hover:text-brand-white transition-colors">About Us</Link></li>
              <li><Link to="/quality" className="text-brand-gray hover:text-brand-white transition-colors">Quality Promise</Link></li>
              <li><Link to="/brands" className="text-brand-gray hover:text-brand-white transition-colors">Our Brands</Link></li>
              <li><Link to="/careers" className="text-brand-gray hover:text-brand-white transition-colors">Careers</Link></li>
              <li><Link to="/blog" className="text-brand-gray hover:text-brand-white transition-colors">Blog</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-brand-yellow font-heading text-lg font-bold mb-4">SUPPORT</h3>
            <ul className="space-y-2">
              <li><Link to="/contact" className="text-brand-gray hover:text-brand-white transition-colors">Contact Us</Link></li>
              <li><Link to="/faq" className="text-brand-gray hover:text-brand-white transition-colors">FAQ</Link></li>
              <li><Link to="/shipping" className="text-brand-gray hover:text-brand-white transition-colors">Shipping & Returns</Link></li>
              <li><Link to="/size-chart" className="text-brand-gray hover:text-brand-white transition-colors">Size Chart</Link></li>
              <li><Link to="/store-locator" className="text-brand-gray hover:text-brand-white transition-colors">Store Locator</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-brand-yellow font-heading text-lg font-bold mb-4">STAY CONNECTED</h3>
            <div className="flex space-x-4 mb-6">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-brand-gray hover:text-brand-yellow transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-brand-gray hover:text-brand-yellow transition-colors">
                <Twitter size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-brand-gray hover:text-brand-yellow transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-brand-gray hover:text-brand-yellow transition-colors">
                <Youtube size={20} />
              </a>
            </div>
            <div>
              <p className="text-brand-gray mb-2">Download Our App</p>
              <div className="flex space-x-2">
                <a href="#" className="bg-brand-white bg-opacity-10 px-3 py-2 rounded hover:bg-opacity-20 transition-all">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="App Store" className="h-6" />
                </a>
                <a href="#" className="bg-brand-white bg-opacity-10 px-3 py-2 rounded hover:bg-opacity-20 transition-all">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" className="h-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-brand-gray border-opacity-30 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <Link to="/" className="font-heading text-2xl font-bold">
                <span className="text-brand-white">Hit'z 99</span>
                <span className="text-brand-yellow"> Collection</span>
              </Link>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4 text-sm text-brand-gray">
              <Link to="/terms" className="hover:text-brand-white transition-colors">Terms & Conditions</Link>
              <Link to="/privacy" className="hover:text-brand-white transition-colors">Privacy Policy</Link>
              <Link to="/cookies" className="hover:text-brand-white transition-colors">Cookie Policy</Link>
              <span>© 2025 Hit'z 99 Collection. All Rights Reserved</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
