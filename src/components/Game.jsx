import React from 'react';

import GameInfo from './GameInfo';
import OwnBoard from './OwnBoard';
import EnemyBoard from './Enemyboard';

const Game = ({ winner, gameState }) => {
  return (
    <div className="game-container">
      <GameInfo winner={winner} />
      <div className="game-container-grids">
        <OwnBoard />
        <EnemyBoard />
      </div>
    </div>
  );
};

export default Game;
