const sumLargestNumbers = function(data) {
  // Go through array (which has 2 or more numbers), keeping track of largest and second-largest number; if a number is greater than the largest number, then replace the largest number with the new number and update the second largest number; if not, then check if it is greater than the second largest number and then replace the second largest number with the new number if it is
  let largestNumber, secondLargestNumber;

  // initialize largestNumber and secondLargestNumber
  if (data[0] > data[1]) {
    largestNumber = data[0];
    secondLargestNumber = data[1];
  } else {
    largestNumber = data[1];
    secondLargestNumber = data[0];
  }
  
  for (let i = 2; i < data.length; i++) {
    // Each iterated number replaces either largestNumber (along with updating secondLargestNumber) or secondLargestNumber
    if (data[i] > largestNumber) {
      secondLargestNumber = largestNumber;
      largestNumber = data[i];
    } else if (data[i] > secondLargestNumber) {
      secondLargestNumber = data[i];
    }
  }
  return largestNumber + secondLargestNumber;
};

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));
console.log(sumLargestNumbers([10, 1])); // my code initially did not pass this check (where in my code, largestNumber and secondLargestNumber were initialized to data[0] and the for loop started at i = 1)