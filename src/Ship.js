const createCoordsForShip = ({ x, y, size, direction }) => {
  let [row, col] = [x, y];
  const coords = [];
  coords.push({ row, col });

  for (let i = 0; i < size - 1; i++) {
    if (direction === 'horizontal') col++;
    if (direction === 'vertical') row++;

    coords.push({ row, col });
  }
  return coords;
};

export const Ship = ({ row, col, size = 1, direction = 'horizontal' }) => {
  let hits = 0;
  const coords = createCoordsForShip(row, col, size, direction);
  //Counts hits until it's the size of the ship
  const hit = () => hits++;
  const isSunk = () => hits === size;
  const getStartCoords = () => coords[0];
  const getSize = () => size;
  const getDirection = () => direction;
  return {
    coords,
    getStartCoords,
    hit,
    isSunk,
    getSize,
    getDirection,
  };
};
