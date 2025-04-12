
import React, { useState } from 'react';
import { Search } from 'lucide-react';

const HeroSection = () => {
  const [searchType, setSearchType] = useState('buy');
  
  return (
    <section className="relative h-[80vh] flex items-center justify-center bg-cover bg-center" 
      style={{ backgroundImage: "url('public/lovable-uploads/e301bc9f-6629-463c-8b23-fb3699e1780d.png')" }}>
      
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      
      <div className="container mx-auto px-4 z-10 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
          Find Your Perfect Place
        </h1>
        <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
          Discover the home that's right for you among our collection of premium properties
        </p>
        
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-2">
          <div className="flex mb-4 border-b">
            <button 
              className={`flex-1 py-3 font-medium text-center ${searchType === 'buy' ? 'text-brand-blue border-b-2 border-brand-blue' : 'text-gray-500'}`}
              onClick={() => setSearchType('buy')}
            >
              Buy
            </button>
            <button 
              className={`flex-1 py-3 font-medium text-center ${searchType === 'rent' ? 'text-brand-blue border-b-2 border-brand-blue' : 'text-gray-500'}`}
              onClick={() => setSearchType('rent')}
            >
              Rent
            </button>
            <button 
              className={`flex-1 py-3 font-medium text-center ${searchType === 'sell' ? 'text-brand-blue border-b-2 border-brand-blue' : 'text-gray-500'}`}
              onClick={() => setSearchType('sell')}
            >
              Sell
            </button>
            <button 
              className={`flex-1 py-3 font-medium text-center ${searchType === 'estimate' ? 'text-brand-blue border-b-2 border-brand-blue' : 'text-gray-500'}`}
              onClick={() => setSearchType('estimate')}
            >
              Estimate
            </button>
          </div>
          
          <div className="flex flex-col md:flex-row">
            <div className="flex-grow">
              <input 
                type="text" 
                placeholder="Enter an address, neighborhood, city, or ZIP code" 
                className="w-full px-4 py-3 rounded-l-md border border-gray-300 focus:outline-none focus:border-brand-blue"
              />
            </div>
            <button className="mt-2 md:mt-0 bg-brand-red hover:bg-opacity-90 text-white px-6 py-3 rounded-md md:rounded-l-none transition duration-300 flex items-center justify-center">
              <Search className="mr-2" size={20} />
              Search
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
