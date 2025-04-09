
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
    headline: "BREAK BOUNDARIES",
    subheading: "New Performance Collection",
    cta: "SHOP NOW",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop",
    path: "/collections/performance"
  },
  {
    id: 2,
    headline: "REDEFINE PERFORMANCE",
    subheading: "Engineered for Excellence",
    cta: "EXPLORE",
    image: "https://images.unsplash.com/photo-1556817411-31ae72fa3ea0?q=80&w=2070&auto=format&fit=crop",
    path: "/collections/engineered"
  },
  {
    id: 3,
    headline: "STREET CULTURE",
    subheading: "Urban Collection 2025",
    cta: "DISCOVER",
    image: "https://images.unsplash.com/photo-1507398941619-241fcc27bff3?q=80&w=1974&auto=format&fit=crop",
    path: "/collections/street"
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
              filter: 'brightness(0.7)'
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
              <Link 
                to={slide.path} 
                className="inline-flex items-center bg-brand-yellow text-brand-black px-6 py-3 rounded-md font-bold 
                hover:bg-opacity-90 transition-all duration-300 group"
              >
                {slide.cta}
                <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
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
