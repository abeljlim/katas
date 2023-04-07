const repeatNumbers = function(repeatNumbersArr) {
  let repeatNumbersStr = "";
  let i = 0;
  // Do repeating action
  let numberToRepeat = repeatNumbersArr[i][0].toString();
  let totalReps = repeatNumbersArr[i][1];
  for (let currRep = 0; currRep < totalReps; currRep++) {
    repeatNumbersStr += numberToRepeat;
  }
  for (i = 1; i < repeatNumbersArr.length; i++) {
    // Comma then space then new set of repeating numbers
    repeatNumbersStr += ", ";
    let numberToRepeat = repeatNumbersArr[i][0].toString();
    let totalReps = repeatNumbersArr[i][1];
    for (let currRep = 0; currRep < totalReps; currRep++) {
      repeatNumbersStr += numberToRepeat;
    }
  }
  return repeatNumbersStr;
};
console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));