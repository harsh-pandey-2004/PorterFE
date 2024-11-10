import React, { useState } from 'react';

const ParcelOffer = () => {
  const [parcels, setParcels] = useState([
    {
      id: 1,
      name: 'Parcel 1',
      weight: '10kg',
      destination: 'New York',
      deliveryPartners: [
        { name: 'John Doe', mobileNo: '123-456-7890', vehicleType: 'Truck', priceOffer: '100', confirmed: false },
        { name: 'Alex Johnson', mobileNo: '223-456-7891', vehicleType: 'Van', priceOffer: '90', confirmed: false },
        { name: 'Sarah Connor', mobileNo: '323-456-7892', vehicleType: 'Bike', priceOffer: '50', confirmed: false },
        { name: 'Michael Lee', mobileNo: '423-456-7893', vehicleType: 'Car', priceOffer: '110', confirmed: false },
      ]
    },
    {
      id: 2,
      name: 'Parcel 2',
      weight: '5kg',
      destination: 'Los Angeles',
      deliveryPartners: [
        { name: 'Jane Smith', mobileNo: '987-654-3210', vehicleType: 'Van', priceOffer: '80', confirmed: false },
        { name: 'Emily Davis', mobileNo: '887-654-3211', vehicleType: 'Truck', priceOffer: '85', confirmed: false },
        { name: 'Robert Brown', mobileNo: '787-654-3212', vehicleType: 'Bike', priceOffer: '55', confirmed: false },
      ]
    },
    {
      id: 3,
      name: 'Parcel 3',
      weight: '20kg',
      destination: 'Chicago',
      deliveryPartners: [
        { name: 'Anna White', mobileNo: '567-234-7890', vehicleType: 'Truck', priceOffer: '120', confirmed: false },
        { name: 'Tom Hardy', mobileNo: '111-234-5678', vehicleType: 'Car', priceOffer: '95', confirmed: false },
      ]
    },
    {
      id: 4,
      name: 'Parcel 4',
      weight: '15kg',
      destination: 'Miami',
      deliveryPartners: [
        { name: 'Chris Pratt', mobileNo: '345-234-6789', vehicleType: 'Van', priceOffer: '105', confirmed: false },
        { name: 'Emma Watson', mobileNo: '678-234-5678', vehicleType: 'Bike', priceOffer: '65', confirmed: false },
      ]
    }
  ]);

  const handleConfirmOffer = (parcelId, partnerIndex) => {
    const updatedParcels = parcels.map(parcel =>
      parcel.id === parcelId
        ? {
            ...parcel,
            deliveryPartners: parcel.deliveryPartners.map((partner, index) =>
              index === partnerIndex ? { ...partner, confirmed: true } : partner
            )
          }
        : parcel
    );
    setParcels(updatedParcels);
    console.log(`Offer confirmed for Parcel ${parcelId} by Partner ${partnerIndex + 1}`);
  };

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h2 className="text-3xl font-extrabold text-gray-900 mb-6 text-center">Delivery Partner Offers</h2>
      <div className="grid gap-6 lg:grid-cols-2 sm:grid-cols-1">
        {parcels.map(parcel => (
          <div key={parcel.id} className="bg-white shadow-xl p-6 rounded-lg transform transition duration-500 hover:scale-105">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">{parcel.name}</h3>
            <p className="text-gray-600 mb-2"><strong>Weight:</strong> {parcel.weight}</p>
            <p className="text-gray-600 mb-4"><strong>Destination:</strong> {parcel.destination}</p>

            <div className="space-y-4">
              {parcel.deliveryPartners.map((partner, index) => (
                <div key={index} className="border border-gray-200 p-4 rounded-lg">
                  <h4 className="text-xl font-semibold text-gray-800">Delivery Partner {index + 1}</h4>
                  <p className="text-gray-600"><strong>Partner Name:</strong> {partner.name}</p>
                  <p className="text-gray-600"><strong>Mobile Number:</strong> {partner.mobileNo}</p>
                  <p className="text-gray-600"><strong>Vehicle Type:</strong> {partner.vehicleType}</p>
                  <p className="text-gray-600"><strong>Price Offer:</strong> ${partner.priceOffer}</p>

                  <button
                    onClick={() => handleConfirmOffer(parcel.id, index)}
                    className={`mt-4 w-full px-4 py-2 font-semibold text-white rounded-lg transition-colors duration-300 ${
                      partner.confirmed ? 'bg-green-500' : 'bg-blue-500 hover:bg-blue-600'
                    }`}
                    disabled={partner.confirmed}
                  >
                    {partner.confirmed ? 'Offer Confirmed' : 'Confirm Offer'}
                  </button>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ParcelOffer;
