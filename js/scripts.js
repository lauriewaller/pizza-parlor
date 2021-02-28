//Business Logic 
function Pizza(size, sizePrice) {
  this.toppings = [];
  this.toppingsPrice = [];
  this.size = size;
  this.sizePrice = sizePrice;
}

Pizza.prototype.addToppings = function(topping, price) {
  this.toppings.push(topping);
  this.toppingsPrice.push(price);
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

Pizza.prototype.addCost = function() {
  let toppingsCost = 0;
  let index = 0;
  //let array = Pizza.array;
  Pizza[this.toppingsPrice].forEach(function(index) {
    toppingsCost += this.toppingsPrice[index]; 
  })
  console.log(toppingsCost)
  console.log(this.sizePrice)
  return toppingsCost + this.sizePrice;
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

    

    $("input:checkbox[class=one]:checked").each(function(){
      let checkedTopping = $(this).val();
      userPizza.addToppings(checkedTopping, 1);
      });
        
    $("input:checkbox[class=two]:checked").each(function(){
      let checkedTopping = $(this).val();
      userPizza.addToppings(checkedTopping, 2);
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
    let cost = userPizza.addCost();
    console.log(cost)
  });
});
