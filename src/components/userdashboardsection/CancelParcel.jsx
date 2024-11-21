import React, { useState } from 'react';

const CancelParcel = () => {
  const [trackingNumber, setTrackingNumber] = useState('');

  const handleDelete = (e) => {
    e.preventDefault();
    // Logic to delete a parcel
    console.log('Parcel deleted with tracking number:', trackingNumber);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold mb-6 text-[#1D3557] text-center">Cancel Parcel</h2>
        <form onSubmit={handleDelete}>
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-1">Tracking Number</label>
            <input
              type="text"
              value={trackingNumber}
              onChange={(e) => setTrackingNumber(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#4FC3F7] focus:outline-none"
              placeholder="Enter the tracking number"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-red-500 text-white py-3 rounded-md hover:bg-red-600 transition duration-200 ease-in-out focus:outline-none"
          >
            Cancel Parcel
          </button>
        </form>
      </div>
    </div>
  );
};

export default CancelParcel;


