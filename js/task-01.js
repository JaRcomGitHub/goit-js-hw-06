
const ulCategories = document.querySelector('ul#categories');
const listWithClass = ulCategories.querySelectorAll('li.item');
const cntWithClass = listWithClass.length;

console.log("Number of categories: " + cntWithClass);

for (let index = 0; index < cntWithClass; index++) {
    const listH2text = listWithClass[index].querySelector('h2');
    console.log("\nCategory: " + listH2text.textContent);

    const listElements = listWithClass[index].querySelectorAll('li');
    console.log("Elements: " + listElements.length);
}
