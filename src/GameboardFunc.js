//Board funtions
import { checkPlacement, makeBoard, randomInt } from './helpers';
import { Ship } from './Ship';

const BOARD_SIZE = 10;

export const Gameboard = () => {
  let gameboard = makeBoard();
  let ships = [];

  const getGameboard = () => gameboard;
  //Updates the content in the cell for the attackboard
  const getAttackboard = () =>
    gameboard.map((row) => row.map((cell) => (cell === 'Ship' ? '' : cell)));
  const getShips = () => ships;
  // Different ship functions

  const placeShip = (ship) => {
    if (checkPlacement(ship, gameboard)) {
      ship.coords.forEach((coord) => {
        gameboard[coord.row][coord.col] = 'Ship';
      });
      ships.push(ship);
      return true;
    }

    return false;
  };

  const placeShipsAtBoard = () => {
    // New array to hold ships and be later pushed to the main ships array
    const shipArray = {
      ship1: { amount: 1, size: 1 },
      ship2: { amount: 3, size: 2 },
      ship3: { amount: 3, size: 3 },
      ship4: { amount: 1, size: 4 },
    };

    Object.entries(shipArray).forEach(([name, ship]) => {
      let { amount, size } = ship;

      while (amount > 0) {
        const newShip = Ship(
          randomInt(),
          randomInt(),
          size,
          Math.random() > 0.5,
          `${name} id-${amount}`
        );
        if (placeShip(newShip)) {
          amount--;
        }
      }
    });
  };

  const randomPlaceShips = () => {
    gameboard = makeBoard();
    ships = [];
    placeShipsAtBoard();
  };

  //Remove current ships marks so it can placed next to the current ship
  const checkMoveShip = (ship, row, col) => {
    ship.coords.forEach((coords) => {
      gameboard[coords.row][coords.col] = '';
    });

    const newShip = Ship(
      row,
      col,
      ship.getSize(),
      ship.getDirection(),
      ship.getShipID()
    );
    if (checkPlacement(newShip, gameboard)) {
      return true;
    }

    ship.coords.forEach((coords) => {
      gameboard[coords.row][coords.col] = 'S';
    });
    ships.push(ship);
    return false;
  };

  const moveShip = (ship, row, col) => {
    console.log('Moved ship to', row, col);

    if (checkMoveShip(ship, row, col)) {
      const newShip = Ship(
        row,
        col,
        ship.getSize(),
        ship.getDirection(),
        ship.getShipID()
      );
      placeShip(newShip);
      return newShip;
    }
    return undefined;
  };

  const receiveAttack = (row, col) => {
    if (gameboard[row][col] !== 'Ship') {
      gameboard[row][col] = 'Mark';
      return 'miss';
    }

    let shipFound;
    //Find the ship in the array
    for (const ship in ships) {
      ships[ship].coords.forEach((coord) => {
        if (coord.row === parseInt(row) && coord.col === parseInt(col)) {
          console.log('found');
          shipFound = ships[ship];
        }
      });
    }

    if (shipFound) {
      shipFound.hit();
      if (shipFound.isSunk()) {
        gameboard[row][col] = 'X';
        return 'sunk';
      }
      gameboard[row][col] = 'X';
      return 'hit';
    }
  };

  return {
    placeShipsAtBoard,
    randomPlaceShips,
    getShips,
    gameboard,
    moveShip,
    receiveAttack,
    getGameboard,
    getAttackboard,
    placeShip,
  };
};
