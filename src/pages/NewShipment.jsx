// import React, { useState } from 'react';

// const NewShipment = () => {
//   const [formData, setFormData] = useState({
//     senderName: '',
//     senderAddress: '',
//     recipientName: '',
//     recipientAddress: '',
//     parcelWeight: '',
//     trackingNumber: '',
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const generatedTrackingNumber = Math.floor(100000 + Math.random() * 900000).toString();
//     setFormData({
//       ...formData,
//       trackingNumber: generatedTrackingNumber,
//     });

//     console.log('Shipment created:', formData);
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-r from-blue-50 to-cyan-100 py-12">
//       <div className="container mx-auto px-4">
//         <h2 className="text-5xl font-extrabold text-center text-[#1D3557] mb-12">Create a New Shipment</h2>

//         <div className="flex flex-col md:flex-row gap-8">
//           {/* Left Side Content */}
//           <div className="md:w-1/2 bg-white rounded-lg shadow-lg p-8">
//             <h3 className="text-3xl font-semibold mb-6 text-[#1D3557]">How to Create a Shipment</h3>
//             <p className="text-lg text-gray-700 mb-4">
//               Follow these simple steps to create your shipment. Please ensure that all the details are correct.
//             </p>
//             <ul className="list-disc pl-6 text-gray-700 mb-6">
//               <li className="mb-2">Enter sender's details.</li>
//               <li className="mb-2">Enter recipient's details.</li>
//               <li className="mb-2">Specify parcel weight in kilograms.</li>
//               <li className="mb-2">Submit the form to generate a tracking number.</li>
//             </ul>
//             <p className="text-lg text-gray-700">
//               A tracking number will be provided upon successful submission, enabling you to track your shipment.
//             </p>
//           </div>

//           {/* Right Side Form */}
//           <div className="md:w-1/2 bg-white rounded-lg shadow-lg p-8">
//             <form onSubmit={handleSubmit}>
//               {/* Sender Details */}
//               <div className="mb-6">
//                 <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="senderName">Sender's Name</label>
//                 <input
//                   type="text"
//                   id="senderName"
//                   name="senderName"
//                   value={formData.senderName}
//                   onChange={handleChange}
//                   required
//                   className="w-full border border-gray-300 rounded-lg p-3 text-lg focus:ring-2 focus:ring-blue-500"
//                 />
//               </div>
//               <div className="mb-6">
//                 <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="senderAddress">Sender's Address</label>
//                 <input
//                   type="text"
//                   id="senderAddress"
//                   name="senderAddress"
//                   value={formData.senderAddress}
//                   onChange={handleChange}
//                   required
//                   className="w-full border border-gray-300 rounded-lg p-3 text-lg focus:ring-2 focus:ring-blue-500"
//                 />
//               </div>

//               {/* Recipient Details */}
//               <div className="mb-6">
//                 <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="recipientName">Recipient's Name</label>
//                 <input
//                   type="text"
//                   id="recipientName"
//                   name="recipientName"
//                   value={formData.recipientName}
//                   onChange={handleChange}
//                   required
//                   className="w-full border border-gray-300 rounded-lg p-3 text-lg focus:ring-2 focus:ring-blue-500"
//                 />
//               </div>
//               <div className="mb-6">
//                 <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="recipientAddress">Recipient's Address</label>
//                 <input
//                   type="text"
//                   id="recipientAddress"
//                   name="recipientAddress"
//                   value={formData.recipientAddress}
//                   onChange={handleChange}
//                   required
//                   className="w-full border border-gray-300 rounded-lg p-3 text-lg focus:ring-2 focus:ring-blue-500"
//                 />
//               </div>

//               {/* Parcel Details */}
//               <div className="mb-6">
//                 <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="parcelWeight">Parcel Weight (kg)</label>
//                 <input
//                   type="number"
//                   id="parcelWeight"
//                   name="parcelWeight"
//                   value={formData.parcelWeight}
//                   onChange={handleChange}
//                   required
//                   className="w-full border border-gray-300 rounded-lg p-3 text-lg focus:ring-2 focus:ring-blue-500"
//                 />
//               </div>

//               {/* Submit Button */}
//               <button
//                 type="submit"
//                 className="w-full bg-blue-600 text-white font-semibold text-lg py-3 rounded-lg hover:bg-blue-700 shadow-md transition duration-300"
//               >
//                 Create Shipment
//               </button>
//             </form>

//             {/* Tracking Information */}
//             {formData.trackingNumber && (
//               <div className="mt-8 bg-green-100 rounded-lg p-6 text-green-700 shadow-lg">
//                 <h3 className="text-xl font-bold">Shipment Created Successfully!</h3>
//                 <p className="text-lg mt-2">
//                   Your tracking number is: <strong>{formData.trackingNumber}</strong>
//                 </p>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default NewShipment;

import React, { useState } from 'react';

