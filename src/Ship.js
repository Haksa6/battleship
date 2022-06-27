const createCoordsForShip = (row, col, size, direction) => {
  const coords = [];
  coords.push({ row, col });

  //Add the size for the full coords
  //Direction true = horizontal and direction false = vertical
  if (direction) col += size - 1;
  if (!direction) row += size - 1;
  coords.push({ row, col });

  return coords;
};

export const Ship = (row, col, size = 1, direction = true) => {
  let hits = 0;
  const coords = createCoordsForShip(row, col, size, direction);
  //Counts hits until it's the size of the ship
  const hit = () => hits++;
  const isSunk = () => hits === size;
  const getStartCoords = () => coords;
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
