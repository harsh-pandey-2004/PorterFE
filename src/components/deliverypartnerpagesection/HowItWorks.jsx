const HowItWorks = () => {
  return (
    <section className="p-8 lg:p-12 bg-gradient-to-r from-blue-50 to-cyan-100 text-black shadow-lg rounded-lg">
      <div className="relative z-10 text-center mb-8">
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#1D3557] mb-6">How It Works ?</h2>
        
        <ol className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {[
            "Complete the application form with your details.",
            "Provide necessary documents such as a driver's license and insurance.",
            "Wait for approval and onboarding instructions.",
            "Start accepting deliveries and earning money!"
          ].map((step, index) => (
            <li key={index} className="flex items-start bg-white rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105 hover:shadow-xl">
              <span className="mr-3 text-[#4FC3F7] font-semibold text-3xl">{index + 1}.</span>
              <span className="text-lg md:text-xl leading-relaxed">{step}</span>
            </li>
          ))}
        </ol>

        {/* Qualifications Section */}
        <div className="mt-12 text-left bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-2xl md:text-3xl font-bold text-[#1D3557] mb-4">Qualifications</h3>
          <p className="text-lg md:text-xl text-dark-gray leading-relaxed">
            To qualify, you must be at least <span className="font-semibold text-[#1D3557]">18 years old</span>, have a valid driver's license, and access to a reliable vehicle or bike. Excellent communication skills and punctuality are also key requirements for success.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;


  