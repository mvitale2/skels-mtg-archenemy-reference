import React from 'react'
import "./Filters.css"

function Filters() {
  return (
    <div className="filters">
      <form name="filters-form">
        <input type="checkbox" name="oarc"></input>
        <label htmlFor="oarc" id="oarc-chkbox" name="oarc-chkbox">
          Enable Original Schemes
        </label>
        <input type="checkbox" name="oe01"></input>
        <label htmlFor="oe01" id="oe01-chkbox" name="oe01-chkbox">
          Enable Nicol Bolas Schemes
        </label>
        <input type="checkbox" name="dsc"></input>
        <label htmlFor="dsc" id="dsc-chkbox" name="dsc-chkbox">
          Enable Duskmourn Schemes
        </label>
        <input type="checkbox" name="reprints"></input>
        <label>Allow reprints?</label>
        <button type='submit'>Apply</button>
      </form>
    </div>
  );
}

export default Filters