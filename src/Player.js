import { Gameboard } from './GameboardFunc';
import { makeAIMove, makeBoard, randomInt } from './helpers';

const Player = (side) => {
  const gameboard = Gameboard();

  const hasLost = () => {
    return gameboard.getShips().every((ship) => ship.isSunk());
  };

  const attack = (player, row, col) => {
    const result = player.gameboard.receiveAttack(row, col);
    return result !== 'miss';
  };

  const computerAttack = (opponent) => {
    const board = opponent.gameboard.getAttackboard();
    const coords = makeAIMove(board);

    console.log(coords);
    const result = opponent.gameboard.receiveAttack(coords.row, coords.col);
    if (result === 'hit') {
      return true;
    }
    if (result === 'sunk') {
      return true;
    }

    return false;
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
