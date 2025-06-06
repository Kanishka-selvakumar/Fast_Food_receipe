const recipes = {
  "Chicken Rice": {
    ingredients: ["Chicken", "Rice", "Ginger", "Garlic", "Salt", "Pepper", "Soy Sauce"],
    instructions: "Boil rice. Marinate and sauté chicken. Mix with rice and serve hot."
  },
  "Chicken Noodles": {
    ingredients: ["Noodles", "Chicken", "Onion", "Capsicum", "Soy Sauce", "Pepper", "Oil"],
    instructions: "Boil noodles. Cook chicken with spices. Mix together and toss well."
  },
  "Shawarma": {
    ingredients: ["Chicken", "Pita bread", "Garlic sauce", "Pickles", "Lettuce"],
    instructions: "Grill chicken with spices. Roll in pita with veggies and sauce."
  },
  "Burger": {
    ingredients: ["Buns", "Patty", "Lettuce", "Tomato", "Cheese", "Sauce"],
    instructions: "Grill patty, assemble with veggies and sauce between buns."
  },
  "Pizza": {
    ingredients: ["Pizza base", "Cheese", "Tomato sauce", "Toppings", "Oregano"],
    instructions: "Spread sauce, add toppings and cheese. Bake at 200°C for 15 mins."
  },
  "French Fries": {
    ingredients: ["Potatoes", "Salt", "Oil", "Pepper"],
    instructions: "Cut potatoes, deep fry until golden, and season."
  },
  "Hot Dog": {
    ingredients: ["Hot dog bun", "Sausage", "Mustard", "Ketchup", "Onion"],
    instructions: "Grill sausage and place in bun with toppings."
  },
  "Tacos": {
    ingredients: ["Tortilla", "Beef/Chicken", "Cheese", "Lettuce", "Salsa"],
    instructions: "Fill tortillas with cooked meat and toppings."
  },
  "Sandwich": {
    ingredients: ["Bread", "Egg/Chicken", "Mayonnaise", "Veggies"],
    instructions: "Layer ingredients between bread slices and toast."
  },
  "Wrap": {
    ingredients: ["Flatbread", "Chicken", "Veggies", "Yogurt sauce"],
    instructions: "Fill and wrap the flatbread, then grill lightly."
  },
  "Momos": {
    ingredients: ["Maida", "Veg/Chicken filling", "Oil", "Ginger", "Garlic"],
    instructions: "Fill dough with stuffing, steam for 15 minutes."
  },
  "Fried Rice": {
    ingredients: ["Rice", "Carrots", "Beans", "Soy sauce", "Egg (optional)"],
    instructions: "Sauté veggies, add cooked rice, mix with sauce."
  },
  "Popcorn Chicken": {
    ingredients: ["Chicken", "Flour", "Spices", "Oil"],
    instructions: "Coat chicken and deep fry till crispy."
  },
  "Onion Rings": {
    ingredients: ["Onions", "Flour", "Breadcrumbs", "Oil"],
    instructions: "Dip onion slices in batter and deep fry."
  },
  "Chicken Wings": {
    ingredients: ["Chicken wings", "Hot sauce", "Butter", "Salt", "Pepper"],
    instructions: "Bake or fry wings, coat in sauce and serve."
  },
  "Grilled Cheese": {
    ingredients: ["Bread", "Cheese", "Butter"],
    instructions: "Butter bread, add cheese, grill till golden."
  },
  "Paneer Roll": {
    ingredients: ["Paneer", "Roll", "Spices", "Veggies", "Sauce"],
    instructions: "Stuff roll with paneer filling and grill lightly."
  },
  "Cheese Balls": {
    ingredients: ["Cheese", "Potato", "Breadcrumbs", "Spices", "Oil"],
    instructions: "Mix, roll into balls, coat and deep fry."
  },
  "Veg Puff": {
    ingredients: ["Puff pastry", "Mixed veggies", "Spices"],
    instructions: "Fill pastry with veggie mix, bake till golden."
  },
  "Donut": {
    ingredients: ["Flour", "Sugar", "Yeast", "Butter", "Chocolate"],
    instructions: "Make dough, fry and glaze with chocolate."
  }
};

// Generate buttons
const dishList = document.getElementById("dishList");
const recipeSection = document.getElementById("recipeSection");

Object.keys(recipes).forEach(dish => {
  const btn = document.createElement("button");
  btn.className = "dish-btn";
  btn.textContent = dish;
  btn.onclick = () => showRecipe(dish);
  dishList.appendChild(btn);
});

function showRecipe(dish) {
  const recipe = recipes[dish];
  recipeSection.style.display = "block";
  recipeSection.innerHTML = `
    <h2>${dish}</h2>
    <h3>🍽️ Ingredients:</h3>
    <ul>${recipe.ingredients.map(item => `<li>${item}</li>`).join('')}</ul>
    <h3>👨‍🍳 Instructions:</h3>
    <p>${recipe.instructions}</p>
  `;
}
