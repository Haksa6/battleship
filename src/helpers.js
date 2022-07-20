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

const makeAIMove = (board) => {
  const cellCoords = [];

  for (let row = 0; row < BOARD_SIZE; row++) {
    for (let col = 0; col < BOARD_SIZE; col++) {
      if (board[row][col] === '') {
        cellCoords.push({ row, col });
      }
    }
  }

  return cellCoords[randomBigInt(cellCoords.length)];
};
//Function for bigger size as well
const randomBigInt = (length) => {
  return Math.floor(Math.random() * length);
};

// Get random number

const randomInt = () => {
  return Math.floor(Math.random() * BOARD_SIZE);
};

const checkAdjacentCell = (
  size,
  row,
  col,
  direction,
  gameboard,
  withship = true
) => {
  const isUndefined = (arr, index1, index2) => {
    try {
      return arr[index1][index2] === undefined;
    } catch (e) {
      return true;
    }
  };

  //if ship is horizontal ----
  if (direction) {
    for (let i = -1; i < 2; i++) {
      if (!isUndefined(gameboard, row + i, col - 1)) {
        if (gameboard[row + i][col - 1] === 'Ship') return false;
      }
    }

    for (let i = col; i < col + size; i++) {
      console.log('horizontal', i, row, 'size', size);
      if (!isUndefined(gameboard, row - 1, i)) {
        if (gameboard[row - 1][i] === 'Ship') {
          return false;
        }
      }

      if (withship) {
        if (!isUndefined(gameboard, row, i)) {
          if (gameboard[row][i] === 'Ship') {
            return false;
          }
        }
      }

      if (!isUndefined(gameboard, row + 1, i)) {
        if (gameboard[row + 1][i] === 'Ship') {
          return false;
        }
      }
    }

    for (let i = -1; i < 2; i++) {
      if (!isUndefined(gameboard, row + i, col + size)) {
        if (gameboard[row + i][col + size] === 'Ship') return false;
      }
    }
  }

  /*if ship is vertical 
  |
  |
  |
  */
  if (!direction) {
    for (let i = -1; i < 2; i++) {
      if (!isUndefined(gameboard, row - 1, col + i)) {
        if (gameboard[row - 1][col + i] === 'Ship') return false;
      }
    }

    for (let i = row; i < row + size; i++) {
      console.log('vertical', i, col, 'size', size);

      if (!isUndefined(gameboard, i, col - 1)) {
        if (gameboard[i][col - 1] === 'Ship') {
          return false;
        }
      }

      if (withship) {
        if (!isUndefined(gameboard, i, col)) {
          if (gameboard[i][col] === 'Ship') {
            return false;
          }
        }
      }

      if (!isUndefined(gameboard, i, col + 1)) {
        if (gameboard[i][col + 1] === 'Ship') {
          return false;
        }
      }
    }

    for (let i = -1; i < 2; i++) {
      if (!isUndefined(gameboard, row + size, col + i)) {
        if (gameboard[row + size][col + i] === 'Ship') return false;
      }
    }
  }

  return true;
};

const checkPlacement = (ship, gameboard) => {
  //Check all the coords and return false if they dont fit in the board

  //Have to convert strings to a number
  const size = Number(ship.getSize());
  const col = Number(ship.getStartCoords().col);
  const row = Number(ship.getStartCoords().row);
  const direction = ship.getDirection();

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
  if (direction) {
    if (size + col > 10) return false;
  }

  //If the ship is vertical get its size and make sure it fits
  if (!direction) {
    if (size + row > 10) return false;
  }
  //The ship shouldn't have any ships around in 1 cell radius
  //this function went really messy and was a struggle
  const truth = checkAdjacentCell(size, row, col, direction, gameboard);

  return truth;
};

export { makeAIMove, makeBoard, randomInt, checkPlacement };
