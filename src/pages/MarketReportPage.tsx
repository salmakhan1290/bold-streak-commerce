
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Newsletter from '../components/Newsletter';

const MarketReportPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold text-brand-navy mb-8">Real Estate Market Reports</h1>
          <p className="text-lg text-gray-700 mb-12 max-w-4xl">
            Stay informed with our comprehensive market reports. Get insights into property trends, price movements, and future forecasts to make informed real estate decisions.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-brand-navy mb-4">Q1 2025 Market Update</h3>
              <p className="text-gray-700 mb-4">Comprehensive analysis of the real estate market trends in the first quarter of 2025.</p>
              <button className="text-brand-blue font-semibold hover:underline">Read Report →</button>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-brand-navy mb-4">Annual Property Price Index</h3>
              <p className="text-gray-700 mb-4">Year-over-year comparison of property prices across different neighborhoods and property types.</p>
              <button className="text-brand-blue font-semibold hover:underline">Read Report →</button>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-brand-navy mb-4">Neighborhood Spotlight</h3>
              <p className="text-gray-700 mb-4">In-depth analysis of emerging neighborhoods with high growth potential for investors.</p>
              <button className="text-brand-blue font-semibold hover:underline">Read Report →</button>
            </div>
          </div>
          
          <div className="bg-gray-100 p-8 rounded-lg mb-12">
            <h2 className="text-2xl font-bold text-brand-navy mb-6">Subscribe to Market Reports</h2>
            <p className="text-gray-700 mb-4">Get the latest market reports delivered directly to your inbox.</p>
            <div className="flex flex-col md:flex-row">
              <input 
                type="email" 
                placeholder="Your email address"
                className="w-full md:w-2/3 px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-blue mb-4 md:mb-0 md:mr-4"
              />
              <button 
                className="w-full md:w-auto bg-brand-blue text-white font-bold py-3 px-6 rounded-md hover:bg-brand-blue/90 transition-all duration-300"
              >
                Subscribe
              </button>
            </div>
          </div>
          
          <Newsletter />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default MarketReportPage;
