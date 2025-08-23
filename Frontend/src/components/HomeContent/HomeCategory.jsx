// HomeCategory.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaLeaf, FaAppleAlt, FaCarrot, FaSeedling, FaFire, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Category } from '../../assets/productData';

const HomeCategory = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Check if mobile view
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  // Auto-rotate carousel
  useEffect(() => {
    if (isMobile) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % Category.length);
      }, 7000);
      
      return () => clearInterval(interval);
    }
  }, [isMobile, Category.length]);

  // Icon mapping based on category name
  const getCategoryIcon = (name) => {
    if (name.includes('Fruit')) return <FaAppleAlt className="text-pink-500" />;
    if (name.includes('Vegetable')) return <FaCarrot className="text-orange-500" />;
    if (name.includes('Rice')) return <FaSeedling className="text-green-500" />;
    if (name.includes('Jaggery')) return <FaFire className="text-amber-600" />;
    return <FaLeaf className="text-emerald-500" />;
  };

  // Navigate carousel
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % Category.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + Category.length) % Category.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white !py-16 !px-4 sm:!px-6 lg:!px-8 overflow-hidden">
      <div className="container !mx-auto">
        {/* Header Section */}
        <div className="text-center !mb-16 relative">
          <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-32 h-32 bg-emerald-100 rounded-full opacity-30 blur-xl animate-pulse"></div>
          <h1 className="text-5xl font-bold text-gray-900 !mb-6 relative z-10">
            <span className="text-emerald-600">Fresh</span> Categories
          </h1>
          <p className="text-lg text-gray-600 !max-w-2xl !mx-auto !mb-6">
            Discover our premium selection of farm-fresh products, carefully curated for your health and taste buds.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-400 to-green-600 !mx-auto rounded-full"></div>
        </div>

        {/* Desktop Grid View */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 relative">
          {/* Animated background elements */}
          <div className="absolute -top-20 -left-20 w-72 h-72 bg-emerald-200 rounded-full opacity-10 animate-float"></div>
          <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-amber-200 rounded-full opacity-10 animate-float animation-delay-2000"></div>
          
          {Category.map((category, index) => (
            <Link 
              to={`/category/${category.name.toLowerCase().replace(/\s+/g, '-')}`}
              key={category.id}
              className="group relative overflow-hidden rounded-2xl shadow-lg transition-all duration-700 hover:shadow-2xl transform hover:-translate-y-2"
              onMouseEnter={() => setHoveredCard(category.id)}
              onMouseLeave={() => setHoveredCard(null)}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Animated border effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 via-green-500 to-teal-600 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 rounded-2xl"></div>
              
              {/* Main card content */}
              <div className="relative bg-white rounded-2xl h-full overflow-hidden z-10">
                {/* Category Image */}
                <div className="h-56 overflow-hidden relative">
                  <img 
                    src={category.image} 
                    alt={category.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-500"></div>
                  
                  {/* Icon badge */}
                  <div className="absolute top-4 right-4 w-12 h-12 bg-white/90 rounded-full flex items-center justify-center transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-12 shadow-md">
                    <div className="text-xl">
                      {getCategoryIcon(category.name)}
                    </div>
                  </div>
                  
                  {/* Hover indicator */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-emerald-400/20 rounded-full scale-0 group-hover:scale-100 transition-transform duration-500">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <FaArrowRight className="text-white text-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-300" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="!p-6 relative">
                  <h3 className="text-xl font-bold text-gray-900 !mb-2 transition-colors duration-300 group-hover:text-emerald-700">
                    {category.name}
                  </h3>
                  
                  {/* Animated progress bar */}
                  <div className="w-full bg-gray-200 rounded-full h-1.5 !mb-4">
                    <div 
                      className="bg-gradient-to-r from-emerald-400 to-green-600 h-1.5 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: hoveredCard === category.id ? '100%' : '0%' }}
                    ></div>
                  </div>
                  
                  {/* Hover button */}
                  <div className="flex items-center text-emerald-600 font-medium opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                    <span>Explore now</span>
                    <FaArrowRight className="!ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
                
                {/* Floating particles effect */}
                <div className="absolute inset-0 overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  {[1, 2, 3, 4, 5].map((dot) => (
                    <div 
                      key={dot}
                      className="absolute w-2 h-2 bg-emerald-400 rounded-full opacity-70"
                      style={{
                        top: `${20 + (dot * 10)}%`,
                        left: `${10 + (dot * 15)}%`,
                        animation: `float 3s infinite ease-in-out`,
                        animationDelay: `${dot * 0.5}s`
                      }}
                    ></div>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Mobile Carousel View */}
        <div className="md:hidden relative">
          <div className="overflow-hidden rounded-2xl">
            <div 
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {Category.map((category, index) => (
                <div key={category.id} className="w-full flex-shrink-0 !px-3">
                  <Link 
                    to={`/category/${category.name.toLowerCase().replace(/\s+/g, '-')}`}
                    className="group relative overflow-hidden rounded-2xl shadow-lg block"
                  >
                    {/* Main card content */}
                    <div className="relative bg-white rounded-2xl h-full overflow-hidden z-10">
                      {/* Category Image */}
                      <div className="h-56 overflow-hidden relative">
                        <img 
                          src={category.image} 
                          alt={category.name}
                          className="w-full h-full object-cover"
                        />
                        
                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-70"></div>
                        
                        {/* Icon badge */}
                        <div className="absolute top-4 right-4 w-12 h-12 bg-white/90 rounded-full flex items-center justify-center shadow-md">
                          <div className="text-xl">
                            {getCategoryIcon(category.name)}
                          </div>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="!p-6 relative">
                        <h3 className="text-xl font-bold text-gray-900 !mb-2 text-center">
                          {category.name}
                        </h3>
                        
                        {/* Explore button */}
                        <div className="flex items-center justify-center text-emerald-600 font-medium">
                          <span>Explore now</span>
                          <FaArrowRight className="!ml-2" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Carousel Navigation Arrows */}
          <button 
            onClick={prevSlide}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white/80 rounded-full flex items-center justify-center shadow-md z-10"
          >
            <FaChevronLeft className="text-emerald-600" />
          </button>
          <button 
            onClick={nextSlide}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white/80 rounded-full flex items-center justify-center shadow-md z-10"
          >
            <FaChevronRight className="text-emerald-600" />
          </button>

          {/* Carousel Indicators (Radio button lines) */}
          <div className="flex justify-center !mt-6 space-x-2">
            {Category.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className="focus:outline-none"
                aria-label={`Go to slide ${index + 1}`}
              >
                <div className="w-10 h-1.5 bg-gray-300 rounded-full overflow-hidden">
                  <div 
                    className={`h-full rounded-full transition-all duration-500 ${
                      currentSlide === index 
                        ? 'bg-gradient-to-r from-emerald-400 to-green-600' 
                        : 'bg-gray-300'
                    }`}
                    style={{ 
                      width: currentSlide === index ? '100%' : '100%',
                      opacity: currentSlide === index ? 1 : 0.5
                    }}
                  ></div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Add custom animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(5deg); }
        }
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </div>
  );
};

export default HomeCategory;