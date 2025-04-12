
import React from 'react';
import { Link } from 'react-router-dom';
import { Home, TrendingUp, MapPin, ArrowRight } from 'lucide-react';

interface Neighborhood {
  id: number;
  name: string;
  image: string;
  listings: number;
  avgPrice: number;
  priceChange: number;
  description: string;
  path: string;
}

const neighborhoods: Neighborhood[] = [
  {
    id: 1,
    name: "Beverly Hills",
    image: "https://images.unsplash.com/photo-1563417994094-d3665531a473?q=80&w=1772&auto=format&fit=crop",
    listings: 34,
    avgPrice: 3250000,
    priceChange: 5.2,
    description: "Luxury homes and estates in the prestigious 90210 area.",
    path: "/neighborhoods/beverly-hills"
  },
  {
    id: 2,
    name: "Santa Monica",
    image: "https://images.unsplash.com/photo-1555086156-e6c7353d283f?q=80&w=1770&auto=format&fit=crop",
    listings: 52,
    avgPrice: 1850000,
    priceChange: 3.8,
    description: "Beach living with great schools and amenities.",
    path: "/neighborhoods/santa-monica"
  },
  {
    id: 3,
    name: "Malibu",
    image: "https://images.unsplash.com/photo-1534430810386-d0c20076a75a?q=80&w=1770&auto=format&fit=crop",
    listings: 28,
    avgPrice: 4750000,
    priceChange: 6.5,
    description: "Oceanfront properties with stunning Pacific views.",
    path: "/neighborhoods/malibu"
  },
  {
    id: 4,
    name: "Downtown LA",
    image: "https://images.unsplash.com/photo-1616733415578-b8f44183a01d?q=80&w=1932&auto=format&fit=crop",
    listings: 76,
    avgPrice: 875000,
    priceChange: 4.2,
    description: "Urban living in high-rise condos and converted lofts.",
    path: "/neighborhoods/downtown-la"
  }
];

const FeaturedNeighborhoods = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <h2 className="text-brand-navy font-heading text-3xl md:text-4xl font-bold">
            FEATURED <span className="text-brand-red">NEIGHBORHOODS</span>
          </h2>
          <Link 
            to="/neighborhoods" 
            className="mt-4 md:mt-0 text-brand-navy hover:text-brand-blue font-medium flex items-center transition-colors"
          >
            View All Neighborhoods
            <ArrowRight size={18} className="ml-2" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {neighborhoods.map((neighborhood) => (
            <Link 
              key={neighborhood.id}
              to={neighborhood.path}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={neighborhood.image} 
                  alt={neighborhood.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold">{neighborhood.name}</h3>
                  <div className="flex items-center text-sm mt-1">
                    <MapPin size={14} className="mr-1" />
                    <span>Los Angeles, CA</span>
                  </div>
                </div>
              </div>
              
              <div className="p-4">
                <p className="text-gray-600 text-sm mb-4">{neighborhood.description}</p>
                
                <div className="grid grid-cols-3 gap-2 text-center">
                  <div className="bg-gray-50 p-2 rounded">
                    <div className="flex items-center justify-center mb-1">
                      <Home size={16} className="text-brand-navy" />
                    </div>
                    <p className="text-xs text-gray-500">Listings</p>
                    <p className="font-semibold text-brand-navy">{neighborhood.listings}</p>
                  </div>
                  
                  <div className="bg-gray-50 p-2 rounded">
                    <div className="flex items-center justify-center mb-1">
                      <DollarSign size={16} className="text-brand-navy" />
                    </div>
                    <p className="text-xs text-gray-500">Avg. Price</p>
                    <p className="font-semibold text-brand-navy">${(neighborhood.avgPrice / 1000000).toFixed(1)}M</p>
                  </div>
                  
                  <div className="bg-gray-50 p-2 rounded">
                    <div className="flex items-center justify-center mb-1">
                      <TrendingUp size={16} className="text-green-500" />
                    </div>
                    <p className="text-xs text-gray-500">Growth</p>
                    <p className="font-semibold text-green-500">+{neighborhood.priceChange}%</p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

// DollarSign component for the neighborhood cards
const DollarSign = ({ size, className }: { size: number, className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <line x1="12" y1="1" x2="12" y2="23"></line>
    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
  </svg>
);

export default FeaturedNeighborhoods;
