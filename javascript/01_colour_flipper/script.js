const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C",
"D", "E", "F"];

const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', () => {
  document.body.style.backgroundColor = getHexCode();
  color.textContent = getHexCode();
});

const getHexCode = () => {
  let hexCode = "#";

  for (let i = 0; i < 6; i++) {
    let random = hex[Math.floor(Math.random() * hex.length)];
    hexCode += random;
  };

  return hexCode;
};
