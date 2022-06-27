//Board funtions
import React from 'react';
import { checkPlacement, makeBoard, randomInt } from './helpers';
import { Ship } from './Ship';

const SHIP_AMOUNT = 10;
const BOARD_SIZE = 10;

export const Gameboard = () => {
  const gameboard = makeBoard();
  const ships = [];

  // Different ship functions

  const createShips = () => {
    return [
      // Create and array of 10 ships
      Ship(randomInt(), randomInt(), 1),
      Ship(randomInt(), randomInt(), 1),
      Ship(randomInt(), randomInt(), 1),
      Ship(randomInt(), randomInt(), 1),
      Ship(randomInt(), randomInt(), 2),
      Ship(randomInt(), randomInt(), 2),
      Ship(randomInt(), randomInt(), 2),
      Ship(randomInt(), randomInt(), 3),
      Ship(randomInt(), randomInt(), 3),
      Ship(randomInt(), randomInt(), 4),
    ];
  };

  const placeShip = (ship) => {
    if (checkPlacement(ship)) {
      ship.coords.map((coords) => {
        console.log(coords.row);
        console.log(coords.col);
      });
    }
  };

  const placeShipsAtRandom = () => {
    const gameboard = makeBoard();
    // New array to hold ships and be later pushed to the main ships array
    const newShips = createShips();
    for (const ship in newShips) {
      placeShip(newShips[ship]);
    }
  };

  return {
    placeShipsAtRandom,
  };
};
