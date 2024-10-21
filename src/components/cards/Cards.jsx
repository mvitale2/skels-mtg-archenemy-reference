import React from 'react'
import "./Cards.css"
import oarc_cards from "./oarc_cards.js"
import oe01_cards from "./oe01_cards.js"

function Cards() {
  return (
    <div className='gallery'>
        {oarc_cards.map((image, id, set) => (
             <div className='card'>
                 <image key={id} src={image} alt={`oarc card ${id}`}></image>
                 <span>{`Set: ${set}`}</span>
             </div>
         ))}
        {oe01_cards.map((image, id, set) => (
            <div className='card'>
                <image key={id} src={image} alt={`oe01 card ${id}`}></image>
                <span>{`Set: ${set}`}</span>
            </div>
        ))}
    </div>
  )
}

export default Cards