let count = document.querySelector(".count");
let btns = document.querySelector(".buttons");
// let subtractBtn = document.querySelector(".subtract");
// let resetBtn = document.querySelector(".reset");
// let addBtn = document.querySelector(".add");

btns.addEventListener("click", (e) => {
  if (e.target.classList.contains("add")) {
    count.innerHTML++;
    setColor();
  }
  if (e.target.classList.contains("subtract")) {
    count.innerHTML--;
    setColor();
  }

  if (e.target.classList.contains("reset")) {
    count.innerHTML = 0;
    setColor();
  }
});

function setColor() {
  if (count.innerHTML > 0) {
    count.style.color = "green";
  } else if (count.innerHTML < 0) {
    count.style.color = "orangered";
  } else {
    count.style.color = "white";
  }
}
