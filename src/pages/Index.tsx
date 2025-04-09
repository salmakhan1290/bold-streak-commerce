
import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import FeaturedCollections from '../components/FeaturedCollections';
import NewArrivals from '../components/NewArrivals';
import FeatureCollectionSection from '../components/FeatureCollectionSection';
import LifestyleContentBlock from '../components/LifestyleContentBlock';
import BestSellers from '../components/BestSellers';
import Testimonials from '../components/Testimonials';
import StoreInformation from '../components/StoreInformation';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import CampaignSection from '../components/CampaignSection';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <FeaturedCollections />
        <NewArrivals />
        <FeatureCollectionSection />
        <LifestyleContentBlock />
        <BestSellers />
        <CampaignSection />
        <Testimonials />
        <StoreInformation />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
