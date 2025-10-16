let finger = document.querySelectorAll(".finger");
let container = document.querySelectorAll(".cont");
let hums = document.querySelectorAll(".hums");
let body = document.querySelectorAll("body");
let erhii = document.querySelectorAll(".erhii");
let button = document.querySelectorAll(".button");

container[0].addEventListener("click", () => {
  container[0].style.backgroundColor = "white";
});
// for (let i = 0; i < finger.length; i++) {
// let rand = Math.round(Math.random() * 10);
// let num;
// if (rand == 1 || rand == 6) {
//   num = 1;
// } else if (rand == 2 || rand == 7) {
//   num = 2;
// } else if (rand == 3 || rand == 8) {
//   num = 3;
// } else if (rand == 4 || rand == 9) {
//   num = 4;
// } else {
//   num = 5;
// }

// console.log(num);
// button[0].addEventListener("click", () => {
//   if (button[0].style.backgroundColor == "white" && num != 5) {
//     finger[num - 1].style.height = "500px";
//     hums[num - 1].style.opacity = "0.7";
//     button[0].style.backgroundColor = "gray";
//   } else if (num == 5 && button[0].style.backgroundColor == "white") {
//     erhii[0].style.backgroundColor = "brown";
//     button[0].style.backgroundColor = "gray";
//   } else if (num == 5 && button[0].style.backgroundColor == "gray") {
//     erhii[0].style.backgroundColor = "blanchedalmond";
//     button[0].style.backgroundColor = "white";
//   } else {
//     button[0].style.backgroundColor = "white";
//     erhii[0].style.backgroundColor = "blanchedalmond";
//     finger[num - 1].style.height = "300px";
//     hums[num - 1].style.opacity = "0";
//   }
// });
// }

// let button = document.querySelectorAll(".box");
// button[1].innerHTML = "0";
// let output = "0";

// button[0].addEventListener("click", () => {
//   output--;
//   button[1].innerHTML = output;
//   if (output == 10) {
//     button[1].style.backgroundColor = "red";
//   } else {
//     button[1].style.backgroundColor = "white";
//   }
// });

// button[2].addEventListener("click", () => {
//   output++;
//   button[1].innerHTML = output;
//   if (output == 10) {
//     button[1].style.backgroundColor = "red";
//   } else {
//     button[1].style.backgroundColor = "white";
//   }
// });
