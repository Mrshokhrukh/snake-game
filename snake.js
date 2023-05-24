import { getDiraction } from "./input.js";

export const snake_speed = 10;

const snakeBody = [{ x: 10, y: 20 }];

let newSegment = 1;

export function updateSnake() {
  const inputDir = getDiraction();

  
  for (let i = snakeBody.length - 2; i >= 0; i--) {
    snakeBody[i + 1] = { ...snakeBody[i] };
  }

  snakeBody[0].x += inputDir.x;
  snakeBody[0].y += inputDir.y;

  addSegments();
}
export function drawSnake(game_board) {
  snakeBody.forEach((seg) => {
    const snakeElement = document.createElement("div");
    snakeElement.style.gridRowStart = seg.y;
    snakeElement.style.gridColumnStart = seg.x;
    snakeElement.classList.add("snake");
    game_board.appendChild(snakeElement);
  });
}

export function expandSnake(amount) {
  newSegment += amount;
}
export function onSnake(position, { ignoreHead = false } = {}) {
  return snakeBody.some((segment, index) => {
    if (ignoreHead && index === 0) return false;
    return equalPosition(segment, position);
  });
}

export function getSnakeHead() {
  return snakeBody[0];
}
export function snakeInter() {
  return onSnake(snakeBody[0], { ignoreHead: true });
}

function equalPosition(pos1, pos2) {
  return pos1.x === pos2.x && pos1.y === pos2.y;
}

function addSegments() {
  for (let i = 0; i < newSegment; i++) {
    snakeBody.push({ ...snakeBody[snakeBody.length - 1] });
  }

  newSegment = 0;
}
