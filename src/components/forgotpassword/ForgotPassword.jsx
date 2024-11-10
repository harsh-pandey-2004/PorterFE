import React, { useState } from 'react';
import { useNavigate,Link } from 'react-router-dom';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) {
      setErrorMessage('Please enter your email address');
      return;
    }

    // Simulate an API request to send the password reset email
    // Replace this with actual API call to your backend
    try {
      // Example API call
      // await api.sendPasswordResetEmail(email);

      // Simulate a successful response
      setMessage('A password reset link has been sent to your email.');
      setErrorMessage('');
      
      // Optionally, navigate to the login page after a short delay
      setTimeout(() => {
        navigate('/login');
      }, 3000);
      
    } catch (error) {
      setErrorMessage('Failed to send the password reset email. Please try again.');
      setMessage('');
    }
  };

  return (
    <div className="h-screen flex justify-center items-center bg-gray-100 bg-gradient-to-r from-blue-50 to-cyan-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-3xl text-primary font-bold text-center mb-6">Forgot Password</h2>
        {errorMessage && <p className="text-red-500 mb-4">{errorMessage}</p>}
        {message && <p className="text-green-500 mb-4">{message}</p>}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              type="email"
              id="email"
              value={email}
              onChange={handleChange}
              required
              placeholder="Enter your email"
              className="w-full border border-gray-300 rounded-lg p-2"
            />
          </div>
          <button
            type="submit"
            className="bg-[#1D3557] text-white font-semibold w-full py-2 px-4 rounded-lg hover:bg-[#4FC3F7] transition"
          >
            Send Reset Link
          </button>
        </form>
        <div className="text-center mt-4">
          <p>
            Remembered your password?{' '}
            <Link to="/login" className="text-[#4FC3F7] hover:underline">
              Go to Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
