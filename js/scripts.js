function Pizza(sizeInput,pizzaToppings,pizzaPrice){
  this.sizeInput=sizeInput,
  this.pizzaToppings=pizzaToppings,
  this.pizzaPrice=pizzaPrice
}
Pizza.prototype.sizeCheck=function(){
  if (this.sizeInput==="small") {
    this.pizzaPrice+=10;
  }
  if(this.sizeInput==="medium"){
    this.pizzaPrice+=12;
  }
  if (this.sizeInput==="large") {
    this.pizzaPrice+=14;
  }
  alert(this.pizzaPrice);
};




$(document).ready(function(){
  $("form#formOne").submit(function(event){
    event.preventDefault();
    var sizeInput=$("input[name=size]:checked").val();
  //  alert(sizeInput);
    var pizzaToppings=$("input[name=toping]:checked").val();
  //  alert(pizzaToppings);
    var pizzaPrice=0;
    var thePizza=new Pizza(sizeInput,pizzaToppings,pizzaPrice);

});
});
