
const inputSymbols = document.querySelector('input#validation-input');
// const cntSymbolsForCheck = parseInt(inputSymbols.getAttribute('data-length'));
const cntSymbolsForCheck = parseInt(inputSymbols.dataset.length);

inputSymbols.addEventListener('blur', function () {
    inputSymbols.classList.remove('valid',  'invalid');

    if (cntSymbolsForCheck === inputSymbols.value.length){
        inputSymbols.classList.add('valid');
    }else{
        inputSymbols.classList.add('invalid');
    }
});
