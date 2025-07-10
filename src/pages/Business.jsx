// import React from 'react';

// const Business = () => {
//   const industries = [
//     "Electronic appliances & Goods",
//     "Pharmacy",
//     "FMCG",
//     "Agricultural goods",
//     "Chemicals & Medical supplies",
//     "Furniture",
//     "Courier and Logistics",
//     "E-Commerce",
//     "Construction Materials",
//   ];

//   return (
//     <div className="bg-gradient-to-r from-blue-50 to-cyan-100 py-12 px-4">
//       <div className="max-w-7xl mx-auto">
//         {/* Header Section */}
//         <div className="text-center mb-10">
//           <h2 className="text-4xl font-bold text-[#1D3557] mb-4">Industries We Serve</h2>
//           <p className="text-lg text-gray-700">
//             The expertise and experience we have in handling a wide range of goods make us the most efficient and competent logistics partner for small to large businesses! We transport anything and everything ranging from agricultural goods, FMCG, electronic appliances, pharmacy and medical supplies, bulk couriers, business parcels. Other goods we transport include frozen and processed foods, Ecommerce-related merchandise, and electronic goods.
//           </p>
//         </div>

//         {/* Industries List Section */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
//           {industries.map((industry, index) => (
//             <div
//               key={index}
//               className="bg-white shadow-lg rounded-lg p-6 text-center transform hover:scale-105 transition-transform"
//             >
//               <h4 className="text-xl font-bold text-[#1D3557]">{industry}</h4>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Business;
import React from 'react';
import electronicapplications from '../assets/electronicappliances.webp';
import pharmacy from '../assets/pharmacy.jpg';
import fmcg from '../assets/fmcg.jpg';
import agricultural from '../assets/agricultural.jpg';
import chemicals from '../assets/chemicals.jpg';
import furniture from '../assets/furniture.jpg';
import courierandlogistics from '../assets/courierandlogistics.webp';
import ecommerce from '../assets/ecommerce.jpg';
import construction from '../assets/construction.webp';

const Business = () => {
  const industries = [
    {
      name: "Electronic appliances & Goods",
      image: electronicapplications, 
    },
    {
      name: "Pharmacy",
      image: pharmacy,
    },
    {
      name: "FMCG",
      image: fmcg,
    },
    {
      name: "Agricultural goods",
      image: agricultural,
    },
    {
      name: "Chemicals & Medical supplies",
      image: chemicals,
    },
    {
      name: "Furniture",
      image: furniture,
    },
    {
      name: "Courier and Logistics",
      image: courierandlogistics,
    },
    {
      name: "E-Commerce",
      image: ecommerce,
    },
    {
      name: "Construction Materials",
      image: construction,
    },
  ];

  return (
    <div className="bg-gradient-to-r from-blue-50 to-cyan-100 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-[#1D3557] mb-4">Industries We Serve</h2>
          <p className="text-lg text-gray-700">
            The expertise and experience we have in handling a wide range of goods make us the most efficient and competent logistics partner for small to large businesses! We transport anything and everything ranging from agricultural goods, FMCG, electronic appliances, pharmacy and medical supplies, bulk couriers, business parcels. Other goods we transport include frozen and processed foods, Ecommerce-related merchandise, and electronic goods.
          </p>
        </div>

        {/* Industries List Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg p-4 text-center transform hover:scale-105 transition-transform"
            >
              <img
                src={industry.image}
                alt={industry.name}
                className="w-full h-32 object-cover rounded-t-lg mb-4"
              />
              <h4 className="text-xl font-bold text-[#1D3557]">{industry.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Business;

