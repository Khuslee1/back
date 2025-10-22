const input = document.querySelector(".input");
const add = document.querySelector(".add");
const list = document.querySelector(".list");
const all = document.querySelector(".all");
const active = document.querySelector(".active");
const completed = document.querySelector(".completed");
const task = document.querySelector(".task");
const taskCont = document.querySelector(".task_counter");
let content = [];

const ListItem = (cont) => {
  return `<div class="item"><div class="check"><input type="checkbox" class="hiisenuu">${cont}</div><button class="delete">Delete</button></div>`;
};

const numTask = (num) => {
  return `<div class="task">${num} of ${content.length} tasks completed</div>
        <button>Clear completed</button>`;
};

const change = () => {
  return `No tasks yet. Add one above!`;
};
const render = () => {
  list.innerHTML = content
    .map((item) => {
      return ListItem(item.text);
    })
    .join("");

  if (content.length == 0) {
    taskCont.innerHTML = change();
  } else {
    let count = 0;
    content.forEach((num) => {
      if (num.check) {
        count++;
      }
    });

    taskCont.innerHTML = numTask(count);
  }

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
      if (confirm("Are youu sure?")) {
        arr = arr.filter((el, i) => i == index);
        content = content.filter((el) => el.uni != arr[0].uni);
        render();
        all.style.backgroundColor = "#3C82F6";
        all.style.color = "#ffffff";
        active.style.backgroundColor = "#F3F4F6";
        active.style.color = "#363636";
        completed.style.backgroundColor = "#F3F4F6";
        completed.style.color = "#363636";
      } else {
        arr = arr;
      }
    });
  });

  const clearComp = document.querySelector(".task_counter button");
  clearComp.addEventListener("click", () => {
    if (confirm("Are youu sure?")) {
      content = content.filter((el) => el.check == false);
      render();
    } else {
      content = content;
    }
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
  input.value = "";
  list.style.paddingBottom = "16px";
});
