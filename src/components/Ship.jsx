import React from 'react';

const Ship = ({ ship }) => {
  const { row, col } = ship.getStartCoords();

  const shipStyle = {
    top: row * 32,
    left: col * 32,
    width: ship.getDirection() ? 30 * ship.getSize() + 1 : '28px',
    height: ship.getDirection() ? '28px' : 30 * ship.getSize() + 1,
  };

  return (
    <div
      style={shipStyle}
      className="game-container-playground-game-ship"
    ></div>
  );
};

export default Ship;
