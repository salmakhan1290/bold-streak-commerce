
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface Slide {
  id: number;
  headline: string;
  subheading: string;
  cta: string;
  image: string;
  path: string;
}

const slides: Slide[] = [
  {
    id: 1,
    headline: "ELEVATE YOUR STYLE",
    subheading: "New Season Collection",
    cta: "SHOP LATEST COLLECTION",
    image: "https://images.unsplash.com/photo-1617137968427-85924c800a22?q=80&w=2070&auto=format&fit=crop",
    path: "/new-arrivals"
  },
  {
    id: 2,
    headline: "FORMAL ELEGANCE",
    subheading: "Premium Shirts & Suits",
    cta: "EXPLORE FORMAL WEAR",
    image: "https://images.unsplash.com/photo-1594938291221-94f18cbb5660?q=80&w=2060&auto=format&fit=crop",
    path: "/formal-wear"
  },
  {
    id: 3,
    headline: "CASUAL COMFORT",
    subheading: "T-Shirts & Jeans Collection",
    cta: "DISCOVER CASUAL WEAR",
    image: "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?q=80&w=1974&auto=format&fit=crop",
    path: "/casual"
  }
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-[70vh] md:h-[85vh] overflow-hidden">
      {slides.map((slide, index) => (
        <div 
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ 
              backgroundImage: `url(${slide.image})`,
              filter: 'brightness(0.8)'
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
          
          <div className="relative h-full flex flex-col justify-center container mx-auto px-6 md:px-12">
            <div className="max-w-xl animate-fade-in">
              <h2 className="text-brand-yellow font-heading text-lg md:text-xl mb-2 tracking-wider">
                {slide.subheading}
              </h2>
              <h1 className="text-brand-white font-heading text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
                {slide.headline}
              </h1>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to={slide.path} 
                  className="inline-flex items-center bg-brand-yellow text-brand-black px-6 py-3 rounded-md font-bold 
                  hover:bg-opacity-90 transition-all duration-300 group"
                >
                  {slide.cta}
                  <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/bestsellers"
                  className="inline-flex items-center bg-transparent border border-white text-white px-6 py-3 rounded-md font-medium
                  hover:bg-white/10 transition-all duration-300"
                >
                  VIEW BESTSELLERS
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Slide indicators */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-1.5 rounded-full transition-all ${
              index === currentSlide ? 'w-8 bg-brand-yellow' : 'w-2 bg-white/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
