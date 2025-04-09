
import React from 'react';
import { Link } from 'react-router-dom';

const CampaignSection = () => {
  return (
    <section className="py-16 bg-brand-black">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-center gap-8 md:gap-16">
          <div className="md:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2020&auto=format&fit=crop" 
              alt="Athlete wearing performance gear"
              className="w-full h-auto rounded-lg"
            />
          </div>
          
          <div className="md:w-1/2">
            <h2 className="text-brand-yellow font-heading text-xl md:text-2xl mb-2 tracking-wider">
              SPRING CAMPAIGN 2025
            </h2>
            <h3 className="text-brand-white font-heading text-3xl md:text-5xl font-bold mb-6 tracking-tight">
              PUSH LIMITS.<br />DEFINE YOUR PATH.
            </h3>
            <p className="text-brand-gray text-lg mb-8 leading-relaxed">
              Our latest collection combines cutting-edge performance fabrics with street-inspired 
              designs. Engineered to help you break boundaries, whether on the track, in the gym, 
              or on the streets.
            </p>
            <div className="flex gap-4">
              <Link 
                to="/collections/spring-2025" 
                className="button-primary"
              >
                SHOP COLLECTION
              </Link>
              <Link 
                to="/story" 
                className="button-secondary"
              >
                OUR STORY
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CampaignSection;
