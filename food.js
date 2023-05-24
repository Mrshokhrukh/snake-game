import { randomGridPos } from "./grid.js";
import { expandSnake, onSnake } from "./snake.js";

let food = getRandomFood();

let expan_rate = 1;

export function updateFood() {
  if (onSnake(food)) {
    expandSnake(expan_rate);
    food = getRandomFood();
  }
}

export function drawFood(game_board) {
  const foodElement = document.createElement("div");
  foodElement.style.gridRowStart = food.y;
  foodElement.style.gridColumnStart = food.x;
  foodElement.classList.add("food");
  game_board.appendChild(foodElement);
}

function getRandomFood() {
  {
    let newFoodPosition;
    while (newFoodPosition == null || onSnake(newFoodPosition)) {
      newFoodPosition = randomGridPos();
    }

    return newFoodPosition;
  }
}
