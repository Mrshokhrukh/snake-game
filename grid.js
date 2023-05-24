export function randomGridPos() {
  return {
    x: Math.floor(Math.random() * 30) + 1,
    y: Math.floor(Math.random() * 30) + 1,
  };
}

export function outSideGrid(position) {
  return position.x > 30 || position.x < 1 || position.y > 30 || position.y < 1;
}
