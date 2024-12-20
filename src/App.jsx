import "./App.css";
import { useState } from "react";
import Header from "./components/header/Header.jsx";
import Filters from "./components/filters/Filters.jsx";
import Cards from "./components/cards/Cards.jsx";
import DeckPage from "./components/deck/DeckPage.jsx";

function App() {
  const [filters, setFilters] = useState({
    oarc: true,
    oe01: true,
    dsc: true,
    reprints: true,
    deckMode: false,
    cards: []
  });

  const [cardList, setCardList] = useState([]);

  const handleFilterChange = ({ id, checked }) => {
    console.log(`received id: ${id}`)
    console.log(`received value: ${checked}`)
    setFilters((prevFilters) => ({
      ...prevFilters,
      [id]: checked,
    }));
  };

  function Body({ mode }) {
    return mode ? (
      <DeckPage cards={cardList} />
    ) : (
      <Cards
        oarc={filters.oarc}
        oe01={filters.oe01}
        dsc={filters.dsc}
        reprints={filters.reprints}
        setCardList={setCardList}
      />
    );
  }

  return (
    <>
      <Header />
      <Filters onFilterChange={handleFilterChange} />
      <Body mode={filters.deckMode}/>
    </>
  );
}

export default App;
