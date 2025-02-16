import React from 'react'
import Layout from './Layout'

function Order() {
  const orders = [
    {
      id: 1,
      orderName: 'French Fries',
      customerName: 'Jhon Leo',
      location: 'New Town',
      status: 'Pending',
      deliveredTime: '10:05',
      price: '$10',
    },
    {
      id: 2,
      orderName: 'Mango Pie',
      customerName: 'Kristien',
      location: 'Old Town',
      status: 'Cancelled',
      deliveredTime: '14:05',
      price: '$9',
    },
    {
      id: 3,
      orderName: 'Fried Egg Sandwich',
      customerName: 'Jack Suit',
      location: 'Oxford Street',
      status: 'Delivered',
      deliveredTime: '12:05',
      price: '$19',
    },
    {
      id: 4,
      orderName: 'Lemon Yogurt Parfait',
      customerName: 'Alesdro Guitto',
      location: 'Church hill',
      status: 'Delivered',
      deliveredTime: '12:05',
      price: '$18',
    },
    {
      id: 5,
      orderName: 'Spicy Grill Sandwich',
      customerName: 'Jacob Sahwny',
      location: 'Palace Road',
      status: 'Delivered',
      deliveredTime: '12:05',
      price: '$21',
    },
    {
      id: 6,
      orderName: 'Chicken Sandwich',
      customerName: 'Peter Gill',
      location: 'Street 21',
      status: 'Pending',
      deliveredTime: '12:05',
      price: '$15',
    },
    {
      id: 7,
      orderName: 'Sandwich',
      customerName: 'Jack Suit',
      location: '40, Street',
      status: 'Delivered',
      deliveredTime: '11:05',
      price: '$19',
    },
    {
      id: 8,
      orderName: 'Spaghetti',
      customerName: 'Jack Suit',
      location: 'Oxford Street',
      status: 'Delivered',
      deliveredTime: '12:05',
      price: '$19',
    },
    {
        id: 9,
        orderName: 'Spaghetti',
        customerName: 'Jack Suit',
        location: 'Oxford Street',
        status: 'Delivered',
        deliveredTime: '12:05',
        price: '$19',
      },
      {
        id: 10,
        orderName: 'Spaghetti',
        customerName: 'Jack Suit',
        location: 'Oxford Street',
        status: 'Delivered',
        deliveredTime: '12:05',
        price: '$19',
      },
  ];
  return (
    <Layout>
      <div className=" p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6">FAVOURITE ORDERS</h2>
      <div className="flex justify-between items-center">
        {/* Pizza */}
        <div className="flex flex-col items-center">
          <div className="w-32 h-32 relative flex items-center justify-center">
            <div className="w-full h-full absolute rounded-full border-4 border-gray-200"></div>
            <div
              className="w-full h-full absolute rounded-full border-4 border-blue-500"
              style={{
                clipPath: `polygon(50% 50%, 50% 0%, 100% 0%, 100% 100%, 0% 100%, 0% ${100 - 12}%)`,
              }}
            ></div>
            <span className="text-xl font-semibold relative z-10">12%</span>
          </div>
          <span className="mt-2 text-lg">Pizza</span>
        </div>

        {/* Mexican Noodles */}
        <div className="flex flex-col items-center">
          <div className="w-32 h-32 relative flex items-center justify-center">
            <div className="w-full h-full absolute rounded-full border-4 border-gray-200"></div>
            <div
              className="w-full h-full absolute rounded-full border-4 border-green-500"
              style={{
                clipPath: `polygon(50% 50%, 50% 0%, 100% 0%, 100% 100%, 0% 100%, 0% ${100 - 38.8}%)`,
              }}
            ></div>
            <span className="text-xl font-semibold relative z-10">38.8%</span>
          </div>
          <span className="mt-2 text-lg">Mexican Noodles</span>
        </div>

        {/* Spicy Salad */}
        <div className="flex flex-col items-center">
          <div className="w-32 h-32 relative flex items-center justify-center">
            <div className="w-full h-full absolute rounded-full border-4 border-gray-200"></div>
            <div
              className="w-full h-full absolute rounded-full border-4 border-yellow-500"
              style={{
                clipPath: `polygon(50% 50%, 50% 0%, 100% 0%, 100% 100%, 0% 100%, 0% ${100 - 78.8}%)`,
              }}
            ></div>
            <span className="text-xl font-semibold relative z-10">78.8%</span>
          </div>
          <span className="mt-2 text-lg">Spicy Salad</span>
        </div>

        {/* French Fries */}
        <div className="flex flex-col items-center">
          <div className="w-32 h-32 relative flex items-center justify-center">
            <div className="w-full h-full absolute rounded-full border-4 border-gray-200"></div>
            <div
              className="w-full h-full absolute rounded-full border-4 border-red-500"
              style={{
                clipPath: `polygon(50% 50%, 50% 0%, 100% 0%, 100% 100%, 0% 100%, 0% ${100 - 100}%)`,
              }}
            ></div>
            <span className="text-xl font-semibold relative z-10">100%</span>
          </div>
          <span className="mt-2 text-lg">French Fries</span>
        </div>
      </div>
    </div>
    <div className="p-6 my-4 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6">ORDER LIST</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr className="bg-red-500 text-white">
              <th className="py-3 px-4 text-left">Order ID</th>
              <th className="py-3 px-4 border-b text-left">Order Name</th>
              <th className="py-3 px-4 border-b text-left">Customer Name</th>
              <th className="py-3 px-4 border-b text-left">Location</th>
              <th className="py-3 px-4 border-b text-left">Order Status</th>
              <th className="py-3 px-4 border-b text-left">Delivered Time</th>
              <th className="py-3 px-4 border-b text-left">Price</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id} className="hover:bg-gray-50">
                <td className="py-3 px-4 border-b">{order.id}</td>
                <td className="py-3 px-4 border-b">{order.orderName}</td>
                <td className="py-3 px-4 border-b">{order.customerName}</td>
                <td className="py-3 px-4 border-b">{order.location}</td>
                <td className="py-3 px-4 border-b">
                  <span
                    className={`px-2 py-1 rounded-full text-sm ${
                      order.status === 'Delivered'
                        ? 'bg-green-100 text-green-600'
                        : order.status === 'Pending'
                        ? 'bg-yellow-100 text-yellow-600'
                        : 'bg-red-100 text-red-600'
                    }`}
                  >
                    {order.status}
                  </span>
                </td>
                <td className="py-3 px-4 border-b">{order.deliveredTime}</td>
                <td className="py-3 px-4 border-b">{order.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </Layout>
  )
}

export default Order
