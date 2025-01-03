document.addEventListener("DOMContentLoaded", () => {
  const cardsContainer = document.getElementById("cards-container");

  fetch("/data/cards.json")
    .then(response => response.json())
    .then(cards => {
      cards.forEach(card => {
        const cardElement = document.createElement("div");
        cardElement.className = "card";
        cardElement.innerHTML = `
          <img src="${card.image}" alt="${card.name}">
          <h3>${card.name}</h3>
          <p>Value: ${card.value}</p>
          <p>Price: $${card.price}</p>
          <button>Add to Cart</button>
        `;
        cardsContainer.appendChild(cardElement);
      });
    })
    .catch(error => console.error("Error fetching cards:", error));
});