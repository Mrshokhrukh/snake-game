import { snake_speed } from "./snake";

let lastRenderTime = 0;

function main(currTime) {
  window.requestAnimationFrame(main);
  const secSinceLastRender = (currTime - lastRenderTime) / 1000;
  if (secSinceLastRender < 1 / snake_speed) return;


  lastRenderTime = currTime;
//   update();
//   draw();
}

window.requestAnimationFrame(main);

// function update() {
//   updateSnake();
// }
// function draw() {
//   drawSnake();
// }
