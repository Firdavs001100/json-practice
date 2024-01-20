 
 
 
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