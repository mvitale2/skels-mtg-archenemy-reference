import React, { useEffect } from "react";
import { useState } from "react";
import "./Deck.css";
import Deck from "./Deck.jsx";

function DeckPage({ cards }) {
  const [iterator, setIterator] = useState(0);
  const [shuffledCards, setShuffledCards] = useState([]);

  useEffect(() => {
    const shuffleArray = (array) => {
      let shuffled = array.slice(); // copies the array
      for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
      }
      return shuffled;
    };

    const shuffledArray = shuffleArray(cards)
    setShuffledCards(shuffledArray);
  }, [cards]);

  const handleClick = (e) => {
    const { id } = e.target;
    if (id == "next" && iterator < cards.length - 1) {
      setIterator(iterator + 1);
    } else if (id == "prev" && iterator > 0) {
      setIterator(iterator - 1);
    }
  };

  // useEffect(() => {
  //   console.log(iterator);
  // }, [iterator]);

  return (
    <div className="deck-container">
      <Deck i={iterator} cards={shuffledCards} />
      <div className="nav-bar">
        <button
          className="prev"
          id="prev"
          onClick={handleClick}
          disabled={iterator === 0 ? "disabled" : ""}
        >
          Previous
        </button>
        <button
          className="next"
          id="next"
          onClick={handleClick}
          disabled={iterator === cards.length - 1 ? "disabled" : ""}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default DeckPage;
