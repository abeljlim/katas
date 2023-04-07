const generateBoard = function(whiteQueen, blackQueen) {
  let board = [];
  for (let row = 0; row < 8; row++) {
    board.push([]);
    for (let col = 0; col < 8; col++) {
      if ((row === whiteQueen[0] && col === whiteQueen[1]) || (row === blackQueen[0] && col === blackQueen[1])) {
        board[row].push(1);
      } else {
        board[row].push(0);
      }
    }
  }
  return board;
};
const findQueen = function(board) {
  for (let firstQueenRow = 0; firstQueenRow < 8; firstQueenRow++) {
    for (let firstQueenCol = 0; firstQueenCol < 8; firstQueenCol++) {
      if (board[firstQueenRow][firstQueenCol] === 1) {
        return [firstQueenRow, firstQueenCol]; // used break at first, but break only breaks out of the inner loop and so was not what I wanted
      }
    }
  }
  return []; // shouldn't reach this
};

const queenThreat = function(board) {
  // find position of the first queen
  let firstQueenRow, firstQueenCol;
  let queenCoords = findQueen(board);
  firstQueenRow = queenCoords[0];
  firstQueenCol = queenCoords[1];

  // go through possible moves of first queen
  const direction = [[-1, -1], [-1, 0], [-1, 1], [0, -1], [0, 1], [1, -1], [1, 0], [1, 1]]; // where each array element is [rowDirUnit, colDirUnit] where dirUnit is short for "direction unit"
  for (let i = 0; i < direction.length; i++) {
    // repeatedly go to the direction until another queen is found or the edge of the board is reached
    // check every square on the current direction looked at
    //console.log("direction[i]: "+direction[i]+"; firstQueenRow: "+firstQueenRow+"; firstQueenCol: "+firstQueenCol);
    for (let dirMag = 0; firstQueenRow + dirMag * direction[i][0] >= 0 && firstQueenRow + dirMag * direction[i][0] < 8 && firstQueenCol + dirMag * direction[i][1] >= 0 && firstQueenCol + dirMag * direction[i][1] < 8; dirMag++) { // where dirMag is short for "direction magnitude"
      let newRow = firstQueenRow + dirMag * direction[i][0];
      let newCol = firstQueenCol + dirMag * direction[i][1];
      //console.log("newRow: "+newRow+"; newCol: "+newCol);
      if (board[newRow][newCol] === 1) {
        return true; // other queen is found
      }
    }
  }
  // none of the directions looked at yielded a threat
  return false;
};
let whiteQueen = [0, 5];
let blackQueen = [5, 0];
let generatedBoard = generateBoard(whiteQueen, blackQueen);
console.log(generatedBoard);
console.log(queenThreat(generatedBoard));