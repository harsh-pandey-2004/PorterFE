import React, { useState } from 'react';
import bg from "../assets/bgfordeliverypartner1.png";
import Introduction from '../components/deliverypartnerpagesection/Introduction';
import Benefits from '../components/deliverypartnerpagesection/Benefits';
import HowItWorks from '../components/deliverypartnerpagesection/HowItWorks';
import Faqsquestion from '../components/deliverypartnerpagesection/FAQS';
import ContactInfo from '../components/deliverypartnerpagesection/ContactInfo';
import Testimonials from '../components/deliverypartnerpagesection/Testimonials';

const Reports = () => {
  const [formData, setFormData] = useState({
    name: '',
    mobileNumber: '',
    city: '',
    vehicle: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('Delivery Partner Added:', formData);

    // Reset form data after submission
    setFormData({
      name: '',
      mobileNumber: '',
      city: '',
      vehicle: '',
    });
  };

  return (
    <>
      <Introduction />
      <div
      className="relative flex flex-col lg:flex-row items-center justify-center bg-cover bg-center px-4 lg:px-10 lg:py-10"
      style={{ backgroundImage: `url(${bg})` }}
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Tagline Section on the Left */}
      <div className="flex flex-col justify-center items-start p-6 md:p-8 lg:p-12 max-w-lg space-y-4 text-white z-10">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold">Drive with Us</h2>
        <p className="text-md md:text-lg lg:text-xl">
          Become your own boss and enjoy flexible hours.
        </p>
        <p className="text-md md:text-lg lg:text-xl">
          Get paid weekly and earn more on every ride.
        </p>
        <p className="text-md md:text-lg lg:text-xl">
          Join our team today and start delivering smiles!
        </p>
      </div>

      {/* Form Section on the Right */}
      <div className="relative z-10 bg-white p-6 lg:p-8 rounded-lg shadow-xl max-w-lg w-full mx-4 lg:mx-0">
        <h1 className="text-3xl lg:text-4xl font-bold text-center text-[#1D3557] mb-6">Join Our Delivery Team</h1>
        <p className="text-center text-md lg:text-lg text-gray-600 mb-8">
          Become a vital part of our network and help us deliver excellence!
        </p>

        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1D3557] transition duration-300 shadow-md hover:shadow-lg"
              onChange={handleInputChange}
              value={formData.name}
              required
            />
          </div>

          <div className="mb-6">
            <input
              type="tel"
              name="mobileNumber"
              placeholder="Enter your mobile number"
              className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1D3557] transition duration-300 shadow-md hover:shadow-lg"
              onChange={handleInputChange}
              value={formData.mobileNumber}
              required
            />
          </div>

          <div className="mb-6">
            <input
              type="text"
              name="city"
              placeholder="Enter your city"
              className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1D3557] transition duration-300 shadow-md hover:shadow-lg"
              onChange={handleInputChange}
              value={formData.city}
              required
            />
          </div>

          <div className="mb-6">
            <input
              type="text"
              name="vehicle"
              placeholder="Enter your vehicle type"
              className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1D3557] transition duration-300 shadow-md hover:shadow-lg"
              onChange={handleInputChange}
              value={formData.vehicle}
              required
            />
          </div>

          <button
            type="submit"
            className="bg-[#1D3557] text-white py-3 px-6 rounded-lg w-full hover:bg-[#4FC3F7] transition duration-300 shadow-lg transform hover:scale-105"
          >
            Submit
          </button>
        </form>

        <p className="text-center mt-6 text-gray-600">Join us in delivering smiles!</p>
      </div>
    </div>
      <HowItWorks />
      <Benefits />
       <Faqsquestion/>
      <Testimonials />
      <ContactInfo />
    </>
  );
};

export default Reports;




