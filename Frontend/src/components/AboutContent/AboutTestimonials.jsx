import React, { useState, useEffect } from 'react';
import { FaQuoteLeft, FaStar, FaChevronLeft, FaChevronRight, FaMapMarkerAlt, FaBriefcase } from 'react-icons/fa';
import User from '../../assets/user.png';

const AboutTestimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const testimonials = [
    {
      id: 1,
      name: "Morocco Buyer",
      city: "Morocco",
      message: "Salam Junaid bhai, I just checked the onion consignment. Very clean, fresh and export standard. Your packing is perfect, no damage at all. You have won our trust, Insha’Allah we will place regular orders.",
      rating: 5,
      image: User
    },
    {
      id: 2,
      name: "Philippines Buyer",
      city: "Philippines",
      message: "Hi Junaid! Just want to say thank you. The mangoes are really sweet and fresh, better than what we expected. Our supermarket buyers are already asking for repeat supply. Great job, keep it up!",
      rating: 5,
      image: User
    },
    {
      id: 3,
      name: "Azerbaijan Buyer",
      city: "Azerbaijan",
      message: "Salam Junaid, I received the pomegranate containers today. The fruits are of premium quality, very fresh and tasty. My customers in Baku are satisfied. I will increase the volume next order, Insha’Allah.",
      rating: 5,
      image: User
    },
    {
      id: 4,
      name: "Netherlands Buyer",
      city: "Netherlands",
      message: "Dear Junaid, the drumstick shipment was delivered on time and all items are fresh. Your attention to quality and packaging makes a big difference. We are very happy to work with JMS Global Exporters.",
      rating: 5,
      image: User
    }
  ];

  const cardsPerSlide = 3; // Always show 3 cards
  const totalSlides = Math.ceil(testimonials.length / cardsPerSlide);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  // Group testimonials into slides of 3 cards
  const groupedTestimonials = [];
  for (let i = 0; i < testimonials.length; i += cardsPerSlide) {
    groupedTestimonials.push(testimonials.slice(i, i + cardsPerSlide));
  }

  return (
    <div
      className="relative min-h-screen bg-gradient-to-br from-emerald-50 to-cyan-50 overflow-hidden !py-16 !px-4 sm:!px-6 lg:!px-8"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="container !mx-auto relative z-10">
        {/* Header */}
        <div className="text-center !mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 !mb-4">
            What Our <span className="text-transparent bg-clip-text bg-emerald-600">Clients Say</span>
          </h2>
          <p className="text-lg text-gray-600 !max-w-3xl !mx-auto !mb-6">
            Discover why businesses worldwide trust JMS Global Exporters for their premium agricultural products
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-600 to-emerald-400 !mx-auto rounded-full"></div>
        </div>

        {/* Carousel */}
        <div className="relative">
          <div className="overflow-hidden rounded-2xl">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {groupedTestimonials.map((group, groupIndex) => (
                <div key={groupIndex} className="flex flex-shrink-0 w-full">
                  {group.map((testimonial) => (
                    <div
                      key={testimonial.id}
                      className="flex-shrink-0 !px-3"
                      style={{ width: `${100 / cardsPerSlide}%` }}
                    >
                      <div className="bg-white rounded-2xl shadow-lg !p-8 h-full hover:shadow-xl hover:scale-105 transition-all duration-300">
                        <div className="text-emerald-600 text-4xl !mb-6">
                          <FaQuoteLeft />
                        </div>
                        <div className="flex !mb-6">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <FaStar key={i} className="text-emerald-400 text-lg" />
                          ))}
                        </div>
                        <p className="text-gray-700 italic !mb-8 leading-relaxed">
                          "{testimonial.message}"
                        </p>
                        <div className="flex items-center">
                          <img
                            src={testimonial.image}
                            alt={testimonial.name}
                            className="w-14 h-14 rounded-full object-cover !mr-4 border-2 border-emerald-600"
                          />
                          <div>
                            <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
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
              ))}
            </div>
          </div>

          {/* Arrows (Visible on hover only) */}
          <button
            onClick={prevSlide}
            className={`absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center shadow-md z-10 transition-opacity duration-300 ${
              isHovered ? 'opacity-100 cursor-pointer' : 'opacity-0'
            }`}
          >
            <FaChevronLeft className="text-emerald-600" />
          </button>
          <button
            onClick={nextSlide}
            className={`absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center shadow-md z-10 transition-opacity duration-300 ${
              isHovered ? 'opacity-100 cursor-pointer' : 'opacity-0'
            }`}
          >
            <FaChevronRight className="text-emerald-600" />
          </button>

          {/* Indicators */}
          <div className="flex justify-center !mt-6 !space-x-2">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className="focus:outline-none cursor-pointer"
              >
                <div className="w-10 h-1.5 bg-gray-300 rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full transition-all duration-500 ${
                      currentSlide === index
                        ? 'bg-gradient-to-r from-emerald-600 to-emerald-400'
                        : 'bg-gray-300'
                    }`}
                    style={{
                      width: '100%',
                      opacity: currentSlide === index ? 1 : 0.5
                    }}
                  ></div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutTestimonials;