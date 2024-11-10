import React from 'react';
import serviceImage1 from '../../assets/parceltracking.png'; 
import serviceImage2 from '../../assets/shipmentmanagement.png'; 
import serviceImage3 from '../../assets/analyticsandreporting.png'; 

const Services = () => {
  return (
    <div className="container mx-auto px-4 py-12 bg-gradient-to-r from-blue-50 to-cyan-100">
      <h2 className="text-4xl font-bold text-center text-[#1D3557] mb-12">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        
        {/* Service 1 */}
        <div className="bg-white rounded-lg shadow-lg p-6 transform hover:scale-105 transition-all duration-300 ease-in-out hover:shadow-2xl">
          <img src={serviceImage1} alt="Parcel Tracking" className="w-full h-56 rounded-t-lg object-cover mb-6" />
          <h3 className="text-2xl font-semibold text-[#1D3557]">Parcel Tracking</h3>
          <p className="text-gray-600 mt-4 leading-relaxed">
            Our parcel tracking service provides real-time updates on the status of your shipments, ensuring that you never lose sight of your parcels.
          </p>
        </div>

        {/* Service 2 */}
        <div className="bg-white rounded-lg shadow-lg p-6 transform hover:scale-105 transition-all duration-300 ease-in-out hover:shadow-2xl">
          <img src={serviceImage2} alt="Shipment Management" className="w-full h-56 rounded-t-lg object-cover mb-6" />
          <h3 className="text-2xl font-semibold text-[#1D3557]">Shipment Management</h3>
          <p className="text-gray-600 mt-4 leading-relaxed">
            Simplify your logistics with our shipment management solutions, designed to help businesses streamline their shipping processes.
          </p>
        </div>

        {/* Service 3 */}
        <div className="bg-white rounded-lg shadow-lg p-6 transform hover:scale-105 transition-all duration-300 ease-in-out hover:shadow-2xl">
          <img src={serviceImage3} alt="Analytics & Reporting" className="w-full h-56 rounded-t-lg object-cover mb-6" />
          <h3 className="text-2xl font-semibold text-[#1D3557]">Analytics & Reporting</h3>
          <p className="text-gray-600 mt-4 leading-relaxed">
            Gain insights into your shipping performance with our detailed analytics and reporting tools, helping you make data-driven decisions.
          </p>
        </div>

        {/* Add more services as needed */}
      </div>
    </div>
  );
};

export default Services;

