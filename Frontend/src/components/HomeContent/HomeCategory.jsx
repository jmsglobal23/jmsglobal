// HomeCategory.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Category } from "../../assets/productData";

const HomeCategory = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white !py-16 !px-4 sm:!px-6 lg:!px-8 overflow-hidden">
      <div className="container !mx-auto">
        {/* Header Section */}
        <div className="text-center !mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 !mb-4">
            Our Product{" "}
            <span className="text-transparent bg-clip-text bg-emerald-600">
              Categories
            </span>
          </h1>
          <p className="text-lg text-gray-600 !max-w-2xl !mx-auto">
            Explore our wide range of premium agricultural products
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {Category.map((category) => (
            <Link
              to={`/category/${category.name.toLowerCase().replace(/\s+/g, "-")}`}
              key={category.id}
              className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-500"
              onMouseEnter={() => setHoveredCard(category.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Image */}
              <div className="relative h-56 sm:h-64 md:h-72 overflow-hidden">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105 group-hover:-translate-y-1"
                />

                {/* Dark overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

                {/* Title - slides up */}
                <h3 className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-2xl md:text-3xl font-bold transition-all duration-500 group-hover:bottom-8">
                  {category.name}
                </h3>
              </div>

              {/* Progress bar below image */}
              <div className="w-full bg-gray-200 rounded-b-xl h-1.5 overflow-hidden">
                <div
                  className="h-1.5 bg-gradient-to-r from-emerald-400 to-green-500 transition-all duration-700 ease-out"
                  style={{ width: hoveredCard === category.id ? "100%" : "0%" }}
                ></div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeCategory;
