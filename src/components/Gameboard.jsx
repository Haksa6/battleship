import React from 'react';

const Gameboard = () => {
  return (
    <div className="game-container">
      <div className="game-container-header">
        <button className="game-container-header-playButton">Play</button>
        <h3 className="game-container-header-winnerText">winner</h3>
        <button className="game-container-header-randomButton">
          Place randomly
        </button>
      </div>
      <div className="game-container-grids">
        <div className="game-container-user">
          <h2 className="game-container-title">You</h2>
          <div className="game-container-playground">
            <div className="game-container-playground-row">
              <div className="game-container-playground-row-numbers">1</div>
              <div className="game-container-playground-row-numbers">2</div>
              <div className="game-container-playground-row-numbers">3</div>
              <div className="game-container-playground-row-numbers">4</div>
              <div className="game-container-playground-row-numbers">5</div>
              <div className="game-container-playground-row-numbers">6</div>
              <div className="game-container-playground-row-numbers">7</div>
              <div className="game-container-playground-row-numbers">8</div>
              <div className="game-container-playground-row-numbers">9</div>
              <div className="game-container-playground-row-numbers">10</div>
            </div>
            <div className="game-container-playground-column">
              <div className="game-container-playground-column-letters">A</div>
              <div className="game-container-playground-column-letters">B</div>
              <div className="game-container-playground-column-letters">C</div>
              <div className="game-container-playground-column-letters">D</div>
              <div className="game-container-playground-column-letters">E</div>
              <div className="game-container-playground-column-letters">F</div>
              <div className="game-container-playground-column-letters">G</div>
              <div className="game-container-playground-column-letters">H</div>
              <div className="game-container-playground-column-letters">I</div>
              <div className="game-container-playground-column-letters">J</div>
            </div>
            <div className="game-container-playground-game"></div>
          </div>
        </div>
        <div className="game-container-computer">
          <h2 className="game-container-title">Enemy</h2>
          <div className="game-container-playground">
            <div className="game-container-playground-row">
              <div className="game-container-playground-row-numbers">1</div>
              <div className="game-container-playground-row-numbers">2</div>
              <div className="game-container-playground-row-numbers">3</div>
              <div className="game-container-playground-row-numbers">4</div>
              <div className="game-container-playground-row-numbers">5</div>
              <div className="game-container-playground-row-numbers">6</div>
              <div className="game-container-playground-row-numbers">7</div>
              <div className="game-container-playground-row-numbers">8</div>
              <div className="game-container-playground-row-numbers">9</div>
              <div className="game-container-playground-row-numbers">10</div>
            </div>
            <div className="game-container-playground-column">
              <div className="game-container-playground-column-letters">A</div>
              <div className="game-container-playground-column-letters">B</div>
              <div className="game-container-playground-column-letters">C</div>
              <div className="game-container-playground-column-letters">D</div>
              <div className="game-container-playground-column-letters">E</div>
              <div className="game-container-playground-column-letters">F</div>
              <div className="game-container-playground-column-letters">G</div>
              <div className="game-container-playground-column-letters">H</div>
              <div className="game-container-playground-column-letters">I</div>
              <div className="game-container-playground-column-letters">J</div>
            </div>
            <div className="game-container-playground-game">
              <div className="game-container-playground-game-cell"></div>
              <div className="game-container-playground-game-cell"></div>
              <div className="game-container-playground-game-cell"></div>
              <div className="game-container-playground-game-cell"></div>
              <div className="game-container-playground-game-cell"></div>
              <div className="game-container-playground-game-cell"></div>
              <div className="game-container-playground-game-cell"></div>
              <div className="game-container-playground-game-cell"></div>
              <div className="game-container-playground-game-cell"></div>
              <div className="game-container-playground-game-cell"></div>
              <div className="game-container-playground-game-cell"></div>
              <div className="game-container-playground-game-cell"></div>
              <div className="game-container-playground-game-cell"></div>
              <div className="game-container-playground-game-cell"></div>
              <div className="game-container-playground-game-cell"></div>
              <div className="game-container-playground-game-cell"></div>
              <div className="game-container-playground-game-cell"></div>
              <div className="game-container-playground-game-cell"></div>
              <div className="game-container-playground-game-cell"></div>
              <div className="game-container-playground-game-cell"></div>
              <div className="game-container-playground-game-cell"></div>
              <div className="game-container-playground-game-cell"></div>
              <div className="game-container-playground-game-cell"></div>
              <div className="game-container-playground-game-cell"></div>
              <div className="game-container-playground-game-cell"></div>
              <div className="game-container-playground-game-cell"></div>
              <div className="game-container-playground-game-cell"></div>
              <div className="game-container-playground-game-cell"></div>
              <div className="game-container-playground-game-cell"></div>
              <div className="game-container-playground-game-cell"></div>
              <div className="game-container-playground-game-cell"></div>
              <div className="game-container-playground-game-cell"></div>
              <div className="game-container-playground-game-cell"></div>
              <div className="game-container-playground-game-cell"></div>
              <div className="game-container-playground-game-cell"></div>
              <div className="game-container-playground-game-cell"></div>
              <div className="game-container-playground-game-cell"></div>
              <div className="game-container-playground-game-cell"></div>
              <div className="game-container-playground-game-cell"></div>
              <div className="game-container-playground-game-cell"></div>
              <div className="game-container-playground-game-cell"></div>
              <div className="game-container-playground-game-cell"></div>
              <div className="game-container-playground-game-cell"></div>
              <div className="game-container-playground-game-cell"></div>
              <div className="game-container-playground-game-cell"></div>
              <div className="game-container-playground-game-cell"></div>
              <div className="game-container-playground-game-cell"></div>
              <div className="game-container-playground-game-cell"></div>
              <div className="game-container-playground-game-cell"></div>
              <div className="game-container-playground-game-cell"></div>
              <div className="game-container-playground-game-cell"></div>
              <div className="game-container-playground-game-cell"></div>
              <div className="game-container-playground-game-cell"></div>
              <div className="game-container-playground-game-cell"></div>
              <div className="game-container-playground-game-cell"></div>
              <div className="game-container-playground-game-cell"></div>
              <div className="game-container-playground-game-cell"></div>
              <div className="game-container-playground-game-cell"></div>
              <div className="game-container-playground-game-cell"></div>
              <div className="game-container-playground-game-cell"></div>
              <div className="game-container-playground-game-cell"></div>
              <div className="game-container-playground-game-cell"></div>
              <div className="game-container-playground-game-cell"></div>
              <div className="game-container-playground-game-cell"></div>
              <div className="game-container-playground-game-cell"></div>
              <div className="game-container-playground-game-cell"></div>
              <div className="game-container-playground-game-cell"></div>
              <div className="game-container-playground-game-cell"></div>
              <div className="game-container-playground-game-cell"></div>
              <div className="game-container-playground-game-cell"></div>
              <div className="game-container-playground-game-cell"></div>
              <div className="game-container-playground-game-cell"></div>
              <div className="game-container-playground-game-cell"></div>
              <div className="game-container-playground-game-cell"></div>
              <div className="game-container-playground-game-cell"></div>
              <div className="game-container-playground-game-cell"></div>
              <div className="game-container-playground-game-cell"></div>
              <div className="game-container-playground-game-cell"></div>
              <div className="game-container-playground-game-cell"></div>
              <div className="game-container-playground-game-cell"></div>
              <div className="game-container-playground-game-cell"></div>
              <div className="game-container-playground-game-cell"></div>
              <div className="game-container-playground-game-cell"></div>
              <div className="game-container-playground-game-cell"></div>
              <div className="game-container-playground-game-cell"></div>
              <div className="game-container-playground-game-cell"></div>
              <div className="game-container-playground-game-cell"></div>
              <div className="game-container-playground-game-cell"></div>
              <div className="game-container-playground-game-cell"></div>
              <div className="game-container-playground-game-cell"></div>
              <div className="game-container-playground-game-cell"></div>
              <div className="game-container-playground-game-cell"></div>
              <div className="game-container-playground-game-cell"></div>
              <div className="game-container-playground-game-cell"></div>
              <div className="game-container-playground-game-cell"></div>
              <div className="game-container-playground-game-cell"></div>
              <div className="game-container-playground-game-cell"></div>
              <div className="game-container-playground-game-cell"></div>
              <div className="game-container-playground-game-cell"></div>
              <div className="game-container-playground-game-cell"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gameboard;
