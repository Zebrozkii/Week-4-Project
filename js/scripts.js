function Pizza(){
  this.size=size,
  this.toppings=toppings;
};
var pizza=new Pizza();
Pizza.prototype.checkSize=function(){
  if(size===12){
    price=10;
  }else if (size=14) {
    price=12
  }else{
    price=14
  }
}

$(document).ready(function(){
  $("form#formOne").submit(function(event){
    event.preventDefault();
  })
});
