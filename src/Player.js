import { Gameboard } from './GameboardFunc';

const Player = (side) => {
  const gameboard = Gameboard();

  const hasLost = () => {
    return gameboard.getShips().every((ship) => ship.isSunk());
  };

  const attack = (player, row, col) => {
    const result = player.gameboard.receiveAttack(row, col);
    return result !== true;
  };

  const getSide = () => side;
  return {
    gameboard,
    getSide,
    hasLost,
    attack,
  };
};

export default Player;
