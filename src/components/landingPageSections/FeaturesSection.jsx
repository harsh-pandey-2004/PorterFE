import React from 'react';

const FeaturesSection = () => {
  return (
    <section className="py-16 px-6 md:px-12 bg-gradient-to-r from-[#4FC3F7] to-[#3A9BB2] text-white">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-extrabold mb-8 tracking-wide">Our Features</h2>
        <div className="flex flex-wrap justify-center gap-8">
          <div className="w-full md:w-1/3 p-4">
            <div className="bg-white text-[#1D3557] p-6 rounded-lg shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl">
              <h3 className="font-bold text-xl mb-4">Real-Time Tracking</h3>
              <p>Track your parcels in real-time with our advanced tracking system.</p>
            </div>
          </div>
          <div className="w-full md:w-1/3 p-4">
            <div className="bg-white text-[#1D3557] p-6 rounded-lg shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl">
              <h3 className="font-bold text-xl mb-4">Easy Shipments</h3>
              <p>Create shipments quickly and easily with our user-friendly interface.</p>
            </div>
          </div>
          <div className="w-full md:w-1/3 p-4">
            <div className="bg-white text-[#1D3557] p-6 rounded-lg shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl">
              <h3 className="font-bold text-xl mb-4">Detailed Reports</h3>
              <p>Get insights and reports on your shipping history and performance.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;



