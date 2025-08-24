import React from 'react';
import { FaCalendarAlt, FaMapMarkerAlt, FaArrowRight } from 'react-icons/fa';
import { eventData } from '../../assets/eventData';
import { Link } from 'react-router-dom';

const EventItems = () => {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-green-50 to-cyan-50 !py-12 !px-4 sm:!px-6 lg:!px-8 overflow-hidden">
      {/* Animated fruit background elements */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-10 left-10 w-16 h-16 bg-[url('https://img.icons8.com/emoji/48/000000/banana.png')] bg-cover animate-fruit-float"></div>
        <div className="absolute bottom-20 right-20 w-16 h-16 bg-[url('https://img.icons8.com/emoji/48/000000/apple-emoji.png')] bg-cover animate-fruit-float animation-delay-1000"></div>
        <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-[url('https://img.icons8.com/emoji/48/000000/orange-emoji.png')] bg-cover animate-fruit-float animation-delay-2000"></div>
        <div className="absolute bottom-1/3 left-1/4 w-16 h-16 bg-[url('https://img.icons8.com/emoji/48/000000/mango.png')] bg-cover animate-fruit-float animation-delay-3000"></div>
      </div>

      <div className="container !mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center !mb-12 sm:!mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 !mb-4">
            Our <span className="text-transparent bg-clip-text bg-emerald-600">Events</span>
          </h1>
          <p className="text-base sm:text-lg text-gray-600 !max-w-3xl !mx-auto !mb-6">
            Join us at our global events and exhibitions to connect with JMS Global Exporters and explore our premium offerings
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-600 to-emerald-400 !mx-auto rounded-full"></div>
        </div>

        {/* Events List */}
        <div className="flex flex-col gap-16 max-w-6xl !mx-auto">
          {eventData.map((event, index) => (
            <div
              key={event.id}
              className={`flex flex-col lg:flex-row items-center gap-8 lg:gap-12 bg-white/80 backdrop-blur-md rounded-2xl shadow-lg !p-6 sm:!p-8 hover:shadow-xl hover:-translate-y-2 transition-all duration-500 ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Event Image */}
              <div className="relative rounded-2xl overflow-hidden shadow-md group w-full lg:w-1/2">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-[350px] !mx-auto h-[300px] sm:h-[400px] object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Date Badge */}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg !p-3 text-center shadow-md transform group-hover:scale-105 transition-transform duration-300">
                  <div className="text-sm font-bold text-emerald-600">
                    {new Date(event.date).getDate()}
                  </div>
                  <div className="text-xs text-gray-600">
                    {new Date(event.date).toLocaleString('en-US', { month: 'short' })}
                  </div>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              {/* Event Content */}
              <div className="w-full lg:w-1/2">
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 !mb-4 group-hover:text-emerald-700 transition-colors duration-300">
                  {event.title}
                </h3>

                <div className="flex items-center text-gray-600 !mb-3">
                  <FaCalendarAlt className="text-emerald-600 !mr-2" />
                  <span className="text-sm sm:text-base">{formatDate(event.date)}</span>
                </div>

                <div className="flex items-center text-gray-600 !mb-4">
                  <FaMapMarkerAlt className="text-emerald-600 !mr-2" />
                  <span className="text-sm sm:text-base">{event.place}</span>
                </div>

                <p className="text-gray-700 !mb-6 text-sm sm:text-base leading-relaxed">
                  {event.description}
                </p>

                <Link
                  to={`/events/${event.id}`}
                  className="inline-flex items-center !px-4 !py-2 bg-emerald-600 text-white rounded-lg text-sm font-semibold hover:bg-emerald-700 hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300 cursor-pointer"
                >
                  Read More
                  <FaArrowRight className="!ml-2 transform group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
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
            font-size: 0.875rem !important;
          }
        }
      `}</style>
    </div>
  );
};

export default EventItems;