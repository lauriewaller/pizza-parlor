
function Pizza() { //need parameters? should this just have empty arrays? 
  this.toppings = {
    //this.topping = {},
    //this.price = price;
  };
  this.size = {

  };
}
let userPizza = new Pizza();

let samplePizza2 = {
  toppings: {
    pepperoni: 2,
    sausage: 2,
    spinach: 1
  },

  size: {
    small: 10,
  }
}
let test1 = samplePizza2.toppings.pepperoni

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

Pizza.prototype.cost = function() {
  return 
  //use foreach? 
}

//1. when user submits, push each topping into object. push topping price into object 
//2. push value of size into object. push size price into object. 
  //if class for topping = "", push price by class amount 
  //if class for size = "", push price into object 

//then write loop to iterate through each key and add price, return price 
//then use .text to return object values 

$(document).ready(function() {
  $("form#pizza-inputs").submit(function(event) {
    event.preventDefault();

    $("#final-pizza-order").show();
    
    $("input:checkbox[name=toppings]:checked").each(function(){
      let toppings = $(this).val();
      $('#test').append(toppings + "<br>");
    });

    $("input:checkbox[name=size]:checked").each(function(){
      let size = $(this).val();
      $('#pizzaSize').append(size);
    });

    

  });
});


    //test code: to be deleted 
    console.log(test1)
    // $("#test").text("hi");
    // console.log("hi")
    // let radio = $("input:checkbox[name=toppings]:checked")
    // console.log(radio);


//   });
// });
