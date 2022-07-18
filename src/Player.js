import { Gameboard } from './GameboardFunc';
import { randomInt } from './helpers';

const Player = (side) => {
  const gameboard = Gameboard();
  let hitsHistory = [];

  const hasLost = () => {
    return gameboard.getShips().every((ship) => ship.isSunk());
  };

  const attack = (player, row, col) => {
    const result = player.gameboard.receiveAttack(row, col);
    return result !== true;
  };

  const computerAttack = (player) => {
    console.log(player.gameboard.getGameboard());
    const row = randomInt();
    const col = randomInt();
    const result = player.gameboard.receiveAttack(row, col);
    return result !== true;
  };

  const getSide = () => side;
  return {
    gameboard,
    getSide,
    hasLost,
    attack,
    computerAttack,
  };
};

export default Player;
