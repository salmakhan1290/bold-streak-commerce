
import React from 'react';
import { Search, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const PropertySearch = () => {
  return (
    <section className="py-16 bg-brand-navy text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Find Your <span className="text-brand-red">Dream Home</span>
            </h2>
            <p className="text-gray-300 text-lg mb-6">
              Browse through thousands of properties in your desired location. 
              Use our advanced filters to find exactly what you're looking for.
            </p>
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="mb-4">
                <label className="block text-brand-navy text-sm font-medium mb-2">
                  Location
                </label>
                <div className="relative">
                  <MapPin size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                  <input 
                    type="text" 
                    placeholder="City, Neighborhood, or ZIP" 
                    className="pl-10 w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-brand-blue"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-brand-navy text-sm font-medium mb-2">
                    Property Type
                  </label>
                  <select className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-brand-blue">
                    <option value="">Any Type</option>
                    <option value="house">House</option>
                    <option value="apartment">Apartment</option>
                    <option value="condo">Condo</option>
                    <option value="townhouse">Townhouse</option>
                  </select>
                </div>
                <div>
                  <label className="block text-brand-navy text-sm font-medium mb-2">
                    Price Range
                  </label>
                  <select className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-brand-blue">
                    <option value="">Any Price</option>
                    <option value="100000-300000">$100k - $300k</option>
                    <option value="300000-500000">$300k - $500k</option>
                    <option value="500000-1000000">$500k - $1M</option>
                    <option value="1000000+">$1M+</option>
                  </select>
                </div>
              </div>
              
              <div className="grid grid-cols-3 gap-4 mb-4">
                <div>
                  <label className="block text-brand-navy text-sm font-medium mb-2">
                    Beds
                  </label>
                  <select className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-brand-blue">
                    <option value="">Any</option>
                    <option value="1">1+</option>
                    <option value="2">2+</option>
                    <option value="3">3+</option>
                    <option value="4">4+</option>
                  </select>
                </div>
                <div>
                  <label className="block text-brand-navy text-sm font-medium mb-2">
                    Baths
                  </label>
                  <select className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-brand-blue">
                    <option value="">Any</option>
                    <option value="1">1+</option>
                    <option value="2">2+</option>
                    <option value="3">3+</option>
                  </select>
                </div>
                <div>
                  <label className="block text-brand-navy text-sm font-medium mb-2">
                    Sq Ft
                  </label>
                  <select className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-brand-blue">
                    <option value="">Any</option>
                    <option value="1000">1000+</option>
                    <option value="1500">1500+</option>
                    <option value="2000">2000+</option>
                    <option value="3000">3000+</option>
                  </select>
                </div>
              </div>
              
              <Link to="/search-results" className="w-full bg-brand-red hover:bg-opacity-90 text-white py-3 rounded-md font-medium flex items-center justify-center">
                <Search size={18} className="mr-2" />
                Search Properties
              </Link>
            </div>
          </div>
          
          <div className="hidden md:block">
            <img 
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1770&auto=format&fit=crop" 
              alt="Luxury home with search" 
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PropertySearch;
