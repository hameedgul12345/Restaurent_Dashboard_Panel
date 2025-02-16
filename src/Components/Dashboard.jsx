import React from "react";
import Layout from "./Layout";

function Dashboard() {
  const cards = [
    { title: "Sells Graph", value: "$8,451", change: "3.2%", up: true },
    { title: "Total Visitors", value: "3,973", change: "4.5%", up: false },
    { title: "New Users", value: "7,333", change: "12.5%", up: true },
    { title: "Total Orders", value: "48,973", change: "9.5%", up: false },
  ];

  const trendingOrders = [
    {
      name: "Meat Stew",
      price: "$25.00",
      orders: 15,
      income: "$175",
      image: "/images/meat_stew.jpg",
    },
    {
      name: "Pancake",
      price: "$50.00",
      orders: 75,
      income: "$275",
      image: "/images/pancake.jpg",
    },
    {
      name: "Burger",
      price: "$45.00",
      orders: 85,
      income: "$575",
      image: "/images/a.jpg",
    },
    {
      name: "Salad",
      price: "$85.00",
      orders: 175,
      income: "$775",
      image: "/images/salad.jpg",
    },
  ];


  const orders = [
    { id: 1, name: 'French Fries', customer: 'Jhon Leo', location: 'New Town', status: 'Pending', deliveredTime: '10:05', price: '$10' },
    { id: 2, name: 'Mango Pie', customer: 'Kristien', location: 'Old Town', status: 'Cancelled', deliveredTime: '14:05', price: '$9' },
    { id: 3, name: 'Fried Egg Sandwich', customer: 'Jack Suit', location: 'Oxford Street', status: 'Delivered', deliveredTime: '12:05', price: '$19' },
    { id: 4, name: 'Lemon Yogurt Parfait', customer: 'Alesdro Guitto', location: 'Church hill', status: 'Delivered', deliveredTime: '12:05', price: '$18' },
    { id: 5, name: 'Spicy Grill Sandwich', customer: 'Jacob Sahwny', location: 'Palace Road', status: 'Delivered', deliveredTime: '12:05', price: '$21' },
    { id: 6, name: 'Chicken Sandwich', customer: 'Peter Gill', location: 'Street 21', status: 'Pending', deliveredTime: '12:05', price: '$15' },
  ];

  return (
    <>
      <Layout>
        <div className="p-4 bg-gray-100 min-h-screen">
          <h1 className="text-2xl font-bold mb-2">Welcome, Anny</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
  {cards.map((card, index) => (
    <div
      key={index}
      className="bg-white p-4 shadow-lg flex flex-col relative" // Removed `border` class
    >
      <h2 className="text-md font-semibold text-gray-600">{card.title}</h2>
      <p className="text-2xl font-bold mt-2">{card.value}</p>
      <div
        className={`absolute top-3 right-3 text-sm px-2 py-1 font-bold ${
          card.up ? "bg-black text-white" : "bg-red-200 text-red-600"
        }`}
      >
        {card.up ? "↑" : "↓"} {card.change}
      </div>
      <div
        className={`mt-2 h-12 w-full ${
          card.up ? "bg-gray-300" : "bg-red-200"
        }`}
      ></div>
    </div>
  ))}
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
  <div className="bg-white p-4 shadow-lg"> {/* Removed `border` class */}
    <div className="flex justify-between items-center mb-2">
      <h2 className="text-lg font-bold">RECENT ORDERS REQUESTED</h2>
      <button className="bg-red-500 text-white px-4 py-2">View All</button>
    </div>
    <table className="w-full text-left">
      <thead>
        <tr> {/* Removed `border-b` class */}
          <th className="py-2">Food Item</th>
          <th className="py-2">Price</th>
          <th className="py-2">Product ID</th>
        </tr>
      </thead>
      <tbody>
        <tr> {/* Removed `border-b` class */}
          <td className="py-2 flex items-center">
            <img
              src="/images/a.jpg"
              alt="Burger 1"
              className="w-6 h-6 mr-2 rounded-full"
            />
            Burger 1
          </td>
          <td className="py-2">$19.99</td>
          <td className="py-2">67384917</td>
        </tr>
        <tr> {/* Removed `border-b` class */}
          <td className="py-2 flex items-center">
            <img
              src="/images/b.jpg"
              alt="Burger 2"
              className="w-6 h-6 mr-2 rounded-full"
            />
            Burger 2
          </td>
          <td className="py-2">$14.59</td>
          <td className="py-2">789393819</td>
        </tr>
        <tr> {/* Removed `border-b` class */}
          <td className="py-2 flex items-center">
            <img
              src="/images/c.jpg"
              alt="Burger 3"
              className="w-6 h-6 mr-2 rounded-full"
            />
            Burger 3
          </td>
          <td className="py-2">$25.22</td>
          <td className="py-2">137893137</td>
        </tr>
        <tr> {/* Removed `border-b` class */}
          <td className="py-2 flex items-center">
            <img
              src="/images/d.png"
              alt="Burger 4"
              className="w-6 h-6 mr-2 rounded-full"
            />
            Burger 4
          </td>
          <td className="py-2">$11.23</td>
          <td className="py-2">235193138</td>
        </tr>
      </tbody>
    </table>
  </div>
  <div className="bg-white p-4 shadow-lg"> {/* Removed `border` class */}
    <h2 className="text-lg font-bold mb-2">MONTHLY REVENUE</h2>
    <select className="p-2 mb-2"> {/* Removed `border` class */}
      <option>January</option>
    </select>
    <div>
      <p>Week 1</p>
      <div className="bg-gray-200 w-full h-4 overflow-hidden">
        <div className="bg-red-400 h-4 w-1/4 text-white text-center text-xs">
          25%
        </div>
      </div>
    </div>
    <div>
      <p>Week 2</p>
      <div className="bg-gray-200 w-full h-4 overflow-hidden">
        <div className="bg-red-400 h-4 w-1/2 text-white text-center text-xs">
          50%
        </div>
      </div>
    </div>
    <div>
      <p>Week 3</p>
      <div className="bg-gray-200 w-full h-4 overflow-hidden">
        <div className="bg-red-400 h-4 w-3/4 text-white text-center text-xs">
          75%
        </div>
      </div>
    </div>
    <div>
      <p>Week 4</p>
      <div className="bg-gray-200 w-full h-4 overflow-hidden">
        <div className="bg-red-400 h-4 w-2/5 text-white text-center text-xs">
          40%
        </div>
      </div>
    </div>
  </div>
</div>
         
          <div className="p-4 bg-white mt-6">
            <h2 className="text-lg font-bold mb-4">TRENDING ORDERS</h2>
            <hr className="w-full border-gray-300" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
              {trendingOrders.map((item, index) => (
                <div
                  key={index}
                  className="bg-white shadow-lg rounded-lg overflow-hidden"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-40 object-cover"
                  />
                  <div className="p-4">
                    <div className="flex justify-between">
                    <h3 className="text-md font-semibold">{item.name}</h3>
                    <p className="text-green-600 font-bold">{item.price}</p>
                    </div>
                    <div className="flex justify-between mt-2 text-sm text-gray-600">
                      <p>
                        Orders{" "}
                        <span className="text-red-500">{item.orders}</span>
                      </p>
                      <p>
                        Income{" "}
                        <span className="text-red-500">{item.income}</span>
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
         
          <div className="p-4 bg-white mt-6">
      {/* Heading */}
      <h1 className="text-2xl font-bold mb-4">Recently Placed Orders</h1>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300">
          <thead className="bg-red-500 text-white">
            <tr>
              <th className="py-2 px-4 border-b">Order ID</th>
              <th className="py-2 px-4 border-b">Order Name</th>
              <th className="py-2 px-4 border-b">Customer Name</th>
              <th className="py-2 px-4 border-b">Location</th>
              <th className="py-2 px-4 border-b">Order Status</th>
              <th className="py-2 px-4 border-b">Delivered Time</th>
              <th className="py-2 px-4 border-b">Price</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id}>
                <td className="py-2 px-4 border-b">{order.id}</td>
                <td className="py-2 px-4 border-b">{order.name}</td>
                <td className="py-2 px-4 border-b">{order.customer}</td>
                <td className="py-2 px-4 border-b">{order.location}</td>
                <td className="py-2 px-4 border-b">{order.status}</td>
                <td className="py-2 px-4 border-b">{order.deliveredTime}</td>
                <td className="py-2 px-4 border-b">{order.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>

        </div>
      </Layout>
    </>
  );
}

export default Dashboard;








