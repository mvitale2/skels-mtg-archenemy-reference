let cardList = [];

for (let i = 0; i < 20; i++) {
  const path = `/oe01/oe01_card_${i}.jpg`;
  cardList.push({
    id: i,
    set: "oe01",
    image: path,
  });
}

export default cardList;
