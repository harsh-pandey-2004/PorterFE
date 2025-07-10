// import React from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
// // import { FaMotorcycle, FaTruck, FaBoxOpen, FaGlobe,FaCarSide } from 'react-icons/fa';
// import bikedelivery from '../../assets/bikedelivery.jpeg';
// import truckdelivery from '../../assets/truck delivery.jpeg';
// import auto from '../../assets/auto.jpeg'
// import chotaHathi from '../../assets/chota hathi.jpeg';
// import threewheeler from '../../assets/threewheeler.jpeg'

// const EstimateResults = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const { formData, selectedService } = location.state || {};

//   const { pickup, drop } = formData;
//   const distance = 10; // Example distance between pickup and drop
//   const price = distance * 10; // 1 km = 10 rs

//   // Function to handle booking button click
//   const handleBookingClick = () => {
//     // navigate('/booking'); // Replace '/booking' with your booking page route
//   };

//   // Select the icon based on the selected service
//   const renderIcon = () => {
//     switch (selectedService) {
//       case 'Bike Delivery':
//         // return <FaMotorcycle className="text-4xl text-[#1D3557]" />;
//         return <img src={bikedelivery} className='w-16 sm:w-24 h-16 sm:h-24'/>
//       case 'EV 3 Wheeler Delivery':
//         return <img src={threewheeler} className='w-20 sm:w-36 h-16 sm:h-24'/>;
//       case 'Three Wheeler Delivery':
//         return <img src={auto} className='w-20 sm:w-36 h-16 sm:h-24'/>;
//       case 'Mahindra PickUp':
//         return <img src={chotaHathi} className='w-20 sm:w-36 h-16 sm:h-24'/>;
//       case 'Tata Ace':
//         return <img src={truckdelivery} className='w-20 sm:w-36 h-16 sm:h-24'/>;
//       default:
//         return null;
//     }
//   };

//   return (

//     <div className="container mx-auto p-6 h-screen py-20 bg-gradient-to-r from-blue-50 to-cyan-100">
//       <h1 className="text-3xl font-bold mb-6 text-center">Results</h1>

//       {/* Result section */}
//       <div className="flex flex-col md:flex-row justify-between items-center bg-white p-6 rounded-lg shadow-lg mb-8 py-20 px-40">
//         {/* Left Side: Icon and Price */}
//         <div className="flex items-center space-x-4 md:space-x-6">
//           {renderIcon()}
//           <div>
//             <h2 className="text-2xl font-bold">{selectedService}</h2>
//             <p className="text-lg">Estimated Price: {price} Rs</p>
//           </div>
//         </div>

//         {/* Right Side: Pickup and Drop with dots */}
//         <div className="flex flex-col items-center mt-4 md:mt-0">
//           <div className="flex items-center space-x-2">
//             <div className="w-4 h-4 bg-green-500 rounded-full"></div>
//             <p className="text-sm">{pickup}</p>
//           </div>
//           <div className="flex items-center space-x-2">
//             <div className="w-4 h-4 bg-red-500 rounded-full"></div>
//             <p className="text-sm">{drop}</p>
//           </div>
//         </div>
//       </div>

//       {/* Call to Action Section */}
//       <div className="text-center">
//         <h2 className="text-xl font-bold mb-4">Ready to Book?</h2>
//         <p className="text-lg mb-6">Go to our app for easy booking and a seamless experience.</p>
//         <button
//           onClick={handleBookingClick}
//           className="bg-[#1D3557] text-white px-8 py-3 rounded-md text-lg"
//         >
//           Go to Booking
//         </button>
//       </div>
//     </div>

//   );
// };

// export default EstimateResults;

import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import bikedelivery from '../../assets/bikedelivery.jpeg';
import truckdelivery from '../../assets/truck delivery.jpeg';
import auto from '../../assets/auto.jpeg';
import chotaHathi from '../../assets/chota hathi.jpeg';
import threewheeler from '../../assets/threewheeler.jpeg';

const EstimateResults = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { pickup,drop, selectedService,twoPlaceDistance} = location.state || {};
  console.log(selectedService)
  // console.log(twoPlaceDistance)
  // const { pickup, drop } = formData || {};
  console.log(pickup,drop);
  const distance = parseFloat(twoPlaceDistance.split()[0]); // Example distance between pickup and drop
  console.log(distance)
  const price = distance * 10; // 1 km = 10 rs

  const handleBookingClick = () => {
    // Add booking navigation logic
  };

  const renderIcon = () => {
    switch (selectedService) {
      case 'Bike Delivery':
        return <img src={bikedelivery} alt="Bike Delivery" className="w-12 sm:w-16 md:w-24 h-12 sm:h-16 md:h-24" />;
      case 'EV 3 Wheeler Delivery':
        return <img src={threewheeler} alt="EV 3 Wheeler Delivery" className="w-16 sm:w-20 md:w-36 h-12 sm:h-16 md:h-24" />;
      case 'Three Wheeler Delivery':
        return <img src={auto} alt="Three Wheeler Delivery" className="w-16 sm:w-20 md:w-36 h-12 sm:h-16 md:h-24" />;
      case 'Mahindra PickUp':
        return <img src={chotaHathi} alt="Mahindra PickUp" className="w-16 sm:w-20 md:w-36 h-12 sm:h-16 md:h-24" />;
      case 'Tata Ace':
        return <img src={truckdelivery} alt="Tata Ace" className="w-16 sm:w-20 md:w-36 h-12 sm:h-16 md:h-24" />;
      default:
        return null;
    }
  };

  return (
    <div className="container mx-auto p-4 sm:p-6 md:py-20 bg-gradient-to-r from-blue-50 to-cyan-100 min-h-screen">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-center">Results</h1>

      {/* Result Section */}
      <div className="flex flex-col md:flex-row justify-between items-center bg-white p-4 sm:p-6 md:p-10 rounded-lg shadow-lg mb-8">
        {/* Left Side: Icon and Price */}
        <div className="flex items-center space-x-4 md:space-x-6">
          {renderIcon()}
          <div>
            <h2 className="text-lg sm:text-2xl md:text-3xl font-bold">{selectedService}</h2>
            
            <p className="text-sm sm:text-base md:text-lg">Estimated Price: Rs.{price}</p>
          </div>
        </div>

        {/* Right Side: Pickup and Drop with dots */}
        <div className="flex flex-col items-start sm:items-center mt-4 md:mt-0 space-y-2 sm:space-y-4">
          <div className="flex items-center space-x-2">
            <div className="w-3 sm:w-4 h-3 sm:h-4 bg-green-500 rounded-full"></div>
            <p className="text-xs sm:text-sm md:text-base">{pickup}</p>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 sm:w-4 h-3 sm:h-4 bg-red-500 rounded-full"></div>
            <p className="text-xs sm:text-sm md:text-base">{drop}</p>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="text-center">
        <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-4">Ready to Book?</h2>
        <p className="text-sm sm:text-lg md:text-xl mb-6">Go to our app for easy booking and a seamless experience.</p>
        <button
          onClick={handleBookingClick}
          className="bg-[#1D3557] text-white px-6 py-2 sm:px-8 sm:py-3 rounded-md text-sm sm:text-lg"
        >
          Go to Booking
        </button>
      </div>
    </div>
  );
};

export default EstimateResults;
