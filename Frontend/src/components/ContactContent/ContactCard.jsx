import React from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const ContactCard = () => {
  const contactInfo = [
    {
      id: 1,
      icon: <FaEnvelope className="text-5xl text-emerald-600" />,
      title: "Email Address",
      details: "jms211299@gmail.com",
      description: "Send us an email anytime for inquiries, quotes, or support",
      color: "from-emerald-600 to-emerald-400",
    },
    {
      id: 2,
      icon: <FaPhone className="text-5xl text-emerald-600" />,
      title: "Phone Number",
      details: "+91 9623982603",
      description: "Call us during business hours for immediate assistance",
      color: "from-emerald-600 to-emerald-400",
    },
    {
      id: 3,
      icon: <FaMapMarkerAlt className="text-5xl text-emerald-600" />,
      title: "Office Address",
      details: "Solapur, Maharashtra, India",
      description: "Plot no 15, Pravin Nagar, Dahitane, Solapur, Maharashtra, India",
      color: "from-emerald-600 to-emerald-400",
    }
  ];

  return (
    <div className="relative !py-16 !px-4 sm:!px-6 lg:!px-8 bg-gradient-to-br from-gray-50 to-blue-50 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute text-2xl md:text-3xl opacity-10 animate-float cursor-default"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${15 + (i * 2)}s`
            }}
          >
            {["📧", "📞", "📍", "🌍", "📱"][i % 5]}
          </div>
        ))}
      </div>

      <div className="container !mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center !mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 !mb-4">
            Get In <span className="text-transparent bg-clip-text bg-emerald-600">Touch</span>
          </h2>
          <p className="text-lg text-gray-600 !max-w-3xl !mx-auto !mb-6">
            We're here to help you with any questions about our products and services
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-600 to-emerald-400 !mx-auto rounded-full"></div>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {contactInfo.map((contact) => (
            <div
              key={contact.id}
              className="group relative bg-white rounded-2xl shadow-lg !p-8 overflow-hidden transition-all duration-500 hover:shadow-xl transform hover:-translate-y-2 h-full cursor-default"
            >
              {/* Animated background effect */}
              <div className={`absolute inset-0 bg-gradient-to-r ${contact.color} opacity-0 group-hover:opacity-5 transition-opacity duration-700`}></div>
              
              {/* Icon */}
              <div className="flex items-center justify-center !mb-6 transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 mx-auto">
                {contact.icon}
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 !mb-4 text-center group-hover:text-gray-800 transition-colors">
                {contact.title}
              </h3>
              
              <div className="text-center">
                <p className="text-lg font-semibold text-gray-800 group-hover:text-gray-900 transition-colors">
                  {contact.details}
                </p>
                <p className="text-gray-600 !mt-2 text-sm">
                  {contact.description}
                </p>
              </div>

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
          50% { transform: translateY(-10px) rotate(5deg); }
        }
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default ContactCard;
