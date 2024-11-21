import React, { useState } from 'react';
import axios from 'axios';
import { trackParcel } from '../services/userDashboard';

const TrackParcels = () => {
  const [trackingNumber, setTrackingNumber] = useState('');
  const [parcelStatus, setParcelStatus] = useState(null);
  const [error, setError] = useState('');

  
  const statusOrder=[
    "orderplaced",
    "pickup",
    "in_transit",
    // "out for delivery",
    "delivered",
  ]

  // Function to create a mock status history
  const generateStatusHistory = (currentStatus) => {
    const currentIndex = statusOrder.indexOf(currentStatus);

    if (currentIndex === -1) return [];

    return statusOrder.map((status, index) => ({
      step: status.replace(/_/g, ' ').toUpperCase(),
      status:
        index < currentIndex
          ? 'Completed'
          : index === currentIndex
          ? 'Ongoing'
          : 'Pending',
    }));
  };

  // Fetch parcel status from API
  const getParcelStatus = async (trackingNumber) => {
    try {
      const response = await trackParcel(trackingNumber);
     
      return response.data.status || null;
    } catch (err) {
      console.error(err);
      return null;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!trackingNumber) {
      setError('Please enter a valid tracking number.');
      setParcelStatus(null);
      return;
    }

    const currentStatus = await getParcelStatus(trackingNumber);
    

    if (currentStatus) {
      const history = generateStatusHistory(currentStatus);
      setParcelStatus(history);
      setError('');
    } else {
      setParcelStatus(null);
      setError('Tracking number not found. Please check and try again.');
    }
  };

  return (
    <div className="container mx-auto px-4 md:px-6 py-12 h-full bg-gray-50 bg-gradient-to-r from-blue-50 to-cyan-100">
      <h2 className="text-4xl md:text-5xl font-extrabold text-center text-[#1D3557] mb-12">
        Track Your Parcel
      </h2>

      <div className="flex flex-col md:flex-row items-start justify-center gap-6">
        {/* Left Side Form */}
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 w-full max-w-md">
            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label
                  className="block text-sm font-semibold text-gray-700 mb-2"
                  htmlFor="trackingNumber"
                >
                  Enter Tracking Number
                </label>
                <input
                  type="text"
                  id="trackingNumber"
                  name="trackingNumber"
                  value={trackingNumber}
                  onChange={(e) => setTrackingNumber(e.target.value)}
                  required
                  className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-[#4FC3F7] transition"
                  placeholder="Tracking Number"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[#1D3557] text-white font-semibold py-3 rounded-lg hover:bg-[#4FC3F7] transition-all duration-300 ease-in-out"
              >
                Track Parcel
              </button>
              {error && <p className="text-red-500 mt-4">{error}</p>}
            </form>
          </div>
        </div>

        {/* Right Side: Tracking Info */}
        <div className="w-full md:w-1/2">
          {parcelStatus ? (
            <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
              <h3 className="text-2xl font-bold mb-6 text-[#1D3557]">
                Tracking Information
              </h3>
              <div className="relative">
                <div className="absolute left-0 top-0 h-full border-l-2 border-gray-300"></div>
                {parcelStatus.map((status, index) => (
                  <div key={index} className="flex items-center mb-4 relative">
                    <div
                      className={`w-4 h-4 rounded-full ${
                        status.status === 'Completed'
                          ? 'bg-green-500'
                          : status.status === 'Ongoing'
                          ? 'bg-yellow-500'
                          : 'bg-gray-400'
                      } absolute -left-2`}
                    />
                    <div className="ml-6">
                      <h4 className="font-semibold">{status.step}</h4>
                      <p className="text-sm text-gray-500">{status.status}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
              <h3 className="text-lg font-semibold text-gray-600 mb-6">
                Please enter a tracking number to view the parcel status.
              </h3>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TrackParcels;

