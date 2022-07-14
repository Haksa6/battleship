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
      draggable
      data-ship={ship.getShipID()}
      style={shipStyle}
      className="game-container-playground-game-ship"
      onDragStart={(e) => {
        e.dataTransfer.setData('ship', e.target.dataset.ship);
        e.target.classList.toggle(
          'game-container-playground-game-ship-dragging'
        );
      }}
      onDragEnd={(e) => {
        e.dataTransfer.setData('ship', e.target.dataset.ship);
        e.target.classList.toggle(
          'game-container-playground-game-ship-dragging'
        );
      }}
    ></div>
  );
};

export default Ship;
