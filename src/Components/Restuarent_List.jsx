
import React from 'react';
import Layout from './Layout';
function Restuarent_List() {
    const invoices = [
        { id: 15451, name: 'Dellzus', location: 'New York', ratings: '★★★★☆', joiningDate: '12/10/19', salePercentage: 90 },
        { id: 15452, name: 'Lumina', location: 'New York', ratings: '★★★★☆', joiningDate: '20/9/19', salePercentage: 99 },
        { id: 45263, name: 'Food Lounge', location: 'New York', ratings: '★★★★☆', joiningDate: '15/10/19', salePercentage: 95 },
        { id: 45865, name: 'Hungry House', location: 'New York', ratings: '★★★★☆', joiningDate: '21/11/19', salePercentage: 88 },
        { id: 56652, name: 'Luncheon', location: 'New York', ratings: '★★★★☆', joiningDate: '12/11/19', salePercentage: 81 },
        { id: 65845, name: "Spice 'n' Steam", location: 'New York', ratings: '★★★★☆', joiningDate: '20/10/19', salePercentage: 91 },
        { id: 78545, name: 'Sizzle Spot', location: 'Los Angeles', ratings: '★★★★☆', joiningDate: '10/08/19', salePercentage: 85 },
        { id: 86945, name: 'Grill Delight', location: 'Chicago', ratings: '★★★☆☆', joiningDate: '11/07/19', salePercentage: 75 },
        { id: 95874, name: 'Tandoor Treats', location: 'Houston', ratings: '★★★★★', joiningDate: '14/09/19', salePercentage: 92 },
        { id: 10245, name: 'Bistro Bliss', location: 'Seattle', ratings: '★★★★☆', joiningDate: '05/12/19', salePercentage: 89 },
        { id: 11478, name: 'Fusion Feast', location: 'Miami', ratings: '★★★☆☆', joiningDate: '17/01/20', salePercentage: 78 },
        { id: 12458, name: 'Gourmet Garden', location: 'Boston', ratings: '★★★★★', joiningDate: '25/03/20', salePercentage: 97 },
        { id: 13547, name: 'Urban Eats', location: 'Denver', ratings: '★★★★☆', joiningDate: '29/06/20', salePercentage: 88 },
        { id: 14578, name: 'Savory Station', location: 'San Francisco', ratings: '★★★★☆', joiningDate: '03/05/20', salePercentage: 90 },
        { id: 15689, name: 'Epicurean Escape', location: 'Las Vegas', ratings: '★★★★★', joiningDate: '09/02/20', salePercentage: 95 }
    ];

    return (
        <Layout>
            <div className="p-6 bg-white rounded-lg shadow-md">
                <h1 className="text-2xl font-bold mb-6">Restaurant List</h1>
                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white border border-gray-200">
                        <thead>
                            <tr className="bg-red-500 text-white">
                                <th className="py-3 px-4 border-b text-left ">Restaurant ID</th>
                                <th className="py-3 px-4 border-b text-left text-xl">Restaurant Name</th>
                                <th className="py-3 px-4 border-b text-left text-xl">Location</th>
                                <th className="py-3 px-4 border-b text-left text-xl">Ratings</th>
                                <th className="py-3 px-4 border-b text-left text-xl">Joining Date</th>
                                <th className="py-3 px-4 border-b text-left text-xl">Restaurant Sale(%)</th>
                                <th className="py-3 px-4 border-b text-left text-xl">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {invoices.map((invoice) => (
                                <tr key={invoice.id} className="hover:bg-gray-50">
                                    <td className="py-3 px-4 border-b border-gray-300 text-xl">{invoice.id}</td>
                                    <td className="py-3 px-4 border-b border-gray-300 text-xl">{invoice.name}</td>
                                    <td className="py-3 px-4 border-b border-gray-300 text-xl">{invoice.location}</td>
                                    <td className="py-3 px-4 border-b border-gray-300 text-xl text-amber-300">{invoice.ratings}</td>
                                    <td className="py-3 px-4 border-b border-gray-300 text-xl">{invoice.joiningDate}</td>
                                    <td className="py-3 px-4 border-b border-gray-300 text-xl">{invoice.salePercentage}%</td>
                                    <td className="py-3 px-4 border-b border-gray-300 text-xl flex space-x-4">
                                    <i className="ri-send-plane-fill text-blue-400 text-xl"></i>
                                    <i className="ri-file-edit-fill text-grey-400 text-xl"></i>
                                    <i className="ri-delete-bin-fill text-red-600 text-xl"></i>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </Layout>
    );
}

export default Restuarent_List;


