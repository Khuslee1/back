let box = document.querySelectorAll(".box");
let cont = document.querySelector(".cont");
let left = document.querySelector(".left");
let right = document.querySelector(".right");
let boxCont = document.querySelector(".box_cont");
let a = 0;
let offset = 0;
let leftd = 0;
let rigthd = 0;
let zuvputin = 0;
if (zuvputin == 0) {
  right.disabled = true;
} else if (zuvputin == 10) {
  left.disabled = true;
} else {
  left.disabled = false;
  right.disabled = false;
}
box[zuvputin + 1].style.transform = "scale(1.25)";
box[zuvputin + 2].style.transform = "scale(0.75)";

right.addEventListener("click", () => {
  offset += 230;
  boxCont.style.transform = `translateX(${offset}px)`;
  rigthd++;
  zuvputin = leftd - rigthd;
  if (zuvputin == 0) {
    right.disabled = true;
  } else if (zuvputin == 10) {
    left.disabled = true;
  } else {
    left.disabled = false;
    right.disabled = false;
  }
  box[zuvputin + 1].style.transform = "scale(1.25)";
  box[zuvputin].style.transform = "scale(0.75)";
  box[zuvputin + 2].style.transform = "scale(0.75)";
  boxCont.style.transition = `0.5s`;
  box[zuvputin + 1].style.transition = "0.5s";
  box[zuvputin].style.transition = "0.5s";
  box[zuvputin + 2].style.transition = "0.5s";
});

left.addEventListener("click", () => {
  offset -= 230;
  boxCont.style.transform = `translateX(${offset}px)`;
  leftd++;
  zuvputin = leftd - rigthd;
  if (zuvputin == 0) {
    right.disabled = true;
  } else if (zuvputin == 10) {
    left.disabled = true;
  } else {
    left.disabled = false;
    right.disabled = false;
  }
  box[zuvputin + 1].style.transform = "scale(1.25)";
  box[zuvputin].style.transform = "scale(0.75)";
  box[zuvputin + 2].style.transform = "scale(0.75)";
  boxCont.style.transition = `0.5s`;
  box[zuvputin + 1].style.transition = "0.5s";
  box[zuvputin].style.transition = "0.5s";
  box[zuvputin + 2].style.transition = "0.5s";
});
box.forEach((ele) => {
  ele.style.opacity = `${a}`;
  a = a + 0.1;
});
