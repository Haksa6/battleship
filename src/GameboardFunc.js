//Board funtions
import { checkPlacement, makeBoard, randomInt } from './helpers';
import { Ship } from './Ship';

const BOARD_SIZE = 10;

export const Gameboard = () => {
  let gameboard = makeBoard();
  let ships = [];

  const getShips = () => ships;

  // Different ship functions

  const moveShip = (ship, x, y) => {};

  const placeShip = (ship) => {
    if (checkPlacement(ship)) {
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
      ship2: { amount: 2, size: 2 },
      ship3: { amount: 2, size: 3 },
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
  return {
    placeShipsAtBoard,
    randomPlaceShips,
    getShips,
    gameboard,
  };
};
