const whereCanIPark = function(spots, vehicle) {
  // Look for available spots for the corresponding car type
  // switch statement could be done for the outer block so that the for loop doesn't call the switch statement every iteration of the for loop ... however, this results in repeated code, i.e. for loops. For this problem, considering the computational time for a switch statement on each iteration, it's probably better to do the switch statement inside the for loop as the readability and modifiability outweighs the computational time save.
  for (let y = 0; y < spots.length; y++) {
    for (let x = 0; x < spots[y].length; x++) {
      switch (vehicle) {
      case 'regular':
        if (spots[y][x] === 'R') {
          return [x, y]; // columns are X, rows are Y
        }
        break;
      case 'small':
        if (spots[y][x] === 'R' || spots[y][x] === 'S') {
          return [x, y];
        }
        break;
      case 'motorcycle':
        if (spots[y][x] === 'R' || spots[y][x] === 'S' || spots[y][x] === 'M') {
          return [x, y];
        }
        break;
      }
    }
  }

  // No parking spots found
  return false;
};

console.log(whereCanIPark(
  [
    // COLUMNS ARE X
    // 0    1    2    3    4    5
    ['s', 's', 's', 'S', 'R', 'M'], // 0 ROWS ARE Y
    ['s', 'M', 's', 'S', 'r', 'M'], // 1
    ['s', 'M', 's', 'S', 'r', 'm'], // 2
    ['S', 'r', 's', 'm', 'r', 'M'], // 3
    ['S', 'r', 's', 'm', 'r', 'M'], // 4
    ['S', 'r', 'S', 'M', 'M', 'S']  // 5
  ],
  'regular'
));

console.log(whereCanIPark(
  [
    ['M', 'M', 'M', 'M'],
    ['M', 's', 'M', 'M'],
    ['M', 'M', 'M', 'M'],
    ['M', 'M', 'r', 'M']
  ],
  'small'
));

console.log(whereCanIPark(
  [
    ['s', 's', 's', 's', 's', 's'],
    ['s', 'm', 's', 'S', 'r', 's'],
    ['s', 'm', 's', 'S', 'r', 's'],
    ['S', 'r', 's', 'm', 'r', 's'],
    ['S', 'r', 's', 'm', 'R', 's'],
    ['S', 'r', 'S', 'M', 'm', 'S']
  ],
  'motorcycle'
));