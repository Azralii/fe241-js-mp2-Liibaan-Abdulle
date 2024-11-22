let totalPoäng = 0, omgångPoäng = 0, omgångar = 0, spelarensNamn = "";

// Hämta element från HTML
const kastaBtn = document.querySelector('#kastaBtn');
const frysBtn = document.querySelector('#frysBtn');
const resetBtn = document.querySelector('#resetBtn');
const totalPoängEl = document.querySelector('#totalPoäng');
const omgångPoängEl = document.querySelector('#omgångPoäng');
const omgångarEl = document.querySelector('#omgångar');
const tärningEl = document.querySelector('#tärning');
const popupEl = document.querySelector('#popup');
const namnForm = document.querySelector('#namnForm');
const namnInput = document.querySelector('#namnInput');

// Funktion för att slumpa tärningen (slår mellan 1 och 6)
function slumpTärning() {
    return Math.floor(Math.random() * 6) + 1;
}

// Funktion för att kasta tärningen
function kastaTärning() {
    if (omgångPoäng === 0 && omgångar === 0) omgångar++; // Första kastet startar omgången

    let tärning = slumpTärning();
    tärningEl.innerText = `Tärningen visar: ${tärning}`;

    if (tärning === 1) {
        omgångPoäng = 0;
        popupEl.innerText = 'Du slog en etta! Omgången avslutas.';
        avslutaOmgång();
    } else {
        omgångPoäng += tärning;
        omgångPoängEl.innerText = `Omgångens poäng: ${omgångPoäng}`;
    }
}