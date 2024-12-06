import React, { useState } from 'react';
import { FaMotorcycle, FaTruck, FaBoxOpen, FaGlobe, FaCarSide } from 'react-icons/fa';
import bikedelivery from '../../assets/bikedelivery.jpeg';
import truckdelivery from '../../assets/truck delivery.jpeg';
import auto from '../../assets/auto.jpeg'
import chotaHathi from '../../assets/chota hathi.jpeg';
import threewheeler from '../../assets/threewheeler.jpeg'
import HeroSection from './HeroSection';
import Banner from './Banner';
import FeaturesSection from './FeaturesSection';
import TestimonialsSection from './TestimonialsSection';
import CallToActionSection from './CallToActionSection';
import { useNavigate } from 'react-router-dom';
import OurServicesInCities from './OurServicesInCities';
import WhyBookMyTransport from './WhyBookMyTransport';


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
          // 
          <div className="absolute inset-x-0 top-[52%] transform -translate-y-1/2 mx-auto max-w-5xl bg-white rounded-lg shadow-lg flex justify-center items-center flex-wrap gap-4 sm:gap-6 py-4 px-6 sm:px-10 z-30">
  {/* Icons */}
  <div className="flex flex-wrap justify-center sm:justify-between items-center w-full gap-4 sm:gap-4">
    <div className="flex flex-col items-center cursor-pointer w-24 sm:w-36" onClick={() => handleIconClick('Bike Delivery')}>
      <img src={bikedelivery} alt="Bike Delivery" className="w-16 sm:w-24 h-16 sm:h-24" />
      <p className="text-center text-sm sm:text-base">Bike Delivery</p>
    </div>
    <div className="flex flex-col items-center cursor-pointer w-24 sm:w-36" onClick={() => handleIconClick('EV 3 Wheeler Delivery')}>
      <img src={threewheeler} alt="EV 3 Wheeler Delivery" className="w-20 sm:w-36 h-16 sm:h-24" />
      <p className="text-center text-sm sm:text-base">EV 3 Wheeler Delivery</p>
    </div>
    <div className="flex flex-col items-center cursor-pointer w-24 sm:w-36" onClick={() => handleIconClick('Three Wheeler Delivery')}>
      <img src={auto} alt="Three Wheeler Delivery" className="w-20 sm:w-36 h-16 sm:h-24" />
      <p className="text-center text-sm sm:text-base">Three Wheeler Delivery</p>
    </div>
    <div className="flex flex-col items-center cursor-pointer w-24 sm:w-36" onClick={() => handleIconClick('Mahindra PickUp')}>
      <img src={chotaHathi} alt="Mahindra PickUp" className="w-20 sm:w-36 h-16 sm:h-24" />
      <p className="text-center text-sm sm:text-base">Mahindra PickUp</p>
    </div>
    <div className="flex flex-col items-center cursor-pointer w-24 sm:w-36" onClick={() => handleIconClick('Tata Ace')}>
      <img src={truckdelivery} alt="Tata Ace" className="w-20 sm:w-36 h-16 sm:h-24" />
      <p className="text-center text-sm sm:text-base">Tata Ace</p>
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
      <OurServicesInCities/>
      <WhyBookMyTransport/>
      <FeaturesSection />
      <TestimonialsSection />
      <CallToActionSection />
    </>
  );
};

export default HeroWithOverlay;


