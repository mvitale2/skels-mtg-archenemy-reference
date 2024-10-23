import React from 'react'
import CardSkel from "./CardSkel.jsx"
import "./Cards.css"

function Cards() {
  return (
    <div className="gallery">
      <CardSkel set_code="oarc"/>
      <CardSkel set_code="oe01"/>
      <CardSkel set_code="dsc"/>
    </div>
  );
}

export default Cards