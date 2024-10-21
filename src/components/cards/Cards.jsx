import React from 'react'
import "./Cards.css"
import oarc_cards from "./oarc_cards.js"
import oe01_cards from "./oe01_cards.js"

function Cards() {
  return (
    <div className="gallery">
      {oarc_cards.map((card) => (
        <div className="card" key={card.id}>
          <img src={card.image} alt={`oarc card ${card.id}`} />
          <span>{`Set: ${card.set}`}</span>
        </div>
      ))}
      {oe01_cards.map((card) => (
        <div className="card" key={card.id}>
          <img src={card.image} alt={`oe01 card ${card.id}`}/>
          <span>{`Set: ${card.set}`}</span>
        </div>
      ))}
    </div>
  );
}

export default Cards