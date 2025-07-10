import React, { useEffect, useState } from 'react';
import { useNavigate, Link, Outlet } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const UserDashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/login');
  };

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser) {
      setUser(storedUser); 
    } else {
      
      navigate('/login');
    }
  }, [navigate]);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  if (!user) {
    return (
      <div className="h-screen flex items-center justify-center">
        <p className="text-xl font-semibold">Loading...</p>
      </div>
    );
  }

  return (
    <div className="h-screen flex flex-col lg:flex-row relative">
      {/* Mobile Navbar */}
      <div className="lg:hidden flex justify-between items-center bg-[#1D3557] text-white p-4 shadow-lg">
        <h2 className="text-2xl font-bold tracking-wider">Dashboard</h2>
        {/* Hamburger Menu Icon */}
        <button onClick={toggleSidebar} className="text-white focus:outline-none">
          {isSidebarOpen ? <FaTimes size={28} /> : <FaBars size={20} />}
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed lg:relative top-0 left-0 w-full lg:w-1/4 h-full bg-[#1D3557] text-white shadow-xl lg:shadow-none flex flex-col p-6 
          lg:h-screen lg:sticky lg:top-0 z-50 transition-transform duration-300 ease-in-out transform 
          ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0`}
      >
        {/* User Details */}
        <div className="mb-8 text-center lg:text-left">
          <h2 className="text-2xl font-bold tracking-wide">Welcome, {user.firstName}</h2>
          <p className="text-sm mt-1 text-[#F5F5F5]">{user.email}</p>
        </div>

        {/* Sidebar Options */}
        <nav className="flex flex-col gap-4">
          {[
            'profile',
            'create-parcel',
            'parcel-history',
            'track-parcel',
            // 'update-parcel',
            'cancel-parcel',
            'settings',
          ].map((item, index) => (
            <Link
              key={index}
              to={item}
              className="py-2 px-4 bg-[#4FC3F7] rounded-lg text-center transition-all duration-200 ease-in-out hover:bg-[#1D3557] hover:text-[#4FC3F7] 
              focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#4FC3F7]"
              onClick={() => setIsSidebarOpen(false)} // Close the sidebar when clicked
            >
              {item
                .split('-')
                .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                .join(' ')}
            </Link>
          ))}
        </nav>

        {/* Spacer to push logout to the bottom */}
        <div className="flex-grow"></div>

        {/* Logout Button */}
        {/* <button
          onClick={handleLogout}
          className="py-2 px-4 bg-red-500 text-white rounded-lg text-center transition-all duration-200 ease-in-out hover:bg-red-600 
          focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-600"
        >
          Logout
        </button> */}
      </div>

      {/* Main Content */}
      <div className="w-full lg:w-3/4 p-8 bg-gray-100 h-screen overflow-y-auto lg:p-12">
        <Outlet /> {/* This will render the child routes */}
      </div>
    </div>
  );
};

export default UserDashboard;



