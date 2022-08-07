
let counterValue = 0;

const decrementButton = document.querySelector('[data-action="decrement"]');
const incrementButton = document.querySelector('[data-action="increment"]');
const elementCounterValue = document.querySelector('span#value');

decrementButton.addEventListener('click', function () {
    counterValue -= 1;
    elementCounterValue.textContent = counterValue;
});

incrementButton.addEventListener('click', function () {
    counterValue += 1;
    elementCounterValue.textContent = counterValue;
});
