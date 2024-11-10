import React, { useState } from 'react';

const Settings = () => {
  const [formData, setFormData] = useState({
    firstName: 'Atul',
    lastName: 'Gajar',
    email: 'atul.nit.mca@gmail.com',
    password: '',
    confirmPassword: '',
    notifications: true,
  });

  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setErrorMessage('Passwords do not match');
      setSuccessMessage('');
      return;
    }

    // Simulate saving settings (can be integrated with backend)
    console.log('Settings updated:', formData);

    setSuccessMessage('Settings updated successfully!');
    setErrorMessage('');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="max-w-3xl w-full bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-6 text-[#1D3557]">Settings</h1>
        
        {/* Error or Success Messages */}
        {errorMessage && <p className="text-red-500 mb-4">{errorMessage}</p>}
        {successMessage && <p className="text-green-500 mb-4">{successMessage}</p>}

        <form onSubmit={handleSubmit}>
          {/* Name Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm font-semibold mb-2" htmlFor="firstName">First Name</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#1D3557]"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2" htmlFor="lastName">Last Name</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#1D3557]"
                required
              />
            </div>
          </div>

          {/* Email */}
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2" htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#1D3557]"
              required
            />
          </div>

          {/* Password & Confirm Password */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm font-semibold mb-2" htmlFor="password">New Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#1D3557]"
                placeholder="Leave blank to keep current password"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2" htmlFor="confirmPassword">Confirm Password</label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#1D3557]"
              />
            </div>
          </div>

          {/* Notification Preferences */}
          <div className="mb-6">
            <label className="block text-sm font-semibold mb-2">Notification Preferences</label>
            <div className="flex items-center">
              <input
                type="checkbox"
                id="notifications"
                name="notifications"
                checked={formData.notifications}
                onChange={handleChange}
                className="h-4 w-4 text-[#1D3557] focus:ring-[#1D3557] border-gray-300 rounded"
              />
              <label htmlFor="notifications" className="ml-2 text-sm text-gray-700">
                Enable email notifications
              </label>
            </div>
          </div>

          {/* Save Button */}
          <button
            type="submit"
            className="w-full bg-[#1D3557] text-white font-semibold py-3 rounded-lg hover:bg-[#4FC3F7] transition"
          >
            Save Settings
          </button>
        </form>
      </div>
    </div>
  );
};

export default Settings;

