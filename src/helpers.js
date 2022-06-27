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
  return true;
};
export { makeAIMove, makeBoard, randomInt, checkPlacement };
