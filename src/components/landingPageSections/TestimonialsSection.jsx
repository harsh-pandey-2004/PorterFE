import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const TestimonialsSection = () => {
  const testimonials = [
    { quote: "BookMyTransport has changed the way I track my shipments. Highly recommended!", name: "John Doe" },
    { quote: "The real-time tracking feature is a game-changer!", name: "Jane Smith" },
    { quote: "Excellent service and customer support.", name: "Michael Brown" },
    { quote: "The best parcel management system I've used.", name: "Emily White" },
    { quote: "Fast and reliable. Would recommend to anyone!", name: "Chris Johnson" },
    { quote: "Their interface is so user-friendly!", name: "David Lee" },
    { quote: "Shipment tracking made easy!", name: "Sarah Wilson" },
    { quote: "Great service, I love the detailed reports.", name: "Laura Martinez" },
    { quote: "Reliable and efficient shipping service.", name: "James Walker" },
    { quote: "BookMyTransport is my go-to service for all shipments.", name: "Anna Roberts" },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="bg-gradient-to-r from-primary to-cyan-400 text-white py-16 px-6 md:px-12">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-extrabold mb-8 tracking-wide">What Our Users Say</h2>
        <div className="mt-12">
          <Slider {...settings}>
            {testimonials.map((testimonial, index) => (
              <div key={index} className="p-4">
                <div className="bg-white text-[#1D3557] p-8 rounded-lg shadow-lg mx-4 transform transition duration-500 hover:scale-105">
                  <blockquote className="italic text-lg">{`"${testimonial.quote}"`}</blockquote>
                  <p className="font-bold mt-4 text-right">- {testimonial.name}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

