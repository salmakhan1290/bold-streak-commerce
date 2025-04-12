import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from 'react-router-dom';
import { useIsMobile } from '@/hooks/use-mobile';
const HeroSection = () => {
  // Tab content configuration with different headings for each tab
  const tabContents = {
    buy: {
      heading: "Find it. Tour it. Own it.",
      placeholder: "Enter an address, neighborhood, city, or ZIP code",
      buttonText: "Search",
      buttonComponent: <Button className="bg-brand-red hover:bg-brand-red/90 text-white p-3 h-full rounded-md md:rounded-l-none">
          <Search size={20} />
        </Button>
    },
    rent: {
      heading: "Search apartments & homes for rent",
      placeholder: "Enter a location or ZIP code",
      buttonText: "Search",
      buttonComponent: <Button className="bg-brand-red hover:bg-brand-red/90 text-white p-3 h-full rounded-md md:rounded-l-none">
          <Search size={20} />
        </Button>
    },
    sell: {
      heading: "Sell your home with confidence",
      placeholder: "Enter your home address",
      buttonText: "Get estimate",
      buttonComponent: <Button className="bg-brand-red hover:bg-brand-red/90 text-white p-3 h-full rounded-md md:rounded-l-none">
          <Search size={20} />
        </Button>
    },
    mortgage: {
      heading: "Get pre-approved for a mortgage",
      placeholder: "Enter property value, down payment",
      buttonText: "Calculate",
      buttonComponent: <Button className="bg-brand-red hover:bg-brand-red/90 text-white p-3 h-full rounded-md md:rounded-l-none">
          <Search size={20} />
        </Button>
    },
    estimate: {
      heading: "See how much your home is worth",
      placeholder: "Enter your street address",
      buttonText: "Get estimate",
      buttonComponent: <Button className="bg-brand-red hover:bg-brand-red/90 text-white p-3 h-full rounded-md md:rounded-l-none">
          <Search size={20} />
        </Button>
    }
  };
  const [activeTab, setActiveTab] = useState("buy");
  const isMobile = useIsMobile();
  return <section className="relative min-h-[60vh] md:min-h-[70vh] flex items-center justify-center bg-cover bg-center" style={{
    backgroundImage: "url('/lovable-uploads/e409b63d-9dfc-4e79-9fae-347b5eb55b73.png')"
  }}>
      
      <div className="absolute inset-0 bg-black bg-opacity-30"></div>
      
      <div className="container mx-auto z-10 text-left w-full max-w-3xl ml-8 md:ml-16 lg:ml-24 px-[10px]">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 md:mb-10 max-w-md leading-tight">
          {tabContents[activeTab].heading}
        </h1>
        
        <div className="max-w-lg bg-white rounded-lg shadow-lg overflow-hidden">
          <Tabs defaultValue="buy" value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className={`w-full flex overflow-x-auto ${isMobile ? 'gap-0.5' : 'gap-0'} bg-[#f0ece3] rounded-none h-auto`}>
              <TabsTrigger value="buy" className={`py-3 px-4 flex-1 font-medium text-sm whitespace-nowrap ${activeTab === 'buy' ? 'bg-white text-brand-navy font-semibold' : 'text-gray-700 hover:bg-gray-200'}`}>
                Buy
              </TabsTrigger>
              <TabsTrigger value="rent" className={`py-3 px-4 flex-1 font-medium text-sm whitespace-nowrap ${activeTab === 'rent' ? 'bg-white text-brand-navy font-semibold' : 'text-gray-700 hover:bg-gray-200'}`}>
                Rent
              </TabsTrigger>
              <TabsTrigger value="sell" className={`py-3 px-4 flex-1 font-medium text-sm whitespace-nowrap ${activeTab === 'sell' ? 'bg-white text-brand-navy font-semibold' : 'text-gray-700 hover:bg-gray-200'}`}>
                Sell
              </TabsTrigger>
              <TabsTrigger value="mortgage" className={`py-3 px-4 flex-1 font-medium text-sm whitespace-nowrap ${activeTab === 'mortgage' ? 'bg-white text-brand-navy font-semibold' : 'text-gray-700 hover:bg-gray-200'}`}>
                Mortgage
              </TabsTrigger>
              <TabsTrigger value="estimate" className={`py-3 px-4 flex-1 font-medium text-sm whitespace-nowrap ${activeTab === 'estimate' ? 'bg-white text-brand-navy font-semibold' : 'text-gray-700 hover:bg-gray-200'}`}>
                My Home Value
              </TabsTrigger>
            </TabsList>
            
            <div className="p-0">
              <TabsContent value="buy" className="mt-0">
                <div className="flex flex-col md:flex-row">
                  <Input type="text" placeholder={tabContents.buy.placeholder} className="w-full px-4 py-4 rounded-none border-0 md:border-r border-gray-200 text-gray-700 text-base" />
                  <div className="h-12 md:h-auto">
                    {tabContents.buy.buttonComponent}
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="rent" className="mt-0">
                <div className="flex flex-col md:flex-row">
                  <Input type="text" placeholder={tabContents.rent.placeholder} className="w-full px-4 py-4 rounded-none border-0 md:border-r border-gray-200 text-gray-700 text-base" />
                  <div className="h-12 md:h-auto">
                    {tabContents.rent.buttonComponent}
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="sell" className="mt-0">
                <div className="flex flex-col md:flex-row">
                  <Input type="text" placeholder={tabContents.sell.placeholder} className="w-full px-4 py-4 rounded-none border-0 md:border-r border-gray-200 text-gray-700 text-base" />
                  <div className="h-12 md:h-auto">
                    {tabContents.sell.buttonComponent}
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="mortgage" className="mt-0">
                <div className="flex flex-col md:flex-row">
                  <Input type="text" placeholder={tabContents.mortgage.placeholder} className="w-full px-4 py-4 rounded-none border-0 md:border-r border-gray-200 text-gray-700 text-base" />
                  <div className="h-12 md:h-auto">
                    {tabContents.mortgage.buttonComponent}
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="estimate" className="mt-0">
                <div className="flex flex-col md:flex-row">
                  <Input type="text" placeholder={tabContents.estimate.placeholder} className="w-full px-4 py-4 rounded-none border-0 md:border-r border-gray-200 text-gray-700 text-base" />
                  <div className="h-12 md:h-auto">
                    {tabContents.estimate.buttonComponent}
                  </div>
                </div>
              </TabsContent>
            </div>
          </Tabs>
        </div>
      </div>
    </section>;
};
export default HeroSection;