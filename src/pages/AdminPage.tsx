
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const AdminPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold text-brand-navy mb-8">Admin Dashboard</h1>
          <p className="text-lg text-gray-700 mb-12">
            Welcome to the admin dashboard. This area is restricted to authorized personnel.
          </p>
          
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-brand-navy mb-6">Login Required</h2>
            <p className="text-gray-700 mb-6">
              Please log in with your admin credentials to access the dashboard.
            </p>
            <form className="space-y-4 max-w-md">
              <div>
                <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-blue"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label htmlFor="password" className="block text-gray-700 mb-2">Password</label>
                <input 
                  type="password" 
                  id="password" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-blue"
                  placeholder="Enter your password"
                />
              </div>
              <div className="flex items-center">
                <input 
                  type="checkbox" 
                  id="remember" 
                  className="mr-2"
                />
                <label htmlFor="remember" className="text-gray-700">Remember me</label>
              </div>
              <button 
                type="submit" 
                className="w-full bg-brand-navy text-white font-bold py-3 px-6 rounded-md hover:bg-opacity-90 transition-all duration-300"
              >
                Login
              </button>
              <div className="text-center">
                <a href="#" className="text-brand-blue hover:underline">Forgot Password?</a>
              </div>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AdminPage;
