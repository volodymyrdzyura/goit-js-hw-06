const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector("#ingredients")

const process = ingredients.map(ingredient => {
  const itemElem = document.createElement("li");
  itemElem.textContent = ingredient;
  itemElem.classList = "Item";
  return itemElem
})

list.append(...process)


