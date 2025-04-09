
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  location: string;
  image: string;
  quote: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Ravi Kumar",
    location: "Delhi",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop",
    quote: "The quality of shirts from Hit'z 99 Collection is exceptional. I've been a loyal customer for 2 years now, and their formal wear is perfect for both office and special occasions."
  },
  {
    id: 2,
    name: "Arjun Mehta",
    location: "Mumbai",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop",
    quote: "I ordered a complete formal set for my brother's wedding and was amazed by the fit and quality. The staff were also very helpful with size recommendations. Definitely coming back!"
  },
  {
    id: 3,
    name: "Amit Singh",
    location: "Srinagar",
    image: "https://images.unsplash.com/photo-1504257432389-52343af06ae3?q=80&w=1974&auto=format&fit=crop",
    quote: "The casual collection is stylish and comfortable. I appreciate that their clothes are durable and maintain their shape even after multiple washes. Great value for money."
  }
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent((current + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrent((current - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-brand-black font-heading text-3xl md:text-4xl font-bold mb-12 text-center">
          WHAT OUR <span className="text-brand-yellow">CUSTOMERS SAY</span>
        </h2>
        
        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="min-w-full px-4">
                  <div className="bg-white p-6 md:p-10 rounded-lg shadow-md flex flex-col md:flex-row items-center">
                    <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden flex-shrink-0 mb-6 md:mb-0 md:mr-8">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <Quote size={40} className="text-brand-yellow opacity-20 mb-4" />
                      <p className="text-gray-700 italic mb-6 text-lg leading-relaxed">
                        {testimonial.quote}
                      </p>
                      <div className="flex items-center">
                        <div>
                          <h4 className="font-bold text-brand-black">{testimonial.name}</h4>
                          <p className="text-sm text-gray-500">{testimonial.location}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <button 
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-8 bg-white rounded-full shadow-md p-2 focus:outline-none"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={24} className="text-brand-black" />
          </button>
          
          <button 
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-8 bg-white rounded-full shadow-md p-2 focus:outline-none"
            aria-label="Next testimonial"
          >
            <ChevronRight size={24} className="text-brand-black" />
          </button>
        </div>
        
        <div className="flex justify-center mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-3 h-3 mx-1 rounded-full ${
                current === index ? 'bg-brand-yellow' : 'bg-gray-300'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
