import React from 'react';
import { 
  FaBoxes, 
  FaLeaf, 
  FaTruck, 
  FaHandHoldingHeart, 
  FaShieldAlt, 
  FaTag,
  FaAppleAlt,
  FaCarrot,
  FaLemon,
  FaSeedling
} from 'react-icons/fa';

const AboutChooseUs = () => {
  const features = [
    {
      icon: <FaBoxes className="text-5xl text-emerald-600" />,
      title: "Extensive Product Selection",
      description: "Discover our diverse range of premium agricultural products, carefully curated to meet all your needs and preferences.",
      color: "from-emerald-600 to-emerald-400",
      bgColor: "blue"
    },
    {
      icon: <FaLeaf className="text-5xl text-emerald-600" />,
      title: "Farm-Fresh Quality Guarantee",
      description: "Experience the freshness of directly sourced produce from our partner farms, ensuring peak flavor and nutritional value.",
      color: "from-emerald-600 to-emerald-400",
      bgColor: "green"
    },
    {
      icon: <FaTruck className="text-5xl text-emerald-600" />,
      title: "Punctual Delivery Service",
      description: "Count on our reliable logistics network for on-time deliveries that keep your business running smoothly and efficiently.",
      color: "from-emerald-600 to-emerald-400",
      bgColor: "amber"
    },
    {
      icon: <FaHandHoldingHeart className="text-5xl text-emerald-600" />,
      title: "Eco-Conscious Sourcing",
      description: "Support sustainable farming practices with our ethically sourced products that prioritize environmental responsibility.",
      color: "from-emerald-600 to-emerald-400",
      bgColor: "teal"
    },
    {
      icon: <FaShieldAlt className="text-5xl text-emerald-600" />,
      title: "Premium Hygiene Standards",
      description: "Trust in our rigorous hygiene protocols and superior packaging that maintain product integrity from farm to table.",
      color: "from-emerald-600 to-emerald-400",
      bgColor: "purple"
    },
    {
      icon: <FaTag className="text-5xl text-emerald-600" />,
      title: "Competitive Pricing",
      description: "Enjoy exceptional value with our reasonable rates that don't compromise on quality or service excellence.",
      color: "from-emerald-600 to-emerald-400",
      bgColor: "red"
    }
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-green-50 to-cyan-50 overflow-hidden !py-16 !px-4 sm:!px-6 lg:!px-8">
      {/* Animated Fruit Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute text-3xl md:text-4xl opacity-15 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.7}s`,
              animationDuration: `${15 + (i * 2)}s`
            }}
          >
            {["🍎", "🍊", "🍋", "🍇", "🍓", "🍑", "🍍", "🥭", "🥦", "🥕"][i % 10]}
          </div>
        ))}
      </div>

      {/* Floating vegetable icons */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(8)].map((_, i) => {
          const icons = [FaAppleAlt, FaCarrot, FaLemon, FaSeedling];
          const IconComponent = icons[i % icons.length];
          return (
            <div
              key={i}
              className="absolute text-2xl text-green-200 animate-float"
              style={{
                left: `${5 + (i * 12)}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${i * 0.9}s`,
                animationDuration: `${20 + (i * 3)}s`
              }}
            >
              <IconComponent />
            </div>
          );
        })}
      </div>

      <div className="container !mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center !mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 !mb-4">
            Why <span className="text-transparent bg-clip-text bg-emerald-600">Choose Us</span>
          </h2>
          <p className="text-lg text-gray-600 !max-w-3xl !mx-auto !mb-6">
            Discover the unique advantages that make JMS Global Exporters your trusted partner for premium agricultural products
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-600 to-emerald-400 !mx-auto rounded-full"></div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-xl shadow-lg !p-6 overflow-hidden transition-all duration-500 hover:shadow-xl transform hover:-translate-y-1 h-full"
            >
              {/* Left-to-right fill effect on hover */}
              <div className={`absolute inset-0 bg-gradient-to-r ${feature.color} opacity-0 group-hover:opacity-10 transition-all duration-700 ease-out origin-left transform scale-x-0 group-hover:scale-x-100`}></div>
              
              {/* Icon Container */}
              <div className={`flex items-center justify-center !mb-6 transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 relative z-10`}>
                {feature.icon}
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-center text-gray-900 !mb-4 group-hover:text-gray-800 transition-colors relative z-10">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 text-center leading-relaxed group-hover:text-gray-700 transition-colors relative z-10">
                {feature.description}
              </p>

              {/* Floating particles on hover */}
              <div className="absolute inset-0 overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                {[1, 2, 3].map((dot) => (
                  <div 
                    key={dot}
                    className="absolute w-2 h-2 bg-emerald-400 rounded-full opacity-70"
                    style={{
                      top: `${20 + (dot * 20)}%`,
                      left: `${10 + (dot * 25)}%`,
                      animation: `float 3s infinite ease-in-out`,
                      animationDelay: `${dot * 0.5}s`
                    }}
                  ></div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Animation styles */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(5deg); }
        }
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default AboutChooseUs;