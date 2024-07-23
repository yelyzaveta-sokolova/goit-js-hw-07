
const mainColor = document.querySelector('.color');
const btn = document.querySelector('.change-color');

btn.addEventListener('click', changeColor);

function changeColor() {
  const color = getRandomHexColor();

 document.body.style.backgroundColor = color;
  mainColor.textContent = color;
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


