const Benefits = () => {
  return (
    <section className="p-10 lg:p-12 bg-gradient-to-br from-[#e3f2fd] to-white rounded-lg shadow-xl">
      <div className="relative z-10 text-center mb-8">
        <h2 className="text-4xl md:text-5xl font-bold text-[#1D3557] mb-6">Benefits of Joining</h2>
        <p className="text-lg md:text-xl leading-relaxed text-dark-gray mb-8 max-w-3xl mx-auto">
          Our delivery partners enjoy several benefits that make working with us both rewarding and enjoyable:
        </p>
        <ul className="list-none space-y-6 max-w-lg mx-auto text-left text-dark-gray text-lg leading-relaxed">
          {[
            "Flexible work hours—choose when you want to work.",
            "Competitive pay with additional bonuses for peak hours.",
            "Comprehensive insurance and support.",
            "Access to training resources and tools."
          ].map((benefit, index) => (
            <li key={index} className="flex items-start transition-transform transform hover:scale-105 group">
              <div className="bg-success-green w-12 h-12 flex items-center justify-center text-white rounded-full mr-4 shadow-md transition duration-300 ease-in-out group-hover:shadow-lg">
                <span className="text-2xl">✓</span>
              </div>
              <span className="text-lg md:text-xl leading-relaxed transition duration-300 ease-in-out group-hover:text-success-green">{benefit}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Benefits;





