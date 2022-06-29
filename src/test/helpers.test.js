import { Ship } from '../Ship';
import { checkPlacement } from '../helpers';

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
