import React, { useState, useEffect } from 'react';
import { FaLeaf, FaTruck, FaAward, FaUsers, FaGlobe, FaSeedling, FaCheckCircle } from 'react-icons/fa';
import AboutImg from '../../assets/aboutleft.jpg'

const AboutUs = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    { icon: <FaLeaf className="text-xl" />, text: "Farm-Fresh Quality" },
    { icon: <FaTruck className="text-xl" />, text: "Timely Delivery" },
    { icon: <FaAward className="text-xl" />, text: "Quality Certified" },
    { icon: <FaGlobe className="text-xl" />, text: "Global Export" }
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-50 to-emerald-50 overflow-hidden !py-16 !px-4 sm:!px-6 lg:!px-8">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute text-3xl opacity-10 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${15 + (i * 2)}s`
            }}
          >
            {["🍎", "🍊", "🍋", "🍇", "🍓", "🍑", "🍍", "🥭", "🥦", "🥕"][i % 10]}
          </div>
        ))}
      </div>

      <div className="container !mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Image Column - Left */}
          <div className={`flex-1 transition-all duration-1000 ease-out ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
            <div className="relative">
              {/* Main Image */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-700">
                <img 
                  src={AboutImg} 
                  alt="JMS Global Exporters"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>

              {/* Floating Stats Cards */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg !p-4 transform hover:scale-105 transition-transform duration-300">
                <div className="text-center">
                  <div className="text-2xl font-bold text-emerald-600">04+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
              </div>

              <div className="absolute -top-6 -right-6 bg-emerald-500 text-white rounded-xl shadow-lg !p-4 transform hover:scale-105 transition-transform duration-300">
                <div className="text-center">
                  <div className="text-2xl font-bold">12+</div>
                  <div className="text-sm">Countries Served</div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-4 left-4 w-8 h-8 bg-emerald-400 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute bottom-4 right-4 w-6 h-6 bg-amber-400 rounded-full opacity-20 animate-pulse animation-delay-2000"></div>
            </div>
          </div>

          {/* Content Column - Right */}
          <div className={`flex-1 transition-all duration-1000 ease-out ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
            <div className="text-left">
              {/* Badge */}
              <div className="inline-flex items-center !px-4 !py-2 bg-emerald-100 rounded-full !mb-6">
                <FaSeedling className="text-emerald-600 !mr-2" />
                <span className="text-sm font-medium text-emerald-700">Trusted Since 2019</span>
              </div>

              {/* Title */}
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 !mb-6">
                About <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-green-500">JMS Global Exporters</span>
              </h2>

              {/* Description */}
              <div className="space-y-4 !mb-8">
                <p className="text-lg text-gray-700 leading-relaxed">
                  We are a premier supplier of fresh fruits and vegetables, delivering premium-quality produce 
                  directly from farms to destinations worldwide. From crisp, vibrant vegetables to succulent, 
                  juicy fruits, we guarantee freshness, reliability, and punctual delivery for businesses 
                  and households across the globe.
                </p>

                <p className="text-lg text-gray-700 leading-relaxed">
                  At JMS Global Exporters, we specialize in providing fresh, superior-quality agricultural 
                  products sourced directly from certified farms. With an unwavering commitment to excellence 
                  and timely distribution, we cater to a diverse clientele — including retail chains, 
                  supermarkets, hospitality establishments, restaurants, and individual consumers.
                </p>
              </div>

              {/* Features Grid */}
              <div className="grid grid-cols-2 gap-4 !mb-8">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center bg-white rounded-lg !p-3 shadow-sm hover:shadow-md transition-shadow duration-300">
                    <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 !mr-3">
                      {feature.icon}
                    </div>
                    <span className="text-sm font-medium text-gray-800">{feature.text}</span>
                  </div>
                ))}
              </div>

              {/* Why Choose Us */}
              <div className="bg-emerald-50 rounded-xl !p-6 !mb-8">
                <h4 className="font-semibold text-emerald-800 !mb-4 flex items-center">
                  <FaCheckCircle className="!mr-2 text-emerald-600" />
                  The JMS Global Exporters Advantages
                </h4>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm text-gray-700">
                    <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full !mr-3"></div>
                    Direct sourcing from certified farms ensures maximum freshness
                  </li>
                  <li className="flex items-center text-sm text-gray-700">
                    <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full !mr-3"></div>
                    Rigorous quality control at every stage of the supply chain
                  </li>
                  <li className="flex items-center text-sm text-gray-700">
                    <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full !mr-3"></div>
                    Sustainable and ethical farming practices
                  </li>
                  <li className="flex items-center text-sm text-gray-700">
                    <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full !mr-3"></div>
                    Global logistics expertise for seamless international delivery
                  </li>
                </ul>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4">
                <button className="!px-8 !py-3 bg-emerald-600 text-white rounded-lg font-semibold flex items-center hover:bg-emerald-700 transition-colors duration-300 transform hover:-translate-y-1">
                  Discover Our Products <FaTruck className="!ml-2" />
                </button>
                <button className="!px-8 !py-3 bg-white text-gray-700 border border-emerald-300 rounded-lg font-semibold flex items-center hover:bg-emerald-50 transition-colors duration-300">
                  Contact Our Team <FaUsers className="!ml-2" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Animation styles */}
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

export default AboutUs;