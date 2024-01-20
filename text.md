 
 
 
        👇NEW version👇


<!-- THIS ONE IS FOR INDEX.EJS-->
<% if (locals.name) { %>
      <h2> <%= name %></h2>
      <h3>Ingredients:</h3>
      <ul id="ingredientsList">
        <li> <%= data.ingredients %></li>
        <li> <%= data.salsa %></li>
        <li> <%= data.toppings.topping0 %></li>
        <li> <%= data.toppings.topping1 %></li>
        <li> <%= data.toppings.topping2 %></li>
        <li> <%= data.toppings.topping3 %></li>
      </ul>
    <% } else { %>
      <h2>Pick your favourite taco ingredient 👆</h2>
    <% } %>  



<!-- THIS ONE IS ON TOP OF APP.POST-->
var theData = theDataOfChicken;
var theName = recipe[0].name;

<!-- THIS ONE IS INSIDE APP.POST(right after req.body) -->
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

<!-- THIS ONE IS INSIDE RES.RENDER (IN APP.POST), RENDERED AS AN OUTPUT TO AN EJS TEMPLATE-->
data: theData,
name: theName,



                    👇ARCHIVE OF PREVIOUS DATA👇

<!-- INSIDE THE APP.POST -->
res.render("index.ejs", {
    name0: the0Name,
    name1: the1Name,
    name2: the2Name,

    chicken: theChicken,
    beef: theBeef,
    fish: theFish,
    

    dataOfChicken: theDataOfChicken,
    dataOfBeef: theDataOfBeef,
    dataOfFish: theDataOfFish
  })

  <!-- INSIDE AN INDEX.EJS FILE-->
<% if (locals.name0) { %>
      <h2> <%= name0 %></h2>
      <h3>Ingredients:</h3>
      <ul id="ingredientsList">
        <% if (chicken === "chicken") { %>
          <li> <%= dataOfChicken.ingredients %></li>
          <li> <%= dataOfChicken.salsa %></li>
          <li> <%= dataOfChicken.toppings.topping0 %></li>
          <li> <%= dataOfChicken.toppings.topping1 %></li>
          <li> <%= dataOfChicken.toppings.topping2 %></li>
          <li> <%= dataOfChicken.toppings.topping3 %></li>
          <% } else if (beef === "beef") { %>
            <li> <%= dataOfBeef.ingredients %></li>
            <li> <%= dataOfBeef.salsa %></li>
            <li> <%= dataOfBeef.toppings.topping0 %></li>
            <li> <%= dataOfBeef.toppings.topping1 %></li>
            <li> <%= dataOfBeef.toppings.topping2 %></li>
            <% } else if (fish === "fish") { %>
              <li> <%= dataOfFish.ingredients %></li>
              <li> <%= dataOfFish.salsa %></li>
              <li> <%= dataOfFish.toppings.topping0 %></li>
              <li> <%= dataOfFish.toppings.topping1 %></li>
              <li> <%= dataOfFish.toppings.topping2 %></li>
            <% } %>  
      </ul>
    <% } else { %>
      <h2>Pick your favourite taco ingredient 👆</h2>
    <% } %>