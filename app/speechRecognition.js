const guessElement = document.getElementById("guess");

window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;
// const SpeechGrammarList = window.SpeechGrammarList || webkitSpeechGrammarList;
// const SpeechRecognitionEvent =
//   window.SpeechRecognitionEvent || webkitSpeechRecognitionEvent;

const recognition = new SpeechRecognition();

recognition.lang = "en";
recognition.start();

recognition.addEventListener("result", onSpeak);

function onSpeak(event) {
  //   console.log(event.results[0][0].transcript);
  //   console.log(event.target);
  //   console.log(event.target.lang);
  //   console.log(event.results.lang);
  const attemptedNumber = event.results[0][0].transcript;
  showAttemptedNumber(attemptedNumber);
  validateAttempts(attemptedNumber);
}

function showAttemptedNumber(attemptedNumber) {
  guessElement.innerHTML = `
    
    <div>You try:</div> 
    <span class="box">${attemptedNumber}</span>
    `;
}

recognition.addEventListener("end", () => {
  recognition.start();
});
