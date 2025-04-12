
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const ContactPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold text-brand-navy mb-8 text-center">Contact Us</h1>
          <p className="text-lg text-gray-700 mb-12 max-w-3xl mx-auto text-center">
            Have questions about our services or need assistance? Our team is here to help. Reach out to us using the contact information below or fill out the form.
          </p>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Contact Form */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-brand-navy mb-6">Send Us a Message</h2>
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-gray-700 mb-2">First Name</label>
                    <input 
                      type="text" 
                      id="firstName" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-blue"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-gray-700 mb-2">Last Name</label>
                    <input 
                      type="text" 
                      id="lastName" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-blue"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-blue"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-gray-700 mb-2">Phone</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-blue"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-gray-700 mb-2">Subject</label>
                  <select 
                    id="subject" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-blue"
                  >
                    <option value="">Select a subject</option>
                    <option value="buying">Buying a Property</option>
                    <option value="selling">Selling a Property</option>
                    <option value="renting">Renting a Property</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-gray-700 mb-2">Message</label>
                  <textarea 
                    id="message" 
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-blue"
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
            
            {/* Contact Information */}
            <div>
              <div className="bg-white p-8 rounded-lg shadow-md mb-8">
                <h2 className="text-2xl font-bold text-brand-navy mb-6">Contact Information</h2>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <MapPin size={24} className="text-brand-red mr-4 mt-1" />
                    <div>
                      <h3 className="font-bold text-brand-navy">Main Office</h3>
                      <p className="text-gray-700">
                        123 Real Estate Avenue<br />
                        Beverly Hills, CA 90210<br />
                        United States
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Phone size={24} className="text-brand-red mr-4 mt-1" />
                    <div>
                      <h3 className="font-bold text-brand-navy">Phone</h3>
                      <p className="text-gray-700">
                        Main: (555) 123-4567<br />
                        Toll-free: 1-800-555-REAL
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Mail size={24} className="text-brand-red mr-4 mt-1" />
                    <div>
                      <h3 className="font-bold text-brand-navy">Email</h3>
                      <p className="text-gray-700">
                        General Inquiries: info@primeestates.com<br />
                        Support: support@primeestates.com
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Clock size={24} className="text-brand-red mr-4 mt-1" />
                    <div>
                      <h3 className="font-bold text-brand-navy">Office Hours</h3>
                      <p className="text-gray-700">
                        Monday - Friday: 9:00 AM - 6:00 PM<br />
                        Saturday: 10:00 AM - 4:00 PM<br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold text-brand-navy mb-6">Our Locations</h2>
                <div className="aspect-[16/9] bg-gray-200 rounded-lg">
                  {/* Map would go here */}
                  <div className="h-full w-full flex items-center justify-center">
                    <p className="text-gray-500">Interactive Map</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;
