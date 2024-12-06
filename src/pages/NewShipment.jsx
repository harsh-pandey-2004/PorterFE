import React, { useState, useEffect } from 'react';
import { createParcel } from '../services/userDashboard';
import { useNavigate } from 'react-router-dom';
import BookMyTransport from '../assets/Book my transport.png';

const NewShipment = () => {
  const [formData, setFormData] = useState({
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
  const [isLoginPopupVisible, setIsLoginPopupVisible] = useState(false);
  const navigate = useNavigate();

  // Check if user is logged in
  const user = JSON.parse(localStorage.getItem('user'));

  useEffect(() => {
    const savedParcelData = JSON.parse(localStorage.getItem('savedParcelData'));

    if (savedParcelData && user) {
      handleFormSubmit(savedParcelData);
      localStorage.removeItem('savedParcelData');
    }
  }, [user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFormSubmit = async (parcelData) => {
    try {
      const response = await createParcel(parcelData);
      setPrice(response.data.price);
      setIsPopupVisible(true);
      console.log('Parcel created:', response.data);
    } catch (error) {
      console.error('Error creating parcel:', error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const parcelData = {
      userId: user ? user._id : null,
      ...formData,
    };

    if (!user) {
      try {
        localStorage.setItem('savedParcelData', JSON.stringify(parcelData));
        setIsLoginPopupVisible(true); // Show login popup if not logged in
      } catch (error) {
        console.error('Error saving parcel data to local storage:', error);
      }
      return;
    }
    // if(user && user.role==="user"){

    // }

    handleFormSubmit(parcelData);
  };

  const handleClosePopup = () => {
    setIsPopupVisible(false);
  };

  const handleLoginRedirect = () => {
    setIsLoginPopupVisible(false);
    navigate('/login');
  };

  const handleCancel = () => {
    setIsLoginPopupVisible(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-cyan-100 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-extrabold text-center text-[#1D3557] mb-12">Create a New Shipment</h2>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Left Side Content: Steps to Create Shipment */}
          {/* <div className="w-full max-w-2xl mx-auto bg-white rounded-lg shadow-2xl p-6 md:p-8">
            <h3 className="text-2xl md:text-4xl font-bold mb-6 text-[#1D3557] tracking-wide text-center md:text-left">
              How to Create a Shipment
            </h3>
            <p className="text-base md:text-lg text-gray-600 mb-6 leading-relaxed text-center md:text-left">
              Follow these simple steps to create your shipment. Please ensure that all the details are correct.
            </p>
            <ul className="list-decimal pl-6 text-gray-700 space-y-4">
              {[
                "Enter the sender's details (From address).",
                "Provide the recipient's details (To address).",
                "Specify the type of product and its weight.",
                "Choose your transport method (vehicle type).",
                "Select the urgency level (Regular or Express).",
                "Submit the form to get an estimated price and generate a tracking number.",
              ].map((step, index) => (
                <li key={index} className="text-sm md:text-lg flex items-start space-x-3">
                  <span className="w-6 h-6 flex items-center justify-center bg-[#1D3557] text-white rounded-full">
                    {index + 1}
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ul>
            <p className="text-base md:text-lg text-gray-600 mt-6 text-center md:text-left">
              After submitting, you will receive a tracking number to track your shipment.
            </p>
          </div> */}
          <div className="w-full max-w-2xl mx-auto bg-white rounded-lg shadow-2xl p-6 md:p-8 flex justify-center items-center">
            <img
              src={BookMyTransport}
              alt="Book My Transport"
              className="max-w-full h-auto rounded-lg"
            />
          </div>


          {/* Right Side Form */}
          <div className="md:w-1/2 bg-white rounded-lg shadow-lg p-8">
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="from"
                value={formData.from}
                onChange={handleChange}
                required
                placeholder="From (Sender's Name, Number, Address)"
                className="w-full border border-[#E0E0E0] rounded-lg p-4 text-lg focus:ring-2 focus:ring-[#4FC3F7] mb-6"
              />
              <input
                type="text"
                name="to"
                value={formData.to}
                onChange={handleChange}
                required
                placeholder="To (Recipient's Name, Number, Address)"
                className="w-full border border-[#E0E0E0] rounded-lg p-4 text-lg focus:ring-2 focus:ring-[#4FC3F7] mb-6"
              />
              <input
                type="text"
                name="productType"
                value={formData.productType}
                onChange={handleChange}
                placeholder="Type of Product (e.g., electronics, documents)"
                className="w-full border border-[#E0E0E0] rounded-lg p-4 text-lg focus:ring-2 focus:ring-[#4FC3F7] mb-6"
              />
              <select
                name="vehicleType"
                value={formData.vehicleType}
                onChange={handleChange}
                className="w-full border border-[#E0E0E0] rounded-lg p-4 text-lg focus:ring-2 focus:ring-[#4FC3F7] mb-6"
              >
                <option value="Bike">Bike (Max 20 kg)</option>
                <option value="Ev 3 wheeler">Ev 3 Wheeler (Max 50 kg)</option>
                <option value="Three wheeler">Three Wheeler (Max 100 kg)</option>
                <option value="Mahindra Pick up">Mahindra PickUp (Max 300 kg)</option>
                <option value="Tata Ace">Tata Ace (Max 500 kg)</option>
              </select>
              <select
                name="serviceLevel"
                value={formData.serviceLevel}
                onChange={handleChange}
                className="w-full border border-[#E0E0E0] rounded-lg p-4 text-lg focus:ring-2 focus:ring-[#4FC3F7] mb-6"
              >
                <option value="regular">Regular</option>
                <option value="express">Express</option>
              </select>
              <input
                type="number"
                name="weight"
                value={formData.weight}
                onChange={handleChange}
                required
                placeholder="Weight (kg)"
                className="w-full border border-[#E0E0E0] rounded-lg p-4 text-lg focus:ring-2 focus:ring-[#4FC3F7] mb-6"
              />
              <button
                type="submit"
                className="w-full bg-[#1D3557] text-white font-semibold text-lg py-4 rounded-lg hover:bg-[#4FC3F7] shadow-md transition duration-300"
              >
                Create Shipment
              </button>
            </form>

            {isPopupVisible && (
              <div className="mt-8 bg-[#4CAF50] rounded-lg p-6 text-white shadow-lg">
                <h3 className="text-xl font-bold">Shipment Created Successfully!</h3>
                <p>Your estimated price is: <strong>${price}</strong></p>
              </div>
            )}
          </div>
        </div>

        {isLoginPopupVisible && (
          <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50">
            <div className="bg-white p-8 rounded-xl shadow-xl max-w-md w-full text-center relative">
              <h3 className="text-2xl font-bold mb-6 text-gray-800">
                You need to log in to create a shipment!
              </h3>
              <div className="flex justify-center gap-4">
                <button
                  onClick={handleLoginRedirect}
                  className="px-8 py-3 bg-[#4FC3F7] text-white font-semibold rounded-lg hover:bg-[#1D3557] transition-all duration-300 ease-in-out shadow-md transform hover:scale-105"
                >
                  Go to Login
                </button>
                <button
                  onClick={handleCancel}
                  className="px-8 py-3 bg-[#F44336] text-white font-semibold rounded-lg hover:bg-[#D32F2F] transition-all duration-300 ease-in-out shadow-md transform hover:scale-105"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>

        )}
      </div>
    </div>
  );
};

export default NewShipment;








