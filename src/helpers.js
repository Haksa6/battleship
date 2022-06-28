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

const makeAIMove = () => {};

// Get random number
const randomInt = () => {
  return Math.floor(Math.random() * BOARD_SIZE);
};

const checkAdjacentCell = (ship) => {};

const checkPlacement = (ship) => {
  ship.coords.forEach((coords) => {
    if (
      (coords.row < 0) |
      (coords.row >= 10) |
      (coords.col < 0) |
      (coords.col >= 10)
    )
      return false;
  });

  if (ship.getDirection()) {
    if (ship.getSize() + ship.getStartCoords().col > 10) return false;
  }

  if (!ship.getDirection()) {
    if (ship.getSize() + ship.getStartCoords().row > 10) return false;
  }

  checkAdjacentCell(ship);

  return true;
};
export { makeAIMove, makeBoard, randomInt, checkPlacement };
