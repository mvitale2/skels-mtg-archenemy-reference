const oe01_cards = import.meta.glob("../../assets/oe01/*");

let cardList = []

for (let i = 0; i < 45; i++) {
  const path = `../../assets/oe01/oe01_card_${i}`
  cardList.push({
    id: i,
    set: "oe01",
    image: oe01_cards[path], // Use the relative path directly
  });
}

export default oe01_cards;
