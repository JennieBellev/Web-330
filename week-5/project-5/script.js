/*
  Pragmatic JavaScript
  Chapter 2
  Programming Assignment

  Author: Jennifer Snyder
  Date: 04/26/2026
  Filename: script.js
*/

// Create an in-memory object array for each table in the restaurant
let tables = [
  // Add your table objects here
  { tableNumber: 1, capacity: 2, isReserved: false },
  { tableNumber: 2, capacity: 4, isReserved: false },
    { tableNumber: 3, capacity: 2, isReserved: false },
    { tableNumber: 4, capacity: 6, isReserved: false },
    { tableNumber: 5, capacity: 4, isReserved: false },
  ];

// Create a function reserveTable
function reserveTable(tableNumber, callback, time) {
  // Add your code here
  const table = tables.find((t) => t.tableNumber === tableNumber);
  if (table && !table.isReserved) {
    table.isReserved = true;
    setTimeout(() => {
      callback(`Success! Table ${tableNumber} is now reserved.`);
    }, time);
  } else {
    setTimeout(() => {
      callback(`Error: Table ${tableNumber} is not available for reservation.`);
    }, time);
  }
}
// When the form is submitted, call the reserveTable function
document
  .getElementById("reservationForm")
  .addEventListener("submit", function (e) {

  });

  // Form and the Message Display on the Page
  const reservationForm = document.getElementById("reservationForm");
  const messageElement = document.getElementById("message");
  // Stop the page from refreshing when the form is submitted
  reservationForm.addEventListener("submit", function (e) {
    e.preventDefault();

    // Get the table number from the form input
    const guestName = document.getElementById('name').value;
    const tableNumber = parseInt(document.getElementById("tableNumber").value);

    // Call the reserveTable function with a callback to display the message
    reserveTable(tableNumber, function (message) {
      messageElement.innerText = `${guestName}, ${message}`;

      // Message based on the success or error
      messageElement.style.color = message.includes("Success") ? "#2d5a27" : "#d9534f";
    }, 2000);
  });