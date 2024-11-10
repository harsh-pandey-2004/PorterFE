import React, { useState, useEffect } from 'react';

const ParcelBids = () => {
  const [parcels, setParcels] = useState([]);
  const [bidAmounts, setBidAmounts] = useState({});
  const [submittedBids, setSubmittedBids] = useState({}); // Track submitted bids

  useEffect(() => {
    // Example parcel data with urgency
    const exampleData = [
      {
        id: 'PARCEL12345',
        weight: '5kg',
        destination: 'New York, NY',
        date: 'Nov 1, 2024',
        urgency: 'Express',
      },
      {
        id: 'PARCEL67890',
        weight: '3kg',
        destination: 'Los Angeles, CA',
        date: 'Nov 2, 2024',
        urgency: 'Regular',
      },
      {
        id: 'PARCEL11223',
        weight: '7kg',
        destination: 'Chicago, IL',
        date: 'Nov 3, 2024',
        urgency: 'Express',
      },
    ];

    setParcels(exampleData);
  }, []);

  const handleInputChange = (parcelId, amount) => {
    setBidAmounts(prev => ({ ...prev, [parcelId]: amount }));
  };

  const handleAddBid = (parcelId) => {
    const bidAmount = bidAmounts[parcelId];
    if (bidAmount) {
      setSubmittedBids(prev => ({
        ...prev,
        [parcelId]: {
          status: 'Bid Submitted',
          amount: bidAmount,
        },
      }));
      // Optionally clear the input after submission
      setBidAmounts(prev => ({ ...prev, [parcelId]: '' }));
    }
  };

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h2 className="text-3xl font-extrabold text-gray-900 mb-6 text-center">Available Parcels</h2>
      <div className="grid gap-6 lg:grid-cols-2 sm:grid-cols-1">
        {parcels.map(parcel => (
          <div key={parcel.id} className="bg-white shadow-xl p-6 rounded-lg transform transition duration-500 hover:scale-105">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Parcel ID: {parcel.id}</h3>
            <p className="text-gray-600 mb-2"><strong>Weight:</strong> {parcel.weight}</p>
            <p className="text-gray-600 mb-2"><strong>Destination:</strong> {parcel.destination}</p>
            <p className="text-gray-600 mb-2"><strong>Date:</strong> {parcel.date}</p>
            <p className={`text-gray-600 mb-2 ${parcel.urgency === 'Express' ? 'text-red-600' : 'text-blue-600'}`}>
              <strong>Urgency:</strong> {parcel.urgency}
            </p>

            {submittedBids[parcel.id] ? (
              <div className="mt-4">
                <p className="text-green-600">{submittedBids[parcel.id].status}</p>
                <p><strong>Bid Amount:</strong> ${submittedBids[parcel.id].amount}</p>
              </div>
            ) : (
              <>
                <input
                  type="number"
                  value={bidAmounts[parcel.id] || ''}
                  onChange={(e) => handleInputChange(parcel.id, e.target.value)}
                  placeholder="Enter Bid Amount"
                  className="border rounded p-2 mr-2 w-full"
                />
                <button
                  onClick={() => handleAddBid(parcel.id)}
                  className="mt-4 w-full px-4 py-2 font-semibold text-white bg-blue-500 rounded-lg hover:bg-blue-600"
                >
                  Submit Bid
                </button>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ParcelBids;




