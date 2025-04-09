
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ShoppingBag, Star, Filter, X, ChevronDown, Check } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Newsletter from '../components/Newsletter';
import { useIsMobile } from '@/hooks/use-mobile';

// Sample categories and their details
const categoryDetails = {
  'shirts': {
    title: "Men's Shirts",
    banner: "https://images.unsplash.com/photo-1607345366928-199ea26cfe3e?q=80&w=1974&auto=format&fit=crop",
    description: "Discover our premium collection of men's shirts for every occasion. From formal shirts for business meetings to casual styles for everyday wear."
  },
  'formal-wear': {
    title: "Formal Wear",
    banner: "https://images.unsplash.com/photo-1617137968427-85924c800a22?q=80&w=2070&auto=format&fit=crop",
    description: "Elevate your professional style with our collection of premium formal wear. Crisp shirts, tailored suits, and elegant accessories."
  },
  't-shirts': {
    title: "T-Shirts",
    banner: "https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?q=80&w=1974&auto=format&fit=crop",
    description: "Casual, comfortable, and stylish t-shirts for every day. Choose from a range of colors, fits, and designs."
  },
  'jeans': {
    title: "Jeans",
    banner: "https://images.unsplash.com/photo-1542272604-787c3835535d?q=80&w=1926&auto=format&fit=crop",
    description: "Find your perfect fit with our range of quality denim. From slim fit to relaxed styles, we have jeans for every preference."
  },
  'accessories': {
    title: "Accessories",
    banner: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=1980&auto=format&fit=crop",
    description: "Complete your look with our range of men's accessories. Belts, wallets, ties, and more to add the finishing touch to any outfit."
  },
  'new-arrivals': {
    title: "New Arrivals",
    banner: "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?q=80&w=1974&auto=format&fit=crop",
    description: "Be the first to explore our latest styles. Fresh additions to our collection that keep you on trend."
  },
  'bestsellers': {
    title: "Best Sellers",
    banner: "https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?q=80&w=1951&auto=format&fit=crop",
    description: "Discover our most popular items loved by customers. Quality pieces that have proven their worth."
  },
  'sale': {
    title: "Sale",
    banner: "https://images.unsplash.com/photo-1607083206968-13611e3d76db?q=80&w=2030&auto=format&fit=crop",
    description: "Great styles at reduced prices. Limited-time offers on selected items across our collection."
  }
};

