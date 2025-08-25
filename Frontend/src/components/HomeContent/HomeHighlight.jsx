// HomeHighlight.jsx
import React, { useState, useEffect } from 'react';
import { FaLeaf, FaArrowRight, FaRocket, FaHandshake } from 'react-icons/fa';
import { GiFruitBowl } from "react-icons/gi";
import { FaTruck } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { FaMoneyCheck } from "react-icons/fa";
import { Link } from 'react-router-dom';

const HomeHighlight = () => {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 4);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const steps = [
    {
      number: "01",
      title: "Evaluate Products",
      description: "Based on your needs we evaluate a range of products considering factors like quality, suitability for your climate. We'll recommend the best solution tailored to you.",
      icon: <GiFruitBowl className="text-5xl" />, // Increased from text-2xl to text-5xl
      color: "from-emerald-600 to-emerald-400",
      fruit: "🍎"
    },
    {
      number: "02",
      title: "Place your Order",
      description: "Once you have chosen your products, we make it easy to place an order. We ensure quick processing for documentation, logistics, packaging and custom clearance.",
      icon: <FaCartShopping className="text-5xl" />, // Increased from text-2xl to text-5xl
      color: "from-emerald-600 to-emerald-400",
      fruit: "🍇"
    },
    {
      number: "03",
      title: "Payment Terms",
      description: "Payment must be done in advance Or 50% Advance And 50% Against Bill Of Lading (BL) Is Compulsory. Secure and transparent payment process.",
      icon: <FaMoneyCheck className="text-5xl" />, // Increased from text-2xl to text-5xl
      color: "from-emerald-600 to-emerald-400",
      fruit: "🍍"
    },
    {
      number: "04",
      title: "Shipping & Delivery",
      description: "We Arrange Shipment via Sea, Air or Land Transport Based on your preference and urgency. Tracking Details are shared once dispatched.",
      icon: <FaTruck className="text-5xl" />, // Increased from text-2xl to text-5xl
      color: "from-emerald-600 to-emerald-400",
      fruit: "🍌"
    }
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-green-50 to-cyan-50 overflow-hidden !py-16 !px-4 sm:!px-6 lg:!px-8">
      {/* Animated Fruit Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute text-4xl opacity-10 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.7}s`,
              animationDuration: `${15 + (i * 2)}s`
            }}
          >
            {["🍎", "🍊", "🍋", "🍇", "🍓", "🍑", "🍍", "🥭"][i % 8]}
          </div>
        ))}
      </div>

      {/* Floating leaves */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute text-3xl text-green-200 animate-float"
            style={{
              left: `${10 + (i * 12)}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${20 + (i * 3)}s`
            }}
          >
            <FaLeaf />
          </div>
        ))}
      </div>

      <div className="container !mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center !mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 !mb-4">
            How It <span className="text-transparent bg-clip-text bg-emerald-600">Works</span>
          </h2>
          <p className="text-lg text-gray-600 !max-w-3xl !mx-auto !mb-6">
            Our simple and efficient process ensures you get the best quality products with seamless delivery
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-600 to-emerald-400 !mx-auto rounded-full"></div>
        </div>

        {/* Workflow Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`relative group cursor-pointer transition-all duration-500 ${activeStep === index ? 'transform -translate-y-2' : ''
                }`}
              onMouseEnter={() => setActiveStep(index)}
            >
              {/* Main Card */}
              <div className={`bg-white rounded-xl shadow-lg !p-6 h-full flex flex-col transition-all duration-500 overflow-hidden ${activeStep === index ? 'shadow-xl ring-2 ring-white ring-opacity-20' : 'opacity-90'
                }`}>
                {/* Number Badge */}
                <div className={`absolute -top-4 -left-4 w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-2xl z-10 bg-gradient-to-r ${step.color} shadow-lg transform group-hover:scale-110 transition-transform duration-300`}>
                  {step.number}
                </div>

                {/* Floating Fruit */}
                <div className="absolute -top-6 -right-6 text-6xl opacity-20 transform group-hover:scale-110 group-hover:rotate-12 transition-transform duration-500">
                  {step.fruit}
                </div>

                {/* Content - Adjusted spacing for larger icons */}
                <div className="!mt-10 !mb-6 flex justify-center"> {/* Increased margin for larger icons */}
                  <div className={`flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 text-emerald-600`}>
                    {step.icon}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 !mb-4 text-center group-hover:text-gray-800 transition-colors">
                  {step.title}
                </h3>

                <p className="text-gray-600 flex-grow text-center leading-relaxed group-hover:text-gray-700 transition-colors">
                  {step.description}
                </p>

                {/* Animated progress bar */}
                <div className="w-full bg-gray-200 rounded-full h-1.5 !mt-6 overflow-hidden">
                  <div
                    className={`h-1.5 rounded-full bg-gradient-to-r ${step.color} transition-all duration-1000 ease-out`}
                    style={{ width: activeStep === index ? '100%' : '0%' }}
                  ></div>
                </div>

                {/* Hover arrow */}
                <div className="flex justify-center !mt-4 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                  <div className={`w-8 h-8 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center text-white`}>
                    <FaArrowRight className="text-sm" />
                  </div>
                </div>
              </div>

              {/* Glow effect */}
              <div className={`absolute inset-0 rounded-xl bg-gradient-to-r ${step.color} opacity-0 group-hover:opacity-10 blur-md transition-opacity duration-500 -z-10`}></div>
            </div>
          ))}
        </div>

        {/* Progress Indicator */}
        <div className="flex justify-center !mt-12 space-x-2">
          {steps.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveStep(index)}
              className="focus:outline-none"
              aria-label={`Go to step ${index + 1}`}
            >
              <div className="w-10 h-2 bg-gray-300 rounded-full overflow-hidden transition-all duration-300 hover:scale-110">
                <div
                  className={`h-full rounded-full transition-all duration-500 ${activeStep === index ? 'bg-gradient-to-r from-emerald-600 to-emerald-400' : 'bg-gray-400'
                    }`}
                  style={{ width: activeStep === index ? '100%' : '30%' }}
                ></div>
              </div>
            </button>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center !mt-16">
          <div className="inline-flex flex-col items-center bg-white/80 backdrop-blur-sm rounded-2xl !p-8 shadow-lg border border-white">
            <h3 className="text-2xl font-bold text-gray-900 !mb-4">Ready to Get Started?</h3>
            <p className="text-gray-600 !mb-6 max-w-2xl">
              Join hundreds of satisfied customers who have experienced our seamless process and premium products
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/about">
                <button className="!px-6 !py-3  rounded-lg font-semibold flex items-center hover:shadow-xl border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-600 hover:text-white transition-all duration-300 transform cursor-pointer">
                  About JMS <FaRocket className="!ml-2" />
                </button>
              </Link>
              <Link to="/contact">
                <button className="!px-6 !py-3 bg-emerald-600 text-white backdrop-blur-md rounded-lg font-semibold hover:shadow-xl hover:bg-white hover:border-2 hover:border-emerald-600 hover:text-emerald-600 transition-all duration-300 cursor-pointer">
                  Contact Our Team <FaHandshake className="!ml-2 inline" />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Animation styles */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        .animate-float {
          animation: float 10s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default HomeHighlight;