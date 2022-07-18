import React, { useEffect, useState } from 'react';
import Player from '../Player';

import GameInfo from './GameInfo';
import OwnBoard from './OwnBoard';
import EnemyBoard from './Enemyboard';
let playerUser = Player('user');
let playerEnemy = Player('enemy');

const Game = () => {
  const [winner, setWinner] = useState(null);
  const [gameState, setGameState] = useState('placement');
  const [ownBoard, setOwnBoard] = useState([]);
  const [enemyBoard, setEnemyBoard] = useState([]);
  const [ships, setShips] = useState([]);

  useEffect(() => placeShipsOnStart(), []);

  const placeShipsOnStart = () => {
    playerUser = Player('user');
    playerEnemy = Player('enemy');
    playerUser.gameboard.placeShipsAtBoard();
    playerEnemy.gameboard.placeShipsAtBoard();

    setOwnBoard(playerUser.gameboard.getGameboard());
    setEnemyBoard(playerEnemy.gameboard.getGameboard());
    setShips(
      playerUser.gameboard.getShips().map((ship) => ({
        ...ship,
      }))
    );
  };

  const handleRandomize = () => {
    if (gameState === 'placement') {
      playerUser.gameboard.randomPlaceShips();
      setShips(
        playerUser.gameboard.getShips().map((ship) => ({
          ...ship,
        }))
      );
    }
  };

  const onPlaceShip = (e) => {
    const shipID = e.dataTransfer.getData('ship');
    const ship = ships.find((s) => s.getShipID() === shipID);
    const x = e.target.dataset.coord.split(',')[0];
    const y = e.target.dataset.coord.split(',')[1];

    const newShip = playerUser.gameboard.moveShip(ship, x, y);
    if (newShip !== undefined)
      setShips(
        ships.map((s) => (s.getShipID() !== shipID ? s : { ...newShip }))
      );
  };

  const enemyMove = () => {};

  const playerMove = (e) => {
    const x = e.target.dataset.coord.split(',')[0];
    const y = e.target.dataset.coord.split(',')[1];

    const attack = playerUser.attack(playerEnemy, x, y);
    setEnemyBoard(playerEnemy.gameboard.getGameboard());
    console.log(enemyBoard);
    if (playerEnemy.hasLost()) {
      setWinner('You won!');
      return;
    }
    if (attack) {
      return;
    }
    enemyMove();
  };

  return (
    <div className="game-container">
      <GameInfo
        winner={winner}
        handleRandomize={handleRandomize}
        gameState={gameState}
        setGameState={setGameState}
      />
      <div className="game-container-grids">
        <OwnBoard
          board={ownBoard}
          ships={ships}
          gameState={gameState}
          side={playerUser.getSide()}
          onPlaceShip={onPlaceShip}
        />
        <EnemyBoard
          board={enemyBoard}
          side={playerEnemy.getSide()}
          gameState={gameState}
          playerMove={playerMove}
        />
      </div>
    </div>
  );
};

export default Game;
