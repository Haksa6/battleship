import React from 'react';

const GameInfo = ({ winner, handleRandomize, gameState, setGameState }) => {
  const handlePlay = () => {
    if (gameState === 'placement') {
      setGameState('ready');
    } else setGameState('placement');
  };

  return (
    <div className="game-container-header">
      <button onClick={handlePlay} className="game-container-header-playButton">
        {gameState === 'placement' ? 'Play' : 'New game'}
      </button>
      <h3 className="game-container-header-winnerText">{winner}</h3>
      <button
        onClick={handleRandomize}
        className="game-container-header-randomButton"
      >
        Place randomly
      </button>
    </div>
  );
};

export default GameInfo;
