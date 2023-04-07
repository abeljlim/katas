let ingredientCheck = function(bakery, recipe) {
  for (let itemFromBakery of bakery) {
    if (itemFromBakery === recipe.ingredients[0] || itemFromBakery === recipe.ingredients[1]) {
      return true;
    }
  }
  return false;
};

const chooseRecipe = function(bakeryA, bakeryB, recipes) {
  // for a given recipe, look for a bakeryA match of an ingredient, then look for a bakeryB match. If there are no matches for either, then continue. Otherwise, return the name of the recipe.
  for (let recipe of recipes) {
    if (ingredientCheck(bakeryA, recipe) && ingredientCheck(bakeryB, recipe)) {
      return recipe.name;
    }
    /* // old code
    let hasBakeryAItem = false;
    let hasBakeryBitem = false;
    for (let itemFromBakeryA of bakeryA) {
      if (itemFromBakeryA === recipe.ingredients[0] || itemFromBakeryA === recipe.ingredients[1]) {
        hasBakeryAItem = true;
        break;
      }
    }
    if (!hasBakeryAItem) {
      continue;
    }
    // Here, the recipe has a bakery A item.
    for (let itemFromBakeryB of bakeryB) {
      if (itemFromBakeryB === recipe.ingredients[0] || itemFromBakeryB === recipe.ingredients[1]) {
        hasBakeryBitem = true;
        break;
      }
    }
    if(!hasBakeryBitem) {
      continue;
    }
    // Here, the recipe has a bakery A item and bakery B item.
    return recipe.name;
    */
  }
  return null;
};

let bakeryA = ['saffron', 'eggs', 'tomato paste', 'coconut', 'custard'];
let bakeryB = ['milk', 'butter', 'cream cheese'];
let recipes = [
  {
    name: 'Coconut Sponge Cake',
    ingredients: ['coconut', 'cake base']
  },
  {
    name: 'Persian Cheesecake',
    ingredients: ['saffron', 'cream cheese']
  },
  {
    name: 'Custard Surprise',
    ingredients: ['custard', 'ground beef']
  }
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));

bakeryA = ['potatoes', 'bay leaf', 'raisins'];
bakeryB = ['red bean', 'dijon mustard', 'apples'];
recipes = [
  {
    name: 'Potato Ganache',
    ingredients: ['potatoes', 'chocolate']
  },
  {
    name: 'Sweet Fish',
    ingredients: ['anchovies', 'honey']
  },
  {
    name: "Nima's Famous Dijon Raisins",
    ingredients: ['dijon mustard', 'raisins']
  }
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));