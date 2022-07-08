import { Ship } from '../Ship';
import { checkPlacement, randomInt } from '../helpers';

describe('Ship helper functions', () => {
  let shipTooBigHorizontal;
  let shipRightSize;

  beforeEach(() => {
    shipTooBigHorizontal = new Ship(1, 9, 4);
    shipRightSize = new Ship(1, 9, 1);
  });

  it('Return false if ship is too big', () => {
    expect(checkPlacement(shipTooBigHorizontal)).toBe(false);
  });

  it('Return true if ship is right size', () => {
    expect(checkPlacement(shipRightSize)).toBe(true);
  });
});

describe('Board helper functions', () => {
  it('Be between the right range', () => {});
});

describe('Random number function', () => {
  it('Be between the right range', () => {
    expect(randomInt()).toBeGreaterThanOrEqual(0);
    expect(randomInt()).toBeLessThanOrEqual(9);
  });
});
