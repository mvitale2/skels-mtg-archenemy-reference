import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./Deck.css";
import Deck from "./Deck";

function DeckPage() {
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
      <div className="home">
        <Link to="/">Return Home</Link>
      </div>
      <div className="deck"><Deck/></div>
      <div className="nav-bar">
        <button className="prev" onClick={handleClick}>
          Previous
        </button>
        <button className="next" onClick={handleClick}>
          Next
        </button>
      </div>
    </div>
  );
}

export default DeckPage;
