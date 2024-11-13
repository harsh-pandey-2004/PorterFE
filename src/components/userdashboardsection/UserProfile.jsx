import React, { useState, useEffect } from 'react';
import { getUser,updateUser } from '../../services/userDashboard';

const UserProfile = () => {
  const [profile, setProfile] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
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

  const [editable, setEditable] = useState(false);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await getUser();
        setProfile(response.data);
      } catch (error) {
        console.error('Error fetching user:', error);
      }
    };
    fetchUser();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (['streetAddress', 'apartmentNumber', 'city', 'state', 'postalCode', 'country', 'landmark'].includes(name)) {
      setProfile((prevProfile) => ({
        ...prevProfile,
        address: {
          ...prevProfile.address,
          [name]: value,
        },
      }));
    } else {
      setProfile((prevProfile) => ({
        ...prevProfile,
        [name]: value,
      }));
    }
  };

  const handleSave = async () => {
    try {
      const response = await updateUser(profile); 
      console.log(response.data);
      setEditable(false); 
    } catch (error) {
      console.error('Error updating profile:', error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="max-w-xl w-full bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-[#1D3557] mb-6">User Profile</h1>

        {/* User Details */}
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

        {/* Address Section */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Address</h2>
          {editable ? (
            <>
              <input
                type="text"
                name="streetAddress"
                value={profile.address.streetAddress}
                onChange={handleInputChange}
                placeholder="Street Address"
                className="mb-2 p-2 w-full border rounded"
              />
              <input
                type="text"
                name="apartmentNumber"
                value={profile.address.apartmentNumber}
                onChange={handleInputChange}
                placeholder="Apartment Number"
                className="mb-2 p-2 w-full border rounded"
              />
              <input
                type="text"
                name="city"
                value={profile.address.city}
                onChange={handleInputChange}
                placeholder="City"
                className="mb-2 p-2 w-full border rounded"
              />
              <input
                type="text"
                name="state"
                value={profile.address.state}
                onChange={handleInputChange}
                placeholder="State"
                className="mb-2 p-2 w-full border rounded"
              />
              <input
                type="text"
                name="postalCode"
                value={profile.address.postalCode}
                onChange={handleInputChange}
                placeholder="Postal Code"
                className="mb-2 p-2 w-full border rounded"
              />
              <input
                type="text"
                name="country"
                value={profile.address.country}
                onChange={handleInputChange}
                placeholder="Country"
                className="mb-2 p-2 w-full border rounded"
              />
              <input
                type="text"
                name="landmark"
                value={profile.address.landmark}
                onChange={handleInputChange}
                placeholder="Landmark"
                className="p-2 w-full border rounded"
              />
            </>
          ) : (
            <>
              <p className="text-gray-700">{profile.address.streetAddress}, Apt {profile.address.apartmentNumber}</p>
              <p className="text-gray-700">{profile.address.city}, {profile.address.state} - {profile.address.postalCode}</p>
              <p className="text-gray-700">{profile.address.country}</p>
              <p className="text-gray-700">Landmark: {profile.address.landmark}</p>
            </>
          )}
        </div>

        {/* Edit/Save Button */}
        <button
          onClick={() => (editable ? handleSave() : setEditable(true))}
          className="mb-6 px-4 py-2 bg-[#1D3557] text-white rounded"
        >
          {editable ? 'Save' : 'Edit'}
        </button>
      </div>
    </div>
  );
};

export default UserProfile;

