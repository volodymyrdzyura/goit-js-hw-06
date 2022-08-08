
const nav = document.querySelector("ul#categories");
const nav_Elem = nav.querySelectorAll("li.item");
console.log(`Number of categories: ${nav_Elem.length}`)

const text_Elem = nav.querySelectorAll("h2");

nav_Elem.forEach(function (value, index) {
    console.log(`Category ${text_Elem[index].textContent}`);
    console.log(`Elements: ${nav_Elem[index].querySelectorAll("li").length}`)
});

