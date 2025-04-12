
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PropertySearch from '../components/PropertySearch';
import FeaturedProperties from '../components/FeaturedProperties';
import PropertyCategories from '../components/PropertyCategories';
import MortgageCalculator from '../components/MortgageCalculator';
import Newsletter from '../components/Newsletter';

const BuyPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold text-brand-navy mb-8">Buy a Home</h1>
          <p className="text-lg text-gray-700 mb-12 max-w-4xl">
            Discover your dream home with our extensive listings of properties for sale. Use our advanced search tools to find the perfect match for your needs and budget.
          </p>
          
          <PropertySearch />
          <PropertyCategories />
          <FeaturedProperties />
          <MortgageCalculator />
          <Newsletter />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BuyPage;
