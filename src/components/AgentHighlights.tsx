
import React from 'react';
import { Link } from 'react-router-dom';
import { Star, Home, Phone, Mail, ArrowRight } from 'lucide-react';

interface Agent {
  id: number;
  name: string;
  image: string;
  role: string;
  rating: number;
  salesCount: number;
  phone: string;
  email: string;
  path: string;
}

const agents: Agent[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1776&auto=format&fit=crop",
    role: "Luxury Properties Specialist",
    rating: 4.9,
    salesCount: 127,
    phone: "888-555-1001",
    email: "sarah.j@primeestates.com",
    path: "/agents/sarah-johnson"
  },
  {
    id: 2,
    name: "Michael Chen",
    image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1770&auto=format&fit=crop",
    role: "Commercial Real Estate",
    rating: 4.8,
    salesCount: 98,
    phone: "888-555-1002",
    email: "michael.c@primeestates.com",
    path: "/agents/michael-chen"
  },
  {
    id: 3,
    name: "Jessica Martinez",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop",
    role: "Residential Specialist",
    rating: 4.9,
    salesCount: 143,
    phone: "888-555-1003",
    email: "jessica.m@primeestates.com",
    path: "/agents/jessica-martinez"
  }
];

const AgentHighlights = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-10">
          <h2 className="text-brand-navy font-heading text-3xl md:text-4xl font-bold">
            MEET OUR <span className="text-brand-red">TOP AGENTS</span>
          </h2>
          <Link 
            to="/agents" 
            className="mt-4 md:mt-0 text-brand-navy hover:text-brand-blue font-medium flex items-center"
          >
            View All Agents
            <ArrowRight size={18} className="ml-2" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {agents.map((agent) => (
            <div key={agent.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300">
              <Link to={agent.path} className="block">
                <div className="relative aspect-[3/4] overflow-hidden">
                  <img 
                    src={agent.image} 
                    alt={agent.name} 
                    className="w-full h-full object-cover object-center"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                    <div className="flex items-center text-brand-red mb-1">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          size={16} 
                          className={i < Math.floor(agent.rating) ? "fill-current" : "opacity-40"} 
                        />
                      ))}
                      <span className="text-white text-sm ml-2">{agent.rating}</span>
                    </div>
                    <h3 className="text-white text-xl font-bold">{agent.name}</h3>
                    <p className="text-gray-300 text-sm">{agent.role}</p>
                  </div>
                </div>
              </Link>
              
              <div className="p-4">
                <div className="flex items-center text-gray-600 mb-3">
                  <Home size={16} className="mr-2" />
                  <span>{agent.salesCount} Properties Sold</span>
                </div>
                
                <div className="border-t pt-3 grid grid-cols-2 gap-2">
                  <a 
                    href={`tel:${agent.phone}`} 
                    className="flex items-center justify-center bg-brand-light-gray py-2 rounded-md text-sm hover:bg-brand-blue hover:text-white transition-colors"
                  >
                    <Phone size={14} className="mr-1" />
                    Call
                  </a>
                  <a 
                    href={`mailto:${agent.email}`}
                    className="flex items-center justify-center bg-brand-light-gray py-2 rounded-md text-sm hover:bg-brand-blue hover:text-white transition-colors"
                  >
                    <Mail size={14} className="mr-1" />
                    Email
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AgentHighlights;
