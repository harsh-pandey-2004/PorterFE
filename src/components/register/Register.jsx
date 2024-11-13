// import React, { useState } from 'react';
// import { useNavigate, Link } from 'react-router-dom';
// import { register } from '../../services/userAuth';

// const Register = () => {
//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     email: '',
//     password: '',
//     phoneNumber: '',
//     address: {
//       streetAddress: '',
//       apartmentNumber: '',
//       city: '',
//       state: '',
//       postalCode: '',
//       country: '',
//       landmark: '',
//     },
//   });
//   const [errorMessage, setErrorMessage] = useState('');
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     // Check if the field is part of the address
//     if (['streetAddress', 'apartmentNumber', 'city', 'state', 'postalCode', 'country', 'landmark'].includes(name)) {
//       setFormData({
//         ...formData,
//         address: {
//           ...formData.address,
//           [name]: value,
//         },
//       });
//     } else {
//       setFormData({
//         ...formData,
//         [name]: value,
//       });
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const { firstName, lastName, email, password, phoneNumber, address } = formData;
//     const { streetAddress, city, state, postalCode, country } = address;

//     // Check if required fields are filled
//     if (!firstName || !lastName || !email || !password || !phoneNumber || !streetAddress || !city || !state || !postalCode || !country) {
//       setErrorMessage('Please fill in all required fields');
//       return;
//     }

//     try {
//       // Log data before sending to verify
//       console.log('Registration data submitted:', formData);
      
//       const response = await register(formData);
//       console.log(response);

//       setFormData({
//         firstName: '',
//         lastName: '',
//         email: '',
//         password: '',
//         phoneNumber: '',
//         address: {
//           streetAddress: '',
//           apartmentNumber: '',
//           city: '',
//           state: '',
//           postalCode: '',
//           country: '',
//           landmark: '',
//         },
//       });
//       setErrorMessage('');
//       navigate('/login');
//     } catch (error) {
//       console.error('Error during registration:', error);
//       setErrorMessage('Registration failed. Please try again.');
//     }
//   };

//   return (
    


//     <div className="h-full flex justify-center bg-gray-100 bg-gradient-to-r from-blue-50 to-cyan-100 lg:py-10">
//       <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
//         <h2 className="text-3xl text-primary font-bold text-center mb-6">Register</h2>
//         {errorMessage && <p className="text-red-500 mb-4">{errorMessage}</p>}
//         <form onSubmit={handleSubmit}>
//           {/* Flex container for First Name and Last Name */}
//           <div className="mb-4 flex flex-row gap-4">
//             <div className="flex flex-col w-full">
//               <input
//                 type="text"
//                 id="firstName"
//                 name="firstName"
//                 value={formData.firstName}
//                 onChange={handleChange}
//                 required
//                 placeholder="First Name"
//                 className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-[#1D3557]"
//               />
//             </div>
//             <div className="flex flex-col w-full">
//               <input
//                 type="text"
//                 id="lastName"
//                 name="lastName"
//                 value={formData.lastName}
//                 onChange={handleChange}
//                 required
//                 placeholder="Last Name"
//                 className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-[#1D3557]"
//               />
//             </div>
//           </div>
//           <div className="mb-4">
//             <input
//               type="email"
//               id="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               required
//               placeholder="Email"
//               className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-[#1D3557]"
//             />
//           </div>
//           <div className="mb-4">
//             <input
//               type="password"
//               id="password"
//               name="password"
//               value={formData.password}
//               onChange={handleChange}
//               required
//               placeholder="Password"
//               className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-[#1D3557]"
//             />
//           </div>
//           <div className="mb-4">
//             <input
//               type="text"
//               id="phoneNumber"
//               name="phoneNumber"
//               value={formData.phoneNumber}
//               onChange={handleChange}
//               required
//               placeholder="Phone Number"
//               className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-[#1D3557]"
//             />
//           </div>

//           {/* Address Section */}
//           <h3 className="text-lg text-primary font-semibold mb-4">Address Details</h3>

