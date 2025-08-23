// HomeBenefits.jsx
import React from "react";
import { FaCarrot, FaTruck, FaLeaf, FaHandsWash, FaAppleAlt, FaLemon, FaApple } from "react-icons/fa";
import { PiOrangeFill } from "react-icons/pi";
import BenifitImg from '../../assets/benif.png'

const benefits = [
  {
    id: 1,
    icon: <FaCarrot className="text-orange-500 text-xl md:text-2xl" />,
    title: "Premium Freshness",
    desc: "Direct–from–farm sourcing ensures maximum nutritional value and taste. Carefully handled and stored to retain crispness, color, and quality.",
  },
  {
    id: 2,
    icon: <FaTruck className="text-pink-600 text-xl md:text-2xl" />,
    title: "Reliable & Timely Delivery",
    desc: "Strong logistics network for fast, on-time delivery — every time. Flexible scheduling for daily, weekly, or custom order frequencies.",
  },
  {
    id: 3,
    icon: <FaLeaf className="text-green-600 text-xl md:text-2xl" />,
    title: "Sustainable & Ethical Sourcing",
    desc: "Partnerships with responsible farmers who use eco-friendly farming methods. Focus on minimizing waste and supporting local agriculture.",
  },
  {
    id: 4,
    icon: <FaHandsWash className="text-pink-400 text-xl md:text-2xl" />,
    title: "Hygienic Handling & Packaging",
    desc: "Adherence to food safety standards and clean handling practices. Fresh, neatly packed produce ready for display or kitchen use.",
  },
];

const floatingFruits = [
  { id: 1, icon: <FaAppleAlt className="text-red-400 text-4xl animate-bounce-slow" />, style: "top-10 left-10" },
  { id: 2, icon: <PiOrangeFill className="text-orange-400 text-5xl animate-pulse" />, style: "top-40 right-20" },
  { id: 3, icon: <FaLemon className="text-yellow-400 text-4xl animate-bounce" />, style: "bottom-20 left-24" },
  { id: 4, icon: <FaApple className="text-green-500 text-5xl animate-bounce-slow" />, style: "bottom-10 right-16" },
];

const HomeBenefits = () => {
  return (
    <section className="relative w-full bg-gradient-to-r from-white to-[#f5fdf6] !py-12 !px-6 md:!px-16 lg:!px-24 overflow-hidden">
      {/* Floating Fruits in Background */}
      {floatingFruits.map((fruit) => (
        <div
          key={fruit.id}
          className={`absolute ${fruit.style} opacity-30 pointer-events-none`}
        >
          {fruit.icon}
        </div>
      ))}

      <div className="container !mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Image */}
        <div className="flex justify-center lg:justify-start">
          <img
            src={BenifitImg} // 👉 replace with your image
            alt="Fresh Vegetables"
            className="rounded-lg w-full max-w-md lg:max-w-full object-cover"
          />
        </div>

        {/* Right Content */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 !mb-10 text-center lg:text-left">
            Key Benefits of <span className="text-transparent bg-clip-text bg-emerald-600">Choosing Us</span>
          </h2>

          {/* Timeline */}
          <div className="relative">
            <div className="absolute left-5 top-0 bottom-0 w-1 bg-green-200 hidden md:block"></div>
            <div className="!space-y-10">
              {benefits.map((benefit, index) => (
                <div
                  key={benefit.id}
                  className="relative flex gap-4 md:gap-6 items-start"
                >
                  {/* Timeline Dot */}
                  <div className="relative z-10">
                    <div className="w-12 h-12 flex !p-2 items-center justify-center bg-white border-2 border-emerald-600 rounded-full shadow-md">
                      {benefit.icon}
                    </div>
                  </div>

                  {/* Content */}
                  <div>
                    <h3 className="font-semibold text-gray-900 text-lg md:text-xl">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                      {benefit.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeBenefits;
