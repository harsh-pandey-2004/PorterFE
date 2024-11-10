import React from 'react';
import bgGif from '../../assets/herosectiongif.gif';
import herobg from '../../assets/transport1.png'

const HeroSection = () => {
  return (



    //     <section 
    //   className="relative bg-[#1D3557] text-white py-24 px-12 bg-cover bg-center" 
    //   style={{ backgroundImage: `url(${bgGif})` }} 
    // >
    <section
      className="relative bg-[#1D3557] text-white py-32 px-12 bg-cover bg-center"
      style={{
        backgroundImage: `url(${herobg})`,
        
      }} 
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="container mx-auto text-center relative z-10">
        {/* Responsive text size for the heading */}
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">Welcome to BookMyTransport</h1>
        {/* <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">Track, Trace, Deliver. Your Parcels, Our Priority.</h1> */}
        {/* Responsive text size for the paragraph */}
        <p className="mt-4 text-lg md:text-xl lg:text-2xl">Your trusted partner in parcel tracking and management.</p>
        {/* <p className="mt-4 text-lg md:text-xl lg:text-2xl">BookMyTransport: Your trusted partner for seamless parcel management.</p> */}

        <a href="/new-shipment" className="mt-6 inline-block bg-[#4FC3F7] text-[#1D3557] py-2 px-4 rounded-lg hover:bg-[#3A9BB2] transition">
          Get Started
        </a>
      </div>
    </section>

  );
};

export default HeroSection;



// import React from 'react';
// import bgGif from '../../assets/herosectiongif.gif';
// import herobg from '../../assets/herobg.webp';

// const HeroSection = () => {
//   return (
//     <section
//       className="relative bg-[#1D3557] text-white py-32 px-12 bg-cover bg-center"
//       style={{ backgroundImage: `url(${herobg})` }} 
//     >
//       <div className="absolute inset-0 bg-black opacity-60"></div>
//       <div className="container mx-auto text-center relative z-10">
//         {/* Heading with shadow and adjusted font sizes */}
//         <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-wide text-shadow-md">
//           Track, Deliver. Your Parcels, Our Priority.
//         </h1>
//         <p className="mt-6 text-lg md:text-2xl lg:text-3xl text-shadow-sm">
//           BookMyTransport: Your trusted partner for seamless parcel management.
//         </p>

//         {/* Styled Call to Action Button */}
//         <a href="/new-shipment" className="mt-8 inline-block bg-[#4FC3F7] text-[#1D3557] py-3 px-6 rounded-full text-lg font-semibold shadow-lg hover:bg-[#1D3557] hover:text-[#4FC3F7] transition-transform transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-[#4FC3F7] focus:ring-opacity-50">
//           Get Started
//         </a>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;
