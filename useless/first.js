// // let finger = document.querySelectorAll(".finger");
// let container = document.querySelectorAll(".container");
// let para = document.querySelectorAll(".pa");
// // let body = document.querySelectorAll("body");
// // let erhii = document.querySelectorAll(".erhii");
// let button = document.querySelectorAll(".button");

// function HTML() {
//   para[0].innerHTML = "👺<b>Hypertext </b> &nbsp; Markup Language";
// }
// function JS() {
//   para[0].innerHTML = "🫡<b>JavaScript</b>";
// }
// function CSS() {
//   para[0].innerHTML = "🧔🏿‍♀️<b>Cascading </b>&nbsp;  Style Sheet";
// }
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

// function add() {
//   let firstnum = document.getElementById("first");
//   let secondnum = document.getElementById("second");
//   let result = document.getElementsByClassName("result");
//   const result1 = Number(firstnum.value) + Number(secondnum.value);
//   result[0].innerHTML = result1;
// }
// function nas() {
//   let firstnum = document.getElementById("first");
//   let result = document.getElementsByClassName("result");
//   if (Number(firstnum.value) < 18) {
//     result[0].innerHTML = "Nas chin boloogu bnaa 🐣";
//   } else {
//     result[0].innerHTML = "er hurga 🐏";
//   }
// }
// function check() {
//   let first = document.getElementById("first");
//   let result = document.getElementsByClassName("result");
//   if (first.value == "") {
//     result[0].innerHTML = "Mailee oruuclaaachee 🤬";
//   } else {
//     result[0].innerHTML = "Amjilttai 😇";
//   }
// }

// let first = document.getElementById("first");
// let result = document.getElementsByClassName("result");
// first.addEventListener("input", () => {
//   result[0].innerHTML = first.value.length;
//   console.log(result[0]);
// });
let first = document.getElementById("first");
let result = document.getElementsByClassName("result");
let button = document.getElementsByClassName("button");
hadgal = "";
button[0].addEventListener("click", () => {
  hadgal = hadgal + "-" + first.value + "</br>";
  result[0].innerHTML = hadgal;
});
