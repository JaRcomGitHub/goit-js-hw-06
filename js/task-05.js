
const elementNameInput = document.querySelector('input#name-input');
const elementNameOutput = document.querySelector('span#name-output');

elementNameInput.addEventListener('input', function (event) {
    const nameValue = event.currentTarget.value;
    elementNameOutput.textContent = nameValue ? nameValue : "Anonymous";
});
