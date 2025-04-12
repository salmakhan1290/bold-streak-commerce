
import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Bed, Bath, ArrowUpRight, MapPin } from 'lucide-react';

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
  path: string;
}

const properties: Property[] = [
  {
    id: 1,
    title: "Modern Luxury Villa",
    price: 1250000,
    image: "public/lovable-uploads/7d319753-a3cb-4cca-a05d-3dc5ae80e707.png",
    beds: 4,
    baths: 3.5,
    sqft: 3200,
    address: "123 Sunset Blvd, Beverly Hills",
    status: 'sale',
    path: "/properties/modern-luxury-villa"
  },
  {
    id: 2,
    title: "Downtown Penthouse",
    price: 890000,
    image: "public/lovable-uploads/981bada0-0adc-47aa-bda0-31f3de493a58.png",
    beds: 3,
    baths: 2,
    sqft: 1800,
    address: "456 Main St, Los Angeles",
    status: 'sale',
    path: "/properties/downtown-penthouse"
  },
  {
    id: 3,
    title: "Seaside Condo",
    price: 4500,
    image: "public/lovable-uploads/44557227-e4f1-4849-99dc-1e9e94444004.png",
    beds: 2,
    baths: 2,
    sqft: 1200,
    address: "789 Ocean Ave, Malibu",
    status: 'rent',
    path: "/properties/seaside-condo"
  },
  {
    id: 4,
    title: "Historic Townhouse",
    price: 725000,
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1770&auto=format&fit=crop",
    beds: 3,
    baths: 2.5,
    sqft: 2100,
    address: "321 Heritage Ln, Pasadena",
    status: 'sale',
    path: "/properties/historic-townhouse"
  },
  {
    id: 5,
    title: "Modern Apartment",
    price: 3200,
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=1770&auto=format&fit=crop",
    beds: 1,
    baths: 1,
    sqft: 850,
    address: "555 Highland Ave, Santa Monica",
    status: 'rent',
    path: "/properties/modern-apartment"
  },
  {
    id: 6,
    title: "Family Estate",
    price: 1650000,
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1770&auto=format&fit=crop",
    beds: 5,
    baths: 4,
    sqft: 4200,
    address: "888 Valley Rd, Bel Air",
    status: 'sale',
    path: "/properties/family-estate"
  }
];

const FeaturedProperties = () => {
  return (
    <section className="py-16 bg-brand-light-gray">
      <div className="container mx-auto px-4">
        <h2 className="text-brand-navy font-heading text-3xl md:text-4xl font-bold mb-8 text-center">
          FEATURED <span className="text-brand-red">PROPERTIES</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {properties.map((property) => (
            <Link 
              key={property.id} 
              to={property.path}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative">
                <img 
                  src={property.image} 
                  alt={property.title} 
                  className="w-full h-60 object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className={`property-badge ${property.status === 'sale' ? 'property-badge-sale' : 'property-badge-rent'}`}>
                    {property.status === 'sale' ? 'FOR SALE' : 'FOR RENT'}
                  </span>
                </div>
                <div className="absolute bottom-4 right-4">
                  <span className="bg-white/80 backdrop-blur-sm rounded-full p-2">
                    <ArrowUpRight size={20} className="text-brand-navy" />
                  </span>
                </div>
              </div>
              
              <div className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-bold text-brand-navy">{property.title}</h3>
                  <p className="text-brand-red font-bold">
                    ${property.status === 'sale' 
                      ? property.price.toLocaleString() 
                      : `${property.price.toLocaleString()}/mo`}
                  </p>
                </div>
                
                <div className="flex items-center text-gray-600 mb-3">
                  <MapPin size={16} className="mr-1" />
                  <p className="text-sm truncate">{property.address}</p>
                </div>
                
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProperties;
