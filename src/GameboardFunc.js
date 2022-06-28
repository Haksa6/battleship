//Board funtions
import React from 'react';
import { checkPlacement, makeBoard, randomInt } from './helpers';
import { Ship } from './Ship';

const BOARD_SIZE = 10;

export const Gameboard = () => {
  const gameboard = makeBoard();
  const ships = [];

  // Different ship functions

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

  const placeShipsAtRandom = () => {
    // New array to hold ships and be later pushed to the main ships array
    const shipArray = {
      ship1: { amount: 4, size: 1 },
      ship2: { amount: 3, size: 2 },
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
          Math.random() > 0.5
        );
        if (placeShip(newShip)) {
          amount--;
        }
      }
    });

    console.log(gameboard);
  };

  return {
    placeShipsAtRandom,
  };
};
