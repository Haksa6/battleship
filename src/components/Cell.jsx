import React from 'react';

const Cell = ({ gameState, side, i, j, onPlaceShip, content, playerMove }) => {
  if (gameState === 'placement' && side === 'user')
    return (
      <div
        data-coord={[i, j]}
        className="game-container-playground-game-cell-placement"
        onDragOver={(e) => {
          e.preventDefault();
        }}
        onDragEnter={(e) => {
          e.preventDefault();
          console.log(i, j);
          e.target.classList.toggle(
            'game-container-playground-game-cell-placement-hover'
          );
        }}
        onDragLeave={(e) => {
          e.preventDefault();
          e.target.classList.toggle(
            'game-container-playground-game-cell-placement-hover'
          );
        }}
        onDrop={(e) => {
          e.target.classList.toggle(
            'game-container-playground-game-cell-placement-hover'
          );
          onPlaceShip(e);
        }}
      ></div>
    );
  if (content === 'X') {
    <div className="game-container-playground-game-cell-destroyed"></div>;
  }

  if (content === 'Mark') {
    <div className="game-container-playground-game-cell-marked"></div>;
  }

  if (side === 'enemy' && gameState === 'ready')
    return (
      <div
        onClick={playerMove}
        data-coord={[i, j]}
        className="game-container-playground-game-cell enemy"
      ></div>
    );
  return (
    <div
      data-coord={[i, j]}
      className="game-container-playground-game-cell"
    ></div>
  );
};

export default Cell;
