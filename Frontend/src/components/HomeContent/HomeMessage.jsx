// HomeMessage.jsx
import React, { useState } from 'react';
import { 
  FaEye, 
  FaBullseye, 
  FaRocket, 
  FaHeart, 
  FaUsers, 
  FaGlobe,
  FaLightbulb,
  FaHandshake,
  FaChartLine,
  FaLeaf
} from "react-icons/fa";

const HomeMessage = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const visionData = {
    title: "Our Vision",
    description: "To become the leading provider of premium quality agricultural products, setting new standards in freshness, sustainability, and customer satisfaction worldwide.",
    icon: <FaEye className="text-4xl" />,
    features: [
      "Global leadership in fresh produce",
      "Sustainable farming practices",
      "Innovation in agricultural technology",
      "Community development initiatives"
    ],
    color: "from-blue-500 to-indigo-600",
    bgColor: "blue"
  };

  const missionData = {
    title: "Our Mission",
    description: "To deliver the freshest, highest quality fruits, vegetables, and agricultural products to our customers while supporting local farmers and promoting environmentally responsible practices.",
    icon: <FaBullseye className="text-4xl" />,
    features: [
      "Source directly from local farmers",
      "Ensure premium quality standards",
      "Reduce environmental footprint",
      "Educate consumers about healthy eating"
    ],
    color: "from-green-500 to-emerald-600",
    bgColor: "green"
  };

  const valuesData = {
    title: "Our Values",
    description: "We are committed to integrity, quality, and sustainability in everything we do. Our values guide our decisions and shape our relationships with customers, partners, and communities.",
    icon: <FaHeart className="text-4xl" />,
    features: [
      "Integrity in all dealings",
      "Commitment to quality",
      "Environmental stewardship",
      "Community support"
    ],
    color: "from-amber-500 to-orange-600",
    bgColor: "amber"
  };

  const cards = [visionData, missionData, valuesData];

  const getIcon = (index) => {
    const icons = [FaRocket, FaUsers, FaGlobe, FaLightbulb, FaHandshake, FaChartLine, FaLeaf];
    const IconComponent = icons[index % icons.length];
    return <IconComponent className="text-lg" />;
  };

  return (
    <div className="bg-gradient-to-r from-white to-[#f5fdf6] !py-16 !px-4 sm:!px-6 lg:!px-8 overflow-hidden relative">
      {/* Background decorative elements */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-[#238c3c] rounded-full opacity-20 animate-float"></div>
      <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-[#238c3c] rounded-full opacity-20 animate-float animation-delay-2000"></div>
      <div className="absolute top-1/2 left-1/4 w-40 h-40 bg-[#238c3c] rounded-full opacity-15 animate-float animation-delay-3000"></div>
      
      <div className="container !mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center !mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 !mb-4">
            Our <span className="text-transparent bg-clip-text bg-emerald-600">Purpose</span>
          </h2>
          <p className="text-lg text-gray-600 !max-w-3xl !mx-auto">
            Discover what drives us to deliver the best quality products and services to our valued customers
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-600 to-emerald-400 !mx-auto !mt-6 rounded-full"></div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <div
              key={index}
              className={`relative group overflow-hidden rounded-2xl shadow-lg transition-all duration-700 hover:shadow-2xl transform hover:-translate-y-2 bg-white`}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Animated border effect */}
              <div className={`absolute inset-0 bg-gradient-to-r ${card.color} opacity-0 group-hover:opacity-100 transition-opacity duration-1000 rounded-2xl`}></div>
              
              {/* Main card content */}
              <div className="relative bg-white rounded-2xl h-full overflow-hidden z-10 !p-8">
                {/* Icon with gradient background */}
                <div className={`relative w-20 h-20 rounded-2xl bg-gradient-to-br ${card.color} !mb-6 flex items-center justify-center text-white transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 group-hover:rounded-[30%] mx-auto`}>
                  {card.icon}
                  
                  {/* Floating circles around icon */}
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-300"></div>
                  <div className="absolute -bottom-1 -left-1 w-4 h-4 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-500"></div>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-gray-900 !mb-4 text-center transition-colors duration-300 group-hover:text-gray-800">
                  {card.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 !mb-6 text-center leading-relaxed transition-all duration-500 group-hover:text-gray-700">
                  {card.description}
                </p>

                {/* Features list */}
                <ul className="space-y-3">
                  {card.features.map((feature, featureIndex) => (
                    <li 
                      key={featureIndex}
                      className="flex items-center opacity-90 transform transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-1"
                      style={{ transitionDelay: `${featureIndex * 100 + 300}ms` }}
                    >
                      <span className={`w-8 h-8 rounded-full bg-${card.bgColor}-100 flex items-center justify-center mr-3 group-hover:bg-${card.bgColor}-200 transition-colors duration-300`}>
                        {getIcon(featureIndex)}
                      </span>
                      <span className="text-gray-700 text-sm font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Hover effect line */}
                <div className="w-0 h-1 bg-gradient-to-r from-blue-400 to-green-400 rounded-full !mt-6 transform transition-all duration-700 group-hover:w-full"></div>
              </div>

              {/* Floating particles effect */}
              <div className="absolute inset-0 overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                {[1, 2, 3, 4].map((dot) => (
                  <div 
                    key={dot}
                    className="absolute w-2 h-2 bg-emerald-400 rounded-full opacity-70"
                    style={{
                      top: `${15 + (dot * 15)}%`,
                      left: `${5 + (dot * 20)}%`,
                      animation: `float 3s infinite ease-in-out`,
                      animationDelay: `${dot * 0.4}s`
                    }}
                  ></div>
                ))}
              </div>
            </div>
          ))}
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
        .animation-delay-3000 {
          animation-delay: 3s;
        }
        
        /* Card entrance animation */
        @keyframes cardEntrance {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .grid > div {
          animation: cardEntrance 0.6s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </div>
  );
};

export default HomeMessage;