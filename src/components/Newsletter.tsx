
import React from 'react';
import { Mail, ArrowRight } from 'lucide-react';

const Newsletter = () => {
  return (
    <section className="py-16 bg-brand-blue">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-white max-w-xl">
            <div className="inline-block p-3 bg-white/10 rounded-lg mb-4">
              <Mail size={28} className="text-white" />
            </div>
            <h3 className="text-3xl font-bold mb-3">Get Market Updates and News</h3>
            <p className="text-white/80">
              Stay up to date with the latest market trends, property listings, and real estate advice.
              Subscribe to our newsletter and never miss an opportunity.
            </p>
          </div>
          
          <div className="w-full md:w-auto">
            <form className="flex flex-col md:flex-row gap-3">
              <div className="flex-grow min-w-[250px]">
                <input 
                  type="email"
                  placeholder="Your email address"
                  className="w-full h-full px-4 py-3 rounded-md focus:outline-none"
                />
              </div>
              <button 
                type="submit"
                className="bg-brand-red hover:bg-opacity-90 text-white px-6 py-3 rounded-md font-medium flex items-center justify-center transition-colors"
              >
                Subscribe
                <ArrowRight size={18} className="ml-2" />
              </button>
            </form>
            <p className="text-white/70 text-sm mt-3">
              By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
