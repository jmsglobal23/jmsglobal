// AboutHighlight.jsx
import React from "react";
import BGImage from "../../assets/aboutbg.jpg";
import { FaClock, FaGlobe, FaCheckCircle, FaHeadset } from "react-icons/fa";

const highlights = [
  {
    id: 1,
    value: "4+",
    label: "Years Experience",
    color: "from-blue-500 to-blue-700",
    icon: <FaClock className="text-emerald-600 text-4xl group-hover:scale-110 transition-transform duration-300" />,
  },
  {
    id: 2,
    value: "12+",
    label: "Countries",
    color: "from-emerald-500 to-emerald-700",
    icon: <FaGlobe className="text-emerald-600 text-4xl group-hover:scale-110 transition-transform duration-300" />,
  },
  {
    id: 3,
    value: "100%",
    label: "Quality Assurance",
    color: "from-amber-500 to-amber-700",
    icon: <FaCheckCircle className="text-emerald-600 text-4xl group-hover:scale-110 transition-transform duration-300" />,
  },
  {
    id: 4,
    value: "24/7",
    label: "Support",
    color: "from-purple-500 to-purple-700",
    icon: <FaHeadset className="text-emerald-600 text-4xl group-hover:scale-110 transition-transform duration-300" />,
  },
];

const AboutHighlight = () => {
  return (
    <section className="relative w-full !py-16 md:!py-26 flex items-center justify-center overflow-hidden">
      {/* Background with zoom animation */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed animate-zoom-slow"
        style={{
          backgroundImage: `url(${BGImage})`,
          backgroundAttachment: "fixed",
        }}
      ></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>

      {/* Content */}
      <div className="container !mx-auto relative z-10">
        <div className="grid grid-cols-1 !mx-5 md:!mx-0 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-10">
          {highlights.map((item) => (
            <div
              key={item.id}
              className="relative bg-white/80 backdrop-blur-xl rounded-2xl !p-8 shadow-lg group hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
            >
              {/* Decorative gradient ring */}
              <div
                className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${item.color} opacity-20 group-hover:opacity-40 blur-xl transition-all duration-500`}
              ></div>

              {/* Content */}
              <div className="relative z-10 text-center flex flex-col items-center">
                <div className="!mb-4">{item.icon}</div>
                <div
                  className={`text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r ${item.color} drop-shadow-md`}
                >
                  {item.value}
                </div>
                <div className="text-sm sm:text-base text-gray-700 !mt-2 group-hover:text-gray-900 transition-colors duration-300">
                  {item.label}
                </div>

                {/* Animated underline */}
                <div className="w-0 h-1 bg-gradient-to-r from-emerald-400 to-emerald-600 !mx-auto !mt-4 rounded-full group-hover:w-12 transition-all duration-500"></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Animation styles */}
      <style jsx>{`
        @keyframes zoom-slow {
          0% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.1);
          }
          100% {
            transform: scale(1);
          }
        }
        .animate-zoom-slow {
          animation: zoom-slow 20s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default AboutHighlight;
