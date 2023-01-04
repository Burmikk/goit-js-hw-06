const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.querySelector("#ingredients")


const list = ingredients.map(ingredient => {
  let item = document.createElement("li")
  item.textContent = ingredient
  item.classList.add("item")
  return item
})


  ingredientsList.append(...list)

