import React from 'react';
import teamImage from '../../assets/teamimage.png'; 
import missionImage from '../../assets/missionImage1.png'; 

const AboutUs = () => {
  return (
    <div className="container mx-auto px-4 py-12 bg-gradient-to-r from-blue-50 to-cyan-100">
      {/* Company Mission Section */}
      <section className="mb-16">
        <h2 className="text-4xl font-bold text-center text-[#1D3557] mb-6">Our Mission</h2>
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <img 
              src={missionImage} 
              alt="Our Mission" 
              className="w-full h-auto rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out" 
            />
          </div>
          <div className="md:w-1/2 md:pl-8">
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              At <span className="font-bold text-[#1D3557]">BookMyTransport</span>, our mission is to simplify parcel tracking and management for businesses and individuals alike. 
              We strive to provide reliable, efficient, and transparent solutions that empower our users to manage their shipments with ease.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Our goal is to transform the logistics landscape, making parcel management more streamlined and accessible for everyone.
            </p>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section>
        <h2 className="text-4xl font-bold text-center text-[#1D3557] mb-12 ">Meet Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-lg p-6 transform hover:scale-105 hover:shadow-xl transition-all duration-300 ease-in-out">
            <img 
              src={teamImage} 
              alt="Team Member" 
              className="w-full h-48 rounded-lg object-cover mb-4" 
            />
            <h3 className="text-2xl font-semibold text-[#1D3557]">John Doe</h3>
            <p className="text-gray-500">CEO & Founder</p>
            <p className="mt-2 text-gray-700">John leads the team with a vision to innovate parcel management solutions.</p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6 transform hover:scale-105 hover:shadow-xl transition-all duration-300 ease-in-out">
            <img 
              src={teamImage} 
              alt="Team Member" 
              className="w-full h-48 rounded-lg object-cover mb-4" 
            />
            <h3 className="text-2xl font-semibold text-[#1D3557]">Jane Smith</h3>
            <p className="text-gray-500">Chief Technology Officer</p>
            <p className="mt-2 text-gray-700">Jane drives technology strategies and oversees product development.</p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6 transform hover:scale-105 hover:shadow-xl transition-all duration-300 ease-in-out">
            <img 
              src={teamImage} 
              alt="Team Member" 
              className="w-full h-48 rounded-lg object-cover mb-4" 
            />
            <h3 className="text-2xl font-semibold text-[#1D3557]">Michael Brown</h3>
            <p className="text-gray-500">Head of Marketing</p>
            <p className="mt-2 text-gray-700">Michael is passionate about connecting our services with our customers.</p>
          </div>
          {/* Add more team members as needed */}
        </div>
      </section>
    </div>
  );
};

export default AboutUs;

