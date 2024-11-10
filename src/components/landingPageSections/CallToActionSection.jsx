import React from 'react';

const CallToActionSection = () => {
  return (
    <section className="bg-gradient-to-r from-primary to-cyan-400 text-white py-20 px-6 md:px-12">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-6 tracking-wide">
          Ready to get started?
        </h2>
        <p className="text-lg md:text-xl mb-8">
          Take control of your shipments today with BookMyTransport.
        </p>
        <a
          href="/new-shipment"
          className="inline-block bg-white text-[#1D3557] font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-[#3A9BB2] hover:text-white transition duration-300 transform hover:scale-105"
        >
          Start Shipping Now
        </a>
      </div>
    </section>
  );
};

export default CallToActionSection;
