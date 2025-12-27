class Card {
  constructor(rank, suit, color, id) {
    this.rank = rank;
    this.suit = suit;
    this.color = color;
    this.id = id;
  }
}

class Tarot {
  constructor(id, name, description, reversed) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.reversed = reversed;
  }
}

class Question {
  constructor(cardA, cardB, cardC, tarot) {
    this.cardA = cardA;
    this.cardB = cardB;
    this.cardC = cardC;
    this.tarot = tarot;
  }
}
