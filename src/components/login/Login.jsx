import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { login } from '../../services/userAuth';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      setErrorMessage('Please fill in all fields');
      return;
    }
    const response=await login(formData);
    console.log(response);
    
    if (response.status === 200) { 
      const { token, user } = response.data; 
      localStorage.setItem('token', token); 
      localStorage.setItem('user',JSON.stringify(user));
      setFormData({ email: '', password: '' }); 
      setErrorMessage('');
      if (user.role === 'delivery_partner') {
        navigate('/partner-dashboard');
      
      } else {
        navigate('/dashboard');
      } 
      
    } else {
      setErrorMessage(response.data.message || 'Login failed'); 
    }
  };

  return (
    <div className="h-screen flex justify-center items-center bg-gray-100 bg-gradient-to-r from-blue-50 to-cyan-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-3xl text-primary font-bold text-center mb-6">Login</h2>
        
        {/* Headline indicating both user types can log in */}
        <p className="text-center text-gray-700 mb-4">
          Users and Delivery Partners can log in using this page.
        </p>
        
        {errorMessage && <p className="text-red-500 mb-4">{errorMessage}</p>}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Email"
              className="w-full border border-gray-300 rounded-lg p-2"
            />
          </div>
          <div className="mb-6">
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              placeholder="Password"
              className="w-full border border-gray-300 rounded-lg p-2"
            />
          </div>
          <button
            type="submit"
            className="bg-[#1D3557] text-white font-semibold w-full py-2 px-4 rounded-lg hover:bg-[#4FC3F7] transition"
          >
            Login
          </button>
        </form>

        {/* Forgot Password Link */}
        <div className="text-center mt-4">
          <Link to="/forgot-password" className="text-[#4FC3F7] hover:underline">
            Forgot Password?
          </Link>
        </div>

        {/* Registration Link */}
        <div className="text-center mt-4">
          <p>Not registered yet?{' '}
            <Link to="/register" className="text-[#4FC3F7] hover:underline">
              Go to Registration
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;

// import React, { useState } from 'react';
// import { useNavigate, Link } from 'react-router-dom';

// const Login = () => {
//   const [formData, setFormData] = useState({ mobile: '', otp: '' });
//   const [errorMessage, setErrorMessage] = useState('');
//   const [isOTPSent, setIsOTPSent] = useState(false);
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSendOTP = (e) => {
//     e.preventDefault();
//     if (!formData.mobile) {
//       setErrorMessage('Please enter your mobile number');
//       return;
//     }
//     // Call API to send OTP (mocked here)
//     console.log('Sending OTP to:', formData.mobile);
//     setIsOTPSent(true);
//     setErrorMessage('');
//   };

//   const handleVerifyOTP = () => {
//     if (!formData.otp) {
//       setErrorMessage('Please enter the OTP');
//       return;
//     }
//     // Verify OTP (mocked here)
//     console.log('Verifying OTP:', formData.otp);
//     localStorage.setItem('isLoggedIn', 'true');
//     setFormData({ mobile: '', otp: '' });
//     setErrorMessage('');
//     navigate('/');
//   };

//   const handleResendOTP = () => {
//     if (!formData.mobile) {
//       setErrorMessage('Please enter your mobile number to resend OTP');
//       return;
//     }
//     // Call API to resend OTP (mocked here)
//     console.log('Resending OTP to:', formData.mobile);
//     setErrorMessage('');
//   };

//   return (
//     <div className="h-screen flex justify-center items-center bg-gray-100 bg-gradient-to-r from-blue-50 to-cyan-100">
//       <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
//         <h2 className="text-3xl text-primary font-bold text-center mb-6">Login with OTP</h2>
        
//         <p className="text-center text-gray-700 mb-4">
//           Users and Delivery Partners can log in with OTP.
//         </p>
        
//         {errorMessage && <p className="text-red-500 mb-4">{errorMessage}</p>}
        
//         <form onSubmit={isOTPSent ? handleVerifyOTP : handleSendOTP}>
//           <div className="mb-4">
//             <input
//               type="text"
//               name="mobile"
//               value={formData.mobile}
//               onChange={handleChange}
//               placeholder="Mobile Number"
//               className="w-full border border-gray-300 rounded-lg p-2"
//               required
//               disabled={isOTPSent}
//             />
//           </div>
          
//           {isOTPSent && (
//             <div className="mb-4">
//               <input
//                 type="text"
//                 name="otp"
//                 value={formData.otp}
//                 onChange={handleChange}
//                 placeholder="Enter OTP"
//                 className="w-full border border-gray-300 rounded-lg p-2"
//                 required
//               />
//             </div>
//           )}
          
//           <button
//             type="submit"
//             className="bg-[#1D3557] text-white font-semibold w-full py-2 px-4 rounded-lg hover:bg-[#4FC3F7] transition"
//           >
//             {isOTPSent ? 'Verify OTP' : 'Send OTP'}
//           </button>
//         </form>

//         {/* Resend OTP link */}
//         {isOTPSent && (
//           <div className="text-center mt-4">
//             <button
//               onClick={handleResendOTP}
//               className="text-[#4FC3F7] hover:underline"
//             >
//               Resend OTP
//             </button>
//           </div>
//         )}

//         {/* Registration Link */}
//         <div className="text-center mt-4">
//           <p>Not registered yet?{' '}
//             <Link to="/register" className="text-[#4FC3F7] hover:underline">
//               Go to Registration
//             </Link>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;

