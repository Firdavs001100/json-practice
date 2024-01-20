import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

//Step 1: Run the solution.js file without looking at the code.
//Step 2: You can go to the recipe.json file to see the full structure of the recipeJSON below.
const recipeJSON =
  '[{"id": "0001","type": "taco","name": "Chicken Taco","price": 2.99,"ingredients": {"protein": {"name": "Chicken","preparation": "Grilled"},  "salsa": {"name": "Tomato Salsa","spiciness": "Medium"},  "toppings": [{"name": "Lettuce",  "quantity": "1 cup",  "ingredients": ["Iceberg Lettuce"]  },      {"name": "Cheese",  "quantity": "1/2 cup",  "ingredients": ["Cheddar Cheese", "Monterey Jack Cheese"]  },      {"name": "Guacamole",  "quantity": "2 tablespoons",  "ingredients": ["Avocado", "Lime Juice", "Salt", "Onion", "Cilantro"]  },      {"name": "Sour Cream",  "quantity": "2 tablespoons",  "ingredients": ["Sour Cream"]  }      ]    }  },{"id": "0002","type": "taco","name": "Beef Taco","price": 3.49,"ingredients": {"protein": {"name": "Beef","preparation": "Seasoned and Grilled"},  "salsa": {"name": "Salsa Verde","spiciness": "Hot"},  "toppings": [{"name": "Onions",  "quantity": "1/4 cup",  "ingredients": ["White Onion", "Red Onion"]  },      {"name": "Cilantro",  "quantity": "2 tablespoons",  "ingredients": ["Fresh Cilantro"]  },      {"name": "Queso Fresco",  "quantity": "1/4 cup",  "ingredients": ["Queso Fresco"]  }      ]    }  },{"id": "0003","type": "taco","name": "Fish Taco","price": 4.99,"ingredients": {"protein": {"name": "Fish","preparation": "Battered and Fried"},  "salsa": {"name": "Chipotle Mayo","spiciness": "Mild"},  "toppings": [{"name": "Cabbage Slaw",  "quantity": "1 cup",  "ingredients": [    "Shredded Cabbage",    "Carrot",    "Mayonnaise",    "Lime Juice",    "Salt"          ]  },      {"name": "Pico de Gallo",  "quantity": "1/2 cup",  "ingredients": ["Tomato", "Onion", "Cilantro", "Lime Juice", "Salt"]  },      {"name": "Lime Crema",  "quantity": "2 tablespoons",  "ingredients": ["Sour Cream", "Lime Juice", "Salt"]  }      ]    }  }]';
const recipe = JSON.parse(recipeJSON);

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs");
});

// data for the Chicken
var the0Name = recipe[0].name;
var theIngredients = recipe[0].ingredients.protein.name + ", " + recipe[0].ingredients.protein.preparation;
var theSalsa = recipe[0].ingredients.salsa.name;
var theToppings0 = recipe[0].ingredients.toppings[0].quantity + " of " + recipe[0].ingredients.toppings[0].name
var theToppings1 = recipe[0].ingredients.toppings[1].quantity + " of " + recipe[0].ingredients.toppings[1].name
var theToppings2 = recipe[0].ingredients.toppings[2].quantity + " of " + recipe[0].ingredients.toppings[2].name
var theToppings3 = recipe[0].ingredients.toppings[3].quantity + " of " + recipe[0].ingredients.toppings[3].name

// data for the Beef
var the1Name = recipe[1].name;
var the1Ingredients = recipe[1].ingredients.protein.name + ", " + recipe[1].ingredients.protein.preparation;
var the1Salsa = recipe[1].ingredients.salsa.name;
var the1Toppings0 = recipe[1].ingredients.toppings[0].quantity + " of " + recipe[1].ingredients.toppings[0].name
var the1Toppings1 = recipe[1].ingredients.toppings[1].quantity + " of " + recipe[1].ingredients.toppings[1].name
var the1Toppings2 = recipe[1].ingredients.toppings[2].quantity + " of " + recipe[1].ingredients.toppings[2].name

// data for the Fish
var the2Name = recipe[2].name;
var the2Ingredients = recipe[2].ingredients.protein.name + ", " + recipe[2].ingredients.protein.preparation;
var the2Salsa = recipe[2].ingredients.salsa.name;
var the2Toppings0 = recipe[2].ingredients.toppings[0].quantity + " of " + recipe[2].ingredients.toppings[0].name
var the2Toppings1 = recipe[2].ingredients.toppings[1].quantity + " of " + recipe[2].ingredients.toppings[1].name
var the2Toppings2 = recipe[2].ingredients.toppings[2].quantity + " of " + recipe[2].ingredients.toppings[2].name


const theDataOfChicken = {
  ingredients : theIngredients,
  salsa : theSalsa,
  toppings : {
    topping0 : theToppings0,
    topping1 : theToppings1,
    topping2 : theToppings2,
    topping3 : theToppings3
  }
};

const theDataOfBeef = {
  ingredients : the1Ingredients,
  salsa : the1Salsa,
  toppings : {
    topping0 : the1Toppings0,
    topping1 : the1Toppings1,
    topping2 : the1Toppings2
  }
};

const theDataOfFish = {
  ingredients : the2Ingredients,
  salsa : the2Salsa,
  toppings : {
    topping0 : the2Toppings0,
    topping1 : the2Toppings1,
    topping2 : the2Toppings2
  }
};
// console.log(theDataOfChicken, theDataOfBeef, theDataOfFish);


var theData = theDataOfChicken;
var theName = recipe[0].name;

app.post("/recipe", (req, res) => {
  var theChicken = req.body["chicken"];
  var theBeef = req.body["beef"];
  var theFish = req.body["fish"];

  if (theChicken) {
    theData = theDataOfChicken
    theName = recipe[0].name
  } else if (theBeef) {
    theData = theDataOfBeef
    theName = recipe[1].name
  } else if (theFish) {
    theData = theDataOfFish
    theName = recipe[2].name
  };

//  console.log(theData,theName);
  
  //Step 3: Write your code here to make this behave like the solution website.
  //Step 4: Add code to views/index.ejs to use the recieved recipe object.
  res.render("index.ejs", {
    chicken: theChicken,
    beef: theBeef,
    fish: theFish,

    data: theData,
    name: theName
  })
});

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
