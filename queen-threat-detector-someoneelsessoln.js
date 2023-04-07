const generateBoard = function(wQ, bQ) {

  let board = [];
  let boardJ = [];

  for (let i = 0; i < 8; i++) {
    boardJ = [];
    for (let j = 0; j < 8; j++) {
      if ((wQ[0] === i && wQ[1] === j) || (bQ[0] === i && bQ[1] === j)) {
        boardJ.push(1);
      } else {
        boardJ.push(0);
      }
    }
    board.push(boardJ);
  }
  return board;
};

const queenThreat = function(gB) {
  let result = 'false';
  if (
    (Math.abs(whiteQueen[0] - blackQueen[0]) === Math.abs(whiteQueen[1] - blackQueen[1])) || // the row difference === the column difference
    (blackQueen[0] === whiteQueen[0]) ||
    (blackQueen[1] === whiteQueen[1])
  ) {
    result = true;
  }
  return result;
};

let whiteQueen = [0, 5];
let blackQueen = [1, 6];
let generatedBoard = generateBoard(whiteQueen, blackQueen);
console.log(generatedBoard);
console.log(queenThreat(generatedBoard));
