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
  if (this.size === "small") {
    this.sizePrice = 10;
  } else if (this.size === "medium") {
    this.sizePrice = 12;
  } else if (this.size === "large") {
    this.sizePrice = 14;
  } else {
    this.sizePrice = 16;
  }
}  

Pizza.prototype.addCost = function() {
  let toppingsCost = 0;
  this.toppingsPrice.forEach(function(element) {
    toppingsCost += element; 
  })
  return toppingsCost + this.sizePrice;
}

$(document).ready(function() {
  $("form#pizza-inputs").submit(function(event) {
    event.preventDefault();

    $("span").empty();
    $("ul").empty();
    $("#final-pizza-order").show();

    let userSize = $("#size-list").val();
    
    let userPizza = new Pizza(userSize);

    $("input:checkbox[class=one]:checked").each(function(){
      let checkedTopping = $(this).val();
      userPizza.addToppings(checkedTopping, 1);
      });
        
    $("input:checkbox[class=two]:checked").each(function(){
      let checkedTopping = $(this).val();
      userPizza.addToppings(checkedTopping, 2);
      });

    $("input:checkbox[name=toppings]:checked").each(function(){
      let toppings = $(this).val();
      $('#test').append(toppings + "<br>");
    });

    userPizza.addSize();

    let size = $("#size-list").val();
    $("#pizzaSize").append(size);

    let cost = userPizza.addCost();
    $("#pizzaCost").append(cost);

  });
});
