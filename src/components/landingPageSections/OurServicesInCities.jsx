import React from "react";
import mathura from '../../assets/mathura.jpg';
import Hathras from '../../assets/Hathras_temple.jpg';
import Agra from '../../assets/Taj_Mahal,_Agra,_India.jpg';
import Aligarh from '../../assets/AMU_Masjid_-_panoramio.jpg';

const OurServicesInCities = () => {
  const cities = [
    {
      name: "Mathura",
      image: mathura,
    },
    {
      name: "Agra",
      image: Agra,
    },
    {
      name: "Aligarh",
      image: Aligarh,
    },
    {
      name: "Hathras",
      image: Hathras,
    },
  ];

  return (
    <div className="bg-gradient-to-r from-blue-50 to-cyan-100 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-center text-[#1D3557] mb-6">
          Our Services Available In
        </h2>
        <p className="text-lg text-gray-700 text-center mb-10">
          Book My Transport operates across multiple cities in Uttar Pradesh,
          ensuring smooth and efficient intra-city transportation services.
        </p>

        {/* Cities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {cities.map((city) => (
            <div
              key={city.name}
              className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-transform"
            >
              <img
                src={city.image}
                alt={city.name}
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-bold text-[#1D3557] text-center">
                  {city.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurServicesInCities;
