
import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MapPin, Home, Phone, Mail, Calendar, Maximize2, Ruler, Car, Bath, Bed } from 'lucide-react';
import Newsletter from '../components/Newsletter';

const PropertyDetailPage = () => {
  const { propertyId } = useParams();
  
  // This would normally come from an API call using the propertyId
  const property = {
    id: propertyId,
    title: "Modern Luxury Villa",
    address: "123 Maple Street, Beverly Hills, CA 90210",
    price: "$2,450,000",
    description: "This stunning modern villa offers luxurious living spaces with high-end finishes throughout. Features include a gourmet kitchen, spacious master suite, and a private backyard with pool.",
    features: [
      "4 Bedrooms", "3.5 Bathrooms", "3,200 sq ft", "2 Car Garage", "Built in 2020"
    ],
    images: [
      "public/lovable-uploads/e301bc9f-6629-463c-8b23-fb3699e1780d.png",
      "public/lovable-uploads/e301bc9f-6629-463c-8b23-fb3699e1780d.png",
      "public/lovable-uploads/e301bc9f-6629-463c-8b23-fb3699e1780d.png"
    ],
    agent: {
      name: "Sarah Johnson",
      phone: "(555) 123-4567",
      email: "sarah.johnson@primeestates.com",
      image: "public/lovable-uploads/e301bc9f-6629-463c-8b23-fb3699e1780d.png"
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-8">
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-brand-navy mb-2">{property.title}</h1>
            <div className="flex items-center text-gray-600 mb-4">
              <MapPin size={18} className="mr-2" />
              <span>{property.address}</span>
            </div>
            <div className="text-2xl md:text-3xl font-bold text-brand-red">{property.price}</div>
          </div>
          
          {/* Property Images Gallery */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
            {property.images.map((image, index) => (
              <div key={index} className={index === 0 ? "col-span-1 md:col-span-2 lg:col-span-2 row-span-2" : ""}>
                <img src={image} alt={`Property view ${index + 1}`} className="w-full h-full object-cover rounded-lg" />
              </div>
            ))}
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {/* Property Details */}
            <div className="lg:col-span-2">
              <Tabs defaultValue="details">
                <TabsList className="mb-6">
                  <TabsTrigger value="details">Details</TabsTrigger>
                  <TabsTrigger value="features">Features</TabsTrigger>
                  <TabsTrigger value="location">Location</TabsTrigger>
                </TabsList>
                
                <TabsContent value="details" className="mt-0">
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-2xl font-bold text-brand-navy mb-4">Property Description</h2>
                    <p className="text-gray-700 mb-6">{property.description}</p>
                    
                    <h3 className="text-xl font-bold text-brand-navy mb-4">Property Details</h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      <div className="flex items-center">
                        <Bed size={20} className="mr-2 text-brand-navy" />
                        <span>4 Bedrooms</span>
                      </div>
                      <div className="flex items-center">
                        <Bath size={20} className="mr-2 text-brand-navy" />
                        <span>3.5 Bathrooms</span>
                      </div>
                      <div className="flex items-center">
                        <Maximize2 size={20} className="mr-2 text-brand-navy" />
                        <span>3,200 sq ft</span>
                      </div>
                      <div className="flex items-center">
                        <Car size={20} className="mr-2 text-brand-navy" />
                        <span>2 Car Garage</span>
                      </div>
                      <div className="flex items-center">
                        <Home size={20} className="mr-2 text-brand-navy" />
                        <span>Single Family</span>
                      </div>
                      <div className="flex items-center">
                        <Calendar size={20} className="mr-2 text-brand-navy" />
                        <span>Built in 2020</span>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="features" className="mt-0">
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-2xl font-bold text-brand-navy mb-4">Property Features</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h3 className="text-lg font-bold text-brand-navy mb-2">Interior Features</h3>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                          <li>Gourmet kitchen with high-end appliances</li>
                          <li>Open floor plan with hardwood flooring</li>
                          <li>Custom-built walk-in closets</li>
                          <li>Smart home technology</li>
                          <li>Home office with built-in shelving</li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-brand-navy mb-2">Exterior Features</h3>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                          <li>Private backyard with swimming pool</li>
                          <li>Outdoor kitchen and dining area</li>
                          <li>Landscaped garden with irrigation system</li>
                          <li>Covered patio with ceiling fans</li>
                          <li>Two-car garage with storage space</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="location" className="mt-0">
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-2xl font-bold text-brand-navy mb-4">Location</h2>
                    <div className="aspect-[16/9] bg-gray-200 rounded-lg mb-6">
                      {/* Map would go here */}
                      <div className="h-full w-full flex items-center justify-center">
                        <p className="text-gray-500">Interactive Map</p>
                      </div>
                    </div>
                    
                    <h3 className="text-lg font-bold text-brand-navy mb-2">Neighborhood Highlights</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
                      <div>
                        <h4 className="font-semibold">Schools</h4>
                        <ul className="list-disc list-inside space-y-1 ml-2">
                          <li>Beverly Hills Elementary (0.5 miles)</li>
                          <li>Westwood Middle School (1.2 miles)</li>
                          <li>Beverly Hills High School (1.5 miles)</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold">Points of Interest</h4>
                        <ul className="list-disc list-inside space-y-1 ml-2">
                          <li>Rodeo Drive Shopping (1.8 miles)</li>
                          <li>Beverly Hills Park (0.7 miles)</li>
                          <li>Westfield Century City Mall (2.3 miles)</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
            
            {/* Agent Info and Contact */}
            <div>
              <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                <h2 className="text-xl font-bold text-brand-navy mb-4">Listed By</h2>
                <div className="flex items-center mb-4">
                  <img 
                    src={property.agent.image} 
                    alt={property.agent.name}
                    className="w-16 h-16 rounded-full object-cover mr-4" 
                  />
                  <div>
                    <h3 className="font-bold text-brand-navy">{property.agent.name}</h3>
                    <p className="text-gray-600">Prime Estates Agent</p>
                  </div>
                </div>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center">
                    <Phone size={18} className="mr-2 text-brand-navy" />
                    <span>{property.agent.phone}</span>
                  </div>
                  <div className="flex items-center">
                    <Mail size={18} className="mr-2 text-brand-navy" />
                    <span>{property.agent.email}</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-bold text-brand-navy mb-4">Request Information</h2>
                <form className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 mb-1">Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-blue"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-gray-700 mb-1">Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-blue"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-gray-700 mb-1">Phone</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-blue"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-gray-700 mb-1">Message</label>
                    <textarea 
                      id="message" 
                      rows={4}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-blue"
                      defaultValue={`I am interested in the property at ${property.address}.`}
                    ></textarea>
                  </div>
                  <button 
                    type="submit" 
                    className="w-full bg-brand-red text-white font-bold py-3 px-6 rounded-md hover:bg-brand-red/90 transition-all duration-300"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
          
          <Newsletter />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PropertyDetailPage;
