import React, { useState } from 'react';

const AcceptedParcels = () => {
  // Example accepted parcel data with user details
  const [acceptedParcels, setAcceptedParcels] = useState([
    {
      parcelId: 'PARCEL67890',
      recipient: 'John Doe',
      deliveryStatus: 'In Transit',
      expectedDelivery: 'Nov 5, 2024',
      address: '123 Main St, New York, NY',
      phoneNumber: '(123) 456-7890',
      date: 'Nov 1, 2024',
      destination: 'New York, NY',
      weight: '5kg',
      urgency: 'Express',
      bid_price:100,
    },
    {
      parcelId: 'PARCEL67891',
      recipient: 'Jane Smith',
      deliveryStatus: 'Delivered',
      expectedDelivery: 'Nov 2, 2024',
      address: '456 Elm St, Los Angeles, CA',
      phoneNumber: '(987) 654-3210',
      date: 'Nov 1, 2024',
      destination: 'Los Angeles, CA',
      weight: '3kg',
      urgency: 'Regular',
      bid_price:40
    },
    {
      parcelId: 'PARCEL67892',
      recipient: 'Mark Johnson',
      deliveryStatus: 'Pending Pickup',
      expectedDelivery: 'Nov 6, 2024',
      address: '789 Pine St, Chicago, IL',
      phoneNumber: '(555) 123-4567',
      date: 'Nov 1, 2024',
      destination: 'Chicago, IL',
      weight: '7kg',
      urgency: 'Express',
      bid_price:20
    },
  ]);

  // Handler for updating the delivery status
  const handleStatusChange = (index, newStatus) => {
    const updatedParcels = acceptedParcels.map((parcel, i) =>
      i === index ? { ...parcel, deliveryStatus: newStatus } : parcel
    );
    setAcceptedParcels(updatedParcels);
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4">Accepted Parcels</h1>
      <p className="text-lg mb-4">Here you can view the parcels you have accepted for delivery.</p>

      {/* Wrapping table with a scrollable div */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-4 py-2">Parcel ID</th>
              <th className="border px-4 py-2">Recipient</th>
              <th className="border px-4 py-2">Address</th>
              <th className="border px-4 py-2">Phone Number</th>
              <th className="border px-4 py-2">Weight</th>
              <th className="border px-4 py-2">Date</th>
              <th className="border px-4 py-2">Destination</th>
              <th className="border px-4 py-2">Urgency</th>
              <th className="border px-4 py-2">Delivery Status</th>
              <th className="border px-4 py-2">Expected Delivery</th>
              <th className='border px-4 py-2'>Price</th>
            </tr>
          </thead>
          <tbody>
            {acceptedParcels.map((parcel, index) => (
              <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                <td className="border px-4 py-2">{parcel.parcelId}</td>
                <td className="border px-4 py-2">{parcel.recipient}</td>
                <td className="border px-4 py-2">{parcel.address}</td>
                <td className="border px-4 py-2">{parcel.phoneNumber}</td>
                <td className="border px-4 py-2">{parcel.weight}</td>
                <td className="border px-4 py-2">{parcel.date}</td>
                <td className="border px-4 py-2">{parcel.destination}</td>
                <td className={`border px-4 py-2 ${parcel.urgency === 'Express' ? 'text-red-600' : 'text-blue-600'}`}>
                  {parcel.urgency}
                </td>
                <td className="border px-4 py-2">
                  <select
                    value={parcel.deliveryStatus}
                    onChange={(e) => handleStatusChange(index, e.target.value)}
                    className={`border rounded p-1 ${
                      parcel.deliveryStatus === 'Delivered'
                        ? 'text-green-600'
                        : parcel.deliveryStatus === 'In Transit'
                        ? 'text-yellow-600'
                        : 'text-blue-600'
                    }`}
                  >
                    <option value="Pending Pickup">Pending Pickup</option>
                    <option value="In Transit">In Transit</option>
                    <option value="Delivered">Delivered</option>
                  </select>
                </td>
                <td className="border px-4 py-2">{parcel.expectedDelivery}</td>
                <td className='border px-4 py-2'>{parcel.bid_price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AcceptedParcels;




