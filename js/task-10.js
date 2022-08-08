function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const ElForCollection = document.querySelector('div#boxes');
const buttonCreateEl = document.querySelector('[data-create]');
const buttonDestroyEl = document.querySelector('[data-destroy]');
let sizeForBox = 30;

function createBoxes(amount){
  const elements = [];

  for (let index = 0; index < amount; index++, sizeForBox += 10) {
    const element = document.createElement("div");
    element.style.backgroundColor = getRandomHexColor();
    element.style.height = sizeForBox + 'px';
    element.style.width = sizeForBox + 'px';
    elements.push(element);
  }

  ElForCollection.append(...elements);
}

function destroyBoxes(){
  ElForCollection.textContent = '';
  sizeForBox = 30;
}

buttonCreateEl.addEventListener('click', function(){
  const inputCntEl = document.querySelector('input');
  createBoxes(parseInt(inputCntEl.value));
});

buttonDestroyEl.addEventListener('click', destroyBoxes);
