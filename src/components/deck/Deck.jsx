import React from 'react'

function Deck(props) {
  return (
    <div className="deck">
      {props.cards.map((card) => (
        <div className="card" key={card.id}>
          <img src={card.imageUrl} alt={card.name} />
          <h3>{card.name}</h3>
          <p>{card.text}</p>
        </div>
      ))}
    </div>
  )
}

export default Deck