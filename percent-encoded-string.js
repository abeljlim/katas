const urlEncode = function(text) {
  // Remove leading and trailing whitespaces
  // Could use text.trim(), but it seems like we're avoiding array functions and the string replace function in favour of looping, so it seems like we want to do loops instead of using functions for the sake of practicing looping and thinking through problems that way. So, will use a loop approach.

  // Find first char, and last char
  let firstCharPosn, lastCharPosn;

  // Find first char that is not a space
  for (let i = 0; i < text.length; i++) {
    if (text[i] !== ' ') {
      firstCharPosn = i;
      break;
    }
  }

  // Find last char that is not a space
  for (let i = text.length - 1; i >= 0; i--) {
    if (text[i] !== ' ') {
      lastCharPosn = i;
      break;
    }
  }
  let percentEncodedStr = "";
  //console.log("f: "+firstCharPosn+"; l: "+lastCharPosn);
  // Add %20 instead of a space in copying the text substring (from firstCharPosn to lastCharPosn) over to percentEncodedStr
  for (let i = firstCharPosn; i <= lastCharPosn; i++) {
    if (text[i] === ' ') {
      percentEncodedStr += "%20";
    } else {
      percentEncodedStr += text[i];
    }
  }
  return percentEncodedStr;
};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));