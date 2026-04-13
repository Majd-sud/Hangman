const words = ["cyber", "matrix", "neon", "system", "hacker"];

let word = words[Math.floor(Math.random() * words.length)];
let guessed = [];
let wrong = [];

function displayWord() {
    document.getElementById("word").textContent =
        word.split("")
            .map(l => guessed.includes(l) ? l : "_")
            .join(" ");
}

function guess() {
    const input = document.getElementById("input");
    const letter = input.value.toLowerCase();
    input.value = "";

    if (!letter) return;

    if (word.includes(letter)) {
        if (!guessed.includes(letter)) guessed.push(letter);
    } else {
        if (!wrong.includes(letter)) wrong.push(letter);
    }

    update();
}

function update() {
    displayWord();

    document.getElementById("wrong").textContent = wrong.join(" ");

    if (wrong.length >= 6) {
        document.getElementById("status").textContent = "SYSTEM FAILURE 💀";
    }

    if (word.split("").every(l => guessed.includes(l))) {
        document.getElementById("status").textContent = "ACCESS GRANTED 🟢";
    }
}

displayWord();