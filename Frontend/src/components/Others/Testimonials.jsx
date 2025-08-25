import React, { useState, useEffect } from 'react';
import { FaQuoteLeft, FaStar, FaChevronLeft, FaChevronRight, FaUser, FaMapMarkerAlt, FaBriefcase } from 'react-icons/fa';
import User from '../../assets/user.png'

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    // Auto slide for mobile carousel
    if (isMobile) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % testimonials.length);
      }, 5000);
      
      return () => clearInterval(interval);
    }
    
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, [isMobile]);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const testimonials = [
    {
      id: 1,
      name: "Mr. Carlos Mendoza",
      position: "Onion Importer",
      city: "Philippines",
      message: "The onions arrived today and I must say - the freshness is outstanding. They're firm, clean, and have that natural aroma our local buyers appreciate. Even after the long journey, not a single mesh bag was damaged. This quality is far better than what we've received from other suppliers before. Looking forward to the next shipment!",
      image: User
    },
    {
      id: 2,
      name: "Mr. Khalid",
      position: "Fresh Fruit Importer",
      city: "Dubai",
      message: "We've been importing Indian bananas for the past year, but working with JMS Global Exporters was a completely different experience. The quality, consistency, and commitment they deliver are unmatched. Every shipment has arrived on time and in perfect condition. Highly recommended for anyone seeking reliable fresh produce from India.",
      image: User
    },
    {
      id: 3,
      name: "Mr. Pieter van Dijk",
      position: "Fresh Produce Importer",
      city: "Netherlands",
      message: "Just wanted to say the fruits arrived in perfect condition the freshness is unbelievable, and the taste is exactly what our customers expect here in the Netherlands. The bananas were naturally sweet, and the pomegranates had such rich flavor. Even after the long transit, everything was as fresh as if it was picked yesterday. We're really happy with this quality, keep it up!",
      image: User
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-emerald-50 to-cyan-50 overflow-hidden !py-16 !px-4 sm:!px-6 lg:!px-8">
      {/* Animated Fruit Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute text-3xl md:text-4xl opacity-10 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${20 + (i * 2)}s`
            }}
          >
            {["🍎", "🍊", "🍋", "🍇", "🍓", "🍑", "🍍", "🥭", "🥝", "🍒"][i % 10]}
          </div>
        ))}
      </div>

      <div className="container !mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center !mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 !mb-4">
            What Our <span className="text-transparent bg-clip-text bg-emerald-600">Clients Say</span>
          </h2>
          <p className="text-lg text-gray-600 !max-w-3xl !mx-auto !mb-6">
            Discover why businesses worldwide trust JMS Global Exporters for their premium agricultural products
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-600 to-emerald-400 !mx-auto rounded-full"></div>
        </div>

        {/* Desktop Grid View */}
        <div className="hidden md:grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`bg-white rounded-2xl shadow-lg !p-8 transition-all duration-700 transform hover:-translate-y-2 hover:shadow-xl ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              {/* Quote Icon */}
              <div className="text-emerald-600 text-4xl !mb-6">
                <FaQuoteLeft />
              </div>
              
              {/* Rating Stars */}
              {/* <div className="flex !mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FaStar key={i} className="text-emerald-400 text-lg" />
                ))}
              </div> */}
              
              {/* Testimonial Message */}
              <p className="text-gray-700 italic !mb-8 leading-relaxed">
                "{testimonial.message}"
              </p>
              
              {/* Client Info */}
              <div className="flex items-center">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full object-cover !mr-4 border-2 border-emerald-600"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <div className="flex items-center text-sm text-gray-600 !mt-1">
                    <FaBriefcase className="!mr-2 text-emerald-600" />
                    <span>{testimonial.position}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600 !mt-1">
                    <FaMapMarkerAlt className="!mr-2 text-emerald-600" />
                    <span>{testimonial.city}</span>
                  </div>
                </div>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute bottom-4 right-4 text-emerald-600 text-6xl opacity-30">
                <FaQuoteRight />
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Carousel View */}
        <div className="md:hidden relative">
          <div className="overflow-hidden rounded-2xl">
            <div 
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 !px-3">
                  <div className="bg-white rounded-2xl shadow-lg !p-8 h-full">
                    {/* Quote Icon */}
                    <div className="text-emerald-600 text-4xl !mb-6">
                      <FaQuoteLeft />
                    </div>
                    
                    {/* Rating Stars */}
                    <div className="flex !mb-6">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <FaStar key={i} className="text-emerald-400 text-lg" />
                      ))}
                    </div>
                    
                    {/* Testimonial Message */}
                    <p className="text-gray-700 italic !mb-8 leading-relaxed">
                      "{testimonial.message}"
                    </p>
                    
                    {/* Client Info */}
                    <div className="flex items-center">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name}
                        className="w-14 h-14 rounded-full object-cover !mr-4 border-2 border-emerald-600"
                      />
                      <div>
                        <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                        <div className="flex items-center text-sm text-gray-600 !mt-1">
                          <FaBriefcase className="!mr-2 text-emerald-600" />
                          <span>{testimonial.position}</span>
                        </div>
                        <div className="flex items-center text-sm text-gray-600 !mt-1">
                          <FaMapMarkerAlt className="!mr-2 text-emerald-600" />
                          <span>{testimonial.city}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Carousel Navigation Arrows */}
          <button 
            onClick={prevSlide}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center shadow-md z-10"
          >
            <FaChevronLeft className="text-emerald-600" />
          </button>
          <button 
            onClick={nextSlide}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center shadow-md z-10"
          >
            <FaChevronRight className="text-emerald-600" />
          </button>

          {/* Carousel Indicators */}
          <div className="flex justify-center !mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className="focus:outline-none"
                aria-label={`Go to slide ${index + 1}`}
              >
                <div className="w-10 h-1.5 bg-gray-300 rounded-full overflow-hidden">
                  <div 
                    className={`h-full rounded-full transition-all duration-500 ${
                      currentSlide === index 
                        ? 'bg-gradient-to-r from-emerald-600 to-emerald-400' 
                        : 'bg-gray-300'
                    }`}
                    style={{ 
                      width: currentSlide === index ? '100%' : '100%',
                      opacity: currentSlide === index ? 1 : 0.5
                    }}
                  ></div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Add custom animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(5deg); }
        }
        .animate-float {
          animation: float 10s ease-in-out infinite;
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .grid > div {
          animation: fadeInUp 0.6s ease-out forwards;
          animation-delay: calc(var(--index) * 0.2s);
        }
      `}</style>
    </div>
  );
};

// Add missing FaQuoteRight component
const FaQuoteRight = () => (
  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
    <path d="M464 32H336c-26.5 0-48 21.5-48 48v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48zm-288 0H48C21.5 32 0 53.5 0 80v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48z"></path>
  </svg>
);

export default Testimonials;