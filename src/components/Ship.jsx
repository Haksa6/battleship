import React from 'react';

const Ship = ({ ship }) => {
  const { row, col } = ship.getStartCoords();

  //Get the correct size and position even with border
  const shipStyle = {
    top: row * 32,
    left: col * 32,
    width: ship.getDirection()
      ? 28 * ship.getSize() + (ship.getSize() - 1) * 4
      : '28px',
    height: ship.getDirection()
      ? '28px'
      : 28 * ship.getSize() + (ship.getSize() - 1) * 4,
  };

  return (
    <div
      style={shipStyle}
      className="game-container-playground-game-ship"
    ></div>
  );
};

export default Ship;
