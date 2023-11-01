let counter = document.querySelector('.count');
let input = document.querySelector('input');

input.addEventListener('keyup', () => {
  counter.innerHTML = input.value.length;
});