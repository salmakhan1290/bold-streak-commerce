
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PropertySearch from '../components/PropertySearch';
import FeaturedProperties from '../components/FeaturedProperties';
import PropertyCategories from '../components/PropertyCategories';
import Newsletter from '../components/Newsletter';

const RentPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold text-brand-navy mb-8">Rent a Home</h1>
          <p className="text-lg text-gray-700 mb-12 max-w-4xl">
            Find your ideal rental property from our carefully curated listings. From apartments to houses, we have options to suit all preferences and budgets.
          </p>
          
          <PropertySearch />
          <PropertyCategories />
          <FeaturedProperties />
          <Newsletter />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default RentPage;
