const conditionalSum = function(values, condition) {
  let sum = 0;
  let remainderToCheck;
  switch (condition) {
  case "odd":
    remainderToCheck = 1;
    break;
  case "even":
    remainderToCheck = 0;
    break;
  default:
    break;
  }
  
  for (let i = 0; i < values.length; i++) {
    if (values[i] % 2 === remainderToCheck) {
      sum += values[i];
    }
  }
  return sum;
};

console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));