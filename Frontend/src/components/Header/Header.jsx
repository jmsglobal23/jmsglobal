import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import Logo from '../../assets/jms-logo.png';
import { Category } from '../../assets/productData'; // Import your category data

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isHoveringProducts, setIsHoveringProducts] = useState(false);
  const productsRef = useRef(null);
  const location = useLocation();

  // Fetch categories from your API or data source
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // In a real application, you would fetch this from your API
    // For now, using the imported Category data
    setCategories(Category);
  }, []);

  // Menu Items with paths
  const menuItems = [
    { id: 1, name: 'Home', path: "/" },
    { id: 2, name: 'About', path: "/about" },
    { id: 3, name: 'Events', path: "/events" },
    {
      id: 4,
      name: 'Products',
      path: "/products",
      submenu: categories.map(category => ({
        id: category.id,
        name: category.name,
        path: `/category/${category.name.toLowerCase().replace(/\s+/g, "-")}`
      }))
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
            <img src={Logo} className="w-[250px] sm:w-[300px]" alt="JMS Global" />
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
                {item.submenu && item.submenu.length > 0 ? (
                  <>
                    <button
                      onClick={() => setIsProductsOpen(!isProductsOpen)}
                      className={`flex items-center !py-2 ${
                        location.pathname.startsWith("/products") || location.pathname.startsWith("/category")
                          ? 'text-emerald-600 font-medium'
                          : 'text-gray-600 hover:text-emerald-600'
                      } transition-colors duration-300`}
                    >
                      {item.name}
                      <span className="!ml-1 transition-transform duration-300">
                        {(isProductsOpen || isHoveringProducts) ? <FaChevronUp size={12} /> : <FaChevronDown size={12} />}
                      </span>
                    </button>
                    <div
                      className={`absolute left-0 !mt-2 w-48 bg-white rounded-md shadow-lg !py-2 overflow-hidden transition-all duration-300 ease-in-out z-50 ${
                        (isProductsOpen || isHoveringProducts)
                          ? 'opacity-100 visible translate-y-0'
                          : 'opacity-0 invisible -translate-y-2'
                      }`}
                    >
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.id}
                          to={subItem.path}
                          className="block !px-4 !py-2 text-gray-600 hover:text-emerald-600 hover:bg-gray-50 transition-colors duration-200"
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
                    className={`relative !py-2 ${
                      location.pathname === item.path
                        ? 'text-emerald-600 font-medium'
                        : 'text-gray-600 hover:text-emerald-600'
                    } transition-colors duration-300`}
                  >
                    {item.name}
                    <span
                      className={`absolute left-0 bottom-0 h-0.5 bg-emerald-600 transition-all duration-300 ${
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
              className="text-gray-600 hover:text-emerald-600 focus:outline-none transition-colors duration-300"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
            isMenuOpen ? 'max-h-full opacity-100 translate-y-0 !mt-4' : 'max-h-0 opacity-0 -translate-y-4'
          }`}
        >
          <nav className="flex flex-col !space-y-4 !pb-4">
            {menuItems.map((item) => (
              <div key={item.id}>
                {item.submenu && item.submenu.length > 0 ? (
                  <>
                    <button
                      onClick={() => setIsProductsOpen(!isProductsOpen)}
                      className={`flex items-center justify-between w-full !py-2 ${
                        location.pathname.startsWith("/products") || location.pathname.startsWith("/category")
                          ? 'text-emerald-600 font-medium'
                          : 'text-gray-600'
                      } transition-colors duration-300`}
                      aria-expanded={isProductsOpen}
                    >
                      <span>{item.name}</span>
                      <span className="transition-transform duration-300">
                        {isProductsOpen ? <FaChevronUp /> : <FaChevronDown />}
                      </span>
                    </button>
                    <div
                      className={`overflow-hidden transition-all duration-300 ease-in-out ${
                        isProductsOpen ? 'max-h-full opacity-100 translate-y-0 !mt-2' : 'max-h-0 opacity-0 -translate-y-2'
                      }`}
                    >
                      <div className="!pl-4 !space-y-2">
                        {item.submenu.map((subItem) => (
                          <Link
                            key={subItem.id}
                            to={subItem.path}
                            className="block !py-2 text-gray-600 hover:text-emerald-600 hover:bg-gray-50 transition-colors duration-300"
                            onClick={closeMobileMenu}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <Link
                    to={item.path}
                    className={`block !py-2 ${
                      location.pathname === item.path
                        ? 'text-emerald-600 font-medium'
                        : 'text-gray-600 hover:text-emerald-600'
                    } transition-colors duration-300`}
                    onClick={closeMobileMenu}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;