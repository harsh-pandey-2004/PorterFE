import React, { useState, useEffect } from 'react';

const Profile = () => {
  const [profile, setProfile] = useState({
    name: '',
    mobileNumber: '',
    city: '',
    vehicleType: '',
  });

  // State to toggle between view and edit mode
  const [editable, setEditable] = useState(false);

  useEffect(() => {
    // Set initial data for demonstration; replace with real data as needed
    const initialProfile = {
      name: 'Atul Kumar',
      mobileNumber: '96911 36377',
      city: 'Bhind',
      vehicleType: 'Two-Wheeler',
    };
    setProfile(initialProfile);
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
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-[#1D3557] mb-6">Delivery Partner Profile</h1>

        {/* Profile Details - Editable Fields */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Name</h2>
          {editable ? (
            <input
              type="text"
              name="name"
              value={profile.name}
              onChange={handleInputChange}
              className="p-2 w-full border rounded"
            />
          ) : (
            <p className="text-gray-700">{profile.name}</p>
          )}
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Mobile Number</h2>
          {editable ? (
            <input
              type="text"
              name="mobileNumber"
              value={profile.mobileNumber}
              onChange={handleInputChange}
              className="p-2 w-full border rounded"
            />
          ) : (
            <p className="text-gray-700">{profile.mobileNumber}</p>
          )}
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">City</h2>
          {editable ? (
            <input
              type="text"
              name="city"
              value={profile.city}
              onChange={handleInputChange}
              className="p-2 w-full border rounded"
            />
          ) : (
            <p className="text-gray-700">{profile.city}</p>
          )}
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Vehicle Type</h2>
          {editable ? (
            <input
              type="text"
              name="vehicleType"
              value={profile.vehicleType}
              onChange={handleInputChange}
              className="p-2 w-full border rounded"
            />
          ) : (
            <p className="text-gray-700">{profile.vehicleType}</p>
          )}
        </div>

        {/* Edit Button */}
        <button
          onClick={() => setEditable(!editable)}
          className="mt-4 px-4 py-2 bg-[#1D3557] text-white rounded w-full"
        >
          {editable ? 'Save' : 'Edit Profile'}
        </button>
      </div>
    </div>
  );
};

export default Profile;
