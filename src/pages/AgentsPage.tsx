
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AgentHighlights from '../components/AgentHighlights';
import Newsletter from '../components/Newsletter';

const AgentsPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold text-brand-navy mb-8">Our Real Estate Agents</h1>
          <p className="text-lg text-gray-700 mb-12 max-w-4xl">
            Meet our team of experienced real estate professionals dedicated to helping you find your dream home or sell your property at the best price.
          </p>
          
          <div className="mb-12">
            <div className="flex flex-col md:flex-row items-center bg-gray-100 rounded-lg p-6 mb-8">
              <input 
                type="text" 
                placeholder="Search agents by name, specialization, or location"
                className="w-full md:w-2/3 px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-blue mb-4 md:mb-0 md:mr-4"
              />
              <button 
                className="w-full md:w-auto bg-brand-blue text-white font-bold py-3 px-6 rounded-md hover:bg-brand-blue/90 transition-all duration-300"
              >
                Find Agent
              </button>
            </div>
          </div>
          
          <AgentHighlights />
          <Newsletter />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AgentsPage;
