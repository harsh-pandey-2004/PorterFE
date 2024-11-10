import React, { useState } from 'react';

const Support = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    setSuccess(true);
    // Reset form
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className="container mx-auto px-4 md:px-6 py-12 bg-gray-50">
      <header className="text-center mb-12">
        <h1 className="text-5xl font-extrabold text-[#1D3557]">Support Center</h1>
        <p className="mt-4 text-lg text-gray-700">We are here to help you!</p>
      </header>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-[#1D3557] mb-6">Frequently Asked Questions</h2>
        <div className="bg-white rounded-lg shadow-lg p-6 mb-4">
          <h3 className="font-semibold">1. How do I track my parcel?</h3>
          <p>You can track your parcel using the tracking number provided in your confirmation email.</p>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-6 mb-4">
          <h3 className="font-semibold">2. What should I do if my parcel is delayed?</h3>
          <p>If your parcel is delayed, please contact our support team for assistance.</p>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-6 mb-4">
          <h3 className="font-semibold">3. How can I change my delivery address?</h3>
          <p>You can change your delivery address by contacting our support team before the parcel is shipped.</p>
        </div>
        {/* Add more FAQs as needed */}
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-[#1D3557] mb-6">Contact Us</h2>
        <p className="mb-4">If you need further assistance, feel free to reach out to our support team:</p>
        <p>Email: <a href="mailto:support@bookmytransport.com" className="text-blue-500">support@bookmytransport.com</a></p>
        <p>Phone: <a href="tel:+1234567890" className="text-blue-500">+1 (234) 567-890</a></p>
      </section>

      <section>
        <h2 className="text-3xl font-semibold text-[#1D3557] mb-6">Send Us a Message</h2>
        {success && <p className="text-green-500 mb-4">Your message has been sent successfully!</p>}
        <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg p-6">
          <div className="mb-4">
            <label className="block text-sm font-semibold text-gray-700 mb-2" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-[#4FC3F7] transition"
              placeholder="Your Name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-semibold text-gray-700 mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-[#4FC3F7] transition"
              placeholder="Your Email"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-semibold text-gray-700 mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              rows="4"
              className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-[#4FC3F7] transition"
              placeholder="Your Message"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#1D3557] text-white font-semibold py-3 rounded-lg hover:bg-[#4FC3F7] transition-all duration-300 ease-in-out"
          >
            Send Message
          </button>
        </form>
      </section>
    </div>
  );
};

export default Support;
