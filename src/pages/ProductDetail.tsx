
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ShoppingBag, Heart, Star, ChevronRight, Truck, ShieldCheck, MessageCircle, Plus, Minus } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from "@/components/ui/button";
import Newsletter from '../components/Newsletter';

// This would come from your API in a real app
const productData = {
  id: 1,
  name: "Classic White Formal Shirt",
  price: 799,
  originalPrice: 999,
  discount: "20%",
  description: "A timeless white formal shirt crafted from premium cotton. Features a classic collar, button cuffs, and a regular fit that's perfect for both business meetings and formal occasions.",
  material: "100% Cotton",
  care: "Machine wash cold, Tumble dry low, Iron on medium heat",
  features: [
    "Premium cotton fabric",
    "Classic collar",
    "Button cuffs",
    "Regular fit",
    "Crisp white color"
  ],
  images: [
    "https://images.unsplash.com/photo-1603252109303-2751441dd157?q=80&w=1974&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1598032895397-b9472444bf93?q=80&w=1780&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1564859228273-274232fdb516?q=80&w=1974&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1563630423918-b58f07336ac5?q=80&w=1974&auto=format&fit=crop"
  ],
  colors: [
    { name: "White", value: "#FFFFFF", selected: true },
    { name: "Light Blue", value: "#E0E8FF", selected: false },
    { name: "Pale Yellow", value: "#FFF8E0", selected: false }
  ],
  sizes: [
    { name: "S", available: true, selected: false },
    { name: "M", available: true, selected: true },
    { name: "L", available: true, selected: false },
    { name: "XL", available: true, selected: false },
    { name: "XXL", available: false, selected: false }
  ],
  rating: 4.8,
  reviewCount: 42,
  category: "Formal",
  relatedProducts: [2, 3, 5]
};

