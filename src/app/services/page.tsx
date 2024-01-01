// pages/services.js
import React from 'react';
import Link from 'next/link';

const cards = [
  {
    id: 1,
    title: 'Card 1',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    imageUrl: 'https://placekitten.com/300/200',
  },
  {
    id: 2,
    title: 'Card 2',
    description: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
    imageUrl: 'https://placekitten.com/301/200',
  },
  {
    id: 3,
    title: 'Card 3',
    description: 'Integer posuere erat a ante venenatis dapibus posuere velit aliquet.',
    imageUrl: 'https://placekitten.com/302/200',
  },
  {
    id: 4,
    title: 'Card 4',
    description: 'Integer posuere erat a ante venenatis dapibus posuere velit aliquet.',
    imageUrl: 'https://placekitten.com/302/200',
  },
  // Add more cards as needed
];

const truncateDescription = (text, maxLength) => {
  return text.length > maxLength ? text.slice(0, maxLength) + '...' : text;
};

const ServicePage = () => {
  return (
    <div className="flex flex-wrap -mx-4">
      {cards.map((card) => (
        <div key={card.id} className="w-full md:w-1/3 p-4">
          <div className="bg-white rounded-lg overflow-hidden shadow-md">
            <img src={card.imageUrl} alt={card.title} className="w-full h-40 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{card.title}</h2>
              <p className="text-gray-600">{truncateDescription(card.description, 50)}</p>
              <Link href={`/services/${card.id}`}>
              <button className="btn btn-sm btn-outline btn-warning">Detail</button>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServicePage;
