
import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from 'react-router-dom';
import { useIsMobile } from '@/hooks/use-mobile';

const HeroSection = () => {
  // Tab content configuration
  const tabContents = {
    buy: {
      heading: "Find the right home at the right price",
      placeholder: "City, Address, School, Agent, ZIP",
      buttonText: "Search",
      buttonComponent: (
        <Button className="bg-brand-red hover:bg-brand-red/90 text-white px-6 py-6 rounded-md md:rounded-l-none">
          <Search className="mr-2" size={20} />
          Search
        </Button>
      )
    },
    rent: {
      heading: "Local rentals at your fingertips",
      placeholder: "City, Address, School, Building, ZIP",
      buttonText: "Search",
      buttonComponent: (
        <Button className="bg-brand-red hover:bg-brand-red/90 text-white px-6 py-6 rounded-md md:rounded-l-none">
          <Search className="mr-2" size={20} />
          Search
        </Button>
      )
    },
    sell: {
      heading: "Sell with the industry's most experienced agents",
      placeholder: "Enter your street address",
      buttonText: "Get started",
      buttonComponent: (
        <Button className="bg-brand-red hover:bg-brand-red/90 text-white px-6 py-6 rounded-md">
          Get started
        </Button>
      )
    },
    mortgage: {
      heading: "Connect with a lender and get pre-approved",
      placeholder: "City, County, ZIP",
      buttonText: "Next",
      buttonComponent: (
        <Button className="bg-brand-red hover:bg-brand-red/90 text-white px-6 py-6 rounded-md">
          Next
        </Button>
      )
    },
    estimate: {
      heading: "Get an accurate home value estimate",
      placeholder: "Enter your home address",
      buttonText: "Go",
      buttonComponent: (
        <Button className="bg-brand-red hover:bg-brand-red/90 text-white px-6 py-6 rounded-md">
          Go
        </Button>
      )
    }
  };
  
  const [activeTab, setActiveTab] = useState("buy");
  const isMobile = useIsMobile();
  
  return (
    <section 
      className="relative min-h-[70vh] md:h-[90vh] flex items-center justify-center bg-cover bg-center" 
      style={{ backgroundImage: "url('public/lovable-uploads/e301bc9f-6629-463c-8b23-fb3699e1780d.png')" }}>
      
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      
      <div className="container mx-auto px-4 z-10 text-center w-full">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 md:mb-10 max-w-4xl mx-auto leading-tight">
          {tabContents[activeTab].heading}
        </h1>
        
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
          <Tabs defaultValue="buy" value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className={`w-full ${isMobile ? 'grid grid-cols-3 gap-1' : 'grid grid-cols-5'} bg-gray-100 rounded-none h-auto`}>
              <TabsTrigger 
                value="buy" 
                className={`py-3 md:py-4 font-medium text-sm md:text-lg ${activeTab === 'buy' ? 'bg-white text-brand-navy font-semibold' : 'text-gray-700 hover:bg-gray-200'}`}
              >
                Buy
              </TabsTrigger>
              <TabsTrigger 
                value="rent" 
                className={`py-3 md:py-4 font-medium text-sm md:text-lg ${activeTab === 'rent' ? 'bg-white text-brand-navy font-semibold' : 'text-gray-700 hover:bg-gray-200'}`}
              >
                Rent
              </TabsTrigger>
              <TabsTrigger 
                value="sell" 
                className={`py-3 md:py-4 font-medium text-sm md:text-lg ${activeTab === 'sell' ? 'bg-white text-brand-navy font-semibold' : 'text-gray-700 hover:bg-gray-200'}`}
              >
                Sell
              </TabsTrigger>
              {isMobile ? (
                <>
                  <TabsTrigger 
                    value="mortgage"
                    className={`py-3 md:py-4 font-medium text-sm md:text-lg ${activeTab === 'mortgage' ? 'bg-white text-brand-navy font-semibold' : 'text-gray-700 hover:bg-gray-200'} col-span-2`}
                  >
                    Mortgage
                  </TabsTrigger>
                  <TabsTrigger 
                    value="estimate" 
                    className={`py-3 md:py-4 font-medium text-sm md:text-lg ${activeTab === 'estimate' ? 'bg-white text-brand-navy font-semibold' : 'text-gray-700 hover:bg-gray-200'} col-span-2`}
                  >
                    Value
                  </TabsTrigger>
                </>
              ) : (
                <>
                  <TabsTrigger 
                    value="mortgage"
                    className={`py-3 md:py-4 font-medium text-sm md:text-lg ${activeTab === 'mortgage' ? 'bg-white text-brand-navy font-semibold' : 'text-gray-700 hover:bg-gray-200'}`}
                  >
                    Mortgage
                  </TabsTrigger>
                  <TabsTrigger 
                    value="estimate" 
                    className={`py-3 md:py-4 font-medium text-sm md:text-lg ${activeTab === 'estimate' ? 'bg-white text-brand-navy font-semibold' : 'text-gray-700 hover:bg-gray-200'}`}
                  >
                    My Home Value
                  </TabsTrigger>
                </>
              )}
            </TabsList>
            
            <div className="p-4 md:p-6">
              <TabsContent value="buy" className="mt-0">
                <div className="flex flex-col md:flex-row">
                  <Input 
                    type="text" 
                    placeholder={tabContents.buy.placeholder}
                    className="w-full px-4 py-4 md:py-6 rounded-md md:rounded-r-none border border-gray-300 text-base md:text-lg mb-2 md:mb-0"
                  />
                  {tabContents.buy.buttonComponent}
                </div>
              </TabsContent>
              
              <TabsContent value="rent" className="mt-0">
                <div className="flex flex-col md:flex-row">
                  <Input 
                    type="text" 
                    placeholder={tabContents.rent.placeholder}
                    className="w-full px-4 py-4 md:py-6 rounded-md md:rounded-r-none border border-gray-300 text-base md:text-lg mb-2 md:mb-0"
                  />
                  {tabContents.rent.buttonComponent}
                </div>
              </TabsContent>
              
              <TabsContent value="sell" className="mt-0">
                <div className="flex flex-col md:flex-row">
                  <Input 
                    type="text" 
                    placeholder={tabContents.sell.placeholder}
                    className="w-full px-4 py-4 md:py-6 rounded-md border border-gray-300 text-base md:text-lg mb-4 md:mb-0 md:mr-4"
                  />
                  {tabContents.sell.buttonComponent}
                </div>
              </TabsContent>
              
              <TabsContent value="mortgage" className="mt-0">
                <div className="flex flex-col md:flex-row">
                  <Input 
                    type="text" 
                    placeholder={tabContents.mortgage.placeholder}
                    className="w-full px-4 py-4 md:py-6 rounded-md border border-gray-300 text-base md:text-lg mb-4 md:mb-0 md:mr-4"
                  />
                  {tabContents.mortgage.buttonComponent}
                </div>
              </TabsContent>
              
              <TabsContent value="estimate" className="mt-0">
                <div className="flex flex-col md:flex-row">
                  <Input 
                    type="text" 
                    placeholder={tabContents.estimate.placeholder}
                    className="w-full px-4 py-4 md:py-6 rounded-md border border-gray-300 text-base md:text-lg mb-4 md:mb-0 md:mr-4"
                  />
                  {tabContents.estimate.buttonComponent}
                </div>
              </TabsContent>
            </div>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
