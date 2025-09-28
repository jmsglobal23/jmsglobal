import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn,
  FaPhone, FaEnvelope, FaMapMarkerAlt, FaLeaf,
  FaHome, FaUser, FaCalendarAlt, FaBlog, FaAddressBook,
  FaBoxOpen, FaChartLine, FaGlobe, FaUsers
} from 'react-icons/fa';
import Logo from '../../assets/jms_logo_png.png'
import { Category } from '../../assets/productData';

const Footer = () => {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState(null);
  const [visitCount, setVisitCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  // Counter.dev Dashboard URL - Replace with your actual dashboard URL
  const COUNTER_DEV_DASHBOARD = "https://counter.dev/dashboard.html";

  useEffect(() => {
    // In a real application, you would fetch this from your API
    // For now, using the imported Category data
    setCategories(Category);
  }, []);

  useEffect(() => {
    // Set current year
    setCurrentYear(new Date().getFullYear());
  }, []);

  useEffect(() => {
    // Initialize counter - Using localStorage as fallback
    const initializeCounter = () => {
      try {
        // Get current count from localStorage
        const storedCount = localStorage.getItem('jms_global_exporters_visits');
        let currentCount = storedCount ? parseInt(storedCount) : 2; // Starting number
        
        // Increment count for this visit
        currentCount += 1;
        localStorage.setItem('jms_global_exporters_visits', currentCount.toString());
        
        setVisitCount(currentCount);
      } catch (err) {
        console.error("Failed to initialize counter:", err);
        // Fallback number
        setVisitCount(2);
      } finally {
        setIsLoading(false);
      }
    };

    initializeCounter();
  }, []);

  // Format number with leading zeros (0000567 format)
  const formatVisitCount = (count) => {
    return count.toString().padStart(7, '0');
  };

  return (
    <footer className="bg-gradient-to-b from-emerald-800 to-green-900 text-white !pt-12 !pb-6 !px-4 md:!px-8">
      <div className="container !mx-auto">
        {/* Main Footer Content - 4 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 !mb-8">

          {/* Column 1: Logo, Slogan and Counter */}
          <div className="flex flex-col">
            <div className="flex items-center !mb-4">
              <img src={Logo} alt="JMS Exporters" className='w-[150px]' />
            </div>
            <p className="text-emerald-100 !mb-6 text-lg">
              Delivering Farm Fresh Quality to Your Doorstep
            </p>

            {/* Modern Visitor Counter */}
            <div className="w-full !mt-4">
              <div className="bg-emerald-900/30 rounded-lg p-4 border border-emerald-700/50">
                <div className="flex items-center justify-between !mb-2">
                  <span className="text-emerald-200 text-sm font-medium flex items-center">
                    <FaUsers className="!mr-2" />
                    Total Visits
                  </span>
                  <a 
                    href={COUNTER_DEV_DASHBOARD} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-emerald-600 hover:bg-emerald-500 text-white px-3 py-1 rounded text-xs flex items-center transition-colors"
                    title="View detailed analytics dashboard"
                  >
                    <FaChartLine className="!mr-1" />
                    View Analytics
                  </a>
                </div>
                
                {isLoading ? (
                  <div className="flex justify-center">
                    <div className="animate-pulse bg-emerald-700 h-8 w-32 rounded"></div>
                  </div>
                ) : (
                  <>
                    <div className="text-2xl font-bold text-white font-mono text-center tracking-wider bg-emerald-800/50 py-2 rounded border border-emerald-600/30">
                      {formatVisitCount(visitCount)}
                    </div>
                    <div className="flex justify-between items-center !mt-3">
                      <span className="text-emerald-300 text-xs flex items-center">
                        <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse !mr-2"></span>
                        Live Counter
                      </span>
                      <span className="text-emerald-400 text-xs">
                        Since 2024
                      </span>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>

          {/* Rest of your columns remain exactly the same */}
          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-xl font-semibold !mb-6 !pb-2 border-b border-emerald-600/30 flex items-center">
              <span className="bg-emerald-600 !p-1 rounded !mr-2">
                <FaHome className="text-sm" />
              </span>
              Quick Links
            </h3>
            <ul className="!space-y-3">
              {[
                { name: "Home", icon: FaHome, path: "/" },
                { name: "About", icon: FaUser, path: "/about" },
                { name: "Events", icon: FaCalendarAlt, path: "/events" },
                { name: "Blog", icon: FaBlog, path: "/blog" },
                { name: "Contact", icon: FaAddressBook, path: "/contact" }
              ].map((item, index) => (
                <li key={index} className="group">
                  <Link
                    to={item.path}
                    className="flex items-center text-emerald-100 hover:text-white transition-all duration-300 group-hover:translate-x-1"
                  >
                    <item.icon className="!mr-3 text-emerald-400 group-hover:text-emerald-300 transition-colors" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Product Categories */}
          <div>
            <h3 className="text-xl font-semibold !mb-6 !pb-2 border-b border-emerald-600/30 flex items-center">
              <span className="bg-emerald-600 !p-1 rounded !mr-2"><FaLeaf className="text-sm" /></span>
              Our Products
            </h3>
            <ul className="!space-y-3">
              <li className="group">
                <Link to="/products" className="flex items-center text-emerald-100 hover:text-white transition-all duration-300 group-hover:translate-x-1">
                  <FaBoxOpen className="!mr-3 text-emerald-400 group-hover:text-emerald-300 transition-colors" />
                  All Products
                </Link>
              </li>
              {categories.map((category) => (
                <li key={category._id} className="group">
                  <Link
                    to={`/category/${category.slug}`}
                    className="flex items-center text-emerald-100 hover:text-white transition-all duration-300 group-hover:translate-x-1"
                  >
                    <span className="w-2 h-2 bg-emerald-400 rounded-full !mr-3 group-hover:bg-emerald-300 transition-colors"></span>
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Details */}
          <div>
            <h3 className="text-xl font-semibold !mb-6 !pb-2 border-b border-emerald-600/30 flex items-center">
              <span className="bg-emerald-600 !p-1 rounded !mr-2">
                <FaAddressBook className="text-sm" />
              </span>
              Contact Us
            </h3>
            <div className="!space-y-4">
              <div className="flex items-start group">
                <FaMapMarkerAlt className="text-emerald-400 !mt-1 !mr-3 group-hover:text-emerald-300 transition-colors" />
                <p className="text-emerald-100 group-hover:text-white transition-colors">
                  Plot no 15, Pravin Nagar,<br />
                  Dahitane, Solapur,<br />
                  Maharashtra, India
                </p>
              </div>

              <div className="flex items-center group">
                <FaPhone className="text-emerald-400 !mr-3 group-hover:text-emerald-300 transition-colors" />
                <a href="tel:+919623982603" className="text-emerald-100 hover:text-white transition-colors">
                  +91 9623982603
                </a>
              </div>

              <div className="flex items-center group">
                <FaEnvelope className="text-emerald-400 !mr-3 group-hover:text-emerald-300 transition-colors" />
                <a href="mailto:jms211299@gmail.com" className="text-emerald-100 hover:text-white transition-colors">
                  jms211299@gmail.com
                </a>
              </div>

              {/* Social Media Icons */}
              <div className="!pt-4">
                <h4 className="text-lg font-medium !mb-3">Follow Us</h4>
                <div className="flex !space-x-4">
                  {[
                    { icon: FaFacebookF, color: "hover:bg-blue-600", href: "https://www.facebook.com/share/174TUXRu7p/", target: "_blank" },
                    { icon: FaTwitter, color: "hover:bg-blue-400", href: "https://x.com/jms211299", target: "_blank" },
                    { icon: FaInstagram, color: "hover:bg-pink-600", href: "https://www.instagram.com/jms_global_exporters", target: "_blank" },
                  ].map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`bg-emerald-700/50 w-10 h-10 rounded-full flex items-center justify-center text-white transition-all duration-300 transform hover:scale-110 ${social.color}`}
                      aria-label={`Follow on ${social.icon.name}`}
                    >
                      <social.icon className="text-lg" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-emerald-700/30 !pt-6 !mt-8 text-center">
          <p className="text-emerald-200 text-sm">
            © {currentYear} JMS Global Exporters. All rights reserved. |
            <span className="text-emerald-300 !ml-1">
              Made by MetlifeDM
            </span>
          </p>
        </div>
      </div>

      {/* Counter.dev Tracking Script - Add this to track actual visits */}
      <script 
        async 
        src="https://cdn.counter.dev/script.js" 
        data-id="8d5e24ee-7cc2-43e7-a0da-e69bf0f66b9b" 
        data-utcoffset="6"
      ></script>
    </footer>
  );
};

export default Footer;