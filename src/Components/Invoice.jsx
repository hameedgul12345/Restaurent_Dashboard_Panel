import React from 'react'
import Layout from './Layout'

function Invoice() {
  return (
  <Layout>
    <div className="w-[100%] mx-auto p-6 bg-white shadow-md rounded-md">
      {/* Invoice Header */}
      <div className="flex justify-between items-start">
        <div>
          <h2 className="text-lg font-semibold">INVOICE</h2>
          <h3 className="text-xl font-bold mt-2">Reciever:</h3>
          <p className="font-semibold">Anny Farisha</p>
          <p className="text-gray-600">Anny.123@hotmail.com</p>
          <p className="text-gray-600">
            1642 Cambridge Drive, Phoenix, 85029 Arizona
          </p>
          <p className="text-gray-600">Arizona</p>
          <p className="text-gray-600">Phoenix</p>
        </div>
        <div className="text-right">
          <p className="text-lg font-bold">#135178</p>
          <p className="text-gray-500">Invoice Date: Saturday, April 07 2022</p>
          <p className="text-gray-500">Due Date: Sunday, April 19 2022</p>
        </div>
      </div>

      {/* Invoice Table */}
      <div className="mt-6">
        <table className="w-full border-collapse border border-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="border border-gray-300 p-2 text-left">Id</th>
              <th className="border border-gray-300 p-2 text-left">
                Description
              </th>
              <th className="border border-gray-300 p-2 text-left">Qty</th>
              <th className="border border-gray-300 p-2 text-left">Unit Cost</th>
              <th className="border border-gray-300 p-2 text-left">Total</th>
            </tr>
          </thead>
          <tbody>
            {[
              { id: 1, name: "Grilled Sandwich", qty: 1, cost: 30 },
              { id: 2, name: "Fried Egg Sandwich", qty: 1, cost: 69 },
              { id: 3, name: "Spicy Grilled Burger", qty: 2, cost: 19 },
              { id: 4, name: "Peri Peri Fries", qty: 2, cost: 9 },
            ].map((item) => (
              <tr key={item.id}>
                <td className="border border-gray-300 p-2">{item.id}</td>
                <td className="border border-gray-300 p-2">{item.name}</td>
                <td className="border border-gray-300 p-2">{item.qty}</td>
                <td className="border border-gray-300 p-2">${item.cost}</td>
                <td className="border border-gray-300 p-2">
                  ${item.qty * item.cost}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Total Cost */}
      <div className="flex justify-end mt-4">
        <p className="text-lg font-bold">Total Cost: $155</p>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-end mt-4 space-x-2">
        <button className="bg-red-500 text-white px-4 py-2 rounded-md">
          Print Invoice
        </button>
        <button className="bg-pink-500 text-white px-4 py-2 rounded-md">
          Send Invoice
        </button>
      </div>
    </div>
  </Layout>
  )
}

export default Invoice
