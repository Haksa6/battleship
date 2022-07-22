import Player from '../Player';
import { Ship } from '../Ship';

describe('Player', () => {
  let player;
  let ship;

  beforeEach(() => {
    player = Player('user');
    ship = Ship(0, 0, 1);
  });

  it('Correct side for the player', () => {
    expect(player.getSide()).toBe('user');
  });

  it('Return true if player has no ships', () => {
    expect(player.hasLost()).toBe(true);
  });

  it('Attack returns true if sunk', () => {
    const enemy = Player('enemy');
    enemy.gameboard.placeShip(ship);

    expect(player.attack(enemy, 0, 0)).toBe(true);
  });
});
