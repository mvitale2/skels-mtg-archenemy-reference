import React from "react";
import { useState, useEffect } from "react";
import CardSkel from "./CardSkel.jsx";
import "./Cards.css";
// import DeckPage from "../deck/DeckPage.jsx";

function Cards({ oarc, oe01, dsc, reprints, deckMode }) {
  const [oarcCards, setOarcCards] = useState([]);
  const [oe01Cards, setOe01Cards] = useState([]);
  const [dscCards, setDscCards] = useState([]);
  const [Cards, setCards] = useState([]);

  function CombineCards() {
    const combinedCards = [...oarcCards, ...oe01Cards, ...dscCards];
    setCards(combinedCards);
    console.log(Cards);
  }

  // Whenever the filter changes, reset the card lists
  useEffect(() => {
    oarc ? null : setOarcCards([]);
    oe01 ? null : setOe01Cards([]);
    dsc ? null : setDscCards([]);
    CombineCards();
  }, [oarc, oe01, dsc, reprints]);

  return (
    <div className="gallery">
      {oarc ? (
        <CardSkel
          set_code="oarc"
          reprints={reprints}
          dsc={dsc}
          setCards={setOarcCards}
          Cards={oarcCards}
        />
      ) : null}
      {oe01 ? (
        <CardSkel
          set_code="oe01"
          reprints={reprints}
          dsc={dsc}
          setCards={setOe01Cards}
          Cards={oe01Cards}
        />
      ) : null}
      {dsc ? (
        <CardSkel
          set_code="dsc"
          reprints={reprints}
          dsc={dsc}
          setCards={setDscCards}
          Cards={dscCards}
        />
      ) : null}
      {dsc || oe01 || oarc ? null : (
        <span className="empty-msg">You must select at least one set!</span>
      )}
    </div>
  );
}

export default Cards;
