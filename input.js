let snakeDiraction = { x: 0, y: 0 };
let lastInputDiraction = { x: 0, y: 0 };
window.addEventListener("keydown", (e) => {
  switch (e.key) {
    case "ArrowUp":
      if (lastInputDiraction.y !== 0) break;
      snakeDiraction = { x: 0, y: -1 };
      break;
    case "ArrowDown":
      if (lastInputDiraction.y !== 0) break;
      snakeDiraction = { x: 0, y: 1 };
      break;
    case "ArrowLeft":
      if (lastInputDiraction.x !== 0) break;
      snakeDiraction = { x: -1, y: 0 };
      break;
    case "ArrowRight":
      if (lastInputDiraction.x !== 0) break;
      snakeDiraction = { x: 1, y: 0 };
      break;
  }
});

export function getDiraction() {
  lastInputDiraction = snakeDiraction;
  return snakeDiraction;
}
