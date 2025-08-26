import React, { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Hero1 from '../../assets/hero1.png';
import Hero2 from '../../assets/hero2.png';
import Hero3 from '../../assets/hero3.png';
import Hero4 from '../../assets/hero4.png';
import Hero5 from '../../assets/hero5.png';
import Hero6 from '../../assets/hero6.png';
import Hero7 from '../../assets/hero7.png';
import { Link } from 'react-router-dom';

const HomeHero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState('next');
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  const slides = [
    {
      id: 1,
      title: "Find Perfect Export Company",
      description: "From Indian Farms to Global Markets – Freshness You Can Trust",
      buttonText: "Get Started",
      link: "/contact",
      bgImage: Hero1
    },
    {
      id: 2,
      title: "Huge Global Markets",
      description: "Supplying Premium Indian Fruits & Vegetables to the World",
      buttonText: "Our Blogs",
      link: "/blog",
      bgImage: Hero2
    },
    {
      id: 3,
      title: "Premium Quality",
      description: "Fresh, Certified, and Export-Ready – JMS Global Exporters",
      buttonText: "Learn More",
      link: "/about",
      bgImage: Hero3
    },
    {
      id: 4,
      title: "Global Export Excellence",
      description: "Connecting Indian Farmers with International Buyers",
      buttonText: "Explore Events",
      link: "/events",
      bgImage: Hero4
    },
    {
      id: 5,
      title: "Fresh From Farm",
      description: "Trusted Worldwide for Fresh Indian Fruits & Vegetable",
      buttonText: "View Popular Products",
      link: "/category/fresh-fruits-&-vegetables",
      bgImage: Hero5
    },
    {
      id: 6,
      title: "Quality Assurance",
      description: "Your Reliable Partner for Fresh Produce Exports from India",
      buttonText: "Our expertise",
      link: "/about#choose",
      bgImage: Hero6
    },
    {
      id: 7,
      title: "Sustainable Farming",
      description: "Delivering Quality, Freshness, and Trust Across Borders",
      buttonText: "Our location",
      link: "/contact",
      bgImage: Hero7
    }
  ];

  // Check screen size for responsive behavior
  useEffect(() => {
    const checkScreenSize = () => {
      const width = window.innerWidth;
      setIsMobile(width < 768);
      setIsTablet(width >= 768 && width < 1024);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => {
      window.removeEventListener('resize', checkScreenSize);
    };
  }, []);

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
    <div className="relative w-full h-[85vh] overflow-hidden">
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
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold !mb-4">
                {slide.title}
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl !mb-8 !max-w-2xl !mx-auto">
                {slide.description}
              </p>
              <Link to={`${slide.link}`}>
                <button className="bg-emerald-600 hover:bg-emerald-400 cursor-pointer text-white font-semibold !py-3 !px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105">
                  {slide.buttonText}
                </button>
              </Link>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation arrows - hidden on mobile, visible on tablet and desktop */}
      <button
        onClick={goToPrevSlide}
        className={`absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white !p-2 sm:!p-3 rounded-full hover:bg-opacity-70 transition-all duration-300 z-20 cursor-pointer ${isMobile ? '!hidden' : '!block'}`}
        aria-label="Previous slide"
      >
        <FaChevronLeft size={isTablet ? 20 : 24} />
      </button>

      <button
        onClick={goToNextSlide}
        className={`absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white !p-2 sm:!p-3 rounded-full hover:bg-opacity-70 transition-all duration-300 z-20 cursor-pointer ${isMobile ? '!hidden' : '!block'}`}
        aria-label="Next slide"
      >
        <FaChevronRight size={isTablet ? 20 : 24} />
      </button>

      {/* Line indicators with green active state - Responsive for 7 slides */}
      <div className="absolute bottom-4 sm:bottom-6 left-1/2 transform -translate-x-1/2 flex !space-x-1 sm:!space-x-2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-1.5 sm:h-2 transition-all duration-500 ease-in-out cursor-pointer rounded-full ${index === currentSlide 
              ? '!w-6 sm:!w-8 bg-emerald-600' 
              : '!w-2 sm:!w-3 bg-white bg-opacity-50 hover:bg-opacity-75'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      
    </div>
  );
};

export default HomeHero;