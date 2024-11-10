import React, { useState, useEffect } from 'react';

const UserProfile = () => {
  const [profile, setProfile] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    streetAddress: '',
    apartmentNumber: '',
    city: '',
    state: '',
    postalCode: '',
    country: '',
    landmark: '',
  });

  // State to toggle between view and edit mode
  const [editable, setEditable] = useState(false);

  useEffect(() => {
    const userProfile = {
      firstName: 'Atul Kumar',
      lastName: 'Gajar',
      email: 'atul.nit.mca@gmail.com',
      phoneNumber: '96911 36377',
      streetAddress: 'Gandhi',
      apartmentNumber: '100',
      city: 'Bhind',
      state: 'Madhya Pradesh',
      postalCode: '477001',
      country: 'India',
      landmark: 'JJ',
    };
    setProfile(userProfile);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value,
    }));
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="max-w-xl w-full bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-[#1D3557] mb-6">User Profile</h1>
        
        

        {/* User Details - Editable Fields */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Name</h2>
          {editable ? (
            <>
              <input
                type="text"
                name="firstName"
                value={profile.firstName}
                onChange={handleInputChange}
                className="mb-2 p-2 w-full border rounded"
              />
              <input
                type="text"
                name="lastName"
                value={profile.lastName}
                onChange={handleInputChange}
                className="p-2 w-full border rounded"
              />
            </>
          ) : (
            <p className="text-gray-700">{profile.firstName} {profile.lastName}</p>
          )}
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Email</h2>
          {editable ? (
            <input
              type="email"
              name="email"
              value={profile.email}
              onChange={handleInputChange}
              className="p-2 w-full border rounded"
            />
          ) : (
            <p className="text-gray-700">{profile.email}</p>
          )}
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Phone Number</h2>
          {editable ? (
            <input
              type="text"
              name="phoneNumber"
              value={profile.phoneNumber}
              onChange={handleInputChange}
              className="p-2 w-full border rounded"
            />
          ) : (
            <p className="text-gray-700">{profile.phoneNumber}</p>
          )}
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Address</h2>
          {editable ? (
            <>
              <input
                type="text"
                name="streetAddress"
                value={profile.streetAddress}
                onChange={handleInputChange}
                placeholder="Street Address"
                className="mb-2 p-2 w-full border rounded"
              />
              <input
                type="text"
                name="apartmentNumber"
                value={profile.apartmentNumber}
                onChange={handleInputChange}
                placeholder="Apartment Number"
                className="mb-2 p-2 w-full border rounded"
              />
              <input
                type="text"
                name="city"
                value={profile.city}
                onChange={handleInputChange}
                placeholder="City"
                className="mb-2 p-2 w-full border rounded"
              />
              <input
                type="text"
                name="state"
                value={profile.state}
                onChange={handleInputChange}
                placeholder="State"
                className="mb-2 p-2 w-full border rounded"
              />
              <input
                type="text"
                name="postalCode"
                value={profile.postalCode}
                onChange={handleInputChange}
                placeholder="Postal Code"
                className="mb-2 p-2 w-full border rounded"
              />
              <input
                type="text"
                name="country"
                value={profile.country}
                onChange={handleInputChange}
                placeholder="Country"
                className="mb-2 p-2 w-full border rounded"
              />
              <input
                type="text"
                name="landmark"
                value={profile.landmark}
                onChange={handleInputChange}
                placeholder="Landmark"
                className="p-2 w-full border rounded"
              />
            </>
          ) : (
            <>
              <p className="text-gray-700">{profile.streetAddress}, Apt {profile.apartmentNumber}</p>
              <p className="text-gray-700">{profile.city}, {profile.state} - {profile.postalCode}</p>
              <p className="text-gray-700">{profile.country}</p>
              <p className="text-gray-700">Landmark: {profile.landmark}</p>
            </>
          )}
        </div>
        {/* Edit Button */}
        <button
          onClick={() => setEditable(!editable)}
          className="mb-6 px-4 py-2 bg-[#1D3557] text-white rounded"
        >
          {editable ? 'Save' : 'Edit'}
        </button>
      </div>
    </div>
  );
};

export default UserProfile;
