
import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, MapPin, Bed, Bath, Home, ArrowRight } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

interface Property {
  id: number;
  title: string;
  price: number;
  image: string;
  beds: number;
  baths: number;
  sqft: number;
  address: string;
  status: 'sale' | 'rent';
  added: string;
  path: string;
}

const properties: Property[] = [
  {
    id: 1,
    title: "Contemporary Urban Loft",
    price: 625000,
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=1770&auto=format&fit=crop",
    beds: 1,
    baths: 1.5,
    sqft: 950,
    address: "123 Downtown St, Los Angeles, CA",
    status: 'sale',
    added: "2 days ago",
    path: "/properties/contemporary-urban-loft"
  },
  {
    id: 2,
    title: "Spacious Family Home",
    price: 985000,
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1770&auto=format&fit=crop",
    beds: 4,
    baths: 3,
    sqft: 2850,
    address: "456 Suburban Ave, Beverly Hills, CA",
    status: 'sale',
    added: "5 days ago",
    path: "/properties/spacious-family-home"
  },
  {
    id: 3,
    title: "Modern Beach House",
    price: 1750000,
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1770&auto=format&fit=crop",
    beds: 3,
    baths: 3.5,
    sqft: 2400,
    address: "789 Shoreline Dr, Malibu, CA",
    status: 'sale',
    added: "1 week ago",
    path: "/properties/modern-beach-house"
  },
  {
    id: 4,
    title: "Luxury Penthouse",
    price: 3200,
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=1780&auto=format&fit=crop",
    beds: 2,
    baths: 2,
    sqft: 1800,
    address: "101 Skyview Tower, West Hollywood, CA",
    status: 'rent',
    added: "3 days ago",
    path: "/properties/luxury-penthouse"
  },
  {
    id: 5,
    title: "Charming Bungalow",
    price: 549000,
    image: "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?q=80&w=1770&auto=format&fit=crop",
    beds: 2,
    baths: 1,
    sqft: 1050,
    address: "202 Heritage Lane, Pasadena, CA",
    status: 'sale',
    added: "Just added",
    path: "/properties/charming-bungalow"
  },
  {
    id: 6,
    title: "Modern Studio Apartment",
    price: 1950,
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=1770&auto=format&fit=crop",
    beds: 0,
    baths: 1,
    sqft: 650,
    address: "303 Downtown Ave, Santa Monica, CA",
    status: 'rent',
    added: "4 days ago",
    path: "/properties/modern-studio-apartment"
  }
];

const RecentProperties = () => {
  const isMobile = useIsMobile();
  const displayProperties = isMobile ? properties.slice(0, 4) : properties;
  
  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-6 md:mb-8">
          <h2 className="text-brand-navy font-heading text-2xl md:text-3xl lg:text-4xl font-bold">NEW LISTINGS</h2>
          <Link 
            to="/new-listings" 
            className="text-brand-navy font-medium hover:text-brand-blue flex items-center gap-1 transition-colors"
          >
            View All
            <span className="text-xl font-bold">→</span>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayProperties.map((property) => (
            <div key={property.id} className="group relative bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <Link to={property.path} className="block">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img 
                    src={property.image} 
                    alt={property.title}
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />
                  
                  <div className="absolute top-4 left-4">
                    <span className={`property-badge ${property.status === 'sale' ? 'property-badge-sale' : 'property-badge-rent'}`}>
                      {property.status === 'sale' ? 'FOR SALE' : 'FOR RENT'}
                    </span>
                  </div>
                  
                  <div className="absolute top-4 right-4">
                    <button 
                      className="bg-white/80 backdrop-blur-sm p-2 rounded-full text-gray-700 hover:text-brand-red transition-colors"
                      aria-label="Save property"
                    >
                      <Heart size={18} />
                    </button>
                  </div>
                  
                  <div className="absolute bottom-4 right-4">
                    <span className="bg-white/80 backdrop-blur-sm rounded-md px-2 py-1 text-xs font-medium text-brand-navy">
                      {property.added}
                    </span>
                  </div>
                </div>
                
                <div className="p-4">
                  <div className="flex items-center text-gray-600 mb-2">
                    <MapPin size={16} className="mr-1 flex-shrink-0" />
                    <p className="text-sm truncate">{property.address}</p>
                  </div>
                  
                  <h3 className="text-brand-navy font-medium text-lg mb-2 truncate">{property.title}</h3>
                  
                  <p className="text-brand-red font-bold text-xl mb-3">
                    ${property.status === 'sale' 
                      ? property.price.toLocaleString() 
                      : `${property.price.toLocaleString()}/mo`}
                  </p>
                  
                  <div className="flex justify-between text-sm text-gray-600 pt-3 border-t">
                    <div className="flex items-center">
                      <Bed size={16} className="mr-1" />
                      <span>{property.beds} {property.beds === 1 ? 'Bed' : 'Beds'}</span>
                    </div>
                    <div className="flex items-center">
                      <Bath size={16} className="mr-1" />
                      <span>{property.baths} {property.baths === 1 ? 'Bath' : 'Baths'}</span>
                    </div>
                    <div className="flex items-center">
                      <Home size={16} className="mr-1" />
                      <span>{property.sqft.toLocaleString()} sq ft</span>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-8 md:mt-10">
          <Link 
            to="/new-listings" 
            className="inline-flex items-center bg-brand-blue text-white px-5 py-2.5 md:px-6 md:py-3 rounded-md font-medium 
            hover:bg-opacity-90 transition-colors duration-300 group"
          >
            VIEW ALL NEW LISTINGS
            <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default RecentProperties;
