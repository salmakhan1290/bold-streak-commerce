
import React from 'react';
import { Link } from 'react-router-dom';
import { X, Plus, Minus, ShoppingBag, ArrowRight, MessageCircle } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  size: string;
  color: string;
  image: string;
}

// Sample cart data
const cartItems: CartItem[] = [
  {
    id: 1,
    name: "Classic White Formal Shirt",
    price: 799,
    quantity: 1,
    size: "M",
    color: "White",
    image: "https://images.unsplash.com/photo-1603252109303-2751441dd157?q=80&w=1974&auto=format&fit=crop"
  },
  {
    id: 2,
    name: "Slim Fit Black Denim",
    price: 1299,
    quantity: 2,
    size: "32",
    color: "Black",
    image: "https://images.unsplash.com/photo-1519058082700-08a0b56da9b4?q=80&w=1974&auto=format&fit=crop"
  }
];

const Cart = () => {
  const subtotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  const deliveryFee = subtotal >= 999 ? 0 : 99;
  const total = subtotal + deliveryFee;
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow py-8 md:py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl md:text-3xl font-bold text-brand-black mb-8">Your Shopping Cart</h1>
          
          {cartItems.length > 0 ? (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Cart Items */}
              <div className="lg:col-span-2">
                <div className="bg-white rounded-lg shadow-sm p-4 md:p-6">
                  <div className="space-y-6">
                    {cartItems.map((item) => (
                      <div key={item.id} className="flex flex-col sm:flex-row border-b border-gray-200 pb-6">
                        <div className="sm:w-24 h-24 bg-gray-100 rounded-md overflow-hidden mb-4 sm:mb-0 sm:mr-6">
                          <img src={item.image} alt={item.name} className="w-full h-full object-cover object-center" />
                        </div>
                        
                        <div className="flex-1">
                          <div className="flex justify-between">
                            <div>
                              <h3 className="text-brand-black font-medium">{item.name}</h3>
                              <p className="text-gray-500 text-sm mt-1">Size: {item.size} | Color: {item.color}</p>
                              <p className="text-brand-black font-bold mt-2">₹{item.price}</p>
                            </div>
                            <button className="text-gray-400 hover:text-red-500" aria-label="Remove item">
                              <X size={18} />
                            </button>
                          </div>
                          
                          <div className="flex justify-between items-center mt-4">
                            <div className="flex items-center border border-gray-300 rounded-md">
                              <button className="p-1 text-gray-500 hover:text-brand-black">
                                <Minus size={14} />
                              </button>
                              <span className="w-8 text-center text-gray-800">{item.quantity}</span>
                              <button className="p-1 text-gray-500 hover:text-brand-black">
                                <Plus size={14} />
                              </button>
                            </div>
                            <p className="font-bold text-brand-black">₹{item.price * item.quantity}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <Link to="/" className="text-brand-black font-medium hover:text-brand-yellow flex items-center">
                      <ShoppingBag size={16} className="mr-2" />
                      Continue Shopping
                    </Link>
                  </div>
                </div>
              </div>
              
              {/* Order Summary */}
              <div>
                <div className="bg-white rounded-lg shadow-sm p-4 md:p-6 sticky top-24">
                  <h2 className="text-lg font-bold text-brand-black mb-4">Order Summary</h2>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between text-gray-600">
                      <span>Subtotal</span>
                      <span>₹{subtotal}</span>
                    </div>
                    <div className="flex justify-between text-gray-600">
                      <span>Delivery Fee</span>
                      <span>{deliveryFee === 0 ? 'FREE' : `₹${deliveryFee}`}</span>
                    </div>
                    <div className="flex justify-between font-bold text-brand-black pt-3 border-t border-gray-200">
                      <span>Total</span>
                      <span>₹{total}</span>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="promo" className="block text-sm font-medium text-gray-700 mb-1">Promo Code</label>
                    <div className="flex">
                      <input
                        type="text"
                        id="promo"
                        className="flex-1 border-gray-300 rounded-l-md focus:ring-brand-yellow focus:border-brand-yellow text-sm py-2 px-3"
                        placeholder="Enter code"
                      />
                      <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded-r-md text-sm font-medium hover:bg-gray-300 transition-colors">
                        Apply
                      </button>
                    </div>
                  </div>
                  
                  <Button className="w-full bg-brand-black text-white hover:bg-brand-yellow hover:text-brand-black mb-3 py-5">
                    Checkout Now
                    <ArrowRight size={16} className="ml-2" />
                  </Button>
                  
                  <a 
                    href="https://wa.me/8899404820" 
                    className="flex items-center justify-center w-full border border-gray-300 rounded-md py-2 px-3 text-gray-700 hover:bg-gray-50"
                  >
                    <MessageCircle size={18} className="mr-2 text-green-600" />
                    Order via WhatsApp
                  </a>
                  
                  <div className="mt-6 pt-4 border-t border-gray-200 text-xs text-gray-500 space-y-2">
                    <p>Free delivery on orders over ₹999</p>
                    <p>Free returns within 30 days</p>
                    <p>Questions? Call us at <a href="tel:8899404820" className="text-brand-yellow">8899404820</a></p>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="bg-white rounded-lg shadow-sm p-8 text-center">
              <ShoppingBag size={48} className="mx-auto mb-4 text-gray-400" />
              <h2 className="text-xl font-bold text-brand-black mb-2">Your cart is empty</h2>
              <p className="text-gray-500 mb-6">Looks like you haven't added any items to your cart yet.</p>
              <Link to="/" className="inline-flex items-center bg-brand-yellow text-brand-black px-6 py-3 rounded-md font-medium hover:bg-opacity-90 transition-colors">
                Start Shopping
                <ArrowRight size={18} className="ml-2" />
              </Link>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Cart;
