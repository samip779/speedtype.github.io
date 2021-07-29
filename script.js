const word = document.getElementById("word");
const text = document.getElementById("text");
const scoreEl = document.getElementById("score");
const timeEl = document.getElementById("time");
const endgameEl = document.getElementById("end-game-container");
const settingsBtn = document.getElementById("settings-btn");
const settings = document.getElementById("settings");
const settingsForm = document.getElementById("settings-form");
const difficultySelect = document.getElementById("difficulty");

// list of words
const words = [
  "sigh",
  "tense",
  "airplane",
  "ball",
  "pies",
  "juice",
  "warlike",
  "bad",
  "north",
  "dependent",
  "steer",
  "silver",
  "highfalutin",
  "superficial",
  "quince",
  "eight",
  "feeble",
  "admit",
  "drag",
  "loving",
  "agriculture",
  "infrastructure",
  "surreal",
  "Anachronistic",
  "clamor",
  "callous",
  "disparate",
  "subham",
  "sushant",
  "kalsoneto",
];

let ramdomWord;

let score = 0;

let time = 10;

// focus on tet on start
text.focus();

// start counting dows
const timeInterval = setInterval(updateTime, 1000);

// generate ramdom word from array
function getRandomWord() {
  return words[Math.floor(Math.random() * words.length)];
}

// Add word to dom
function addWordToDOM() {
  randomWord = getRandomWord();
  word.innerHTML = randomWord;
}

// update score
function updateScore() {
  score++;
  scoreEl.innerHTML = score;
}

// update time
function updateTime() {
  time--;
  timeEl.innerHTML = time + "s";
  if (time === 0) {
    clearInterval(timeInterval);
    // end game
    gameOver();
  }
}

// game over. show end screen
function gameOver() {
  endgameEl.innerHTML = `
		<h1>Time ran out </h1>
		<p>Your final score is ${score}</p>
		<button onClick="location.reload()">Reload</button>
	
	`;

  endgameEl.style.display = "flex";
}

addWordToDOM();

// Event listners

text.addEventListener("input", (e) => {
  const insertedText = e.target.value;
  if (insertedText === randomWord) {
    addWordToDOM();
    updateScore();

    // clear
    e.target.value = "";

    time += 3;

    updateTime();
  }
});
