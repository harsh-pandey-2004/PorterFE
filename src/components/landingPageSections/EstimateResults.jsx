import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { FaMotorcycle, FaTruck, FaBoxOpen, FaGlobe,FaCarSide } from 'react-icons/fa';

const EstimateResults = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { formData, selectedService } = location.state || {};

  const { pickup, drop } = formData;
  const distance = 10; // Example distance between pickup and drop
  const price = distance * 10; // 1 km = 10 rs

  // Function to handle booking button click
  const handleBookingClick = () => {
    // navigate('/booking'); // Replace '/booking' with your booking page route
  };

  // Select the icon based on the selected service
  const renderIcon = () => {
    switch (selectedService) {
      case 'Bike Delivery':
        return <FaMotorcycle className="text-4xl text-[#1D3557]" />;
      case 'E-Rickshaw Delivery':
        return <FaCarSide className="text-4xl text-[#1D3557]" />;
      case 'Truck Delivery':
        return <FaTruck className="text-4xl text-[#1D3557]" />;
      case 'Packers & Movers':
        return <FaBoxOpen className="text-4xl text-[#1D3557]" />;
      case 'All India Parcel':
        return <FaGlobe className="text-4xl text-[#1D3557]" />;
      default:
        return null;
    }
  };

  return (

    <div className="container mx-auto p-6 h-screen py-20 bg-gradient-to-r from-blue-50 to-cyan-100">
      <h1 className="text-3xl font-bold mb-6 text-center">Results</h1>

      {/* Result section */}
      <div className="flex flex-col md:flex-row justify-between items-center bg-white p-6 rounded-lg shadow-lg mb-8 py-20 px-40">
        {/* Left Side: Icon and Price */}
        <div className="flex items-center space-x-4 md:space-x-6">
          {renderIcon()}
          <div>
            <h2 className="text-2xl font-bold">{selectedService}</h2>
            <p className="text-lg">Estimated Price: {price} Rs</p>
          </div>
        </div>

        {/* Right Side: Pickup and Drop with dots */}
        <div className="flex flex-col items-center mt-4 md:mt-0">
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 bg-green-500 rounded-full"></div>
            <p className="text-sm">{pickup}</p>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 bg-red-500 rounded-full"></div>
            <p className="text-sm">{drop}</p>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="text-center">
        <h2 className="text-xl font-bold mb-4">Ready to Book?</h2>
        <p className="text-lg mb-6">Go to our app for easy booking and a seamless experience.</p>
        <button
          onClick={handleBookingClick}
          className="bg-[#1D3557] text-white px-8 py-3 rounded-md text-lg"
        >
          Go to Booking
        </button>
      </div>
    </div>

  );
};

export default EstimateResults;

