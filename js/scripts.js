//Business Logic 
function Pizza(size, sizePrice) {
  this.toppings = {};
  this.size = size;
  this.sizePrice = sizePrice;
}

function Toppings(topping, price) {
  this.topping = topping,
  this.price = price
}

Pizza.prototype.addTopping = function(toppingObject, topping) {  
  this.toppings[topping] = toppingObject;
}

Pizza.prototype.addSize = function() {
  let userSize = $("#size-list").val();
  this.size = userSize;
  if (userSize === "small") {
    this.sizePrice = 10;
  } else if (userSize === "medium") {
    this.sizePrice = 12;
  } else if (userSize === "large") {
    this.sizePrice = 14;
  } else {
    this.sizePrice = 16;
  }
}  

function addCost(pizzaObject) {
  let toppingsCost = 0;
  let userObject = pizzaObject["toppings"];
  console.log(userObject)
  Object.keys(userObject).forEach(function(key) {
    console.log(key)
    console.log(this.key["price"])

    toppingsCost += key["price"];
  });  
  return toppingsCost + pizzaObject.sizePrice;
  console.log(pizzaObject.sizePrice);
  // Pizza.toppings[key].price

  // return + this.sizePrice;

}

let myPizza = {
  toppings: {
    spinach: {
      userTopping: "spinach",
      price: 1
    },
    pepperoni: {
      userTopping: "pepperoni",
      price: 2
    },
  },

  size: {
    userSize: "small",
    price: 10 
  }
}

//UI Logic
$(document).ready(function() {
  $("form#pizza-inputs").submit(function(event) {
    event.preventDefault();

    $("span").empty();
    $("ul").empty();
    $("#final-pizza-order").show();
    //instantiate pizza object, create variable for pizza cost, add size to pizza object 
    let userPizza = new Pizza();
    //push size into object 
    userPizza.addSize();

    // let pizzaCost = userPizza.cost();

    //add toppings into pizza object
    $("input:checkbox[class=one]:checked").each(function(){
      let checkedTopping = $(this).val();
      let newTopping = new Toppings(checkedTopping, 1);
      userPizza.addTopping(newTopping, checkedTopping);
      });
        
    $("input:checkbox[class=two]:checked").each(function(){
      let checkedTopping = $(this).val();
      let newTopping = new Toppings(checkedTopping, 2);
      userPizza.addTopping(newTopping, checkedTopping);
      });

    //show toppings to user
    $("input:checkbox[name=toppings]:checked").each(function(){
      let toppings = $(this).val();
      $('#test').append(toppings + "<br>");
    });
    //show size to user
    let size = $("#size-list").val();
    $("#pizzaSize").append(size);
    //show cost to user
    //$("#pizzaCost").append(pizzaCost);

    console.log(userPizza);

    let cost = addCost(userPizza);
    console.log(cost)
  });
});
