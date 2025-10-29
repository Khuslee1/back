let count = document.querySelector(".num");
let start = document.querySelector(".start");
let res = document.querySelector(".res");
let box = document.querySelectorAll(".box");
let move = document.querySelectorAll(".conti");
let zuram = document.querySelectorAll(".blue");
let int;

score = 0;
let render = (rand) => {
  move.forEach((ele, i) => {
    ele.style.transform = "";
    zuram[i].style.backgroundImage = `url("./angryb.png")`;
  });
  setTimeout(() => {
    move[rand].style.transform = "translateY(300px)";
    move[rand].style.transition = "0.5s";
  }, 1000);
  move[rand].style.transform = "translateY(-300px)";
  move[rand].style.transition = "0.5s";
};

start.addEventListener("click", () => {
  start.disabled = true;
  int = setInterval(() => {
    let rand;
    let num = Math.random() * 10;
    if (num <= 1.66) rand = 0;
    else if (num <= 2 * 1.66) rand = 1;
    else if (num <= 3 * 1.66) rand = 2;
    else if (num <= 4 * 1.66) rand = 3;
    else if (num <= 5 * 1.66) rand = 4;
    else rand = 5;
    render(rand);
  }, 1500);
});

res.addEventListener("click", () => {
  clearInterval(int);
  start.disabled = false;
  move.forEach((ele) => {
    ele.style.transform = "";
  });
});

zuram.forEach((ele) => {
  ele.addEventListener("click", () => {
    if (ele.style.backgroundImage == `url("./angryb.png")`) {
      score++;
      console.log(score);
      ele.style.backgroundImage = `url("./black.png")`;
      count.innerHTML = `${score}`;
    }
  });
});
