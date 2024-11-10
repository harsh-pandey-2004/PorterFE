import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import logo from '../../assets/logobookmytransport_processed.png';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const userLoggedIn = localStorage.getItem('isLoggedIn') === "true";
    setIsLoggedIn(userLoggedIn);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleMenuToggle = () => {
    setIsOpen((prev) => !prev);
  };

  const handleLinkClick = () => {
    console.log("Link clicked");
    setIsOpen(false);
  };

  return (
    <nav className="bg-primary  text-white p-4 flex justify-between items-center relative">
      {/* Left Side: Logo */}
      <div className="flex items-center">
        <Link to="/">
          <img src={logo} alt="BookMyTransport Logo" className="h-10 md:h-12 lg:h-14" />
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden block text-2xl focus:outline-none ml-auto"
        onClick={handleMenuToggle}
      >
        <i className="fa fa-bars"></i>
      </button>
      

      {/* Normal Navbar for large screens */}
      <ul className="hidden lg:flex lg:space-x-8">
        <li><Link to="/" className="block hover:text-yellow-300 px-4 py-2 rounded-md transition">Home</Link></li>
        <li><Link to="/track" className="block hover:text-yellow-300  px-4 py-2 rounded-md transition">Track Parcels</Link></li>
        <li><Link to="/new-shipment" className="block hover:text-yellow-300  px-4 py-2 rounded-md transition">New Shipment</Link></li>
        <li><Link to="/reports" className="block hover:text-yellow-300  px-4 py-2 rounded-md transition">Delivery Partners</Link></li>
        {!isLoggedIn ? (
          <li><Link to="/login" className="block hover:text-yellow-300  px-4 py-2 rounded-md transition">Login</Link></li>
        ) : (
          <>
            <li>
              <i className="fa fa-user-circle cursor-pointer hover:text-[#4FC3F7] transition"></i>
            </li>
            <li>
              <button onClick={handleLogout} className="block hover:bg-[#4FC3F7] px-4 py-2 rounded-md transition">Logout</button>
            </li>
          </>
        )}
      </ul>

      {/* Dropdown Menu for small and medium screens */}
      {isOpen && (
        <ul
          ref={dropdownRef}
          className="absolute bg-[#1D3557] right-2 top-14 md:hidden space-y-4 z-50 p-4 w-40 rounded-md"
        >
          <li><Link to="/" className="block hover:bg-[#4FC3F7] px-4 py-2 rounded-md transition" onClick={handleLinkClick}>Home</Link></li>
          <li><Link to="/track" className="block hover:bg-[#4FC3F7] px-4 py-2 rounded-md transition" onClick={handleLinkClick}>Track Parcels</Link></li>
          <li><Link to="/new-shipment" className="block hover:bg-[#4FC3F7] px-4 py-2 rounded-md transition" onClick={handleLinkClick}>New Shipment</Link></li>
          <li><Link to="/reports" className="block hover:bg-[#4FC3F7] px-4 py-2 rounded-md transition" onClick={handleLinkClick}>Delivery Partners</Link></li>
          {!isLoggedIn ? (
            <li>
              <Link
                to="/login"
                className="block hover:bg-[#4FC3F7] px-4 py-2 rounded-md transition"
                onClick={handleLinkClick}
              >
                Login
              </Link>
            </li>
          ) : (
            <>
              <li><i className="fa fa-user-circle cursor-pointer hover:text-[#4FC3F7] transition"></i></li>
              <li>
                <button
                  onClick={() => {
                    handleLogout();
                    handleLinkClick();
                  }}
                  className="block hover:bg-[#4FC3F7] px-4 py-2 rounded-md transition"
                >
                  Logout
                </button>
              </li>
            </>
          )}
        </ul>
      )}

      {/* Right Side: Search and Icons */}
      <div className="flex items-center space-x-4">
        {/* Search Bar for larger screens */}
        <div className="relative hidden md:block">
          <input
            type="text"
            placeholder="Search by Parcel ID..."
            className="bg-[#F5F5F5] text-black px-4 py-2 rounded-full outline-none focus:ring-2 focus:ring-[#4FC3F7] transition"
          />
          <i className="fa fa-search absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-400"></i>
        </div>

        {/* Notification and Profile Icons */}
        {/* <i className="fa fa-bell cursor-pointer hover:text-[#4FC3F7] transition"></i>
        <i className="fa fa-user-circle cursor-pointer hover:text-[#4FC3F7] transition"></i> */}
      </div>
    </nav>
  );
}

export default Navbar;





