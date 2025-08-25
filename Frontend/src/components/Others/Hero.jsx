import React from "react";
import { Link } from "react-router-dom";
import AboutBGImage from '../../assets/aboutbg.jpg'

const Hero = ({aboutHero, eventHero, blogHero, contactHero}) => {
   const heroContent = aboutHero || eventHero || blogHero || contactHero;
  return (
    <section className="relative w-full h-[70vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with zoom in/out animation */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed animate-zoom-in-out"
        style={{
          backgroundImage: `url(${heroContent?.HeroImage})`,
        }}
      ></div>

      {/* Gradient overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/20"></div>

      {/* Overlay Text */}
      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-4xl md:text-6xl font-bold !mb-4 drop-shadow-lg animate-fade-in-down">
          {heroContent?.title}
        </h1>
        {/* Breadcrumb */}
        <nav className="text-lg md:text-xl animate-fade-in-up">
          <ul className="flex items-center justify-center !space-x-2">
            <li>
              <Link
                to="/"
                className="hover:underline cursor-pointer text-emerald-400 hover:text-emerald-300 transition-colors duration-300"
              >
                Home
              </Link>
            </li>
            <li className="text-gray-300">/</li>
            <li className="text-white font-medium">{heroContent?.title}</li>
          </ul>
        </nav>
      </div>

      {/* Scrolling indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-emerald-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-emerald-400 rounded-full mt-2 animate-scroll"></div>
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes zoomInOut {
          0% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
          100% {
            transform: scale(1);
          }
        }
        
        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
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
        
        @keyframes scroll {
          0% {
            transform: translateY(0);
            opacity: 1;
          }
          100% {
            transform: translateY(15px);
            opacity: 0;
          }
        }
        
        .animate-zoom-in-out {
          animation: zoomInOut 20s ease-in-out infinite;
        }
        
        .animate-fade-in-down {
          animation: fadeInDown 1.5s ease-out forwards;
        }
        
        .animate-fade-in-up {
          animation: fadeInUp 1.5s ease-out forwards;
          animation-delay: 0.5s;
          opacity: 0;
        }
        
        .animate-scroll {
          animation: scroll 2s infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;