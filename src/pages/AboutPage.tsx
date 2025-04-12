
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Building, Award, Users, Clock, Check } from 'lucide-react';
import Newsletter from '../components/Newsletter';

const AboutPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto mb-12">
            <h1 className="text-4xl font-bold text-brand-navy mb-8 text-center">About Prime Estates</h1>
            <p className="text-lg text-gray-700 mb-6">
              Prime Estates is a leading real estate company dedicated to helping clients find their dream homes and make smart property investments. Founded in 2005, we have grown to become one of the most trusted names in the real estate industry.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Our team of experienced real estate professionals is committed to providing exceptional service and personalized solutions for all your real estate needs, whether you're buying, selling, or renting a property.
            </p>
          </div>
          
          {/* Company Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-brand-red text-3xl font-bold mb-2">15+</div>
              <div className="text-brand-navy font-medium">Years of Experience</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-brand-red text-3xl font-bold mb-2">5,000+</div>
              <div className="text-brand-navy font-medium">Properties Sold</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-brand-red text-3xl font-bold mb-2">100+</div>
              <div className="text-brand-navy font-medium">Expert Agents</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-brand-red text-3xl font-bold mb-2">98%</div>
              <div className="text-brand-navy font-medium">Client Satisfaction</div>
            </div>
          </div>
          
          {/* Our Values */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-brand-navy mb-8 text-center">Our Core Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <div className="bg-brand-red p-3 rounded-full text-white mr-4">
                    <Check size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-brand-navy">Integrity</h3>
                </div>
                <p className="text-gray-700">
                  We conduct our business with the highest ethical standards, ensuring transparency and honesty in every transaction.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <div className="bg-brand-red p-3 rounded-full text-white mr-4">
                    <Users size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-brand-navy">Client-Focused</h3>
                </div>
                <p className="text-gray-700">
                  We prioritize our clients' needs and work tirelessly to exceed their expectations with personalized service.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <div className="bg-brand-red p-3 rounded-full text-white mr-4">
                    <Award size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-brand-navy">Excellence</h3>
                </div>
                <p className="text-gray-700">
                  We strive for excellence in everything we do, from property marketing to client communication and negotiation.
                </p>
              </div>
            </div>
          </div>
          
          {/* Our Team */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-brand-navy mb-8 text-center">Our Leadership Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map((item) => (
                <div key={item} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <img 
                    src="public/lovable-uploads/e301bc9f-6629-463c-8b23-fb3699e1780d.png" 
                    alt="Team member" 
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-brand-navy mb-1">John Doe</h3>
                    <p className="text-brand-red font-medium mb-3">Chief Executive Officer</p>
                    <p className="text-gray-700 mb-4">
                      With over 20 years of experience in real estate, John leads our company with passion and vision.
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <Newsletter />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
