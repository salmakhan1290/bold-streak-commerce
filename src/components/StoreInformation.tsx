
import React from 'react';
import { MapPin, Clock, Phone, MessageCircle } from 'lucide-react';

const StoreInformation = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="rounded-lg overflow-hidden shadow-md h-[300px] md:h-[400px]">
            {/* In a real implementation, you would use a proper Google Maps integration */}
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3303.7598042550823!2d74.80018007461579!3d34.083725816285184!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38e18f8a1b2b1381%3A0x8671d02ab193811a!2sNoor%20Bagh%2C%20Cement%20Kadal%2C%20Srinagar!5e0!3m2!1sen!2sin!4v1712627465414!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Hit'z 99 Collection Store Location"
            ></iframe>
          </div>
          
          <div className="bg-white p-6 md:p-10 rounded-lg shadow-md">
            <h2 className="text-brand-black font-heading text-2xl md:text-3xl font-bold mb-6">
              VISIT OUR <span className="text-brand-yellow">STORE</span>
            </h2>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <MapPin size={24} className="text-brand-yellow flex-shrink-0 mt-1" />
                <div className="ml-4">
                  <h4 className="font-bold text-brand-black mb-1">Store Address</h4>
                  <p className="text-gray-700">
                    NOOR BAGH CEMENT KADAL NEAR OPPOSITE CRPF CAMP<br />
                    Srinagar, Jammu & Kashmir
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Clock size={24} className="text-brand-yellow flex-shrink-0 mt-1" />
                <div className="ml-4">
                  <h4 className="font-bold text-brand-black mb-1">Opening Hours</h4>
                  <p className="text-gray-700">
                    Monday to Saturday: 10:00 AM - 8:00 PM<br />
                    Sunday: 11:00 AM - 6:00 PM
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Phone size={24} className="text-brand-yellow flex-shrink-0 mt-1" />
                <div className="ml-4">
                  <h4 className="font-bold text-brand-black mb-1">Contact</h4>
                  <p className="text-gray-700">
                    <a href="tel:8899404820" className="hover:text-brand-yellow transition-colors">
                      +91 889 940 4820
                    </a>
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <MessageCircle size={24} className="text-brand-yellow flex-shrink-0 mt-1" />
                <div className="ml-4">
                  <h4 className="font-bold text-brand-black mb-1">WhatsApp</h4>
                  <p className="text-gray-700">
                    <a href="https://wa.me/8899404820" className="hover:text-brand-yellow transition-colors">
                      Message us on WhatsApp
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StoreInformation;
