import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FaCalendarAlt, FaMapMarkerAlt, FaArrowLeft, FaClock, FaUsers, FaShare, FaCheck } from 'react-icons/fa';
import { eventData } from '../../assets/eventData';

const EventDetail = () => {
  const { id } = useParams();
  const [event, setEvent] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [showCopiedMessage, setShowCopiedMessage] = useState(false);

  useEffect(() => {
    // Check if id is a number string first, then try string match
    const foundEvent = eventData.find(e =>
      e.id === parseInt(id) || e.id === id || e._id === id
    );
    setEvent(foundEvent);
    setIsLoading(false);

    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, [id]);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-600"></div>
      </div>
    );
  }

  // Function to handle sharing
  const handleShare = () => {
    const currentUrl = window.location.href;

    // Copy to clipboard
    navigator.clipboard.writeText(currentUrl)
      .then(() => {
        setShowCopiedMessage(true);
        setTimeout(() => setShowCopiedMessage(false), 2000);
      })
      .catch(err => {
        console.error('Failed to copy: ', err);
        // Fallback method for copying
        const textArea = document.createElement('textarea');
        textArea.value = currentUrl;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        setShowCopiedMessage(true);
        setTimeout(() => setShowCopiedMessage(false), 2000);
      });
  }

  if (!event) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 !mb-4">Event Not Found</h2>
          <Link to="/events" className="text-emerald-600 hover:text-emerald-700">
            Return to Events
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-emerald-50 !py-12 !px-4 sm:!px-6 lg:!px-8 overflow-hidden relative">
      {/* Animated Fruit Background Elements */}
      <div className="absolute top-10 left-5 animate-bounce opacity-20">
        <span className="text-5xl">🍎</span>
      </div>
      <div className="absolute top-1/3 right-8 animate-pulse opacity-20">
        <span className="text-6xl">🍊</span>
      </div>
      <div className="absolute bottom-1/4 left-10 animate-bounce opacity-20">
        <span className="text-7xl">🍋</span>
      </div>
      <div className="absolute top-20 right-1/4 animate-pulse opacity-20">
        <span className="text-5xl">🍇</span>
      </div>
      <div className="absolute bottom-40 right-16 animate-bounce opacity-20">
        <span className="text-6xl">🍉</span>
      </div>

      <div className="max-w-6xl !mx-auto relative z-10">
        {/* Back Button */}
        <Link
          to="/events"
          className="inline-flex items-center text-emerald-600 font-semibold !mb-8 hover:text-emerald-700 transition-colors"
        >
          <FaArrowLeft className="!mr-2" />
          Back to Events
        </Link>

        {/* Main Content - Side by Side Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 !mb-12">
          {/* Image Section */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden h-full">
            <div className="relative h-80 md:h-96 lg:h-full overflow-hidden">
              <div className="w-full h-full flex items-center justify-center bg-gray-100">
                <img
                  src={event.image}
                  alt={event.title}
                  className="object-contain max-h-full max-w-full p-4"
                  style={{
                    width: 'auto',
                    height: 'auto',
                    maxHeight: '100%',
                    maxWidth: '100%'
                  }}
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/800x600?text=Event+Image';
                  }}
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>

              {/* Date Badge */}
              <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm rounded-lg !p-4 text-center shadow-md">
                <div className="text-lg font-bold text-emerald-600">
                  {new Date(event.date).getDate()}
                </div>
                <div className="text-sm text-gray-600">
                  {new Date(event.date).toLocaleString('en-US', { month: 'short' })}
                </div>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="bg-white rounded-2xl shadow-xl !p-6 md:!p-8 h-full">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 !mb-6">
              {event.title}
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 !mb-6">
              <div className="flex items-center text-gray-700 bg-emerald-50 rounded-lg !p-3">
                <FaCalendarAlt className="text-emerald-600 !mr-3 text-lg" />
                <span className="font-medium">{formatDate(event.date)}</span>
              </div>

              <div className="flex items-center text-gray-700 bg-emerald-50 rounded-lg !p-3">
                <FaMapMarkerAlt className="text-emerald-600 !mr-3 text-lg" />
                <span className="font-medium">{event.place}</span>
              </div>
            </div>

            <div className="bg-emerald-50 rounded-xl !p-4 !mb-6">
              <h3 className="text-lg font-semibold text-emerald-800 !mb-2">Event Summary</h3>
              <div className="space-y-2">
                <div className="flex items-center text-gray-700">
                  <FaClock className="text-emerald-600 !mr-3" />
                  <span>9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <FaUsers className="text-emerald-600 !mr-3" />
                  <span>200+ Participants</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4 !mb-6">
              <button
                onClick={handleShare}
                className="flex items-center !px-4 !py-2 bg-emerald-100 text-emerald-700 rounded-lg font-semibold hover:bg-emerald-200 transition-colors relative cursor-pointer"
              >
                {showCopiedMessage ? (
                  <>
                    <FaCheck className="!mr-2" />
                    Copied!
                  </>
                ) : (
                  <>
                    <FaShare className="!mr-2" />
                    Share
                  </>
                )}
              </button>
              <Link to='/contact'>
                <button className="flex items-center !px-5 !py-3 border border-emerald-600 text-emerald-600 rounded-lg font-semibold hover:bg-emerald-50 transition-colors cursor-pointer">
                  Contact Now
                </button>

              </Link>
            </div>
            <div className="border-t border-gray-200 !pt-6">
              <h3 className="text-lg font-semibold text-gray-900 !mb-4">About This Event</h3>
              <p className="text-gray-700 leading-relaxed !mb-6">
                {event.description}
              </p>
            </div>
          </div>
        </div>

        {/* Additional Event Details */}
        <div className="bg-white rounded-2xl shadow-xl !p-6 md:!p-8">
          <h2 className="text-xl font-bold text-emerald-600 !mb-6">Event Details</h2>

          <div className="prose max-w-none">
            <h3 className="text-lg font-semibold text-gray-900 !mb-4">Key Highlights</h3>
            <ul className="list-disc list-inside text-gray-700 !mb-6 space-y-2">
              <li>Networking with international buyers and distributors</li>
              <li>Showcasing premium quality agricultural products</li>
              <li>Knowledge sharing sessions with industry experts</li>
              <li>Business matching and partnership opportunities</li>
              <li>Latest trends in global agricultural exports</li>
            </ul>

            <h3 className="text-lg font-semibold text-gray-900 !mb-4">Who Should Attend</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 !mb-6">
              <div className="bg-emerald-50 rounded-lg !p-4">
                <h4 className="font-semibold text-emerald-800 !mb-2">Industry Professionals</h4>
                <p className="text-sm text-gray-700">Farm owners, exporters, and agricultural specialists</p>
              </div>
              <div className="bg-emerald-50 rounded-lg !p-4">
                <h4 className="font-semibold text-emerald-800 !mb-2">International Buyers</h4>
                <p className="text-sm text-gray-700">Importers, distributors, and retail chain representatives</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetail;