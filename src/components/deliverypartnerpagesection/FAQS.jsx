import React, { useState } from 'react';

const FAQS = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const toggleQuestion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What is the pay structure?",
      answer: "Pay varies based on delivery distance and order size. Partners also receive bonuses during peak hours."
    },
    {
      question: "Can I set my own schedule?",
      answer: "Yes, delivery partners have complete flexibility to choose when they want to work."
    },
    {
      question: "How long does onboarding take?",
      answer: "After submitting the application and documents, approval typically takes 2-3 business days."
    },
  ];

  return (
    <section className="p-10 lg:p-12 bg-gradient-to-b from-white to-light-gray rounded-lg shadow-lg">
      <h2 className="text-4xl font-bold text-[#1D3557] mb-8 text-center">Frequently Asked Questions</h2>
      <div className="space-y-6 max-w-3xl mx-auto">
        {faqs.map((faq, index) => (
          <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
            <h3
              onClick={() => toggleQuestion(index)}
              className="flex items-center justify-between p-5 bg-[#E3F2FD] cursor-pointer transition duration-300 ease-in-out hover:bg-[#BBE5FC]"
            >
              <div className="flex items-center">
                <span className="bg-bright-cyan text-white rounded-full w-10 h-10 flex items-center justify-center mr-4 text-xl">?</span>
                <span className="text-lg font-semibold text-dark-gray">{faq.question}</span>
              </div>
              <span className="text-2xl text-dark-gray">{openIndex === index ? '-' : '+'}</span>
            </h3>
            {openIndex === index && (
              <p className="p-5 text-lg text-dark-gray leading-relaxed border-t border-gray-200">
                {faq.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQS;