const ProductDetail = () => {
  const { productId } = useParams<{ productId: string }>();
  const [activeTab, setActiveTab] = useState<'description' | 'features' | 'reviews'>('description');
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);
  
  // In a real app, you would fetch product data based on productId
  const product = productData;
  
  const incrementQuantity = () => {
    setQuantity(prev => prev + 1);
  };
  
  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Breadcrumb */}
        <div className="bg-gray-50 py-3">
          <div className="container mx-auto px-4">
            <div className="flex items-center text-sm text-gray-500">
              <Link to="/" className="hover:text-brand-yellow">Home</Link>
              <ChevronRight size={14} className="mx-1" />
              <Link to="/formal-wear" className="hover:text-brand-yellow">{product.category}</Link>
              <ChevronRight size={14} className="mx-1" />
              <span className="text-brand-black font-medium truncate">{product.name}</span>
            </div>
          </div>
        </div>
        
        {/* Product Section */}
        <section className="py-8 md:py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Product Images */}
              <div>
                <div className="relative aspect-square mb-4 overflow-hidden rounded-lg bg-gray-100">
                  <img 
                    src={product.images[activeImage]} 
                    alt={product.name} 
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <div className="grid grid-cols-4 gap-2">
                  {product.images.map((image, index) => (
                    <button 
                      key={index} 
                      className={`aspect-square rounded overflow-hidden border-2 ${activeImage === index ? 'border-brand-yellow' : 'border-transparent'}`}
                      onClick={() => setActiveImage(index)}
                    >
                      <img 
                        src={image} 
                        alt={`${product.name} view ${index + 1}`} 
                        className="w-full h-full object-cover object-center"
                      />
                    </button>
                  ))}
                </div>
              </div>
              
              {/* Product Info */}
              <div className="flex flex-col">
                <div>
                  <h1 className="text-2xl md:text-3xl font-bold text-brand-black mb-2">{product.name}</h1>
                  
                  <div className="flex items-center mb-4">
                    <div className="flex text-brand-yellow mr-2">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          size={16} 
                          fill="currentColor" 
                          stroke="none"
                          className={i >= Math.floor(product.rating) ? 'opacity-50' : ''}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-500">({product.reviewCount} reviews)</span>
                  </div>
                  
                  <div className="flex items-center mb-6">
                    <span className="text-xl md:text-2xl font-bold text-brand-black">₹{product.price}</span>
                    {product.originalPrice && (
                      <>
                        <span className="text-gray-500 line-through ml-3">₹{product.originalPrice}</span>
                        <span className="ml-3 bg-red-100 text-red-600 text-xs px-2 py-1 rounded">Save {product.discount}</span>
                      </>
                    )}
                  </div>
                  
                  {/* Color Selection */}
                  <div className="mb-6">
                    <h3 className="text-sm font-medium text-gray-600 mb-2">Color</h3>
                    <div className="flex space-x-3">
                      {product.colors.map((color, index) => (
                        <button 
                          key={index} 
                          className={`h-8 w-8 rounded-full border ${color.selected ? 'ring-2 ring-brand-yellow' : 'ring-1 ring-gray-300'}`}
                          style={{ backgroundColor: color.value }}
                          title={color.name}
                          aria-label={`Select ${color.name} color`}
                        />
                      ))}
                    </div>
                  </div>
                  
                  {/* Size Selection */}
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-sm font-medium text-gray-600">Size</h3>
                      <button className="text-sm text-brand-yellow hover:underline">Size Guide</button>
                    </div>
                    <div className="flex space-x-2">
                      {product.sizes.map((size, index) => (
                        <button 
                          key={index} 
                          className={`h-10 w-12 flex items-center justify-center rounded border text-sm
                          ${size.selected 
                            ? 'bg-brand-black text-white border-brand-black' 
                            : size.available 
                              ? 'border-gray-300 text-gray-700 hover:border-gray-400' 
                              : 'border-gray-200 text-gray-400 cursor-not-allowed'
                          }`}
                          disabled={!size.available}
                        >
                          {size.name}
                        </button>
                      ))}
                    </div>
                  </div>
                  
                  {/* Quantity & Add to Cart */}
                  <div className="flex items-center mb-6">
                    <div className="flex items-center border border-gray-300 rounded-md mr-4">
                      <button 
                        className="p-2 text-gray-500 hover:text-brand-black"
                        onClick={decrementQuantity}
                        disabled={quantity <= 1}
                      >
                        <Minus size={16} />
                      </button>
                      <span className="w-10 text-center text-gray-800">{quantity}</span>
                      <button 
                        className="p-2 text-gray-500 hover:text-brand-black"
                        onClick={incrementQuantity}
                      >
                        <Plus size={16} />
                      </button>
                    </div>
                    
                    <Button 
                      className="flex-grow bg-brand-black text-white py-2.5 hover:bg-brand-yellow hover:text-brand-black transition-colors duration-300 mr-2"
                    >
                      <ShoppingBag size={18} className="mr-2" />
                      Add to Cart
                    </Button>
                    
                    <Button
                      variant="outline"
                      className="p-2.5 border-gray-300"
                      aria-label="Add to wishlist"
                    >
                      <Heart size={18} />
                    </Button>
                  </div>
                  
                  {/* Delivery & Returns */}
                  <div className="border-t border-gray-200 pt-6 space-y-4">
                    <div className="flex items-start">
                      <Truck size={18} className="text-gray-500 mt-0.5 mr-3" />
                      <div>
                        <p className="text-sm font-medium text-gray-700">Free delivery on orders over ₹999</p>
                        <p className="text-xs text-gray-500">Estimated delivery: 3-5 business days</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <ShieldCheck size={18} className="text-gray-500 mt-0.5 mr-3" />
                      <div>
                        <p className="text-sm font-medium text-gray-700">Free returns within 30 days</p>
                        <p className="text-xs text-gray-500">Return or exchange items easily</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <MessageCircle size={18} className="text-gray-500 mt-0.5 mr-3" />
                      <div>
                        <p className="text-sm font-medium text-gray-700">Questions about this product?</p>
                        <a href="https://wa.me/8899404820" className="text-xs text-brand-yellow hover:underline">Contact us on WhatsApp</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Product Details Tabs */}
            <div className="mt-12 border-t border-gray-200">
              <div className="flex border-b border-gray-200 mt-6">
                <button 
                  className={`pb-3 px-4 text-sm font-medium border-b-2 ${activeTab === 'description' ? 'border-brand-yellow text-brand-black' : 'border-transparent text-gray-500 hover:text-gray-700'}`}
                  onClick={() => setActiveTab('description')}
                >
                  Description
                </button>
                <button 
                  className={`pb-3 px-4 text-sm font-medium border-b-2 ${activeTab === 'features' ? 'border-brand-yellow text-brand-black' : 'border-transparent text-gray-500 hover:text-gray-700'}`}
                  onClick={() => setActiveTab('features')}
                >
                  Features & Care
                </button>
                <button 
                  className={`pb-3 px-4 text-sm font-medium border-b-2 ${activeTab === 'reviews' ? 'border-brand-yellow text-brand-black' : 'border-transparent text-gray-500 hover:text-gray-700'}`}
                  onClick={() => setActiveTab('reviews')}
                >
                  Reviews
                </button>
              </div>
              
              <div className="py-6">
                {activeTab === 'description' && (
                  <div>
                    <p className="text-gray-600 leading-relaxed">{product.description}</p>
                  </div>
                )}
                
                {activeTab === 'features' && (
                  <div>
                    <h3 className="font-medium text-brand-black mb-3">Features</h3>
                    <ul className="list-disc pl-5 mb-6 space-y-1 text-gray-600">
                      {product.features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                    
                    <h3 className="font-medium text-brand-black mb-3">Material</h3>
                    <p className="text-gray-600 mb-6">{product.material}</p>
                    
                    <h3 className="font-medium text-brand-black mb-3">Care Instructions</h3>
                    <p className="text-gray-600">{product.care}</p>
                  </div>
                )}
                
                {activeTab === 'reviews' && (
                  <div>
                    <div className="flex items-center mb-6">
                      <div className="mr-4">
                        <p className="text-4xl font-bold text-brand-black">{product.rating}</p>
                        <div className="flex text-brand-yellow">
                          {[...Array(5)].map((_, i) => (
                            <Star 
                              key={i} 
                              size={14} 
                              fill="currentColor" 
                              stroke="none"
                              className={i >= Math.floor(product.rating) ? 'opacity-50' : ''}
                            />
                          ))}
                        </div>
                        <p className="text-sm text-gray-500">{product.reviewCount} reviews</p>
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex items-center mb-1">
                          <span className="text-xs text-gray-500 w-8">5★</span>
                          <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                            <div className="h-full bg-brand-yellow rounded-full" style={{ width: '70%' }}></div>
                          </div>
                          <span className="text-xs text-gray-500 w-8 text-right">70%</span>
                        </div>
                        <div className="flex items-center mb-1">
                          <span className="text-xs text-gray-500 w-8">4★</span>
                          <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                            <div className="h-full bg-brand-yellow rounded-full" style={{ width: '20%' }}></div>
                          </div>
                          <span className="text-xs text-gray-500 w-8 text-right">20%</span>
                        </div>
                        <div className="flex items-center mb-1">
                          <span className="text-xs text-gray-500 w-8">3★</span>
                          <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                            <div className="h-full bg-brand-yellow rounded-full" style={{ width: '5%' }}></div>
                          </div>
                          <span className="text-xs text-gray-500 w-8 text-right">5%</span>
                        </div>
                        <div className="flex items-center mb-1">
                          <span className="text-xs text-gray-500 w-8">2★</span>
                          <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                            <div className="h-full bg-brand-yellow rounded-full" style={{ width: '3%' }}></div>
                          </div>
                          <span className="text-xs text-gray-500 w-8 text-right">3%</span>
                        </div>
                        <div className="flex items-center">
                          <span className="text-xs text-gray-500 w-8">1★</span>
                          <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                            <div className="h-full bg-brand-yellow rounded-full" style={{ width: '2%' }}></div>
                          </div>
                          <span className="text-xs text-gray-500 w-8 text-right">2%</span>
                        </div>
                      </div>
                    </div>
                    
                    <Button className="w-full md:w-auto bg-brand-yellow text-brand-black hover:bg-brand-black hover:text-white">
                      Write a Review
                    </Button>
                    
                    {/* Sample reviews would go here */}
                    <p className="text-gray-500 mt-6 italic">Customer reviews coming soon.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
        
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
};

export default ProductDetail;
