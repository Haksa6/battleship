import { Gameboard } from './GameboardFunc';

const Player = (side) => {
  const gameboard = Gameboard();

  const hasLost = () => {
    return gameboard.getShips().every((ship) => ship.isSunk());
  };

  const getSide = () => side;
  return {
    gameboard,
    getSide,
    hasLost,
  };
};

export default Player;
