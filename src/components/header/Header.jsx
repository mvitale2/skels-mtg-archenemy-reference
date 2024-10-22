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
          Original Archenemy Rules
        </a>
        <a 
          href="https://magic.wizards.com/en/formats/archenemy-commander"
          target="__blank"
          rel="noopener noreferrer"
        >
          Commander Archenemy Rules
        </a>
      </nav>
    </div>
  );
}

export default Header
