import React from 'react'
import "./Deck.css"

function Deck({ i, cards }) {
  const currentCard = cards[i]

  return (
    // Conditionally render the card so it has time to load
    <div className="deck">
      {currentCard ? (
        <div className="card">
          <img src={currentCard.image} alt={currentCard.title} />
        </div>
      ) : (
        <div className="card">
          <span>Please wait...</span>
        </div>
      )}
    </div>
  );
}

export default Deck