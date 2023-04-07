let prompt = require("prompt-sync")();

// code below (replace this example)
let numberToGuess = Math.floor(Math.random()*101);

let answer;
let prevAnswers = [];
let countNumAnswers = 0;
while(parseInt(answer = prompt("Guess a number: ")) !== numberToGuess) {
  if(Number.isNaN(parseInt(answer))) {
    console.log("Not a number! Try again!");
  }
  else if(parseInt(answer) > numberToGuess) {
    console.log("Too High!");
  } 
  else if (parseInt(answer) < numberToGuess) {
    console.log("Too Low!")
  }

  // if the answer was already used before, then don't count it
  let alreadyAnswered = false;
  for(let prevAnswer of prevAnswers) {
    if(prevAnswer === answer) {
      alreadyAnswered = true;
      break;
    }
  }
  if(!alreadyAnswered && !(Number.isNaN(parseInt(answer)))) { // new valid answer
    countNumAnswers++;
    prevAnswers.push(answer);
  }
}
countNumAnswers++; // increment for the correct answer
console.log("You got it! You took "+countNumAnswers+" attempts!");