import GameboardFunc from '../GameboardFunc';
import { Ship } from '../Ship';

describe('Gameboard', () => {
  let ship;
  let shipDirectionVertical;

  beforeEach(() => {
    ship = Ship(1, 1, 1);
    shipDirectionVertical = Ship(1, 1, 1, true);
  });

  it('Correct sizing for the ship', () => {
    expect(ship.getSize() === 1);
  });

  it('Correct coords for the ship', () => {
    expect(ship.getStartCoords() === [1, 1]);
  });

  it('Correct direction', () => {
    expect(shipDirectionVertical.getDirection()).toBe(true);
  });

  it('Ship gets sunk after a hit', () => {
    expect(ship.isSunk()).toBe(false);

    ship.hit();

    expect(ship.isSunk()).toBe(true);
  });
});
