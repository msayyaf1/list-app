import React, { useState, useEffect } from 'react';
import Header from '@/components/Header';
import GiftCard from '@/components/GiftCard';
import { api } from '@/services/api';

export default function Home() {
  const [giftCards, setGiftCards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchGiftCards = async () => {
      try {
        const response = await api.get('/gift-cards');
        setGiftCards(response.data.data);
        setError(null);
      } catch (err) {
        setError('Error fetching gift cards. Please try again later.');
        console.error('Error:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchGiftCards();
  }, []);

  if (loading) {
    return (
      <div className="h-screen w-full bg-white bg-dot-pattern bg-dot-size relative">
        <Header />
        <div className="flex items-center justify-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="h-screen w-full bg-white bg-dot-pattern bg-dot-size relative">
        <Header />
        <div className="flex items-center justify-center h-64">
          <div className="text-red-600 text-center bg-white/80 backdrop-blur-sm p-6 rounded-lg">
            <p className="text-xl">{error}</p>
            <button 
              onClick={() => window.location.reload()} 
              className="mt-4 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors"
            >
              Retry
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full bg-white bg-dot-pattern bg-dot-size relative">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-12 text-center">
          Available Gift Cards
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {giftCards.map((card) => (
            <GiftCard key={card.id} card={card} />
          ))}
        </div>
      </main>
    </div>
  );
}