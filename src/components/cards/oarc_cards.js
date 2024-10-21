const oarc_cards = import.meta.glob("../../assets/oarc/*");

let cardList = [];

for (let i = 0; i < 45; i++) {
  const path = `../../assets/oarc/oarc_card_${i}`;
  cardList.push({
    id: i,
    set: "oarc",
    image: oarc_cards[path], // Use the relative path directly
  });
}

export default oarc_cards;
