import React, { useState } from 'react';
import Image from 'next/image';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-lg">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Image 
              src="/giftIcon.webp"
              alt="Gift Icon"
              width={56}
              height={56}
            />
            <span className="text-xl font-bold text-gray-800">Store</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <button className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors">
              All Cards
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden mt-4">
            <button className="w-full px-4 py-2 text-left rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors">
              All Cards
            </button>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;