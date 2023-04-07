const urlDecode = function(text) {
  let outputObj = {};
  let leftDelimPos = -1; // position of char to the left of beginning of text, or last &, whichever is first, used for left bound of key
  let rightDelimPos;
  for (let i = 0; i < text.length; i++) {
    let key;
    let value;
    switch (text[i]) {
    case '=':
      for (rightDelimPos = i; rightDelimPos < text.length; rightDelimPos++) { // make rightDelimPos go to the first '&' char or end of text, used for right bound of value
        if (text[rightDelimPos] === '&') {
          break;
        }
      }
      key = text.substring(leftDelimPos + 1, i);
      value = text.substring(i + 1, rightDelimPos);

      // parse value, converting "%20" into " "
      for (let i = 0; i < value.length; i++) {
        if (value.substring(i, i + 3) === "%20") {
          value = value.substring(0, i) + " " + value.substring(i + 3, value.length);
          //i -= 2; // move i 2 steps back due to replacement of "%20" with " " resulting in 2 less characters ...but i hasn't moved past the first char yet so it doesn't need to move 2 steps back
        }
      }
      outputObj[key] = value;
      i = rightDelimPos - 1; // jump to the next key-value pair
      break;
    case '&':
      leftDelimPos = i;
      break;
    default:
      break;
    }
  }
  return outputObj;
};

console.log(urlDecode("duck=rubber"));
console.log(urlDecode("bootcamp=Lighthouse%20Labs"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain").weather);