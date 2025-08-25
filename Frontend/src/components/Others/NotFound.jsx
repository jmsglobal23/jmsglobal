// pages/NotFound.js
import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaArrowLeft, FaSearch, FaExclamationTriangle } from 'react-icons/fa';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 flex items-center justify-center !p-4 relative overflow-hidden">
      {/* Animated Fruit Background */}
      <div className="absolute top-10 left-5 animate-bounce opacity-20">
        <span className="text-5xl">🍎</span>
      </div>
      <div className="absolute top-1/4 right-8 animate-pulse opacity-20">
        <span className="text-6xl">🍊</span>
      </div>
      <div className="absolute bottom-1/3 left-10 animate-bounce opacity-20">
        <span className="text-7xl">🍋</span>
      </div>
      <div className="absolute top-20 right-1/4 animate-pulse opacity-20">
        <span className="text-5xl">🍇</span>
      </div>
      <div className="absolute bottom-40 right-16 animate-bounce opacity-20">
        <span className="text-6xl">🍉</span>
      </div>
      <div className="absolute top-1/2 left-1/4 animate-pulse opacity-20">
        <span className="text-6xl">🍓</span>
      </div>
      <div className="absolute bottom-20 left-1/3 animate-bounce opacity-20">
        <span className="text-5xl">🥭</span>
      </div>
      <div className="absolute top-1/3 right-20 animate-pulse opacity-20">
        <span className="text-6xl">🍍</span>
      </div>
      <div className="absolute bottom-10 right-1/3 animate-bounce opacity-20">
        <span className="text-5xl">🥝</span>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-2xl w-full">
        {/* Error Code */}
        <div className="!mb-8">
          <div className="text-9xl font-bold text-emerald-600 !mb-4 relative">
            4
            <span className="inline-block animate-bounce text-yellow-500">0</span>
            4
            <div className="absolute -top-4 -right-4">
              <FaExclamationTriangle className="text-red-500 text-4xl animate-pulse" />
            </div>
          </div>
        </div>

        {/* Message */}
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 !mb-6">
          Oops! Page Not Found
        </h1>
        
        <p className="text-xl text-gray-600 !mb-8 max-w-md !mx-auto">
          It looks like this page has gone on a little adventure. Maybe it's exploring 
          the orchard while we look for it?
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center !mb-8">
          <Link
            to="/"
            className="flex items-center justify-center bg-emerald-600 text-white !px-8 !py-4 rounded-xl font-semibold hover:bg-emerald-700 transition-all transform hover:scale-105 shadow-lg cursor-pointer"
          >
            <FaHome className="!mr-3" />
            Go Home
          </Link>
          
          <button
            onClick={() => window.history.back()}
            className="flex items-center justify-center border-2 border-emerald-600 text-emerald-600 !px-8 !py-4 rounded-xl font-semibold hover:bg-emerald-50 transition-all transform hover:scale-105 cursor-pointer"
          >
            <FaArrowLeft className="!mr-3" />
            Go Back
          </button>
        </div>
      </div>

      {/* Floating Animation Styles */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-spin-slow {
          animation: spin 20s linear infinite;
        }
      `}</style>

      {/* Additional Floating Fruits */}
      <div className="absolute top-20 left-10 animate-float opacity-30">
        <span className="text-4xl">🍒</span>
      </div>
      <div className="absolute bottom-20 right-10 animate-float opacity-30" style={{animationDelay: '2s'}}>
        <span className="text-4xl">🍑</span>
      </div>
      <div className="absolute top-40 right-40 animate-float opacity-30" style={{animationDelay: '4s'}}>
        <span className="text-4xl">🍐</span>
      </div>
    </div>
  );
};

export default NotFound;