import React, { useState } from 'react';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="container mx-auto px-4 py-12 bg-gradient-to-r from-blue-50 to-cyan-100">
      <h2 className="text-4xl font-bold text-center text-[#1D3557] mb-12">Contact Us</h2>
      <div className="flex flex-col md:flex-row items-center justify-center gap-8">
        {/* Left Side Content */}
        <div className="md:w-1/2">
          <div className="bg-[#F5F5F5] rounded-lg shadow-lg p-8 h-full">
            <h3 className="text-2xl font-semibold text-[#1D3557] mb-6">Get in Touch</h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              We are here to help you with any questions or concerns. Feel free to reach out using the form, or contact us through the information below.
            </p>
            <div className="text-gray-600">
              <p className="font-semibold">Email:</p>
              <p className="text-blue-500 mb-4"><a href="mailto:support@bookmytransport.com">support@bookmytransport.com</a></p>
              <p className="font-semibold">Phone:</p>
              <p className="text-blue-500"><a href="tel:+123456789">+1 234 567 89</a></p>
            </div>
          </div>
        </div>

        {/* right side */}
        <div className="md:w-1/2 w-full">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-[#4FC3F7] transition"
                  placeholder="Your name"
                />
              </div>
              <div className="mb-6">
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-[#4FC3F7] transition"
                  placeholder="Your email"
                />
              </div>
              <div className="mb-6">
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-[#4FC3F7] transition"
                  placeholder="Your message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-[#1D3557] text-white font-semibold py-3 rounded-lg hover:bg-[#4FC3F7] transition-all duration-300 ease-in-out"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>



      </div>
    </div>
  );
};

export default ContactUs;