//           {/* Street Address and Apartment Number in a flex container */}
//           <div className="mb-4 flex flex-col gap-4">
//             <div className="flex flex-col">
//               <input
//                 type="text"
//                 id="streetAddress"
//                 name="streetAddress"
//                 value={formData.streetAddress}
//                 onChange={handleChange}
//                 required
//                 placeholder="Street Address"
//                 className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-[#1D3557]"
//               />
//             </div>
//             <div className="flex flex-col">
//               <input
//                 type="text"
//                 id="apartmentNumber"
//                 name="apartmentNumber"
//                 value={formData.apartmentNumber}
//                 onChange={handleChange}
//                 placeholder="Apartment Number (optional)"
//                 className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-[#1D3557]"
//               />
//             </div>
//           </div>

//           {/* City, State, Postal Code Group in a flex container */}
//           <div className="mb-4 flex flex-row gap-4">
//             <div className="flex flex-col w-full">
//               <input
//                 type="text"
//                 id="city"
//                 name="city"
//                 value={formData.city}
//                 onChange={handleChange}
//                 required
//                 placeholder="City"
//                 className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-[#1D3557]"
//               />
//             </div>
//             <div className="flex flex-col w-full">
//               <input
//                 type="text"
//                 id="state"
//                 name="state"
//                 value={formData.state}
//                 onChange={handleChange}
//                 required
//                 placeholder="State"
//                 className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-[#1D3557]"
//               />
//             </div>
//             <div className="flex flex-col w-full">
//               <input
//                 type="text"
//                 id="postalCode"
//                 name="postalCode"
//                 value={formData.postalCode}
//                 onChange={handleChange}
//                 required
//                 placeholder="Postal Code"
//                 className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-[#1D3557]"
//               />
//             </div>
//           </div>

//           {/* Country and Landmark in a flex container */}
//           <div className="mb-4 flex flex-col gap-4">
//             <div className="flex flex-col">
//               <input
//                 type="text"
//                 id="country"
//                 name="country"
//                 value={formData.country}
//                 onChange={handleChange}
//                 required
//                 placeholder="Country"
//                 className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-[#1D3557]"
//               />
//             </div>
//             <div className="flex flex-col">
//               <input
//                 type="text"
//                 id="landmark"
//                 name="landmark"
//                 value={formData.landmark}
//                 onChange={handleChange}
//                 placeholder="Landmark (optional)"
//                 className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-[#1D3557]"
//               />
//             </div>
//           </div>

//           <button
//             type="submit"
//             className="bg-[#1D3557] text-white font-semibold w-full py-2 px-4 rounded-lg hover:bg-[#4FC3F7] transition"
//           >
//             Register
//           </button>
//         </form>
//         <div className="mt-4 text-center">
//           <p className="text-sm">Already have an account? <Link to="/login" className="text-blue-500">Login here</Link></p>
//         </div>
//       </div>
//     </div>

//   );
// };

// export default Register;

