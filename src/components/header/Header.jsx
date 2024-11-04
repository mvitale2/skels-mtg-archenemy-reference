import React from 'react'
import "./Header.css"

function Header() {
  return (
    <div className="header">
      <h1>Skel's MTG Archenemy Reference</h1>
      <nav>
        <a
          href="https://magic.wizards.com/en/formats/archenemy"
          target="__blank"
          rel="noopener noreferrer"
        >
          <h2>Original Archenemy Rules</h2>
        </a>
        <a 
          href="https://magic.wizards.com/en/formats/archenemy-commander"
          target="__blank"
          rel="noopener noreferrer"
        >
          <h2>Commander Archenemy Rules</h2>
        </a>
      </nav>
    </div>
  );
}

export default Header
