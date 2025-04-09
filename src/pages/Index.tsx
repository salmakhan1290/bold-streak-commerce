
import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import FeaturedCollections from '../components/FeaturedCollections';
import NewArrivals from '../components/NewArrivals';
import CampaignSection from '../components/CampaignSection';
import InstagramFeed from '../components/InstagramFeed';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <FeaturedCollections />
        <NewArrivals />
        <CampaignSection />
        <InstagramFeed />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
