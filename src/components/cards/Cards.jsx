import React from "react";
import CardSkel from "./CardSkel.jsx";
import "./Cards.css";

function Cards({ oarc, oe01, dsc, reprints }) {
  return (
    <div className="gallery">
      {oarc ? <CardSkel set_code="oarc" reprints={reprints} dsc={dsc}/> : null}
      {oe01 ? <CardSkel set_code="oe01" reprints={reprints} dsc={dsc}/> : null}
      {dsc ? <CardSkel set_code="dsc" reprints={reprints} dsc={dsc}/> : null}
      {dsc || oe01 || oarc ? null : (
        <span className="empty-msg">You must select at least one set!</span>
      )}
    </div>
  );
}

export default Cards;
