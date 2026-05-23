// Array of objects representing the plants
const myPlants = [
    { id: 1, name: "Fern", type: "Fern", condition: "Dry" },
    { id: 2, name: "Spike", type: "Cactus", condition: "Dry" },
    { id: 3, name: "Lily", type: "Peace Lily", condition: "Dry" }
];

// Display information on the web page using the DOM
function displayGarden(plants) {
    const displayArea = document.getElementById("displayArea");
    displayArea.innerHTML = "";

    plants.forEach(plant => {
        const card = document.createElement("div");
        card.className = "plant-card";
        card.innerHTML = `<h3>${plant.name}</h3><p>Type: ${plant.type}</p><p>Status: <strong>${plant.condition}</strong></p>`;
        displayArea.appendChild(card);
    });
}

// Simulated Asynchronous Operation with a delay
function simulateWatering() {
    return new Promise((resolve, reject) => {
        const workingFine = true;

        setTimeout(() => {
            if (workingFine) {
                resolve("The plants have absorbed the water successfully!");
            } else {
                reject("Error: The irrigation system is clogged!");
            }
        }, 1500);
    });
}

// Orchestrating function enforcing execution order
async function handleWateringProcess() {
    const statusMsg = document.getElementById("statusMsg");
    const button = document.getElementById("water-all-btn");

    button.disabled = true;
    statusMsg.innerText = "Watering in progress... please wait.";

    try {
        const result = await simulateWatering();

        myPlants.forEach(plant => plant.condition = "Healthy & Hydrated");
        displayGarden(myPlants);
        statusMsg.innerText = result;
    } catch (error) {
        statusMsg.style.color = "red";
        statusMsg.innerText = error;
    } finally {
        button.disabled = false;
    }
}

// Run setup instantly on page load
document.addEventListener("DOMContentLoaded", () => {
    displayGarden(myPlants);
    document.getElementById("water-all-btn").addEventListener("click", handleWateringProcess);
});