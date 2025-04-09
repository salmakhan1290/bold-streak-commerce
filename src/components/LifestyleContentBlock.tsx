
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const LifestyleContentBlock = () => {
  return (
    <section className="py-16 bg-brand-black">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="h-[60vh] overflow-hidden rounded-lg relative">
            <img 
              src="https://images.unsplash.com/photo-1514222709107-a180c68d72b4?q=80&w=1974&auto=format&fit=crop" 
              alt="Stylish men's fashion" 
              className="w-full h-full object-cover object-center"
            />
          </div>
          
          <div className="text-white p-4 md:p-8">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              STYLE THAT <span className="text-brand-yellow">SPEAKS</span>
            </h2>
            <p className="text-white/80 text-lg mb-6 leading-relaxed">
              At Hit'z 99 Collection, we believe that your style is an expression of who you are. Our carefully curated 
              collections are designed to help you make a statement without saying a word. From premium formal wear for 
              those important occasions to comfortable casual pieces for everyday elegance, we bring you clothing that 
              combines quality, comfort, and contemporary style.
            </p>
            <p className="text-white/80 text-lg mb-8 leading-relaxed">
              Each piece in our collection is thoughtfully crafted to ensure you not only look good but feel confident 
              in what you wear. Because when you feel good in what you wear, it shows.
            </p>
            <Link 
              to="/about" 
              className="inline-flex items-center bg-brand-yellow text-brand-black px-6 py-3 rounded-md font-bold 
              hover:bg-opacity-90 transition-all duration-300 group"
            >
              OUR STORY
              <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LifestyleContentBlock;
