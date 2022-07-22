import React from 'react';
import './sass/main.scss';
import Header from './components/Header';
import Game from './components/Game';

const App = () => {
  return (
    <div className="main">
      <Header />
      <Game />
    </div>
  );
};

export default App;
