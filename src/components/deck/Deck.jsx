import React from "react";
import { useState } from "react";
import CardSkel from "../cards/CardSkel.jsx";
import "./Deck.css";

function Deck() {
  const [iterator, setIterator] = useState(1)
  const handleClick = (e) => {
    const { id } = e.target;
    if (id == "next") {
      setIterator(iterator + 1)
    } else if (id == "prev") {
      setIterator(iterator - 1)
    }
  };

  return (
    <div className="deck-container">
      <div className="deck"></div>
      <div className="nav-bar">
        <button className="next" onClick={handleClick}>
          Next
        </button>
        <button className="prev" onClick={handleClick}>
          Previous
        </button>
      </div>
    </div>
  );
}

export default Deck;
