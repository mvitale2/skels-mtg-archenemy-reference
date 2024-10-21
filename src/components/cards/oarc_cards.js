let cardList = [];

for (let i = 0; i < 45; i++) {
  const path = `/oarc/oarc_card_${i}.jpg`;
  cardList.push({
    id: i,
    set: "oarc",
    image: path,
  });
}

export default cardList;
