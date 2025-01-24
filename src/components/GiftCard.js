import React, { useState } from 'react';

const GiftCard = ({ card, index, hovered, setHovered }) => {
  return (
    <div
      onMouseEnter={() => setHovered(index)}
      onMouseLeave={() => setHovered(null)}
      className={`relative flex flex-col text-gray-700 bg-white shadow-xl bg-clip-border rounded-xl w-full transition-all duration-300 ease-out cursor-pointer ${
        hovered !== null && hovered !== index ? 'blur-sm scale-[0.98]' : ''
      }`}
    >
      <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white bg-clip-border rounded-xl h-64">
        <img
          src={card.imageUrl}
          alt={`${card.title} gift card`}
          className="object-contain w-full h-full"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <p className="block text-base antialiased font-medium leading-relaxed text-blue-900">
            {card.title}
          </p>
          <p className="block text-base antialiased font-medium leading-relaxed text-gray-900">
            {card.price}
          </p>
        </div>
        <p className="block text-sm antialiased font-normal leading-normal text-gray-700 opacity-75">
          {card.description}
        </p>
      </div>
    </div>
  );
};

export default GiftCard;
