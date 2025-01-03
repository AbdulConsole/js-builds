document.getElementById("sell-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const newCard = {
    name: this.name.value,
    type: this.type.value,
    value: this.value.value,
    price: parseFloat(this.price.value)
  };

  fetch("/data/cards.json")
    .then(response => response.json())
    .then(cards => {
      cards.push(newCard);

      // Overwrite the JSON file (mock for now).
      console.log("Updated Cards:", JSON.stringify(cards));
      alert("Card successfully added!");
    })
    .catch(error => console.error("Error updating cards:", error));
});