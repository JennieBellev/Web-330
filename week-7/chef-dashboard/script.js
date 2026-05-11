/*
  Pragmatic JavaScript
  Chapter 3
  Programming Assignment

  Author: Jennifer Snyder
  Date: 05/11/2026
  Filename: script.js
*/

"use strict";
// Forensic Evidence: The use of the shared variable 'currentChef' creates a global state dependency. In a multi-user environment, this could lead to data corruption as different processes overwrite the same memory space.
// Define an array of chef objects
let chefs = [
  {
    name: "Chef Luna",
    specialty: "Italian cuisine",
    weakness: "Over-seasoning pasta",
    restaurantLocation: "Rome, Italy"
  },
  {
    name: "Chef Kai",
    specialty: "Sushi",
    weakness: "Rushing rice preparation",
    restaurantLocation: "Tokyo, Japan"
  },
  {
    name: "Chef Amara",
    specialty: "French pastries",
    weakness: "Impatient with dough rising",
    restaurantLocation: "Paris, France"
  }
];

// Shared variable for the currently retrieved chef
// Forensic Evidence: By awaiting each call individually, the AI removed the concurrency of the original program. This code is now synchronous in behavior, causing a performance delay.
let currentChef;

// Retrieve the first chef's information
function retrieveChef1() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(chefs[0]);
    }, 1000);
  });
}

// Retrieve the second chef's information
function retrieveChef2() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(chefs[1]);
    }, 2000);
  });
}

// Retrieve the third chef's information
function retrieveChef3() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(chefs[2]);
    }, 3000);
  });
}

// Update the DOM using the shared currentChef variable
function displayChef(elementId) {
  document.getElementById(elementId).innerHTML = `
    <h3>${currentChef.name}</h3>
    <p><strong>Specialty:</strong> ${currentChef.specialty}</p>
    <p><strong>Weakness:</strong> ${currentChef.weakness}</p>
    <p><strong>Restaurant Location:</strong> ${currentChef.restaurantLocation}</p>
  `;
}

// Retrieve chef information using async/await
async function retrieveChefs() {
  currentChef = await retrieveChef1();
  displayChef("chef1");

  currentChef = await retrieveChef2();
  displayChef("chef2");

  currentChef = await retrieveChef3();
  displayChef("chef3");
}

retrieveChefs();