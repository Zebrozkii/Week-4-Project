function Pizza(inputtedSize,inputtedTopping){
  this.size=size,
  this.toppings=topping;
  this.pizzaPrice=10;
};

Pizza.prototype.checkSize=function(){

  if( this.size===12){
this.pizzaPrice=10;
}else if (this.size=14) {
this.pizzaPrice=12;
  }else{
pizzaPrice=14;
  }
  return this.pizzaPrice;
};
Pizza.prototype.checkToppings=function(){
  if(this.toppings===1){
    this.pizzaPrice+=2;
  }else if (this.toppings>=2) {
    this.pizzaPrice+=5;
  }
};


$(document).ready(function(){
  $("form#formOne").submit(function(event){
    event.preventDefault();
    var inputtedSize=$("#size").val();
    var inputtedTopping=$("#topping").val();
    var newPizza=new Pizza(inputtedSize, inputtedTopping);
  });
});
