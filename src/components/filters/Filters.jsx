import React, { useState } from "react";
import "./Checkmarks.css";
import "./Filters.css";

function Filters({ onFilterChange }) {
  const [useOarc, setOarc] = useState(true);
  const [useOe01, setOe01] = useState(true);
  const [useDsc, setDsc] = useState(true);
  const [useReprints, setReprints] = useState(true);

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
    }
    onFilterChange({ id, checked });
  };

  return (
    <div className="filters">
      <form
        className="filters-form"
        name="filters-form"
        onSubmit={(e) => {
          e.preventDefault();
          e.stopPropagation();
        }}
      >
        <div className="selections">
          <div className="filter">
            <input
              className="chkbox"
              type="checkbox"
              id="oarc"
              name="oarc-chkbox"
              checked={useOarc}
              onChange={handleFilterChange}
            ></input>
            <label htmlFor="oarc-chkbox">Enable Original Schemes</label>
          </div>
          <div className="filter">
            <input
              className="chkbox"
              type="checkbox"
              name="oe01-chkbox"
              id="oe01"
              checked={useOe01}
              onChange={handleFilterChange}
            ></input>
            <label htmlFor="oe01-chkbox">Enable Nicol Bolas Schemes</label>
          </div>
          <div className="filter">
            <input
              className="chkbox"
              type="checkbox"
              name="dsc-chkbox"
              id="dsc"
              checked={useDsc}
              onChange={handleFilterChange}
            ></input>
            <label htmlFor="dsc-chkbox">Enable Duskmourn Schemes</label>
          </div>
          <div className="filter">
            <input
              className="chkbox"
              type="checkbox"
              id="reprints"
              name="reprints-chkbox"
              onChange={handleFilterChange}
              checked={useReprints}
            ></input>
            <label htmlFor="reprints">Allow reprints?</label>
          </div>
        </div>
        <div className="buttons">
          <button className="deck-btn">Create Scheme Deck From Filters</button>
        </div>
      </form>
    </div>
  );
}

export default Filters;
