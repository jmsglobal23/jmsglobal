import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Category, Products } from '../assets/productData';
import { FaShoppingCart, FaEye, FaArrowRight, FaHome, FaUtensils } from 'react-icons/fa';

const CategoryPage = () => {
  const { categoryName } = useParams();
  const [hoveredProduct, setHoveredProduct] = useState(null);
  const [imageLoaded, setImageLoaded] = useState(false);
  
  // Convert URL parameter back to category name format
  const formattedCategoryName = categoryName
    ? categoryName
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ')
    : '';

  // Find the category by name
  const category = Category.find(
    cat => cat.name.toLowerCase() === formattedCategoryName.toLowerCase()
  );

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, [categoryName]);
  
  // If category not found
  if (!category) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 flex items-center justify-center !px-4">
        <div className="text-center bg-white !p-8 rounded-2xl shadow-lg max-w-md w-full">
          <h2 className="text-2xl font-bold text-gray-800 !mb-4">Category not found</h2>
          <Link 
            to="/products" 
            className="inline-flex items-center text-emerald-600 font-semibold hover:text-emerald-700 transition-colors"
          >
            <FaArrowRight className="transform rotate-180 !mr-2" />
            Back to Products
          </Link>
        </div>
      </div>
    );
  }
  
  // Filter products by categoryId
  const categoryProducts = Products.filter(
    product => product.categoryId === category.id
  );
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 relative overflow-hidden">
      {/* Category Hero Section with Zoom Animation */}
      <div className="relative h-96 overflow-hidden">
        <div 
          className={`absolute inset-0 bg-cover bg-center transition-all duration-10000 ease-in-out transform scale-110 animate-zoom-in-out ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
          style={{ 
            backgroundImage: `url(${category.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          {/* Hidden image to preload and trigger loaded state */}
          <img 
            src={category.image} 
            alt="" 
            className="hidden" 
            onLoad={() => setImageLoaded(true)}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40"></div>
        </div>
        
        {/* Breadcrumb Overlay */}
        <div className="absolute top-0 left-0 w-full !p-6 z-10">
          <nav className="flex" aria-label="Breadcrumb">
            <ol className="flex items-center !space-x-2 text-white">
              <li>
                <Link to="/" className="text-emerald-100 hover:text-white transition-colors flex items-center">
                  <FaHome className="!mr-1" />
                  Home
                </Link>
              </li>
              <li className="flex items-center">
                <span className="!mx-2 text-emerald-200">/</span>
                <Link to="#" className="text-emerald-100 hover:text-white transition-colors flex items-center">
                  <FaUtensils className="!mr-1" />
                  Products
                </Link>
              </li>
              <li className="flex items-center">
                <span className="!mx-2 text-emerald-200">/</span>
                <span className="text-white font-medium">{category.name}</span>
              </li>
            </ol>
          </nav>
        </div>

        {/* Category Title Overlay */}
        <div className="absolute inset-0 flex items-center justify-center text-center !px-4 z-5">
          <div className="bg-white/20 backdrop-blur-sm rounded-2xl !p-8 border border-white/30 shadow-xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white !mb-2 drop-shadow-lg">
              {category.name}
            </h1>
            <p className="text-lg text-emerald-100 max-w-2xl !mx-auto drop-shadow-md">
              Premium Quality {category.name.toLowerCase()} for your culinary needs
            </p>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Animated Fruit Background Elements */}
      <div className="absolute top-10 left-5 animate-bounce opacity-20">
        <span className="text-5xl">🍎</span>
      </div>
      <div className="absolute top-1/3 right-8 animate-pulse opacity-20">
        <span className="text-6xl">🍊</span>
      </div>
      <div className="absolute bottom-1/4 left-10 animate-bounce opacity-20">
        <span className="text-7xl">🍋</span>
      </div>
      <div className="absolute top-20 right-1/4 animate-pulse opacity-20">
        <span className="text-5xl">🍇</span>
      </div>
      <div className="absolute bottom-40 right-16 animate-bounce opacity-20">
        <span className="text-6xl">🍉</span>
      </div>

      <div className="container !mx-auto relative z-10 !py-12 !px-4 sm:!px-6 lg:!px-8">
        {categoryProducts.length === 0 ? (
          <div className="text-center !py-12 bg-white rounded-2xl shadow-lg">
            <p className="text-xl text-gray-600 !mb-6">No products found in this category.</p>
            <Link 
              to="/products" 
              className="inline-flex items-center !px-6 !py-3 bg-emerald-600 text-white rounded-lg font-semibold hover:bg-emerald-700 transition-colors"
            >
              Browse All Products
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {categoryProducts.map((product) => (
              <div
                key={product.id}
                className="group relative bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-500 hover:shadow-xl transform hover:-translate-y-2"
                onMouseEnter={() => setHoveredProduct(product.id)}
                onMouseLeave={() => setHoveredProduct(null)}
              >
                {/* Product Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                </div>

                {/* Product Content */}
                <div className="!p-6">
                  <h3 className="text-xl font-bold text-gray-900 !mb-3 group-hover:text-emerald-700 transition-colors line-clamp-2">
                    {product.name}
                  </h3>
                  
                  <p className="text-gray-700 !mb-4 line-clamp-3">
                    {product.feature.length > 150 
                      ? `${product.feature.substring(0, 150)}...` 
                      : product.feature
                    }
                  </p>

                  <div className="flex justify-between items-center">
                    <Link
                      to={`/product/${product.slug}`}
                      className="inline-flex items-center text-emerald-600 font-semibold group-hover:text-emerald-700 transition-colors"
                    >
                      View Details
                      <FaArrowRight className="!ml-2 transform group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Add custom CSS for zoom animation */}
      <style>
        {`
          @keyframes zoom-in-out {
            0% { transform: scale(1.1); }
            50% { transform: scale(1.15); }
            100% { transform: scale(1.1); }
          }
          .animate-zoom-in-out {
            animation: zoom-in-out 15s ease-in-out infinite;
          }
        `}
      </style>
    </div>
  );
};

export default CategoryPage;