// FloatingContactIcons.jsx (Working)
import React, { useState, useEffect } from 'react';
import { FaWhatsapp, FaTimes, FaComment, FaPhoneAlt } from 'react-icons/fa';

const FloatingContactIcons = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  const whatsappNumber = "9623982603";
  const phoneNumber = "9623982603";
  const whatsappMessage =
    "Hello! I'm interested in your products and would like more information.";

  const openWhatsApp = () => {
    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
        whatsappMessage
      )}`,
      "_blank"
    );
  };

  const makeCall = () => {
    window.open(`tel:${phoneNumber}`, "_self");
  };

  useEffect(() => {
    let timeoutId;
    const resetTimer = () => {
      setIsVisible(true);
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => setIsVisible(false), 10000);
    };

    resetTimer();
    window.addEventListener("mousemove", resetTimer);
    window.addEventListener("scroll", resetTimer);
    window.addEventListener("touchstart", resetTimer);

    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener("mousemove", resetTimer);
      window.removeEventListener("scroll", resetTimer);
      window.removeEventListener("touchstart", resetTimer);
    };
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end !space-y-3">
      {/* WhatsApp Button */}
      {isVisible && (
        <button
          onClick={openWhatsApp}
          className={`flex items-center justify-center w-14 h-14 bg-green-500 text-white rounded-full shadow-lg transform transition-all duration-300 hover:scale-110 hover:shadow-xl ${
            isOpen
              ? "translate-y-0 opacity-100 !mr-1"
              : "translate-y-20 opacity-0 pointer-events-none"
          }`}
          aria-label="Contact via WhatsApp"
        >
          <FaWhatsapp className="text-2xl cursor-pointer" />
        </button>
      )}

      {/* Phone Button */}
      {isVisible && (
        <button
          onClick={makeCall}
          className={`flex items-center justify-center w-14 h-14 bg-blue-500 text-white rounded-full shadow-lg transform transition-all duration-300 hover:scale-110 hover:shadow-xl ${
            isOpen
              ? "translate-y-0 opacity-100 !mr-1"
              : "translate-y-20 opacity-0 pointer-events-none"
          }`}
          aria-label="Make a phone call"
        >
          <FaPhoneAlt className="text-xl cursor-pointer" />
        </button>
      )}

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        onMouseEnter={() => setIsVisible(true)}
        className="relative flex items-center justify-center w-16 h-16 bg-emerald-600 text-white rounded-full shadow-lg hover:bg-emerald-700 transition-all duration-300 hover:scale-110 hover:shadow-xl cursor-pointer"
        aria-label={isOpen ? "Close contact options" : "Open contact options"}
      >
        {isOpen ? <FaTimes className="text-xl cursor-pointer" /> : <FaComment className="text-xl cursor-pointer" />}

        {/* Pulse Animation */}
        {!isOpen && (
          <span className="absolute w-16 h-16 rounded-full bg-emerald-400 opacity-75 animate-ping"></span>
        )}
      </button>
    </div>
  );
};

export default FloatingContactIcons;
