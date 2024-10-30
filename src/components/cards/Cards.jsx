import React from 'react'
import CardSkel from "./CardSkel.jsx"
import "./Cards.css"

function Cards({ oarc, oe01, dsc }) {
  return (
    <div className="gallery">
      {oarc ? <CardSkel set_code="oarc"/> : null}
      {oe01 ? <CardSkel set_code="oe01"/> : null}
      {dsc ? <CardSkel set_code="dsc"/> : null}
    </div>
  );
}

export default Cards