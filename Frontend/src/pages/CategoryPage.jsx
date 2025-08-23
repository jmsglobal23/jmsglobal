// CategoryPage.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import { Category, Products } from '../assets/productData';

const CategoryPage = () => {
  const { categoryName } = useParams();
  
  // Convert URL parameter back to category name format
  const formattedCategoryName = categoryName
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
  
  // Find the category by name
  const category = Category.find(
    cat => cat.name.toLowerCase() === formattedCategoryName.toLowerCase()
  );
  
  // If category not found
  if (!category) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <h2 className="text-2xl font-bold text-gray-800">Category not found</h2>
      </div>
    );
  }
  
  // Filter products by categoryId
  const categoryProducts = Products.filter(
    product => product.categoryId === category.id
  );
  
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">{category.name}</h2>
      
      {categoryProducts.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-xl text-gray-600">No products found in this category.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categoryProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="h-48 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-2">₹{product.price} {product.unit}</p>
                <button className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition-colors duration-300">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CategoryPage;