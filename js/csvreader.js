class CSVreader {
  constructor(scriptTagId) { 
    const raw = document.getElementById(scriptTagId).textContent.trim(); this.rows = raw.split("\n").map(r => r.split(","));
   }

  getCard(id) {
    // assumes card rows start at index 1 (skip header)
    const row = this.rows[id]; 
    if (!row) return null;

    const [idStr, rank, suit, color] = row;
    return new Card(rank, suit, color, Number(idStr));
  }

  getTarotCardByID(id) {
    // Find the row where the first column matches the string ID
    const row = this.rows.find(r => r[0] === id);

    if (!row) {
      return null;
    }

    const [idStr, name, description] = row;

    return new Tarot(
      idStr,
      name,
      description,
      idStr.includes("_r")   // reversed flag
    );
  }
}
