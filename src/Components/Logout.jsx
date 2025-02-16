import React from 'react'


const Logout = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96 text-center">
        <h2 className="text-2xl font-bold mb-6">Logout</h2>
        <p className="text-gray-600 mb-6">Are you sure you want to logout?</p>
        <button
          className="w-full bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition duration-300"
        >
          Logout
        </button>
        <button
          className="w-full bg-gray-200 text-gray-700 py-2 px-4 rounded-lg mt-4 hover:bg-gray-300 transition duration-300"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default Logout;