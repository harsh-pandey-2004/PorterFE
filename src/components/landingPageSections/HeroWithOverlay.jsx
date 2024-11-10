import React, { useState } from 'react';
import { FaMotorcycle, FaTruck, FaBoxOpen, FaGlobe, FaCarSide } from 'react-icons/fa';
import HeroSection from './HeroSection';
import Banner from './Banner';
import FeaturesSection from './FeaturesSection';
import TestimonialsSection from './TestimonialsSection';
import CallToActionSection from './CallToActionSection';
import { useNavigate } from 'react-router-dom';


const HeroWithOverlay = () => {
  const [showForm, setShowForm] = useState(false);
  const [selectedService, setSelectedService] = useState('');
  const [formData, setFormData] = useState({
    pickup: '',
    drop: '',
    phoneNumber: '',
    name: '',
  });



  const navigate = useNavigate();

  const handleIconClick = (service) => {
    setSelectedService(service);
    setShowForm(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };



  const handleEstimateClick = () => {
    navigate('/estimate-results', { state: { formData, selectedService } });
  };

  return (
    <>
      <div className="relative">
        <HeroSection />
        {!showForm ? (
          <div className="absolute inset-x-0 top-[52%] transform -translate-y-1/2 mx-auto max-w-5xl bg-white p-6 rounded-lg shadow-lg flex justify-center items-center flex-wrap sm:flex-nowrap py-8">
            {/* Icons */}
            <div className="flex flex-wrap justify-around items-center w-full space-y-4 sm:space-y-0 sm:space-x-6">
              <div className="flex flex-col items-center cursor-pointer w-1/2 sm:w-auto" onClick={() => handleIconClick('Bike Delivery')}>
                <FaMotorcycle className="text-4xl text-[#1D3557]" />
                <p className="text-center">Bike Delivery</p>
              </div>
              <div className="flex flex-col items-center cursor-pointer w-1/2 sm:w-auto" onClick={() => handleIconClick('E-Rickshaw Delivery')}>
                <FaCarSide className="text-4xl text-[#1D3557]" />
                <p className="text-center">E-Rickshaw Delivery</p>
              </div>
              <div className="flex flex-col items-center cursor-pointer w-1/2 sm:w-auto" onClick={() => handleIconClick('Truck Delivery')}>
                <FaTruck className="text-4xl text-[#1D3557]" />
                <p className="text-center">Truck Delivery</p>
              </div>
              <div className="flex flex-col items-center cursor-pointer w-1/2 sm:w-auto" onClick={() => handleIconClick('Packers & Movers')}>
                <FaBoxOpen className="text-4xl text-[#1D3557]" />
                <p className="text-center">Packers & Movers</p>
              </div>
              <div className="flex flex-col items-center cursor-pointer w-1/2 sm:w-auto" onClick={() => handleIconClick('All India Parcel')}>
                <FaGlobe className="text-4xl text-[#1D3557]" />
                <p className="text-center">All India Parcel</p>
              </div>
            </div>
          </div>


        ) : (
          <div className="absolute inset-x-0 top-[52%] transform -translate-y-1/2 mx-auto max-w-6xl bg-white p-6 rounded-lg shadow-lg flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-x-6 sm:space-y-0 py-8 z-50">
            <form className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 items-center w-full">
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 w-full">

                <input
                  type="text"
                  name="pickup"
                  placeholder="Pickup Address"
                  className="flex-1 p-2 border border-gray-300 rounded-md w-full"
                  onChange={handleInputChange}
                  required
                />


                <input
                  type="text"
                  name="drop"
                  placeholder="Drop Address"
                  className="flex-1 p-2 border border-gray-300 rounded-md w-full"
                  onChange={handleInputChange}
                  required
                />

              </div>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 w-full">
                <input
                  type="text"
                  name="phoneNumber"
                  placeholder="Phone Number"
                  className="flex-1 p-2 border border-gray-300 rounded-md w-full"
                  onChange={handleInputChange}
                  required
                />
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="flex-1 p-2 border border-gray-300 rounded-md w-full"
                  onChange={handleInputChange}
                  required
                />
              </div>
              <button type="button" onClick={handleEstimateClick} className="bg-[#1D3557] text-white px-6 py-3 rounded-md w-full sm:w-auto whitespace-nowrap">
                Get an Estimate
              </button>
            </form>
          </div>
        )}
        <Banner />
      </div>
      <FeaturesSection />
      <TestimonialsSection />
      <CallToActionSection />
    </>
  );
};

export default HeroWithOverlay;


