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

const checkAdjacentCell = (ship, withShip = true) => {
  const col = Number(ship.getStartCoords().col);
  const row = Number(ship.getStartCoords().row);
  const size = Number(ship.getSize());

  if (ship.getDirection()) {
  }

  console.log('hey');

  if (size === 1) {
    console.log(`Original ---------- ${row} ${col}`);
    console.log(`+1 row ---------- ${row + 1} ${col}`);
    console.log(`-1 row ---------- ${row - 1} ${col}`);
    console.log(`+1 col ---------- ${row} ${col + 1}`);
    console.log(`-1 col ---------- ${row} ${col - 1}`);
    console.log(`+1 both ---------- ${row + 1} ${col + 1}`);
    console.log(`-1 both ---------- ${row - 1} ${col - 1}`);
    console.log(`+1 row -1 col ---------- ${row + 1} ${col - 1}`);
    console.log(`-1row +1 col ---------- ${row - 1} ${col + 1}`);
  }
};

const checkPlacement = (ship, gameboard) => {
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
    if (size + col > 10) return false;
  }

  //If the ship is vertical get its size and make sure it fits
  if (!ship.getDirection()) {
    if (size + row > 10) return false;
  }
  checkAdjacentCell(ship);
  //The ship shouldn't have any ships around in 1 cell radius
  return true;
};

export { makeAIMove, makeBoard, randomInt, checkPlacement };
