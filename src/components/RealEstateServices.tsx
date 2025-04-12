
import React from 'react';
import { Link } from 'react-router-dom';
import { HomeIcon, Key, Briefcase, DollarSign, ArrowRight } from 'lucide-react';

const services = [
  {
    id: 1,
    title: "BUY A HOME",
    description: "Find your place with an immersive photo experience and the most listings, including things you won't find anywhere else.",
    icon: HomeIcon,
    path: "/buy",
    buttonText: "Search Homes"
  },
  {
    id: 2,
    title: "SELL A HOME",
    description: "Whether you sell with new PrimeEstates Offers or take another approach, we'll help you navigate the path to a successful sale.",
    icon: DollarSign,
    path: "/sell",
    buttonText: "See Your Options"
  },
  {
    id: 3,
    title: "RENT A HOME",
    description: "We're creating a seamless online experience – from shopping on the largest rental network, to applying, to paying rent.",
    icon: Key,
    path: "/rent",
    buttonText: "Find Rentals"
  },
  {
    id: 4,
    title: "REAL ESTATE AGENTS",
    description: "No matter what path you take to sell your home, we can help you navigate a successful sale.",
    icon: Briefcase,
    path: "/agents",
    buttonText: "Find an Agent"
  }
];

const RealEstateServices = () => {
  return (
    <section className="py-16 bg-brand-light-gray">
      <div className="container mx-auto px-4">
        <h2 className="text-brand-navy font-heading text-3xl md:text-4xl font-bold mb-12 text-center">
          OUR <span className="text-brand-red">SERVICES</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div key={service.id} className="bg-white rounded-lg shadow-md p-6 flex flex-col hover:shadow-xl transition-shadow duration-300">
              <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-full bg-brand-blue bg-opacity-10">
                <service.icon size={24} className="text-brand-blue" />
              </div>
              
              <h3 className="text-xl font-bold text-brand-navy mb-3">{service.title}</h3>
              
              <p className="text-gray-600 mb-6 flex-grow">
                {service.description}
              </p>
              
              <Link 
                to={service.path} 
                className="inline-flex items-center text-brand-blue font-medium hover:underline group"
              >
                {service.buttonText}
                <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RealEstateServices;
