import React from "react";
import CardSkel from "./CardSkel.jsx";
import "./Cards.css";

function Cards({ oarc, oe01, dsc }) {
  return (
    <div className="gallery">
      {oarc ? <CardSkel set_code="oarc" /> : null}
      {oe01 ? <CardSkel set_code="oe01" /> : null}
      {dsc ? <CardSkel set_code="dsc" /> : null}
      {dsc || oe01 || oarc ? null : (
        <span className="empty-msg">You must select at least one set!</span>
      )}
    </div>
  );
}

export default Cards;
