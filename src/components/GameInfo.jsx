import React from 'react';

const GameInfo = ({ winner }) => {
  const handleRandomButton = () => {};

  return (
    <div className="game-container-header">
      <button className="game-container-header-playButton">Play</button>
      <h3 className="game-container-header-winnerText">{winner}</h3>
      <button
        onClick={handleRandomButton}
        className="game-container-header-randomButton"
      >
        Place randomly
      </button>
    </div>
  );
};

export default GameInfo;
