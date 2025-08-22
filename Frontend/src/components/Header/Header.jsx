import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes, FaChevronDown, FaChevronUp } from 'react-icons/fa';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isHoveringProducts, setIsHoveringProducts] = useState(false);
  const productsRef = useRef(null);
  const location = useLocation();

  // Menu Items with paths
  const menuItems = [
    { id: 1, name: 'Home', path: "/" },
    { id: 2, name: 'About', path: "/about" },
    { id: 3, name: 'Events', path: "/events" },
    { 
      id: 4, 
      name: 'Products',
      path: "/products",
      submenu: [
        { id: 41, name: 'Product 1', path: "/products/1" },
        { id: 42, name: 'Product 2', path: "/products/2" },
        { id: 43, name: 'Product 3', path: "/products/3" },
      ]
    },
    { id: 5, name: 'Blog', path: "/blog" },
    { id: 6, name: 'Contact', path: "/contact" },
  ];

  // Close mobile menu function
  const closeMobileMenu = () => {
    setIsMenuOpen(false);
    setIsProductsOpen(false);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (productsRef.current && !productsRef.current.contains(event.target)) {
        setIsProductsOpen(false);
        setIsHoveringProducts(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container !mx-auto !px-4 !py-3">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <div className="w-10 h-10 bg-[#238c3c] rounded-md flex items-center justify-center text-white font-bold text-xl !mr-2">
              L
            </div>
            <span className="text-xl font-bold text-gray-800">Logo</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center !space-x-8">
            {menuItems.map((item) => (
              <div 
                key={item.id} 
                className="relative group"
                ref={item.name === 'Products' ? productsRef : null}
                onMouseEnter={() => item.name === 'Products' && setIsHoveringProducts(true)}
                onMouseLeave={() => item.name === 'Products' && setIsHoveringProducts(false)}
              >
                {item.submenu ? (
                  <>
                    <button
                      onClick={() => setIsProductsOpen(!isProductsOpen)}
                      className={`flex items-center !py-2 ${
                        location.pathname.startsWith("/products")
                          ? 'text-[#238c3c] font-medium' 
                          : 'text-gray-600 hover:text-[#238c3c]'
                      } transition-colors duration-300`}
                    >
                      {item.name}
                      <span className="!ml-1 transition-transform duration-300">
                        {(isProductsOpen || isHoveringProducts) ? <FaChevronUp size={12} /> : <FaChevronDown size={12} />}
                      </span>
                    </button>
                    <div className={`absolute left-0 !mt-2 w-48 bg-white rounded-md shadow-lg !py-2 overflow-hidden transition-all duration-300 z-50 ${
                      (isProductsOpen || isHoveringProducts) 
                        ? 'opacity-100 visible translate-y-0' 
                        : 'opacity-0 invisible -translate-y-2'
                    }`}>
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.id}
                          to={subItem.path}
                          className="block !px-4 !py-2 text-gray-600 hover:text-[#238c3c] hover:bg-gray-50 transition-colors duration-200"
                          onClick={() => setIsProductsOpen(false)}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </>
                ) : (
                  <Link
                    to={item.path}
                    className={`relative py-2 ${
                      location.pathname === item.path
                        ? 'text-[#238c3c] font-medium'
                        : 'text-gray-600 hover:text-[#238c3c]'
                    } transition-colors duration-300`}
                  >
                    {item.name}
                    {/* Animated underline */}
                    <span
                      className={`absolute left-0 bottom-0 h-0.5 bg-[#238c3c] transition-all duration-300 ${
                        location.pathname === item.path ? 'w-full' : 'w-0 group-hover:w-full'
                      }`}
                    ></span>
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-[#238c3c] focus:outline-none transition-colors duration-300"
            >
              {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden flex flex-col !space-y-4 !pb-4 !mt-4">
            {menuItems.map((item) => (
              <div key={item.id}>
                {item.submenu ? (
                  <>
                    <button
                      onClick={() => setIsProductsOpen(!isProductsOpen)}
                      className={`flex items-center justify-between w-full !py-2 ${
                        location.pathname.startsWith("/products")
                          ? 'text-[#238c3c] font-medium'
                          : 'text-gray-600'
                      } transition-colors duration-300`}
                    >
                      <span>{item.name}</span>
                      <span className="transition-transform duration-300">
                        {isProductsOpen ? <FaChevronUp /> : <FaChevronDown />}
                      </span>
                    </button>
                    {isProductsOpen && (
                      <div className="!pl-4 !mt-2 !space-y-2">
                        {item.submenu.map((subItem) => (
                          <Link
                            key={subItem.id}
                            to={subItem.path}
                            className="block !py-2 text-gray-600 hover:text-[#238c3c] transition-colors duration-300"
                            onClick={closeMobileMenu}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    to={item.path}
                    className={`block !py-2 ${
                      location.pathname === item.path
                        ? 'text-[#238c3c] font-medium'
                        : 'text-gray-600 hover:text-[#238c3c]'
                    } transition-colors duration-300`}
                    onClick={closeMobileMenu}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;