function validateAttempts(attemptedNumber) {
  const number = +attemptedNumber;

  if (invalidAttempt(number)) {
    // console.log("Invalid value");

    if (attemptedNumber.toUpperCase() === "GAME OVER") {
      document.body.innerHTML = `
      <h2>Game Over!!!</h2>
      <h3>Press the button to play again</h3>
      <button id="play-again" class="btn-play">Play again</button>

      
      `;
      document.body.style.backgroundColor = "black";
    } else {
      guessElement.innerHTML += `<div>Invalid value</div>`;
      return;
    }
  }

  if (validateRange(number)) {
    // console.log(
    //   `Value out of range: Secret number is between ${lowerValue} and ${highestValue}`
    // );

    guessElement.innerHTML += `
    <div>
    Value out of range: Secret number is between ${lowerValue} and ${highestValue}
    </div>`;
    return;
  }

  if (number === secretNumber) {
    document.body.innerHTML = `
    <h2>That's Correct! Yow won!</h2>
    <h3>Secret Number = ${secretNumber}</h3> 
    <button id="play-again" class="btn-play">Play again</button>   
    `;
  } else if (number < secretNumber) {
    guessElement.innerHTML += `
    <div>
    Too low! The secret number is bigger
    <i class="fa-solid fa-arrow-up"></i>
    </div>`;
  } else {
    guessElement.innerHTML += `
    <div>
        Too high! The secret number is smaller
        <i class="fa-solid fa-arrow-down"></i>
      </div>`;
  }
}

function invalidAttempt(number) {
  return Number.isNaN(number);
}

function validateRange(number) {
  return number > highestValue || number < lowerValue;
}

document.body.addEventListener("click", (event) => {
  if (event.target.id === "play-again") {
    window.location.reload();
  }
});
