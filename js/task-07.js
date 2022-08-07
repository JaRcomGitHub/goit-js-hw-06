
const inputFontSizeControl = document.querySelector('input#font-size-control');
const textEl = document.querySelector('span#text');

inputFontSizeControl.addEventListener('input', function(){
    textEl.style.fontSize = inputFontSizeControl.value + 'px' ;
});
