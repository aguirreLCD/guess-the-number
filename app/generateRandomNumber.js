// console.log("here");

const lowerValue = 1;
const highestValue = 100;
const secretNumber = generateRandomNumber();

function generateRandomNumber() {
  return parseInt(Math.random() * highestValue + 1);
}

console.log("secret number: ", secretNumber);

// lower
const lowerElement = document.getElementById("lower-value");
lowerElement.innerHTML = lowerValue;

// higher
const highestElement = document.getElementById("highest-value");
highestElement.innerHTML = highestValue;

// https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API
