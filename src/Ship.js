const createCoordsForShip = (row, col, size, direction) => {
  const coords = [];
  coords.push({ row, col });

  //Add the size for the full coords
  //Direction true = horizontal and direction false = vertical
  for (let i = 0; i < size - 1; i++) {
    if (direction) col++;
    if (!direction) row++;
    coords.push({ row, col });
  }

  return coords;
};

export const Ship = (row, col, size = 1, direction = true, id) => {
  //direction true = horizontal, false = vertical
  let hits = 0;
  const coords = createCoordsForShip(row, col, size, direction);
  //Counts hits until it's the size of the ship
  const hit = () => hits++;
  const isSunk = () => hits === size;
  const getStartCoords = () => coords[0];
  const getSize = () => size;
  const getDirection = () => direction;
  const getShipID = () => id;
  return {
    coords,
    getStartCoords,
    hit,
    isSunk,
    getSize,
    getDirection,
    getShipID,
  };
};
