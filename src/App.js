import React, { useState } from 'react';
import './sass/main.scss';
import Header from './components/Header';
import Gameboard from './components/Gameboard';
import { Player } from './Player';

const App = () => {
  const player1 = Player('user');
  const player2 = Player('computer');
  const [winner, setWinner] = useState('');
  const [gameState, setGameState] = useState('placement');

  return (
    <div className="main">
      <Header />
      <Gameboard winner={winner} gameState={gameState} />
    </div>
  );
};

export default App;
