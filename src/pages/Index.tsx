
import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import FeaturedProperties from '../components/FeaturedProperties';
import PropertyCategories from '../components/PropertyCategories';
import PropertySearch from '../components/PropertySearch';
import RecentProperties from '../components/RecentProperties';
import MortgageCalculator from '../components/MortgageCalculator';
import RealEstateServices from '../components/RealEstateServices';
import AgentHighlights from '../components/AgentHighlights';
import FeaturedNeighborhoods from '../components/FeaturedNeighborhoods';
import LocationInfo from '../components/LocationInfo';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <PropertyCategories />
        <FeaturedProperties />
        <RecentProperties />
        <MortgageCalculator />
        <RealEstateServices />
        <FeaturedNeighborhoods />
        <AgentHighlights />
        <LocationInfo />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
