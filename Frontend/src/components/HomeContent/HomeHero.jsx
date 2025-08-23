import React, { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Hero1 from '../../assets/hero1.jpg';
import Hero2 from '../../assets/hero2.jpg';
import Hero3 from '../../assets/hero3.jpg';

const HomeHero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState('next');
  
  const slides = [
    {
      id: 1,
      title: "Find Perfect Export Company",
      description: "To deliver Safe,Hygenic And Healthy Food To Our Consumers",
      buttonText: "Get Started",
      bgImage: Hero1
    },
    {
      id: 2,
      title: "Summer Collection 2023",
      description: "Check out our new summer collection with exclusive designs and offers.",
      buttonText: "Shop Now",
      bgImage: Hero2
    },
    {
      id: 3,
      title: "Special Limited Time Offer",
      description: "Don't miss our special promotion with discounts up to 50% on selected items.",
      buttonText: "Learn More",
      bgImage: Hero3
    }
  ];

  // Auto slide change every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      goToNextSlide();
    }, 5000);
    
    return () => clearInterval(interval);
  }, [slides.length]);

  const goToNextSlide = () => {
    setDirection('next');
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const goToPrevSlide = () => {
    setDirection('prev');
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setDirection(index > currentSlide ? 'next' : 'prev');
    setCurrentSlide(index);
  };

  const getSlidePosition = (index) => {
    if (index === currentSlide) return 'translate-x-0';
    if (direction === 'next') {
      return index < currentSlide ? '-translate-x-full' : 'translate-x-full';
    } else {
      return index > currentSlide ? 'translate-x-full' : '-translate-x-full';
    }
  };

  return (
    <div className="relative w-full h-[85vh]  overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-transform duration-1000 ease-in-out ${getSlidePosition(index)}`}
        >
          {/* Background image with overlay */}
          <img 
            src={slide.bgImage} 
            alt={`Slide ${index + 1}`}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/64 bg-opacity-50"></div>
          
          {/* Content */}
          <div className="relative flex items-center justify-center h-full text-center text-white">
            <div className="!max-w-4xl !px-4 transform transition-all duration-1000 ease-in-out">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold !mb-4">
                {slide.title}
              </h1>
              <p className="text-xl md:text-2xl !mb-8 !max-w-2xl !mx-auto">
                {slide.description}
              </p>
              <button className="bg-emerald-600 hover:bg-emerald-400 cursor-pointer text-white font-semibold !py-3 !px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105">
                {slide.buttonText}
              </button>
            </div>
          </div>
        </div>
      ))}
      
      {/* Navigation arrows */}
      <button 
        onClick={goToPrevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white !p-3 rounded-full hover:bg-opacity-70 transition-all duration-300 z-20 cursor-pointer"
        aria-label="Previous slide"
      >
        <FaChevronLeft size={24} />
      </button>
      
      <button 
        onClick={goToNextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white !p-3 rounded-full hover:bg-opacity-70 transition-all duration-300 z-20 cursor-pointer"
        aria-label="Next slide"
      >
        <FaChevronRight size={24} />
      </button>
      
      {/* Line indicators with green active state */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex !space-x-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-1 transition-all duration-500 ease-in-out cursor-pointer rounded-full ${
              index === currentSlide ? '!w-8 bg-emerald-600' : '!w-4 bg-white bg-opacity-50 hover:bg-opacity-75'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HomeHero;