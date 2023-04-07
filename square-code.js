const squareCode = function(message) {
  // remove spaces
  for (let i = 0; i < message.length; i++) {
    if (message[i] === ' ') {
      message = message.substring(0, i) + message.substring(i + 1);
    }
    // works only when there is only one space to separate each word; otherwise i skips the second space
  }

  // get number of chars per line
  let numCharsPerLine = Math.ceil(Math.sqrt(message.length));

  let squareCodeMsg = "";

  // get char every (num chars per line) chars until the index reaches out of bounds to get the column chars, repeat for the next char etc. until the end of the line is reached
  for (let firstCharOfCol = 0; firstCharOfCol < numCharsPerLine; firstCharOfCol++) {
    for (let i = firstCharOfCol; i < message.length; i += numCharsPerLine) {
      squareCodeMsg += message[i];
    }
    squareCodeMsg += " ";
  }
  return squareCodeMsg.substring(0, squareCodeMsg.length - 1)/* to remove the trailing space */;
};

console.log(squareCode("chill out"));
console.log(squareCode("feed the dog"));
console.log(squareCode("have a nice day"));
console.log(squareCode("if man was meant to stay on the ground god would have given us roots"));