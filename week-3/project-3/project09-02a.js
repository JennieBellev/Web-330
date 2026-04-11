"use strict";

/*    JavaScript 7th Edition
      Chapter 9
      Hands-on Project 9-2

      Author: Jennifer Snyder
      Date:   04/10/2026

      Filename: project09-02a.js
*/

function showData() {
  sessionStorage.setItem("riderName", document.getElementById("riderName").value);
  sessionStorage.setItem("ageGroup", document.getElementById("ageGroup").value);
  sessionStorage.setItem("bikeOption", document.getElementById("bikeOption").value);
  sessionStorage.setItem("routeOption", document.getElementById("routeOption").value);
  sessionStorage.setItem("accOption", document.getElementById("accOption").value);
  sessionStorage.setItem("region", document.getElementById("region").value);
  sessionStorage.setItem("miles", document.getElementById("miles").value);
  sessionStorage.setItem("comments", document.getElementById("comments").value);

  location.href = "project09-02b.html";
}

document.getElementById("submitButton").onclick = showData;