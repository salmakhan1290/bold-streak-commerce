
import React from 'react';
import { MapPin, Clock, Phone, Mail } from 'lucide-react';

const LocationInfo = () => {
  return (
    <section className="py-16 bg-brand-light-gray">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="rounded-lg overflow-hidden shadow-md h-[300px] md:h-[400px]">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d423286.27405770525!2d-118.6411891!3d34.02016130000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c75ddc27da13%3A0xe22fdf6f254608f4!2sLos%20Angeles%2C%20CA%2C%20USA!5e0!3m2!1sen!2sin!4v1712627645414!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="PrimeEstates Office Location"
            ></iframe>
          </div>
          
          <div className="bg-white p-6 md:p-10 rounded-lg shadow-md">
            <h2 className="text-brand-navy font-heading text-2xl md:text-3xl font-bold mb-6">
              VISIT OUR <span className="text-brand-red">OFFICE</span>
            </h2>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <MapPin size={24} className="text-brand-red flex-shrink-0 mt-1" />
                <div className="ml-4">
                  <h4 className="font-bold text-brand-navy mb-1">Office Address</h4>
                  <p className="text-gray-700">
                    123 Real Estate Way<br />
                    Los Angeles, CA 90001
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Clock size={24} className="text-brand-red flex-shrink-0 mt-1" />
                <div className="ml-4">
                  <h4 className="font-bold text-brand-navy mb-1">Office Hours</h4>
                  <p className="text-gray-700">
                    Monday to Friday: 9:00 AM - 6:00 PM<br />
                    Saturday: 10:00 AM - 4:00 PM<br />
                    Sunday: By Appointment Only
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Phone size={24} className="text-brand-red flex-shrink-0 mt-1" />
                <div className="ml-4">
                  <h4 className="font-bold text-brand-navy mb-1">Contact</h4>
                  <p className="text-gray-700">
                    <a href="tel:8885551234" className="hover:text-brand-blue transition-colors">
                      (888) 555-1234
                    </a>
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Mail size={24} className="text-brand-red flex-shrink-0 mt-1" />
                <div className="ml-4">
                  <h4 className="font-bold text-brand-navy mb-1">Email</h4>
                  <p className="text-gray-700">
                    <a href="mailto:info@primeestates.com" className="hover:text-brand-blue transition-colors">
                      info@primeestates.com
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

export default LocationInfo;
