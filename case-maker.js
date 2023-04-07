const camelCase = function(input) {
  // while there are chars after the current index, go to the next space, then remove the space using splice and make the letter after it (that has shifted to where the space is) uppercase (as it is given that there is a word there)
  // actually, splice doesn't exist for strings and slice seems like it works like substring. So, will remove the space as part of the assignment: input = input.substring(0, i) + input[i+1].toUpperCase() + input.substring(i+1, input.length);
  // built-in helper functions that could otherwise be used (other than splice) are split(?), and indexOf IIRC. However, will not use these helper functions. Will use substring though?
  // It seems inefficient to not rely on built-in helper functions as far as I can tell for strings.
  // So, I think it is worth using looping for whatever wouldn't make the code less efficient (as far as I can tell), so can do that and use e.g. substring or substr or slice
  for (let i = 0; i < input.length; i++) {
    if (input[i] === ' ') {
      input = input.substring(0, i) + input[i + 1].toUpperCase() + input.substring(i + 2, input.length);
    }
  }
  return input;
};
console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));