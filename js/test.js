

function Pizza() {
  this.toppings = {}; // this will remain named toppings
  this.size = {};
}

function Toppings(topping, price) {
  this.topping = topping,
  this.price = price
}

    $("input:checkbox[class=two]:checked").each(function(){
      let topping = $(this).val();
      console.log(topping)
      let newTopping = new Toppings(topping, 2);
      });

Pizza.prototype.addToppings = function(topping) {
  this.toppings[topping] = topping;
  this.price = 2;

  //this.toppings.push(topping);
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

this.size.price + this.toppings[topping].price

//create object 



Pizza.prototype.addSize = function(size) {
  let userSize = $("#size-list").val();
  this.size = userSize;
}

Pizza.prototype.cost = function() {
  //let cost = 0;
  let toppingsCost = this.toppings.length;
  console.log(toppingsCost)
  let sizeCost = 12;
  if (this.size = "small") {
    //return cost + toppingsCost + sizeCost;
    return toppingsCost + sizeCost;
  } 
}

-----------

//Business Logic 
function Pizza() {
  this.toppings = [];
  this.size = "";
}

Pizza.prototype.addToppings = function(topping) {
  this.toppings.push(topping);
}

Pizza.prototype.addSize = function(size) {
  let userSize = $("#size-list").val();
  this.size = userSize;
}

Pizza.prototype.cost = function() {
  //let cost = 0;
  let toppingsCost = this.toppings.length;
  console.log(toppingsCost)
  let sizeCost = 12;
  if (this.size = "small") {
    //return cost + toppingsCost + sizeCost;
    return toppingsCost + sizeCost;
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
    let pizzaCost = userPizza.cost();
    userPizza.addSize();

    //tbd
    console.log(userPizza)

    //add toppings into pizza object
    $("input:checkbox[name=toppings]:checked").each(function(){
      let topping = $(this).val();
      userPizza.addToppings(topping);
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
    $("#pizzaCost").append(pizzaCost);

    //this works!
    // $("input:checkbox[class=two]:checked").each(function(){
    //   let topping = $(this).val();
    //   console.log(topping)
    //   });

  });
});


// Pizza.prototype.create = function() {
//   let key = 
// }
// Object[key]

// a property for ordered???? boolean

// let samplePizza = {
//   toppings = {
//     pepperoni: {
//       topping: "pepperoni",
//       price: 2, 
//       ordered: false
//     },
//     sausage: {
//       topping: sausage,
//       price: 2
//     } 
//   },

//   size = {
//     small: {
//       size: "small",
//       price: 10
//     },
//     sausage: {
//       topping: sausage,
//       price: 2
//     } 
//   }
// };

// let usa = { 
//   name: "United States of America", 
//   cities: [pdx, sfo, sea] 
// };

// Pizza.prototype.cost = function() {
//   return 
//   //use foreach? 
// }

// push 


//1. when user submits, push each topping into object. push topping price into object 
//2. push value of size into object. push size price into object. 
  //if class for topping = "", push price by class amount 
  //if class for size = "", push price into object 

//then write loop to iterate through each key and add price, return price 
//then use .text to return object values 



// let samplePizza2 = {
//   toppings: {
//     pepperoni: 2,
//     sausage: 2,
//     spinach: 1
//   },

//   size: {
//     small: 10,
//   }
// }
// let test1 = samplePizza2.toppings.pepperoni


// Pizza.prototype.addToppings = function() {
//   $("input:checkbox[name=toppings]:checked").each(function(){
//     let topping = $(this).val();
//     this.toppings.push(topping);
// });
// }


function Pizza() {
  this.toppings = {};
  this.size = {};
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

+ this.topping.price


Pizza.prototype.addToppings = function(topping) {
  let 
  this.toppings.push(topping);
}

Pizza.prototype.addSize = function(size) {
  let userSize = $("#size-list").val();
  this.size = userSize;
}

Pizza.prototype.cost = function() {
  //let cost = 0;
  let toppingsCost = this.toppings.length;
  console.log(toppingsCost)
  let sizeCost = 12;
  if (this.size = "small") {
    //return cost + toppingsCost + sizeCost;
    return toppingsCost + sizeCost;
  } 
}