import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Checkmarks.css";
import "./Filters.css";

function Filters({ onFilterChange, onSubmit }) {
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

  const handleSubmit = (e) => {
    console.log("Creating deck...");
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
            <label htmlFor="oarc-chkbox">
              <input
                className="chkbox"
                type="checkbox"
                id="oarc"
                name="oarc-chkbox"
                checked={useOarc}
                onChange={handleFilterChange}
              />
              Enable Original Schemes
            </label>
          </div>
          <div className="filter">
            <label htmlFor="oe01-chkbox">
              <input
                className="chkbox"
                type="checkbox"
                name="oe01-chkbox"
                id="oe01"
                checked={useOe01}
                onChange={handleFilterChange}
              />
              Enable Nicol Bolas Schemes
            </label>
          </div>
          <div className="filter">
            <label htmlFor="dsc-chkbox">
              <input
                className="chkbox"
                type="checkbox"
                name="dsc-chkbox"
                id="dsc"
                checked={useDsc}
                onChange={handleFilterChange}
              />
              Enable Duskmourn Schemes
            </label>
          </div>
          <div className="filter">
            <label htmlFor="reprints">
              <input
                className="chkbox"
                type="checkbox"
                id="reprints"
                name="reprints-chkbox"
                onChange={handleFilterChange}
                checked={useReprints}
              />
              Allow duplicates?
            </label>
          </div>
        </div>
        <div className="buttons">
          <Link to="/deck">
            <button
              className="deck-btn"
              disabled={useDsc || useOarc || useOe01 ? null : true}
              onClick={handleSubmit}
            >
              Create Scheme Deck From Filters
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Filters;
