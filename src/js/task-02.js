const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector("#ingredients")


for (let index in ingredients){
 const item_Elem = document.createElement("li");
 item_Elem.textContent = ingredients[index]
 item_Elem.classList.add("item")
list.append(item_Elem)
}

// console.log(list)


