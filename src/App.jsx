import "./App.css";
import { useState } from "react";
import Header from "./components/header/Header.jsx";
import Filters from "./components/filters/Filters.jsx";
import Cards from "./components/cards/Cards.jsx";

function App() {
  const [filters, setFilters] = useState({
    oarc: true,
    oe01: true,
    dsc: true,
    reprints: true,
    deckMode: false,
  });

  const handleFilterChange = ({ id, checked }) => {
    // console.log(`received id: ${id}`)
    // console.log(`received value: ${checked}`)
    setFilters((prevFilters) => ({
      ...prevFilters,
      [id]: checked,
    }));
  };

  return (
    <>
      <Header />
      <Filters onFilterChange={handleFilterChange} />
      <Cards
        oarc={filters.oarc}
        oe01={filters.oe01}
        dsc={filters.dsc}
        reprints={filters.reprints}
        deckMode={filters.deckMode}
      />
    </>
  );
}

export default App;
