
import React from "react";
import Layout from "./Layout";

function Menu() {
  const items = [
    { img: "/images/pizza.jpg", title: "Pizza", price: "$15", orders: "150", revenue: "$1000" },
    { img: "/images/fries.jpg", title: "Fries", price: "$10", orders: "200", revenue: "$1200" },
    { img: "/images/sandwitch.jpg", title: "Sandwich", price: "$12", orders: "180", revenue: "$1100" },
    { img: "/images/chicken.jpg", title: "Grilled Chicken", price: "$18", orders: "120", revenue: "$2160" },
    { img: "/images/burger.jpg", title: "Burger", price: "$12", orders: "250", revenue: "$3000" },
    { img: "/images/dumplings.jpg", title: "Dumplings", price: "$14", orders: "180", revenue: "$2520" }
  ];
  return (
    <Layout>

         <div className="space-y-4">
            <h1 className="font-bold text-3xl mb-2">See Menu</h1>
      {/** Render items in two rows **/}
      {[0, 3].map((startIndex) => (
        <div key={startIndex} className="flex flex-row justify-between items-stretch w-full gap-4">
          {items.slice(startIndex, startIndex + 3).map((item, index) => (
            <div key={index} className="max-w-sm w-full h-full rounded-lg overflow-hidden shadow-lg bg-white flex flex-col">
              <img className="w-full h-40 object-cover" src={item.img} alt={item.title} />
              <div className="px-6 flex justify-between items-center flex-row">
                <div className="font-bold text-xl mb-2">{item.title}</div>
                <p className="text-gray-700 text-base">{item.price}</p>
              </div>
              <div className="px-6 pb-2 flex justify-between items-center flex-row">
                <p className="text-gray-700 text-base">Total Order: {item.orders}</p>
                <p className="text-gray-700 text-base">Revenue: {item.revenue}</p>
              </div>
              <div className="px-6 py-4 mt-auto">
                <button className="bg-red-500 hover:bg-blue-700 w-full text-white font-bold py-2 px-4 rounded">
                  See More
                </button>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
    </Layout>
  );
}



export default Menu

