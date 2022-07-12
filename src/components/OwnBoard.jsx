import React from 'react';

import Cell from './Cell';
import Ship from './Ship';

const OwnBoard = ({ board, ships, gameState, side, onPlaceShip }) => {
  const renderCells = () =>
    board.map((row, i) =>
      row.map((element, j) => (
        <Cell
          key={`${i}${j}`}
          gameState={gameState}
          side={side}
          i={i}
          j={j}
          onPlaceShip={onPlaceShip}
        />
      ))
    );
  //
  const renderShips = () =>
    ships.map((ship) => <Ship key={ship.getShipID()} ship={ship} />);

  return (
    <div className="game-container-user">
      <h2 className="game-container-title">You</h2>
      <div className="game-container-playground">
        <div className="game-container-playground-row">
          <div className="game-container-playground-row-numbers">1</div>
          <div className="game-container-playground-row-numbers">2</div>
          <div className="game-container-playground-row-numbers">3</div>
          <div className="game-container-playground-row-numbers">4</div>
          <div className="game-container-playground-row-numbers">5</div>
          <div className="game-container-playground-row-numbers">6</div>
          <div className="game-container-playground-row-numbers">7</div>
          <div className="game-container-playground-row-numbers">8</div>
          <div className="game-container-playground-row-numbers">9</div>
          <div className="game-container-playground-row-numbers">10</div>
        </div>
        <div className="game-container-playground-column">
          <div className="game-container-playground-column-letters">A</div>
          <div className="game-container-playground-column-letters">B</div>
          <div className="game-container-playground-column-letters">C</div>
          <div className="game-container-playground-column-letters">D</div>
          <div className="game-container-playground-column-letters">E</div>
          <div className="game-container-playground-column-letters">F</div>
          <div className="game-container-playground-column-letters">G</div>
          <div className="game-container-playground-column-letters">H</div>
          <div className="game-container-playground-column-letters">I</div>
          <div className="game-container-playground-column-letters">J</div>
        </div>
        <div className="game-container-playground-game">
          {renderCells()}
          {renderShips()}
        </div>
      </div>
    </div>
  );
};

export default OwnBoard;
