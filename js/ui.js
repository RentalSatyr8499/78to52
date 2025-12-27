function displayQuestion(question) {
    document.getElementById("cardAContainer").innerHTML = `
        <img src="resources/images/cards/${question.cardA.id}.png" alt="Card A">
    `;
    document.getElementById("cardBContainer").innerHTML = `
        <img src="resources/images/cards/${question.cardB.id}.png" alt="Card B">
    `;
    document.getElementById("cardCContainer").innerHTML = `
        <img src="resources/images/cards/${question.cardC.id}.png" alt="Card C">
    `;

    tarotImage = "resources/images/tarot/";
    if (question.tarot.reversed) {
        tarotImage += question.tarot.id.slice(0, -2);
    } else {
        tarotImage += question.tarot.id;
    }
    tarotImage += ".png";
    document.getElementById("tarotImageContainer").innerHTML = `
    <img 
        src="${tarotImage}" 
        alt="Tarot Card"
        class="${question.tarot.reversed ? 'reversed' : ''}"
    >
    `;

    document.getElementById("tarotName").innerText = question.tarot.name;
    document.getElementById("tarotDescription").innerText = question.tarot.description;
}

// Hook up buttons
document.getElementById("showBtn").addEventListener("click", async () => {
    const questionContainer = document.getElementById("container1");
    const answerContainer = document.getElementById("container2");
    if (questionContainer.style.display == "flex") {
        questionContainer.style.display = "none";
        answerContainer.style.display = "flex";
    } else {
        questionContainer.style.display = "flex";
        answerContainer.style.display = "none";
    }
})

document.getElementById("againBtn").addEventListener("click", async () => {
  document.getElementById("container2").style.display = "none";
  document.getElementById("container1").style.display = "flex";
  q = await generateQuestion();
  displayQuestion(q);
});
