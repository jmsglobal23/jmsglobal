import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn,
  FaPhone, FaEnvelope, FaMapMarkerAlt, FaLeaf,
  FaHome, FaUser, FaCalendarAlt, FaBlog, FaAddressBook
} from 'react-icons/fa';
import { Category } from '../../assets/productData';
import Logo from '../../assets/jms_logo_png.png'

const Footer = () => {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // In a real application, you would fetch this from your API
    // For now, using the imported Category data
    setCategories(Category);
  }, []);

  useEffect(() => {
    // Set current year
    setCurrentYear(new Date().getFullYear());
  }, []);

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

            {/* Visitor Counter */}
            <div className="w-full">
              <a href="https://www.freevisitorcounters.com/en/home/stats/id/1293153" className='text-emerald-100'>Free Counter</a>
              <script type="text/javascript" src="https://www.freevisitorcounters.com/auth.php?id=5929cd6677864af9cb4a92e27444f199b91431fb"></script>
              <script type="text/javascript" src="https://www.freevisitorcounters.com/en/home/counter/1293153/t/5"></script>
              <a href="https://www.freevisitorcounters.com/en/home/stats/id/1293153" target="_blank"><br /><img src="https://www.freevisitorcounters.com/en/counter/render/1293153/t/5" border="0" class="counterimg" /></a>
            </div>
          </div>

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
              <span className="bg-emerald-600 !p-1 rounded !mr-2">
                <FaLeaf className="text-sm" />
              </span>
              Our Products
            </h3>
            <ul className="!space-y-3">
              {categories.map((category, index) => (
                <li key={index} className="group">
                  <Link
                    to={`/category/${category.name.toLowerCase().replace(/\s+/g, "-")}`}
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
                    { icon: FaFacebookF, color: "hover:bg-blue-600", href: "#" },
                    { icon: FaTwitter, color: "hover:bg-blue-400", href: "#" },
                    { icon: FaInstagram, color: "hover:bg-pink-600", href: "#" },
                    { icon: FaLinkedinIn, color: "hover:bg-blue-700", href: "#" }
                  ].map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
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
              Made My MetlifeDM
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;