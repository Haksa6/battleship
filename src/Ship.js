const createCoordsForShip = (row, col, size, direction) => {
  const coords = [];
  coords.push({ row, col });

  //Add the size for the full coords
  if (direction === 'horizontal') col += size - 1;
  if (direction === 'vertical') row += size - 1;
  coords.push({ row, col });

  return coords;
};

export const Ship = (row, col, size = 1, direction = 'horizontal') => {
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
