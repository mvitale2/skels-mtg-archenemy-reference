import React from 'react'
import "./Header.css"
import { HashLink } from "react-router-hash-link"

function Header() {
  return (
    <div className="header">
      <span>Skel's MTG Archenemy Reference</span>
      <nav>
        <a
          href="https://magic.wizards.com/en/formats/archenemy"
          target="__blank"
          rel="noopener noreferrer"
        >
          Original Archenemy Rules
        </a>
        <a 
          href="https://magic.wizards.com/en/news/announcements/evolving-archenemy"
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