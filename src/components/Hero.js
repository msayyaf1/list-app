import React from 'react';

const Hero = () => {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Make Every Moment Special With Perfect Gift Cards
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-8">
          Discover our handpicked collection of gift cards for every occasion.
          From birthdays to thank you&apos;s, express your feelings with style.
        </p>
        <button className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-medium cursor-default">
          Browse Collection
        </button>
      </div>
    </div>
  );
};

export default Hero;
