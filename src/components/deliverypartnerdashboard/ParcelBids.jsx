import React, { useState, useEffect } from 'react';

const ParcelBids = () => {
  const [parcels, setParcels] = useState([]);
  const [parcelStatus, setParcelStatus] = useState({}); 

  useEffect(() => {
    
    const exampleData = [
      {
        id: 'PARCEL12345',
        weight: '5kg',
        source: 'Boston, MA',
        destination: 'New York, NY',
        date: 'Nov 1, 2024',
        urgency: 'Express',
        price: '$25',
      },
      {
        id: 'PARCEL67890',
        weight: '3kg',
        source: 'San Francisco, CA',
        destination: 'Los Angeles, CA',
        date: 'Nov 2, 2024',
        urgency: 'Regular',
        price: '$15',
      },
      {
        id: 'PARCEL11223',
        weight: '7kg',
        source: 'Houston, TX',
        destination: 'Chicago, IL',
        date: 'Nov 3, 2024',
        urgency: 'Express',
        price: '$35',
      },
    ];

    setParcels(exampleData);
  }, []);

  const handleConfirmParcel = (parcelId) => {
    setParcelStatus((prev) => ({
      ...prev,
      [parcelId]: 'Confirmed',
    }));
  };

  const handleCancelParcel = (parcelId) => {
    setParcelStatus((prev) => ({
      ...prev,
      [parcelId]: 'Cancelled',
    }));
  };

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h2 className="text-3xl font-extrabold text-gray-900 mb-6 text-center">Available Parcels</h2>
      <div className="grid gap-6 lg:grid-cols-2 sm:grid-cols-1">
        {parcels.map((parcel) => (
          <div key={parcel.id} className="bg-white shadow-xl p-6 rounded-lg transform transition duration-500 hover:scale-105">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Parcel ID: {parcel.id}</h3>
            <p className="text-gray-600 mb-2"><strong>Weight:</strong> {parcel.weight}</p>
            <p className="text-gray-600 mb-2"><strong>Source:</strong> {parcel.source}</p>
            <p className="text-gray-600 mb-2"><strong>Destination:</strong> {parcel.destination}</p>
            <p className="text-gray-600 mb-2"><strong>Date:</strong> {parcel.date}</p>
            <p className={`text-gray-600 mb-2 ${parcel.urgency === 'Express' ? 'text-red-600' : 'text-blue-600'}`}>
              <strong>Urgency:</strong> {parcel.urgency}
            </p>
            <p className="text-gray-600 mb-2"><strong>Price:</strong> {parcel.price}</p>

            {parcelStatus[parcel.id] ? (
              <div
                className={`mt-4 font-bold ${
                  parcelStatus[parcel.id] === 'Confirmed' ? 'text-green-600' : 'text-red-600'
                }`}
              >
                {parcelStatus[parcel.id]}
              </div>
            ) : (
              <div className="mt-4 flex gap-4">
                <button
                  onClick={() => handleConfirmParcel(parcel.id)}
                  className="px-4 py-2 font-semibold text-white bg-green-500 rounded-lg hover:bg-green-600"
                >
                  Confirm Parcel
                </button>
                <button
                  onClick={() => handleCancelParcel(parcel.id)}
                  className="px-4 py-2 font-semibold text-white bg-red-500 rounded-lg hover:bg-red-600"
                >
                  Cancel Parcel
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ParcelBids;





