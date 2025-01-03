document.addEventListener("DOMContentLoaded", () => {
  const historyTableBody = document.getElementById("history-table-body");

  fetch("/data/transactions.json")
    .then(response => response.json())
    .then(transactions => {
      transactions.forEach(transaction => {
        const row = document.createElement("tr");
        row.innerHTML = `
          <td>${transaction.transactionId}</td>
          <td>${transaction.card}</td>
          <td>${transaction.type}</td>
          <td>$${transaction.price}</td>
          <td>${transaction.date}</td>
        `;
        historyTableBody.appendChild(row);
      });
    })
    .catch(error => console.error("Error fetching transactions:", error));
});