import React from 'react';
import logistics from '../../assets/llogistics.png';
import fleetmanagement from '../../assets/fleetmanagement.png';
import deliverysolutions from '../../assets/deliverysolutions.png'
import ecotransport from '../../assets/ecotransport.png'
const Partners = () => {
  const partners = [
    {
      name: 'Logistics Inc.',
      logo: logistics, 
      description: 'Leading provider of logistics and supply chain solutions.',
    },
    {
      name: 'Fleet Management Co.',
      logo: fleetmanagement, 
      description: 'Experts in fleet management and transportation solutions.',
    },
    {
      name: 'Delivery Solutions',
      logo: deliverysolutions, 
      description: 'Innovative solutions for timely deliveries.',
    },
    {
      name: 'Eco Transport',
      logo: ecotransport, 
      description: 'Sustainable transport solutions for a greener tomorrow.',
    },
    
  ];

  return (
    <div className="container mx-auto px-4 md:px-6 py-12 bg-gray-50">
      <header className="text-center mb-12">
        <h1 className="text-5xl font-extrabold text-[#1D3557]">Our Partners</h1>
        <p className="mt-4 text-lg text-gray-700">We collaborate with leading companies to ensure the best service.</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {partners.map((partner, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center">
            <img src={partner.logo} alt={partner.name} className="w-24 h-24 mb-4" />
            <h2 className="text-xl font-semibold text-[#1D3557] mb-2">{partner.name}</h2>
            <p className="text-gray-600 text-center">{partner.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Partners;
