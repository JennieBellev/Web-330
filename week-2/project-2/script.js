/*
  Pragmatic JavaScript
  Chapter 1
  Programming Assignment

  Author: Jennifer Snyder
  Date: 04/01/2026
  Filename: script.js
*/

"use strict";

function createCharacter(name, gender, characterClass) {
return {
  getName: function() {
    return name;
  },
  getGender: function() {
    return gender;
  },
  getClass: function() {
    return characterClass;
  }
};
}

const form = document.getElementById("characterForm");
const output = document.getElementById("characterOutput");

document.getElementById("generateHero").addEventListener("click", function(e) {
  e.preventDefault();

  // Get form values
const name = document.getElementById("heroName").value;
const gender = document.getElementById("heroGender").value;
const characterClass = document.getElementById("heroClass").value;

// Create character
const character = createCharacter(name, gender, characterClass);

//Display character information
output.innerHTML = `
 <h2>Your Character</h2>
 <p>Name: ${character.getName()}</p>
 <p>Gender: ${character.getGender()}</p>
 <p>Class: ${character.getClass()}</p>
`;
});