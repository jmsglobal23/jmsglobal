import React, { useState, useEffect } from 'react';
import { FaLeaf, FaTruck, FaAward, FaUsers, FaGlobe, FaSeedling, FaCheckCircle } from 'react-icons/fa';
import AboutImg from '../../assets/aboutleft.jpg';
import Logo from '../../assets/jms_logo.png';

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
          
          {/* Image Column */}
          <div className={`flex-1 w-full transition-all duration-1000 ease-out ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
            <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl">
              {/* Background Image */}
              <img 
                src={AboutImg} 
                alt="About JMS"
                className="absolute inset-0 w-full h-full object-cover"
                style={{ filter: 'brightness(0.7) contrast(1.1)' }}
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/20"></div>
              
              {/* Logo Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white/20 backdrop-blur-sm !p-6 sm:!p-8 rounded-2xl border border-white/30 transform hover:scale-105 transition-transform duration-700">
                  <div className="bg-white !p-4 sm:!p-6 rounded-xl shadow-2xl">
                    <img 
                      src={Logo} 
                      alt="JMS Global Exporters" 
                      className="w-32 sm:w-40 md:w-48 h-auto !mx-auto"
                    />
                    <div className="text-center !mt-3">
                      <p className="text-xs sm:text-sm text-gray-600 font-semibold">Since 2019</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Stats */}
              <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 bg-white rounded-xl shadow-lg !p-3 sm:!p-4 transform hover:scale-105 transition-transform duration-300 z-10">
                <div className="text-center">
                  <div className="text-lg sm:text-2xl font-bold text-emerald-600">04+</div>
                  <div className="text-xs sm:text-sm text-gray-600">Years Experience</div>
                </div>
              </div>

              <div className="absolute top-3 right-3 sm:top-4 sm:right-4 bg-emerald-500 text-white rounded-xl shadow-lg !p-3 sm:!p-4 transform hover:scale-105 transition-transform duration-300 z-10">
                <div className="text-center">
                  <div className="text-lg sm:text-2xl font-bold">12+</div>
                  <div className="text-xs sm:text-sm">Countries Served</div>
                </div>
              </div>

              {/* Decorative Pulses */}
              <div className="absolute top-4 left-4 w-6 h-6 sm:w-8 sm:h-8 bg-emerald-400 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute bottom-4 right-4 w-4 h-4 sm:w-6 sm:h-6 bg-amber-400 rounded-full opacity-20 animate-pulse animation-delay-2000"></div>
            </div>
          </div>

          {/* Content Column */}
          <div className={`flex-1 transition-all duration-1000 ease-out ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
            <div className="text-left">
              {/* Badge */}
              <div className="inline-flex items-center !px-3 !py-1.5 sm:!px-4 sm:!py-2 bg-emerald-100 rounded-full !mb-4 sm:!mb-6">
                <FaSeedling className="text-emerald-600 !mr-2" />
                <span className="text-xs sm:text-sm font-medium text-emerald-700">Trusted Since 2019</span>
              </div>

              {/* Title */}
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 !mb-4 sm:!mb-6">
                About <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-green-500">JMS Global Exporters</span>
              </h2>

              {/* Description */}
              <div className="!space-y-3 sm:!space-y-4 !mb-6 sm:!mb-8">
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                  We are a premier supplier of fresh fruits and vegetables, delivering premium-quality produce 
                  directly from farms to destinations worldwide.
                </p>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                  At JMS Global Exporters, we specialize in providing fresh, superior-quality agricultural 
                  products sourced directly from certified farms.
                </p>
              </div>

              {/* Features Grid */}
              <div className="grid grid-cols-2 gap-3 sm:gap-4 !mb-6 sm:!mb-8">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center bg-white rounded-lg !p-2 sm:!p-3 shadow-sm hover:shadow-md transition-shadow duration-300">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 !mr-2 sm:!mr-3">
                      {feature.icon}
                    </div>
                    <span className="text-xs sm:text-sm font-medium text-gray-800">{feature.text}</span>
                  </div>
                ))}
              </div>

              {/* Why Choose Us */}
              <div className="bg-emerald-50 rounded-xl !p-4 sm:!p-6 !mb-6 sm:!mb-8">
                <h4 className="font-semibold text-emerald-800 !mb-3 sm:!mb-4 flex items-center">
                  <FaCheckCircle className="!mr-2 text-emerald-600" />
                  The JMS Global Exporters Advantages
                </h4>
                <ul className="space-y-1.5 sm:space-y-2">
                  <li className="flex items-center text-xs sm:text-sm text-gray-700">
                    <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full !mr-2 sm:!mr-3"></div>
                    Direct sourcing from certified farms ensures maximum freshness
                  </li>
                  <li className="flex items-center text-xs sm:text-sm text-gray-700">
                    <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full !mr-2 sm:!mr-3"></div>
                    Rigorous quality control at every stage of the supply chain
                  </li>
                  <li className="flex items-center text-xs sm:text-sm text-gray-700">
                    <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full !mr-2 sm:!mr-3"></div>
                    Sustainable and ethical farming practices
                  </li>
                  <li className="flex items-center text-xs sm:text-sm text-gray-700">
                    <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full !mr-2 sm:!mr-3"></div>
                    Global logistics expertise for seamless international delivery
                  </li>
                </ul>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-3 sm:gap-4">
                <button className="!px-6 !py-2.5 sm:!px-8 sm:!py-3 bg-emerald-600 text-white rounded-lg font-semibold flex items-center hover:bg-emerald-700 transition-colors duration-300 transform hover:-translate-y-1 cursor-pointer text-sm sm:text-base">
                  Discover Our Products <FaTruck className="!ml-2" />
                </button>
                <button className="!px-6 !py-2.5 sm:!px-8 sm:!py-3 bg-white text-gray-700 border border-emerald-300 rounded-lg font-semibold flex items-center hover:bg-emerald-50 transition-colors duration-300 cursor-pointer text-sm sm:text-base">
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
