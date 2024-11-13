import React, { useState, useEffect } from 'react';
import { getParcel } from '../../services/userDashboard';

const ParcelHistory = () => {
  const [parcelList, setParcelList] = useState([]);

  // Simulate fetching parcel history data from an API or backend
  // useEffect(() => {
  //   const fetchParcelHistory = () => {
  //     const parcelHistory = [
  //       {
  //         trackingNumber: 'PKG123456789',
  //         from: '123 Sender St, City A, Country',
  //         to: '456 Receiver Ave, City B, Country',
  //         quantity: 2,
  //         productType: 'Electronics',
  //         urgency: 'express',
  //         transportType: 'air',
  //         weight: 1.5,
  //         width: 30,
  //         height: 20,
  //         packingRequired: true,
  //         packingType: 'standard',
  //       },
  //       {
  //         trackingNumber: 'PKG987654321',
  //         from: '789 Sender Blvd, City C, Country',
  //         to: '012 Receiver Rd, City D, Country',
  //         quantity: 1,
  //         productType: 'Documents',
  //         urgency: 'regular',
  //         transportType: 'road',
  //         weight: 0.5,
  //         width: 15,
  //         height: 10,
  //         packingRequired: false,
  //         packingType: '',
  //       },
  //       {
  //         trackingNumber: 'PKG456789123',
  //         from: '135 Sender Lane, City E, Country',
  //         to: '246 Receiver Way, City F, Country',
  //         quantity: 3,
  //         productType: 'Clothes',
  //         urgency: 'express',
  //         transportType: 'sea',
  //         weight: 5.0,
  //         width: 40,
  //         height: 30,
  //         packingRequired: true,
  //         packingType: 'custom',
  //       },
  //     ];

  //     setParcelList(parcelHistory);
  //   };

  //   fetchParcelHistory();
  // }, []);
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await getParcel();
        console.log(response.data);
        setParcelList(response.data);
      } catch (error) {
        console.error('Error fetching user:', error);
      }
    };
    fetchUser();
  }, []);

  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-lg mt-10">
      <h2 className="text-2xl font-bold mb-6 text-[#1D3557] text-center">Parcel History</h2>
      {parcelList.length === 0 ? (
        <p className="text-gray-500 text-center">No parcels created yet.</p>
      ) : (
        <ul className="space-y-4">
          {parcelList.map((parcel, index) => (
            <li key={index} className="border border-gray-300 p-4 rounded-md shadow-sm bg-[#F5F5F5] hover:bg-[#E0E0E0] transition duration-200 ease-in-out">
              <h3 className="text-lg font-semibold text-[#1D3557]">Tracking Number: <span className="text-[#4CAF50]">{parcel.trackingNumber}</span></h3>
              <p className="text-gray-700"><strong>From:</strong> {parcel.from}</p>
              <p className="text-gray-700"><strong>To:</strong> {parcel.to}</p>
              {/* <p className="text-gray-700"><strong>Quantity:</strong> {parcel.quantity}</p> */}
              <p className="text-gray-700"><strong>Type of Product:</strong> {parcel.productType}</p>
              <p className="text-gray-700"><strong>Urgency:</strong> {parcel.urgency}</p>
              <p className="text-gray-700"><strong>Transport Type:</strong> {parcel.transportType}</p>
              <p className="text-gray-700"><strong>Weight:</strong> {parcel.dimensions.weight} kg</p>
              {/* <p className="text-gray-700"><strong>Dimensions:</strong> {parcel.dimensions.width} cm (W) x {parcel.dimensions.height} cm (H)</p> */}
              

              {/* {parcel.packing.required && (
                <p className="text-gray-700">
                  <strong>Packing Type:</strong>
                  {parcel.packing.type === 'standard'
                    ? 'Standard Packing'
                    : parcel.packing.type === 'custom'
                      ? 'Custom Packing'
                      : 'Bulk Packing'}
                </p>
              )} */}

              {/* Show Created At Date */}
              <p className="text-gray-700">
                <strong>Created At:</strong> {new Date(parcel.createdAt).toLocaleString()}
              </p>

            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ParcelHistory;
