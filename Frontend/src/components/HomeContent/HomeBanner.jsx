import React, { useState, useEffect } from 'react';
import { FaRocket, FaAward, FaGlobe, FaUsers, FaHandshake, FaChartLine } from 'react-icons/fa';
import Logo from '../../assets/jms-logo.png';
import BGImage from '../../assets/hero1.png';

const HomeBanner = () => {
  const [currentText, setCurrentText] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % 3);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const rotatingTexts = [
    "Leading Export Company In India",
    "International Food Safety Standards",
    "Global Operations With Local Teams"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-r from-white to-[#f5fdf6] text-gray-800 overflow-hidden relative">
      {/* Animated fruit background elements */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute top-10 left-10 w-16 h-16 bg-[url('https://img.icons8.com/emoji/48/000000/banana.png')] bg-cover animate-fruit-float"></div>
        <div className="absolute bottom-20 right-20 w-16 h-16 bg-[url('https://img.icons8.com/emoji/48/000000/apple-emoji.png')] bg-cover animate-fruit-float animation-delay-1000"></div>
        <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-[url('https://img.icons8.com/emoji/48/000000/orange-emoji.png')] bg-cover animate-fruit-float animation-delay-2000"></div>
        <div className="absolute bottom-1/3 left-1/4 w-16 h-16 bg-[url('https://img.icons8.com/emoji/48/000000/mango.png')] bg-cover animate-fruit-float animation-delay-3000"></div>
      </div>

      <div className="container !mx-auto !px-4 !py-8 md:!py-16 lg:!py-24 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Content Section */}
          <div className={`flex-1 transition-all duration-1000 ease-out ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
            <div className="mb-6">
              <div className="inline-block !px-4 !py-2 bg-gray-800/10 backdrop-blur-md rounded-full !mb-6 border border-gray-400/30 hover:bg-gray-800/20 transition-colors duration-300">
                <span className="text-sm font-medium text-gray-700">Since 2019</span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold !mb-6 leading-tight">
                JMS Global <span className="text-transparent bg-clip-text bg-emerald-600">Exporters</span>
              </h1>

              {/* Rotating text element */}
              <div className="h-12 !mb-6 overflow-hidden">
                <div className="transition-transform duration-500 ease-in-out" style={{ transform: `translateY(-${currentText * 100}%)` }}>
                  {rotatingTexts.map((text, index) => (
                    <div key={index} className="text-lg sm:text-xl md:text-2xl text-blue-600 font-semibold !py-2">
                      {text}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="!space-y-4 !mb-8 text-base sm:text-lg text-gray-600">
              <p className="leading-relaxed">
                Started in 2019, JMS Global Exporters is a leading company in India, adhering to international food safety standards to deliver safe, hygienic, and healthy food to our consumers.
              </p>
              <p className="leading-relaxed">
                By eliminating unnecessary middlemen, optimizing logistics, reducing post-harvest losses, and ensuring trust and transparency, we achieve sustainability for farmers and provide quality assurance to consumers.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 !mb-8">
              <div className="flex items-center !p-3 bg-gray-100 rounded-lg backdrop-blur-md border border-gray-300 hover:bg-blue-100 hover:scale-105 transition-all duration-300">
                <FaGlobe className="text-blue-600 !mr-3 text-xl" />
                <span className="text-sm font-medium">Global Operations</span>
              </div>
              <div className="flex items-center !p-3 bg-gray-100 rounded-lg backdrop-blur-md border border-gray-300 hover:bg-emerald-100 hover:scale-105 transition-all duration-300">
                <FaAward className="text-emerald-600 !mr-3 text-xl" />
                <span className="text-sm font-medium">Quality Assurance</span>
              </div>
              <div className="flex items-center !p-3 bg-gray-100 rounded-lg backdrop-blur-md border border-gray-300 hover:bg-amber-100 hover:scale-105 transition-all duration-300">
                <FaUsers className="text-amber-600 !mr-3 text-xl" />
                <span className="text-sm font-medium">Local Teams</span>
              </div>
              <div className="flex items-center !p-3 bg-gray-100 rounded-lg backdrop-blur-md border border-gray-300 hover:bg-purple-100 hover:scale-105 transition-all duration-300">
                <FaChartLine className="text-purple-600 !mr-3 text-xl" />
                <span className="text-sm font-medium">Sustainable Growth</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <button className="!px-6 !py-3  rounded-lg font-semibold flex items-center hover:shadow-xl border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-600 hover:text-white transition-all duration-300 transform cursor-pointer">
                Explore Products <FaRocket className="!ml-2" />
              </button>
              <button className="!px-6 !py-3 bg-emerald-600 text-white backdrop-blur-md rounded-lg font-semibold hover:shadow-xl hover:bg-gray-200 hover:border-2 hover:border-emerald-600 hover:text-emerald-600 transition-all duration-300 cursor-pointer">
                Contact Us <FaHandshake className="!ml-2 inline" />
              </button>
            </div>
          </div>

          {/* Image Section with Logo Overlay */}
          <div className={`flex-1 relative transition-all duration-1000 ease-out ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
            <div className="relative">
              {/* Main background image */}
              <div className="aspect-square sm:aspect-video lg:aspect-square rounded-2xl overflow-hidden relative">
                <div 
                  className="w-full h-full bg-cover bg-center"
                  style={{ backgroundImage: `url(${BGImage})` }}
                >
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                  {/* Floating fruit elements */}
                  <div className="absolute top-4 right-4 w-10 h-10 bg-[url('https://img.icons8.com/emoji/48/000000/grapes-emoji.png')] bg-cover animate-fruit-float"></div>
                  <div className="absolute bottom-6 left-6 w-10 h-10 bg-[url('https://img.icons8.com/emoji/48/000000/strawberry-emoji.png')] bg-cover animate-fruit-float animation-delay-1500"></div>
                </div>

                {/* Company Logo Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-gray-100/30 backdrop-blur-xl !p-6 sm:!p-8 rounded-2xl border border-gray-300 transform hover:scale-105 transition-transform duration-500 hover:shadow-2xl">
                    <div className="bg-white !p-4 sm:!p-6 rounded-xl shadow-xl">
                      <div className="text-center">
                        <img src={Logo} alt="JMS Global Logo" className="w-[200px] sm:w-[250px] md:w-[300px]" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Animation styles */}
      <style jsx>{`
        @keyframes fruit-float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(5deg); }
        }
        .animate-fruit-float {
          animation: fruit-float 4s ease-in-out infinite;
        }
        .animation-delay-1000 {
          animation-delay: 1s;
        }
        .animation-delay-1500 {
          animation-delay: 1.5s;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-3000 {
          animation-delay: 3s;
        }
        @media (max-width: 640px) {
          .container {
            padding-left: 1rem !important;
            padding-right: 1rem !important;
          }
          h1 {
            font-size: 2rem !important;
          }
          .text-lg {
            font-size: 1rem !important;
          }
          .w-[300px] {
            width: 180px !important;
          }
        }
      `}</style>
    </div>
  );
};

export default HomeBanner;