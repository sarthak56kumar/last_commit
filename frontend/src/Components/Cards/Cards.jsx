import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Cards.css'; 
import Item from './Items';

const Cards = () => {
  const navigate = useNavigate();
  const [newCard, setNewCard] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [error, setError] = useState(null);
  const [userPoints, setUserPoints] = useState(100);
  const [userCards, setUserCards] = useState([]);
  const [userId, setUserId] = useState('');



  useEffect(() => {
    // Fetch latest 20 cards or search results based on searchTerm
    const fetchCards = () => {
      const url = searchTerm 
        ? `http://localhost:4000/newCards?search=${encodeURIComponent(searchTerm)}` 
        : 'http://localhost:4000/newCards';
      
      fetch(url)
        .then((response) => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then((data) => {
          console.log(data); // Log the response data
          setNewCard(data);
        })
        .catch((error) => {
          console.error('Error fetching cards:', error);
          setError('Failed to fetch cards. Please try again later.');
        });
    };

    fetchCards();
  }, [searchTerm]); // Re-run the effect if searchTerm changes



   const handlePurchaseWithPoints = (id, points) => {
    if (userPoints >= points) {
      setUserPoints(userPoints - points);
      const url = `http://localhost:4000/user/points/${userId}`;
      const updatedPoints = { points: userPoints - points };
      fetch(url, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedPoints),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error('Failed to update points');
          }
          return response.json();
        })
        .then(() => {
          setUserCards([...userCards, { id, points }]); 
          alert("Card purchased successfully!");
        })
        .catch((error) => {
          console.error('Error updating points:', error);
          alert("Failed to update points. Please try again.");
        });
    } else {
      alert("You don't have enough points to purchase this card.");
    }
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value.trim());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Search submitted for:', searchTerm);
  };

  const handlePurchaseWithMoney = (price, cardTitle) => {
    navigate('/payment', { state: { amount: price, cardTitle: cardTitle } });
  };

  return (
    <>
      {/* Search form */}
      <form onSubmit={handleSubmit} className="search-form">
        <input 
          type="text" 
          className="search-bar" 
          placeholder="Search..." 
          value={searchTerm} 
          onChange={handleSearchChange} 
        />
        <button type="submit" className="submit-button">Submit</button>
      </form>

      {error && <p className="error-message">{error}</p>}

      {/* Display cards */}
      <div className="cards-container">
  {newCard.length > 0 ? (
    newCard.map((card) => (
      <Item key={card.id} id={card.id} image={card.image} price={card.price} point={card.point}>
        <button
          className="buy-button"
          onClick={() => handlePurchaseWithMoney(card.id, card.price)}
        >
          Purchase with Money
        </button>
        <button
          className="buy-button"
          onClick={() => handlePurchaseWithPoints(card.id, card.point)}
        >
          Purchase with Points
        </button>
        
      </Item>
    ))
  ) : (
    <p>No cards found.</p>
  )}
</div>

    </>
  );
};

export default Cards;
