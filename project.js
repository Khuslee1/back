const input = document.querySelector(".input");
const add = document.querySelector(".add");
const list = document.querySelector(".list");
const all = document.querySelector(".all");
const active = document.querySelector(".active");
const completed = document.querySelector(".completed");

let content = [];

const ListItem = (cont) => {
  return `<div class="item"><div class="check"><input type="checkbox" class="hiisenuu">${cont}</div><button class="delete">Delete</button></div>`;
};
const render = () => {
  list.innerHTML = content
    .map((item) => {
      return ListItem(item.text);
    })
    .join("");
  angilah();
  addlist(content);
  checker(content);
  all.style.backgroundColor = "#3C82F6";
  all.style.color = "#ffffff";
  active.style.backgroundColor = "#F3F4F6";
  active.style.color = "#363636";
  completed.style.backgroundColor = "#F3F4F6";
  completed.style.color = "#363636";
};

const angilah = () => {
  all.addEventListener("click", () => {
    list.innerHTML = content
      .map((item) => {
        return ListItem(item.text);
      })
      .join("");
    checker(content);
    addlist(content);
    all.style.backgroundColor = "#3C82F6";
    all.style.color = "#ffffff";
    active.style.backgroundColor = "#F3F4F6";
    active.style.color = "#363636";
    completed.style.backgroundColor = "#F3F4F6";
    completed.style.color = "#363636";
  });
  active.addEventListener("click", () => {
    list.innerHTML = content
      .filter((ele) => ele.check == false)
      .map((item) => {
        return ListItem(item.text);
      })
      .join("");
    checker(content.filter((ele) => ele.check == false));
    addlist(content.filter((ele) => ele.check == false));
    active.style.backgroundColor = "#3C82F6";
    active.style.color = "#ffffff";
    all.style.backgroundColor = "#F3F4F6";
    all.style.color = "#363636";
    completed.style.backgroundColor = "#F3F4F6";
    completed.style.color = "#363636";
  });
  completed.addEventListener("click", () => {
    list.innerHTML = content
      .filter((ele) => ele.check == true)
      .map((item) => {
        return ListItem(item.text);
      })
      .join("");
    checker(content.filter((ele) => ele.check == true));
    addlist(content.filter((ele) => ele.check == true));
    completed.style.backgroundColor = "#3C82F6";
    completed.style.color = "#ffffff";
    active.style.backgroundColor = "#F3F4F6";
    active.style.color = "#363636";
    all.style.backgroundColor = "#F3F4F6";
    all.style.color = "#363636";
  });
};

const addlist = (arr) => {
  const delet = document.querySelectorAll(".delete");
  delet.forEach((btn, index) => {
    btn.addEventListener("click", () => {
      arr = arr.filter((el, i) => i == index);
      console.log(arr);
      content = content.filter((el) => el.uni != arr[0].uni);
      console.log(content);
      render();
      all.style.backgroundColor = "#3C82F6";
      all.style.color = "#ffffff";
      active.style.backgroundColor = "#F3F4F6";
      active.style.color = "#363636";
      completed.style.backgroundColor = "#F3F4F6";
      completed.style.color = "#363636";
    });
  });
};

const checker = (arr) => {
  const checkm = document.querySelectorAll(".hiisenuu");
  checkm.forEach((ele, i) => {
    ele.addEventListener("change", () => {
      arr[i].check = ele.checked;
      render();
    });
    ele.checked = arr[i].check;
  });
};

add.addEventListener("click", () => {
  const value = { text: input.value, check: false, uni: content.length };
  content.push(value);
  console.log(content);
  render();
});
