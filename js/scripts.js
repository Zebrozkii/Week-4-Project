$(document).ready(function(){
function Pizza(sizeInput,toppingArr,pizzaPrice){
  this.sizeInput=sizeInput;
  this.toppingArr=toppingArr;
  this.pizzaPrice=pizzaPrice;
}
Pizza.prototype.sizeCheck=function(){
  if (this.sizeInput==="small") {
    this.pizzaPrice+=10;
console.log(this.pizzaPrice);
  }
  else if(this.sizeInput==="medium"){
    this.pizzaPrice+=12;
  }
  else{
    this.pizzaPrice+=14;
  }

};
Pizza.prototype.priceCheck=function(){
  for (var i = 0; i < this.toppingArr.length; i++) {
    if (this.toppingArr.length===0) {
      this.pizzaPrice=this.pizzaPrice;
    }else if (this.toppingArr.length===1) {
      this.pizzaPrice+=2;
    }else {
      this.pizzaPrice+=4;
    }
  }
  console.log(this.pizzaPrice);
};

  $("form#formOne").submit(function(event){
    event.preventDefault();
    var sizeInput=$("input[name=size]:checked").val();
  //  alert(sizeInput);
  var toppingArr=[];
  $("input[name=topping]:checked").each(function(){
      toppingArr.push($(this).val());
    });
   alert(toppingArr);
    var pizzaPrice=0;
    var thePizza=new Pizza(sizeInput,toppingArr,pizzaPrice);
    thePizza.sizeCheck();
    thePizza.priceCheck();
});
});
