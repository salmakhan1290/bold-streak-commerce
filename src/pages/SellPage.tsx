
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import RealEstateServices from '../components/RealEstateServices';
import Newsletter from '../components/Newsletter';

const SellPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold text-brand-navy mb-8">Sell Your Home</h1>
          <p className="text-lg text-gray-700 mb-12 max-w-4xl">
            Ready to sell your property? Our expert agents will guide you through the entire process, from valuation to closing, ensuring you get the best possible price.
          </p>
          
          <div className="bg-white p-8 rounded-lg shadow-md mb-12">
            <h2 className="text-2xl font-bold text-brand-navy mb-6">Get a Free Home Valuation</h2>
            <form className="space-y-4">
              <div>
                <label htmlFor="address" className="block text-gray-700 mb-2">Property Address</label>
                <input 
                  type="text" 
                  id="address" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-blue"
                  placeholder="Enter your property address"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-blue"
                    placeholder="Your email address"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-gray-700 mb-2">Phone</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-blue"
                    placeholder="Your phone number"
                  />
                </div>
              </div>
              <button 
                type="submit" 
                className="w-full md:w-auto bg-brand-red text-white font-bold py-3 px-6 rounded-md hover:bg-brand-red/90 transition-all duration-300"
              >
                Get Free Valuation
              </button>
            </form>
          </div>
          
          <RealEstateServices />
          <Newsletter />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SellPage;
