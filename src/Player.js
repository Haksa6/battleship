import React from 'react';
import { Gameboard } from './GameboardFunc';

export const Player = ({ side }) => {
  const gameboard = Gameboard();
  const getSide = () => side;
  const isWinner = false;

  const getWinner = () => isWinner;
  return {
    gameboard,
    getSide,
    getWinner,
  };
};
