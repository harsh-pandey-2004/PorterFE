const Testimonials = () => {
  const testimonials = [
    {
      name: "John Doe",
      text: "Joining as a delivery partner was the best decision! The flexible hours and great support have been amazing.",
    },
    {
      name: "Jane Smith",
      text: "I love being able to choose my own hours and earn extra bonuses during peak times.",
    },
  ];

  return (
    <section className="p-10 lg:p-12 bg-gradient-to-b from-[#E3F2FD] to-[#F5F5F5] shadow-lg rounded-lg">
      <h2 className="text-4xl font-bold text-[#1D3557] text-center mb-8">Success Stories</h2>
      <div className="mt-4 grid gap-6 grid-cols-1 sm:grid-cols-2">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="relative p-6 bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105"
          >
            <div className="absolute top-0 left-0 w-full h-full bg-[#4FC3F7] opacity-20 rounded-lg"></div>
            <p className="text-[#6C757D] text-lg italic relative z-10">"{testimonial.text}"</p>
            <p className="mt-4 font-semibold text-[#1D3557] text-right relative z-10">- {testimonial.name}</p>
          </div>
        ))} 
      </div>
    </section>
  );
};

export default Testimonials;



  