// Sample products for categories
const allProducts = [
  {
    id: 1,
    name: "Classic White Formal Shirt",
    price: 799,
    image: "https://images.unsplash.com/photo-1603252109303-2751441dd157?q=80&w=1974&auto=format&fit=crop",
    rating: 4.8,
    reviewCount: 42,
    category: "formal-wear",
    subcategory: "shirts",
    colors: ["White"],
    sizes: ["S", "M", "L", "XL"],
    isNew: false,
    isOnSale: false,
    path: "/products/classic-white-formal-shirt"
  },
  {
    id: 2,
    name: "Slim Fit Black Denim",
    price: 1299,
    image: "https://images.unsplash.com/photo-1519058082700-08a0b56da9b4?q=80&w=1974&auto=format&fit=crop",
    rating: 4.7,
    reviewCount: 36,
    category: "jeans",
    subcategory: "slim-fit",
    colors: ["Black"],
    sizes: ["30", "32", "34", "36"],
    isNew: false,
    isOnSale: false,
    path: "/products/slim-fit-black-denim"
  },
  {
    id: 3,
    name: "Premium Cotton T-Shirt",
    price: 449,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1780&auto=format&fit=crop",
    rating: 4.9,
    reviewCount: 51,
    category: "t-shirts",
    subcategory: "casual",
    colors: ["Grey", "Black", "White"],
    sizes: ["S", "M", "L", "XL"],
    isNew: false,
    isOnSale: true,
    originalPrice: 599,
    path: "/products/premium-cotton-t-shirt"
  },
  {
    id: 4,
    name: "Classic Fit Blazer",
    price: 2699,
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1771&auto=format&fit=crop",
    rating: 4.6,
    reviewCount: 28,
    category: "formal-wear",
    subcategory: "blazers",
    colors: ["Navy", "Black"],
    sizes: ["38", "40", "42", "44"],
    isNew: true,
    isOnSale: false,
    path: "/products/classic-fit-blazer"
  },
  {
    id: 5,
    name: "Casual Checkered Shirt",
    price: 699,
    image: "https://images.unsplash.com/photo-1561339429-d5da4e6dbe54?q=80&w=1974&auto=format&fit=crop",
    rating: 4.5,
    reviewCount: 34,
    category: "shirts",
    subcategory: "casual",
    colors: ["Blue", "Red"],
    sizes: ["S", "M", "L", "XL"],
    isNew: false,
    isOnSale: false,
    path: "/products/casual-checkered-shirt"
  },
  {
    id: 6,
    name: "Brown Leather Belt",
    price: 549,
    originalPrice: 699,
    image: "https://images.unsplash.com/photo-1603252109612-24fa03d38f8e?q=80&w=1974&auto=format&fit=crop",
    rating: 4.7,
    reviewCount: 26,
    category: "accessories",
    subcategory: "belts",
    colors: ["Brown"],
    sizes: ["One Size"],
    isNew: false,
    isOnSale: true,
    path: "/products/brown-leather-belt"
  },
  {
    id: 7,
    name: "Slim Fit Formal Shirt",
    price: 799,
    image: "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?q=80&w=1925&auto=format&fit=crop",
    rating: 4.4,
    reviewCount: 31,
    category: "formal-wear",
    subcategory: "shirts",
    colors: ["Light Blue", "White"],
    sizes: ["S", "M", "L", "XL"],
    isNew: true,
    isOnSale: false,
    path: "/products/slim-fit-formal-shirt"
  },
  {
    id: 8,
    name: "Casual Linen Shirt",
    price: 649,
    image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?q=80&w=1976&auto=format&fit=crop",
    rating: 4.3,
    reviewCount: 29,
    category: "shirts",
    subcategory: "casual",
    colors: ["Beige", "White"],
    sizes: ["S", "M", "L", "XL"],
    isNew: true,
    isOnSale: false,
    path: "/products/casual-linen-shirt"
  },
  {
    id: 9,
    name: "Graphic Print T-Shirt",
    price: 399,
    image: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=1974&auto=format&fit=crop",
    rating: 4.2,
    reviewCount: 22,
    category: "t-shirts",
    subcategory: "graphic",
    colors: ["Black", "White"],
    sizes: ["S", "M", "L", "XL"],
    isNew: true,
    isOnSale: false,
    path: "/products/graphic-print-t-shirt"
  },
  {
    id: 10,
    name: "Slim Fit Stretch Jeans",
    price: 1199,
    image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=1974&auto=format&fit=crop",
    rating: 4.6,
    reviewCount: 38,
    category: "jeans",
    subcategory: "slim-fit",
    colors: ["Blue"],
    sizes: ["30", "32", "34", "36"],
    isNew: true,
    isOnSale: false,
    path: "/products/slim-fit-stretch-jeans"
  },
  {
    id: 11,
    name: "Formal Trouser",
    price: 899,
    originalPrice: 1099,
    image: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?q=80&w=1974&auto=format&fit=crop",
    rating: 4.5,
    reviewCount: 27,
    category: "formal-wear",
    subcategory: "trousers",
    colors: ["Black", "Navy"],
    sizes: ["30", "32", "34", "36"],
    isNew: false,
    isOnSale: true,
    path: "/products/formal-trouser"
  },
  {
    id: 12,
    name: "Leather Wallet",
    price: 399,
    image: "https://images.unsplash.com/photo-1627123424574-724758594e93?q=80&w=1974&auto=format&fit=crop",
    rating: 4.8,
    reviewCount: 43,
    category: "accessories",
    subcategory: "wallets",
    colors: ["Brown", "Black"],
    sizes: ["One Size"],
    isNew: false,
    isOnSale: false,
    path: "/products/leather-wallet"
  }
];

// Filter types
type SortOption = 'featured' | 'price-low-to-high' | 'price-high-to-low' | 'newest' | 'top-rated';
type Filter = {
  categories: string[];
  priceRange: [number, number];
  sizes: string[];
  colors: string[];
  onSale: boolean;
  newArrivals: boolean;
};

