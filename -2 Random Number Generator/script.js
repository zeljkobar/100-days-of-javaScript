let number = document.querySelector(".count");
let btn = document.querySelector(".buttons");

btn.addEventListener("click", () => {
  let rand = Math.floor(Math.random() * 1000);
  number.innerHTML = rand;
});
