// pages/ServiceDetailPage.js
import React from 'react';
import { useParams } from 'react-router-dom';

const ServiceDetailPage = () => {
  const { id } = useParams();
  const selectedService = cards[id - 1]; // Subtracting 1 as the array index is 0-based

  if (!selectedService) {
    return <div>Service not found!</div>;
  }

  return (
    <div className="container mx-auto mt-8">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-semibold mb-4">{selectedService.title}</h1>
        <img src={selectedService.imageUrl} alt={selectedService.title} className="w-full h-40 object-cover mb-4" />
        <p className="text-gray-600">{selectedService.description}</p>
      </div>
    </div>
  );
};

export default ServiceDetailPage;