const CategoryPage = () => {
  const { categoryId = 'new-arrivals' } = useParams<{ categoryId: string }>();
  const isMobile = useIsMobile();
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [sortBy, setSortBy] = useState<SortOption>('featured');
  const [filters, setFilters] = useState<Filter>({
    categories: [],
    priceRange: [0, 5000],
    sizes: [],
    colors: [],
    onSale: false,
    newArrivals: false
  });

  // Get category details
  const category = categoryDetails[categoryId as keyof typeof categoryDetails] || {
    title: "Products",
    banner: "https://images.unsplash.com/photo-1614771637369-ed94441a651a?q=80&w=1974&auto=format&fit=crop",
    description: "Browse our collection of quality men's clothing and accessories."
  };

  // Filter products based on category and other filters
  const filterProducts = () => {
    let filteredProducts = allProducts;
    
    // Filter by category
    if (categoryId !== 'new-arrivals' && categoryId !== 'bestsellers' && categoryId !== 'sale') {
      filteredProducts = filteredProducts.filter(product => 
        product.category === categoryId || product.subcategory === categoryId
      );
    }
    
    // Filter by new arrivals
    if (categoryId === 'new-arrivals') {
      filteredProducts = filteredProducts.filter(product => product.isNew);
    }
    
    // Filter by sale items
    if (categoryId === 'sale') {
      filteredProducts = filteredProducts.filter(product => product.isOnSale);
    }
    
    // Apply other filters
    if (filters.onSale) {
      filteredProducts = filteredProducts.filter(product => product.isOnSale);
    }
    
    if (filters.newArrivals) {
      filteredProducts = filteredProducts.filter(product => product.isNew);
    }
    
    if (filters.sizes.length > 0) {
      filteredProducts = filteredProducts.filter(product => 
        filters.sizes.some(size => product.sizes.includes(size))
      );
    }
    
    if (filters.colors.length > 0) {
      filteredProducts = filteredProducts.filter(product => 
        filters.colors.some(color => product.colors.includes(color))
      );
    }
    
    // Apply price range filter
    filteredProducts = filteredProducts.filter(product => 
      product.price >= filters.priceRange[0] && product.price <= filters.priceRange[1]
    );
    
    // Apply sorting
    switch (sortBy) {
      case 'price-low-to-high':
        filteredProducts.sort((a, b) => a.price - b.price);
        break;
      case 'price-high-to-low':
        filteredProducts.sort((a, b) => b.price - a.price);
        break;
      case 'newest':
        filteredProducts.sort((a, b) => (a.isNew === b.isNew) ? 0 : a.isNew ? -1 : 1);
        break;
      case 'top-rated':
        filteredProducts.sort((a, b) => b.rating - a.rating);
        break;
      default:
        // Leave in default order for 'featured'
        break;
    }
    
    return filteredProducts;
  };
  
  const products = filterProducts();
  
  const toggleFilter = (type: keyof Filter, value: string) => {
    setFilters(prev => {
      const array = prev[type] as string[];
      return {
        ...prev,
        [type]: array.includes(value) 
          ? array.filter(item => item !== value) 
          : [...array, value]
      };
    });
  };
  
  const toggleBooleanFilter = (type: 'onSale' | 'newArrivals') => {
    setFilters(prev => ({
      ...prev,
      [type]: !prev[type]
    }));
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Category Banner */}
        <div className="relative h-48 md:h-64 overflow-hidden">
          <img 
            src={category.banner} 
            alt={category.title}
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40" />
          <div className="absolute inset-0 flex flex-col justify-center px-4 container mx-auto">
            <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold mb-2">{category.title}</h1>
            <p className="text-white text-sm md:text-base max-w-2xl">{category.description}</p>
          </div>
        </div>
        
        <div className="container mx-auto px-4 py-8">
          {/* Filters and sort */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
            <button 
              className="inline-flex md:hidden items-center px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700"
              onClick={() => setMobileFiltersOpen(!mobileFiltersOpen)}
            >
              <Filter size={16} className="mr-2" />
              Filters
            </button>
            
            <p className="text-gray-600 text-sm">{products.length} products</p>
            
            <div className="flex items-center">
              <label htmlFor="sort" className="text-sm font-medium text-gray-700 mr-2">Sort by:</label>
              <select 
                id="sort"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as SortOption)}
                className="border-gray-300 rounded-md text-sm py-1.5 pl-3 pr-8 focus:ring-brand-yellow focus:border-brand-yellow"
              >
                <option value="featured">Featured</option>
                <option value="price-low-to-high">Price: Low to High</option>
                <option value="price-high-to-low">Price: High to Low</option>
                <option value="newest">Newest</option>
                <option value="top-rated">Top Rated</option>
              </select>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-6">
            {/* Filters - Desktop */}
            <div className="hidden md:block">
              <div className="sticky top-24 bg-white rounded-lg shadow-sm p-4">
                <h2 className="font-bold text-brand-black mb-4">Filters</h2>
                
                <div className="border-t border-gray-200 py-4">
                  <h3 className="font-medium text-sm mb-3">Price Range</h3>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs text-gray-500">₹{filters.priceRange[0]}</span>
                    <span className="text-xs text-gray-500">₹{filters.priceRange[1]}</span>
                  </div>
                  {/* Simple range representation - in a real app use a proper slider component */}
                  <div className="h-1 bg-gray-200 rounded-full mb-2">
                    <div className="h-1 bg-brand-yellow rounded-full" style={{ width: '70%' }}></div>
                  </div>
                </div>
                
                <div className="border-t border-gray-200 py-4">
                  <h3 className="font-medium text-sm mb-3">Size</h3>
                  <div className="flex flex-wrap gap-2">
                    {['S', 'M', 'L', 'XL', 'XXL'].map(size => (
                      <button 
                        key={size}
                        className={`px-3 py-1 text-xs rounded-md border ${
                          filters.sizes.includes(size) 
                            ? 'bg-brand-black text-white border-brand-black' 
                            : 'border-gray-300 text-gray-700 hover:border-gray-400'
                        }`}
                        onClick={() => toggleFilter('sizes', size)}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
                
                <div className="border-t border-gray-200 py-4">
                  <h3 className="font-medium text-sm mb-3">Color</h3>
                  <div className="flex flex-wrap gap-2">
                    {['Black', 'White', 'Blue', 'Grey', 'Brown'].map(color => (
                      <button 
                        key={color}
                        className={`inline-flex items-center gap-1 px-3 py-1 text-xs rounded-md border ${
                          filters.colors.includes(color) 
                            ? 'bg-gray-100 border-gray-400' 
                            : 'border-gray-300 hover:border-gray-400'
                        }`}
                        onClick={() => toggleFilter('colors', color)}
                      >
                        {filters.colors.includes(color) && <Check size={12} />}
                        {color}
                      </button>
                    ))}
                  </div>
                </div>
                
                <div className="border-t border-gray-200 py-4">
                  <div className="flex items-center mb-3">
                    <input 
                      type="checkbox" 
                      id="sale-filter"
                      checked={filters.onSale}
                      onChange={() => toggleBooleanFilter('onSale')}
                      className="h-4 w-4 text-brand-yellow focus:ring-brand-yellow rounded"
                    />
                    <label htmlFor="sale-filter" className="ml-2 text-sm">On Sale</label>
                  </div>
                  <div className="flex items-center">
                    <input 
                      type="checkbox" 
                      id="new-filter"
                      checked={filters.newArrivals}
                      onChange={() => toggleBooleanFilter('newArrivals')}
                      className="h-4 w-4 text-brand-yellow focus:ring-brand-yellow rounded"
                    />
                    <label htmlFor="new-filter" className="ml-2 text-sm">New Arrivals</label>
                  </div>
                </div>
                
                <button 
                  className="mt-2 text-sm text-brand-yellow hover:underline"
                  onClick={() => setFilters({
                    categories: [],
                    priceRange: [0, 5000],
                    sizes: [],
                    colors: [],
                    onSale: false,
                    newArrivals: false
                  })}
                >
                  Clear all filters
                </button>
              </div>
            </div>
            
            {/* Products Grid */}
            <div className="md:col-span-3">
              {products.length > 0 ? (
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                  {products.map((product) => (
                    <div key={product.id} className="group relative bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300">
                      <Link to={product.path} className="block">
                        <div className="relative aspect-square overflow-hidden">
                          <img 
                            src={product.image} 
                            alt={product.name}
                            className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                          />
                          
                          {product.isNew && (
                            <div className="absolute top-2 left-2 bg-brand-yellow text-brand-black text-xs font-bold px-2 py-1 rounded">
                              NEW
                            </div>
                          )}
                          
                          {product.isOnSale && (
                            <div className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                              SALE
                            </div>
                          )}
                          
                          <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                          
                          <button 
                            className="absolute bottom-3 right-3 bg-brand-black text-white rounded-full 
                            w-8 h-8 md:w-10 md:h-10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 
                            transform translate-y-4 group-hover:translate-y-0"
                            aria-label="Add to cart"
                          >
                            <ShoppingBag size={16} />
                          </button>
                        </div>
                        
                        <div className="p-3 md:p-4">
                          <div className="flex items-center mb-1 md:mb-2">
                            <div className="flex text-brand-yellow">
                              <Star size={12} fill="currentColor" stroke="none" />
                              <span className="ml-1 text-xs text-gray-500">{product.rating} ({product.reviewCount})</span>
                            </div>
                          </div>
                          <h3 className="text-brand-black text-sm md:text-base font-medium truncate">{product.name}</h3>
                          <div className="mt-1 flex items-center">
                            <span className="text-brand-black font-bold text-sm md:text-base">₹{product.price}</span>
                            {product.originalPrice && (
                              <span className="ml-2 text-gray-500 line-through text-xs md:text-sm">₹{product.originalPrice}</span>
                            )}
                          </div>
                        </div>
                      </Link>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="bg-white rounded-lg shadow-sm p-8 text-center">
                  <p className="text-gray-500 mb-4">No products match your current filters.</p>
                  <button 
                    className="text-brand-yellow hover:underline"
                    onClick={() => setFilters({
                      categories: [],
                      priceRange: [0, 5000],
                      sizes: [],
                      colors: [],
                      onSale: false,
                      newArrivals: false
                    })}
                  >
                    Clear all filters
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
        
        <Newsletter />
      </main>
      <Footer />
      
      {/* Mobile Filters Drawer */}
      {mobileFiltersOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div className="absolute inset-0 bg-black bg-opacity-50" onClick={() => setMobileFiltersOpen(false)} />
          <div className="absolute right-0 top-0 h-full w-4/5 max-w-xs bg-white shadow-xl flex flex-col">
            <div className="flex items-center justify-between p-4 border-b border-gray-200">
              <h2 className="font-bold text-brand-black">Filters</h2>
              <button onClick={() => setMobileFiltersOpen(false)}>
                <X size={20} />
              </button>
            </div>
            
            <div className="flex-1 overflow-y-auto p-4">
              {/* Mobile filters content - same as desktop but styled for mobile */}
              <div className="border-b border-gray-200 py-4">
                <h3 className="font-medium text-sm mb-3">Price Range</h3>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs text-gray-500">₹{filters.priceRange[0]}</span>
                  <span className="text-xs text-gray-500">₹{filters.priceRange[1]}</span>
                </div>
                <div className="h-1 bg-gray-200 rounded-full mb-2">
                  <div className="h-1 bg-brand-yellow rounded-full" style={{ width: '70%' }}></div>
                </div>
              </div>
              
              <div className="border-b border-gray-200 py-4">
                <h3 className="font-medium text-sm mb-3">Size</h3>
                <div className="flex flex-wrap gap-2">
                  {['S', 'M', 'L', 'XL', 'XXL'].map(size => (
                    <button 
                      key={size}
                      className={`px-3 py-1 text-xs rounded-md border ${
                        filters.sizes.includes(size) 
                          ? 'bg-brand-black text-white border-brand-black' 
                          : 'border-gray-300 text-gray-700 hover:border-gray-400'
                      }`}
                      onClick={() => toggleFilter('sizes', size)}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
              
              <div className="border-b border-gray-200 py-4">
                <h3 className="font-medium text-sm mb-3">Color</h3>
                <div className="flex flex-wrap gap-2">
                  {['Black', 'White', 'Blue', 'Grey', 'Brown'].map(color => (
                    <button 
                      key={color}
                      className={`inline-flex items-center gap-1 px-3 py-1 text-xs rounded-md border ${
                        filters.colors.includes(color) 
                          ? 'bg-gray-100 border-gray-400' 
                          : 'border-gray-300 hover:border-gray-400'
                      }`}
                      onClick={() => toggleFilter('colors', color)}
                    >
                      {filters.colors.includes(color) && <Check size={12} />}
                      {color}
                    </button>
                  ))}
                </div>
              </div>
              
              <div className="border-b border-gray-200 py-4">
                <div className="flex items-center mb-3">
                  <input 
                    type="checkbox" 
                    id="mobile-sale-filter"
                    checked={filters.onSale}
                    onChange={() => toggleBooleanFilter('onSale')}
                    className="h-4 w-4 text-brand-yellow focus:ring-brand-yellow rounded"
                  />
                  <label htmlFor="mobile-sale-filter" className="ml-2 text-sm">On Sale</label>
                </div>
                <div className="flex items-center">
                  <input 
                    type="checkbox" 
                    id="mobile-new-filter"
                    checked={filters.newArrivals}
                    onChange={() => toggleBooleanFilter('newArrivals')}
                    className="h-4 w-4 text-brand-yellow focus:ring-brand-yellow rounded"
                  />
                  <label htmlFor="mobile-new-filter" className="ml-2 text-sm">New Arrivals</label>
                </div>
              </div>
              
              <button 
                className="mt-4 text-sm text-brand-yellow hover:underline"
                onClick={() => {
                  setFilters({
                    categories: [],
                    priceRange: [0, 5000],
                    sizes: [],
                    colors: [],
                    onSale: false,
                    newArrivals: false
                  });
                  setMobileFiltersOpen(false);
                }}
              >
                Clear all filters
              </button>
            </div>
            
            <div className="p-4 border-t border-gray-200">
              <button 
                className="w-full bg-brand-black text-white py-2 rounded-md text-sm font-medium"
                onClick={() => setMobileFiltersOpen(false)}
              >
                Apply Filters
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CategoryPage;
