//Board funtions
import React from 'react';
import { makeBoard } from './helpers';

const SHIP_AMOUNT = 10;

export const Gameboard = () => {
  const gameboard = makeBoard();
  const ships = [];
  const shipCount = SHIP_AMOUNT;

  // Different ship functions

  const placeShipsAtRandom = () => {
    const gameboard = makeBoard();
    const ships = [];

    const shipsArray = {
      ship1: { amount: 4, size: 1 },
      ship2: { amount: 3, size: 2 },
      ship3: { amount: 2, size: 3 },
      ship4: { amount: 1, size: 4 },
    };
  };

  return {};
};
