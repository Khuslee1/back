let start = document.querySelector(".start");
let box = document.querySelectorAll(".box");
let text = document.querySelector("h1");
let res = document.querySelector(".res");
let arr = [null, null, null, null, null, null, null, null, null];
let checker = false;
let red = false;
let blue = false;
let gameOver = false;
let diss = false;
const winPos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],

  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],

  [0, 4, 8],
  [2, 4, 6],
];
start.addEventListener("click", () => {
  let decide = true;
  start.disabled = true;

  box.forEach((ele, i) => {
    ele.addEventListener("click", () => {
      if (
        ele.style.backgroundImage == `url("./red.png")` ||
        ele.style.backgroundImage == `url("./blue.png")`
      ) {
        decide = decide;
      } else {
        decide = !decide;
      }
      if (!gameOver) {
        if (decide) {
          ele.style.backgroundImage = `url("./red.png")`;
          arr.splice(i, 1, 1);
        } else {
          ele.style.backgroundImage = `url("./blue.png")`;
          arr.splice(i, 1, -1);
        }

        winPos.map((ele) => {
          if (arr[ele[0]] + arr[ele[1]] + arr[ele[2]] === 3)
            return (red = true);
          else if (arr[ele[0]] + arr[ele[1]] + arr[ele[2]] === -3)
            return (blue = true);
        });
        if (red) {
          text.innerHTML = "Black win!!!";
          gameOver = true;
        } else if (blue) {
          text.innerHTML = "White win!!!";
          gameOver = true;
        } else if (arr.every((el) => el !== null)) {
          text.innerHTML = "Tie!!!";
          gameOver = true;
        }
        diss = true;
        console.log(diss);
      }
    });
  });
});

res.addEventListener("click", () => {
  box.forEach((ele) => {
    ele.style.backgroundImage = "none";
  });
  arr = [null, null, null, null, null, null, null, null, null];
  text.innerHTML = "";
  red = false;
  blue = false;
  gameOver = false;
});
