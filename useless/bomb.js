const box = document.querySelector(".box");
const coor = document.querySelectorAll(".coor");
let int;
let int1;
let column = [5];
let count = 0;
let sec = 0;
let birdCoor = 153;

// const random = () => {
//   let rand = Math.floor(Math.random() * 10) + 1;
//   //   let rand2 = 10 - rand + 1;
//   return rand;
// };

// int = setInterval(() => {
//   column.push(random());
//   count++;
// }, 4000);

// int1 = setInterval(() => {
//   column.forEach((ele, j) => {
//     for (let i = 0; i <= ele; i++) {
//       coor[i * 17 + sec].style.backgroundColor = "green";
//       coor[i * 17].style.backgroundColor = "";
//     }
//   });
//   console.log(column);
//   sec++;
//   if (column.length == 17) {
//     sec = 0;
//   }
// }, 1000);

const bird = () => {
  coor[birdCoor].style.backgroundColor = "red";
};
