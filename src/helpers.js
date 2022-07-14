const BOARD_SIZE = 10;

//Create empty board and return it into gameboard
const makeBoard = () => {
  const newBoard = [];
  for (let i = 0; i < BOARD_SIZE; i++) {
    newBoard.push([]);
    for (let j = 0; j < BOARD_SIZE; j++) {
      newBoard[i].push('');
    }
  }
  return newBoard;
};
//
const makeAIMove = () => {};

// Get random number
const randomInt = () => {
  return Math.floor(Math.random() * BOARD_SIZE);
};

const checkAdjacentCell = (ship) => {};

const checkPlacement = (ship) => {
  //Check all the coords and return false if they dont fit in the board

  //Have to convert strings to a number
  const size = Number(ship.getSize());
  const col = Number(ship.getStartCoords().col);
  const row = Number(ship.getStartCoords().row);

  ship.coords.forEach((coords) => {
    if (
      coords.row < 0 ||
      coords.row >= 10 ||
      coords.col < 0 ||
      coords.col >= 10
    )
      return false;
  });

  //If the ship is horizontal get its size and make sure it fits
  if (ship.getDirection()) {
    console.log(`here ${size + col} `);
    if (size + col > 10) return false;
  }

  //If the ship is vertical get its size and make sure it fits
  if (!ship.getDirection()) {
    console.log(`here ${size + row} `);
    if (size + row > 10) return false;
  }

  //The ship shouldn't have any ships around in 1 cell radius

  return true;
};
export { makeAIMove, makeBoard, randomInt, checkPlacement };
