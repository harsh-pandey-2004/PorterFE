const Introduction = () => {
  return (
    <section className="p-6 md:p-8 lg:p-12 bg-gradient-to-r from-blue-50 to-cyan-100 text-black shadow-xl relative overflow-hidden rounded-lg">
      {/* Content */}
      <div className="relative z-10 text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 text-[#1D3557]">
          Join Us as a Delivery Partner
        </h2>
        <p className="text-base md:text-lg leading-relaxed mb-6 text-dark-gray max-w-3xl mx-auto">
          Enjoy the freedom to work at your convenience while benefiting from competitive rates. We ensure that our delivery partners have all the necessary support to thrive in their role.
        </p>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-lg mx-auto">
          <li className="flex items-center bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <span className="inline-block w-3 h-3 bg-[#4FC3F7] rounded-full mr-3"></span>
            Flexible work schedule
          </li>
          <li className="flex items-center bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <span className="inline-block w-3 h-3 bg-[#4FC3F7] rounded-full mr-3"></span>
            Competitive pay
          </li>
          <li className="flex items-center bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <span className="inline-block w-3 h-3 bg-[#4FC3F7] rounded-full mr-3"></span>
            Bonuses and incentives
          </li>
          <li className="flex items-center bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <span className="inline-block w-3 h-3 bg-[#4FC3F7] rounded-full mr-3"></span>
            Comprehensive support
          </li>
        </ul>
        {/* Call-to-Action Button */}
        <div className="mt-8">
          <button className="px-6 md:px-8 py-3 md:py-4 bg-[#1D3557] text-white font-semibold rounded-full shadow-lg hover:bg-[#4FC3F7] hover:text-navy-blue transition-all duration-300 transform hover:scale-105">
            Join Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default Introduction;



