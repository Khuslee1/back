// let snake = document.querySelector(".snake");
// let box = document.querySelector(".box");
// let up = document.querySelector(".up");
// let down = document.querySelector(".down");
// let left = document.querySelector(".left");
// let right = document.querySelector(".right");
// let text = document.querySelector("h1");
// let alim = document.querySelector(".alim");
// let u = false;
// let d = false;
// let r = false;
// let l = false;

// let int;
// let x = 0;
// let y = 0;
// let ax = Math.floor((Math.random() * 500) / 50) * 50;
// let ay = Math.floor((Math.random() * 500) / 50) * 50;
// alim.style.top = `${ay}px`;
// alim.style.left = `${ax}px`;
// console.log(ax, ay);

// const ideh = () => {
//   ax = Math.floor((Math.random() * 500) / 50) * 50;
//   ay = Math.floor((Math.random() * 500) / 50) * 50;
//   alim.style.top = `${ay}px`;
//   alim.style.left = `${ax}px`;
// };

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
//   if (r) {
//     x = x + 50;
//     snake.style.transform = `translate(${x}px,${y}px)`;
//     console.log(x, y);
//   } else if (d) {
//     y = y + 50;
//     snake.style.transform = `translate(${x}px,${y}px)`;
//     console.log(x, y);
//   } else if (l) {
//     x = x - 50;
//     snake.style.transform = `translate(${x}px,${y}px)`;
//     console.log(x, y);
//   } else if (u) {
//     y = y - 50;
//     snake.style.transform = `translate(${x}px,${y}px)`;
//     console.log(x, y);
//   }
//   if (x == ax && y == ay) {
//     ideh();
//   }
//   if (x < 0 || x >= 500 || y < 0 || y >= 500) {
//     clearInterval(int);
//     text.innerHTML = "game over";
//   }
// }, 1000);

let box = document.querySelector(".box");
let up = document.querySelector(".up");
let down = document.querySelector(".down");
let left = document.querySelector(".left");
let right = document.querySelector(".right");
let coor = document.querySelectorAll(".coor");
let text = document.querySelector("h1");

let u = false;
let d = false;
let r = false;
let l = false;
let int;
let num = 13;
let valid = [];

for (let i = 0; i <= 143; i++) {}
// let a = Math.floor((Math.random() * 500) / 50) * 50;

right.addEventListener("click", () => {
  u = false;
  d = false;
  r = true;
  l = false;
});
up.addEventListener("click", () => {
  u = true;
  d = false;
  r = false;
  l = false;
});
down.addEventListener("click", () => {
  u = false;
  d = true;
  r = false;
  l = false;
});
left.addEventListener("click", () => {
  u = false;
  d = false;
  r = false;
  l = true;
});

int = setInterval(() => {
  if (r) {
    coor[num].style.backgroundColor = "";
    num = num + 1;
    console.log(num);
  } else if (d) {
    coor[num].style.backgroundColor = "";
    num = num + 12;
    console.log(num);
  } else if (l) {
    coor[num].style.backgroundColor = "";
    num = num - 1;
    console.log(num);
  } else if (u) {
    coor[num].style.backgroundColor = "";
    num = num - 12;
    console.log(num);
  }
  if (num < 13 || num > 131 || num % 12 == 0 || num % 12 == 11) {
    clearInterval(int);
    text.innerHTML = "game over";
  }
  coor[num].style.backgroundColor = "green";
}, 1000);
