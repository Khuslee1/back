let count = document.querySelector(".num");
let start = document.querySelector(".start");
let res = document.querySelector(".res");
let box = document.querySelectorAll(".box");
let int;

const render = (num) => {
  box[num].style.backgroundColor = "red";
};

start.addEventListener("click", () => {
  int = setInterval(() => {
    let rand;
    let num = Math.random() * 10;
    if (num <= 1.66) rand = 0;
    else if (num <= 2 * 1.66) rand = 1;
    else if (num <= 3 * 1.66) rand = 2;
    else if (num <= 4 * 1.66) rand = 3;
    else if (num <= 5 * 1.66) rand = 4;
    else rand = 5;

    console.log(rand);
    render(rand);
  }, 8000);
});
