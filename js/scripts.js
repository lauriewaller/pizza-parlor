//Business Logic 
function Pizza(size, sizePrice) {
  this.toppings = {}; // this will remain named toppings
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
  } else if (userSize === "medium") {
    this.sizePrice = 14;
  } else {
    this.sizePrice = 16;
  }
}  

Pizza.prototype.cost = function() {
  Object.keys(Pizza.toppings)

  //return + this.sizePrice;

}

let myPizza = {
  toppings: {
    spinach: {
      userTopping: "spinach",
      price: 1
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
    userPizza.addSize();

    // let pizzaCost = userPizza.cost();


    //tbd
    // console.log(userPizza)
    //add toppings into pizza object
    //push toppings with 1 into object
    $("input:checkbox[class=one]:checked").each(function(){
      let checkedTopping = $(this).val();
      let newTopping = new Toppings(checkedTopping, 1);
      userPizza.addTopping(newTopping, checkedTopping);
      });
        
    //push toppings with 2 into object
    $("input:checkbox[class=two]:checked").each(function(){
      let checkedTopping = $(this).val();
      let newTopping = new Toppings(checkedTopping, 2);
      userPizza.addTopping(newTopping, checkedTopping);
      });

    //push size into object  

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

    // $("input:checkbox[class=two]:checked").each(function(){
    //   let topping = $(this).val();
    //   console.log(topping)
    //   });
    console.log(userPizza);
  });
});
