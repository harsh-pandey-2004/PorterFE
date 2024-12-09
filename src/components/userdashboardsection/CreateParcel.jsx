import React, { useState, useEffect } from 'react';
import { createParcel } from '../../services/userDashboard';
import axios from 'axios';

const CreateParcel = () => {
  const [parcelDetails, setParcelDetails] = useState({
    from: '',
    to: '',
    vehicleType: 'Bike',
    distance: 0,
    productType: '',
    serviceLevel: 'regular',
    weight: '',
  });

  const [price, setPrice] = useState(null);
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  useEffect(() => {
    const storedParcelData = JSON.parse(localStorage.getItem('savedParcelData'));
    if (storedParcelData) {
      setParcelDetails(storedParcelData);
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setParcelDetails({
      ...parcelDetails,
      [name]: value,
    });


    localStorage.setItem('savedParcelData', JSON.stringify({
      ...parcelDetails,
      [name]: value,
    }));
  };
  const handleEstimateClick = async (pickup, drop) => {
    // Destructure pickup and drop addresses (assuming passed as arguments)

    if (!pickup || !drop) {
      // Handle missing address case (optional)
      alert('Please enter both pickup and drop addresses!');
      return null; // Return null for missing addresses
    }

    const apiKey = 'AlzaSyT-vBt2bBSn2ZnJA_3iUny4TW958DF7t0Y'; // Replace with your actual GoMaps.pro API key
    const url = `https://maps.gomaps.pro/maps/api/directions/json?destination=${drop}&origin=${pickup}&key=${apiKey}`;

    try {
      const response = await axios.get(url);

      if (response.data.status === 'OK') {
        // Handle successful directions response
        const directions = response.data.routes[0];
        const twoPlaceDistance = directions.legs[0].distance.text; // Get distance with unit

        // Extract the numeric distance from the text
        const distance = parseFloat(twoPlaceDistance.split()[0]);

        return distance;
      } else {
        // Handle errors
        console.error('Directions API error:', response.data.error_message);
        alert('Could not retrieve directions. Please try again later.');
        return null;
      }
    } catch (error) {
      console.error('Error fetching directions:', error);
      alert('An error occurred. Please try again later.');
      return null;
    }
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = JSON.parse(localStorage.getItem('user'));
    console.log(parcelDetails.from, parcelDetails.to);
    const distance = await handleEstimateClick(parcelDetails.from, parcelDetails.to);
    console.log(distance);
    if (distance !== null) {
      const updatedParcelDetails = { ...parcelDetails, distance: distance }
      setParcelDetails(updatedParcelDetails);
      console.log(parcelDetails);
      const parcelData = {
        userId: user._id,
        ...parcelDetails,
      };

      try {
        const response = await createParcel(parcelData);
        setPrice(response.data.parcel.price);
        setIsPopupVisible(true);
        localStorage.removeItem('savedParcelData');
      } catch (error) {
        console.error("Error creating parcel:", error);
      }
    } else {
      console.error("Error retrieving distance. Please try again.");
    }

  };



  const handleClosePopup = () => {
    setIsPopupVisible(false);
    setParcelDetails({
      from: '',
      to: '',
      vehicleType: 'Bike',
      distance: 15,
      productType: '',
      serviceLevel: 'regular',
      weight: '',
    });
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-lg mt-10">
      <h2 className="text-2xl font-bold mb-4 text-[#1D3557] text-center">Create a New Parcel</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <input
            type="text"
            name="from"
            value={parcelDetails.from}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#4FC3F7] focus:outline-none"
            placeholder="From (Sender's Name, Number, Address)"
            required
          />
        </div>
        <div className="mb-4">
          <input
            type="text"
            name="to"
            value={parcelDetails.to}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#4FC3F7] focus:outline-none"
            placeholder="To (Recipient's Name, Number, Address)"
            required
          />
        </div>
        <div className="mb-4">
          <select
            name="vehicleType"
            value={parcelDetails.vehicleType}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#4FC3F7] focus:outline-none"
          >
            <option value="Bike">Bike (Max 20 kg)</option>
            <option value="Ev 3 wheeler">Ev 3 Wheeler (Max 50 kg)</option>
            <option value="Three wheeler">Three Wheeler (Max 100 kg)</option>
            <option value="Mahindra Pick up">Mahindra PickUp (Max 300 kg)</option>
            <option value="Tata Ace">Tata Ace (Max 500 kg)</option>
          </select>
        </div>
        <div className="mb-4">
          <input
            type="text"
            name="productType"
            value={parcelDetails.productType}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#4FC3F7] focus:outline-none"
            placeholder="Type of Product (e.g., documents, electronics)"
          />
        </div>
        <div className="mb-4">
          <select
            name="serviceLevel"
            value={parcelDetails.serviceLevel}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#4FC3F7] focus:outline-none"
          >
            <option value="regular">Regular</option>
            <option value="express">Express</option>
          </select>
        </div>
        <div className="mb-4">
          <input
            type="number"
            name="weight"
            value={parcelDetails.weight}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#4FC3F7] focus:outline-none"
            placeholder="Weight (kg)"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-[#1D3557] text-white py-3 rounded-md hover:bg-[#4FC3F7] transition duration-200 ease-in-out focus:outline-none"
        >
          Create Parcel
        </button>
      </form>

      {/* Popup for success */}
      {isPopupVisible && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md text-center">
            <h3 className="text-xl font-bold mb-2 text-[#1D3557]">Parcel Created Successfully!</h3>
            <p className="mb-4">Estimated Price: <span className="font-bold text-[#4FC3F7]">Rs.{price}</span></p>
            <div className="flex justify-center space-x-4">
              <button
                onClick={handleClosePopup}
                className="bg-[#1D3557] text-white py-2 px-4 rounded-md hover:bg-[#4FC3F7] transition duration-200 ease-in-out focus:outline-none"
              >
                Confirm
              </button>
              <button
                onClick={handleClosePopup}
                className="bg-[#1D3557] text-white py-2 px-4 rounded-md hover:bg-[#4FC3F7] transition duration-200 ease-in-out focus:outline-none"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CreateParcel;


