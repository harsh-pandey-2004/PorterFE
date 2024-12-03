import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Footer = () => {
  const location = useLocation();

  // Scroll to top when the route changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location]);

  return (
    <footer className="bg-primary text-white py-6 sm:py-10 px-4 sm:px-5">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center space-y-6 lg:space-y-0">
          {/* Company Information */}
          <div className="text-center lg:text-left self-center mb-8 lg:mb-0">
            <h5 className="font-extrabold text-2xl sm:text-3xl lg:text-4xl">BookMyTransport</h5>
            <p className="text-sm sm:text-base lg:text-lg mt-2">Your trusted partner in parcel tracking and management.</p>
            <p className="text-xs sm:text-base lg:text-lg mt-2">© {new Date().getFullYear()} BookMyTransport. All rights reserved.</p>
          </div>

          {/* Links Section */}
          <div className="flex flex-col lg:flex-row justify-center lg:justify-between items-center lg:items-start text-center lg:text-left lg:flex-wrap mx-auto lg:mx-0">
            <ul className="flex flex-col space-y-2 text-sm sm:text-base lg:text-lg">
              <div className="flex flex-wrap justify-center space-x-4">
                {/* First Row of Links */}
                {['About us', 'Services', 'FAQ', 'Contact us'].map((link) => (
                  <li className="flex-shrink-0" key={link}>
                    <Link
                      to={`/${link.toLowerCase().replace(/\s+/g, '-')}`} // Dynamically create link paths
                      className="hover:text-[#E1E1E1] transition block py-2 px-4 border border-transparent rounded-md w-32 text-center"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </div>
              <div className="flex flex-wrap justify-center space-x-4">
                {/* Second Row of Links */}
                {['Blog', 'Testimonials', 'Support', 'Partners'].map((link) => (
                  <li className="flex-shrink-0" key={link}>
                    <Link
                      to={`/${link.toLowerCase().replace(/\s+/g, '-')}`} // Dynamically create link paths
                      className="hover:text-[#E1E1E1] transition block py-2 px-4 border border-transparent rounded-md w-32 text-center"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </div>
            </ul>
          </div>

          {/* Newsletter Section */}
          <div className="text-center lg:text-left w-full lg:w-auto">
            <h5 className="font-bold text-lg sm:text-xl lg:text-2xl mb-2">Join Our Newsletter</h5>
            <p className="text-sm sm:text-base lg:text-lg mb-4">Get the latest updates and offers.</p>
            <div className="flex justify-center lg:justify-start">
              <input
                type="email"
                className="p-2 rounded-l-lg text-[#1D3557] focus:outline-none w-48 lg:w-auto"
                placeholder="Your email address"
              />
              <button className="bg-white text-[#1D3557] font-bold py-2 px-4 rounded-r-lg hover:bg-[#E1E1E1] transition">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="mt-6 sm:mt-10 lg:mt-12 flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0 border-t border-[#E1E1E1] pt-6 sm:pt-8">
          {/* Social Media Links */}
          <div className="flex space-x-4 sm:space-x-6 justify-center lg:justify-start">
            {['facebook-f', 'twitter', 'linkedin-in', 'instagram'].map((icon) => (
              <Link key={icon} className="hover:text-[#E1E1E1] transition text-xl sm:text-2xl">
                <i className={`fab fa-${icon}`}></i>
              </Link>
            ))}
          </div>

          {/* Additional Links */}
          <div className="text-xs sm:text-sm text-[#E1E1E1] text-center">
            <span className="hover:text-white transition mx-2 cursor-pointer">Privacy Policy</span> |
            <span className="hover:text-white transition mx-2 cursor-pointer">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;



