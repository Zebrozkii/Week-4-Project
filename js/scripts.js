function Pizza(){
  this.size=size,
  this.toppings=toppings;
};

Pizza.prototype.checkSize=function(inputtedSize,){

  if( inputtedSize===12){
pizzaPrice=10;
  }else if (size=14) {
pizzaPrice=12;
  }else{
pizzaPrice=14;
  }
  return pizzaPrice;
}
Pizza.prototype.checkToppings=function(){
  if(inputtingTopping===1){
    pizzaPrice+=2;
  }else if (inputtedTopping>=2) {
    pizzaPrice+=5;
  }
}

$(document).ready(function(){
  $("form#formOne").submit(function(event){
    event.preventDefault();
    var inputtedSize=$("#size").val();
    var inputtedTopping=$("#topping").val();
    var newPizza=new Pizza(inputtedSize, inputtedTopping);

  })
})
