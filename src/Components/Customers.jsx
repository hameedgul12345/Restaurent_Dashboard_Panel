import React from 'react'
import Layout from './Layout'

function Customers() {
  const items = [
    {
      name: 'John Doe',
      dish: 'Grilled Sandwich',
      date: 'February 24, 2022',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus lectus a facilisis bibendum. Duis quis convallis sapien ...',
      likes: 16,
      comments: 3,
      image: '/images/profile1.jpg' // Placeholder image URL
    },
    {
      name: 'Ricky Martin',
      dish: 'Fried Egg Sandwich',
      date: 'February 24, 2022',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus lectus a facilisis bibendum. Duis quis convallis sapien ...',
      likes: 16,
      comments: 3,
      image:  '/images/profile2.jpg'
    },
    {
      name: 'Joe Semual',
      dish: 'Peri Peri Fries',
      date: 'February 24, 2022',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus lectus a facilisis bibendum. Duis quis convallis sapien ...',
      likes: 16,
      comments: 3,
      image: '/images/profile3.jpg'
    },
    {
      name: 'John Doe',
      dish: 'Grilled Sandwich',
      date: 'February 24, 2022',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus lectus a facilisis bibendum. Duis quis convallis sapien ...',
      likes: 16,
      comments: 3,
      image: '/images/profile4.jpg' // Placeholder image URL
    },
    {
      name: 'Ricky Martin',
      dish: 'Fried Egg Sandwich',
      date: 'February 24, 2022',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus lectus a facilisis bibendum. Duis quis convallis sapien ...',
      likes: 16,
      comments: 3,
      image:  '/images/profile5.jpg'
    },
    {
      name: 'Joe Semual',
      dish: 'Peri Peri Fries',
      date: 'February 24, 2022',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus lectus a facilisis bibendum. Duis quis convallis sapien ...',
      likes: 16,
      comments: 3,
      image: '/images/profile6.jpg'
    }
  ];
  return (
    <Layout>
        <div className="p-4 bg-gray-100">
      {items.map((item, index) => (
        <div key={index} className="mb-6 p-4 bg-white rounded-lg shadow-sm">
          <div className="flex items-center mb-2">
            <img src={item.image} alt={item.name} className="w-10 h-10 rounded-full mr-3" />
            <div>
              <h2 className="text-xl font-semibold">{item.name}</h2>
              <span className="text-gray-500 text-sm">{item.date}</span>
            </div>
          </div>
          <h3 className="text-lg font-medium text-gray-700">{item.dish}</h3>
          <p className="text-gray-600 mt-2">{item.description}</p>
          <div className="flex mt-4">
            <span className="text-gray-500 mr-4">&#10084; {item.likes}</span>
            <span className="text-gray-500">&#128172; {item.comments}</span>
          </div>
        </div>
      ))}
    </div>
    </Layout>
  )
}

export default Customers
