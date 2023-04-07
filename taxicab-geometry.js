const blocksAway = function(directions) {
  // Count amountEast and amountNorth, and keep track of overall direction
  // "left" would mean north, and "right" would mean east, specifically for the first direction
  let absoluteDirection;

  // using constants so increment = clockwise; decrement = counterclockwise, for (absoluteDirection + 4)%4
  const NORTH = 0;
  const EAST = 1;
  const SOUTH = 2;
  const WEST = 3;

  if (directions[0] === "right") {
    absoluteDirection = EAST;
  } else {
    absoluteDirection = NORTH;
  }
  let totalEast = 0;
  let totalNorth = 0;
  switch (absoluteDirection) {
  case NORTH:
    totalNorth += directions[1];
    break;
  case EAST:
    totalEast += directions[1];
    break;
  }
  //console.log("direction: " + absoluteDirection + "; increment: " + directions[1]);
  for (let i = 2; i < directions.length; i += 2) {
    switch (directions[i]) {
    case "left":
      absoluteDirection = (absoluteDirection + 4 - 1) % 4;
      break;
    case "right":
      absoluteDirection = (absoluteDirection + 4 + 1) % 4;
      break;
    }
    switch (absoluteDirection) {
    case NORTH:
      totalNorth += directions[i + 1];
      break;
    case EAST:
      totalEast += directions[i + 1];
      break;
    case SOUTH:
      totalNorth -= directions[i + 1];
      break;
    case WEST:
      totalEast -= directions[i + 1];
      break;
    }
    //console.log("direction: " + absoluteDirection + "; increment: " + directions[i+1]);
  }
  return {
    east: totalEast,
    north: totalNorth
  };
};

console.log(blocksAway(["right", 2, "left", 3, "left", 1]));
console.log(blocksAway(["left", 1, "right", 1, "left", 1, "right", 1, "left", 1, "right", 1])); // east: 3, north: 3
console.log(blocksAway(["left", 3, "right", 1, "right", 3, "right", 1])); // east: 0, north: 0