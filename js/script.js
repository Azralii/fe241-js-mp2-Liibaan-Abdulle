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

// Funktion för att frysa poäng
function frysPoäng() {
    totalPoäng += omgångPoäng;
    omgångPoäng = 0;
    totalPoängEl.innerText = `Total poäng: ${totalPoäng}`;
    omgångPoängEl.innerText = `Omgångens poäng: ${omgångPoäng}`;
    avslutaOmgång();

    if (totalPoäng >= 100) {
        popupEl.innerText = `Grattis ${spelarensNamn}! Du vann på ${omgångar} omgångar.`;
        setTimeout(resetGame, 3000); // Starta om spelet efter 3 sekunder
    }
}

// Funktion för att avsluta omgången
function avslutaOmgång() {
    omgångar++;
    omgångarEl.innerText = `Antal omgångar: ${omgångar}`;
}

// Funktion för att återställa spelet
function resetGame() {
    totalPoäng = 0;
    omgångPoäng = 0;
    omgångar = 0;
    totalPoängEl.innerText = `Total poäng: ${totalPoäng}`;
    omgångPoängEl.innerText = `Omgångens poäng: ${omgångPoäng}`;
    omgångarEl.innerText = `Antal omgångar: ${omgångar}`;
    tärningEl.innerText = '';
    popupEl.innerText = 'Spelet är återställt!';
}

// Funktion för att spara spelarens namn
namnForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Förhindra att formuläret skickas och sidan laddas om
    spelarensNamn = namnInput.value.trim(); // Hämta spelarens namn från inputfältet
    if (spelarensNamn !== "") {
        popupEl.innerText = `Spelarens namn är: ${spelarensNamn}`;
    } else {
        popupEl.innerText = "Ange ett namn för att börja spela!";
    }
    namnForm.reset(); // Återställ formuläret efter namn är sparat
});

// Lägg till event listeners för knapparna
kastaBtn.addEventListener('click', kastaTärning);
frysBtn.addEventListener('click', frysPoäng);
resetBtn.addEventListener('click', resetGame);

// Starta spelet
resetGame();
