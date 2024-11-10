import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Dashboard = () => {
  const navigate = useNavigate();

  const handleCreateBid = () => {
    navigate('/partner-dashboard/parcel-bids');
  };
  const handleViewMyParcel = () => {
    navigate('/partner-dashboard/accepted-parcels')
  }

  // Sample data for charts
  const deliveryData = [
    { name: 'Completed', value: 20 },
    { name: 'Pending', value: 5 }
  ];

  const earningsData = [
    { month: 'Jan', earnings: 1200 },
    { month: 'Feb', earnings: 1400 },
    { month: 'Mar', earnings: 1600 },
    { month: 'Apr', earnings: 1800 },
    { month: 'May', earnings: 1500 },
    { month: 'Jun', earnings: 1700 },
    { month: 'Jul', earnings: 2000 }
  ];
  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4 text-[#1D3557]">Delivery Partner Dashboard</h1>
      <p className="text-lg mb-6 text-gray-600">Manage your parcels, bids, and account settings easily.</p>

      {/* Charts Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 mb-8">
        {/* Completed vs. Pending Deliveries - Bar Chart */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-bold text-[#1D3557] mb-4">Completed vs. Pending Deliveries</h2>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={deliveryData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="value" fill="#4CAF50" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Earnings Over Time - Line Chart */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-bold text-[#1D3557] mb-4">Earnings Over Time</h2>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={earningsData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="earnings" stroke="#4FC3F7" activeDot={{ r: 8 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-[#4FC3F7] p-4 rounded-lg text-white">
          <h2 className="font-semibold">Total Parcels</h2>
          <p className="text-xl">25</p>
        </div>
        <div className="bg-[#1D3557] p-4 rounded-lg text-white">
          <h2 className="font-semibold">Bids Submitted</h2>
          <p className="text-xl">10</p>
        </div>
        <div className="bg-[#FFC107] p-4 rounded-lg text-black">
          <h2 className="font-semibold">Pending Deliveries</h2>
          <p className="text-xl">5</p>
        </div>
        <div className="bg-[#4CAF50] p-4 rounded-lg text-white">
          <h2 className="font-semibold">Successful Deliveries</h2>
          <p className="text-xl">20</p>
        </div>
        <div className="bg-[#F44336] p-4 rounded-lg text-white">
          <h2 className="font-semibold">Cancelled Deliveries</h2>
          <p className="text-xl">2</p>
        </div>
      </div>

       {/* Earnings Summary Card */}
       <div className="mt-8 bg-[#1D3557] text-white p-6 rounded-lg shadow-md">
        <h2 className="text-lg font-bold mb-3">Earnings Summary</h2>
        <div className="flex flex-col sm:flex-row justify-between">
          <div>
            <p className="font-medium">Monthly Earnings</p>
            <p className="text-xl">$1500</p>
          </div>
          <div>
            <p className="font-medium">Total Earnings</p>
            <p className="text-xl">$15,000</p>
          </div>
          <div>
            <p className="font-medium">Completed Deliveries</p>
            <p className="text-xl">100</p>
          </div>
          <div>
            <p className="font-medium">Avg. Delivery Time</p>
            <p className="text-xl">30 mins</p>
          </div>
        </div>
      </div>

      {/* Top Performance Metrics */}
      <div className="mt-8 bg-[#4FC3F7] text-white p-6 rounded-lg shadow-md">
        <h2 className="text-lg font-bold mb-3">Top Performance Metrics</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-lg text-[#1D3557]">
            <h3 className="font-semibold">Average Delivery Time</h3>
            <p className="text-xl">30 mins</p>
          </div>
          <div className="bg-white p-4 rounded-lg text-[#1D3557]">
            <h3 className="font-semibold">Bid Success Rate</h3>
            <p className="text-xl">80%</p>
          </div>
          <div className="bg-white p-4 rounded-lg text-[#1D3557]">
            <h3 className="font-semibold">Customer Ratings</h3>
            <p className="text-xl">4.7 / 5</p>
          </div>
        </div>
      </div>

      {/* Recent Activities Section */}
      <div className="mt-8">
        <h2 className="text-lg font-bold text-[#1D3557]">Recent Activities</h2>
        <ul className="mt-4 space-y-3 text-gray-600">
          <li className="flex items-center bg-gray-50 p-3 rounded-lg shadow hover:bg-gray-100 transition duration-200">
            <span className="flex-shrink-0 w-10 h-10 rounded-full bg-[#4CAF50] text-white flex items-center justify-center font-semibold">
              ✓
            </span>
            <div className="ml-4">
              <p className="text-sm font-medium">Parcel #12345 delivered successfully.</p>
              <p className="text-xs text-gray-500">Nov 8, 2024, 2:00 PM</p>
            </div>
          </li>
          <li className="flex items-center bg-gray-50 p-3 rounded-lg shadow hover:bg-gray-100 transition duration-200">
            <span className="flex-shrink-0 w-10 h-10 rounded-full bg-[#4FC3F7] text-white flex items-center justify-center font-semibold">
              📝
            </span>
            <div className="ml-4">
              <p className="text-sm font-medium">Bid placed for Parcel #67890.</p>
              <p className="text-xs text-gray-500">Nov 7, 2024, 4:30 PM</p>
            </div>
          </li>
          <li className="flex items-center bg-gray-50 p-3 rounded-lg shadow hover:bg-gray-100 transition duration-200">
            <span className="flex-shrink-0 w-10 h-10 rounded-full bg-[#FFC107] text-black flex items-center justify-center font-semibold">
              ⚙️
            </span>
            <div className="ml-4">
              <p className="text-sm font-medium">Profile updated.</p>
              <p className="text-xs text-gray-500">Nov 6, 2024, 9:15 AM</p>
            </div>
          </li>
          <li className="flex items-center bg-gray-50 p-3 rounded-lg shadow hover:bg-gray-100 transition duration-200">
            <span className="flex-shrink-0 w-10 h-10 rounded-full bg-[#F44336] text-white flex items-center justify-center font-semibold">
              ✘
            </span>
            <div className="ml-4">
              <p className="text-sm font-medium">Parcel #54321 cancelled by sender.</p>
              <p className="text-xs text-gray-500">Nov 5, 2024, 11:00 AM</p>
            </div>
          </li>
          <li className="flex items-center bg-gray-50 p-3 rounded-lg shadow hover:bg-gray-100 transition duration-200">
            <span className="flex-shrink-0 w-10 h-10 rounded-full bg-[#4CAF50] text-white flex items-center justify-center font-semibold">
              💵
            </span>
            <div className="ml-4">
              <p className="text-sm font-medium">Received payment for Parcel #98765.</p>
              <p className="text-xs text-gray-500">Nov 4, 2024, 5:00 PM</p>
            </div>
          </li>
        </ul>
      </div>


      {/* Quick Actions Section */}
      <div className="mt-8 flex flex-col md:flex-row gap-4">
        <button onClick={handleCreateBid} className="bg-[#4FC3F7] text-white p-3 rounded-lg hover:bg-[#1D3557] transition duration-200">
          Create New Bid
        </button>
        <button onClick={handleViewMyParcel} className="bg-[#1D3557] text-white p-3 rounded-lg hover:bg-[#4FC3F7] transition duration-200">
          View My Parcels
        </button>
        <button className="bg-[#FFC107] text-black p-3 rounded-lg hover:bg-[#FFA000] transition duration-200">
          Update Profile
        </button>
      </div>

      {/* Upcoming Deliveries Section */}
      <div className="mt-8">
        <h2 className="text-lg font-bold text-[#1D3557]">Upcoming Deliveries</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full mt-2 bg-white border border-gray-200 rounded-md">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-2 text-left text-[#1D3557]">Parcel ID</th>
                <th className="px-4 py-2 text-left text-[#1D3557]">Destination</th>
                <th className="px-4 py-2 text-left text-[#1D3557]">Date</th>
                <th className="px-4 py-2 text-left text-[#1D3557]">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-4 py-2 border-t">#24680</td>
                <td className="px-4 py-2 border-t">123 Main St.</td>
                <td className="px-4 py-2 border-t">Nov 10, 2024</td>
                <td className="px-4 py-2 border-t text-yellow-600">Pending</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border-t">#13579</td>
                <td className="px-4 py-2 border-t">456 Elm St.</td>
                <td className="px-4 py-2 border-t">Nov 12, 2024</td>
                <td className="px-4 py-2 border-t text-green-600">Scheduled</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
