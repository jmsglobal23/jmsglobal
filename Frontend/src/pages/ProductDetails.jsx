import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Products } from '../assets/productData';
import { FaShoppingCart, FaArrowLeft, FaShare, FaCheck, FaArrowRight } from 'react-icons/fa';

const ProductDetails = () => {
  const { productSlug } = useParams();
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    const foundProduct = Products.find(p => p.slug === productSlug);
    setProduct(foundProduct);
    setIsLoading(false);
    
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, [productSlug]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-600"></div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 flex items-center justify-center !px-4">
        <div className="text-center bg-white !p-8 rounded-2xl shadow-lg max-w-md w-full">
          <h2 className="text-2xl font-bold text-gray-800 !mb-4">Product not found</h2>
          <Link 
            to={`/category/${category.id}`} 
            className="inline-flex items-center text-emerald-600 font-semibold hover:text-emerald-700 transition-colors"
          >
            <FaArrowLeft className="!mr-2" />
            Back to Products
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 !py-12 !px-4 sm:!px-6 lg:!px-8 overflow-hidden relative">
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
        <nav className="flex !mb-8" aria-label="Breadcrumb">
          <ol className="flex items-center !space-x-2">
            <li>
              <Link to="/" className="text-emerald-600 hover:text-emerald-700 transition-colors">
                Home
              </Link>
            </li>
            <li className="flex items-center">
              <span className="!mx-2 text-gray-400">/</span>
              <Link to="/products" className="text-emerald-600 hover:text-emerald-700 transition-colors">
                Products
              </Link>
            </li>
            <li className="flex items-center">
              <span className="!mx-2 text-gray-400">/</span>
              <Link to={`/category/${product.categoryName.toLowerCase().replace(/\s+/g, '-')}`} className="text-emerald-600 hover:text-emerald-700 transition-colors">
                {product.categoryName}
              </Link>
            </li>
            <li className="flex items-center">
              <span className="!mx-2 text-gray-400">/</span>
              <span className="text-gray-600">{product.name}</span>
            </li>
          </ol>
        </nav>

        {/* Back Button */}
        <Link
          to={`/category/${product.categoryName.toLowerCase().replace(/\s+/g, '-')}`}
          className="inline-flex items-center text-emerald-600 font-semibold !mb-8 hover:text-emerald-700 transition-colors"
        >
          <FaArrowLeft className="!mr-2" />
          Back to {product.categoryName}
        </Link>

        {/* Product Details */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 !mb-16">
          {/* Product Images */}
          <div className="bg-white rounded-2xl shadow-xl !p-6">
            <div className="h-96 !mb-4 flex items-center justify-center bg-gray-100 rounded-lg overflow-hidden">
              <img
                src={product.images[activeImage]}
                alt={product.name}
                className="object-contain max-h-full max-w-full"
              />
            </div>
            
            {product.images.length > 1 && (
              <div className="grid grid-cols-4 gap-4">
                {product.images.map((img, index) => (
                  <div
                    key={index}
                    className={`h-24 cursor-pointer rounded-lg overflow-hidden border-2 ${activeImage === index ? 'border-emerald-500' : 'border-transparent'} transition-all`}
                    onClick={() => setActiveImage(index)}
                  >
                    <img
                      src={img}
                      alt={`${product.name} ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="bg-white rounded-2xl shadow-xl !p-8">
            <h1 className="text-3xl font-bold text-gray-900 !mb-4">{product.name}</h1>
            
            <div className="flex items-center !mb-6">
              <span className="text-2xl font-bold text-emerald-600 !mr-4">Premium Quality</span>
            </div>

            <div className="!mb-6">
              <h3 className="text-lg font-semibold text-gray-900 !mb-2">Product Features</h3>
              <p className="text-gray-700 leading-relaxed">{product.feature}</p>
            </div>

            <div className="border-t border-gray-200 !pt-6">
              <p className="text-sm text-gray-600">
                Category: <span className="text-emerald-600">{product.categoryName}</span>
              </p>
            </div>
          </div>
        </div>

        {/* Product Description */}
        <div className="bg-white rounded-2xl shadow-xl !p-8 !mb-12">
          <h2 className="text-2xl font-bold text-gray-900 !mb-6">{product.descTitle}</h2>
          
          <div className="prose max-w-none">
            <ul className="!space-y-4">
              {product.description.map((item, index) => (
                <li key={index} className="flex">
                  <span className="text-emerald-500 font-bold !mr-3">{index + 1}.</span>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Related Products */}
        <div className="!mb-12">
          <h2 className="text-2xl font-bold text-gray-900 !mb-6">Related Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {Products.filter(p => p.categoryId === product.categoryId && p.id !== product.id)
              .slice(0, 3)
              .map(relatedProduct => (
                <div key={relatedProduct.id} className="bg-white rounded-2xl shadow-lg overflow-hidden transition-all hover:shadow-xl">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={relatedProduct.images[0]} 
                      alt={relatedProduct.name}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                  </div>
                  <div className="!p-4">
                    <h3 className="text-lg font-semibold text-gray-900 !mb-2">{relatedProduct.name}</h3>
                    <Link 
                      to={`/products/${relatedProduct.slug}`}
                      className="inline-flex items-center text-emerald-600 font-semibold hover:text-emerald-700 transition-colors"
                    >
                      View Product
                      <FaArrowRight className="!ml-2 transform group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;