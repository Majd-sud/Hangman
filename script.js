// Array of possible words for the game
const words = ["cyber", "matrix", "neon", "system", "hacker"];

// Select a random word from the array
let word = words[Math.floor(Math.random() * words.length)];

// Array to store correctly guessed letters
let guessed = [];

// Array to store incorrectly guessed letters
let wrong = [];

// Function to display the word with guessed letters and underscores
function displayWord() {
    document.getElementById("word").textContent =
        word.split("") // Split word into letters
            .map(l => guessed.includes(l) ? l : "_") // Show letter if guessed, otherwise "_"
            .join(" "); // Join letters with spaces
}

// Function to handle user guesses
function guess() {
    const input = document.getElementById("input"); // Get input field
    const letter = input.value.toLowerCase(); // Convert input to lowercase
    input.value = ""; // Clear input field

    // If input is empty, do nothing
    if (!letter) return;

    // Check if the guessed letter is in the word
    if (word.includes(letter)) {
        // Add to guessed letters if not already included
        if (!guessed.includes(letter)) guessed.push(letter);
    } else {
        // Add to wrong letters if not already included
        if (!wrong.includes(letter)) wrong.push(letter);
    }

    // Update the game state
    update();
}

// Function to update the UI and check game status
function update() {
    displayWord(); // Refresh displayed word

    // Display wrong guesses
    document.getElementById("wrong").textContent = wrong.join(" ");

    // Check losing condition (6 wrong guesses)
    if (wrong.length >= 6) {
        document.getElementById("status").textContent = "SYSTEM FAILURE 💀";
    }

    // Check winning condition (all letters guessed)
    if (word.split("").every(l => guessed.includes(l))) {
        document.getElementById("status").textContent = "ACCESS GRANTED 🟢";
    }
}

// Initial call to display the hidden word when the game loads
displayWord();