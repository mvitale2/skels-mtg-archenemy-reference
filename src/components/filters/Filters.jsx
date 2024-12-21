import React, { useState } from "react";
// import { Link } from "react-router-dom";
import "./Checkmarks.css";
import "./Filters.css";

function Filters({ onFilterChange }) {
  const [useOarc, setOarc] = useState(true);
  const [useOe01, setOe01] = useState(true);
  const [useDsc, setDsc] = useState(true);
  const [useReprints, setReprints] = useState(true);
  const [deckMode, setDeckMode] = useState(false);

  const handleFilterChange = (e) => {
    const { id, checked } = e.target;
    if (id == "oarc") {
      setOarc(!useOarc);
    } else if (id === "oe01") {
      setOe01(!useOe01);
    } else if (id === "dsc") {
      setDsc(!useDsc);
    } else if (id === "reprints") {
      setReprints(!useReprints);
    } else if (id === "deckMode") {
      setDeckMode(!deckMode);
    }
    onFilterChange({ id, checked });
  };

  return (
    <div className="filters">
      <div className="filter">
        <label htmlFor="oarc-chkbox" id="oarc">
          <input
            className="chkbox"
            type="checkbox"
            id="oarc"
            name="oarc-chkbox"
            checked={useOarc}
            onChange={handleFilterChange}
            disabled={deckMode ? "disabled" : ""}
          />
          Original Schemes
        </label>
      </div>
      <div className="filter">
        <label htmlFor="oe01-chkbox" id="oe01">
          <input
            className="chkbox"
            type="checkbox"
            name="oe01-chkbox"
            id="oe01"
            checked={useOe01}
            onChange={handleFilterChange}
            disabled={deckMode ? "disabled" : ""}
          />
          Nicol Bolas Schemes
        </label>
      </div>
      <div className="filter">
        <label htmlFor="dsc-chkbox" id="dsc">
          <input
            className="chkbox"
            type="checkbox"
            name="dsc-chkbox"
            id="dsc"
            checked={useDsc}
            onChange={handleFilterChange}
            disabled={deckMode ? "disabled" : ""}
          />
          Duskmourn Schemes
        </label>
      </div>
      <div className="filter">
        <label htmlFor="reprints" id="reprints">
          <input
            className="chkbox"
            type="checkbox"
            id="reprints"
            name="reprints-chkbox"
            onChange={handleFilterChange}
            checked={useReprints}
            disabled={deckMode ? "disabled" : ""}
          />
          Allow duplicates?
        </label>
      </div>
      <div className="filter">
        <label htmlFor="deck" id="deck">
          <input
            className="chkbox"
            type="checkbox"
            id="deckMode"
            name="deck-chkbox"
            onChange={handleFilterChange}
            checked={deckMode}
            disabled={!useDsc && !useOarc && !useOe01 ? "disabled" : ""}
          />
          {`${deckMode ? "Disable" : "Enable"} Deck Mode`}
        </label>
      </div>
    </div>
  );
}

export default Filters;
