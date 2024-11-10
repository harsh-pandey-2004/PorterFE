import React from 'react';

const Banner = () => {
  return (
    <section className="bg-[#4FC3F7] text-[#1D3557] py-8 px-4 md:px-12 overflow-hidden">
  <div className="container mx-auto text-center py-6 z-10">
    <h2 className="text-3xl md:text-5xl font-extrabold mt-24 mb-2 tracking-wide">
      Exclusive Offer: <span className="text-white">20% Off</span> Your First Shipment!
    </h2>
    <p className="mt-2 text-lg md:text-xl">
      Sign up today and enjoy our special discount for new users.
    </p>
    <a
      href="/new-shipment"
      className="mt-4 inline-block bg-[#1D3557] text-white py-2 px-6 rounded-lg shadow-lg hover:bg-[#3A9BB2] transition-all duration-300 ease-in-out transform hover:scale-105"
    >
      Start Shipping Now
    </a>
  </div>

  {/* Background shapes for extra design appeal */}
  {/* <div className="absolute top-0 right-0 w-24 h-24 md:w-64 md:h-64 bg-white opacity-10 rounded-full"></div> */}
  <div className="absolute bottom-0 left-0 w-24 h-24 md:w-64 md:h-64 bg-white opacity-10 rounded-full"></div>
  <div className="absolute bottom-0 right-0 w-20 h-20 md:w-40 md:h-40 bg-white opacity-10 rounded-full"></div>
</section>


  );
};

export default Banner;



