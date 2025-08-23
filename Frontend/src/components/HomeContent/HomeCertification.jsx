import React, { useState, useEffect } from 'react';
import { FaAward, FaCertificate } from 'react-icons/fa';
import Company1 from '../../assets/certificate/apeda.png'
import Company2 from '../../assets/certificate/dgft.png'
import Company3 from '../../assets/certificate/Fssai.png'
import Company4 from '../../assets/certificate/gst.png'
import Company5 from '../../assets/certificate/halal.png'
import Company6 from '../../assets/certificate/icegate_port.png'
import Company7 from '../../assets/certificate/MSME.png'

const HomeCertification = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const certifications = [
    { id: 1, name: "ISO 9001 Certified", image: Company1 },
    { id: 2, name: "Organic Certified", image: Company2 },
    { id: 3, name: "Food Safety Certified", image: Company3 },
    { id: 4, name: "Export Excellence", image: Company4 },
    { id: 5, name: "Sustainable Farming", image: Company5 },
    { id: 6, name: "Quality Assurance", image: Company6 },
    { id: 7, name: "HACCP Certified", image: Company7 },
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-emerald-50 to-cyan-50 overflow-hidden !py-16 !px-4 sm:!px-6 lg:!px-8">
      {/* Background floating icons */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute text-2xl md:text-3xl opacity-15 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.7}s`,
              animationDuration: `${20 + (i * 2)}s`
            }}
          >
            {["🍎","🍊","🍇","🍓","🥦","🥕","🌽","🍆","🥬","🥒"][i % 10]}
          </div>
        ))}
      </div>

      <div className="container !mx-auto relative z-10">
        {/* Header */}
        <div className="text-center !mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 !mb-4">
            Our <span className="text-transparent bg-clip-text bg-emerald-600">Certifications</span>
          </h2>
          <p className="text-lg text-gray-600 !max-w-3xl !mx-auto !mb-6">
            Trusted by international standards and quality certifications that ensure the highest quality products
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-600 to-emerald-400 !mx-auto rounded-full"></div>
        </div>

        {/* Logos Section */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-10 md:gap-14 place-items-center">
          {certifications.map((cert, index) => (
            <div
              key={cert.id}
              className={`relative flex flex-col items-center transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Logo with animation */}
              <div className="relative w-28 h-28 sm:w-32 sm:h-32 flex items-center justify-center">
                <img
                  src={cert.image}
                  alt={cert.name}
                  className="w-full h-full object-contain transform transition-transform duration-700 hover:scale-110 hover:rotate-3"
                />
                {/* Floating award badge */}
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center text-white shadow-lg transform transition-transform duration-500 hover:scale-125 hover:rotate-12">
                  <FaAward className="text-xs" />
                </div>
              </div>
              {/* Title */}
              <p className="mt-4 text-sm md:text-base font-medium text-gray-700 group-hover:text-emerald-600 transition-colors duration-500">
                {cert.name}
              </p>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 !mt-16 bg-transparent backdrop-blur-sm rounded-2xl !p-8 shadow-lg border border-emerald-600">
          <div className="text-center">
            <div className="text-3xl font-bold text-emerald-600 !mb-2">100%</div>
            <div className="text-sm text-gray-600">Quality Certified</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-emerald-600 !mb-2">ISO</div>
            <div className="text-sm text-gray-600">Standards Compliant</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-emerald-600 !mb-2">100+</div>
            <div className="text-sm text-gray-600">Quality Checks</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-emerald-600 !mb-2">24/7</div>
            <div className="text-sm text-gray-600">Quality Monitoring</div>
          </div>
        </div>
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-12px) rotate(4deg); }
        }
        .animate-float {
          animation: float 12s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default HomeCertification;
