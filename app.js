let secretNumber = 0;
let attemptsCounter = 0;
let secretNumberDrawn = [];
let minRange = 1;
let maxRange = 10;

function initialConditions() {
  secretNumberDrawn = [];
  attemptsCounter = 1;
  assignTextElements("h1", "Secret Number Game");
  assignTextElements("p", `Enter a number from ${minRange} to ${maxRange}`);
  secretNumber = generateSecretNumber(minRange, maxRange);
}

function assignTextElements(tag, text) {
  let elementHTML = document.querySelector(tag);
  elementHTML.innerHTML = text;
}

function generateSecretNumber(minRange = 1, maxRange = 10) {
  let generatedNumber = Math.floor(
    Math.random() * (maxRange - minRange + 1) + minRange
  );

  if (secretNumberDrawn.length === maxRange) {
    assignTextElements("p", "All the secret numbers guessed");
    return;
  } else {
    if (secretNumberDrawn.includes(generatedNumber)) {
      return generateSecretNumber();
    } else {
      secretNumberDrawn.push(generatedNumber);
      console.log(secretNumberDrawn);
      return generatedNumber;
    }
  }
}

function clearBox() {
  document.querySelector("#userValue").value = "";
}

function verifyAttempt() {
  let userNumber = parseInt(document.getElementById("userValue").value);

  console.log(secretNumber);

  if (userNumber === secretNumber) {
    assignTextElements(
      "p",
      `YOU WON, YOU GUESSED THE NUMBER IN ${attemptsCounter} ATTEMPSTS`
    );

    document.getElementById("restart").removeAttribute("disabled");
  } else {
    if (userNumber > secretNumber) {
      assignTextElements("p", "The guess number is less");
    } else {
      assignTextElements("p", "The guess number is greater");
    }

    attemptsCounter++;
  }

  clearBox();
}

function restartGame() {
  initialConditions();
  document.getElementById("restart").setAttribute("disabled", "true");
}

initialConditions();
