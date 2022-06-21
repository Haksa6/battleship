import React from 'react';
import './sass/main.scss';
import Header from './components/Header';
import Gameboard from './components/Gameboard';

const App = () => {
  return (
    <div className="main">
      <Header />
      <Gameboard />
    </div>
  );
};

export default App;
