import React from 'react';

// Sample testimonials data for BookMyTransport
const testimonials = [
  {
    id: 1,
    name: 'John Doe',
    location: 'New York, NY',
    feedback: 'BookMyTransport has transformed the way I handle my shipping. Their service is reliable, and I can track my shipments easily!',
    rating: 5,
  },
  {
    id: 2,
    name: 'Jane Smith',
    location: 'Los Angeles, CA',
    feedback: 'The customer service at BookMyTransport is exceptional. They helped me every step of the way with my delivery.',
    rating: 4,
  },
  {
    id: 3,
    name: 'Emily Johnson',
    location: 'Chicago, IL',
    feedback: 'I love how easy it is to book a transport service with them. Highly recommend to anyone needing logistics solutions!',
    rating: 5,
  },
  {
    id: 4,
    name: 'Michael Brown',
    location: 'Houston, TX',
    feedback: 'The tracking feature is top-notch! I can see exactly where my shipment is at all times.',
    rating: 4,
  },
];

const Testimonial = () => {
  return (
    <div className="container mx-auto px-4 md:px-6 py-12 bg-gray-50">
      <header className="text-center mb-12">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#1D3557]">What Our Clients Say</h1>
        <p className="mt-4 text-lg text-gray-700">Hear from those who trust BookMyTransport for their logistics needs</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="bg-white rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105">
            <h3 className="text-xl font-semibold text-[#1D3557]">{testimonial.name}</h3>
            <p className="text-gray-500 text-sm mb-2">{testimonial.location}</p>
            <p className="text-gray-700 mb-4">"{testimonial.feedback}"</p>
            <div className="flex">
              {[...Array(testimonial.rating)].map((_, index) => (
                <span key={index} className="text-yellow-500">★</span>
              ))}
              {[...Array(5 - testimonial.rating)].map((_, index) => (
                <span key={index} className="text-gray-300">★</span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <footer className="text-center mt-12">
        <p className="text-gray-600">&copy; {new Date().getFullYear()} BookMyTransport. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Testimonial;
