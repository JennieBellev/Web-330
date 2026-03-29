"use strict";
/*    JavaScript 7th Edition
      Chapter 8
      Project 08-01

      Project to create a timer object
      Author: Jennifer Snyder
      Date:   03/29/2026

      Filename: project08-01.js
*/

/*--------------- Object Code --------------------*/
let minBox = document.getElementById("minutesBox");
let secBox = document.getElementById("secondsBox");
let runPauseTimer = document.getElementById("runPauseButton");

function timer(min, sec) {
  this.minutes = min;
  this.seconds = sec;
  this.timeID = null;
}

timer.prototype.runPause = function(timer, minBox, secBox) {
  if (timer.timeID) {
    window.clearInterval(timer.timeID);
    timer.timeID = null;
  } else {
    timer.timeID = window.setInterval(countdown, 1000);
  }

  function countdown() {
    if (timer.seconds > 0) {
      timer.seconds--;
    } else if (timer.minutes > 0) {
      timer.minutes--;
      timer.seconds = 59;
    } else {
      window.clearInterval(timer.timeID);
      timer.timeID = null;
    }

    minBox.value = timer.minutes;
    secBox.value = timer.seconds;
  }
};

let myTimer = new timer(Number(minBox.value), Number(secBox.value));

minBox.onchange = function() {
  myTimer.minutes = Number(minBox.value);
};

secBox.onchange = function() {
  myTimer.seconds = Number(secBox.value);
};

runPauseTimer.onclick = function() {
  myTimer.runPause(myTimer, minBox, secBox);
};