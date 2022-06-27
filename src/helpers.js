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
  return Math.ceil(Math.random() * BOARD_SIZE);
};

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

  console.log(ship.getDirection());

  return true;
};
export { makeAIMove, makeBoard, randomInt, checkPlacement };
