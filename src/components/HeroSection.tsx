
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
      heading: "Claim your home and get a free estimate",
      placeholder: "Enter your street address",
      buttonText: "Search",
      buttonComponent: (
        <Button className="bg-brand-red hover:bg-brand-red/90 text-white p-3 min-w-12 rounded-md md:rounded-l-none">
          <Search size={20} />
        </Button>
      )
    },
    rent: {
      heading: "Claim your home and get a free estimate",
      placeholder: "Enter your street address",
      buttonText: "Search",
      buttonComponent: (
        <Button className="bg-brand-red hover:bg-brand-red/90 text-white p-3 min-w-12 rounded-md md:rounded-l-none">
          <Search size={20} />
        </Button>
      )
    },
    sell: {
      heading: "Claim your home and get a free estimate",
      placeholder: "Enter your street address",
      buttonText: "Search",
      buttonComponent: (
        <Button className="bg-brand-red hover:bg-brand-red/90 text-white p-3 min-w-12 rounded-md md:rounded-l-none">
          <Search size={20} />
        </Button>
      )
    },
    mortgage: {
      heading: "Claim your home and get a free estimate",
      placeholder: "Enter your street address",
      buttonText: "Search",
      buttonComponent: (
        <Button className="bg-brand-red hover:bg-brand-red/90 text-white p-3 min-w-12 rounded-md md:rounded-l-none">
          <Search size={20} />
        </Button>
      )
    },
    estimate: {
      heading: "Claim your home and get a free estimate",
      placeholder: "Enter your street address",
      buttonText: "Search",
      buttonComponent: (
        <Button className="bg-brand-red hover:bg-brand-red/90 text-white p-3 min-w-12 rounded-md md:rounded-l-none">
          <Search size={20} />
        </Button>
      )
    }
  };
  
  const [activeTab, setActiveTab] = useState("buy");
  const isMobile = useIsMobile();
  
  return (
    <section 
      className="relative min-h-[60vh] md:min-h-[70vh] flex items-center justify-center bg-cover bg-center" 
      style={{ backgroundImage: "url('public/lovable-uploads/e409b63d-9dfc-4e79-9fae-347b5eb55b73.png')" }}>
      
      <div className="absolute inset-0 bg-black bg-opacity-30"></div>
      
      <div className="container mx-auto px-4 z-10 text-left w-full max-w-3xl ml-8 md:ml-16 lg:ml-24">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 md:mb-10 max-w-md leading-tight">
          {tabContents[activeTab].heading}
        </h1>
        
        <div className="max-w-lg bg-white rounded-lg shadow-lg overflow-hidden">
          <Tabs defaultValue="buy" value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className={`w-full flex overflow-x-auto ${isMobile ? 'gap-0.5' : 'gap-0'} bg-[#f0ece3] rounded-none h-auto`}>
              <TabsTrigger 
                value="buy" 
                className={`py-3 px-4 flex-1 font-medium text-sm whitespace-nowrap ${activeTab === 'buy' ? 'bg-white text-brand-navy font-semibold' : 'text-gray-700 hover:bg-gray-200'}`}
              >
                Buy
              </TabsTrigger>
              <TabsTrigger 
                value="rent" 
                className={`py-3 px-4 flex-1 font-medium text-sm whitespace-nowrap ${activeTab === 'rent' ? 'bg-white text-brand-navy font-semibold' : 'text-gray-700 hover:bg-gray-200'}`}
              >
                Rent
              </TabsTrigger>
              <TabsTrigger 
                value="sell" 
                className={`py-3 px-4 flex-1 font-medium text-sm whitespace-nowrap ${activeTab === 'sell' ? 'bg-white text-brand-navy font-semibold' : 'text-gray-700 hover:bg-gray-200'}`}
              >
                Sell
              </TabsTrigger>
              <TabsTrigger 
                value="mortgage"
                className={`py-3 px-4 flex-1 font-medium text-sm whitespace-nowrap ${activeTab === 'mortgage' ? 'bg-white text-brand-navy font-semibold' : 'text-gray-700 hover:bg-gray-200'}`}
              >
                Mortgage
              </TabsTrigger>
              <TabsTrigger 
                value="estimate" 
                className={`py-3 px-4 flex-1 font-medium text-sm whitespace-nowrap ${activeTab === 'estimate' ? 'bg-white text-brand-navy font-semibold' : 'text-gray-700 hover:bg-gray-200'}`}
              >
                My Home Value
              </TabsTrigger>
            </TabsList>
            
            <div className="p-0">
              <TabsContent value="buy" className="mt-0">
                <div className="flex flex-row">
                  <Input 
                    type="text" 
                    placeholder={tabContents.buy.placeholder}
                    className="w-full px-4 py-4 rounded-none border-0 border-r border-gray-200 text-gray-700 text-base"
                  />
                  {tabContents.buy.buttonComponent}
                </div>
              </TabsContent>
              
              <TabsContent value="rent" className="mt-0">
                <div className="flex flex-row">
                  <Input 
                    type="text" 
                    placeholder={tabContents.rent.placeholder}
                    className="w-full px-4 py-4 rounded-none border-0 border-r border-gray-200 text-gray-700 text-base"
                  />
                  {tabContents.rent.buttonComponent}
                </div>
              </TabsContent>
              
              <TabsContent value="sell" className="mt-0">
                <div className="flex flex-row">
                  <Input 
                    type="text" 
                    placeholder={tabContents.sell.placeholder}
                    className="w-full px-4 py-4 rounded-none border-0 border-r border-gray-200 text-gray-700 text-base"
                  />
                  {tabContents.sell.buttonComponent}
                </div>
              </TabsContent>
              
              <TabsContent value="mortgage" className="mt-0">
                <div className="flex flex-row">
                  <Input 
                    type="text" 
                    placeholder={tabContents.mortgage.placeholder}
                    className="w-full px-4 py-4 rounded-none border-0 border-r border-gray-200 text-gray-700 text-base"
                  />
                  {tabContents.mortgage.buttonComponent}
                </div>
              </TabsContent>
              
              <TabsContent value="estimate" className="mt-0">
                <div className="flex flex-row">
                  <Input 
                    type="text" 
                    placeholder={tabContents.estimate.placeholder}
                    className="w-full px-4 py-4 rounded-none border-0 border-r border-gray-200 text-gray-700 text-base"
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
