"use strict";

/*    JavaScript 7th Edition
      Chapter 9
      Hands-on Project 9-2

      Author: Jennifer Snyder
      Date:   04/10/2026

      Filename: project09-02b.js
*/

document.getElementById("riderName").textContent =
  sessionStorage.getItem("riderName");

document.getElementById("ageGroup").textContent =
  sessionStorage.getItem("ageGroup");

document.getElementById("bikeOption").textContent =
  sessionStorage.getItem("bikeOption");

document.getElementById("routeOption").textContent =
  sessionStorage.getItem("routeOption");

document.getElementById("accOption").textContent =
  sessionStorage.getItem("accOption");

document.getElementById("region").textContent =
  sessionStorage.getItem("region");

document.getElementById("miles").textContent =
  sessionStorage.getItem("miles");

document.getElementById("comments").textContent =
  sessionStorage.getItem("comments");