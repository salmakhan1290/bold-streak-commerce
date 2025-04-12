
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FeaturedProperties from '../components/FeaturedProperties';
import PropertySearch from '../components/PropertySearch';
import Newsletter from '../components/Newsletter';

const PropertiesPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold text-brand-navy mb-8">Browse All Properties</h1>
          <p className="text-lg text-gray-700 mb-12 max-w-4xl">
            Explore our extensive collection of properties for sale and rent. Use the filters to narrow down your search and find the perfect property.
          </p>
          
          <PropertySearch />
          <FeaturedProperties />
          <Newsletter />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PropertiesPage;
