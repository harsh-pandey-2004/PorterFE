import React from "react";

const WhyBookMyTransport = () => {
  const features = [
    { icon: "📱", title: "User Friendly APP", description: "Easy-to-use interface for seamless bookings." },
    { icon: "⚡", title: "Instant Booking & Pickup", description: "Quick and hassle-free service." },
    { icon: "💰", title: "Affordable Fare", description: "Cost-effective solutions for every budget." },
    { icon: "🚛", title: "Multiple Vehicles", description: "Choose from bikes to trucks as per your needs." },
    { icon: "📦", title: "Small & Big Parcels", description: "We deliver parcels of all sizes." },
    { icon: "✅", title: "Ease of Delivery", description: "Simplified logistics to meet your needs." },
    { icon: "📍", title: "Live Tracking", description: "Track your parcel in real-time." },
  ];

  return (
    <div className="bg-gradient-to-r from-blue-50 to-cyan-100 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-center text-[#1D3557] mb-6">
          Why Choose Book My Transport?
        </h2>
        <p className="text-lg text-gray-700 text-center mb-10">
          Discover the features that make Book My Transport your go-to solution for all delivery needs.
        </p>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg p-6 text-center transform hover:scale-105 transition-transform"
            >
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-[#1D3557] mb-2">{feature.title}</h3>
              <p className="text-gray-700">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyBookMyTransport;
