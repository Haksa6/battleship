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
  const [ships, setShips] = useState([]);

  const placeShipsOnStart = () => {
    playerUser.gameboard.placeShipsAtBoard();
    playerEnemy.gameboard.placeShipsAtBoard();

    setOwnBoard(playerUser.gameboard.gameboard);
    setEnemyBoard(playerEnemy.gameboard.gameboard);
    setShips(
      playerUser.gameboard.getShips().map((ship) => ({
        ...ship,
      }))
    );
  };
  useEffect(() => placeShipsOnStart(), []);

  const handleRandomize = () => {
    if (gameState === 'placement') {
      playerUser.gameboard.randomPlaceShips();
      setShips(
        playerUser.gameboard.getShips().map((ship) => ({
          ...ship,
        }))
      );
      console.log(ships[0].coords);
    }
  };

  const onPlaceShip = (e) => {
    console.log(
      e.target.dataset.coord.split(',')[0],
      e.target.dataset.coord.split(',')[1]
    );
  };

  return (
    <div className="game-container">
      <GameInfo winner={winner} handleRandomize={handleRandomize} />
      <div className="game-container-grids">
        <OwnBoard
          board={ownBoard}
          ships={ships}
          gameState={gameState}
          side={playerUser.getSide()}
          onPlaceShip={onPlaceShip}
        />
        <EnemyBoard board={enemyBoard} side={playerEnemy.getSide()} />
      </div>
    </div>
  );
};

export default Game;
