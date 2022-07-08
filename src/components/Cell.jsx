import React from 'react';

const Cell = ({ gameState, side, placeShip }) => {
  if (gameState === 'placement' && side === 'user')
    return (
      <div
        className="game-container-playground-game-cell-placement"
        onDragOver={(e) => {
          e.preventDefault();
        }}
        onDragEnter={(e) => {
          e.preventDefault();
          e.target.classlist.add('-hover');
        }}
        onDragLeave={(e) => {
          e.preventDefault();
          e.target.classlist.remove('-hover');
        }}
        onDrop={(e) => placeShip(e)}
      ></div>
    );
  if (side === 'enemy')
    return <div className="game-container-playground-game-cell enemy"></div>;
  return <div className="game-container-playground-game-cell"></div>;
};

export default Cell;
