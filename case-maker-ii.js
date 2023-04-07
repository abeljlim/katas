const isDesiredValue = function(valuesMap, value) {
  //console.log("valuesMap["+value+"]: " + valuesMap[value]); // tinker to verify that unassigned key accesses return undefined (which is falsy); seen with upper, it seems they do.
  return valuesMap[value]; // returns true, or undefined which is falsy
};

const makeCase = function(input, caseType) { // case was not an allowed parameter name according to VSCode, so changed to caseType
  // Put your solution here
  /*
  Precedence of each of the casing styles are as follows, values higher in the list should be processed first:
  camel, pascal, snake, kebab, title // Can multiple of these casing styles be done at once? Well, camel and snake seem incompatible ... and same with title and pascal ... so, will do only one of these casing styles per precedence line.
  vowel, consonant
  upper, lower
  */
  let currentCasingStyle = caseType;

  // Process the first casing style
  // If the input is an array, find the first instance of the first casing style in the array and make that currentCasingStyle; otherwise, set currentCasingStyle to the non-array input
  if (Array.isArray(caseType)) {
    let desiredValues = {
      camel: true,
      pascal: true,
      snake: true,
      kebab: true,
      title: true
    };
    for (let i = 0; i < caseType.length; i++) {
      if (isDesiredValue(desiredValues, caseType[i])) {
        currentCasingStyle = caseType[i];
        break;
      }
    }
  }
  switch (currentCasingStyle) {
  case "camel":
    for (let i = 0; i < input.length; i++) {
      if (input[i] === ' ') {
        input = input.substring(0, i) + input[i + 1].toUpperCase() + input.substring(i + 2, input.length);
      }
    }
    break;
  case "pascal":
    input = input[0].toUpperCase() + input.substring(1, input.length);
    for (let i = 0; i < input.length; i++) {
      if (input[i] === ' ') {
        input = input.substring(0, i) + input[i + 1].toUpperCase() + input.substring(i + 2, input.length);
      }
    }
    break;
  case "snake":
    for (let i = 0; i < input.length; i++) {
      if (input[i] === ' ') {
        input = input.substring(0, i) + "_" + input.substring(i + 1, input.length);
      }
    }
    break;
  case "kebab":
    for (let i = 0; i < input.length; i++) {
      if (input[i] === ' ') {
        input = input.substring(0, i) + "-" + input.substring(i + 1, input.length);
      }
    }
    break;
  case "title":
    input = input[0].toUpperCase() + input.substring(1, input.length);
    for (let i = 0; i < input.length; i++) {
      if (input[i] === ' ') {
        input = input.substring(0, i) + " " + input[i + 1].toUpperCase() + input.substring(i + 2, input.length);
      }
    }
    break;
  }

  // Process the second casing style
  if (Array.isArray(caseType)) {
    let desiredValues = {
      vowel: true,
      consonant: true
    };
    for (let i = 0; i < caseType.length; i++) {
      if (isDesiredValue(desiredValues, caseType[i])) {
        currentCasingStyle = caseType[i];
        break;
      }
    }
  }
  switch (currentCasingStyle) {
  case "vowel":
    for (let i = 0; i < input.length; i++) {
      if (input[i] === 'a' || input[i] === 'e' || input[i] === 'i' || input[i] === 'o' || input[i] === 'u') {
        input = input.substring(0, i) + input[i].toUpperCase() + input.substring(i + 1, input.length);
      }
    }
    break;
  case "consonant":
    for (let i = 0; i < input.length; i++) {
      if (!(input[i] === 'a' || input[i] === 'e' || input[i] === 'i' || input[i] === 'o' || input[i] === 'u')) {
        input = input.substring(0, i) + input[i].toUpperCase() + input.substring(i + 1, input.length);
      }
    }
    break;
  }

  // Process the third casing style
  if (Array.isArray(caseType)) {
    let desiredValues = {
      upper: true,
      lower: true
    };
    for (let i = 0; i < caseType.length; i++) {
      if (isDesiredValue(desiredValues, caseType[i])) {
        currentCasingStyle = caseType[i];
        break;
      }
    }
  }
  
  switch (currentCasingStyle) {
  case "upper":
    input = input.toUpperCase();
    break;
  case "lower":
    input = input.toLowerCase();
    break;
  }

  return input;
};
console.log(makeCase("this is a string", "camel")); // thisIsAString
console.log(makeCase("this is a string", "pascal")); // ThisIsAString
console.log(makeCase("this is a string", "snake")); // this_is_a_string
console.log(makeCase("this is a string", "kebab")); // this-is-a-string
console.log(makeCase("this is a string", "title")); // This Is A String
console.log(makeCase("this is a string", "vowel")); // thIs Is A strIng
console.log(makeCase("this is a string", "consonant")); // THiS iS a STRiNG
console.log(makeCase("this is a string", ["upper", "snake"])); // THIS_IS_A_STRING