import React, { useState, useEffect } from 'react';
import { createParcel } from '../../services/userDashboard';

const CreateParcel = () => {
  const [parcelDetails, setParcelDetails] = useState({
    from: '',
    to: '',
    vehicleType: 'Bike',
    distance: 15,
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = JSON.parse(localStorage.getItem('user'));
    const parcelData = {
      userId: user._id,
      ...parcelDetails,
    };

    try {
      const response = await createParcel(parcelData);
      setPrice(response.data.price);
      setIsPopupVisible(true);
      localStorage.removeItem('savedParcelData'); 
    } catch (error) {
      console.error("Error creating parcel:", error);
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


