import React, { useState } from 'react';
import './sass/main.scss';
import Header from './components/Header';
import Game from './components/Game';
import Player from './Player';
import { Gameboard } from './GameboardFunc';

const App = () => {
  const player1 = Player('user');
  const player2 = Player('computer');
  const [winner, setWinner] = useState(null);
  const [gameState, setGameState] = useState('placement');
  const gameboard = Gameboard();
  return (
    <div className="main">
      <Header />
      <Game winner={winner} gameState={gameState} />
    </div>
  );
};

export default App;
