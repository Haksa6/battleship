import Player from '../Player';

describe('Player', () => {
  let player;

  beforeEach(() => {
    player = Player('user');
  });

  it('Correct side for the player', () => {
    expect(player.getSide()).toBe('user');
  });

  it('Return true if player has no ships', () => {
    expect(player.hasLost()).toBe(true);
  });
});
