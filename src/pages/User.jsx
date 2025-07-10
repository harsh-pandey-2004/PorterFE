import React from "react";
import pocketfriendly from '../assets/pocketfriendly.webp';
import sameday from '../assets/sameday.webp';
import verified from '../assets/verified.webp';
import allinone from '../assets/allinone.webp';
import livetracking from '../assets/livetracking.webp';
import urgentparcel from '../assets/urgentparcel.webp';
import festiveitems from '../assets/festiveitems.webp';
import houseshifting from '../assets/houseshifting.png';
import medicalitems from '../assets/medicalitems.jpg';
import dailyessentials from '../assets/dailyessentials.jpg';
import grocery from '../assets/grocery.jpg';
import vehicletype from '../assets/vehicletype.jpg';
import bikedelivery from '../assets/bikedelivery.jpeg';
import truckdelivery from '../assets/truck delivery.jpeg';
import auto from '../assets/auto.jpeg'
import chotaHathi from '../assets/chota hathi.jpeg';
import threewheeler from '../assets/threewheeler.jpeg'


const User = () => {
  const advantages = [
    { title: "Pocket Friendly Delivery", imgSrc: pocketfriendly },
    { title: "Same Day Doorstep Delivery", imgSrc: sameday },
    { title: "Verified & Professional Drivers", imgSrc: verified },
    { title: "Live Tracking of Packages", imgSrc: allinone },
    { title: "All-in-One Delivery Solution", imgSrc: livetracking },
  ];

  const personalNeeds = [
    { title: "Urgent Parcels", imgSrc: urgentparcel },
    { title: "House Shifting", imgSrc: houseshifting},
    { title: "Festive Items", imgSrc: festiveitems },
    { title: "Medical Items", imgSrc: medicalitems },
    { title: "Grocery Items", imgSrc: grocery },
    { title: "Daily Essentials", imgSrc: dailyessentials },
  ];

  return (
    <div className="bg-gradient-to-r from-blue-50 to-cyan-100 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-[#1D3557] mb-4">
            Book My Transport - Your Delivery Partner for Daily Needs
          </h2>
          <p className="text-lg text-gray-700">
            Forgot something? Need anything urgently? Want last-minute help to shift your items? <br />
            <span className="font-bold text-[#1D3557]">BOOK MY TRANSPORT</span> can help you deliver your goods in last minutes. Our bikes & trucks are waiting!
          </p>
        </div>

        {/* Advantages Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-[#1D3557] mb-6">
            Advantages to Use Book My Transport
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {advantages.map((item, index) => (
              <div
                key={index}
                className="bg-white shadow-lg rounded-lg p-6 text-center transform hover:scale-105 transition-transform"
              >
                <img
                  src={item.imgSrc}
                  alt={item.title}
                  className="w-full h-32 object-cover mb-4 rounded-lg"
                />
                <h4 className="text-xl font-bold text-[#1D3557]">{item.title}</h4>
              </div>
            ))}
          </div>
        </div>

        {/* Personal Needs Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-[#1D3557] mb-6">
            Delivers All Your Personal Needs
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {personalNeeds.map((item, index) => (
              <div
                key={index}
                className="bg-white shadow-lg rounded-lg p-6 text-center transform hover:scale-105 transition-transform"
              >
                <img
                  src={item.imgSrc}
                  alt={item.title}
                  className="w-full h-32 object-cover mb-4 rounded-lg"
                />
                <h4 className="text-xl font-bold text-[#1D3557]">{item.title}</h4>
              </div>
            ))}
          </div>
        </div>

        {/* Types of Vehicles Section */}
        {/* <div className="mb-16 text-center">
          <h3 className="text-3xl font-bold text-[#1D3557] mb-6">Types of Vehicles</h3>
          <p className="text-lg text-gray-700">
            Choose from a wide range of vehicles, from bikes to trucks, tailored to your delivery needs.
          </p>
          <img
            src={vehicletype}
            alt="Types of Vehicles"
            className="w-full max-w-3xl mx-auto mt-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform"
          />
        </div> */}
        {/* Types of Vehicles Section */}
        <div className="mb-16 text-center">
  <h3 className="text-3xl font-bold text-[#1D3557] mb-6">Types of Vehicles</h3>
  <p className="text-lg text-gray-700 mb-8">
    Choose from a wide range of vehicles, from bikes to trucks, tailored to your delivery needs.
  </p>
  <div className="relative mx-auto max-w-5xl bg-gradient-to-br from-white to-gray-50 rounded-lg shadow-lg flex justify-center items-center flex-wrap gap-6 py-6 px-4 sm:px-8">
    {/* Vehicle Icons */}
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 sm:gap-6 w-full">
      <div className="flex flex-col items-center cursor-pointer transform hover:scale-105 transition-transform">
        <img src={bikedelivery} alt="Bike Delivery" className="w-20 sm:w-28 h-20 sm:h-28 object-contain" />
        <p className="text-sm sm:text-base font-semibold text-gray-800 mt-2">Bike Delivery</p>
      </div>
      <div className="flex flex-col items-center cursor-pointer transform hover:scale-105 transition-transform">
        <img src={threewheeler} alt="EV 3 Wheeler Delivery" className="w-20 sm:w-28 h-20 sm:h-28 object-contain" />
        <p className="text-sm sm:text-base font-semibold text-gray-800 mt-2">EV 3 Wheeler</p>
      </div>
      <div className="flex flex-col items-center cursor-pointer transform hover:scale-105 transition-transform">
        <img src={auto} alt="Three Wheeler Delivery" className="w-20 sm:w-28 h-20 sm:h-28 object-contain" />
        <p className="text-sm sm:text-base font-semibold text-gray-800 mt-2">Three Wheeler</p>
      </div>
      <div className="flex flex-col items-center cursor-pointer transform hover:scale-105 transition-transform">
        <img src={chotaHathi} alt="Mahindra PickUp" className="w-20 sm:w-28 h-20 sm:h-28 object-contain" />
        <p className="text-sm sm:text-base font-semibold text-gray-800 mt-2">Mahindra PickUp</p>
      </div>
      <div className="flex flex-col items-center cursor-pointer transform hover:scale-105 transition-transform">
        <img src={truckdelivery} alt="Tata Ace" className="w-20 sm:w-28 h-20 sm:h-28 object-contain" />
        <p className="text-sm sm:text-base font-semibold text-gray-800 mt-2">Tata Ace</p>
      </div>
    </div>
  </div>
</div>


        {/* Customer Reviews Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-[#1D3557] mb-6">Customer Reviews</h3>
          <div className="text-center text-lg text-gray-700 italic">
            <p>"Book My Transport made my move so easy! Highly recommend their professional service."</p>
            <p className="mt-4">- Happy Customer</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
