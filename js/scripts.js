function Pizza() {
  this.toppings = [];
  this.size = "";
}

Pizza.prototype.addToppings = function(topping) {
  this.toppings.push(topping);
}

Pizza.prototype.cost = function() {
  //let cost = 0;
  let toppingsCost = this.toppings.length;
  let size = $("#size-list").val(); 
  let sizeCost = 10;
  if (size = "small") {
    //return cost + toppingsCost + sizeCost;
    return toppingsCost + sizeCost;
  } 

}


$(document).ready(function() {
  $("form#pizza-inputs").submit(function(event) {
    event.preventDefault();

    $("span").empty();

    $("#final-pizza-order").show();
    
    let userPizza = new Pizza();
    let pizzaCost = userPizza.cost();

    console.log(userPizza)

    $("input:checkbox[name=toppings]:checked").each(function(){
        let topping = $(this).val();
        userPizza.addToppings(topping);
      });

    //UI
    $("input:checkbox[name=toppings]:checked").each(function(){
      let toppings = $(this).val();
      $('#test').append(toppings + "<br>");
    });

    let size = $("#size-list").val();
    $('#pizzaSize').append(size);

    $('#pizzaCost').append(pizzaCost);

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


// function Pizza() { //need parameters? should this just have empty arrays? 
//   this.toppings = {
//     //this.topping = {},
//     //this.price = price;
//   };
//   this.size = {

//   };
// }