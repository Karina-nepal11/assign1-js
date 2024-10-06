// Assignment 1 | COMP1073 Client-Side JavaScript

/* Variables
-------------------------------------------------- */
var synth = window.speechSynthesis;
var textToSpeak = ""; // Empty string for generated story

// Arrays for each word category
var nouns = ["The turkey", "mom", "Dad", "The dog", "My teacher", "The elephant", "The car"];
var verbs = ["sat on", "ate", "danced with", "saw", "doesn't like", "kissed"];
var adjectives = ["a funny", "a scary", "a goofy", "a slimy", "a barking", "a fat"];
var secondNouns = ["goat", "monkey", "fish", "frog", "bug", "worm"];
var places = ["on the moon", "on the chair", "in my spaghetti", "in my soup", "on the grass", "in my shoes"];

// Arrays to hold selected words
var nounsArray = [];
var verbsArray = [];
var adjectivesArray = [];
var secondNounsArray = [];
var placesArray = [];

// Buttons
var nounBtn = document.getElementById("nounBtn");
var verbBtn = document.getElementById("verbBtn");
var adjectiveBtn = document.getElementById("adjectiveBtn");
var secondNounBtn = document.getElementById("secondNounBtn");
var placeBtn = document.getElementById("placeBtn");
var speakBtn = document.getElementById("speakBtn");
var randomStoryBtn = document.getElementById("randomStoryBtn");
var resetBtn = document.getElementById("randomStoryBtn"); // This is a duplicate; modify if needed

// To display the story
var storyDiv = document.getElementById("story");

/* Functions
-------------------------------------------------- */
function speakNow() {
    if (textToSpeak.trim() === "") {
        alert("Please create a story before speaking!");
        return;
    }
    var utterThis = new SpeechSynthesisUtterance(textToSpeak);
    synth.speak(utterThis);
}

function getRandomWord(array) {
    return array[Math.floor(Math.random() * array.length)];
}

// Update the displayed story
function updateStoryOutput() {
    storyDiv.textContent = textToSpeak; // Update the story in the HTML
}

// Construct the sentence in the desired order
function updateSentence() {
    textToSpeak = `${nounsArray.join(' ')} ${verbsArray.join(' ')} ${adjectivesArray.join(' ')} ${secondNounsArray.join(' ')} ${placesArray.join(' ')}`.trim();
    updateStoryOutput();
}

// Button functionalities
nounBtn.onclick = function () {
    nounsArray.push(getRandomWord(nouns));
    updateSentence();
};

verbBtn.onclick = function () {
    verbsArray.push(getRandomWord(verbs));
    updateSentence();
};

adjectiveBtn.onclick = function () {
    adjectivesArray.push(getRandomWord(adjectives));
    updateSentence();
};

secondNounBtn.onclick = function () {
    secondNounsArray.push(getRandomWord(secondNouns));
    updateSentence();
};

placeBtn.onclick = function () {
    placesArray.push(getRandomWord(places));
    updateSentence();
};

speakBtn.onclick = function () {
    speakNow();
};

randomStoryBtn.onclick = function () {
    textToSpeak = ""; // Reset the text to speak
    nounsArray = [];
    verbsArray = [];
    adjectivesArray = [];
    secondNounsArray = [];
    placesArray = [];
    updateStoryOutput(); // Clear the story output
};

// Additional function to reset everything
resetBtn.onclick = function () {
    textToSpeak = "";
    nounsArray = [];
    verbsArray = [];
    adjectivesArray = [];
    secondNounsArray = [];
    placesArray = [];
    updateStoryOutput(); // Clear the story output
};

// Initial update to clear the output
updateStoryOutput();