import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { register } from '../../services/userAuth';

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    phoneNumber: '',
    role: '',  // Add role field
    address: {
      streetAddress: '',
      apartmentNumber: '',
      city: '',
      state: '',
      postalCode: '',
      country: '',
      landmark: '',
    },
  });
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (['streetAddress', 'apartmentNumber', 'city', 'state', 'postalCode', 'country', 'landmark'].includes(name)) {
      setFormData({
        ...formData,
        address: {
          ...formData.address,
          [name]: value,
        },
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { firstName, lastName, email, password, phoneNumber, role, address } = formData;
    const { streetAddress, city, state, postalCode, country } = address;

    if (!firstName || !lastName || !email || !password || !phoneNumber || !role || !streetAddress || !city || !state || !postalCode || !country) {
      setErrorMessage('Please fill in all required fields');
      return;
    }

    try {
      console.log('Registration data submitted:', formData);
      const response = await register(formData);
      console.log(response);

      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        phoneNumber: '',
        role: '',
        address: {
          streetAddress: '',
          apartmentNumber: '',
          city: '',
          state: '',
          postalCode: '',
          country: '',
          landmark: '',
        },
      });
      setErrorMessage('');
      navigate('/login');
    } catch (error) {
      console.error('Error during registration:', error);
      setErrorMessage('Registration failed. Please try again.');
    }
  };

  return (
    <div className="h-full flex justify-center bg-gray-100 bg-gradient-to-r from-blue-50 to-cyan-100 lg:py-10">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
        <h2 className="text-3xl text-primary font-bold text-center mb-6">Register</h2>
        {errorMessage && <p className="text-red-500 mb-4">{errorMessage}</p>}
        <form onSubmit={handleSubmit}>
          <div className="mb-4 flex flex-row gap-4">
            <div className="flex flex-col w-full">
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
                placeholder="First Name"
                className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-[#1D3557]"
              />
            </div>
            <div className="flex flex-col w-full">
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
                placeholder="Last Name"
                className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-[#1D3557]"
              />
            </div>
          </div>
          <div className="mb-4">
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Email"
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-[#1D3557]"
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              placeholder="Password"
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-[#1D3557]"
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
              placeholder="Phone Number"
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-[#1D3557]"
            />
          </div>
          
          {/* Role Selection */}
          <div className="mb-4">
            <select
              id="role"
              name="role"
              value={formData.role}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-[#1D3557]"
            >
              <option value="">Select Role</option>
              <option value="user">User</option>
              <option value="delivery_partner">Delivery Partner</option>
            </select>
          </div>

          <h3 className="text-lg text-primary font-semibold mb-4">Address Details</h3>
          <div className="mb-4 flex flex-col gap-4">
            <div className="flex flex-col">
              <input
                type="text"
                id="streetAddress"
                name="streetAddress"
                value={formData.address.streetAddress}
                onChange={handleChange}
                required
                placeholder="Street Address"
                className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-[#1D3557]"
              />
            </div>
            <div className="flex flex-col">
              <input
                type="text"
                id="apartmentNumber"
                name="apartmentNumber"
                value={formData.address.apartmentNumber}
                onChange={handleChange}
                placeholder="Apartment Number (optional)"
                className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-[#1D3557]"
              />
            </div>
          </div>

          <div className="mb-4 flex flex-row gap-4">
            <div className="flex flex-col w-full">
              <input
                type="text"
                id="city"
                name="city"
                value={formData.address.city}
                onChange={handleChange}
                required
                placeholder="City"
                className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-[#1D3557]"
              />
            </div>
            <div className="flex flex-col w-full">
              <input
                type="text"
                id="state"
                name="state"
                value={formData.address.state}
                onChange={handleChange}
                required
                placeholder="State"
                className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-[#1D3557]"
              />
            </div>
            <div className="flex flex-col w-full">
              <input
                type="text"
                id="postalCode"
                name="postalCode"
                value={formData.address.postalCode}
                onChange={handleChange}
                required
                placeholder="Postal Code"
                className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-[#1D3557]"
              />
            </div>
          </div>

          <div className="mb-4 flex flex-col gap-4">
            <div className="flex flex-col">
              <input
                type="text"
                id="country"
                name="country"
                value={formData.address.country}
                onChange={handleChange}
                required
                placeholder="Country"
                className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-[#1D3557]"
              />
            </div>
            <div className="flex flex-col">
              <input
                type="text"
                id="landmark"
                name="landmark"
                value={formData.address.landmark}
                onChange={handleChange}
                placeholder="Landmark (optional)"
                className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-[#1D3557]"
              />
            </div>
          </div>

          <button
            type="submit"
            className="bg-[#1D3557] text-white py-2 px-4 rounded-lg hover:bg-[#4FC3F7] transition duration-300 w-full"
          >
            Register
          </button>
        </form>
        <div className="mt-4 text-center">
          <p className="text-sm text-gray-600">
            Already have an account? <Link to="/login" className="text-[#4FC3F7] hover:underline">Login here</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
