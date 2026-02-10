const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const questionText = document.getElementById('questionText');
const mainImage = document.getElementById('mainImage');

let yesSize = 18; 
let noSize = 14; 
let paddingYes = 15;

const phrases = [
    "Ні? Я ж у тебе така сама красива",
    "Ти впевненa?",
    "А якщо я попрошу дуже ввічливо?",
    "Подумай ще раз...",
    "Ну будь ласкаааа",
    "Я тебе почмокаю(",
    "Ти розбиваєш мені серце 💔"
];
let phraseIndex = 0;

noBtn.addEventListener('click', () => {
    yesSize += 15; 
    paddingYes += 10; 
    yesBtn.style.fontSize = yesSize + 'px';
    yesBtn.style.padding = `${paddingYes}px ${paddingYes * 1.5}px`;

    noSize = Math.max(5, noSize - 2); 
    noBtn.style.fontSize = noSize + 'px';
    noBtn.style.opacity = noSize / 14; 

    phraseIndex = (phraseIndex + 1) % phrases.length;
    noBtn.innerText = phrases[phraseIndex];
});

yesBtn.addEventListener('click', () => {
    document.body.innerHTML = `
        <div class="container">
            <img src="Знімок екрана 2026-02-10 о 16.58.43.png" class="main-image">
            <h1 style="color: #ff4d6d;">УРААА! Я знала ❤️❤️❤️</h1>
        </div>
    `;
});