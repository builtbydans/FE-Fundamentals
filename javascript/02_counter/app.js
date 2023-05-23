const decreaseBtn = document.querySelector('.decrease');
const increaseBtn = document.querySelector('.increase');
const resetBtn = document.querySelector('.reset');
const countValue = document.getElementById('value');

let counter = 0;

decreaseBtn.addEventListener('click', () => {
  let decrease = counter--;
  countValue.textContent = decrease;
});

increaseBtn.addEventListener('click', () => {
  let increase = counter++;
  countValue.textContent = increase;
});

resetBtn.addEventListener('click', () => {
  counter = 0;
  countValue.textContent = counter;
});
