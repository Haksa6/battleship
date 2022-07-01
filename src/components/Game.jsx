import React, { useEffect, useState } from 'react';
import Player from '../Player';

import GameInfo from './GameInfo';
import OwnBoard from './OwnBoard';
import EnemyBoard from './Enemyboard';

const Game = () => {
  const playerUser = Player('user');
  const playerEnemy = Player('enemy');
  const [winner, setWinner] = useState(null);
  const [gameState, setGameState] = useState('placement');
  const [ownBoard, setOwnBoard] = useState([]);
  const [enemyBoard, setEnemyBoard] = useState([]);

  const placeShipsOnStart = () => {
    playerUser.gameboard.placeShipsAtBoard();
    playerEnemy.gameboard.placeShipsAtBoard();

    setOwnBoard(playerUser.gameboard.gameboard);
    setEnemyBoard(playerEnemy.gameboard.gameboard);
  };

  useEffect(() => placeShipsOnStart(), []);

  return (
    <div className="game-container">
      <GameInfo winner={winner} />
      <div className="game-container-grids">
        <OwnBoard board={ownBoard} />
        <EnemyBoard board={enemyBoard} />
      </div>
    </div>
  );
};

export default Game;
