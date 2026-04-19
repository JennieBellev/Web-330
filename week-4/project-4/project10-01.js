"use strict";
/*    JavaScript 7th Edition
      Chapter 10
      Project 10-01

      Project to create a drag and drop jigsaw puzzle
      Author:Jennifer Snyder
      Date:04/18/2026

      Filename: project10-01.js
*/

// Reference to the puzzle board
let puzzleBoard = document.getElementById("puzzleBoard");
// Counter for the zIndex style of each puzzle piece
let zCounter = 1;
// Array of integers from 1 to 48
let intList = new Array(48);
// pointerX and pointerY will contain the initial coordinates of the pointerX
// pieceX and pieceY will contain the initial coordinates of a puzzle piece
let pointerX, pointerY, pieceX, pieceY;

// Sort the integers from 1 to 48 in random order
for (let i = 0; i < 48 ; i++) {
   intList[i] = i+1;
}
intList.sort(function() {
   return 0.5 - Math.random();
});

// generate randomly-sorted puzzle pieces
for (let i = 0; i < 48; i++) {
   let piece = document.createElement("img");
   piece.src = "piece" + intList[i] + ".png";
   let rowNum = Math.ceil((i+1)/8);
   let colNum = (i + 1) - (rowNum - 1)*8;
   piece.style.top = (rowNum - 1)*98 + 7 + "px";
   piece.style.left = (colNum - 1)*98 + 7 + "px";
   piece.draggable = false; // override the default draggability of images
   puzzleBoard.appendChild(piece);
}

function grabPiece(e) {
  // 1.Grab the current pointer coordinates
  pointerX = e.clientX;
  pointerY = e.clientY;

  // 2. Prevent the page from sliding around while we move each piece
  e.target.style.touchAction = "none";

  // 3. Move this piece to the very front of the pile
  zCounter++;
  e.target.style.zIndex = zCounter;

  // 4. Record where the piece is sitting on the board currently
  pieceX = e.target.offsetLeft;
  pieceY = e.target.offsetTop;

  // 5. Add the "Move" and "Drop" event listeners to the puzzle board
  e.target.addEventListener("pointermove", movePiece);
  e.target.addEventListener("pointerup", dropPiece);
}

function movePiece(e) {
  // Calculate how far the pointer has moved
  let diffX = e.clientX - pointerX;
  let diffY = e.clientY - pointerY;

  // Move the piece by that same distance
  e.target.style.left = pieceX + diffX + "px";
  e.target.style.top = pieceY + diffY + "px";
}

function dropPiece(e) {
  // Remove the "Move" and "Drop" event listeners from the puzzle board
  e.target.removeEventListener("pointermove", movePiece);
  e.target.removeEventListener("pointerup", dropPiece);
}
// Node list representing the puzzle pieces
let pieces = document.querySelectorAll("div#puzzleBoard img");

// Loop through every item in the pieces node list here
for (let i = 0; i < pieces.length; i++) {
  // For each piece, add an event listener for the pointerdown event
  pieces[i].addEventListener("pointerdown", grabPiece);
}