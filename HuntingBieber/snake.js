let box = document.querySelector(".box");
let up = document.querySelector(".up");
let down = document.querySelector(".down");
let left = document.querySelector(".left");
let right = document.querySelector(".right");
let coor = document.querySelectorAll(".coor");
let text = document.querySelectorAll("h1");

let dir = "d";
let int;

let border = [];
let snake = [0, 1];
let rand = Math.floor(Math.random() * 100);
let score = 0;
let winner = false;

coor[rand].style.backgroundImage = `url("./baby.png")`;

for (let i = 0; i < 100; i++) {
  if (i < 10 || i > 89 || i % 10 == 0 || i % 10 == 9) {
    border.push(i);
  }
}

const next = () => {
  switch (dir) {
    case "d":
      coor[snake[snake.length - 1]].style.backgroundImage = "";
      const newPosd = [];
      if (border.includes(snake[0]) && snake[0] >= 90) {
        newPosd.push(snake[0] - 90);
        for (let i = 1; i < snake.length; i++) {
          newPosd.push(snake[i - 1]);
        }
        snake = newPosd;
      } else {
        newPosd.push(snake[0] + 10);
        for (let i = 1; i < snake.length; i++) {
          newPosd.push(snake[i - 1]);
        }
        snake = newPosd;
      }
      render();
      break;
    case "u":
      coor[snake[snake.length - 1]].style.backgroundImage = "";
      const newPosu = [];
      if (border.includes(snake[0]) && snake[0] <= 9) {
        newPosu.push(snake[0] + 90);
        for (let i = 1; i < snake.length; i++) {
          newPosu.push(snake[i - 1]);
        }
        snake = newPosu;
      } else {
        newPosu.push(snake[0] - 10);
        for (let i = 1; i < snake.length; i++) {
          newPosu.push(snake[i - 1]);
        }
        snake = newPosu;
      }
      render();
      break;
    case "l":
      coor[snake[snake.length - 1]].style.backgroundImage = "";
      const newPosl = [];
      if (border.includes(snake[0]) && snake[0] % 10 == 0) {
        newPosl.push(snake[0] + 9);
        for (let i = 1; i < snake.length; i++) {
          newPosl.push(snake[i - 1]);
        }
        snake = newPosl;
      } else {
        newPosl.push(snake[0] - 1);
        for (let i = 1; i < snake.length; i++) {
          newPosl.push(snake[i - 1]);
        }
        snake = newPosl;
      }
      render();
      break;
    case "r":
      coor[snake[snake.length - 1]].style.backgroundImage = "";
      const newPosr = [];
      if (border.includes(snake[0]) && snake[0] % 10 == 9) {
        newPosr.push(snake[0] - 9);
        for (let i = 1; i < snake.length; i++) {
          newPosr.push(snake[i - 1]);
        }
        snake = newPosr;
      } else {
        newPosr.push(snake[0] + 1);
        for (let i = 1; i < snake.length; i++) {
          newPosr.push(snake[i - 1]);
        }
        snake = newPosr;
      }
      render();
      break;
  }
};
const render = () => {
  snake.forEach((ele) => {
    coor[ele].style.backgroundImage = `url("./diddy.png")`;
  });
};

const click = () => {
  document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowDown" && dir !== "u") dir = "d";
    else if (e.key === "ArrowUp" && dir !== "d") dir = "u";
    else if (e.key === "ArrowLeft" && dir !== "r") dir = "l";
    else if (e.key === "ArrowRight" && dir !== "l") dir = "r";
  });
};

const alim = () => {
  rand = Math.floor(Math.random() * 100);
  while (snake.includes(rand)) {
    rand = Math.floor(Math.random() * 100);
  }
  coor[rand].style.backgroundImage = `url("./baby.png")`;
};

click();
int = setInterval(() => {
  next();
  if (snake.slice(1).includes(snake[0])) {
    clearInterval(int);
    text[1].innerHTML = `Welcome to FREAK OFFS!!!🫦  Score: ${snake.length}`;
  }
  if (snake[0] == rand) {
    snake.push(snake[snake.length - 1] + 1);
    alim();
  }
  if (winner) {
    text.inner;
  }
}, 200);
