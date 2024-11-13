import React, { useState, useEffect } from 'react';

const UpdateParcel = ({ parcel, onUpdate }) => {
  const [parcelDetails, setParcelDetails] = useState({
    trackingNumber: '',
    from: '',
    to: '',
    quantity: 1,
    productType: '',
    urgency: 'regular',
    transportType: 'road',
    weight: '',
    width: '',
    height: '',
    packingRequired: false,
    packingType: 'standard',
  });

  useEffect(() => {
    if (parcel) {
      setParcelDetails(parcel);
    }
  }, [parcel]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setParcelDetails({
      ...parcelDetails,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Parcel updated:', parcelDetails);
    if (onUpdate) {
      onUpdate(parcelDetails);
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-lg mt-10">
      <h2 className="text-2xl font-bold mb-4 text-[#1D3557] text-center">Update Parcel</h2>
      <form onSubmit={handleSubmit}>
        
        {/* From (Sender's Address) */}
        <div className="mb-4">
          <input
            type="text"
            name="from"
            value={parcelDetails.from}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#4FC3F7] focus:outline-none"
            placeholder="From (Sender's Address)"
            required
          />
        </div>

        {/* To (Receiver's Address) */}
        <div className="mb-4">
          <input
            type="text"
            name="to"
            value={parcelDetails.to}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#4FC3F7] focus:outline-none"
            placeholder="To (Receiver's Address)"
            required
          />
        </div>

        {/* Transport Type */}
        <div className="mb-4">
          <select
            name="transportType"
            value={parcelDetails.transportType}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#4FC3F7] focus:outline-none"
          >
            <option value="bike">Bike (Max 20 kg)</option>
            <option value="autoRickshaw">Auto-rickshaw (Max 50 kg)</option>
            <option value="van">Van (Max 100 kg)</option>
            <option value="miniTruck">Mini Truck (Max 300 kg)</option>
            <option value="truck">Truck (Max 500 kg)</option>
            <option value="container">Container (Max 1000 kg)</option>
          </select>
        </div>

        {/* Quantity */}
        {/* <div className="mb-4">
          <input
            type="number"
            name="quantity"
            value={parcelDetails.quantity}
            onChange={handleChange}
            min="1"
            className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#4FC3F7] focus:outline-none"
            placeholder="Quantity"
            required
          />
        </div> */}

        {/* Product Type */}
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

        {/* Dimensions */}
        {/* <div className="mb-4 flex justify-between">
          <div className="w-1/2 pr-2">
            <input
              type="number"
              name="width"
              value={parcelDetails.width}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#4FC3F7] focus:outline-none"
              placeholder="Width (cm)"
              required
            />
          </div>
          <div className="w-1/2 pl-2">
            <input
              type="number"
              name="height"
              value={parcelDetails.height}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#4FC3F7] focus:outline-none"
              placeholder="Height (cm)"
              required
            />
          </div>
        </div> */}

        {/* Urgency */}
        <div className="mb-4">
          <select
            name="urgency"
            value={parcelDetails.urgency}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#4FC3F7] focus:outline-none"
          >
            <option value="regular">Regular</option>
            <option value="express">Express</option>
          </select>
        </div>

        {/* Weight */}
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

        {/* Packing Required */}
        {/* <div className="mb-4 flex items-center">
          <input
            type="checkbox"
            name="packingRequired"
            checked={parcelDetails.packingRequired}
            onChange={handleChange}
            className="mr-2 leading-tight"
          />
          <label className="text-gray-700">Do you need packing for this parcel?</label>
        </div> */}

        {/* Packing Type */}
        {/* {parcelDetails.packingRequired && (
          <div className="mb-4">
            <select
              name="packingType"
              value={parcelDetails.packingType}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#4FC3F7] focus:outline-none"
            >
              <option value="standard">Standard Packing</option>
              <option value="bulk">Bulk Packing</option>
              <option value="custom">Custom Packing</option>
            </select>
            <div className="mt-2 text-gray-600 text-sm">
              {parcelDetails.packingType === 'standard' && (
                <p>Standard Packing: Basic packing with protective materials for general items.</p>
              )}
              {parcelDetails.packingType === 'custom' && (
                <p>Custom Packing: Tailored packing solutions for unique or fragile items.</p>
              )}
              {parcelDetails.packingType === 'bulk' && (
                <p>Bulk Packing: Packing multiple items together efficiently, usually for commercial shipments.</p>
              )}
            </div>
          </div>
        )} */}

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-[#1D3557] text-white py-3 rounded-md hover:bg-[#4FC3F7] transition duration-200 ease-in-out focus:outline-none"
        >
          Update Parcel
        </button>
      </form>
    </div>
  );
};

export default UpdateParcel;


