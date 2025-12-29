/**
 * Maps 3 playing cards to a tarot card. Tarot cards are identified by an 
 * ID string: for minor arcana, rank + first letter of suit (c/p/w/s); for * major arcana, the ID string is a single word. You can see the exact IDs 
 * in the 'tarots.csv' <script> element in ../practice.html. You can see  
 * the class declarations of the Card and Tarot objects in js/classes.js.
 * 
 * @param {Card} cardA - the top card.
 * @param {Card} cardB - the middle card.
 * @param {Card} cardC - the bottom card.
 * @returns {Tarot} - the corresponding tarot card.
 */
function getAnswer(cardA, cardB, cardC) {
    tarotID = "";

    if (cardB.color != cardC.color) {
        tarotID += cardA.rank.toString();
        switch (cardB.suit){
            case "hearts":
                tarotSuit = "cups";
                tarotID += "c";
                break;
            case "diamonds":
                tarotSuit = "pentacles";
                tarotID += "p";
                break;
            case "clubs":
                tarotSuit = "wands";
                tarotID += "w";
                break;
            case "spades":
                tarotSuit = "swords";
                tarotID += "s";
                break;
        }
    } else {
        if (cardB.suit == "hearts" || cardB.suit == "diamonds") {
            switch (cardA.rank){
                case "A": tarotID += "magician"; break;
                case "2": tarotID += "priestess"; break;
                case "3": tarotID += "empress"; break;
                case "4": tarotID += "emporer"; break;
                case "5": tarotID += "hierophant"; break;
                case "6": tarotID += "lovers"; break;
                case "7": tarotID += "chariot"; break;
                case "8": tarotID += "strength"; break;
                case "9": tarotID += "hermit"; break;
                case "10": tarotID += "wheel"; break;
                case "J": tarotID += "justice"; break;
                case "Q": tarotID += "hanged"; break;
                case "K": tarotID += "death"; break;
            }
        } else {
            if ("A23456789".includes(cardA.rank)){
                switch (cardA.rank){
                    case "A": tarotID += "temperance"; break;
                    case "2": tarotID += "devil"; break;
                    case "3": tarotID += "tower"; break;
                    case "4": tarotID += "star"; break;
                    case "5": tarotID += "moon"; break;
                    case "6": tarotID += "sun"; break;
                    case "7": tarotID += "judgement"; break;
                    case "8": tarotID += "world"; break;
                    case "9": tarotID += "fool"; break;             
                }
            } else {
                switch (cardA.rank){
                    case "10": tarotID += "Pp"; break;
                    case "J": tarotID += "Pc"; break;
                    case "Q": tarotID += "Pw"; break;
                    case "K": tarotID += "Ps"; break;
                }
            }
        }
    }

    if (((cardA.color == "red")&&(!tarotID.includes("P")))
        ||(tarotID.includes("P")&&(cardB.suit == "clubs"))) {
        tarotID += "_r";
    }

    console.log("Tarot ID:", tarotID);
    tarot = (new CSVreader("tarots")).getTarotCardByID(tarotID);
    return tarot;
}

async function generateQuestion() {
  // random ints 1–52
  const a = Math.floor(Math.random() * 52) + 1;
  const b = Math.floor(Math.random() * 52) + 1;
  const c = Math.floor(Math.random() * 52) + 1;

  const reader = new CSVreader("cards");

  const cardA = reader.getCard(a);
  const cardB = reader.getCard(b);
  const cardC = reader.getCard(c);

  const tarot = getAnswer(cardA, cardB, cardC);

  return new Question(cardA, cardB, cardC, tarot);
}