const NewShipment = () => {
  const [formData, setFormData] = useState({
    from: '',
    to: '',
    productType: '',
    urgency: 'regular',
    transportType: 'bike',
    weight: '',
    width: '',
    height: '',
    quantity: 1,
    packingRequired: false,
    packingType: 'standard',
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const generatedTrackingNumber = Math.floor(100000 + Math.random() * 900000).toString();
    setFormData({
      ...formData,
      trackingNumber: generatedTrackingNumber,
    });

    console.log('Shipment created:', formData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-cyan-100 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-extrabold text-center text-[#1D3557] mb-12">Create a New Shipment</h2>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Left Side Content */}
          <div className="md:w-1/2 bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-3xl font-semibold mb-6 text-[#1D3557]">How to Create a Shipment</h3>
            <p className="text-lg text-gray-700 mb-4">
              Follow these simple steps to create your shipment. Please ensure that all the details are correct.
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-6">
              <li className="mb-2">Enter sender's details.</li>
              <li className="mb-2">Enter recipient's details.</li>
              <li className="mb-2">Specify parcel weight and dimensions.</li>
              <li className="mb-2">Select transport type.</li>
              <li className="mb-2">Submit the form to generate a tracking number.</li>
            </ul>
            <p className="text-lg text-gray-700">
              A tracking number will be provided upon successful submission, enabling you to track your shipment.
            </p>
          </div>

          {/* Right Side Form */}
          <div className="md:w-1/2 bg-white rounded-lg shadow-lg p-8">
            <form onSubmit={handleSubmit}>
              {/* From (Sender's Address) */}
              <div className="mb-6">
                <input
                  type="text"
                  id="from"
                  name="from"
                  value={formData.from}
                  onChange={handleChange}
                  required
                  className="w-full border border-[#E0E0E0] rounded-lg p-4 text-lg focus:ring-2 focus:ring-[#4FC3F7]"
                  placeholder="From (Sender's Address)"
                />
              </div>

              {/* To (Receiver's Address) */}
              <div className="mb-6">
                <input
                  type="text"
                  id="to"
                  name="to"
                  value={formData.to}
                  onChange={handleChange}
                  required
                  className="w-full border border-[#E0E0E0] rounded-lg p-4 text-lg focus:ring-2 focus:ring-[#4FC3F7]"
                  placeholder="To (Recipient's Address)"
                />
              </div>

              {/* Product Type */}
              <div className="mb-6">
                <input
                  type="text"
                  id="productType"
                  name="productType"
                  value={formData.productType}
                  onChange={handleChange}
                  className="w-full border border-[#E0E0E0] rounded-lg p-4 text-lg focus:ring-2 focus:ring-[#4FC3F7]"
                  placeholder="Type of Product (e.g., electronics, documents)"
                />
              </div>

              {/* Transport Type */}
              <div className="mb-6">
                <select
                  name="transportType"
                  value={formData.transportType}
                  onChange={handleChange}
                  className="w-full border border-[#E0E0E0] rounded-lg p-4 text-lg focus:ring-2 focus:ring-[#4FC3F7]"
                >
                  <option value="bike">Bike (Max 20 kg)</option>
                  <option value="autoRickshaw">Auto-rickshaw (Max 50 kg)</option>
                  <option value="van">Van (Max 100 kg)</option>
                  <option value="miniTruck">Mini Truck (Max 300 kg)</option>
                  <option value="truck">Truck (Max 500 kg)</option>
                  <option value="container">Container (Max 1000 kg)</option>
                </select>
              </div>

              {/* Urgency */}
              <div className="mb-6">
                <select
                  name="urgency"
                  value={formData.urgency}
                  onChange={handleChange}
                  className="w-full border border-[#E0E0E0] rounded-lg p-4 text-lg focus:ring-2 focus:ring-[#4FC3F7]"
                >
                  <option value="regular">Regular</option>
                  <option value="express">Express</option>
                </select>
              </div>

              {/* Parcel Weight */}
              <div className="mb-6">
                <input
                  type="number"
                  id="weight"
                  name="weight"
                  value={formData.weight}
                  onChange={handleChange}
                  required
                  className="w-full border border-[#E0E0E0] rounded-lg p-4 text-lg focus:ring-2 focus:ring-[#4FC3F7]"
                  placeholder="Weight (kg)"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-[#1D3557] text-white font-semibold text-lg py-4 rounded-lg hover:bg-[#4FC3F7] shadow-md transition duration-300"
              >
                Create Shipment
              </button>
            </form>

            {/* Tracking Information */}
            {formData.trackingNumber && (
              <div className="mt-8 bg-[#4CAF50] rounded-lg p-6 text-white shadow-lg">
                <h3 className="text-xl font-bold">Shipment Created Successfully!</h3>
                <p className="text-lg mt-2">
                  Your tracking number is: <strong>{formData.trackingNumber}</strong>
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewShipment;


