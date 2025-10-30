let box = document.querySelector(".box");
let up = document.querySelector(".up");
let down = document.querySelector(".down");
let left = document.querySelector(".left");
let right = document.querySelector(".right");
let coor = document.querySelectorAll(".coor");
let text = document.querySelector("h1");

let dir = "d";
let int;

let border = [];
let snake = [0, 1, 2, 3, 4];
let rand = Math.floor(Math.random() * 100);
let score = 0;

coor[rand].style.backgroundColor = "red";

for (let i = 0; i < 100; i++) {
  if (i < 10 || i > 89 || i % 10 == 0 || i % 10 == 9) {
    border.push(i);
  }
}

const next = () => {
  switch (dir) {
    case "d":
      coor[snake[snake.length - 1]].style.backgroundColor = "";
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
      coor[snake[snake.length - 1]].style.backgroundColor = "";
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
      coor[snake[snake.length - 1]].style.backgroundColor = "";
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
      coor[snake[snake.length - 1]].style.backgroundColor = "";
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
    coor[ele].style.backgroundColor = "green";
  });
};

const click = () => {
  // right.addEventListener("click", () => {
  //   dir = "r";
  // });
  // up.addEventListener("click", () => {
  //   dir = "u";
  // });
  // down.addEventListener("click", () => {
  //   dir = "d";
  // });
  // left.addEventListener("click", () => {
  //   dir = "l";
  // });
  document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowDown" && dir !== "u") dir = "d";
    else if (e.key === "ArrowUp" && dir !== "d") dir = "u";
    else if (e.key === "ArrowLeft" && dir !== "r") dir = "l";
    else if (e.key === "ArrowRight" && dir !== "l") dir = "r";
  });
};

const alim = () => {
  rand = Math.floor(Math.random() * 100);
  coor[rand].style.backgroundColor = "red";
  if (snake.includes(rand)) {
    rand = Math.floor(Math.random() * 100);
    coor[rand].style.backgroundColor = "red";
  }
};

int = setInterval(() => {
  click();
  next();
  if (snake[0] == rand) {
    alim();
    snake.push(snake[snake.length - 1] + 1);
  }
}, 200);

// for (let i = 0; i <= 143; i++) {
//   if (i >= 13 && i <= 131 && i % 12 !== 0 && i % 12 !== 11) {
//     valid.push(i);
//   }
// }

// rand = Math.floor(Math.random() * valid.length);
// coor[valid[rand]].style.backgroundColor = "red";

// right.addEventListener("click", () => {
//   u = false;
//   d = false;
//   r = true;
//   l = false;
// });
// up.addEventListener("click", () => {
//   u = true;
//   d = false;
//   r = false;
//   l = false;
// });
// down.addEventListener("click", () => {
//   u = false;
//   d = true;
//   r = false;
//   l = false;
// });
// left.addEventListener("click", () => {
//   u = false;
//   d = false;
//   r = false;
//   l = true;
// });

// int = setInterval(() => {
//   let tail = snake[snake.length - 1];
//   if (r) {
//     coor[tail].style.backgroundColor = "";
//     // snake[2] = snake[1];
//     // snake[1] = head;
//     snake.forEach((ele, i) => {
//       if (i != 0) {
//         snake[i + 1] = snake[i];
//       }
//     });
//     snake[1] = head;
//     head = head + 1;
//   } else if (d) {
//     coor[tail].style.backgroundColor = "";
//     snake.forEach((ele, i) => {
//       if (i != 0) {
//         snake[i + 1] = snake[i];
//       }
//     });
//     snake[1] = head;
//     head = head + 12;
//   } else if (l) {
//     coor[tail].style.backgroundColor = "";
//     snake.forEach((ele, i) => {
//       if (i != 0) {
//         snake[i + 1] = snake[i];
//       }
//     });
//     snake[1] = head;
//     head = head - 1;
//   } else if (u) {
//     coor[tail].style.backgroundColor = "";
//     snake.forEach((ele, i) => {
//       if (i != 0) {
//         snake[i + 1] = snake[i];
//       }
//     });
//     snake[1] = head;
//     head = head - 12;
//   }
//   if (head < 13 || head > 131 || head % 12 == 0 || head % 12 == 11) {
//     clearInterval(int);
//     text.innerHTML = "game over";
//   }
//   coor[head].style.backgroundColor = "blue";
//   snake.forEach((ele, i) => {
//     if (i !== 0) coor[snake[i]].style.backgroundColor = "green";
//   });

//   if (coor[head] == coor[valid[rand]]) {
//     rand = Math.floor(Math.random() * valid.length);
//     coor[valid[rand]].style.backgroundColor = "red";
//     score++;
//   }
// }, 1000);
