import { drawFood, updateFood } from "./food.js";
import { outSideGrid } from "./grid.js";
import {
  drawSnake,
  getSnakeHead,
  snake_speed,
  updateSnake,
} from "./snake.js";

let lastRenderTime = 0;

let gameOver = false;
const game_board = document.getElementById("game-board");

function main(currTime) {
  if (gameOver) {
    if (
      confirm("yutqazdingiz ! boshqattan boshlash uchun ok tugmasini bosing")
    ) {
      window.location = "/";
    }
    return;
  }

  window.requestAnimationFrame(main);
  const secSinceLastRender = (currTime - lastRenderTime) / 1000;
  if (secSinceLastRender < 1 / snake_speed) return;

  lastRenderTime = currTime;
  update();
  draw();
}

window.requestAnimationFrame(main);

function update() {
  updateSnake();
  updateFood();
  checkDeath();
}
function draw() {
  game_board.innerHTML = "";
  drawSnake(game_board);
  drawFood(game_board);
}

function checkDeath() {
  gameOver = outSideGrid(getSnakeHead());
}
