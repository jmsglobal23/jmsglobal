import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Category, Products } from '../assets/productData';
import { FaShoppingCart, FaEye, FaArrowRight } from 'react-icons/fa';

const CategoryPage = () => {
  const { categoryName } = useParams();
  const [hoveredProduct, setHoveredProduct] = useState(null);
  
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
            <FaArrowRight className="transform rotate-180 mr-2" />
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
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 !py-12 !px-4 sm:!px-6 lg:!px-8 relative overflow-hidden">
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

      <div className="container !mx-auto relative z-10">
        {/* Breadcrumb */}
        <nav className="flex mb-8" aria-label="Breadcrumb">
          <ol className="flex items-center !space-x-2">
            <li>
              <Link to="/" className="text-emerald-600 hover:text-emerald-700 transition-colors">
                Home
              </Link>
            </li>
            <li className="flex items-center">
              <span className="!mx-2 text-gray-400">/</span>
              <Link to='#' className="text-emerald-600 hover:text-emerald-700 transition-colors">
                Products
              </Link>
            </li>
            <li className="flex items-center">
              <span className="!mx-2 text-gray-400">/</span>
              <span className="text-gray-600">{category.name}</span>
            </li>
          </ol>
        </nav>

        {/* Category Header */}
        <div className="text-center !mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 !mb-4">
            {category.name}
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl !mx-auto">
            Discover our premium selection of {category.name.toLowerCase()} with the finest quality and taste
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-green-400 !mx-auto rounded-full !mt-4"></div>
        </div>
        
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
    </div>
  );
};

export default CategoryPage;