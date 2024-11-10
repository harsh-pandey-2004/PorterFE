const ContactInfo = () => {
  return (
    <section className="p-8 lg:p-12 bg-gradient-to-r from-[#1D3557] to-cyan-200 text-white shadow-xl">
      <h2 className="text-4xl font-extrabold text-center text-white mb-6">Get in Touch</h2>
      <p className="text-lg text-center text-[#F5F5F5] mb-8 max-w-xl mx-auto">
        Have more questions or need assistance? Reach out to us, and we’ll be happy to help.
      </p>
      <div className="flex flex-col items-center space-y-6">
        <div className="flex items-center space-x-3">
          <i className="fas fa-envelope text-2xl text-[#FFC107]"></i>
          <a
            href="mailto:support@yourcompany.com"
            className="text-lg font-semibold text-white hover:text-[#FFC107] transition duration-300"
          >
            support@yourcompany.com
          </a>
        </div>
        <div className="flex items-center space-x-3">
          <i className="fas fa-phone text-2xl text-[#FFC107]"></i>
          <a
            href="tel:+1234567890"
            className="text-lg font-semibold text-white hover:text-[#FFC107] transition duration-300"
          >
            +1 234 567 890
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;


