import React, { useState } from 'react';

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What is BookMyTransport?",
      answer: "BookMyTransport is a parcel tracking and management platform that simplifies shipping and logistics for businesses and individuals."
    },
    {
      question: "How can I track my parcels?",
      answer: "You can track your parcels by entering your tracking number on our Track Parcels page or by logging into your account."
    },
    {
      question: "What services do you offer?",
      answer: "We offer a variety of services, including parcel tracking, shipment management, and analytics reporting."
    },
    {
      question: "Is there a mobile app available?",
      answer: "Yes, our mobile app is available for both Android and iOS, allowing you to manage your shipments on the go."
    },
    {
      question: "How do I contact customer support?",
      answer: "You can contact our customer support team through the Contact Us page or by emailing support@bookmytransport.com."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept various payment methods, including credit/debit cards and PayPal."
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12 bg-gradient-to-r from-blue-50 to-cyan-100">
      <h2 className="text-4xl font-bold text-center mb-12 text-[#1D3557]">Frequently Asked Questions</h2>
      <div className="max-w-3xl mx-auto">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-gray-300 pb-4 mb-4">
            <button
              onClick={() => toggleFaq(index)}
              className="w-full text-left flex justify-between items-center focus:outline-none text-[#1D3557]"
            >
              <h3 className="text-lg font-semibold">{faq.question}</h3>
              <span
                className={`transform transition-transform duration-300 ${activeIndex === index ? 'rotate-180' : ''
                  }`}
              >
                <i className="fas fa-chevron-down"></i>
              </span>
            </button>
            <p
              className={`mt-2 text-gray-600 transition-max-height duration-300 ease-in-out overflow-hidden ${activeIndex === index ? 'max-h-40' : 'max-h-0'
                }`}
            >
              {faq.answer}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;

