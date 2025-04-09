
import React, { useState } from 'react';
import { SendIcon } from 'lucide-react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // In a real app, this would send the email to a backend service
      console.log('Newsletter signup:', email);
      setSubmitted(true);
      setEmail('');
      // Reset the submitted state after 3 seconds
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  return (
    <section className="py-16 bg-brand-black">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-brand-white font-heading text-3xl md:text-4xl font-bold mb-4">
            JOIN THE MOVEMENT
          </h2>
          <p className="text-brand-gray text-lg mb-8">
            Sign up to receive exclusive offers, early access to new collections, and 15% off your first order.
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address" 
              className="flex-1 px-4 py-3 rounded-md border-2 border-brand-gray bg-transparent text-brand-white focus:border-brand-yellow focus:outline-none"
              required
            />
            <button 
              type="submit" 
              className="button-primary flex items-center justify-center gap-2 whitespace-nowrap"
              disabled={submitted}
            >
              {submitted ? 'THANK YOU!' : 'SUBSCRIBE'}
              {!submitted && <SendIcon size={16} />}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
