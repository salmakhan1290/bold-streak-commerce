
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow flex items-center justify-center py-16">
        <div className="text-center px-4">
          <h1 className="text-8xl font-bold text-brand-black mb-6">404</h1>
          <h2 className="text-3xl font-bold text-brand-black mb-6">Page Not Found</h2>
          <p className="text-brand-gray text-xl max-w-md mx-auto mb-8">
            The page you are looking for doesn't exist or has been moved.
          </p>
          <Link 
            to="/" 
            className="button-primary inline-flex items-center"
          >
            Back to Homepage
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
